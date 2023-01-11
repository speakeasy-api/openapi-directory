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
exports.ApiPeriodUsageOut = void 0;
var utils_1 = require("../../../internal/utils");
var apibillingperiodusageout_1 = require("./apibillingperiodusageout");
var apiplansubscriptionout_1 = require("./apiplansubscriptionout");
var ApiPeriodUsageOut = /** @class */ (function (_super) {
    __extends(ApiPeriodUsageOut, _super);
    function ApiPeriodUsageOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriod" }),
        __metadata("design:type", apibillingperiodusageout_1.ApiBillingPeriodUsageOut)
    ], ApiPeriodUsageOut.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overageCurrency" }),
        __metadata("design:type", String)
    ], ApiPeriodUsageOut.prototype, "overageCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overageExclTax" }),
        __metadata("design:type", Number)
    ], ApiPeriodUsageOut.prototype, "overageExclTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overageInclTax" }),
        __metadata("design:type", Number)
    ], ApiPeriodUsageOut.prototype, "overageInclTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overageQuantity" }),
        __metadata("design:type", Number)
    ], ApiPeriodUsageOut.prototype, "overageQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription" }),
        __metadata("design:type", apiplansubscriptionout_1.ApiPlanSubscriptionOut)
    ], ApiPeriodUsageOut.prototype, "subscription", void 0);
    return ApiPeriodUsageOut;
}(utils_1.SpeakeasyBase));
exports.ApiPeriodUsageOut = ApiPeriodUsageOut;
