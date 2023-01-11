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
exports.UpdateNetworkWirelessBillingResponse = exports.UpdateNetworkWirelessBillingRequest = exports.UpdateNetworkWirelessBillingRequestBody = exports.UpdateNetworkWirelessBillingRequestBodyPlans = exports.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = exports.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits = exports.UpdateNetworkWirelessBillingPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkWirelessBillingPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBillingPathParams, _super);
    function UpdateNetworkWirelessBillingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBillingPathParams.prototype, "networkId", void 0);
    return UpdateNetworkWirelessBillingPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessBillingPathParams = UpdateNetworkWirelessBillingPathParams;
// UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits
/**
 * The uplink bandwidth settings for the pricing plan.
**/
var UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits, _super);
    function UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits.prototype, "limitUp", void 0);
    return UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits = UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
var UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;
(function (UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum) {
    UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum["OneHour"] = "1 hour";
    UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum["OneDay"] = "1 day";
    UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum["OneWeek"] = "1 week";
    UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum["ThirtyDays"] = "30 days";
})(UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = exports.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum || (exports.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = {}));
var UpdateNetworkWirelessBillingRequestBodyPlans = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBillingRequestBodyPlans, _super);
    function UpdateNetworkWirelessBillingRequestBodyPlans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits)
    ], UpdateNetworkWirelessBillingRequestBodyPlans.prototype, "bandwidthLimits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBillingRequestBodyPlans.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessBillingRequestBodyPlans.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeLimit" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBillingRequestBodyPlans.prototype, "timeLimit", void 0);
    return UpdateNetworkWirelessBillingRequestBodyPlans;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessBillingRequestBodyPlans = UpdateNetworkWirelessBillingRequestBodyPlans;
var UpdateNetworkWirelessBillingRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBillingRequestBody, _super);
    function UpdateNetworkWirelessBillingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBillingRequestBody.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plans", elemType: UpdateNetworkWirelessBillingRequestBodyPlans }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessBillingRequestBody.prototype, "plans", void 0);
    return UpdateNetworkWirelessBillingRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessBillingRequestBody = UpdateNetworkWirelessBillingRequestBody;
var UpdateNetworkWirelessBillingRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBillingRequest, _super);
    function UpdateNetworkWirelessBillingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkWirelessBillingPathParams)
    ], UpdateNetworkWirelessBillingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessBillingRequestBody)
    ], UpdateNetworkWirelessBillingRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessBillingRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessBillingRequest = UpdateNetworkWirelessBillingRequest;
var UpdateNetworkWirelessBillingResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBillingResponse, _super);
    function UpdateNetworkWirelessBillingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBillingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessBillingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkWirelessBillingResponse.prototype, "updateNetworkWirelessBilling200ApplicationJSONObject", void 0);
    return UpdateNetworkWirelessBillingResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkWirelessBillingResponse = UpdateNetworkWirelessBillingResponse;
