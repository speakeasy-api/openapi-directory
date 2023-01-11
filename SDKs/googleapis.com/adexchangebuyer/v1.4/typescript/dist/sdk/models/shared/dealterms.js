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
exports.DealTerms = void 0;
var utils_1 = require("../../../internal/utils");
var price_1 = require("./price");
var dealtermsguaranteedfixedpriceterms_1 = require("./dealtermsguaranteedfixedpriceterms");
var dealtermsnonguaranteedauctionterms_1 = require("./dealtermsnonguaranteedauctionterms");
var dealtermsnonguaranteedfixedpriceterms_1 = require("./dealtermsnonguaranteedfixedpriceterms");
var dealtermsrubiconnonguaranteedterms_1 = require("./dealtermsrubiconnonguaranteedterms");
var DealTerms = /** @class */ (function (_super) {
    __extends(DealTerms, _super);
    function DealTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brandingType" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "brandingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crossListedExternalDealIdType" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "crossListedExternalDealIdType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimatedGrossSpend" }),
        __metadata("design:type", price_1.Price)
    ], DealTerms.prototype, "estimatedGrossSpend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimatedImpressionsPerDay" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "estimatedImpressionsPerDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=guaranteedFixedPriceTerms" }),
        __metadata("design:type", dealtermsguaranteedfixedpriceterms_1.DealTermsGuaranteedFixedPriceTerms)
    ], DealTerms.prototype, "guaranteedFixedPriceTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nonGuaranteedAuctionTerms" }),
        __metadata("design:type", dealtermsnonguaranteedauctionterms_1.DealTermsNonGuaranteedAuctionTerms)
    ], DealTerms.prototype, "nonGuaranteedAuctionTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nonGuaranteedFixedPriceTerms" }),
        __metadata("design:type", dealtermsnonguaranteedfixedpriceterms_1.DealTermsNonGuaranteedFixedPriceTerms)
    ], DealTerms.prototype, "nonGuaranteedFixedPriceTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rubiconNonGuaranteedTerms" }),
        __metadata("design:type", dealtermsrubiconnonguaranteedterms_1.DealTermsRubiconNonGuaranteedTerms)
    ], DealTerms.prototype, "rubiconNonGuaranteedTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sellerTimeZone" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "sellerTimeZone", void 0);
    return DealTerms;
}(utils_1.SpeakeasyBase));
exports.DealTerms = DealTerms;
