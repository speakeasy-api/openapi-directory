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
exports.ShowObject = exports.ShowObjectEpisodes = void 0;
var utils_1 = require("../../../internal/utils");
var simplifiedepisodeobject_1 = require("./simplifiedepisodeobject");
var copyrightobject_1 = require("./copyrightobject");
var externalurlobject_1 = require("./externalurlobject");
var imageobject_1 = require("./imageobject");
// ShowObjectEpisodes
/**
 * A list of the show's episodes.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var ShowObjectEpisodes = /** @class */ (function (_super) {
    __extends(ShowObjectEpisodes, _super);
    function ShowObjectEpisodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ShowObjectEpisodes.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: simplifiedepisodeobject_1.SimplifiedEpisodeObject }),
        __metadata("design:type", Array)
    ], ShowObjectEpisodes.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], ShowObjectEpisodes.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ShowObjectEpisodes.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], ShowObjectEpisodes.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ShowObjectEpisodes.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ShowObjectEpisodes.prototype, "total", void 0);
    return ShowObjectEpisodes;
}(utils_1.SpeakeasyBase));
exports.ShowObjectEpisodes = ShowObjectEpisodes;
// ShowObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-showobject - Find more info on the official Spotify Web API Reference
**/
var ShowObject = /** @class */ (function (_super) {
    __extends(ShowObject, _super);
    function ShowObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available_markets" }),
        __metadata("design:type", Array)
    ], ShowObject.prototype, "availableMarkets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyrights", elemType: copyrightobject_1.CopyrightObject }),
        __metadata("design:type", Array)
    ], ShowObject.prototype, "copyrights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=episodes" }),
        __metadata("design:type", ShowObjectEpisodes)
    ], ShowObject.prototype, "episodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=explicit" }),
        __metadata("design:type", Boolean)
    ], ShowObject.prototype, "explicit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_urls" }),
        __metadata("design:type", externalurlobject_1.ExternalUrlObject)
    ], ShowObject.prototype, "externalUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_description" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "htmlDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images", elemType: imageobject_1.ImageObject }),
        __metadata("design:type", Array)
    ], ShowObject.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_externally_hosted" }),
        __metadata("design:type", Boolean)
    ], ShowObject.prototype, "isExternallyHosted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], ShowObject.prototype, "languages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_type" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "mediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ShowObject.prototype, "uri", void 0);
    return ShowObject;
}(utils_1.SpeakeasyBase));
exports.ShowObject = ShowObject;
