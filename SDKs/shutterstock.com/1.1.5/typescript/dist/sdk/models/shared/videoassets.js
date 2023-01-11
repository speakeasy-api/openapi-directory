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
exports.VideoAssets = void 0;
var utils_1 = require("../../../internal/utils");
var videosizedetails_1 = require("./videosizedetails");
var url_1 = require("./url");
var urls_1 = require("./urls");
// VideoAssets
/**
 * Video asset information
**/
var VideoAssets = /** @class */ (function (_super) {
    __extends(VideoAssets, _super);
    function VideoAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=4k" }),
        __metadata("design:type", videosizedetails_1.VideoSizeDetails)
    ], VideoAssets.prototype, "fourk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hd" }),
        __metadata("design:type", videosizedetails_1.VideoSizeDetails)
    ], VideoAssets.prototype, "hd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview_jpg" }),
        __metadata("design:type", url_1.Url)
    ], VideoAssets.prototype, "previewJpg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview_mp4" }),
        __metadata("design:type", url_1.Url)
    ], VideoAssets.prototype, "previewMp4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview_webm" }),
        __metadata("design:type", url_1.Url)
    ], VideoAssets.prototype, "previewWebm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sd" }),
        __metadata("design:type", videosizedetails_1.VideoSizeDetails)
    ], VideoAssets.prototype, "sd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumb_jpg" }),
        __metadata("design:type", url_1.Url)
    ], VideoAssets.prototype, "thumbJpg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumb_jpgs" }),
        __metadata("design:type", urls_1.Urls)
    ], VideoAssets.prototype, "thumbJpgs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumb_mp4" }),
        __metadata("design:type", url_1.Url)
    ], VideoAssets.prototype, "thumbMp4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumb_webm" }),
        __metadata("design:type", url_1.Url)
    ], VideoAssets.prototype, "thumbWebm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=web" }),
        __metadata("design:type", videosizedetails_1.VideoSizeDetails)
    ], VideoAssets.prototype, "web", void 0);
    return VideoAssets;
}(utils_1.SpeakeasyBase));
exports.VideoAssets = VideoAssets;
