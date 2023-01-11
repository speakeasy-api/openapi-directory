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
exports.YoutubeSearchListResponse = exports.YoutubeSearchListRequest = exports.YoutubeSearchListSecurity = exports.YoutubeSearchListSecurityOption4 = exports.YoutubeSearchListSecurityOption3 = exports.YoutubeSearchListSecurityOption2 = exports.YoutubeSearchListSecurityOption1 = exports.YoutubeSearchListQueryParams = exports.YoutubeSearchListVideoTypeEnum = exports.YoutubeSearchListVideoSyndicatedEnum = exports.YoutubeSearchListVideoLicenseEnum = exports.YoutubeSearchListVideoEmbeddableEnum = exports.YoutubeSearchListVideoDurationEnum = exports.YoutubeSearchListVideoDimensionEnum = exports.YoutubeSearchListVideoDefinitionEnum = exports.YoutubeSearchListVideoCaptionEnum = exports.YoutubeSearchListSafeSearchEnum = exports.YoutubeSearchListOrderEnum = exports.YoutubeSearchListEventTypeEnum = exports.YoutubeSearchListChannelTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeSearchListChannelTypeEnum;
(function (YoutubeSearchListChannelTypeEnum) {
    YoutubeSearchListChannelTypeEnum["ChannelTypeUnspecified"] = "channelTypeUnspecified";
    YoutubeSearchListChannelTypeEnum["Any"] = "any";
    YoutubeSearchListChannelTypeEnum["Show"] = "show";
})(YoutubeSearchListChannelTypeEnum = exports.YoutubeSearchListChannelTypeEnum || (exports.YoutubeSearchListChannelTypeEnum = {}));
var YoutubeSearchListEventTypeEnum;
(function (YoutubeSearchListEventTypeEnum) {
    YoutubeSearchListEventTypeEnum["None"] = "none";
    YoutubeSearchListEventTypeEnum["Upcoming"] = "upcoming";
    YoutubeSearchListEventTypeEnum["Live"] = "live";
    YoutubeSearchListEventTypeEnum["Completed"] = "completed";
})(YoutubeSearchListEventTypeEnum = exports.YoutubeSearchListEventTypeEnum || (exports.YoutubeSearchListEventTypeEnum = {}));
var YoutubeSearchListOrderEnum;
(function (YoutubeSearchListOrderEnum) {
    YoutubeSearchListOrderEnum["SearchSortUnspecified"] = "searchSortUnspecified";
    YoutubeSearchListOrderEnum["Date"] = "date";
    YoutubeSearchListOrderEnum["Rating"] = "rating";
    YoutubeSearchListOrderEnum["ViewCount"] = "viewCount";
    YoutubeSearchListOrderEnum["Relevance"] = "relevance";
    YoutubeSearchListOrderEnum["Title"] = "title";
    YoutubeSearchListOrderEnum["VideoCount"] = "videoCount";
})(YoutubeSearchListOrderEnum = exports.YoutubeSearchListOrderEnum || (exports.YoutubeSearchListOrderEnum = {}));
var YoutubeSearchListSafeSearchEnum;
(function (YoutubeSearchListSafeSearchEnum) {
    YoutubeSearchListSafeSearchEnum["SafeSearchSettingUnspecified"] = "safeSearchSettingUnspecified";
    YoutubeSearchListSafeSearchEnum["None"] = "none";
    YoutubeSearchListSafeSearchEnum["Moderate"] = "moderate";
    YoutubeSearchListSafeSearchEnum["Strict"] = "strict";
})(YoutubeSearchListSafeSearchEnum = exports.YoutubeSearchListSafeSearchEnum || (exports.YoutubeSearchListSafeSearchEnum = {}));
var YoutubeSearchListVideoCaptionEnum;
(function (YoutubeSearchListVideoCaptionEnum) {
    YoutubeSearchListVideoCaptionEnum["VideoCaptionUnspecified"] = "videoCaptionUnspecified";
    YoutubeSearchListVideoCaptionEnum["Any"] = "any";
    YoutubeSearchListVideoCaptionEnum["ClosedCaption"] = "closedCaption";
    YoutubeSearchListVideoCaptionEnum["None"] = "none";
})(YoutubeSearchListVideoCaptionEnum = exports.YoutubeSearchListVideoCaptionEnum || (exports.YoutubeSearchListVideoCaptionEnum = {}));
var YoutubeSearchListVideoDefinitionEnum;
(function (YoutubeSearchListVideoDefinitionEnum) {
    YoutubeSearchListVideoDefinitionEnum["Any"] = "any";
    YoutubeSearchListVideoDefinitionEnum["Standard"] = "standard";
    YoutubeSearchListVideoDefinitionEnum["High"] = "high";
})(YoutubeSearchListVideoDefinitionEnum = exports.YoutubeSearchListVideoDefinitionEnum || (exports.YoutubeSearchListVideoDefinitionEnum = {}));
var YoutubeSearchListVideoDimensionEnum;
(function (YoutubeSearchListVideoDimensionEnum) {
    YoutubeSearchListVideoDimensionEnum["Any"] = "any";
    YoutubeSearchListVideoDimensionEnum["Twod"] = "2d";
    YoutubeSearchListVideoDimensionEnum["Threed"] = "3d";
})(YoutubeSearchListVideoDimensionEnum = exports.YoutubeSearchListVideoDimensionEnum || (exports.YoutubeSearchListVideoDimensionEnum = {}));
var YoutubeSearchListVideoDurationEnum;
(function (YoutubeSearchListVideoDurationEnum) {
    YoutubeSearchListVideoDurationEnum["VideoDurationUnspecified"] = "videoDurationUnspecified";
    YoutubeSearchListVideoDurationEnum["Any"] = "any";
    YoutubeSearchListVideoDurationEnum["Short"] = "short";
    YoutubeSearchListVideoDurationEnum["Medium"] = "medium";
    YoutubeSearchListVideoDurationEnum["Long"] = "long";
})(YoutubeSearchListVideoDurationEnum = exports.YoutubeSearchListVideoDurationEnum || (exports.YoutubeSearchListVideoDurationEnum = {}));
var YoutubeSearchListVideoEmbeddableEnum;
(function (YoutubeSearchListVideoEmbeddableEnum) {
    YoutubeSearchListVideoEmbeddableEnum["VideoEmbeddableUnspecified"] = "videoEmbeddableUnspecified";
    YoutubeSearchListVideoEmbeddableEnum["Any"] = "any";
    YoutubeSearchListVideoEmbeddableEnum["True"] = "true";
})(YoutubeSearchListVideoEmbeddableEnum = exports.YoutubeSearchListVideoEmbeddableEnum || (exports.YoutubeSearchListVideoEmbeddableEnum = {}));
var YoutubeSearchListVideoLicenseEnum;
(function (YoutubeSearchListVideoLicenseEnum) {
    YoutubeSearchListVideoLicenseEnum["Any"] = "any";
    YoutubeSearchListVideoLicenseEnum["Youtube"] = "youtube";
    YoutubeSearchListVideoLicenseEnum["CreativeCommon"] = "creativeCommon";
})(YoutubeSearchListVideoLicenseEnum = exports.YoutubeSearchListVideoLicenseEnum || (exports.YoutubeSearchListVideoLicenseEnum = {}));
var YoutubeSearchListVideoSyndicatedEnum;
(function (YoutubeSearchListVideoSyndicatedEnum) {
    YoutubeSearchListVideoSyndicatedEnum["VideoSyndicatedUnspecified"] = "videoSyndicatedUnspecified";
    YoutubeSearchListVideoSyndicatedEnum["Any"] = "any";
    YoutubeSearchListVideoSyndicatedEnum["True"] = "true";
})(YoutubeSearchListVideoSyndicatedEnum = exports.YoutubeSearchListVideoSyndicatedEnum || (exports.YoutubeSearchListVideoSyndicatedEnum = {}));
var YoutubeSearchListVideoTypeEnum;
(function (YoutubeSearchListVideoTypeEnum) {
    YoutubeSearchListVideoTypeEnum["VideoTypeUnspecified"] = "videoTypeUnspecified";
    YoutubeSearchListVideoTypeEnum["Any"] = "any";
    YoutubeSearchListVideoTypeEnum["Movie"] = "movie";
    YoutubeSearchListVideoTypeEnum["Episode"] = "episode";
})(YoutubeSearchListVideoTypeEnum = exports.YoutubeSearchListVideoTypeEnum || (exports.YoutubeSearchListVideoTypeEnum = {}));
var YoutubeSearchListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeSearchListQueryParams, _super);
    function YoutubeSearchListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=channelType" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "channelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=eventType" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "eventType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=forContentOwner" }),
        __metadata("design:type", Boolean)
    ], YoutubeSearchListQueryParams.prototype, "forContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=forDeveloper" }),
        __metadata("design:type", Boolean)
    ], YoutubeSearchListQueryParams.prototype, "forDeveloper", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=forMine" }),
        __metadata("design:type", Boolean)
    ], YoutubeSearchListQueryParams.prototype, "forMine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locationRadius" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "locationRadius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeSearchListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeSearchListQueryParams.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeSearchListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=publishedAfter" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "publishedAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=publishedBefore" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "publishedBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=regionCode" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "regionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relatedToVideoId" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "relatedToVideoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relevanceLanguage" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "relevanceLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=safeSearch" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "safeSearch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=topicId" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "topicId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], YoutubeSearchListQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoCaption" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoCategoryId" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoDefinition" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoDefinition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoDimension" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoDimension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoDuration" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoEmbeddable" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoEmbeddable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoLicense" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoLicense", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoSyndicated" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoSyndicated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoType" }),
        __metadata("design:type", String)
    ], YoutubeSearchListQueryParams.prototype, "videoType", void 0);
    return YoutubeSearchListQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListQueryParams = YoutubeSearchListQueryParams;
var YoutubeSearchListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeSearchListSecurityOption1, _super);
    function YoutubeSearchListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSearchListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSearchListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeSearchListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListSecurityOption1 = YoutubeSearchListSecurityOption1;
var YoutubeSearchListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeSearchListSecurityOption2, _super);
    function YoutubeSearchListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSearchListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSearchListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeSearchListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListSecurityOption2 = YoutubeSearchListSecurityOption2;
var YoutubeSearchListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeSearchListSecurityOption3, _super);
    function YoutubeSearchListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSearchListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSearchListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeSearchListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListSecurityOption3 = YoutubeSearchListSecurityOption3;
var YoutubeSearchListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeSearchListSecurityOption4, _super);
    function YoutubeSearchListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSearchListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSearchListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeSearchListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListSecurityOption4 = YoutubeSearchListSecurityOption4;
var YoutubeSearchListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeSearchListSecurity, _super);
    function YoutubeSearchListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSearchListSecurityOption1)
    ], YoutubeSearchListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSearchListSecurityOption2)
    ], YoutubeSearchListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSearchListSecurityOption3)
    ], YoutubeSearchListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSearchListSecurityOption4)
    ], YoutubeSearchListSecurity.prototype, "option4", void 0);
    return YoutubeSearchListSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListSecurity = YoutubeSearchListSecurity;
var YoutubeSearchListRequest = /** @class */ (function (_super) {
    __extends(YoutubeSearchListRequest, _super);
    function YoutubeSearchListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeSearchListQueryParams)
    ], YoutubeSearchListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeSearchListSecurity)
    ], YoutubeSearchListRequest.prototype, "security", void 0);
    return YoutubeSearchListRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListRequest = YoutubeSearchListRequest;
var YoutubeSearchListResponse = /** @class */ (function (_super) {
    __extends(YoutubeSearchListResponse, _super);
    function YoutubeSearchListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeSearchListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SearchListResponse)
    ], YoutubeSearchListResponse.prototype, "searchListResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeSearchListResponse.prototype, "statusCode", void 0);
    return YoutubeSearchListResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeSearchListResponse = YoutubeSearchListResponse;
