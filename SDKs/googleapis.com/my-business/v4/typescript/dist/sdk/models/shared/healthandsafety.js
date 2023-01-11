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
exports.HealthAndSafety = void 0;
var utils_1 = require("../../../internal/utils");
var enhancedcleaning_1 = require("./enhancedcleaning");
var increasedfoodsafety_1 = require("./increasedfoodsafety");
var minimizedcontact_1 = require("./minimizedcontact");
var personalprotection_1 = require("./personalprotection");
var physicaldistancing_1 = require("./physicaldistancing");
// HealthAndSafety
/**
 * Health and safety measures implemented by the hotel during COVID-19.
**/
var HealthAndSafety = /** @class */ (function (_super) {
    __extends(HealthAndSafety, _super);
    function HealthAndSafety() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enhancedCleaning" }),
        __metadata("design:type", enhancedcleaning_1.EnhancedCleaning)
    ], HealthAndSafety.prototype, "enhancedCleaning", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=increasedFoodSafety" }),
        __metadata("design:type", increasedfoodsafety_1.IncreasedFoodSafety)
    ], HealthAndSafety.prototype, "increasedFoodSafety", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimizedContact" }),
        __metadata("design:type", minimizedcontact_1.MinimizedContact)
    ], HealthAndSafety.prototype, "minimizedContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personalProtection" }),
        __metadata("design:type", personalprotection_1.PersonalProtection)
    ], HealthAndSafety.prototype, "personalProtection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=physicalDistancing" }),
        __metadata("design:type", physicaldistancing_1.PhysicalDistancing)
    ], HealthAndSafety.prototype, "physicalDistancing", void 0);
    return HealthAndSafety;
}(utils_1.SpeakeasyBase));
exports.HealthAndSafety = HealthAndSafety;
