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
exports.MediaItem = exports.MediaItemMediaFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var attribution_1 = require("./attribution");
var mediaitemdataref_1 = require("./mediaitemdataref");
var dimensions_1 = require("./dimensions");
var mediainsights_1 = require("./mediainsights");
var locationassociation_1 = require("./locationassociation");
var MediaItemMediaFormatEnum;
(function (MediaItemMediaFormatEnum) {
    MediaItemMediaFormatEnum["MediaFormatUnspecified"] = "MEDIA_FORMAT_UNSPECIFIED";
    MediaItemMediaFormatEnum["Photo"] = "PHOTO";
    MediaItemMediaFormatEnum["Video"] = "VIDEO";
})(MediaItemMediaFormatEnum = exports.MediaItemMediaFormatEnum || (exports.MediaItemMediaFormatEnum = {}));
// MediaItem
/**
 * A single media item.
**/
var MediaItem = /** @class */ (function (_super) {
    __extends(MediaItem, _super);
    function MediaItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attribution" }),
        __metadata("design:type", attribution_1.Attribution)
    ], MediaItem.prototype, "attribution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataRef" }),
        __metadata("design:type", mediaitemdataref_1.MediaItemDataRef)
    ], MediaItem.prototype, "dataRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions" }),
        __metadata("design:type", dimensions_1.Dimensions)
    ], MediaItem.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "googleUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insights" }),
        __metadata("design:type", mediainsights_1.MediaInsights)
    ], MediaItem.prototype, "insights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locationAssociation" }),
        __metadata("design:type", locationassociation_1.LocationAssociation)
    ], MediaItem.prototype, "locationAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mediaFormat" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "mediaFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnailUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "thumbnailUrl", void 0);
    return MediaItem;
}(utils_1.SpeakeasyBase));
exports.MediaItem = MediaItem;
