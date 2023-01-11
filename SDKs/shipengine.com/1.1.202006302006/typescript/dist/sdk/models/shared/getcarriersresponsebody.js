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
exports.GetCarriersResponseBody = exports.GetCarriersResponseBodyCarrier = exports.GetCarriersResponseBodyCarrierService = exports.GetCarriersResponseBodyCarrierPackageType = exports.GetCarriersResponseBodyCarrierCarrierAdvancedOption = void 0;
var utils_1 = require("../../../internal/utils");
var dimensions_1 = require("./dimensions");
var error_1 = require("./error");
// GetCarriersResponseBodyCarrierCarrierAdvancedOption
/**
 * Advanced options that are specific to the carrier
**/
var GetCarriersResponseBodyCarrierCarrierAdvancedOption = /** @class */ (function (_super) {
    __extends(GetCarriersResponseBodyCarrierCarrierAdvancedOption, _super);
    function GetCarriersResponseBodyCarrierCarrierAdvancedOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_value" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierCarrierAdvancedOption.prototype, "defaultValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierCarrierAdvancedOption.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierCarrierAdvancedOption.prototype, "name", void 0);
    return GetCarriersResponseBodyCarrierCarrierAdvancedOption;
}(utils_1.SpeakeasyBase));
exports.GetCarriersResponseBodyCarrierCarrierAdvancedOption = GetCarriersResponseBodyCarrierCarrierAdvancedOption;
// GetCarriersResponseBodyCarrierPackageType
/**
 * A package type that a carrier supports for shipment.
**/
var GetCarriersResponseBodyCarrierPackageType = /** @class */ (function (_super) {
    __extends(GetCarriersResponseBodyCarrierPackageType, _super);
    function GetCarriersResponseBodyCarrierPackageType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierPackageType.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions" }),
        __metadata("design:type", dimensions_1.Dimensions)
    ], GetCarriersResponseBodyCarrierPackageType.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierPackageType.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_code" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierPackageType.prototype, "packageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_id" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierPackageType.prototype, "packageId", void 0);
    return GetCarriersResponseBodyCarrierPackageType;
}(utils_1.SpeakeasyBase));
exports.GetCarriersResponseBodyCarrierPackageType = GetCarriersResponseBodyCarrierPackageType;
// GetCarriersResponseBodyCarrierService
/**
 * A service offered by the carrier
**/
var GetCarriersResponseBodyCarrierService = /** @class */ (function (_super) {
    __extends(GetCarriersResponseBodyCarrierService, _super);
    function GetCarriersResponseBodyCarrierService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_code" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierService.prototype, "carrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], GetCarriersResponseBodyCarrierService.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domestic" }),
        __metadata("design:type", Boolean)
    ], GetCarriersResponseBodyCarrierService.prototype, "domestic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=international" }),
        __metadata("design:type", Boolean)
    ], GetCarriersResponseBodyCarrierService.prototype, "international", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_multi_package_supported" }),
        __metadata("design:type", Boolean)
    ], GetCarriersResponseBodyCarrierService.prototype, "isMultiPackageSupported", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierService.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrierService.prototype, "serviceCode", void 0);
    return GetCarriersResponseBodyCarrierService;
}(utils_1.SpeakeasyBase));
exports.GetCarriersResponseBodyCarrierService = GetCarriersResponseBodyCarrierService;
// GetCarriersResponseBodyCarrier
/**
 * A carrier object that represents a provider such as UPS, USPS, DHL, etc
 * that has been tied to the current account.
 *
**/
var GetCarriersResponseBodyCarrier = /** @class */ (function (_super) {
    __extends(GetCarriersResponseBodyCarrier, _super);
    function GetCarriersResponseBodyCarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrier.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetCarriersResponseBodyCarrier.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_code" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrier.prototype, "carrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], GetCarriersResponseBodyCarrier.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrier.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_multi_package_supporting_services" }),
        __metadata("design:type", Boolean)
    ], GetCarriersResponseBodyCarrier.prototype, "hasMultiPackageSupportingServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBodyCarrier.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options", elemType: GetCarriersResponseBodyCarrierCarrierAdvancedOption }),
        __metadata("design:type", Array)
    ], GetCarriersResponseBodyCarrier.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packages", elemType: GetCarriersResponseBodyCarrierPackageType }),
        __metadata("design:type", Array)
    ], GetCarriersResponseBodyCarrier.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], GetCarriersResponseBodyCarrier.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requires_funded_amount" }),
        __metadata("design:type", Boolean)
    ], GetCarriersResponseBodyCarrier.prototype, "requiresFundedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services", elemType: GetCarriersResponseBodyCarrierService }),
        __metadata("design:type", Array)
    ], GetCarriersResponseBodyCarrier.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supports_label_messages" }),
        __metadata("design:type", Boolean)
    ], GetCarriersResponseBodyCarrier.prototype, "supportsLabelMessages", void 0);
    return GetCarriersResponseBodyCarrier;
}(utils_1.SpeakeasyBase));
exports.GetCarriersResponseBodyCarrier = GetCarriersResponseBodyCarrier;
// GetCarriersResponseBody
/**
 * An error response body
**/
var GetCarriersResponseBody = /** @class */ (function (_super) {
    __extends(GetCarriersResponseBody, _super);
    function GetCarriersResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carriers", elemType: GetCarriersResponseBodyCarrier }),
        __metadata("design:type", Array)
    ], GetCarriersResponseBody.prototype, "carriers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], GetCarriersResponseBody.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetCarriersResponseBody.prototype, "requestId", void 0);
    return GetCarriersResponseBody;
}(utils_1.SpeakeasyBase));
exports.GetCarriersResponseBody = GetCarriersResponseBody;
