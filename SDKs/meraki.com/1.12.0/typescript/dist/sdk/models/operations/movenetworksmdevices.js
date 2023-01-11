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
exports.MoveNetworkSmDevicesResponse = exports.MoveNetworkSmDevicesRequest = exports.MoveNetworkSmDevicesRequestBody = exports.MoveNetworkSmDevicesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var MoveNetworkSmDevicesPathParams = /** @class */ (function (_super) {
    __extends(MoveNetworkSmDevicesPathParams, _super);
    function MoveNetworkSmDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], MoveNetworkSmDevicesPathParams.prototype, "networkId", void 0);
    return MoveNetworkSmDevicesPathParams;
}(utils_1.SpeakeasyBase));
exports.MoveNetworkSmDevicesPathParams = MoveNetworkSmDevicesPathParams;
var MoveNetworkSmDevicesRequestBody = /** @class */ (function (_super) {
    __extends(MoveNetworkSmDevicesRequestBody, _super);
    function MoveNetworkSmDevicesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], MoveNetworkSmDevicesRequestBody.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newNetwork" }),
        __metadata("design:type", String)
    ], MoveNetworkSmDevicesRequestBody.prototype, "newNetwork", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", Array)
    ], MoveNetworkSmDevicesRequestBody.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serials" }),
        __metadata("design:type", Array)
    ], MoveNetworkSmDevicesRequestBody.prototype, "serials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wifiMacs" }),
        __metadata("design:type", Array)
    ], MoveNetworkSmDevicesRequestBody.prototype, "wifiMacs", void 0);
    return MoveNetworkSmDevicesRequestBody;
}(utils_1.SpeakeasyBase));
exports.MoveNetworkSmDevicesRequestBody = MoveNetworkSmDevicesRequestBody;
var MoveNetworkSmDevicesRequest = /** @class */ (function (_super) {
    __extends(MoveNetworkSmDevicesRequest, _super);
    function MoveNetworkSmDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MoveNetworkSmDevicesPathParams)
    ], MoveNetworkSmDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MoveNetworkSmDevicesRequestBody)
    ], MoveNetworkSmDevicesRequest.prototype, "request", void 0);
    return MoveNetworkSmDevicesRequest;
}(utils_1.SpeakeasyBase));
exports.MoveNetworkSmDevicesRequest = MoveNetworkSmDevicesRequest;
var MoveNetworkSmDevicesResponse = /** @class */ (function (_super) {
    __extends(MoveNetworkSmDevicesResponse, _super);
    function MoveNetworkSmDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MoveNetworkSmDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MoveNetworkSmDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MoveNetworkSmDevicesResponse.prototype, "moveNetworkSmDevices200ApplicationJSONObject", void 0);
    return MoveNetworkSmDevicesResponse;
}(utils_1.SpeakeasyBase));
exports.MoveNetworkSmDevicesResponse = MoveNetworkSmDevicesResponse;
