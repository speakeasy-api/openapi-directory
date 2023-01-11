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
exports.GenerateDeviceCameraSnapshotResponse = exports.GenerateDeviceCameraSnapshotRequest = exports.GenerateDeviceCameraSnapshotRequestBody = exports.GenerateDeviceCameraSnapshotPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GenerateDeviceCameraSnapshotPathParams = /** @class */ (function (_super) {
    __extends(GenerateDeviceCameraSnapshotPathParams, _super);
    function GenerateDeviceCameraSnapshotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GenerateDeviceCameraSnapshotPathParams.prototype, "serial", void 0);
    return GenerateDeviceCameraSnapshotPathParams;
}(utils_1.SpeakeasyBase));
exports.GenerateDeviceCameraSnapshotPathParams = GenerateDeviceCameraSnapshotPathParams;
var GenerateDeviceCameraSnapshotRequestBody = /** @class */ (function (_super) {
    __extends(GenerateDeviceCameraSnapshotRequestBody, _super);
    function GenerateDeviceCameraSnapshotRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullframe" }),
        __metadata("design:type", Boolean)
    ], GenerateDeviceCameraSnapshotRequestBody.prototype, "fullframe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], GenerateDeviceCameraSnapshotRequestBody.prototype, "timestamp", void 0);
    return GenerateDeviceCameraSnapshotRequestBody;
}(utils_1.SpeakeasyBase));
exports.GenerateDeviceCameraSnapshotRequestBody = GenerateDeviceCameraSnapshotRequestBody;
var GenerateDeviceCameraSnapshotRequest = /** @class */ (function (_super) {
    __extends(GenerateDeviceCameraSnapshotRequest, _super);
    function GenerateDeviceCameraSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GenerateDeviceCameraSnapshotPathParams)
    ], GenerateDeviceCameraSnapshotRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GenerateDeviceCameraSnapshotRequestBody)
    ], GenerateDeviceCameraSnapshotRequest.prototype, "request", void 0);
    return GenerateDeviceCameraSnapshotRequest;
}(utils_1.SpeakeasyBase));
exports.GenerateDeviceCameraSnapshotRequest = GenerateDeviceCameraSnapshotRequest;
var GenerateDeviceCameraSnapshotResponse = /** @class */ (function (_super) {
    __extends(GenerateDeviceCameraSnapshotResponse, _super);
    function GenerateDeviceCameraSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GenerateDeviceCameraSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GenerateDeviceCameraSnapshotResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GenerateDeviceCameraSnapshotResponse.prototype, "generateDeviceCameraSnapshot202ApplicationJSONObject", void 0);
    return GenerateDeviceCameraSnapshotResponse;
}(utils_1.SpeakeasyBase));
exports.GenerateDeviceCameraSnapshotResponse = GenerateDeviceCameraSnapshotResponse;
