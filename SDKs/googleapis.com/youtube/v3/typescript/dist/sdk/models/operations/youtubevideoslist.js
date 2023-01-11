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
exports.YoutubeVideosListResponse = exports.YoutubeVideosListRequest = exports.YoutubeVideosListSecurity = exports.YoutubeVideosListSecurityOption4 = exports.YoutubeVideosListSecurityOption3 = exports.YoutubeVideosListSecurityOption2 = exports.YoutubeVideosListSecurityOption1 = exports.YoutubeVideosListQueryParams = exports.YoutubeVideosListMyRatingEnum = exports.YoutubeVideosListChartEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeVideosListChartEnum;
(function (YoutubeVideosListChartEnum) {
    YoutubeVideosListChartEnum["ChartUnspecified"] = "chartUnspecified";
    YoutubeVideosListChartEnum["MostPopular"] = "mostPopular";
})(YoutubeVideosListChartEnum = exports.YoutubeVideosListChartEnum || (exports.YoutubeVideosListChartEnum = {}));
var YoutubeVideosListMyRatingEnum;
(function (YoutubeVideosListMyRatingEnum) {
    YoutubeVideosListMyRatingEnum["None"] = "none";
    YoutubeVideosListMyRatingEnum["Like"] = "like";
    YoutubeVideosListMyRatingEnum["Dislike"] = "dislike";
})(YoutubeVideosListMyRatingEnum = exports.YoutubeVideosListMyRatingEnum || (exports.YoutubeVideosListMyRatingEnum = {}));
var YoutubeVideosListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideosListQueryParams, _super);
    function YoutubeVideosListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=chart" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "chart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "hl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeVideosListQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxHeight" }),
        __metadata("design:type", Number)
    ], YoutubeVideosListQueryParams.prototype, "maxHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeVideosListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxWidth" }),
        __metadata("design:type", Number)
    ], YoutubeVideosListQueryParams.prototype, "maxWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=myRating" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "myRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeVideosListQueryParams.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=regionCode" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "regionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoCategoryId" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "videoCategoryId", void 0);
    return YoutubeVideosListQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListQueryParams = YoutubeVideosListQueryParams;
var YoutubeVideosListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption1, _super);
    function YoutubeVideosListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListSecurityOption1 = YoutubeVideosListSecurityOption1;
var YoutubeVideosListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption2, _super);
    function YoutubeVideosListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListSecurityOption2 = YoutubeVideosListSecurityOption2;
var YoutubeVideosListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption3, _super);
    function YoutubeVideosListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListSecurityOption3 = YoutubeVideosListSecurityOption3;
var YoutubeVideosListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption4, _super);
    function YoutubeVideosListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListSecurityOption4 = YoutubeVideosListSecurityOption4;
var YoutubeVideosListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurity, _super);
    function YoutubeVideosListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption1)
    ], YoutubeVideosListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption2)
    ], YoutubeVideosListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption3)
    ], YoutubeVideosListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption4)
    ], YoutubeVideosListSecurity.prototype, "option4", void 0);
    return YoutubeVideosListSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListSecurity = YoutubeVideosListSecurity;
var YoutubeVideosListRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideosListRequest, _super);
    function YoutubeVideosListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeVideosListQueryParams)
    ], YoutubeVideosListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeVideosListSecurity)
    ], YoutubeVideosListRequest.prototype, "security", void 0);
    return YoutubeVideosListRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListRequest = YoutubeVideosListRequest;
var YoutubeVideosListResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideosListResponse, _super);
    function YoutubeVideosListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeVideosListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeVideosListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VideoListResponse)
    ], YoutubeVideosListResponse.prototype, "videoListResponse", void 0);
    return YoutubeVideosListResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosListResponse = YoutubeVideosListResponse;
