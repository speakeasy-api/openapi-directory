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
exports.Lodging = void 0;
var utils_1 = require("../../../internal/utils");
var accessibility_1 = require("./accessibility");
var activities_1 = require("./activities");
var guestunitfeatures_1 = require("./guestunitfeatures");
var business_1 = require("./business");
var livingarea_1 = require("./livingarea");
var connectivity_1 = require("./connectivity");
var families_1 = require("./families");
var foodanddrink_1 = require("./foodanddrink");
var guestunittype_1 = require("./guestunittype");
var healthandsafety_1 = require("./healthandsafety");
var housekeeping_1 = require("./housekeeping");
var lodgingmetadata_1 = require("./lodgingmetadata");
var parking_1 = require("./parking");
var pets_1 = require("./pets");
var policies_1 = require("./policies");
var pools_1 = require("./pools");
var property_1 = require("./property");
var services_1 = require("./services");
var transportation_1 = require("./transportation");
var wellness_1 = require("./wellness");
// Lodging
/**
 * Lodging of a location that provides accomodations.
**/
var Lodging = /** @class */ (function (_super) {
    __extends(Lodging, _super);
    function Lodging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessibility" }),
        __metadata("design:type", accessibility_1.Accessibility)
    ], Lodging.prototype, "accessibility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activities" }),
        __metadata("design:type", activities_1.Activities)
    ], Lodging.prototype, "activities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allUnits" }),
        __metadata("design:type", guestunitfeatures_1.GuestUnitFeatures)
    ], Lodging.prototype, "allUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business" }),
        __metadata("design:type", business_1.Business)
    ], Lodging.prototype, "business", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commonLivingArea" }),
        __metadata("design:type", livingarea_1.LivingArea)
    ], Lodging.prototype, "commonLivingArea", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectivity" }),
        __metadata("design:type", connectivity_1.Connectivity)
    ], Lodging.prototype, "connectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=families" }),
        __metadata("design:type", families_1.Families)
    ], Lodging.prototype, "families", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=foodAndDrink" }),
        __metadata("design:type", foodanddrink_1.FoodAndDrink)
    ], Lodging.prototype, "foodAndDrink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=guestUnits", elemType: guestunittype_1.GuestUnitType }),
        __metadata("design:type", Array)
    ], Lodging.prototype, "guestUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthAndSafety" }),
        __metadata("design:type", healthandsafety_1.HealthAndSafety)
    ], Lodging.prototype, "healthAndSafety", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=housekeeping" }),
        __metadata("design:type", housekeeping_1.Housekeeping)
    ], Lodging.prototype, "housekeeping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", lodgingmetadata_1.LodgingMetadata)
    ], Lodging.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Lodging.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parking" }),
        __metadata("design:type", parking_1.Parking)
    ], Lodging.prototype, "parking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pets" }),
        __metadata("design:type", pets_1.Pets)
    ], Lodging.prototype, "pets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policies" }),
        __metadata("design:type", policies_1.Policies)
    ], Lodging.prototype, "policies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pools" }),
        __metadata("design:type", pools_1.Pools)
    ], Lodging.prototype, "pools", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=property" }),
        __metadata("design:type", property_1.Property)
    ], Lodging.prototype, "property", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services" }),
        __metadata("design:type", services_1.Services)
    ], Lodging.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=someUnits" }),
        __metadata("design:type", guestunitfeatures_1.GuestUnitFeatures)
    ], Lodging.prototype, "someUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transportation" }),
        __metadata("design:type", transportation_1.Transportation)
    ], Lodging.prototype, "transportation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wellness" }),
        __metadata("design:type", wellness_1.Wellness)
    ], Lodging.prototype, "wellness", void 0);
    return Lodging;
}(utils_1.SpeakeasyBase));
exports.Lodging = Lodging;
