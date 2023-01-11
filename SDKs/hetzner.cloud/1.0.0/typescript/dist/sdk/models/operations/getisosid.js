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
exports.GetIsosIdResponse = exports.GetIsosIdRequest = exports.GetIsosId200ApplicationJson = exports.GetIsosId200ApplicationJsonIso = exports.GetIsosId200ApplicationJsonIsoTypeEnum = exports.GetIsosIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetIsosIdPathParams = /** @class */ (function (_super) {
    __extends(GetIsosIdPathParams, _super);
    function GetIsosIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetIsosIdPathParams.prototype, "id", void 0);
    return GetIsosIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetIsosIdPathParams = GetIsosIdPathParams;
var GetIsosId200ApplicationJsonIsoTypeEnum;
(function (GetIsosId200ApplicationJsonIsoTypeEnum) {
    GetIsosId200ApplicationJsonIsoTypeEnum["Public"] = "public";
    GetIsosId200ApplicationJsonIsoTypeEnum["Private"] = "private";
})(GetIsosId200ApplicationJsonIsoTypeEnum = exports.GetIsosId200ApplicationJsonIsoTypeEnum || (exports.GetIsosId200ApplicationJsonIsoTypeEnum = {}));
var GetIsosId200ApplicationJsonIso = /** @class */ (function (_super) {
    __extends(GetIsosId200ApplicationJsonIso, _super);
    function GetIsosId200ApplicationJsonIso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetIsosId200ApplicationJsonIso.prototype, "deprecated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetIsosId200ApplicationJsonIso.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetIsosId200ApplicationJsonIso.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetIsosId200ApplicationJsonIso.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetIsosId200ApplicationJsonIso.prototype, "type", void 0);
    return GetIsosId200ApplicationJsonIso;
}(utils_1.SpeakeasyBase));
exports.GetIsosId200ApplicationJsonIso = GetIsosId200ApplicationJsonIso;
var GetIsosId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIsosId200ApplicationJson, _super);
    function GetIsosId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iso" }),
        __metadata("design:type", GetIsosId200ApplicationJsonIso)
    ], GetIsosId200ApplicationJson.prototype, "iso", void 0);
    return GetIsosId200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIsosId200ApplicationJson = GetIsosId200ApplicationJson;
var GetIsosIdRequest = /** @class */ (function (_super) {
    __extends(GetIsosIdRequest, _super);
    function GetIsosIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIsosIdPathParams)
    ], GetIsosIdRequest.prototype, "pathParams", void 0);
    return GetIsosIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetIsosIdRequest = GetIsosIdRequest;
var GetIsosIdResponse = /** @class */ (function (_super) {
    __extends(GetIsosIdResponse, _super);
    function GetIsosIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetIsosIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetIsosIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIsosId200ApplicationJson)
    ], GetIsosIdResponse.prototype, "getIsosId200ApplicationJSONObject", void 0);
    return GetIsosIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetIsosIdResponse = GetIsosIdResponse;
