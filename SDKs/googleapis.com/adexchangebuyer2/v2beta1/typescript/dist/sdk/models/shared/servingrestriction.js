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
exports.ServingRestriction = exports.ServingRestrictionStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var servingcontext_1 = require("./servingcontext");
var disapproval_1 = require("./disapproval");
var ServingRestrictionStatusEnum;
(function (ServingRestrictionStatusEnum) {
    ServingRestrictionStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    ServingRestrictionStatusEnum["Disapproval"] = "DISAPPROVAL";
    ServingRestrictionStatusEnum["PendingReview"] = "PENDING_REVIEW";
})(ServingRestrictionStatusEnum = exports.ServingRestrictionStatusEnum || (exports.ServingRestrictionStatusEnum = {}));
// ServingRestriction
/**
 * Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
**/
var ServingRestriction = /** @class */ (function (_super) {
    __extends(ServingRestriction, _super);
    function ServingRestriction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contexts", elemType: servingcontext_1.ServingContext }),
        __metadata("design:type", Array)
    ], ServingRestriction.prototype, "contexts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disapproval" }),
        __metadata("design:type", disapproval_1.Disapproval)
    ], ServingRestriction.prototype, "disapproval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disapprovalReasons", elemType: disapproval_1.Disapproval }),
        __metadata("design:type", Array)
    ], ServingRestriction.prototype, "disapprovalReasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ServingRestriction.prototype, "status", void 0);
    return ServingRestriction;
}(utils_1.SpeakeasyBase));
exports.ServingRestriction = ServingRestriction;
