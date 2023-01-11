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
exports.GetSearchVersionNumberCsCategoryExtResponse = exports.GetSearchVersionNumberCsCategoryExtRequest = exports.GetSearchVersionNumberCsCategoryExtQueryParams = exports.GetSearchVersionNumberCsCategoryExtPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSearchVersionNumberCsCategoryExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCsCategoryExtPathParams, _super);
    function GetSearchVersionNumberCsCategoryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtPathParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtPathParams.prototype, "ext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCsCategoryExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberCsCategoryExtPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberCsCategoryExtPathParams = GetSearchVersionNumberCsCategoryExtPathParams;
var GetSearchVersionNumberCsCategoryExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCsCategoryExtQueryParams, _super);
    function GetSearchVersionNumberCsCategoryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=btmRight" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "btmRight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=countrySet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "countrySet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=idxSet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "idxSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "lat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "lon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ofs" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "ofs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "radius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=topLeft" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "topLeft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=typeahead" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "typeahead", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtQueryParams.prototype, "view", void 0);
    return GetSearchVersionNumberCsCategoryExtQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberCsCategoryExtQueryParams = GetSearchVersionNumberCsCategoryExtQueryParams;
var GetSearchVersionNumberCsCategoryExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCsCategoryExtRequest, _super);
    function GetSearchVersionNumberCsCategoryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchVersionNumberCsCategoryExtPathParams)
    ], GetSearchVersionNumberCsCategoryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchVersionNumberCsCategoryExtQueryParams)
    ], GetSearchVersionNumberCsCategoryExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberCsCategoryExtRequest;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberCsCategoryExtRequest = GetSearchVersionNumberCsCategoryExtRequest;
var GetSearchVersionNumberCsCategoryExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCsCategoryExtResponse, _super);
    function GetSearchVersionNumberCsCategoryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCsCategoryExtResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCsCategoryExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberCsCategoryExtResponse;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberCsCategoryExtResponse = GetSearchVersionNumberCsCategoryExtResponse;
