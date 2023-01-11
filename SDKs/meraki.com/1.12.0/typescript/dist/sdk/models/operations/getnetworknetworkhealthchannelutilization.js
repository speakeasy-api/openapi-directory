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
exports.GetNetworkNetworkHealthChannelUtilizationResponse = exports.GetNetworkNetworkHealthChannelUtilizationRequest = exports.GetNetworkNetworkHealthChannelUtilizationQueryParams = exports.GetNetworkNetworkHealthChannelUtilizationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkNetworkHealthChannelUtilizationPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkNetworkHealthChannelUtilizationPathParams, _super);
    function GetNetworkNetworkHealthChannelUtilizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkNetworkHealthChannelUtilizationPathParams.prototype, "networkId", void 0);
    return GetNetworkNetworkHealthChannelUtilizationPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkNetworkHealthChannelUtilizationPathParams = GetNetworkNetworkHealthChannelUtilizationPathParams;
var GetNetworkNetworkHealthChannelUtilizationQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkNetworkHealthChannelUtilizationQueryParams, _super);
    function GetNetworkNetworkHealthChannelUtilizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkNetworkHealthChannelUtilizationQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkNetworkHealthChannelUtilizationQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetNetworkNetworkHealthChannelUtilizationQueryParams.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkNetworkHealthChannelUtilizationQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkNetworkHealthChannelUtilizationQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkNetworkHealthChannelUtilizationQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkNetworkHealthChannelUtilizationQueryParams.prototype, "timespan", void 0);
    return GetNetworkNetworkHealthChannelUtilizationQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkNetworkHealthChannelUtilizationQueryParams = GetNetworkNetworkHealthChannelUtilizationQueryParams;
var GetNetworkNetworkHealthChannelUtilizationRequest = /** @class */ (function (_super) {
    __extends(GetNetworkNetworkHealthChannelUtilizationRequest, _super);
    function GetNetworkNetworkHealthChannelUtilizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkNetworkHealthChannelUtilizationPathParams)
    ], GetNetworkNetworkHealthChannelUtilizationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkNetworkHealthChannelUtilizationQueryParams)
    ], GetNetworkNetworkHealthChannelUtilizationRequest.prototype, "queryParams", void 0);
    return GetNetworkNetworkHealthChannelUtilizationRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkNetworkHealthChannelUtilizationRequest = GetNetworkNetworkHealthChannelUtilizationRequest;
var GetNetworkNetworkHealthChannelUtilizationResponse = /** @class */ (function (_super) {
    __extends(GetNetworkNetworkHealthChannelUtilizationResponse, _super);
    function GetNetworkNetworkHealthChannelUtilizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkNetworkHealthChannelUtilizationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkNetworkHealthChannelUtilizationResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkNetworkHealthChannelUtilizationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkNetworkHealthChannelUtilizationResponse.prototype, "getNetworkNetworkHealthChannelUtilization200ApplicationJSONObject", void 0);
    return GetNetworkNetworkHealthChannelUtilizationResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkNetworkHealthChannelUtilizationResponse = GetNetworkNetworkHealthChannelUtilizationResponse;
