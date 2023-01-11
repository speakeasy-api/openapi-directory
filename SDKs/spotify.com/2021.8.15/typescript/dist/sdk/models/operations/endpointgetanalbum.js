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
exports.EndpointGetAnAlbumResponse = exports.EndpointGetAnAlbumRequest = exports.EndpointGetAnAlbumSecurity = exports.EndpointGetAnAlbumHeaders = exports.EndpointGetAnAlbumQueryParams = exports.EndpointGetAnAlbumPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetAnAlbumPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumPathParams, _super);
    function EndpointGetAnAlbumPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumPathParams.prototype, "id", void 0);
    return EndpointGetAnAlbumPathParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnAlbumPathParams = EndpointGetAnAlbumPathParams;
var EndpointGetAnAlbumQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumQueryParams, _super);
    function EndpointGetAnAlbumQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumQueryParams.prototype, "market", void 0);
    return EndpointGetAnAlbumQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnAlbumQueryParams = EndpointGetAnAlbumQueryParams;
var EndpointGetAnAlbumHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumHeaders, _super);
    function EndpointGetAnAlbumHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumHeaders.prototype, "authorization", void 0);
    return EndpointGetAnAlbumHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnAlbumHeaders = EndpointGetAnAlbumHeaders;
var EndpointGetAnAlbumSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumSecurity, _super);
    function EndpointGetAnAlbumSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAnAlbumSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAnAlbumSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnAlbumSecurity = EndpointGetAnAlbumSecurity;
var EndpointGetAnAlbumRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumRequest, _super);
    function EndpointGetAnAlbumRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnAlbumPathParams)
    ], EndpointGetAnAlbumRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnAlbumQueryParams)
    ], EndpointGetAnAlbumRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnAlbumHeaders)
    ], EndpointGetAnAlbumRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnAlbumSecurity)
    ], EndpointGetAnAlbumRequest.prototype, "security", void 0);
    return EndpointGetAnAlbumRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnAlbumRequest = EndpointGetAnAlbumRequest;
var EndpointGetAnAlbumResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumResponse, _super);
    function EndpointGetAnAlbumResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AlbumObject)
    ], EndpointGetAnAlbumResponse.prototype, "albumObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAnAlbumResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumResponse.prototype, "statusCode", void 0);
    return EndpointGetAnAlbumResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnAlbumResponse = EndpointGetAnAlbumResponse;
