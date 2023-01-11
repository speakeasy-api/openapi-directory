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
exports.Location = exports.LocationInput = void 0;
var utils_1 = require("../../../internal/utils");
var adwordslocationextensions_1 = require("./adwordslocationextensions");
var categories_1 = require("./categories");
var latlng_1 = require("./latlng");
var morehours_1 = require("./morehours");
var openinfo_1 = require("./openinfo");
var phonenumbers_1 = require("./phonenumbers");
var profile_1 = require("./profile");
var businesshours_1 = require("./businesshours");
var relationshipdata_1 = require("./relationshipdata");
var serviceareabusiness_1 = require("./serviceareabusiness");
var serviceitem_1 = require("./serviceitem");
var specialhours_1 = require("./specialhours");
var postaladdress_1 = require("./postaladdress");
var categories_2 = require("./categories");
var metadata_1 = require("./metadata");
var openinfo_2 = require("./openinfo");
// LocationInput
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
var LocationInput = /** @class */ (function (_super) {
    __extends(LocationInput, _super);
    function LocationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adWordsLocationExtensions" }),
        __metadata("design:type", adwordslocationextensions_1.AdWordsLocationExtensions)
    ], LocationInput.prototype, "adWordsLocationExtensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", categories_1.CategoriesInput)
    ], LocationInput.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latlng" }),
        __metadata("design:type", latlng_1.LatLng)
    ], LocationInput.prototype, "latlng", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moreHours", elemType: morehours_1.MoreHours }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "moreHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=openInfo" }),
        __metadata("design:type", openinfo_1.OpenInfoInput)
    ], LocationInput.prototype, "openInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneNumbers" }),
        __metadata("design:type", phonenumbers_1.PhoneNumbers)
    ], LocationInput.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", profile_1.Profile)
    ], LocationInput.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regularHours" }),
        __metadata("design:type", businesshours_1.BusinessHours)
    ], LocationInput.prototype, "regularHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationshipData" }),
        __metadata("design:type", relationshipdata_1.RelationshipData)
    ], LocationInput.prototype, "relationshipData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceArea" }),
        __metadata("design:type", serviceareabusiness_1.ServiceAreaBusiness)
    ], LocationInput.prototype, "serviceArea", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceItems", elemType: serviceitem_1.ServiceItem }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "serviceItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specialHours" }),
        __metadata("design:type", specialhours_1.SpecialHours)
    ], LocationInput.prototype, "specialHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeCode" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "storeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storefrontAddress" }),
        __metadata("design:type", postaladdress_1.PostalAddress)
    ], LocationInput.prototype, "storefrontAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websiteUri" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "websiteUri", void 0);
    return LocationInput;
}(utils_1.SpeakeasyBase));
exports.LocationInput = LocationInput;
// Location
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adWordsLocationExtensions" }),
        __metadata("design:type", adwordslocationextensions_1.AdWordsLocationExtensions)
    ], Location.prototype, "adWordsLocationExtensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", categories_2.Categories)
    ], Location.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], Location.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], Location.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latlng" }),
        __metadata("design:type", latlng_1.LatLng)
    ], Location.prototype, "latlng", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", metadata_1.Metadata)
    ], Location.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moreHours", elemType: morehours_1.MoreHours }),
        __metadata("design:type", Array)
    ], Location.prototype, "moreHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Location.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=openInfo" }),
        __metadata("design:type", openinfo_2.OpenInfo)
    ], Location.prototype, "openInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneNumbers" }),
        __metadata("design:type", phonenumbers_1.PhoneNumbers)
    ], Location.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", profile_1.Profile)
    ], Location.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regularHours" }),
        __metadata("design:type", businesshours_1.BusinessHours)
    ], Location.prototype, "regularHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationshipData" }),
        __metadata("design:type", relationshipdata_1.RelationshipData)
    ], Location.prototype, "relationshipData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceArea" }),
        __metadata("design:type", serviceareabusiness_1.ServiceAreaBusiness)
    ], Location.prototype, "serviceArea", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceItems", elemType: serviceitem_1.ServiceItem }),
        __metadata("design:type", Array)
    ], Location.prototype, "serviceItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specialHours" }),
        __metadata("design:type", specialhours_1.SpecialHours)
    ], Location.prototype, "specialHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeCode" }),
        __metadata("design:type", String)
    ], Location.prototype, "storeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storefrontAddress" }),
        __metadata("design:type", postaladdress_1.PostalAddress)
    ], Location.prototype, "storefrontAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Location.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websiteUri" }),
        __metadata("design:type", String)
    ], Location.prototype, "websiteUri", void 0);
    return Location;
}(utils_1.SpeakeasyBase));
exports.Location = Location;
