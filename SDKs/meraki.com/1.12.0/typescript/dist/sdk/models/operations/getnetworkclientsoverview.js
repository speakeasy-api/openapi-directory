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
exports.GetNetworkClientsOverviewResponse = exports.GetNetworkClientsOverviewRequest = exports.GetNetworkClientsOverviewQueryParams = exports.GetNetworkClientsOverviewPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkClientsOverviewPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkClientsOverviewPathParams, _super);
    function GetNetworkClientsOverviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkClientsOverviewPathParams.prototype, "networkId", void 0);
    return GetNetworkClientsOverviewPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsOverviewPathParams = GetNetworkClientsOverviewPathParams;
var GetNetworkClientsOverviewQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkClientsOverviewQueryParams, _super);
    function GetNetworkClientsOverviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetNetworkClientsOverviewQueryParams.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkClientsOverviewQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkClientsOverviewQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkClientsOverviewQueryParams.prototype, "timespan", void 0);
    return GetNetworkClientsOverviewQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsOverviewQueryParams = GetNetworkClientsOverviewQueryParams;
var GetNetworkClientsOverviewRequest = /** @class */ (function (_super) {
    __extends(GetNetworkClientsOverviewRequest, _super);
    function GetNetworkClientsOverviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkClientsOverviewPathParams)
    ], GetNetworkClientsOverviewRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkClientsOverviewQueryParams)
    ], GetNetworkClientsOverviewRequest.prototype, "queryParams", void 0);
    return GetNetworkClientsOverviewRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsOverviewRequest = GetNetworkClientsOverviewRequest;
var GetNetworkClientsOverviewResponse = /** @class */ (function (_super) {
    __extends(GetNetworkClientsOverviewResponse, _super);
    function GetNetworkClientsOverviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkClientsOverviewResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkClientsOverviewResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkClientsOverviewResponse.prototype, "getNetworkClientsOverview200ApplicationJSONObject", void 0);
    return GetNetworkClientsOverviewResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsOverviewResponse = GetNetworkClientsOverviewResponse;
