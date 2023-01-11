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
exports.GetNetworkClientTrafficHistoryResponse = exports.GetNetworkClientTrafficHistoryRequest = exports.GetNetworkClientTrafficHistoryQueryParams = exports.GetNetworkClientTrafficHistoryPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkClientTrafficHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkClientTrafficHistoryPathParams, _super);
    function GetNetworkClientTrafficHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkClientTrafficHistoryPathParams.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkClientTrafficHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkClientTrafficHistoryPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientTrafficHistoryPathParams = GetNetworkClientTrafficHistoryPathParams;
var GetNetworkClientTrafficHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkClientTrafficHistoryQueryParams, _super);
    function GetNetworkClientTrafficHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkClientTrafficHistoryQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkClientTrafficHistoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkClientTrafficHistoryQueryParams.prototype, "startingAfter", void 0);
    return GetNetworkClientTrafficHistoryQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientTrafficHistoryQueryParams = GetNetworkClientTrafficHistoryQueryParams;
var GetNetworkClientTrafficHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkClientTrafficHistoryRequest, _super);
    function GetNetworkClientTrafficHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkClientTrafficHistoryPathParams)
    ], GetNetworkClientTrafficHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkClientTrafficHistoryQueryParams)
    ], GetNetworkClientTrafficHistoryRequest.prototype, "queryParams", void 0);
    return GetNetworkClientTrafficHistoryRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientTrafficHistoryRequest = GetNetworkClientTrafficHistoryRequest;
var GetNetworkClientTrafficHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkClientTrafficHistoryResponse, _super);
    function GetNetworkClientTrafficHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkClientTrafficHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkClientTrafficHistoryResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkClientTrafficHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkClientTrafficHistoryResponse.prototype, "getNetworkClientTrafficHistory200ApplicationJSONObject", void 0);
    return GetNetworkClientTrafficHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientTrafficHistoryResponse = GetNetworkClientTrafficHistoryResponse;
