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
exports.HlrLookupResponse = void 0;
var utils_1 = require("../../../internal/utils");
var HlrLookupResponse = /** @class */ (function (_super) {
    __extends(HlrLookupResponse, _super);
    function HlrLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryCode3" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "countryCode3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentNetwork" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "currentNetwork", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hlrStatus" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "hlrStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hlrValid" }),
        __metadata("design:type", Boolean)
    ], HlrLookupResponse.prototype, "hlrValid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imsi" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "imsi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internationalCallingCode" }),
        __metadata("design:type", Number)
    ], HlrLookupResponse.prototype, "internationalCallingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internationalNumber" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "internationalNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isMobile" }),
        __metadata("design:type", Boolean)
    ], HlrLookupResponse.prototype, "isMobile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPorted" }),
        __metadata("design:type", Boolean)
    ], HlrLookupResponse.prototype, "isPorted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isRoaming" }),
        __metadata("design:type", Boolean)
    ], HlrLookupResponse.prototype, "isRoaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localNumber" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "localNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mcc" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "mcc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mnc" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "mnc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=msc" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "msc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=msin" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "msin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberType" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberValid" }),
        __metadata("design:type", Boolean)
    ], HlrLookupResponse.prototype, "numberValid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originNetwork" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "originNetwork", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portedNetwork" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "portedNetwork", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roamingCountryCode" }),
        __metadata("design:type", String)
    ], HlrLookupResponse.prototype, "roamingCountryCode", void 0);
    return HlrLookupResponse;
}(utils_1.SpeakeasyBase));
exports.HlrLookupResponse = HlrLookupResponse;
