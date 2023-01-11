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
exports.AddressValidatingShipmentInput = exports.AddressValidatingShipmentInternationalShipmentOptionsInput = void 0;
var utils_1 = require("../../../internal/utils");
var customsitem_1 = require("./customsitem");
var advancedshipmentoptions_1 = require("./advancedshipmentoptions");
var shipmentitem_1 = require("./shipmentitem");
var ordersourcenameenum_1 = require("./ordersourcenameenum");
var package_1 = require("./package");
var address_1 = require("./address");
// AddressValidatingShipmentInternationalShipmentOptionsInput
/**
 * Options for international shipments, such as customs declarations.
**/
var AddressValidatingShipmentInternationalShipmentOptionsInput = /** @class */ (function (_super) {
    __extends(AddressValidatingShipmentInternationalShipmentOptionsInput, _super);
    function AddressValidatingShipmentInternationalShipmentOptionsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contents" }),
        __metadata("design:type", Object)
    ], AddressValidatingShipmentInternationalShipmentOptionsInput.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs_items", elemType: customsitem_1.CustomsItemInput }),
        __metadata("design:type", Array)
    ], AddressValidatingShipmentInternationalShipmentOptionsInput.prototype, "customsItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_delivery" }),
        __metadata("design:type", Object)
    ], AddressValidatingShipmentInternationalShipmentOptionsInput.prototype, "nonDelivery", void 0);
    return AddressValidatingShipmentInternationalShipmentOptionsInput;
}(utils_1.SpeakeasyBase));
exports.AddressValidatingShipmentInternationalShipmentOptionsInput = AddressValidatingShipmentInternationalShipmentOptionsInput;
// AddressValidatingShipmentInput
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
var AddressValidatingShipmentInput = /** @class */ (function (_super) {
    __extends(AddressValidatingShipmentInput, _super);
    function AddressValidatingShipmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=advanced_options" }),
        __metadata("design:type", advancedshipmentoptions_1.AdvancedShipmentOptions)
    ], AddressValidatingShipmentInput.prototype, "advancedOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", String)
    ], AddressValidatingShipmentInput.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmation" }),
        __metadata("design:type", Object)
    ], AddressValidatingShipmentInput.prototype, "confirmation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs" }),
        __metadata("design:type", AddressValidatingShipmentInternationalShipmentOptionsInput)
    ], AddressValidatingShipmentInput.prototype, "customs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_order_id" }),
        __metadata("design:type", String)
    ], AddressValidatingShipmentInput.prototype, "externalOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_shipment_id" }),
        __metadata("design:type", String)
    ], AddressValidatingShipmentInput.prototype, "externalShipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_provider" }),
        __metadata("design:type", Object)
    ], AddressValidatingShipmentInput.prototype, "insuranceProvider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shipmentitem_1.ShipmentItem }),
        __metadata("design:type", Array)
    ], AddressValidatingShipmentInput.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_source_code" }),
        __metadata("design:type", String)
    ], AddressValidatingShipmentInput.prototype, "orderSourceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packages", elemType: package_1.PackageInput }),
        __metadata("design:type", Array)
    ], AddressValidatingShipmentInput.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=return_to" }),
        __metadata("design:type", address_1.Address)
    ], AddressValidatingShipmentInput.prototype, "returnTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], AddressValidatingShipmentInput.prototype, "serviceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], AddressValidatingShipmentInput.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_from" }),
        __metadata("design:type", address_1.Address)
    ], AddressValidatingShipmentInput.prototype, "shipFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_to" }),
        __metadata("design:type", address_1.Address)
    ], AddressValidatingShipmentInput.prototype, "shipTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validate_address" }),
        __metadata("design:type", Object)
    ], AddressValidatingShipmentInput.prototype, "validateAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], AddressValidatingShipmentInput.prototype, "warehouseId", void 0);
    return AddressValidatingShipmentInput;
}(utils_1.SpeakeasyBase));
exports.AddressValidatingShipmentInput = AddressValidatingShipmentInput;
