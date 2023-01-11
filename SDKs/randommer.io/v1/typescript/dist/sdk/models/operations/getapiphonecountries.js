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
exports.GetApiPhoneCountriesResponse = exports.GetApiPhoneCountriesRequest = exports.GetApiPhoneCountriesHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var GetApiPhoneCountriesHeaders = /** @class */ (function (_super) {
    __extends(GetApiPhoneCountriesHeaders, _super);
    function GetApiPhoneCountriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], GetApiPhoneCountriesHeaders.prototype, "xApiKey", void 0);
    return GetApiPhoneCountriesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetApiPhoneCountriesHeaders = GetApiPhoneCountriesHeaders;
var GetApiPhoneCountriesRequest = /** @class */ (function (_super) {
    __extends(GetApiPhoneCountriesRequest, _super);
    function GetApiPhoneCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiPhoneCountriesHeaders)
    ], GetApiPhoneCountriesRequest.prototype, "headers", void 0);
    return GetApiPhoneCountriesRequest;
}(utils_1.SpeakeasyBase));
exports.GetApiPhoneCountriesRequest = GetApiPhoneCountriesRequest;
var GetApiPhoneCountriesResponse = /** @class */ (function (_super) {
    __extends(GetApiPhoneCountriesResponse, _super);
    function GetApiPhoneCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetApiPhoneCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetApiPhoneCountriesResponse.prototype, "statusCode", void 0);
    return GetApiPhoneCountriesResponse;
}(utils_1.SpeakeasyBase));
exports.GetApiPhoneCountriesResponse = GetApiPhoneCountriesResponse;
