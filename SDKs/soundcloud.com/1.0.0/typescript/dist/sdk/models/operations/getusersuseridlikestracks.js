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
exports.GetUsersUserIdLikesTracksResponse = exports.GetUsersUserIdLikesTracksRequest = exports.GetUsersUserIdLikesTracksSecurity = exports.GetUsersUserIdLikesTracksQueryParams = exports.GetUsersUserIdLikesTracksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUsersUserIdLikesTracksPathParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdLikesTracksPathParams, _super);
    function GetUsersUserIdLikesTracksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdLikesTracksPathParams.prototype, "userId", void 0);
    return GetUsersUserIdLikesTracksPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdLikesTracksPathParams = GetUsersUserIdLikesTracksPathParams;
var GetUsersUserIdLikesTracksQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdLikesTracksQueryParams, _super);
    function GetUsersUserIdLikesTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=access" }),
        __metadata("design:type", Array)
    ], GetUsersUserIdLikesTracksQueryParams.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdLikesTracksQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=linked_partitioning" }),
        __metadata("design:type", Boolean)
    ], GetUsersUserIdLikesTracksQueryParams.prototype, "linkedPartitioning", void 0);
    return GetUsersUserIdLikesTracksQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdLikesTracksQueryParams = GetUsersUserIdLikesTracksQueryParams;
var GetUsersUserIdLikesTracksSecurity = /** @class */ (function (_super) {
    __extends(GetUsersUserIdLikesTracksSecurity, _super);
    function GetUsersUserIdLikesTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeAuthHeader)
    ], GetUsersUserIdLikesTracksSecurity.prototype, "authHeader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetUsersUserIdLikesTracksSecurity.prototype, "clientId", void 0);
    return GetUsersUserIdLikesTracksSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdLikesTracksSecurity = GetUsersUserIdLikesTracksSecurity;
var GetUsersUserIdLikesTracksRequest = /** @class */ (function (_super) {
    __extends(GetUsersUserIdLikesTracksRequest, _super);
    function GetUsersUserIdLikesTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdLikesTracksPathParams)
    ], GetUsersUserIdLikesTracksRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdLikesTracksQueryParams)
    ], GetUsersUserIdLikesTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdLikesTracksSecurity)
    ], GetUsersUserIdLikesTracksRequest.prototype, "security", void 0);
    return GetUsersUserIdLikesTracksRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdLikesTracksRequest = GetUsersUserIdLikesTracksRequest;
var GetUsersUserIdLikesTracksResponse = /** @class */ (function (_super) {
    __extends(GetUsersUserIdLikesTracksResponse, _super);
    function GetUsersUserIdLikesTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersUserIdLikesTracksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetUsersUserIdLikesTracksResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersUserIdLikesTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsersUserIdLikesTracksResponse.prototype, "getUsersUserIdLikesTracks200ApplicationJSONOneOf", void 0);
    return GetUsersUserIdLikesTracksResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdLikesTracksResponse = GetUsersUserIdLikesTracksResponse;
