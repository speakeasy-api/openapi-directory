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
exports.IpProbeResponse = void 0;
var utils_1 = require("../../../internal/utils");
var IpProbeResponse = /** @class */ (function (_super) {
    __extends(IpProbeResponse, _super);
    function IpProbeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asAge" }),
        __metadata("design:type", Number)
    ], IpProbeResponse.prototype, "asAge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asCidr" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "asCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asCountryCode" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "asCountryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asCountryCode3" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "asCountryCode3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asDescription" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "asDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asDomains" }),
        __metadata("design:type", Array)
    ], IpProbeResponse.prototype, "asDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asn" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "asn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continentCode" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "continentCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryCode3" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "countryCode3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hostDomain" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "hostDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "hostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isBogon" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "isBogon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isHosting" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "isHosting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isIsp" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "isIsp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isProxy" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "isProxy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isV4Mapped" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "isV4Mapped", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isV6" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "isV6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isVpn" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "isVpn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerDescription" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "providerDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerDomain" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "providerDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerType" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "providerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerWebsite" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "providerWebsite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], IpProbeResponse.prototype, "valid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpnDomain" }),
        __metadata("design:type", String)
    ], IpProbeResponse.prototype, "vpnDomain", void 0);
    return IpProbeResponse;
}(utils_1.SpeakeasyBase));
exports.IpProbeResponse = IpProbeResponse;
