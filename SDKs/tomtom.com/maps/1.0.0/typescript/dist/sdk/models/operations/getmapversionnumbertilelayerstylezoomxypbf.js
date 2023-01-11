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
exports.GetMapVersionNumberTileLayerStyleZoomXyPbfResponse = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfRequest = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum) {
    GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum["Basic"] = "basic";
    GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum["Hybrid"] = "hybrid";
    GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum["Labels"] = "labels";
})(GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum || (exports.GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum) {
    GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum["Main"] = "main";
})(GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum || (exports.GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=X" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams.prototype, "x", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Y" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams.prototype, "y", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=layer" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams.prototype, "layer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=style" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams.prototype, "style", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams.prototype, "versionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zoom" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams.prototype, "zoom", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams = GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams;
var GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum) {
    GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum["Unified"] = "Unified";
    GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum["Il"] = "IL";
    GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum["In"] = "IN";
})(GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum = exports.GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum || (exports.GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams.prototype, "view", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams = GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams;
var GetMapVersionNumberTileLayerStyleZoomXyPbfRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyPbfRequest, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyPbfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyPbfRequest;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyPbfRequest = GetMapVersionNumberTileLayerStyleZoomXyPbfRequest;
var GetMapVersionNumberTileLayerStyleZoomXyPbfResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXyPbfResponse, _super);
    function GetMapVersionNumberTileLayerStyleZoomXyPbfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXyPbfResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXyPbfResponse;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberTileLayerStyleZoomXyPbfResponse = GetMapVersionNumberTileLayerStyleZoomXyPbfResponse;
