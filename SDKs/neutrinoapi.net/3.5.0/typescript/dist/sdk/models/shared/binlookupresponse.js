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
exports.BinLookupResponse = void 0;
var utils_1 = require("../../../internal/utils");
var BinLookupResponse = /** @class */ (function (_super) {
    __extends(BinLookupResponse, _super);
    function BinLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardBrand" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "cardBrand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardCategory" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "cardCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardType" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "cardType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryCode3" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "countryCode3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipBlocklisted" }),
        __metadata("design:type", Boolean)
    ], BinLookupResponse.prototype, "ipBlocklisted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipBlocklists" }),
        __metadata("design:type", Array)
    ], BinLookupResponse.prototype, "ipBlocklists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipCity" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "ipCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipCountry" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "ipCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipCountryCode" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "ipCountryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipCountryCode3" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "ipCountryCode3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipMatchesBin" }),
        __metadata("design:type", Boolean)
    ], BinLookupResponse.prototype, "ipMatchesBin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipRegion" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "ipRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCommercial" }),
        __metadata("design:type", Boolean)
    ], BinLookupResponse.prototype, "isCommercial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPrepaid" }),
        __metadata("design:type", Boolean)
    ], BinLookupResponse.prototype, "isPrepaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "issuer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issuerPhone" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "issuerPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issuerWebsite" }),
        __metadata("design:type", String)
    ], BinLookupResponse.prototype, "issuerWebsite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], BinLookupResponse.prototype, "valid", void 0);
    return BinLookupResponse;
}(utils_1.SpeakeasyBase));
exports.BinLookupResponse = BinLookupResponse;
