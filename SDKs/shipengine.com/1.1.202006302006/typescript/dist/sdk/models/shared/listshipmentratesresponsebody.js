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
exports.ListShipmentRatesResponseBody = exports.ListShipmentRatesResponseBodyRate = exports.ListShipmentRatesResponseBodyRateMonetaryValue = void 0;
var utils_1 = require("../../../internal/utils");
var currencyenum_1 = require("./currencyenum");
var error_1 = require("./error");
// ListShipmentRatesResponseBodyRateMonetaryValue
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
var ListShipmentRatesResponseBodyRateMonetaryValue = /** @class */ (function (_super) {
    __extends(ListShipmentRatesResponseBodyRateMonetaryValue, _super);
    function ListShipmentRatesResponseBodyRateMonetaryValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ListShipmentRatesResponseBodyRateMonetaryValue.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRateMonetaryValue.prototype, "currency", void 0);
    return ListShipmentRatesResponseBodyRateMonetaryValue;
}(utils_1.SpeakeasyBase));
exports.ListShipmentRatesResponseBodyRateMonetaryValue = ListShipmentRatesResponseBodyRateMonetaryValue;
// ListShipmentRatesResponseBodyRate
/**
 * A rate
**/
var ListShipmentRatesResponseBodyRate = /** @class */ (function (_super) {
    __extends(ListShipmentRatesResponseBodyRate, _super);
    function ListShipmentRatesResponseBodyRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_code" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRate.prototype, "carrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_delivery_days" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRate.prototype, "carrierDeliveryDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_friendly_name" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRate.prototype, "carrierFriendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBodyRate.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_nickname" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRate.prototype, "carrierNickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmation_amount" }),
        __metadata("design:type", ListShipmentRatesResponseBodyRateMonetaryValue)
    ], ListShipmentRatesResponseBodyRate.prototype, "confirmationAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delivery_days" }),
        __metadata("design:type", Number)
    ], ListShipmentRatesResponseBodyRate.prototype, "deliveryDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_messages" }),
        __metadata("design:type", Array)
    ], ListShipmentRatesResponseBodyRate.prototype, "errorMessages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimated_delivery_date" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBodyRate.prototype, "estimatedDeliveryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=guaranteed_service" }),
        __metadata("design:type", Boolean)
    ], ListShipmentRatesResponseBodyRate.prototype, "guaranteedService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_amount" }),
        __metadata("design:type", ListShipmentRatesResponseBodyRateMonetaryValue)
    ], ListShipmentRatesResponseBodyRate.prototype, "insuranceAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=negotiated_rate" }),
        __metadata("design:type", Boolean)
    ], ListShipmentRatesResponseBodyRate.prototype, "negotiatedRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=other_amount" }),
        __metadata("design:type", ListShipmentRatesResponseBodyRateMonetaryValue)
    ], ListShipmentRatesResponseBodyRate.prototype, "otherAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_type" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRate.prototype, "packageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate_id" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBodyRate.prototype, "rateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate_type" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBodyRate.prototype, "rateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRate.prototype, "serviceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_type" }),
        __metadata("design:type", String)
    ], ListShipmentRatesResponseBodyRate.prototype, "serviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], ListShipmentRatesResponseBodyRate.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipping_amount" }),
        __metadata("design:type", ListShipmentRatesResponseBodyRateMonetaryValue)
    ], ListShipmentRatesResponseBodyRate.prototype, "shippingAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_amount" }),
        __metadata("design:type", ListShipmentRatesResponseBodyRateMonetaryValue)
    ], ListShipmentRatesResponseBodyRate.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackable" }),
        __metadata("design:type", Boolean)
    ], ListShipmentRatesResponseBodyRate.prototype, "trackable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validation_status" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBodyRate.prototype, "validationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warning_messages" }),
        __metadata("design:type", Array)
    ], ListShipmentRatesResponseBodyRate.prototype, "warningMessages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zone" }),
        __metadata("design:type", Number)
    ], ListShipmentRatesResponseBodyRate.prototype, "zone", void 0);
    return ListShipmentRatesResponseBodyRate;
}(utils_1.SpeakeasyBase));
exports.ListShipmentRatesResponseBodyRate = ListShipmentRatesResponseBodyRate;
// ListShipmentRatesResponseBody
/**
 * A rates information resource
**/
var ListShipmentRatesResponseBody = /** @class */ (function (_super) {
    __extends(ListShipmentRatesResponseBody, _super);
    function ListShipmentRatesResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBody.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], ListShipmentRatesResponseBody.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invalid_rates", elemType: ListShipmentRatesResponseBodyRate }),
        __metadata("design:type", Array)
    ], ListShipmentRatesResponseBody.prototype, "invalidRates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate_request_id" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBody.prototype, "rateRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rates", elemType: ListShipmentRatesResponseBodyRate }),
        __metadata("design:type", Array)
    ], ListShipmentRatesResponseBody.prototype, "rates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_id" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBody.prototype, "shipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], ListShipmentRatesResponseBody.prototype, "status", void 0);
    return ListShipmentRatesResponseBody;
}(utils_1.SpeakeasyBase));
exports.ListShipmentRatesResponseBody = ListShipmentRatesResponseBody;
