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
exports.GetCarrierByIdResponseBody = exports.GetCarrierByIdResponseBodyService = exports.GetCarrierByIdResponseBodyPackageType = exports.GetCarrierByIdResponseBodyCarrierAdvancedOption = void 0;
var utils_1 = require("../../../internal/utils");
var dimensions_1 = require("./dimensions");
// GetCarrierByIdResponseBodyCarrierAdvancedOption
/**
 * Advanced options that are specific to the carrier
**/
var GetCarrierByIdResponseBodyCarrierAdvancedOption = /** @class */ (function (_super) {
    __extends(GetCarrierByIdResponseBodyCarrierAdvancedOption, _super);
    function GetCarrierByIdResponseBodyCarrierAdvancedOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_value" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyCarrierAdvancedOption.prototype, "defaultValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyCarrierAdvancedOption.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyCarrierAdvancedOption.prototype, "name", void 0);
    return GetCarrierByIdResponseBodyCarrierAdvancedOption;
}(utils_1.SpeakeasyBase));
exports.GetCarrierByIdResponseBodyCarrierAdvancedOption = GetCarrierByIdResponseBodyCarrierAdvancedOption;
// GetCarrierByIdResponseBodyPackageType
/**
 * A package type that a carrier supports for shipment.
**/
var GetCarrierByIdResponseBodyPackageType = /** @class */ (function (_super) {
    __extends(GetCarrierByIdResponseBodyPackageType, _super);
    function GetCarrierByIdResponseBodyPackageType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyPackageType.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions" }),
        __metadata("design:type", dimensions_1.Dimensions)
    ], GetCarrierByIdResponseBodyPackageType.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyPackageType.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_code" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyPackageType.prototype, "packageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_id" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyPackageType.prototype, "packageId", void 0);
    return GetCarrierByIdResponseBodyPackageType;
}(utils_1.SpeakeasyBase));
exports.GetCarrierByIdResponseBodyPackageType = GetCarrierByIdResponseBodyPackageType;
// GetCarrierByIdResponseBodyService
/**
 * A service offered by the carrier
**/
var GetCarrierByIdResponseBodyService = /** @class */ (function (_super) {
    __extends(GetCarrierByIdResponseBodyService, _super);
    function GetCarrierByIdResponseBodyService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_code" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyService.prototype, "carrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], GetCarrierByIdResponseBodyService.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domestic" }),
        __metadata("design:type", Boolean)
    ], GetCarrierByIdResponseBodyService.prototype, "domestic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=international" }),
        __metadata("design:type", Boolean)
    ], GetCarrierByIdResponseBodyService.prototype, "international", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_multi_package_supported" }),
        __metadata("design:type", Boolean)
    ], GetCarrierByIdResponseBodyService.prototype, "isMultiPackageSupported", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyService.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBodyService.prototype, "serviceCode", void 0);
    return GetCarrierByIdResponseBodyService;
}(utils_1.SpeakeasyBase));
exports.GetCarrierByIdResponseBodyService = GetCarrierByIdResponseBodyService;
// GetCarrierByIdResponseBody
/**
 * A carrier object that represents a provider such as UPS, USPS, DHL, etc
 * that has been tied to the current account.
 *
**/
var GetCarrierByIdResponseBody = /** @class */ (function (_super) {
    __extends(GetCarrierByIdResponseBody, _super);
    function GetCarrierByIdResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBody.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetCarrierByIdResponseBody.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_code" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBody.prototype, "carrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], GetCarrierByIdResponseBody.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBody.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_multi_package_supporting_services" }),
        __metadata("design:type", Boolean)
    ], GetCarrierByIdResponseBody.prototype, "hasMultiPackageSupportingServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], GetCarrierByIdResponseBody.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options", elemType: GetCarrierByIdResponseBodyCarrierAdvancedOption }),
        __metadata("design:type", Array)
    ], GetCarrierByIdResponseBody.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packages", elemType: GetCarrierByIdResponseBodyPackageType }),
        __metadata("design:type", Array)
    ], GetCarrierByIdResponseBody.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], GetCarrierByIdResponseBody.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requires_funded_amount" }),
        __metadata("design:type", Boolean)
    ], GetCarrierByIdResponseBody.prototype, "requiresFundedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services", elemType: GetCarrierByIdResponseBodyService }),
        __metadata("design:type", Array)
    ], GetCarrierByIdResponseBody.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supports_label_messages" }),
        __metadata("design:type", Boolean)
    ], GetCarrierByIdResponseBody.prototype, "supportsLabelMessages", void 0);
    return GetCarrierByIdResponseBody;
}(utils_1.SpeakeasyBase));
exports.GetCarrierByIdResponseBody = GetCarrierByIdResponseBody;
