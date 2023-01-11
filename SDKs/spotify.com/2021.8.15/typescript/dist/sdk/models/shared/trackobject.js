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
exports.TrackObject = void 0;
var utils_1 = require("../../../internal/utils");
var simplifiedalbumobject_1 = require("./simplifiedalbumobject");
var artistobject_1 = require("./artistobject");
var externalidobject_1 = require("./externalidobject");
var externalurlobject_1 = require("./externalurlobject");
var linkedtrackobject_1 = require("./linkedtrackobject");
var trackrestrictionobject_1 = require("./trackrestrictionobject");
// TrackObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-trackobject - Find more info on the official Spotify Web API Reference
**/
var TrackObject = /** @class */ (function (_super) {
    __extends(TrackObject, _super);
    function TrackObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=album" }),
        __metadata("design:type", simplifiedalbumobject_1.SimplifiedAlbumObject)
    ], TrackObject.prototype, "album", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artistobject_1.ArtistObject }),
        __metadata("design:type", Array)
    ], TrackObject.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available_markets" }),
        __metadata("design:type", Array)
    ], TrackObject.prototype, "availableMarkets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disc_number" }),
        __metadata("design:type", Number)
    ], TrackObject.prototype, "discNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration_ms" }),
        __metadata("design:type", Number)
    ], TrackObject.prototype, "durationMs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=explicit" }),
        __metadata("design:type", Boolean)
    ], TrackObject.prototype, "explicit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_ids" }),
        __metadata("design:type", externalidobject_1.ExternalIdObject)
    ], TrackObject.prototype, "externalIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_urls" }),
        __metadata("design:type", externalurlobject_1.ExternalUrlObject)
    ], TrackObject.prototype, "externalUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], TrackObject.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TrackObject.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_local" }),
        __metadata("design:type", Boolean)
    ], TrackObject.prototype, "isLocal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_playable" }),
        __metadata("design:type", Boolean)
    ], TrackObject.prototype, "isPlayable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linked_from" }),
        __metadata("design:type", linkedtrackobject_1.LinkedTrackObject)
    ], TrackObject.prototype, "linkedFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TrackObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=popularity" }),
        __metadata("design:type", Number)
    ], TrackObject.prototype, "popularity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview_url" }),
        __metadata("design:type", String)
    ], TrackObject.prototype, "previewUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=restrictions" }),
        __metadata("design:type", trackrestrictionobject_1.TrackRestrictionObject)
    ], TrackObject.prototype, "restrictions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track_number" }),
        __metadata("design:type", Number)
    ], TrackObject.prototype, "trackNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TrackObject.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], TrackObject.prototype, "uri", void 0);
    return TrackObject;
}(utils_1.SpeakeasyBase));
exports.TrackObject = TrackObject;
