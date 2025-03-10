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
exports.GetTeamEventsByYearResponse = exports.GetTeamEventsByYearRequest = exports.GetTeamEventsByYearSecurity = exports.GetTeamEventsByYearHeaders = exports.GetTeamEventsByYearPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTeamEventsByYearPathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearPathParams, _super);
    function GetTeamEventsByYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearPathParams.prototype, "teamKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearPathParams.prototype, "year", void 0);
    return GetTeamEventsByYearPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearPathParams = GetTeamEventsByYearPathParams;
var GetTeamEventsByYearHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearHeaders, _super);
    function GetTeamEventsByYearHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventsByYearHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearHeaders = GetTeamEventsByYearHeaders;
var GetTeamEventsByYearSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearSecurity, _super);
    function GetTeamEventsByYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventsByYearSecurity.prototype, "apiKey", void 0);
    return GetTeamEventsByYearSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearSecurity = GetTeamEventsByYearSecurity;
var GetTeamEventsByYearRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearRequest, _super);
    function GetTeamEventsByYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamEventsByYearPathParams)
    ], GetTeamEventsByYearRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamEventsByYearHeaders)
    ], GetTeamEventsByYearRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamEventsByYearSecurity)
    ], GetTeamEventsByYearRequest.prototype, "security", void 0);
    return GetTeamEventsByYearRequest;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearRequest = GetTeamEventsByYearRequest;
var GetTeamEventsByYearResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearResponse, _super);
    function GetTeamEventsByYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTeamEventsByYearResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], GetTeamEventsByYearResponse.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTeamEventsByYearResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearResponse.prototype, "statusCode", void 0);
    return GetTeamEventsByYearResponse;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearResponse = GetTeamEventsByYearResponse;
