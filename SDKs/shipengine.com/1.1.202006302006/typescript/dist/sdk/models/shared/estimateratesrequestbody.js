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
exports.EstimateRatesRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var addressresidentialindicatorenum_1 = require("./addressresidentialindicatorenum");
var deliveryconfirmationenum_1 = require("./deliveryconfirmationenum");
var dimensions_1 = require("./dimensions");
var weight_1 = require("./weight");
// EstimateRatesRequestBody
/**
 * A rate estimate request body
**/
var EstimateRatesRequestBody = /** @class */ (function (_super) {
    __extends(EstimateRatesRequestBody, _super);
    function EstimateRatesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_residential_indicator" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "addressResidentialIndicator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmation" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "confirmation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions" }),
        __metadata("design:type", dimensions_1.Dimensions)
    ], EstimateRatesRequestBody.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from_city_locality" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "fromCityLocality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from_country_code" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "fromCountryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from_postal_code" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "fromPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from_state_province" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "fromStateProvince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Object)
    ], EstimateRatesRequestBody.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_city_locality" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "toCityLocality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_country_code" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "toCountryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_postal_code" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "toPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_state_province" }),
        __metadata("design:type", String)
    ], EstimateRatesRequestBody.prototype, "toStateProvince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", weight_1.Weight)
    ], EstimateRatesRequestBody.prototype, "weight", void 0);
    return EstimateRatesRequestBody;
}(utils_1.SpeakeasyBase));
exports.EstimateRatesRequestBody = EstimateRatesRequestBody;
