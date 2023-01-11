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
exports.EndpointToggleShuffleForUsersPlaybackResponse = exports.EndpointToggleShuffleForUsersPlaybackRequest = exports.EndpointToggleShuffleForUsersPlaybackSecurity = exports.EndpointToggleShuffleForUsersPlaybackHeaders = exports.EndpointToggleShuffleForUsersPlaybackQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointToggleShuffleForUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackQueryParams, _super);
    function EndpointToggleShuffleForUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointToggleShuffleForUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Boolean)
    ], EndpointToggleShuffleForUsersPlaybackQueryParams.prototype, "state", void 0);
    return EndpointToggleShuffleForUsersPlaybackQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointToggleShuffleForUsersPlaybackQueryParams = EndpointToggleShuffleForUsersPlaybackQueryParams;
var EndpointToggleShuffleForUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackHeaders, _super);
    function EndpointToggleShuffleForUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointToggleShuffleForUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointToggleShuffleForUsersPlaybackHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointToggleShuffleForUsersPlaybackHeaders = EndpointToggleShuffleForUsersPlaybackHeaders;
var EndpointToggleShuffleForUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackSecurity, _super);
    function EndpointToggleShuffleForUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointToggleShuffleForUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointToggleShuffleForUsersPlaybackSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointToggleShuffleForUsersPlaybackSecurity = EndpointToggleShuffleForUsersPlaybackSecurity;
var EndpointToggleShuffleForUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackRequest, _super);
    function EndpointToggleShuffleForUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointToggleShuffleForUsersPlaybackQueryParams)
    ], EndpointToggleShuffleForUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointToggleShuffleForUsersPlaybackHeaders)
    ], EndpointToggleShuffleForUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointToggleShuffleForUsersPlaybackSecurity)
    ], EndpointToggleShuffleForUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointToggleShuffleForUsersPlaybackRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointToggleShuffleForUsersPlaybackRequest = EndpointToggleShuffleForUsersPlaybackRequest;
var EndpointToggleShuffleForUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackResponse, _super);
    function EndpointToggleShuffleForUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointToggleShuffleForUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointToggleShuffleForUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointToggleShuffleForUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointToggleShuffleForUsersPlaybackResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointToggleShuffleForUsersPlaybackResponse = EndpointToggleShuffleForUsersPlaybackResponse;
