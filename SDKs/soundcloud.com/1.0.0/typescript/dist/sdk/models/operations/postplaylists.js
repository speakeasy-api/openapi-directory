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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPlaylistsResponse = exports.PostPlaylistsRequest = exports.PostPlaylists201ApplicationJson = exports.PostPlaylists201ApplicationJsonTracks = exports.PostPlaylistsSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostPlaylistsSecurity = /** @class */ (function (_super) {
    __extends(PostPlaylistsSecurity, _super);
    function PostPlaylistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeAuthHeader)
    ], PostPlaylistsSecurity.prototype, "authHeader", void 0);
    return PostPlaylistsSecurity;
}(utils_1.SpeakeasyBase));
exports.PostPlaylistsSecurity = PostPlaylistsSecurity;
// PostPlaylists201ApplicationJsonTracks
/**
 * Soundcloud Track object.
**/
var PostPlaylists201ApplicationJsonTracks = /** @class */ (function (_super) {
    __extends(PostPlaylists201ApplicationJsonTracks, _super);
    function PostPlaylists201ApplicationJsonTracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artwork_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "artworkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bpm" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "bpm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment_count" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "commentCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentable" }),
        __metadata("design:type", Boolean)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "commentable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_count" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "downloadCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadable" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "downloadable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embeddable_by" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "embeddableBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=favoritings_count" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "favoritingsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genre" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "genre", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isrc" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "isrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key_signature" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "keySignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_name" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "labelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "permalinkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playback_count" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "playbackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_title" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "purchaseTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "purchaseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "release", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_day" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "releaseDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_month" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "releaseMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_year" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "releaseYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharing" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "sharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stream_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "streamUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamable" }),
        __metadata("design:type", Boolean)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "streamable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag_list" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", shared.MetaUser)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_favorite" }),
        __metadata("design:type", Boolean)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "userFavorite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_playback_count" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "userPlaybackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waveform_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJsonTracks.prototype, "waveformUrl", void 0);
    return PostPlaylists201ApplicationJsonTracks;
}(utils_1.SpeakeasyBase));
exports.PostPlaylists201ApplicationJsonTracks = PostPlaylists201ApplicationJsonTracks;
// PostPlaylists201ApplicationJson
/**
 * Soundcloud Playlist Object
**/
var PostPlaylists201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPlaylists201ApplicationJson, _super);
    function PostPlaylists201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artwork_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "artworkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadable" }),
        __metadata("design:type", Boolean)
    ], PostPlaylists201ApplicationJson.prototype, "downloadable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ean" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "ean", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embeddable_by" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "embeddableBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genre" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "genre", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_id" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "labelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_name" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "labelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "permalink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "permalinkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playlist_type" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "playlistType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_title" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "purchaseTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_url" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "purchaseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "release", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_day" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "releaseDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_month" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "releaseMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_year" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "releaseYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharing" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "sharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamable" }),
        __metadata("design:type", Boolean)
    ], PostPlaylists201ApplicationJson.prototype, "streamable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag_list" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track_count" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "trackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracks", elemType: PostPlaylists201ApplicationJsonTracks }),
        __metadata("design:type", Array)
    ], PostPlaylists201ApplicationJson.prototype, "tracks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PostPlaylists201ApplicationJson.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", shared.MetaUser)
    ], PostPlaylists201ApplicationJson.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], PostPlaylists201ApplicationJson.prototype, "userId", void 0);
    return PostPlaylists201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPlaylists201ApplicationJson = PostPlaylists201ApplicationJson;
var PostPlaylistsRequest = /** @class */ (function (_super) {
    __extends(PostPlaylistsRequest, _super);
    function PostPlaylistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateUpdatePlaylistRequest)
    ], PostPlaylistsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPlaylistsSecurity)
    ], PostPlaylistsRequest.prototype, "security", void 0);
    return PostPlaylistsRequest;
}(utils_1.SpeakeasyBase));
exports.PostPlaylistsRequest = PostPlaylistsRequest;
var PostPlaylistsResponse = /** @class */ (function (_super) {
    __extends(PostPlaylistsResponse, _super);
    function PostPlaylistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPlaylistsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], PostPlaylistsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPlaylistsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPlaylists201ApplicationJson)
    ], PostPlaylistsResponse.prototype, "postPlaylists201ApplicationJSONObject", void 0);
    return PostPlaylistsResponse;
}(utils_1.SpeakeasyBase));
exports.PostPlaylistsResponse = PostPlaylistsResponse;
