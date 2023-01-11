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
exports.GetMapVersionNumberCopyrightsZoomXyFormatResponse = exports.GetMapVersionNumberCopyrightsZoomXyFormatRequest = exports.GetMapVersionNumberCopyrightsZoomXyFormatQueryParams = exports.GetMapVersionNumberCopyrightsZoomXyFormatPathParams = exports.GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum;
(function (GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum) {
    GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum["Json"] = "json";
    GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum["Jsonp"] = "jsonp";
    GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum["Xml"] = "xml";
})(GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum = exports.GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum || (exports.GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum = {}));
var GetMapVersionNumberCopyrightsZoomXyFormatPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXyFormatPathParams, _super);
    function GetMapVersionNumberCopyrightsZoomXyFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=X" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXyFormatPathParams.prototype, "x", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Y" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXyFormatPathParams.prototype, "y", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsZoomXyFormatPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXyFormatPathParams.prototype, "versionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zoom" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXyFormatPathParams.prototype, "zoom", void 0);
    return GetMapVersionNumberCopyrightsZoomXyFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberCopyrightsZoomXyFormatPathParams = GetMapVersionNumberCopyrightsZoomXyFormatPathParams;
var GetMapVersionNumberCopyrightsZoomXyFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXyFormatQueryParams, _super);
    function GetMapVersionNumberCopyrightsZoomXyFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsZoomXyFormatQueryParams.prototype, "callback", void 0);
    return GetMapVersionNumberCopyrightsZoomXyFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberCopyrightsZoomXyFormatQueryParams = GetMapVersionNumberCopyrightsZoomXyFormatQueryParams;
var GetMapVersionNumberCopyrightsZoomXyFormatRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXyFormatRequest, _super);
    function GetMapVersionNumberCopyrightsZoomXyFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMapVersionNumberCopyrightsZoomXyFormatPathParams)
    ], GetMapVersionNumberCopyrightsZoomXyFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMapVersionNumberCopyrightsZoomXyFormatQueryParams)
    ], GetMapVersionNumberCopyrightsZoomXyFormatRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberCopyrightsZoomXyFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberCopyrightsZoomXyFormatRequest = GetMapVersionNumberCopyrightsZoomXyFormatRequest;
var GetMapVersionNumberCopyrightsZoomXyFormatResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXyFormatResponse, _super);
    function GetMapVersionNumberCopyrightsZoomXyFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsZoomXyFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXyFormatResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberCopyrightsZoomXyFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberCopyrightsZoomXyFormatResponse = GetMapVersionNumberCopyrightsZoomXyFormatResponse;
