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
exports.DnsSettingsInput = exports.DnsSettings = void 0;
var utils_1 = require("../../../internal/utils");
var customdns_1 = require("./customdns");
var gluerecord_1 = require("./gluerecord");
var googledomainsdns_1 = require("./googledomainsdns");
var googledomainsdns_2 = require("./googledomainsdns");
// DnsSettings
/**
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
var DnsSettings = /** @class */ (function (_super) {
    __extends(DnsSettings, _super);
    function DnsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customDns" }),
        __metadata("design:type", customdns_1.CustomDns)
    ], DnsSettings.prototype, "customDns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=glueRecords", elemType: gluerecord_1.GlueRecord }),
        __metadata("design:type", Array)
    ], DnsSettings.prototype, "glueRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleDomainsDns" }),
        __metadata("design:type", googledomainsdns_1.GoogleDomainsDns)
    ], DnsSettings.prototype, "googleDomainsDns", void 0);
    return DnsSettings;
}(utils_1.SpeakeasyBase));
exports.DnsSettings = DnsSettings;
// DnsSettingsInput
/**
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
var DnsSettingsInput = /** @class */ (function (_super) {
    __extends(DnsSettingsInput, _super);
    function DnsSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customDns" }),
        __metadata("design:type", customdns_1.CustomDns)
    ], DnsSettingsInput.prototype, "customDns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=glueRecords", elemType: gluerecord_1.GlueRecord }),
        __metadata("design:type", Array)
    ], DnsSettingsInput.prototype, "glueRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleDomainsDns" }),
        __metadata("design:type", googledomainsdns_2.GoogleDomainsDnsInput)
    ], DnsSettingsInput.prototype, "googleDomainsDns", void 0);
    return DnsSettingsInput;
}(utils_1.SpeakeasyBase));
exports.DnsSettingsInput = DnsSettingsInput;
