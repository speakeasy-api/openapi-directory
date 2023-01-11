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
exports.UnenrollNetworkSmDeviceResponse = exports.UnenrollNetworkSmDeviceRequest = exports.UnenrollNetworkSmDevicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UnenrollNetworkSmDevicePathParams = /** @class */ (function (_super) {
    __extends(UnenrollNetworkSmDevicePathParams, _super);
    function UnenrollNetworkSmDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], UnenrollNetworkSmDevicePathParams.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UnenrollNetworkSmDevicePathParams.prototype, "networkId", void 0);
    return UnenrollNetworkSmDevicePathParams;
}(utils_1.SpeakeasyBase));
exports.UnenrollNetworkSmDevicePathParams = UnenrollNetworkSmDevicePathParams;
var UnenrollNetworkSmDeviceRequest = /** @class */ (function (_super) {
    __extends(UnenrollNetworkSmDeviceRequest, _super);
    function UnenrollNetworkSmDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UnenrollNetworkSmDevicePathParams)
    ], UnenrollNetworkSmDeviceRequest.prototype, "pathParams", void 0);
    return UnenrollNetworkSmDeviceRequest;
}(utils_1.SpeakeasyBase));
exports.UnenrollNetworkSmDeviceRequest = UnenrollNetworkSmDeviceRequest;
var UnenrollNetworkSmDeviceResponse = /** @class */ (function (_super) {
    __extends(UnenrollNetworkSmDeviceResponse, _super);
    function UnenrollNetworkSmDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UnenrollNetworkSmDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UnenrollNetworkSmDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UnenrollNetworkSmDeviceResponse.prototype, "unenrollNetworkSmDevice200ApplicationJSONObject", void 0);
    return UnenrollNetworkSmDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.UnenrollNetworkSmDeviceResponse = UnenrollNetworkSmDeviceResponse;
