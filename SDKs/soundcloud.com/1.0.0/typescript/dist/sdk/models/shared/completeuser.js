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
exports.CompleteUser = exports.CompleteUserQuota = void 0;
var utils_1 = require("../../../internal/utils");
// CompleteUserQuota
/**
 * user's upload quota
**/
var CompleteUserQuota = /** @class */ (function (_super) {
    __extends(CompleteUserQuota, _super);
    function CompleteUserQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unlimited_upload_quota" }),
        __metadata("design:type", Boolean)
    ], CompleteUserQuota.prototype, "unlimitedUploadQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_seconds_used" }),
        __metadata("design:type", Number)
    ], CompleteUserQuota.prototype, "uploadSecondsUsed", void 0);
    return CompleteUserQuota;
}(utils_1.SpeakeasyBase));
exports.CompleteUserQuota = CompleteUserQuota;
// CompleteUser
/**
 * SoundCloud Complete User object
**/
var CompleteUser = /** @class */ (function (_super) {
    __extends(CompleteUser, _super);
    function CompleteUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "avatarUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discogs_name" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "discogsName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "followersCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followings_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "followingsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=myspace_name" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "myspaceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "permalink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "permalinkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "plan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playlist_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "playlistCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_email_confirmed" }),
        __metadata("design:type", Boolean)
    ], CompleteUser.prototype, "primaryEmailConfirmed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_playlists_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "privatePlaylistsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_tracks_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "privateTracksCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_favorites_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "publicFavoritesCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quota" }),
        __metadata("design:type", CompleteUserQuota)
    ], CompleteUser.prototype, "quota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reposts_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "repostsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions" }),
        __metadata("design:type", Object)
    ], CompleteUser.prototype, "subscriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track_count" }),
        __metadata("design:type", Number)
    ], CompleteUser.prototype, "trackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "website", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website_title" }),
        __metadata("design:type", String)
    ], CompleteUser.prototype, "websiteTitle", void 0);
    return CompleteUser;
}(utils_1.SpeakeasyBase));
exports.CompleteUser = CompleteUser;
