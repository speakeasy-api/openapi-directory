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
exports.BasePlanInput = exports.BasePlan = exports.BasePlanStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var autorenewingbaseplantype_1 = require("./autorenewingbaseplantype");
var offertag_1 = require("./offertag");
var otherregionsbaseplanconfig_1 = require("./otherregionsbaseplanconfig");
var prepaidbaseplantype_1 = require("./prepaidbaseplantype");
var regionalbaseplanconfig_1 = require("./regionalbaseplanconfig");
var BasePlanStateEnum;
(function (BasePlanStateEnum) {
    BasePlanStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BasePlanStateEnum["Draft"] = "DRAFT";
    BasePlanStateEnum["Active"] = "ACTIVE";
    BasePlanStateEnum["Inactive"] = "INACTIVE";
})(BasePlanStateEnum = exports.BasePlanStateEnum || (exports.BasePlanStateEnum = {}));
// BasePlan
/**
 * A single base plan for a subscription.
**/
var BasePlan = /** @class */ (function (_super) {
    __extends(BasePlan, _super);
    function BasePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRenewingBasePlanType" }),
        __metadata("design:type", autorenewingbaseplantype_1.AutoRenewingBasePlanType)
    ], BasePlan.prototype, "autoRenewingBasePlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basePlanId" }),
        __metadata("design:type", String)
    ], BasePlan.prototype, "basePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerTags", elemType: offertag_1.OfferTag }),
        __metadata("design:type", Array)
    ], BasePlan.prototype, "offerTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=otherRegionsConfig" }),
        __metadata("design:type", otherregionsbaseplanconfig_1.OtherRegionsBasePlanConfig)
    ], BasePlan.prototype, "otherRegionsConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prepaidBasePlanType" }),
        __metadata("design:type", prepaidbaseplantype_1.PrepaidBasePlanType)
    ], BasePlan.prototype, "prepaidBasePlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regionalConfigs", elemType: regionalbaseplanconfig_1.RegionalBasePlanConfig }),
        __metadata("design:type", Array)
    ], BasePlan.prototype, "regionalConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], BasePlan.prototype, "state", void 0);
    return BasePlan;
}(utils_1.SpeakeasyBase));
exports.BasePlan = BasePlan;
// BasePlanInput
/**
 * A single base plan for a subscription.
**/
var BasePlanInput = /** @class */ (function (_super) {
    __extends(BasePlanInput, _super);
    function BasePlanInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRenewingBasePlanType" }),
        __metadata("design:type", autorenewingbaseplantype_1.AutoRenewingBasePlanType)
    ], BasePlanInput.prototype, "autoRenewingBasePlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basePlanId" }),
        __metadata("design:type", String)
    ], BasePlanInput.prototype, "basePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerTags", elemType: offertag_1.OfferTag }),
        __metadata("design:type", Array)
    ], BasePlanInput.prototype, "offerTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=otherRegionsConfig" }),
        __metadata("design:type", otherregionsbaseplanconfig_1.OtherRegionsBasePlanConfig)
    ], BasePlanInput.prototype, "otherRegionsConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prepaidBasePlanType" }),
        __metadata("design:type", prepaidbaseplantype_1.PrepaidBasePlanType)
    ], BasePlanInput.prototype, "prepaidBasePlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regionalConfigs", elemType: regionalbaseplanconfig_1.RegionalBasePlanConfig }),
        __metadata("design:type", Array)
    ], BasePlanInput.prototype, "regionalConfigs", void 0);
    return BasePlanInput;
}(utils_1.SpeakeasyBase));
exports.BasePlanInput = BasePlanInput;
