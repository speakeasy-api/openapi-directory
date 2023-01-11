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
exports.UsersList = void 0;
var utils_1 = require("../../../internal/utils");
// UsersList
/**
 * SoundCloud User object
**/
var UsersList = /** @class */ (function (_super) {
    __extends(UsersList, _super);
    function UsersList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "avatarUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discogs_name" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "discogsName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers_count" }),
        __metadata("design:type", Number)
    ], UsersList.prototype, "followersCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followings_count" }),
        __metadata("design:type", Number)
    ], UsersList.prototype, "followingsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UsersList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified" }),
        __metadata("design:type", Date)
    ], UsersList.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=myspace_name" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "myspaceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "permalink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "permalinkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "plan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playlist_count" }),
        __metadata("design:type", Number)
    ], UsersList.prototype, "playlistCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_favorites_count" }),
        __metadata("design:type", Number)
    ], UsersList.prototype, "publicFavoritesCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reposts_count" }),
        __metadata("design:type", Number)
    ], UsersList.prototype, "repostsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions" }),
        __metadata("design:type", Object)
    ], UsersList.prototype, "subscriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track_count" }),
        __metadata("design:type", Number)
    ], UsersList.prototype, "trackCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "website", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website_title" }),
        __metadata("design:type", String)
    ], UsersList.prototype, "websiteTitle", void 0);
    return UsersList;
}(utils_1.SpeakeasyBase));
exports.UsersList = UsersList;
