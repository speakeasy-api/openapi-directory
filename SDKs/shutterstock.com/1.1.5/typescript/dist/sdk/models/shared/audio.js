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
exports.Audio = void 0;
var utils_1 = require("../../../internal/utils");
var album_1 = require("./album");
var artist_1 = require("./artist");
var audioassets_1 = require("./audioassets");
var contributor_1 = require("./contributor");
var modelrelease_1 = require("./modelrelease");
// Audio
/**
 * Audio metadata
**/
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_date" }),
        __metadata("design:type", Date)
    ], Audio.prototype, "addedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=affiliate_url" }),
        __metadata("design:type", String)
    ], Audio.prototype, "affiliateUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=album" }),
        __metadata("design:type", album_1.Album)
    ], Audio.prototype, "album", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artist_1.Artist }),
        __metadata("design:type", Array)
    ], Audio.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", audioassets_1.AudioAssets)
    ], Audio.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bpm" }),
        __metadata("design:type", Number)
    ], Audio.prototype, "bpm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contributor" }),
        __metadata("design:type", contributor_1.Contributor)
    ], Audio.prototype, "contributor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted_time" }),
        __metadata("design:type", Date)
    ], Audio.prototype, "deletedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Audio.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Audio.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genres" }),
        __metadata("design:type", Array)
    ], Audio.prototype, "genres", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Audio.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instruments" }),
        __metadata("design:type", Array)
    ], Audio.prototype, "instruments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_adult" }),
        __metadata("design:type", Boolean)
    ], Audio.prototype, "isAdult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_instrumental" }),
        __metadata("design:type", Boolean)
    ], Audio.prototype, "isInstrumental", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isrc" }),
        __metadata("design:type", String)
    ], Audio.prototype, "isrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], Audio.prototype, "keywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Audio.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lyrics" }),
        __metadata("design:type", String)
    ], Audio.prototype, "lyrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_type" }),
        __metadata("design:type", String)
    ], Audio.prototype, "mediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model_releases", elemType: modelrelease_1.ModelRelease }),
        __metadata("design:type", Array)
    ], Audio.prototype, "modelReleases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moods" }),
        __metadata("design:type", Array)
    ], Audio.prototype, "moods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published_time" }),
        __metadata("design:type", Date)
    ], Audio.prototype, "publishedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_version" }),
        __metadata("design:type", String)
    ], Audio.prototype, "recordingVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releases" }),
        __metadata("design:type", Array)
    ], Audio.prototype, "releases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=similar_artists", elemType: artist_1.Artist }),
        __metadata("design:type", Array)
    ], Audio.prototype, "similarArtists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submitted_time" }),
        __metadata("design:type", Date)
    ], Audio.prototype, "submittedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Audio.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_time" }),
        __metadata("design:type", Date)
    ], Audio.prototype, "updatedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Audio.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vocal_description" }),
        __metadata("design:type", String)
    ], Audio.prototype, "vocalDescription", void 0);
    return Audio;
}(utils_1.SpeakeasyBase));
exports.Audio = Audio;
