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
exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse = exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest = exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams = exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=x" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams.prototype, "x", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=y" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams.prototype, "y", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams.prototype, "z", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams;
}(utils_1.SpeakeasyBase));
exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams = GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams;
var GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lastUpdatedFrom" }),
        __metadata("design:type", Object)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams.prototype, "lastUpdatedFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lastUpdatedTo" }),
        __metadata("design:type", Object)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams.prototype, "lastUpdatedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Object)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams.prototype, "project", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams = GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams;
var GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest.prototype, "queryParams", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest = GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest;
var GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse.prototype, "statusCode", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse = GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse;
