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
exports.CreateLabelRequestBodyInput = exports.CreateLabelRequestBodyPartialShipmentInput = exports.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput = void 0;
var utils_1 = require("../../../internal/utils");
var customsitem_1 = require("./customsitem");
var advancedshipmentoptions_1 = require("./advancedshipmentoptions");
var shipmentitem_1 = require("./shipmentitem");
var ordersourcenameenum_1 = require("./ordersourcenameenum");
var package_1 = require("./package");
var address_1 = require("./address");
var labelchargeeventenum_1 = require("./labelchargeeventenum");
// CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput
/**
 * Options for international shipments, such as customs declarations.
**/
var CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput = /** @class */ (function (_super) {
    __extends(CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput, _super);
    function CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contents" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs_items", elemType: customsitem_1.CustomsItemInput }),
        __metadata("design:type", Array)
    ], CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput.prototype, "customsItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_delivery" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput.prototype, "nonDelivery", void 0);
    return CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput;
}(utils_1.SpeakeasyBase));
exports.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput = CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput;
// CreateLabelRequestBodyPartialShipmentInput
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
var CreateLabelRequestBodyPartialShipmentInput = /** @class */ (function (_super) {
    __extends(CreateLabelRequestBodyPartialShipmentInput, _super);
    function CreateLabelRequestBodyPartialShipmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=advanced_options" }),
        __metadata("design:type", advancedshipmentoptions_1.AdvancedShipmentOptions)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "advancedOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", String)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmation" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "confirmation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs" }),
        __metadata("design:type", CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "customs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_order_id" }),
        __metadata("design:type", String)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "externalOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_shipment_id" }),
        __metadata("design:type", String)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "externalShipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_provider" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "insuranceProvider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shipmentitem_1.ShipmentItem }),
        __metadata("design:type", Array)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_source_code" }),
        __metadata("design:type", String)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "orderSourceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packages", elemType: package_1.PackageInput }),
        __metadata("design:type", Array)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=return_to" }),
        __metadata("design:type", address_1.Address)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "returnTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "serviceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_from" }),
        __metadata("design:type", address_1.Address)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "shipFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_to" }),
        __metadata("design:type", address_1.Address)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "shipTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyPartialShipmentInput.prototype, "warehouseId", void 0);
    return CreateLabelRequestBodyPartialShipmentInput;
}(utils_1.SpeakeasyBase));
exports.CreateLabelRequestBodyPartialShipmentInput = CreateLabelRequestBodyPartialShipmentInput;
// CreateLabelRequestBodyInput
/**
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 *
**/
var CreateLabelRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateLabelRequestBodyInput, _super);
    function CreateLabelRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge_event" }),
        __metadata("design:type", String)
    ], CreateLabelRequestBodyInput.prototype, "chargeEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_return_label" }),
        __metadata("design:type", Boolean)
    ], CreateLabelRequestBodyInput.prototype, "isReturnLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_download_type" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyInput.prototype, "labelDownloadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_format" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyInput.prototype, "labelFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_image_id" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyInput.prototype, "labelImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_layout" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyInput.prototype, "labelLayout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_label_id" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyInput.prototype, "outboundLabelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rma_number" }),
        __metadata("design:type", String)
    ], CreateLabelRequestBodyInput.prototype, "rmaNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment" }),
        __metadata("design:type", CreateLabelRequestBodyPartialShipmentInput)
    ], CreateLabelRequestBodyInput.prototype, "shipment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=test_label" }),
        __metadata("design:type", Boolean)
    ], CreateLabelRequestBodyInput.prototype, "testLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validate_address" }),
        __metadata("design:type", Object)
    ], CreateLabelRequestBodyInput.prototype, "validateAddress", void 0);
    return CreateLabelRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.CreateLabelRequestBodyInput = CreateLabelRequestBodyInput;
