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
exports.GetTeamMatchesByYearResponse = exports.GetTeamMatchesByYearRequest = exports.GetTeamMatchesByYearSecurity = exports.GetTeamMatchesByYearHeaders = exports.GetTeamMatchesByYearPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTeamMatchesByYearPathParams = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearPathParams, _super);
    function GetTeamMatchesByYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearPathParams.prototype, "teamKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearPathParams.prototype, "year", void 0);
    return GetTeamMatchesByYearPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearPathParams = GetTeamMatchesByYearPathParams;
var GetTeamMatchesByYearHeaders = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearHeaders, _super);
    function GetTeamMatchesByYearHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamMatchesByYearHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearHeaders = GetTeamMatchesByYearHeaders;
var GetTeamMatchesByYearSecurity = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSecurity, _super);
    function GetTeamMatchesByYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamMatchesByYearSecurity.prototype, "apiKey", void 0);
    return GetTeamMatchesByYearSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearSecurity = GetTeamMatchesByYearSecurity;
var GetTeamMatchesByYearRequest = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearRequest, _super);
    function GetTeamMatchesByYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamMatchesByYearPathParams)
    ], GetTeamMatchesByYearRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamMatchesByYearHeaders)
    ], GetTeamMatchesByYearRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamMatchesByYearSecurity)
    ], GetTeamMatchesByYearRequest.prototype, "security", void 0);
    return GetTeamMatchesByYearRequest;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearRequest = GetTeamMatchesByYearRequest;
var GetTeamMatchesByYearResponse = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearResponse, _super);
    function GetTeamMatchesByYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTeamMatchesByYearResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Match }),
        __metadata("design:type", Array)
    ], GetTeamMatchesByYearResponse.prototype, "matches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearResponse.prototype, "statusCode", void 0);
    return GetTeamMatchesByYearResponse;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearResponse = GetTeamMatchesByYearResponse;
