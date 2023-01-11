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
exports.PublisherProfileApiProto = void 0;
var utils_1 = require("../../../internal/utils");
var mobileapplication_1 = require("./mobileapplication");
var publisherprovidedforecast_1 = require("./publisherprovidedforecast");
var seller_1 = require("./seller");
var PublisherProfileApiProto = /** @class */ (function (_super) {
    __extends(PublisherProfileApiProto, _super);
    function PublisherProfileApiProto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audience" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "audience", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buyerPitchStatement" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "buyerPitchStatement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directContact" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "directContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "exchange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forecastInventory" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "forecastInventory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googlePlusLink" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "googlePlusLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isParent" }),
        __metadata("design:type", Boolean)
    ], PublisherProfileApiProto.prototype, "isParent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPublished" }),
        __metadata("design:type", Boolean)
    ], PublisherProfileApiProto.prototype, "isPublished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logoUrl" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "logoUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mediaKitLink" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "mediaKitLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overview" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "overview", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profileId" }),
        __metadata("design:type", Number)
    ], PublisherProfileApiProto.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=programmaticContact" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "programmaticContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherAppIds" }),
        __metadata("design:type", Array)
    ], PublisherProfileApiProto.prototype, "publisherAppIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherApps", elemType: mobileapplication_1.MobileApplication }),
        __metadata("design:type", Array)
    ], PublisherProfileApiProto.prototype, "publisherApps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherDomains" }),
        __metadata("design:type", Array)
    ], PublisherProfileApiProto.prototype, "publisherDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherProfileId" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "publisherProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherProvidedForecast" }),
        __metadata("design:type", publisherprovidedforecast_1.PublisherProvidedForecast)
    ], PublisherProfileApiProto.prototype, "publisherProvidedForecast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rateCardInfoLink" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "rateCardInfoLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=samplePageLink" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "samplePageLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seller" }),
        __metadata("design:type", seller_1.Seller)
    ], PublisherProfileApiProto.prototype, "seller", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PublisherProfileApiProto.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topHeadlines" }),
        __metadata("design:type", Array)
    ], PublisherProfileApiProto.prototype, "topHeadlines", void 0);
    return PublisherProfileApiProto;
}(utils_1.SpeakeasyBase));
exports.PublisherProfileApiProto = PublisherProfileApiProto;
