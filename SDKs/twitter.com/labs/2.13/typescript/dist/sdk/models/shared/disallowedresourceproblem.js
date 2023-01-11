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
exports.DisallowedResourceProblem = exports.DisallowedResourceProblemSectionEnum = exports.DisallowedResourceProblemResourceTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DisallowedResourceProblemResourceTypeEnum;
(function (DisallowedResourceProblemResourceTypeEnum) {
    DisallowedResourceProblemResourceTypeEnum["Tweet"] = "tweet";
    DisallowedResourceProblemResourceTypeEnum["Media"] = "media";
})(DisallowedResourceProblemResourceTypeEnum = exports.DisallowedResourceProblemResourceTypeEnum || (exports.DisallowedResourceProblemResourceTypeEnum = {}));
var DisallowedResourceProblemSectionEnum;
(function (DisallowedResourceProblemSectionEnum) {
    DisallowedResourceProblemSectionEnum["Data"] = "data";
    DisallowedResourceProblemSectionEnum["Includes"] = "includes";
})(DisallowedResourceProblemSectionEnum = exports.DisallowedResourceProblemSectionEnum || (exports.DisallowedResourceProblemSectionEnum = {}));
// DisallowedResourceProblem
/**
 * A problem that indicates that the resource requested violates the precepts of this API.
**/
var DisallowedResourceProblem = /** @class */ (function (_super) {
    __extends(DisallowedResourceProblem, _super);
    function DisallowedResourceProblem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DisallowedResourceProblem.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", String)
    ], DisallowedResourceProblem.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], DisallowedResourceProblem.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=section" }),
        __metadata("design:type", String)
    ], DisallowedResourceProblem.prototype, "section", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DisallowedResourceProblem.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DisallowedResourceProblem.prototype, "type", void 0);
    return DisallowedResourceProblem;
}(utils_1.SpeakeasyBase));
exports.DisallowedResourceProblem = DisallowedResourceProblem;
