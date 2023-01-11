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
exports.VideoMetadata = exports.VideoMetadataVastVersionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var mediafile_1 = require("./mediafile");
var VideoMetadataVastVersionEnum;
(function (VideoMetadataVastVersionEnum) {
    VideoMetadataVastVersionEnum["VastVersionUnspecified"] = "VAST_VERSION_UNSPECIFIED";
    VideoMetadataVastVersionEnum["VastVersion10"] = "VAST_VERSION_1_0";
    VideoMetadataVastVersionEnum["VastVersion20"] = "VAST_VERSION_2_0";
    VideoMetadataVastVersionEnum["VastVersion30"] = "VAST_VERSION_3_0";
    VideoMetadataVastVersionEnum["VastVersion40"] = "VAST_VERSION_4_0";
})(VideoMetadataVastVersionEnum = exports.VideoMetadataVastVersionEnum || (exports.VideoMetadataVastVersionEnum = {}));
// VideoMetadata
/**
 * Video metadata for a creative.
**/
var VideoMetadata = /** @class */ (function (_super) {
    __extends(VideoMetadata, _super);
    function VideoMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], VideoMetadata.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isValidVast" }),
        __metadata("design:type", Boolean)
    ], VideoMetadata.prototype, "isValidVast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isVpaid" }),
        __metadata("design:type", Boolean)
    ], VideoMetadata.prototype, "isVpaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mediaFiles", elemType: mediafile_1.MediaFile }),
        __metadata("design:type", Array)
    ], VideoMetadata.prototype, "mediaFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skipOffset" }),
        __metadata("design:type", String)
    ], VideoMetadata.prototype, "skipOffset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vastVersion" }),
        __metadata("design:type", String)
    ], VideoMetadata.prototype, "vastVersion", void 0);
    return VideoMetadata;
}(utils_1.SpeakeasyBase));
exports.VideoMetadata = VideoMetadata;
