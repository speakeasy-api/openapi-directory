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
exports.YoutubePlaylistItemsListResponse = exports.YoutubePlaylistItemsListRequest = exports.YoutubePlaylistItemsListSecurity = exports.YoutubePlaylistItemsListSecurityOption4 = exports.YoutubePlaylistItemsListSecurityOption3 = exports.YoutubePlaylistItemsListSecurityOption2 = exports.YoutubePlaylistItemsListSecurityOption1 = exports.YoutubePlaylistItemsListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubePlaylistItemsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListQueryParams, _super);
    function YoutubePlaylistItemsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubePlaylistItemsListQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubePlaylistItemsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubePlaylistItemsListQueryParams.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=playlistId" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "playlistId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubePlaylistItemsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=videoId" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListQueryParams.prototype, "videoId", void 0);
    return YoutubePlaylistItemsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListQueryParams = YoutubePlaylistItemsListQueryParams;
var YoutubePlaylistItemsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption1, _super);
    function YoutubePlaylistItemsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListSecurityOption1 = YoutubePlaylistItemsListSecurityOption1;
var YoutubePlaylistItemsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption2, _super);
    function YoutubePlaylistItemsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListSecurityOption2 = YoutubePlaylistItemsListSecurityOption2;
var YoutubePlaylistItemsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption3, _super);
    function YoutubePlaylistItemsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListSecurityOption3 = YoutubePlaylistItemsListSecurityOption3;
var YoutubePlaylistItemsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurityOption4, _super);
    function YoutubePlaylistItemsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubePlaylistItemsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubePlaylistItemsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListSecurityOption4 = YoutubePlaylistItemsListSecurityOption4;
var YoutubePlaylistItemsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListSecurity, _super);
    function YoutubePlaylistItemsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption1)
    ], YoutubePlaylistItemsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption2)
    ], YoutubePlaylistItemsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption3)
    ], YoutubePlaylistItemsListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsListSecurityOption4)
    ], YoutubePlaylistItemsListSecurity.prototype, "option4", void 0);
    return YoutubePlaylistItemsListSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListSecurity = YoutubePlaylistItemsListSecurity;
var YoutubePlaylistItemsListRequest = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListRequest, _super);
    function YoutubePlaylistItemsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubePlaylistItemsListQueryParams)
    ], YoutubePlaylistItemsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubePlaylistItemsListSecurity)
    ], YoutubePlaylistItemsListRequest.prototype, "security", void 0);
    return YoutubePlaylistItemsListRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListRequest = YoutubePlaylistItemsListRequest;
var YoutubePlaylistItemsListResponse = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsListResponse, _super);
    function YoutubePlaylistItemsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PlaylistItemListResponse)
    ], YoutubePlaylistItemsListResponse.prototype, "playlistItemListResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubePlaylistItemsListResponse.prototype, "statusCode", void 0);
    return YoutubePlaylistItemsListResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsListResponse = YoutubePlaylistItemsListResponse;
