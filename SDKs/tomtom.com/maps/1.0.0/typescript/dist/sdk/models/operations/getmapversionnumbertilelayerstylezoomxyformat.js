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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMapVersionNumberTileLayerStyleZoomXyFormatResponse = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatRequest = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum) {
    GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum["Jpg"] = "jpg";
    GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum["Png"] = "png";
})(GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum || (exports.GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum) {
    GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum["Basic"] = "basic";
    GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum["Hybrid"] = "hybrid";
    GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum["Labels"] = "labels";
})(GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum || (exports.GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum) {
    GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum["Main"] = "main";
    GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum["Night"] = "night";
})(GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum || (exports.GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=X" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams.prototype, "x", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Y" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams.prototype, "y", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=layer" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams.prototype, "layer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=style" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams.prototype, "style", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams.prototype, "versionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zoom" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams.prototype, "zoom", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams = GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams;
var GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum) {
    GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum["Unified"] = "Unified";
    GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum["In"] = "IN";
})(GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum || (exports.GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tileSize" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams.prototype, "tileSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams.prototype, "view", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams = GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams;
var GetMapVersionNumberTileLayerStyleZoomXyFormatRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyFormatRequest, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyFormatRequest = GetMapVersionNumberTileLayerStyleZoomXyFormatRequest;
var GetMapVersionNumberTileLayerStyleZoomXyFormatResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyFormatResponse, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyFormatResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyFormatResponse = GetMapVersionNumberTileLayerStyleZoomXyFormatResponse;
