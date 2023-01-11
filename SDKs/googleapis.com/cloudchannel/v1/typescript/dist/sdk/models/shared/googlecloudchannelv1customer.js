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
exports.GoogleCloudChannelV1CustomerInput = exports.GoogleCloudChannelV1Customer = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudchannelv1cloudidentityinfo_1 = require("./googlecloudchannelv1cloudidentityinfo");
var googletypepostaladdress_1 = require("./googletypepostaladdress");
var googlecloudchannelv1contactinfo_1 = require("./googlecloudchannelv1contactinfo");
var googlecloudchannelv1cloudidentityinfo_2 = require("./googlecloudchannelv1cloudidentityinfo");
var googlecloudchannelv1contactinfo_2 = require("./googlecloudchannelv1contactinfo");
// GoogleCloudChannelV1Customer
/**
 * Entity representing a customer of a reseller or distributor.
**/
var GoogleCloudChannelV1Customer = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1Customer, _super);
    function GoogleCloudChannelV1Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternateEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "alternateEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelPartnerId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "channelPartnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudIdentityId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "cloudIdentityId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudIdentityInfo" }),
        __metadata("design:type", googlecloudchannelv1cloudidentityinfo_1.GoogleCloudChannelV1CloudIdentityInfo)
    ], GoogleCloudChannelV1Customer.prototype, "cloudIdentityInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgDisplayName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "orgDisplayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgPostalAddress" }),
        __metadata("design:type", googletypepostaladdress_1.GoogleTypePostalAddress)
    ], GoogleCloudChannelV1Customer.prototype, "orgPostalAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryContactInfo" }),
        __metadata("design:type", googlecloudchannelv1contactinfo_1.GoogleCloudChannelV1ContactInfo)
    ], GoogleCloudChannelV1Customer.prototype, "primaryContactInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Customer.prototype, "updateTime", void 0);
    return GoogleCloudChannelV1Customer;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudChannelV1Customer = GoogleCloudChannelV1Customer;
// GoogleCloudChannelV1CustomerInput
/**
 * Entity representing a customer of a reseller or distributor.
**/
var GoogleCloudChannelV1CustomerInput = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1CustomerInput, _super);
    function GoogleCloudChannelV1CustomerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternateEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CustomerInput.prototype, "alternateEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelPartnerId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CustomerInput.prototype, "channelPartnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudIdentityInfo" }),
        __metadata("design:type", googlecloudchannelv1cloudidentityinfo_2.GoogleCloudChannelV1CloudIdentityInfoInput)
    ], GoogleCloudChannelV1CustomerInput.prototype, "cloudIdentityInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CustomerInput.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CustomerInput.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgDisplayName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CustomerInput.prototype, "orgDisplayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgPostalAddress" }),
        __metadata("design:type", googletypepostaladdress_1.GoogleTypePostalAddress)
    ], GoogleCloudChannelV1CustomerInput.prototype, "orgPostalAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryContactInfo" }),
        __metadata("design:type", googlecloudchannelv1contactinfo_2.GoogleCloudChannelV1ContactInfoInput)
    ], GoogleCloudChannelV1CustomerInput.prototype, "primaryContactInfo", void 0);
    return GoogleCloudChannelV1CustomerInput;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudChannelV1CustomerInput = GoogleCloudChannelV1CustomerInput;
