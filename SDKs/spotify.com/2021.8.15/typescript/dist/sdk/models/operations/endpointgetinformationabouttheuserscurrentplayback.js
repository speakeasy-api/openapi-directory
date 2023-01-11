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
exports.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse = exports.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest = exports.EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity = exports.EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders = exports.EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams, _super);
    function EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=additional_types" }),
        __metadata("design:type", String)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams.prototype, "additionalTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams.prototype, "market", void 0);
    return EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams = EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams;
var EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders, _super);
    function EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders = EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders;
var EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity, _super);
    function EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity = EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity;
var EndpointGetInformationAboutTheUsersCurrentPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointGetInformationAboutTheUsersCurrentPlaybackRequest, _super);
    function EndpointGetInformationAboutTheUsersCurrentPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackRequest.prototype, "security", void 0);
    return EndpointGetInformationAboutTheUsersCurrentPlaybackRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest = EndpointGetInformationAboutTheUsersCurrentPlaybackRequest;
var EndpointGetInformationAboutTheUsersCurrentPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointGetInformationAboutTheUsersCurrentPlaybackResponse, _super);
    function EndpointGetInformationAboutTheUsersCurrentPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CurrentlyPlayingContextObject)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackResponse.prototype, "currentlyPlayingContextObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetInformationAboutTheUsersCurrentPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointGetInformationAboutTheUsersCurrentPlaybackResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse = EndpointGetInformationAboutTheUsersCurrentPlaybackResponse;
