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
exports.CalculateRatesResponseBody = exports.CalculateRatesResponseBodyWeight = exports.CalculateRatesResponseBodyInternationalShipmentOptions = void 0;
var utils_1 = require("../../../internal/utils");
var customsitem_1 = require("./customsitem");
var weightunitenum_1 = require("./weightunitenum");
var advancedshipmentoptions_1 = require("./advancedshipmentoptions");
var shipmentitem_1 = require("./shipmentitem");
var ordersourcenameenum_1 = require("./ordersourcenameenum");
var package_1 = require("./package");
var ratesinformation_1 = require("./ratesinformation");
var address_1 = require("./address");
var tag_1 = require("./tag");
// CalculateRatesResponseBodyInternationalShipmentOptions
/**
 * Options for international shipments, such as customs declarations.
**/
var CalculateRatesResponseBodyInternationalShipmentOptions = /** @class */ (function (_super) {
    __extends(CalculateRatesResponseBodyInternationalShipmentOptions, _super);
    function CalculateRatesResponseBodyInternationalShipmentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contents" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBodyInternationalShipmentOptions.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs_items", elemType: customsitem_1.CustomsItem }),
        __metadata("design:type", Array)
    ], CalculateRatesResponseBodyInternationalShipmentOptions.prototype, "customsItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_delivery" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBodyInternationalShipmentOptions.prototype, "nonDelivery", void 0);
    return CalculateRatesResponseBodyInternationalShipmentOptions;
}(utils_1.SpeakeasyBase));
exports.CalculateRatesResponseBodyInternationalShipmentOptions = CalculateRatesResponseBodyInternationalShipmentOptions;
// CalculateRatesResponseBodyWeight
/**
 * The weight of a package
**/
var CalculateRatesResponseBodyWeight = /** @class */ (function (_super) {
    __extends(CalculateRatesResponseBodyWeight, _super);
    function CalculateRatesResponseBodyWeight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], CalculateRatesResponseBodyWeight.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], CalculateRatesResponseBodyWeight.prototype, "value", void 0);
    return CalculateRatesResponseBodyWeight;
}(utils_1.SpeakeasyBase));
exports.CalculateRatesResponseBodyWeight = CalculateRatesResponseBodyWeight;
// CalculateRatesResponseBody
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
var CalculateRatesResponseBody = /** @class */ (function (_super) {
    __extends(CalculateRatesResponseBody, _super);
    function CalculateRatesResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=advanced_options" }),
        __metadata("design:type", advancedshipmentoptions_1.AdvancedShipmentOptions)
    ], CalculateRatesResponseBody.prototype, "advancedOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", String)
    ], CalculateRatesResponseBody.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmation" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBody.prototype, "confirmation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBody.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs" }),
        __metadata("design:type", CalculateRatesResponseBodyInternationalShipmentOptions)
    ], CalculateRatesResponseBody.prototype, "customs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_order_id" }),
        __metadata("design:type", String)
    ], CalculateRatesResponseBody.prototype, "externalOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_shipment_id" }),
        __metadata("design:type", String)
    ], CalculateRatesResponseBody.prototype, "externalShipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_provider" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBody.prototype, "insuranceProvider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shipmentitem_1.ShipmentItem }),
        __metadata("design:type", Array)
    ], CalculateRatesResponseBody.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_at" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBody.prototype, "modifiedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_source_code" }),
        __metadata("design:type", String)
    ], CalculateRatesResponseBody.prototype, "orderSourceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packages", elemType: package_1.Package }),
        __metadata("design:type", Array)
    ], CalculateRatesResponseBody.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate_response" }),
        __metadata("design:type", ratesinformation_1.RatesInformation)
    ], CalculateRatesResponseBody.prototype, "rateResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=return_to" }),
        __metadata("design:type", address_1.Address)
    ], CalculateRatesResponseBody.prototype, "returnTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], CalculateRatesResponseBody.prototype, "serviceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], CalculateRatesResponseBody.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_from" }),
        __metadata("design:type", address_1.Address)
    ], CalculateRatesResponseBody.prototype, "shipFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_to" }),
        __metadata("design:type", address_1.Address)
    ], CalculateRatesResponseBody.prototype, "shipTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_id" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBody.prototype, "shipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_status" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBody.prototype, "shipmentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], CalculateRatesResponseBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_weight" }),
        __metadata("design:type", CalculateRatesResponseBodyWeight)
    ], CalculateRatesResponseBody.prototype, "totalWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], CalculateRatesResponseBody.prototype, "warehouseId", void 0);
    return CalculateRatesResponseBody;
}(utils_1.SpeakeasyBase));
exports.CalculateRatesResponseBody = CalculateRatesResponseBody;
