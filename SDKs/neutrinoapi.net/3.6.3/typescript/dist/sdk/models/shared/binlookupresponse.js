"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.BINLookupResponse = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var BINLookupResponse = /** @class */ (function (_super) {
    __extends(BINLookupResponse, _super);
    function BINLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bin-number" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "binNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "card-brand" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "cardBrand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "card-category" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "cardCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "card-type" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "cardType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "country" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "country-code" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "country-code3" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "countryCode3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "currency-code" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-blocklisted" }),
        __metadata("design:type", Boolean)
    ], BINLookupResponse.prototype, "ipBlocklisted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-blocklists" }),
        __metadata("design:type", Array)
    ], BINLookupResponse.prototype, "ipBlocklists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-city" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "ipCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-country" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "ipCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-country-code" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "ipCountryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-country-code3" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "ipCountryCode3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-matches-bin" }),
        __metadata("design:type", Boolean)
    ], BINLookupResponse.prototype, "ipMatchesBin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ip-region" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "ipRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is-commercial" }),
        __metadata("design:type", Boolean)
    ], BINLookupResponse.prototype, "isCommercial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is-prepaid" }),
        __metadata("design:type", Boolean)
    ], BINLookupResponse.prototype, "isPrepaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "issuer" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "issuer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "issuer-phone" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "issuerPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "issuer-website" }),
        __metadata("design:type", String)
    ], BINLookupResponse.prototype, "issuerWebsite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "valid" }),
        __metadata("design:type", Boolean)
    ], BINLookupResponse.prototype, "valid", void 0);
    return BINLookupResponse;
}(utils_1.SpeakeasyBase));
exports.BINLookupResponse = BINLookupResponse;
