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
exports.TrackMetadataRequest = exports.TrackMetadataRequestTrack = exports.TrackMetadataRequestTrackSharingEnum = exports.TrackMetadataRequestTrackLicenseEnum = exports.TrackMetadataRequestTrackEmbeddableByEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TrackMetadataRequestTrackEmbeddableByEnum;
(function (TrackMetadataRequestTrackEmbeddableByEnum) {
    TrackMetadataRequestTrackEmbeddableByEnum["All"] = "all";
    TrackMetadataRequestTrackEmbeddableByEnum["Me"] = "me";
    TrackMetadataRequestTrackEmbeddableByEnum["None"] = "none";
})(TrackMetadataRequestTrackEmbeddableByEnum = exports.TrackMetadataRequestTrackEmbeddableByEnum || (exports.TrackMetadataRequestTrackEmbeddableByEnum = {}));
var TrackMetadataRequestTrackLicenseEnum;
(function (TrackMetadataRequestTrackLicenseEnum) {
    TrackMetadataRequestTrackLicenseEnum["NoRightsReserved"] = "no-rights-reserved";
    TrackMetadataRequestTrackLicenseEnum["AllRightsReserved"] = "all-rights-reserved";
    TrackMetadataRequestTrackLicenseEnum["CcBy"] = "cc-by";
    TrackMetadataRequestTrackLicenseEnum["CcByNc"] = "cc-by-nc";
    TrackMetadataRequestTrackLicenseEnum["CcByNd"] = "cc-by-nd";
    TrackMetadataRequestTrackLicenseEnum["CcBySa"] = "cc-by-sa";
    TrackMetadataRequestTrackLicenseEnum["CcByNcNd"] = "cc-by-nc-nd";
    TrackMetadataRequestTrackLicenseEnum["CcByNcSa"] = "cc-by-nc-sa";
})(TrackMetadataRequestTrackLicenseEnum = exports.TrackMetadataRequestTrackLicenseEnum || (exports.TrackMetadataRequestTrackLicenseEnum = {}));
var TrackMetadataRequestTrackSharingEnum;
(function (TrackMetadataRequestTrackSharingEnum) {
    TrackMetadataRequestTrackSharingEnum["Public"] = "public";
    TrackMetadataRequestTrackSharingEnum["Private"] = "private";
})(TrackMetadataRequestTrackSharingEnum = exports.TrackMetadataRequestTrackSharingEnum || (exports.TrackMetadataRequestTrackSharingEnum = {}));
var TrackMetadataRequestTrack = /** @class */ (function (_super) {
    __extends(TrackMetadataRequestTrack, _super);
    function TrackMetadataRequestTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentable" }),
        __metadata("design:type", Boolean)
    ], TrackMetadataRequestTrack.prototype, "commentable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadable" }),
        __metadata("design:type", Boolean)
    ], TrackMetadataRequestTrack.prototype, "downloadable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embeddable_by" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "embeddableBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genre" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "genre", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isrc" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "isrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_name" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "labelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "permalink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_url" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "purchaseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "release", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_date" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharing" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "sharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamable" }),
        __metadata("design:type", Boolean)
    ], TrackMetadataRequestTrack.prototype, "streamable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag_list" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TrackMetadataRequestTrack.prototype, "title", void 0);
    return TrackMetadataRequestTrack;
}(utils_1.SpeakeasyBase));
exports.TrackMetadataRequestTrack = TrackMetadataRequestTrack;
var TrackMetadataRequest = /** @class */ (function (_super) {
    __extends(TrackMetadataRequest, _super);
    function TrackMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track" }),
        __metadata("design:type", TrackMetadataRequestTrack)
    ], TrackMetadataRequest.prototype, "track", void 0);
    return TrackMetadataRequest;
}(utils_1.SpeakeasyBase));
exports.TrackMetadataRequest = TrackMetadataRequest;
