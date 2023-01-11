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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeployedDevicesKeyResponse = exports.UpdateDeployedDevicesKeyRequest = exports.UpdateDeployedDevicesKeySecurity = exports.UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest = exports.UpdateDeployedDevicesKeyPathParams = exports.UpdateDeployedDevicesKeyServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateDeployedDevicesKeyServerList = [
    "https://preview.twilio.com",
];
var UpdateDeployedDevicesKeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyPathParams, _super);
    function UpdateDeployedDevicesKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyPathParams.prototype, "fleetSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyPathParams.prototype, "sid", void 0);
    return UpdateDeployedDevicesKeyPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDeployedDevicesKeyPathParams = UpdateDeployedDevicesKeyPathParams;
var UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest, _super);
    function UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DeviceSid;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest.prototype, "deviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest.prototype, "friendlyName", void 0);
    return UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest = UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;
var UpdateDeployedDevicesKeySecurity = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeySecurity, _super);
    function UpdateDeployedDevicesKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDeployedDevicesKeySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDeployedDevicesKeySecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateDeployedDevicesKeySecurity = UpdateDeployedDevicesKeySecurity;
var UpdateDeployedDevicesKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyRequest, _super);
    function UpdateDeployedDevicesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDeployedDevicesKeyPathParams)
    ], UpdateDeployedDevicesKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest)
    ], UpdateDeployedDevicesKeyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDeployedDevicesKeySecurity)
    ], UpdateDeployedDevicesKeyRequest.prototype, "security", void 0);
    return UpdateDeployedDevicesKeyRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDeployedDevicesKeyRequest = UpdateDeployedDevicesKeyRequest;
var UpdateDeployedDevicesKeyResponse = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyResponse, _super);
    function UpdateDeployedDevicesKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDeployedDevicesKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetKey)
    ], UpdateDeployedDevicesKeyResponse.prototype, "previewDeployedDevicesFleetKey", void 0);
    return UpdateDeployedDevicesKeyResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateDeployedDevicesKeyResponse = UpdateDeployedDevicesKeyResponse;
