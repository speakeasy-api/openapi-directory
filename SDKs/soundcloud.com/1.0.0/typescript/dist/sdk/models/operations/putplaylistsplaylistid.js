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
exports.PutPlaylistsPlaylistIdResponse = exports.PutPlaylistsPlaylistIdRequest = exports.PutPlaylistsPlaylistId200ApplicationJson = exports.PutPlaylistsPlaylistId200ApplicationJsonTracks = exports.PutPlaylistsPlaylistIdSecurity = exports.PutPlaylistsPlaylistIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutPlaylistsPlaylistIdPathParams = /** @class */ (function (_super) {
    __extends(PutPlaylistsPlaylistIdPathParams, _super);
    function PutPlaylistsPlaylistIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistIdPathParams.prototype, "playlistId", void 0);
    return PutPlaylistsPlaylistIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutPlaylistsPlaylistIdPathParams = PutPlaylistsPlaylistIdPathParams;
var PutPlaylistsPlaylistIdSecurity = /** @class */ (function (_super) {
    __extends(PutPlaylistsPlaylistIdSecurity, _super);
    function PutPlaylistsPlaylistIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeAuthHeader)
    ], PutPlaylistsPlaylistIdSecurity.prototype, "authHeader", void 0);
    return PutPlaylistsPlaylistIdSecurity;
}(utils_1.SpeakeasyBase));
exports.PutPlaylistsPlaylistIdSecurity = PutPlaylistsPlaylistIdSecurity;
// PutPlaylistsPlaylistId200ApplicationJsonTracks
/**
 * Soundcloud Track object.
**/
var PutPlaylistsPlaylistId200ApplicationJsonTracks = /** @class */ (function (_super) {
    __extends(PutPlaylistsPlaylistId200ApplicationJsonTracks, _super);
    function PutPlaylistsPlaylistId200ApplicationJsonTracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artwork_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "artworkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bpm" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "bpm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment_count" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "commentCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentable" }),
        __metadata("design:type", Boolean)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "commentable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_count" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "downloadCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadable" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "downloadable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embeddable_by" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "embeddableBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=favoritings_count" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "favoritingsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genre" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "genre", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isrc" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "isrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key_signature" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "keySignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_name" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "labelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "permalinkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playback_count" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "playbackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_title" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "purchaseTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "purchaseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "release", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_day" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "releaseDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_month" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "releaseMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_year" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "releaseYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharing" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "sharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stream_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "streamUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamable" }),
        __metadata("design:type", Boolean)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "streamable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag_list" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", shared.MetaUser)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_favorite" }),
        __metadata("design:type", Boolean)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "userFavorite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_playback_count" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "userPlaybackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waveform_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJsonTracks.prototype, "waveformUrl", void 0);
    return PutPlaylistsPlaylistId200ApplicationJsonTracks;
}(utils_1.SpeakeasyBase));
exports.PutPlaylistsPlaylistId200ApplicationJsonTracks = PutPlaylistsPlaylistId200ApplicationJsonTracks;
// PutPlaylistsPlaylistId200ApplicationJson
/**
 * Soundcloud Playlist Object
**/
var PutPlaylistsPlaylistId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutPlaylistsPlaylistId200ApplicationJson, _super);
    function PutPlaylistsPlaylistId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artwork_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "artworkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadable" }),
        __metadata("design:type", Boolean)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "downloadable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ean" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "ean", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embeddable_by" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "embeddableBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genre" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "genre", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_id" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "labelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_name" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "labelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "permalink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "permalinkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playlist_type" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "playlistType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_title" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "purchaseTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_url" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "purchaseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "release", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_day" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "releaseDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_month" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "releaseMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_year" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "releaseYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharing" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "sharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamable" }),
        __metadata("design:type", Boolean)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "streamable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag_list" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track_count" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "trackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracks", elemType: PutPlaylistsPlaylistId200ApplicationJsonTracks }),
        __metadata("design:type", Array)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "tracks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", shared.MetaUser)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistId200ApplicationJson.prototype, "userId", void 0);
    return PutPlaylistsPlaylistId200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutPlaylistsPlaylistId200ApplicationJson = PutPlaylistsPlaylistId200ApplicationJson;
var PutPlaylistsPlaylistIdRequest = /** @class */ (function (_super) {
    __extends(PutPlaylistsPlaylistIdRequest, _super);
    function PutPlaylistsPlaylistIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutPlaylistsPlaylistIdPathParams)
    ], PutPlaylistsPlaylistIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateUpdatePlaylistRequest)
    ], PutPlaylistsPlaylistIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutPlaylistsPlaylistIdSecurity)
    ], PutPlaylistsPlaylistIdRequest.prototype, "security", void 0);
    return PutPlaylistsPlaylistIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutPlaylistsPlaylistIdRequest = PutPlaylistsPlaylistIdRequest;
var PutPlaylistsPlaylistIdResponse = /** @class */ (function (_super) {
    __extends(PutPlaylistsPlaylistIdResponse, _super);
    function PutPlaylistsPlaylistIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutPlaylistsPlaylistIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], PutPlaylistsPlaylistIdResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutPlaylistsPlaylistIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutPlaylistsPlaylistId200ApplicationJson)
    ], PutPlaylistsPlaylistIdResponse.prototype, "putPlaylistsPlaylistId200ApplicationJSONObject", void 0);
    return PutPlaylistsPlaylistIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutPlaylistsPlaylistIdResponse = PutPlaylistsPlaylistIdResponse;
