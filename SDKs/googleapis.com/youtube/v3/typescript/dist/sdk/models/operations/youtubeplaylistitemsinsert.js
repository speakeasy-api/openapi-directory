"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.YoutubePlaylistItemsInsertResponse = exports.YoutubePlaylistItemsInsertRequest = exports.YoutubePlaylistItemsInsertSecurity = exports.YoutubePlaylistItemsInsertSecurityOption3 = exports.YoutubePlaylistItemsInsertSecurityOption2 = exports.YoutubePlaylistItemsInsertSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubePlaylistItemsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsInsertSecurityOption1, _super);
    function YoutubePlaylistItemsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsInsertSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsInsertSecurityOption1 = YoutubePlaylistItemsInsertSecurityOption1;
var YoutubePlaylistItemsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsInsertSecurityOption2, _super);
    function YoutubePlaylistItemsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsInsertSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsInsertSecurityOption2 = YoutubePlaylistItemsInsertSecurityOption2;
var YoutubePlaylistItemsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsInsertSecurityOption3, _super);
    function YoutubePlaylistItemsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubePlaylistItemsInsertSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsInsertSecurityOption3 = YoutubePlaylistItemsInsertSecurityOption3;
var YoutubePlaylistItemsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsInsertSecurity, _super);
    function YoutubePlaylistItemsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsInsertSecurityOption1)
    ], YoutubePlaylistItemsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsInsertSecurityOption2)
    ], YoutubePlaylistItemsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubePlaylistItemsInsertSecurityOption3)
    ], YoutubePlaylistItemsInsertSecurity.prototype, "option3", void 0);
    return YoutubePlaylistItemsInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsInsertSecurity = YoutubePlaylistItemsInsertSecurity;
var YoutubePlaylistItemsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsInsertRequest, _super);
    function YoutubePlaylistItemsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlaylistItem)
    ], YoutubePlaylistItemsInsertRequest.prototype, "playlistItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubePlaylistItemsInsertRequest.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], YoutubePlaylistItemsInsertRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertRequest.prototype, "uploadProtocol", void 0);
    return YoutubePlaylistItemsInsertRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsInsertRequest = YoutubePlaylistItemsInsertRequest;
var YoutubePlaylistItemsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubePlaylistItemsInsertResponse, _super);
    function YoutubePlaylistItemsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubePlaylistItemsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PlaylistItem)
    ], YoutubePlaylistItemsInsertResponse.prototype, "playlistItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubePlaylistItemsInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], YoutubePlaylistItemsInsertResponse.prototype, "rawResponse", void 0);
    return YoutubePlaylistItemsInsertResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubePlaylistItemsInsertResponse = YoutubePlaylistItemsInsertResponse;
