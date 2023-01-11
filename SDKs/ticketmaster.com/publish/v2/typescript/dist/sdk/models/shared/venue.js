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
exports.Venue = exports.VenueTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var address_1 = require("./address");
var venueboxofficeinfo_1 = require("./venueboxofficeinfo");
var city_1 = require("./city");
var country_1 = require("./country");
var dma_1 = require("./dma");
var venuegeneralinfo_1 = require("./venuegeneralinfo");
var image_1 = require("./image");
var location_1 = require("./location");
var market_1 = require("./market");
var social_1 = require("./social");
var source_1 = require("./source");
var state_1 = require("./state");
var VenueTypeEnum;
(function (VenueTypeEnum) {
    VenueTypeEnum["Event"] = "event";
    VenueTypeEnum["Venue"] = "venue";
    VenueTypeEnum["Attraction"] = "attraction";
})(VenueTypeEnum = exports.VenueTypeEnum || (exports.VenueTypeEnum = {}));
// Venue
/**
 * Venue
**/
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessibleSeatingDetails" }),
        __metadata("design:type", Object)
    ], Venue.prototype, "accessibleSeatingDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Venue.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalInfos" }),
        __metadata("design:type", Object)
    ], Venue.prototype, "additionalInfos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", address_1.Address)
    ], Venue.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=boxOfficeInfo" }),
        __metadata("design:type", venueboxofficeinfo_1.VenueBoxOfficeInfo)
    ], Venue.prototype, "boxOfficeInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", city_1.City)
    ], Venue.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", country_1.Country)
    ], Venue.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Venue.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=descriptions" }),
        __metadata("design:type", Object)
    ], Venue.prototype, "descriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discoverable" }),
        __metadata("design:type", Boolean)
    ], Venue.prototype, "discoverable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], Venue.prototype, "distance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dma", elemType: dma_1.Dma }),
        __metadata("design:type", Array)
    ], Venue.prototype, "dma", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=generalInfo" }),
        __metadata("design:type", venuegeneralinfo_1.VenueGeneralInfo)
    ], Venue.prototype, "generalInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images", elemType: image_1.Image }),
        __metadata("design:type", Array)
    ], Venue.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", location_1.Location)
    ], Venue.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=markets", elemType: market_1.Market }),
        __metadata("design:type", Array)
    ], Venue.prototype, "markets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names" }),
        __metadata("design:type", Object)
    ], Venue.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parkingDetails" }),
        __metadata("design:type", Object)
    ], Venue.prototype, "parkingDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], Venue.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=references" }),
        __metadata("design:type", Object)
    ], Venue.prototype, "references", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", Array)
    ], Venue.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=social" }),
        __metadata("design:type", social_1.Social)
    ], Venue.prototype, "social", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", source_1.Source)
    ], Venue.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", state_1.State)
    ], Venue.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], Venue.prototype, "test", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Venue.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Venue.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], Venue.prototype, "units", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Venue.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Venue.prototype, "version", void 0);
    return Venue;
}(utils_1.SpeakeasyBase));
exports.Venue = Venue;
