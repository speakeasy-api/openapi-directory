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
exports.GetSearchVersionNumberAdditionalDataExtResponse = exports.GetSearchVersionNumberAdditionalDataExtRequest = exports.GetSearchVersionNumberAdditionalDataExtQueryParams = exports.GetSearchVersionNumberAdditionalDataExtPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSearchVersionNumberAdditionalDataExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberAdditionalDataExtPathParams, _super);
    function GetSearchVersionNumberAdditionalDataExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberAdditionalDataExtPathParams.prototype, "ext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberAdditionalDataExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberAdditionalDataExtPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberAdditionalDataExtPathParams = GetSearchVersionNumberAdditionalDataExtPathParams;
var GetSearchVersionNumberAdditionalDataExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberAdditionalDataExtQueryParams, _super);
    function GetSearchVersionNumberAdditionalDataExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=geometries" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberAdditionalDataExtQueryParams.prototype, "geometries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=geometriesZoom" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberAdditionalDataExtQueryParams.prototype, "geometriesZoom", void 0);
    return GetSearchVersionNumberAdditionalDataExtQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberAdditionalDataExtQueryParams = GetSearchVersionNumberAdditionalDataExtQueryParams;
var GetSearchVersionNumberAdditionalDataExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberAdditionalDataExtRequest, _super);
    function GetSearchVersionNumberAdditionalDataExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchVersionNumberAdditionalDataExtPathParams)
    ], GetSearchVersionNumberAdditionalDataExtRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchVersionNumberAdditionalDataExtQueryParams)
    ], GetSearchVersionNumberAdditionalDataExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberAdditionalDataExtRequest;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberAdditionalDataExtRequest = GetSearchVersionNumberAdditionalDataExtRequest;
var GetSearchVersionNumberAdditionalDataExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberAdditionalDataExtResponse, _super);
    function GetSearchVersionNumberAdditionalDataExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberAdditionalDataExtResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberAdditionalDataExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberAdditionalDataExtResponse;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberAdditionalDataExtResponse = GetSearchVersionNumberAdditionalDataExtResponse;
