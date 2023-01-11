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
exports.GetShipmentByExternalIdResponseBody = exports.GetShipmentByExternalIdResponseBodyWeight = exports.GetShipmentByExternalIdResponseBodyInternationalShipmentOptions = void 0;
var utils_1 = require("../../../internal/utils");
var customsitem_1 = require("./customsitem");
var weightunitenum_1 = require("./weightunitenum");
var advancedshipmentoptions_1 = require("./advancedshipmentoptions");
var shipmentitem_1 = require("./shipmentitem");
var ordersourcenameenum_1 = require("./ordersourcenameenum");
var package_1 = require("./package");
var address_1 = require("./address");
var tag_1 = require("./tag");
// GetShipmentByExternalIdResponseBodyInternationalShipmentOptions
/**
 * Options for international shipments, such as customs declarations.
**/
var GetShipmentByExternalIdResponseBodyInternationalShipmentOptions = /** @class */ (function (_super) {
    __extends(GetShipmentByExternalIdResponseBodyInternationalShipmentOptions, _super);
    function GetShipmentByExternalIdResponseBodyInternationalShipmentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contents" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBodyInternationalShipmentOptions.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs_items", elemType: customsitem_1.CustomsItem }),
        __metadata("design:type", Array)
    ], GetShipmentByExternalIdResponseBodyInternationalShipmentOptions.prototype, "customsItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_delivery" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBodyInternationalShipmentOptions.prototype, "nonDelivery", void 0);
    return GetShipmentByExternalIdResponseBodyInternationalShipmentOptions;
}(utils_1.SpeakeasyBase));
exports.GetShipmentByExternalIdResponseBodyInternationalShipmentOptions = GetShipmentByExternalIdResponseBodyInternationalShipmentOptions;
// GetShipmentByExternalIdResponseBodyWeight
/**
 * The weight of a package
**/
var GetShipmentByExternalIdResponseBodyWeight = /** @class */ (function (_super) {
    __extends(GetShipmentByExternalIdResponseBodyWeight, _super);
    function GetShipmentByExternalIdResponseBodyWeight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GetShipmentByExternalIdResponseBodyWeight.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], GetShipmentByExternalIdResponseBodyWeight.prototype, "value", void 0);
    return GetShipmentByExternalIdResponseBodyWeight;
}(utils_1.SpeakeasyBase));
exports.GetShipmentByExternalIdResponseBodyWeight = GetShipmentByExternalIdResponseBodyWeight;
// GetShipmentByExternalIdResponseBody
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
var GetShipmentByExternalIdResponseBody = /** @class */ (function (_super) {
    __extends(GetShipmentByExternalIdResponseBody, _super);
    function GetShipmentByExternalIdResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=advanced_options" }),
        __metadata("design:type", advancedshipmentoptions_1.AdvancedShipmentOptions)
    ], GetShipmentByExternalIdResponseBody.prototype, "advancedOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", String)
    ], GetShipmentByExternalIdResponseBody.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmation" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBody.prototype, "confirmation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBody.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs" }),
        __metadata("design:type", GetShipmentByExternalIdResponseBodyInternationalShipmentOptions)
    ], GetShipmentByExternalIdResponseBody.prototype, "customs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_order_id" }),
        __metadata("design:type", String)
    ], GetShipmentByExternalIdResponseBody.prototype, "externalOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_shipment_id" }),
        __metadata("design:type", String)
    ], GetShipmentByExternalIdResponseBody.prototype, "externalShipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_provider" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBody.prototype, "insuranceProvider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shipmentitem_1.ShipmentItem }),
        __metadata("design:type", Array)
    ], GetShipmentByExternalIdResponseBody.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_at" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBody.prototype, "modifiedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_source_code" }),
        __metadata("design:type", String)
    ], GetShipmentByExternalIdResponseBody.prototype, "orderSourceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packages", elemType: package_1.Package }),
        __metadata("design:type", Array)
    ], GetShipmentByExternalIdResponseBody.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=return_to" }),
        __metadata("design:type", address_1.Address)
    ], GetShipmentByExternalIdResponseBody.prototype, "returnTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], GetShipmentByExternalIdResponseBody.prototype, "serviceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], GetShipmentByExternalIdResponseBody.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_from" }),
        __metadata("design:type", address_1.Address)
    ], GetShipmentByExternalIdResponseBody.prototype, "shipFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_to" }),
        __metadata("design:type", address_1.Address)
    ], GetShipmentByExternalIdResponseBody.prototype, "shipTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_id" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBody.prototype, "shipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_status" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBody.prototype, "shipmentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], GetShipmentByExternalIdResponseBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_weight" }),
        __metadata("design:type", GetShipmentByExternalIdResponseBodyWeight)
    ], GetShipmentByExternalIdResponseBody.prototype, "totalWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], GetShipmentByExternalIdResponseBody.prototype, "warehouseId", void 0);
    return GetShipmentByExternalIdResponseBody;
}(utils_1.SpeakeasyBase));
exports.GetShipmentByExternalIdResponseBody = GetShipmentByExternalIdResponseBody;
