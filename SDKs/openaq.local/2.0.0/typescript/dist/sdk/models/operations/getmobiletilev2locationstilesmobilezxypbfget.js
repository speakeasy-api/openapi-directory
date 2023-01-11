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
exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse = exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest = exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams = exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams, _super);
    function GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=x" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams.prototype, "x", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=y" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams.prototype, "y", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams.prototype, "z", void 0);
    return GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams;
}(utils_1.SpeakeasyBase));
exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams = GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams;
var GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams, _super);
    function GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateFrom" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateTo" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "dateTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lastUpdatedFrom" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "lastUpdatedFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lastUpdatedTo" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "lastUpdatedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams.prototype, "project", void 0);
    return GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams = GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams;
var GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest, _super);
    function GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest.prototype, "queryParams", void 0);
    return GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest = GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest;
var GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse, _super);
    function GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse.prototype, "statusCode", void 0);
    return GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse = GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse;
