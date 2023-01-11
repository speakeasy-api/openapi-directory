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
exports.GetSearchVersionNumberReverseGeocodePositionExtResponse = exports.GetSearchVersionNumberReverseGeocodePositionExtRequest = exports.GetSearchVersionNumberReverseGeocodePositionExtQueryParams = exports.GetSearchVersionNumberReverseGeocodePositionExtPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSearchVersionNumberReverseGeocodePositionExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtPathParams, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtPathParams.prototype, "ext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=position" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtPathParams.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberReverseGeocodePositionExtPathParams = GetSearchVersionNumberReverseGeocodePositionExtPathParams;
var GetSearchVersionNumberReverseGeocodePositionExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtQueryParams, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=heading" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "heading", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "radius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=returnRoadUse" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "returnRoadUse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=returnSpeedLimit" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "returnSpeedLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roadUse" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "roadUse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=spatialKeys" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberReverseGeocodePositionExtQueryParams.prototype, "spatialKeys", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberReverseGeocodePositionExtQueryParams = GetSearchVersionNumberReverseGeocodePositionExtQueryParams;
var GetSearchVersionNumberReverseGeocodePositionExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtRequest, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchVersionNumberReverseGeocodePositionExtPathParams)
    ], GetSearchVersionNumberReverseGeocodePositionExtRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchVersionNumberReverseGeocodePositionExtQueryParams)
    ], GetSearchVersionNumberReverseGeocodePositionExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtRequest;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberReverseGeocodePositionExtRequest = GetSearchVersionNumberReverseGeocodePositionExtRequest;
var GetSearchVersionNumberReverseGeocodePositionExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberReverseGeocodePositionExtResponse, _super);
    function GetSearchVersionNumberReverseGeocodePositionExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberReverseGeocodePositionExtResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberReverseGeocodePositionExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberReverseGeocodePositionExtResponse;
}(utils_1.SpeakeasyBase));
exports.GetSearchVersionNumberReverseGeocodePositionExtResponse = GetSearchVersionNumberReverseGeocodePositionExtResponse;
