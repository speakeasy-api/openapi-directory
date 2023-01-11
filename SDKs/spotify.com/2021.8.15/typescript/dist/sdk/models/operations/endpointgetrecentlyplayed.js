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
exports.EndpointGetRecentlyPlayedResponse = exports.EndpointGetRecentlyPlayedRequest = exports.EndpointGetRecentlyPlayed200ApplicationJson = exports.EndpointGetRecentlyPlayedSecurity = exports.EndpointGetRecentlyPlayedHeaders = exports.EndpointGetRecentlyPlayedQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetRecentlyPlayedQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedQueryParams, _super);
    function EndpointGetRecentlyPlayedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedQueryParams.prototype, "after", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedQueryParams.prototype, "before", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedQueryParams.prototype, "limit", void 0);
    return EndpointGetRecentlyPlayedQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetRecentlyPlayedQueryParams = EndpointGetRecentlyPlayedQueryParams;
var EndpointGetRecentlyPlayedHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedHeaders, _super);
    function EndpointGetRecentlyPlayedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayedHeaders.prototype, "authorization", void 0);
    return EndpointGetRecentlyPlayedHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetRecentlyPlayedHeaders = EndpointGetRecentlyPlayedHeaders;
var EndpointGetRecentlyPlayedSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedSecurity, _super);
    function EndpointGetRecentlyPlayedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetRecentlyPlayedSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetRecentlyPlayedSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetRecentlyPlayedSecurity = EndpointGetRecentlyPlayedSecurity;
// EndpointGetRecentlyPlayed200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetRecentlyPlayed200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayed200ApplicationJson, _super);
    function EndpointGetRecentlyPlayed200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cursors" }),
        __metadata("design:type", shared.CursorObject)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "cursors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.PlayHistoryObject }),
        __metadata("design:type", Array)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "total", void 0);
    return EndpointGetRecentlyPlayed200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EndpointGetRecentlyPlayed200ApplicationJson = EndpointGetRecentlyPlayed200ApplicationJson;
var EndpointGetRecentlyPlayedRequest = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedRequest, _super);
    function EndpointGetRecentlyPlayedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetRecentlyPlayedQueryParams)
    ], EndpointGetRecentlyPlayedRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetRecentlyPlayedHeaders)
    ], EndpointGetRecentlyPlayedRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetRecentlyPlayedSecurity)
    ], EndpointGetRecentlyPlayedRequest.prototype, "security", void 0);
    return EndpointGetRecentlyPlayedRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetRecentlyPlayedRequest = EndpointGetRecentlyPlayedRequest;
var EndpointGetRecentlyPlayedResponse = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedResponse, _super);
    function EndpointGetRecentlyPlayedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetRecentlyPlayedResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetRecentlyPlayed200ApplicationJson)
    ], EndpointGetRecentlyPlayedResponse.prototype, "endpointGetRecentlyPlayed200ApplicationJSONObject", void 0);
    return EndpointGetRecentlyPlayedResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetRecentlyPlayedResponse = EndpointGetRecentlyPlayedResponse;
