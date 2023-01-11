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
exports.GetfullnamematchResponse = exports.GetfullnamematchRequest = exports.Getfullnamematch200ApplicationJson = exports.GetfullnamematchQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetfullnamematchQueryParams = /** @class */ (function (_super) {
    __extends(GetfullnamematchQueryParams, _super);
    function GetfullnamematchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fullname" }),
        __metadata("design:type", String)
    ], GetfullnamematchQueryParams.prototype, "fullname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetfullnamematchQueryParams.prototype, "license", void 0);
    return GetfullnamematchQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetfullnamematchQueryParams = GetfullnamematchQueryParams;
var Getfullnamematch200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getfullnamematch200ApplicationJson, _super);
    function Getfullnamematch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getfullnamematch200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getfullnamematch200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Simkey" }),
        __metadata("design:type", String)
    ], Getfullnamematch200ApplicationJson.prototype, "simkey", void 0);
    return Getfullnamematch200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Getfullnamematch200ApplicationJson = Getfullnamematch200ApplicationJson;
var GetfullnamematchRequest = /** @class */ (function (_super) {
    __extends(GetfullnamematchRequest, _super);
    function GetfullnamematchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetfullnamematchQueryParams)
    ], GetfullnamematchRequest.prototype, "queryParams", void 0);
    return GetfullnamematchRequest;
}(utils_1.SpeakeasyBase));
exports.GetfullnamematchRequest = GetfullnamematchRequest;
var GetfullnamematchResponse = /** @class */ (function (_super) {
    __extends(GetfullnamematchResponse, _super);
    function GetfullnamematchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetfullnamematchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetfullnamematchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Getfullnamematch200ApplicationJson)
    ], GetfullnamematchResponse.prototype, "getfullnamematch200ApplicationJSONObject", void 0);
    return GetfullnamematchResponse;
}(utils_1.SpeakeasyBase));
exports.GetfullnamematchResponse = GetfullnamematchResponse;
