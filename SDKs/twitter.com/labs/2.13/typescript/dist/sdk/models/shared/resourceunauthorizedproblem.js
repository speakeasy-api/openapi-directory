"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUnauthorizedProblem = exports.ResourceUnauthorizedProblemSectionEnum = exports.ResourceUnauthorizedProblemResourceTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ResourceUnauthorizedProblemResourceTypeEnum;
(function (ResourceUnauthorizedProblemResourceTypeEnum) {
    ResourceUnauthorizedProblemResourceTypeEnum["Tweet"] = "tweet";
    ResourceUnauthorizedProblemResourceTypeEnum["User"] = "user";
    ResourceUnauthorizedProblemResourceTypeEnum["Media"] = "media";
})(ResourceUnauthorizedProblemResourceTypeEnum = exports.ResourceUnauthorizedProblemResourceTypeEnum || (exports.ResourceUnauthorizedProblemResourceTypeEnum = {}));
var ResourceUnauthorizedProblemSectionEnum;
(function (ResourceUnauthorizedProblemSectionEnum) {
    ResourceUnauthorizedProblemSectionEnum["Data"] = "data";
    ResourceUnauthorizedProblemSectionEnum["Includes"] = "includes";
})(ResourceUnauthorizedProblemSectionEnum = exports.ResourceUnauthorizedProblemSectionEnum || (exports.ResourceUnauthorizedProblemSectionEnum = {}));
// ResourceUnauthorizedProblem
/**
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc.
**/
var ResourceUnauthorizedProblem = /** @class */ (function (_super) {
    __extends(ResourceUnauthorizedProblem, _super);
    function ResourceUnauthorizedProblem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], ResourceUnauthorizedProblem.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", String)
    ], ResourceUnauthorizedProblem.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ResourceUnauthorizedProblem.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=section" }),
        __metadata("design:type", String)
    ], ResourceUnauthorizedProblem.prototype, "section", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ResourceUnauthorizedProblem.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ResourceUnauthorizedProblem.prototype, "type", void 0);
    return ResourceUnauthorizedProblem;
}(utils_1.SpeakeasyBase));
exports.ResourceUnauthorizedProblem = ResourceUnauthorizedProblem;
