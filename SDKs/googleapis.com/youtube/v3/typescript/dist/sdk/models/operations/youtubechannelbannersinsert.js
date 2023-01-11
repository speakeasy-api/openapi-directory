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
exports.YoutubeChannelBannersInsertResponse = exports.YoutubeChannelBannersInsertRequest = exports.YoutubeChannelBannersInsertSecurity = exports.YoutubeChannelBannersInsertSecurityOption3 = exports.YoutubeChannelBannersInsertSecurityOption2 = exports.YoutubeChannelBannersInsertSecurityOption1 = exports.YoutubeChannelBannersInsertRequests = exports.YoutubeChannelBannersInsertQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeChannelBannersInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertQueryParams, _super);
    function YoutubeChannelBannersInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeChannelBannersInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertQueryParams = YoutubeChannelBannersInsertQueryParams;
var YoutubeChannelBannersInsertRequests = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertRequests, _super);
    function YoutubeChannelBannersInsertRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeChannelBannersInsertRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeChannelBannersInsertRequests.prototype, "imageJpeg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/png" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeChannelBannersInsertRequests.prototype, "imagePng", void 0);
    return YoutubeChannelBannersInsertRequests;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertRequests = YoutubeChannelBannersInsertRequests;
var YoutubeChannelBannersInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurityOption1, _super);
    function YoutubeChannelBannersInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelBannersInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelBannersInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeChannelBannersInsertSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertSecurityOption1 = YoutubeChannelBannersInsertSecurityOption1;
var YoutubeChannelBannersInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurityOption2, _super);
    function YoutubeChannelBannersInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelBannersInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelBannersInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeChannelBannersInsertSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertSecurityOption2 = YoutubeChannelBannersInsertSecurityOption2;
var YoutubeChannelBannersInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurityOption3, _super);
    function YoutubeChannelBannersInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelBannersInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelBannersInsertSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeChannelBannersInsertSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertSecurityOption3 = YoutubeChannelBannersInsertSecurityOption3;
var YoutubeChannelBannersInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurity, _super);
    function YoutubeChannelBannersInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelBannersInsertSecurityOption1)
    ], YoutubeChannelBannersInsertSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelBannersInsertSecurityOption2)
    ], YoutubeChannelBannersInsertSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelBannersInsertSecurityOption3)
    ], YoutubeChannelBannersInsertSecurity.prototype, "option3", void 0);
    return YoutubeChannelBannersInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertSecurity = YoutubeChannelBannersInsertSecurity;
var YoutubeChannelBannersInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertRequest, _super);
    function YoutubeChannelBannersInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeChannelBannersInsertQueryParams)
    ], YoutubeChannelBannersInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeChannelBannersInsertRequests)
    ], YoutubeChannelBannersInsertRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeChannelBannersInsertSecurity)
    ], YoutubeChannelBannersInsertRequest.prototype, "security", void 0);
    return YoutubeChannelBannersInsertRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertRequest = YoutubeChannelBannersInsertRequest;
var YoutubeChannelBannersInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertResponse, _super);
    function YoutubeChannelBannersInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ChannelBannerResource)
    ], YoutubeChannelBannersInsertResponse.prototype, "channelBannerResource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeChannelBannersInsertResponse.prototype, "statusCode", void 0);
    return YoutubeChannelBannersInsertResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelBannersInsertResponse = YoutubeChannelBannersInsertResponse;
