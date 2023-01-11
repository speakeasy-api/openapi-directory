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
exports.AdvancedShipmentOptions = exports.AdvancedShipmentOptionsWeight = void 0;
var utils_1 = require("../../../internal/utils");
var weightunitenum_1 = require("./weightunitenum");
var collectondelivery_1 = require("./collectondelivery");
// AdvancedShipmentOptionsWeight
/**
 * The weight of a package
**/
var AdvancedShipmentOptionsWeight = /** @class */ (function (_super) {
    __extends(AdvancedShipmentOptionsWeight, _super);
    function AdvancedShipmentOptionsWeight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], AdvancedShipmentOptionsWeight.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], AdvancedShipmentOptionsWeight.prototype, "value", void 0);
    return AdvancedShipmentOptionsWeight;
}(utils_1.SpeakeasyBase));
exports.AdvancedShipmentOptionsWeight = AdvancedShipmentOptionsWeight;
// AdvancedShipmentOptions
/**
 * Advanced shipment options
**/
var AdvancedShipmentOptions = /** @class */ (function (_super) {
    __extends(AdvancedShipmentOptions, _super);
    function AdvancedShipmentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bill_to_account" }),
        __metadata("design:type", String)
    ], AdvancedShipmentOptions.prototype, "billToAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bill_to_country_code" }),
        __metadata("design:type", Object)
    ], AdvancedShipmentOptions.prototype, "billToCountryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bill_to_party" }),
        __metadata("design:type", Object)
    ], AdvancedShipmentOptions.prototype, "billToParty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bill_to_postal_code" }),
        __metadata("design:type", String)
    ], AdvancedShipmentOptions.prototype, "billToPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collect_on_delivery" }),
        __metadata("design:type", collectondelivery_1.CollectOnDelivery)
    ], AdvancedShipmentOptions.prototype, "collectOnDelivery", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contains_alcohol" }),
        __metadata("design:type", Boolean)
    ], AdvancedShipmentOptions.prototype, "containsAlcohol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_field1" }),
        __metadata("design:type", String)
    ], AdvancedShipmentOptions.prototype, "customField1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_field2" }),
        __metadata("design:type", String)
    ], AdvancedShipmentOptions.prototype, "customField2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_field3" }),
        __metadata("design:type", String)
    ], AdvancedShipmentOptions.prototype, "customField3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delivered_duty_paid" }),
        __metadata("design:type", Boolean)
    ], AdvancedShipmentOptions.prototype, "deliveredDutyPaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dry_ice" }),
        __metadata("design:type", Boolean)
    ], AdvancedShipmentOptions.prototype, "dryIce", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dry_ice_weight" }),
        __metadata("design:type", AdvancedShipmentOptionsWeight)
    ], AdvancedShipmentOptions.prototype, "dryIceWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freight_class" }),
        __metadata("design:type", String)
    ], AdvancedShipmentOptions.prototype, "freightClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_machinable" }),
        __metadata("design:type", Boolean)
    ], AdvancedShipmentOptions.prototype, "nonMachinable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=saturday_delivery" }),
        __metadata("design:type", Boolean)
    ], AdvancedShipmentOptions.prototype, "saturdayDelivery", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_ups_ground_freight_pricing" }),
        __metadata("design:type", Boolean)
    ], AdvancedShipmentOptions.prototype, "useUpsGroundFreightPricing", void 0);
    return AdvancedShipmentOptions;
}(utils_1.SpeakeasyBase));
exports.AdvancedShipmentOptions = AdvancedShipmentOptions;
