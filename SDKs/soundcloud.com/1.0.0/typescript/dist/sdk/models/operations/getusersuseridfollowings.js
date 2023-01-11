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
exports.GetUsersUserIdFollowingsResponse = exports.GetUsersUserIdFollowingsRequest = exports.GetUsersUserIdFollowingsSecurity = exports.GetUsersUserIdFollowingsQueryParams = exports.GetUsersUserIdFollowingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUsersUserIdFollowingsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdFollowingsPathParams, _super);
    function GetUsersUserIdFollowingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdFollowingsPathParams.prototype, "userId", void 0);
    return GetUsersUserIdFollowingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdFollowingsPathParams = GetUsersUserIdFollowingsPathParams;
var GetUsersUserIdFollowingsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdFollowingsQueryParams, _super);
    function GetUsersUserIdFollowingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdFollowingsQueryParams.prototype, "limit", void 0);
    return GetUsersUserIdFollowingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdFollowingsQueryParams = GetUsersUserIdFollowingsQueryParams;
var GetUsersUserIdFollowingsSecurity = /** @class */ (function (_super) {
    __extends(GetUsersUserIdFollowingsSecurity, _super);
    function GetUsersUserIdFollowingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeAuthHeader)
    ], GetUsersUserIdFollowingsSecurity.prototype, "authHeader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetUsersUserIdFollowingsSecurity.prototype, "clientId", void 0);
    return GetUsersUserIdFollowingsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdFollowingsSecurity = GetUsersUserIdFollowingsSecurity;
var GetUsersUserIdFollowingsRequest = /** @class */ (function (_super) {
    __extends(GetUsersUserIdFollowingsRequest, _super);
    function GetUsersUserIdFollowingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdFollowingsPathParams)
    ], GetUsersUserIdFollowingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdFollowingsQueryParams)
    ], GetUsersUserIdFollowingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdFollowingsSecurity)
    ], GetUsersUserIdFollowingsRequest.prototype, "security", void 0);
    return GetUsersUserIdFollowingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdFollowingsRequest = GetUsersUserIdFollowingsRequest;
var GetUsersUserIdFollowingsResponse = /** @class */ (function (_super) {
    __extends(GetUsersUserIdFollowingsResponse, _super);
    function GetUsersUserIdFollowingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersUserIdFollowingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetUsersUserIdFollowingsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersUserIdFollowingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsersUserIdFollowingsResponse.prototype, "getUsersUserIdFollowings200ApplicationJSONOneOf", void 0);
    return GetUsersUserIdFollowingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdFollowingsResponse = GetUsersUserIdFollowingsResponse;
