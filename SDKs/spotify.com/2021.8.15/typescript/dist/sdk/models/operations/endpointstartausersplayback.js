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
exports.EndpointStartAUsersPlaybackResponse = exports.EndpointStartAUsersPlaybackRequest = exports.EndpointStartAUsersPlaybackSecurity = exports.EndpointStartAUsersPlaybackRequestBody = exports.EndpointStartAUsersPlaybackHeaders = exports.EndpointStartAUsersPlaybackQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointStartAUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackQueryParams, _super);
    function EndpointStartAUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    return EndpointStartAUsersPlaybackQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointStartAUsersPlaybackQueryParams = EndpointStartAUsersPlaybackQueryParams;
var EndpointStartAUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackHeaders, _super);
    function EndpointStartAUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointStartAUsersPlaybackHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointStartAUsersPlaybackHeaders = EndpointStartAUsersPlaybackHeaders;
var EndpointStartAUsersPlaybackRequestBody = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackRequestBody, _super);
    function EndpointStartAUsersPlaybackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=context_uri" }),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "contextUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Object)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position_ms" }),
        __metadata("design:type", Number)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "positionMs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uris" }),
        __metadata("design:type", Array)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "uris", void 0);
    return EndpointStartAUsersPlaybackRequestBody;
}(utils_1.SpeakeasyBase));
exports.EndpointStartAUsersPlaybackRequestBody = EndpointStartAUsersPlaybackRequestBody;
var EndpointStartAUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackSecurity, _super);
    function EndpointStartAUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointStartAUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointStartAUsersPlaybackSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointStartAUsersPlaybackSecurity = EndpointStartAUsersPlaybackSecurity;
var EndpointStartAUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackRequest, _super);
    function EndpointStartAUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointStartAUsersPlaybackQueryParams)
    ], EndpointStartAUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointStartAUsersPlaybackHeaders)
    ], EndpointStartAUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointStartAUsersPlaybackRequestBody)
    ], EndpointStartAUsersPlaybackRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointStartAUsersPlaybackSecurity)
    ], EndpointStartAUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointStartAUsersPlaybackRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointStartAUsersPlaybackRequest = EndpointStartAUsersPlaybackRequest;
var EndpointStartAUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackResponse, _super);
    function EndpointStartAUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointStartAUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointStartAUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointStartAUsersPlaybackResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointStartAUsersPlaybackResponse = EndpointStartAUsersPlaybackResponse;
