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
exports.Package = exports.PackageInput = exports.PackageMonetaryValue = void 0;
var utils_1 = require("../../../internal/utils");
var currencyenum_1 = require("./currencyenum");
var dimensions_1 = require("./dimensions");
var labelmessages_1 = require("./labelmessages");
var weight_1 = require("./weight");
// PackageMonetaryValue
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
var PackageMonetaryValue = /** @class */ (function (_super) {
    __extends(PackageMonetaryValue, _super);
    function PackageMonetaryValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PackageMonetaryValue.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PackageMonetaryValue.prototype, "currency", void 0);
    return PackageMonetaryValue;
}(utils_1.SpeakeasyBase));
exports.PackageMonetaryValue = PackageMonetaryValue;
// PackageInput
/**
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
var PackageInput = /** @class */ (function (_super) {
    __extends(PackageInput, _super);
    function PackageInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions" }),
        __metadata("design:type", dimensions_1.Dimensions)
    ], PackageInput.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_package_id" }),
        __metadata("design:type", String)
    ], PackageInput.prototype, "externalPackageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insured_value" }),
        __metadata("design:type", PackageMonetaryValue)
    ], PackageInput.prototype, "insuredValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_messages" }),
        __metadata("design:type", labelmessages_1.LabelMessages)
    ], PackageInput.prototype, "labelMessages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_code" }),
        __metadata("design:type", String)
    ], PackageInput.prototype, "packageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", weight_1.Weight)
    ], PackageInput.prototype, "weight", void 0);
    return PackageInput;
}(utils_1.SpeakeasyBase));
exports.PackageInput = PackageInput;
// Package
/**
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions" }),
        __metadata("design:type", dimensions_1.Dimensions)
    ], Package.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_package_id" }),
        __metadata("design:type", String)
    ], Package.prototype, "externalPackageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insured_value" }),
        __metadata("design:type", PackageMonetaryValue)
    ], Package.prototype, "insuredValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_messages" }),
        __metadata("design:type", labelmessages_1.LabelMessages)
    ], Package.prototype, "labelMessages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=package_code" }),
        __metadata("design:type", String)
    ], Package.prototype, "packageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_number" }),
        __metadata("design:type", Object)
    ], Package.prototype, "trackingNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", weight_1.Weight)
    ], Package.prototype, "weight", void 0);
    return Package;
}(utils_1.SpeakeasyBase));
exports.Package = Package;
