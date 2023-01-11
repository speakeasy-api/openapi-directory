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
exports.UpdateDeviceCameraVideoSettingsResponse = exports.UpdateDeviceCameraVideoSettingsRequest = exports.UpdateDeviceCameraVideoSettingsRequestBody = exports.UpdateDeviceCameraVideoSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateDeviceCameraVideoSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraVideoSettingsPathParams, _super);
    function UpdateDeviceCameraVideoSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraVideoSettingsPathParams.prototype, "serial", void 0);
    return UpdateDeviceCameraVideoSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceCameraVideoSettingsPathParams = UpdateDeviceCameraVideoSettingsPathParams;
var UpdateDeviceCameraVideoSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraVideoSettingsRequestBody, _super);
    function UpdateDeviceCameraVideoSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalRtspEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceCameraVideoSettingsRequestBody.prototype, "externalRtspEnabled", void 0);
    return UpdateDeviceCameraVideoSettingsRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceCameraVideoSettingsRequestBody = UpdateDeviceCameraVideoSettingsRequestBody;
var UpdateDeviceCameraVideoSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraVideoSettingsRequest, _super);
    function UpdateDeviceCameraVideoSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDeviceCameraVideoSettingsPathParams)
    ], UpdateDeviceCameraVideoSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceCameraVideoSettingsRequestBody)
    ], UpdateDeviceCameraVideoSettingsRequest.prototype, "request", void 0);
    return UpdateDeviceCameraVideoSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceCameraVideoSettingsRequest = UpdateDeviceCameraVideoSettingsRequest;
var UpdateDeviceCameraVideoSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraVideoSettingsResponse, _super);
    function UpdateDeviceCameraVideoSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDeviceCameraVideoSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDeviceCameraVideoSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateDeviceCameraVideoSettingsResponse.prototype, "updateDeviceCameraVideoSettings200ApplicationJSONObject", void 0);
    return UpdateDeviceCameraVideoSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateDeviceCameraVideoSettingsResponse = UpdateDeviceCameraVideoSettingsResponse;
