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
exports.EndpointCheckCurrentUserFollowsResponse = exports.EndpointCheckCurrentUserFollowsRequest = exports.EndpointCheckCurrentUserFollowsSecurity = exports.EndpointCheckCurrentUserFollowsHeaders = exports.EndpointCheckCurrentUserFollowsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointCheckCurrentUserFollowsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsQueryParams, _super);
    function EndpointCheckCurrentUserFollowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsQueryParams.prototype, "type", void 0);
    return EndpointCheckCurrentUserFollowsQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckCurrentUserFollowsQueryParams = EndpointCheckCurrentUserFollowsQueryParams;
var EndpointCheckCurrentUserFollowsHeaders = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsHeaders, _super);
    function EndpointCheckCurrentUserFollowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsHeaders.prototype, "authorization", void 0);
    return EndpointCheckCurrentUserFollowsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckCurrentUserFollowsHeaders = EndpointCheckCurrentUserFollowsHeaders;
var EndpointCheckCurrentUserFollowsSecurity = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsSecurity, _super);
    function EndpointCheckCurrentUserFollowsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCheckCurrentUserFollowsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCheckCurrentUserFollowsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckCurrentUserFollowsSecurity = EndpointCheckCurrentUserFollowsSecurity;
var EndpointCheckCurrentUserFollowsRequest = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsRequest, _super);
    function EndpointCheckCurrentUserFollowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckCurrentUserFollowsQueryParams)
    ], EndpointCheckCurrentUserFollowsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckCurrentUserFollowsHeaders)
    ], EndpointCheckCurrentUserFollowsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckCurrentUserFollowsSecurity)
    ], EndpointCheckCurrentUserFollowsRequest.prototype, "security", void 0);
    return EndpointCheckCurrentUserFollowsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckCurrentUserFollowsRequest = EndpointCheckCurrentUserFollowsRequest;
var EndpointCheckCurrentUserFollowsResponse = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsResponse, _super);
    function EndpointCheckCurrentUserFollowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "endpointCheckCurrentUserFollows200ApplicationJSONBooleans", void 0);
    return EndpointCheckCurrentUserFollowsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckCurrentUserFollowsResponse = EndpointCheckCurrentUserFollowsResponse;
