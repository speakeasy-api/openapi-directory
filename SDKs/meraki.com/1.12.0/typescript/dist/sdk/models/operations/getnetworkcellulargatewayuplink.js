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
exports.GetNetworkCellularGatewayUplinkResponse = exports.GetNetworkCellularGatewayUplinkRequest = exports.GetNetworkCellularGatewayUplinkPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkCellularGatewayUplinkPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkCellularGatewayUplinkPathParams, _super);
    function GetNetworkCellularGatewayUplinkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkCellularGatewayUplinkPathParams.prototype, "networkId", void 0);
    return GetNetworkCellularGatewayUplinkPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkCellularGatewayUplinkPathParams = GetNetworkCellularGatewayUplinkPathParams;
var GetNetworkCellularGatewayUplinkRequest = /** @class */ (function (_super) {
    __extends(GetNetworkCellularGatewayUplinkRequest, _super);
    function GetNetworkCellularGatewayUplinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkCellularGatewayUplinkPathParams)
    ], GetNetworkCellularGatewayUplinkRequest.prototype, "pathParams", void 0);
    return GetNetworkCellularGatewayUplinkRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkCellularGatewayUplinkRequest = GetNetworkCellularGatewayUplinkRequest;
var GetNetworkCellularGatewayUplinkResponse = /** @class */ (function (_super) {
    __extends(GetNetworkCellularGatewayUplinkResponse, _super);
    function GetNetworkCellularGatewayUplinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkCellularGatewayUplinkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkCellularGatewayUplinkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkCellularGatewayUplinkResponse.prototype, "getNetworkCellularGatewayUplink200ApplicationJSONObject", void 0);
    return GetNetworkCellularGatewayUplinkResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkCellularGatewayUplinkResponse = GetNetworkCellularGatewayUplinkResponse;
