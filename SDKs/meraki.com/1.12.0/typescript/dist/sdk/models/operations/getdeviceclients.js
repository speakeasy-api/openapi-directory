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
exports.GetDeviceClientsResponse = exports.GetDeviceClientsRequest = exports.GetDeviceClientsQueryParams = exports.GetDeviceClientsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeviceClientsPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceClientsPathParams, _super);
    function GetDeviceClientsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GetDeviceClientsPathParams.prototype, "serial", void 0);
    return GetDeviceClientsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDeviceClientsPathParams = GetDeviceClientsPathParams;
var GetDeviceClientsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceClientsQueryParams, _super);
    function GetDeviceClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetDeviceClientsQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetDeviceClientsQueryParams.prototype, "timespan", void 0);
    return GetDeviceClientsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeviceClientsQueryParams = GetDeviceClientsQueryParams;
var GetDeviceClientsRequest = /** @class */ (function (_super) {
    __extends(GetDeviceClientsRequest, _super);
    function GetDeviceClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeviceClientsPathParams)
    ], GetDeviceClientsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeviceClientsQueryParams)
    ], GetDeviceClientsRequest.prototype, "queryParams", void 0);
    return GetDeviceClientsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeviceClientsRequest = GetDeviceClientsRequest;
var GetDeviceClientsResponse = /** @class */ (function (_super) {
    __extends(GetDeviceClientsResponse, _super);
    function GetDeviceClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeviceClientsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeviceClientsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDeviceClientsResponse.prototype, "getDeviceClients200ApplicationJSONObject", void 0);
    return GetDeviceClientsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeviceClientsResponse = GetDeviceClientsResponse;
