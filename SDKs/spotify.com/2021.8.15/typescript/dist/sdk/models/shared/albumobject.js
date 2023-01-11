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
exports.AlbumObject = exports.AlbumObjectTracks = void 0;
var utils_1 = require("../../../internal/utils");
var simplifiedtrackobject_1 = require("./simplifiedtrackobject");
var artistobject_1 = require("./artistobject");
var copyrightobject_1 = require("./copyrightobject");
var externalidobject_1 = require("./externalidobject");
var externalurlobject_1 = require("./externalurlobject");
var imageobject_1 = require("./imageobject");
var albumrestrictionobject_1 = require("./albumrestrictionobject");
// AlbumObjectTracks
/**
 * The tracks of the album.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var AlbumObjectTracks = /** @class */ (function (_super) {
    __extends(AlbumObjectTracks, _super);
    function AlbumObjectTracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], AlbumObjectTracks.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: simplifiedtrackobject_1.SimplifiedTrackObject }),
        __metadata("design:type", Array)
    ], AlbumObjectTracks.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], AlbumObjectTracks.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], AlbumObjectTracks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], AlbumObjectTracks.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], AlbumObjectTracks.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], AlbumObjectTracks.prototype, "total", void 0);
    return AlbumObjectTracks;
}(utils_1.SpeakeasyBase));
exports.AlbumObjectTracks = AlbumObjectTracks;
// AlbumObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-albumobject - Find more info on the official Spotify Web API Reference
**/
var AlbumObject = /** @class */ (function (_super) {
    __extends(AlbumObject, _super);
    function AlbumObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=album_type" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "albumType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artistobject_1.ArtistObject }),
        __metadata("design:type", Array)
    ], AlbumObject.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available_markets" }),
        __metadata("design:type", Array)
    ], AlbumObject.prototype, "availableMarkets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyrights", elemType: copyrightobject_1.CopyrightObject }),
        __metadata("design:type", Array)
    ], AlbumObject.prototype, "copyrights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_ids" }),
        __metadata("design:type", externalidobject_1.ExternalIdObject)
    ], AlbumObject.prototype, "externalIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_urls" }),
        __metadata("design:type", externalurlobject_1.ExternalUrlObject)
    ], AlbumObject.prototype, "externalUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genres" }),
        __metadata("design:type", Array)
    ], AlbumObject.prototype, "genres", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images", elemType: imageobject_1.ImageObject }),
        __metadata("design:type", Array)
    ], AlbumObject.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=popularity" }),
        __metadata("design:type", Number)
    ], AlbumObject.prototype, "popularity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_date" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_date_precision" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "releaseDatePrecision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=restrictions" }),
        __metadata("design:type", albumrestrictionobject_1.AlbumRestrictionObject)
    ], AlbumObject.prototype, "restrictions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_tracks" }),
        __metadata("design:type", Number)
    ], AlbumObject.prototype, "totalTracks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracks" }),
        __metadata("design:type", AlbumObjectTracks)
    ], AlbumObject.prototype, "tracks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AlbumObject.prototype, "uri", void 0);
    return AlbumObject;
}(utils_1.SpeakeasyBase));
exports.AlbumObject = AlbumObject;
