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
exports.GetContentSourceSectionTimePeriodJsonResponse = exports.GetContentSourceSectionTimePeriodJsonRequest = exports.GetContentSourceSectionTimePeriodJson200ApplicationJson = exports.GetContentSourceSectionTimePeriodJsonQueryParams = exports.GetContentSourceSectionTimePeriodJsonPathParams = exports.GetContentSourceSectionTimePeriodJsonSourceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetContentSourceSectionTimePeriodJsonSourceEnum;
(function (GetContentSourceSectionTimePeriodJsonSourceEnum) {
    GetContentSourceSectionTimePeriodJsonSourceEnum["All"] = "all";
    GetContentSourceSectionTimePeriodJsonSourceEnum["Nyt"] = "nyt";
    GetContentSourceSectionTimePeriodJsonSourceEnum["Iht"] = "iht";
})(GetContentSourceSectionTimePeriodJsonSourceEnum = exports.GetContentSourceSectionTimePeriodJsonSourceEnum || (exports.GetContentSourceSectionTimePeriodJsonSourceEnum = {}));
var GetContentSourceSectionTimePeriodJsonPathParams = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonPathParams, _super);
    function GetContentSourceSectionTimePeriodJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJsonPathParams.prototype, "section", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=source" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJsonPathParams.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=time-period" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonPathParams.prototype, "timePeriod", void 0);
    return GetContentSourceSectionTimePeriodJsonPathParams;
}(utils_1.SpeakeasyBase));
exports.GetContentSourceSectionTimePeriodJsonPathParams = GetContentSourceSectionTimePeriodJsonPathParams;
var GetContentSourceSectionTimePeriodJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonQueryParams, _super);
    function GetContentSourceSectionTimePeriodJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonQueryParams.prototype, "offset", void 0);
    return GetContentSourceSectionTimePeriodJsonQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetContentSourceSectionTimePeriodJsonQueryParams = GetContentSourceSectionTimePeriodJsonQueryParams;
var GetContentSourceSectionTimePeriodJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJson200ApplicationJson, _super);
    function GetContentSourceSectionTimePeriodJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJson200ApplicationJson.prototype, "status", void 0);
    return GetContentSourceSectionTimePeriodJson200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetContentSourceSectionTimePeriodJson200ApplicationJson = GetContentSourceSectionTimePeriodJson200ApplicationJson;
var GetContentSourceSectionTimePeriodJsonRequest = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonRequest, _super);
    function GetContentSourceSectionTimePeriodJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContentSourceSectionTimePeriodJsonPathParams)
    ], GetContentSourceSectionTimePeriodJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContentSourceSectionTimePeriodJsonQueryParams)
    ], GetContentSourceSectionTimePeriodJsonRequest.prototype, "queryParams", void 0);
    return GetContentSourceSectionTimePeriodJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetContentSourceSectionTimePeriodJsonRequest = GetContentSourceSectionTimePeriodJsonRequest;
var GetContentSourceSectionTimePeriodJsonResponse = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionTimePeriodJsonResponse, _super);
    function GetContentSourceSectionTimePeriodJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetContentSourceSectionTimePeriodJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetContentSourceSectionTimePeriodJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContentSourceSectionTimePeriodJson200ApplicationJson)
    ], GetContentSourceSectionTimePeriodJsonResponse.prototype, "getContentSourceSectionTimePeriodJSON200ApplicationJSONObject", void 0);
    return GetContentSourceSectionTimePeriodJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetContentSourceSectionTimePeriodJsonResponse = GetContentSourceSectionTimePeriodJsonResponse;
