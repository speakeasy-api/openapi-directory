"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetApiV2EpisodesResponse = exports.GetApiV2EpisodesRequest = exports.GetApiV2EpisodesOrderByIDEnum = exports.GetApiV2EpisodesSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetApiV2EpisodesSecurity = /** @class */ (function (_super) {
    __extends(GetApiV2EpisodesSecurity, _super);
    function GetApiV2EpisodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], GetApiV2EpisodesSecurity.prototype, "cdOauth2", void 0);
    return GetApiV2EpisodesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetApiV2EpisodesSecurity = GetApiV2EpisodesSecurity;
/**
 * The sort order of the list of episodes, based on episode ID. If unspecified, the episodes are returned in random order. If using paging to iterate through the results, sort order should be specified.
 */
var GetApiV2EpisodesOrderByIDEnum;
(function (GetApiV2EpisodesOrderByIDEnum) {
    GetApiV2EpisodesOrderByIDEnum["Asc"] = "asc";
    GetApiV2EpisodesOrderByIDEnum["Desc"] = "desc";
})(GetApiV2EpisodesOrderByIDEnum = exports.GetApiV2EpisodesOrderByIDEnum || (exports.GetApiV2EpisodesOrderByIDEnum = {}));
var GetApiV2EpisodesRequest = /** @class */ (function (_super) {
    __extends(GetApiV2EpisodesRequest, _super);
    function GetApiV2EpisodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=beginAirDateAfter;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], GetApiV2EpisodesRequest.prototype, "beginAirDateAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=endAirDateBefore;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], GetApiV2EpisodesRequest.prototype, "endAirDateBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], GetApiV2EpisodesRequest.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=orderById",
        }),
        __metadata("design:type", String)
    ], GetApiV2EpisodesRequest.prototype, "orderById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=pageSize",
        }),
        __metadata("design:type", Number)
    ], GetApiV2EpisodesRequest.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=pageStart",
        }),
        __metadata("design:type", Number)
    ], GetApiV2EpisodesRequest.prototype, "pageStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=programId",
        }),
        __metadata("design:type", Number)
    ], GetApiV2EpisodesRequest.prototype, "programId", void 0);
    return GetApiV2EpisodesRequest;
}(utils_1.SpeakeasyBase));
exports.GetApiV2EpisodesRequest = GetApiV2EpisodesRequest;
var GetApiV2EpisodesResponse = /** @class */ (function (_super) {
    __extends(GetApiV2EpisodesResponse, _super);
    function GetApiV2EpisodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetApiV2EpisodesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Episode }),
        __metadata("design:type", Array)
    ], GetApiV2EpisodesResponse.prototype, "episodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetApiV2EpisodesResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetApiV2EpisodesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetApiV2EpisodesResponse.prototype, "rawResponse", void 0);
    return GetApiV2EpisodesResponse;
}(utils_1.SpeakeasyBase));
exports.GetApiV2EpisodesResponse = GetApiV2EpisodesResponse;
