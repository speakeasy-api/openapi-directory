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
exports.EndpointUnfollowArtistsUsersResponse = exports.EndpointUnfollowArtistsUsersRequest = exports.EndpointUnfollowArtistsUsersSecurity = exports.EndpointUnfollowArtistsUsersRequestBody = exports.EndpointUnfollowArtistsUsersHeaders = exports.EndpointUnfollowArtistsUsersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointUnfollowArtistsUsersQueryParams = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersQueryParams, _super);
    function EndpointUnfollowArtistsUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersQueryParams.prototype, "type", void 0);
    return EndpointUnfollowArtistsUsersQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointUnfollowArtistsUsersQueryParams = EndpointUnfollowArtistsUsersQueryParams;
var EndpointUnfollowArtistsUsersHeaders = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersHeaders, _super);
    function EndpointUnfollowArtistsUsersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersHeaders.prototype, "contentType", void 0);
    return EndpointUnfollowArtistsUsersHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointUnfollowArtistsUsersHeaders = EndpointUnfollowArtistsUsersHeaders;
var EndpointUnfollowArtistsUsersRequestBody = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersRequestBody, _super);
    function EndpointUnfollowArtistsUsersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointUnfollowArtistsUsersRequestBody.prototype, "ids", void 0);
    return EndpointUnfollowArtistsUsersRequestBody;
}(utils_1.SpeakeasyBase));
exports.EndpointUnfollowArtistsUsersRequestBody = EndpointUnfollowArtistsUsersRequestBody;
var EndpointUnfollowArtistsUsersSecurity = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersSecurity, _super);
    function EndpointUnfollowArtistsUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointUnfollowArtistsUsersSecurity.prototype, "spotifyAuth", void 0);
    return EndpointUnfollowArtistsUsersSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointUnfollowArtistsUsersSecurity = EndpointUnfollowArtistsUsersSecurity;
var EndpointUnfollowArtistsUsersRequest = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersRequest, _super);
    function EndpointUnfollowArtistsUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointUnfollowArtistsUsersQueryParams)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointUnfollowArtistsUsersHeaders)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointUnfollowArtistsUsersRequestBody)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointUnfollowArtistsUsersSecurity)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "security", void 0);
    return EndpointUnfollowArtistsUsersRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointUnfollowArtistsUsersRequest = EndpointUnfollowArtistsUsersRequest;
var EndpointUnfollowArtistsUsersResponse = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersResponse, _super);
    function EndpointUnfollowArtistsUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointUnfollowArtistsUsersResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointUnfollowArtistsUsersResponse.prototype, "statusCode", void 0);
    return EndpointUnfollowArtistsUsersResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointUnfollowArtistsUsersResponse = EndpointUnfollowArtistsUsersResponse;
