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
exports.CreateReturnLabelResponseBodyOutput = exports.CreateReturnLabelResponseBodyLabelDownload = exports.CreateReturnLabelResponseBodyMonetaryValue = exports.CreateReturnLabelResponseBodyOptionalLink = void 0;
var utils_1 = require("../../../internal/utils");
var currencyenum_1 = require("./currencyenum");
var labelchargeeventenum_1 = require("./labelchargeeventenum");
var package_1 = require("./package");
// CreateReturnLabelResponseBodyOptionalLink
/**
 * A link to a related resource, or an empty object if there is no resource to link to
**/
var CreateReturnLabelResponseBodyOptionalLink = /** @class */ (function (_super) {
    __extends(CreateReturnLabelResponseBodyOptionalLink, _super);
    function CreateReturnLabelResponseBodyOptionalLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyOptionalLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyOptionalLink.prototype, "type", void 0);
    return CreateReturnLabelResponseBodyOptionalLink;
}(utils_1.SpeakeasyBase));
exports.CreateReturnLabelResponseBodyOptionalLink = CreateReturnLabelResponseBodyOptionalLink;
// CreateReturnLabelResponseBodyMonetaryValue
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
var CreateReturnLabelResponseBodyMonetaryValue = /** @class */ (function (_super) {
    __extends(CreateReturnLabelResponseBodyMonetaryValue, _super);
    function CreateReturnLabelResponseBodyMonetaryValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], CreateReturnLabelResponseBodyMonetaryValue.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyMonetaryValue.prototype, "currency", void 0);
    return CreateReturnLabelResponseBodyMonetaryValue;
}(utils_1.SpeakeasyBase));
exports.CreateReturnLabelResponseBodyMonetaryValue = CreateReturnLabelResponseBodyMonetaryValue;
// CreateReturnLabelResponseBodyLabelDownload
/**
 * Reference to the various downloadable file formats for the generated label
 *
**/
var CreateReturnLabelResponseBodyLabelDownload = /** @class */ (function (_super) {
    __extends(CreateReturnLabelResponseBodyLabelDownload, _super);
    function CreateReturnLabelResponseBodyLabelDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyLabelDownload.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pdf" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyLabelDownload.prototype, "pdf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=png" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyLabelDownload.prototype, "png", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zpl" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyLabelDownload.prototype, "zpl", void 0);
    return CreateReturnLabelResponseBodyLabelDownload;
}(utils_1.SpeakeasyBase));
exports.CreateReturnLabelResponseBodyLabelDownload = CreateReturnLabelResponseBodyLabelDownload;
// CreateReturnLabelResponseBodyOutput
/**
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 *
**/
var CreateReturnLabelResponseBodyOutput = /** @class */ (function (_super) {
    __extends(CreateReturnLabelResponseBodyOutput, _super);
    function CreateReturnLabelResponseBodyOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_id" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "batchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_code" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "carrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge_event" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyOutput.prototype, "chargeEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_download" }),
        __metadata("design:type", CreateReturnLabelResponseBodyOptionalLink)
    ], CreateReturnLabelResponseBodyOutput.prototype, "formDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_claim" }),
        __metadata("design:type", CreateReturnLabelResponseBodyOptionalLink)
    ], CreateReturnLabelResponseBodyOutput.prototype, "insuranceClaim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_cost" }),
        __metadata("design:type", CreateReturnLabelResponseBodyMonetaryValue)
    ], CreateReturnLabelResponseBodyOutput.prototype, "insuranceCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_international" }),
        __metadata("design:type", Boolean)
    ], CreateReturnLabelResponseBodyOutput.prototype, "isInternational", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_return_label" }),
        __metadata("design:type", Boolean)
    ], CreateReturnLabelResponseBodyOutput.prototype, "isReturnLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_download" }),
        __metadata("design:type", CreateReturnLabelResponseBodyLabelDownload)
    ], CreateReturnLabelResponseBodyOutput.prototype, "labelDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_format" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "labelFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_id" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "labelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_image_id" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "labelImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_layout" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "labelLayout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_code" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "packageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packages", elemType: package_1.Package }),
        __metadata("design:type", Array)
    ], CreateReturnLabelResponseBodyOutput.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rma_number" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyOutput.prototype, "rmaNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "serviceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_cost" }),
        __metadata("design:type", CreateReturnLabelResponseBodyMonetaryValue)
    ], CreateReturnLabelResponseBodyOutput.prototype, "shipmentCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_id" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "shipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackable" }),
        __metadata("design:type", Boolean)
    ], CreateReturnLabelResponseBodyOutput.prototype, "trackable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_number" }),
        __metadata("design:type", String)
    ], CreateReturnLabelResponseBodyOutput.prototype, "trackingNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_status" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "trackingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voided" }),
        __metadata("design:type", Boolean)
    ], CreateReturnLabelResponseBodyOutput.prototype, "voided", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voided_at" }),
        __metadata("design:type", Object)
    ], CreateReturnLabelResponseBodyOutput.prototype, "voidedAt", void 0);
    return CreateReturnLabelResponseBodyOutput;
}(utils_1.SpeakeasyBase));
exports.CreateReturnLabelResponseBodyOutput = CreateReturnLabelResponseBodyOutput;
