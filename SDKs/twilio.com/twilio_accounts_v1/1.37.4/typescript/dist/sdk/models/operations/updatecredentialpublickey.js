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
exports.UpdateCredentialPublicKeyResponse = exports.UpdateCredentialPublicKeyRequest = exports.UpdateCredentialPublicKeySecurity = exports.UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest = exports.UpdateCredentialPublicKeyPathParams = exports.UpdateCredentialPublicKeyServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateCredentialPublicKeyServerList = [
    "https://accounts.twilio.com",
];
var UpdateCredentialPublicKeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyPathParams, _super);
    function UpdateCredentialPublicKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyPathParams.prototype, "sid", void 0);
    return UpdateCredentialPublicKeyPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateCredentialPublicKeyPathParams = UpdateCredentialPublicKeyPathParams;
var UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest, _super);
    function UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest.prototype, "friendlyName", void 0);
    return UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest = UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest;
var UpdateCredentialPublicKeySecurity = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeySecurity, _super);
    function UpdateCredentialPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCredentialPublicKeySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCredentialPublicKeySecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateCredentialPublicKeySecurity = UpdateCredentialPublicKeySecurity;
var UpdateCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyRequest, _super);
    function UpdateCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCredentialPublicKeyPathParams)
    ], UpdateCredentialPublicKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest)
    ], UpdateCredentialPublicKeyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCredentialPublicKeySecurity)
    ], UpdateCredentialPublicKeyRequest.prototype, "security", void 0);
    return UpdateCredentialPublicKeyRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateCredentialPublicKeyRequest = UpdateCredentialPublicKeyRequest;
var UpdateCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(UpdateCredentialPublicKeyResponse, _super);
    function UpdateCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCredentialPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateCredentialPublicKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AccountsV1CredentialCredentialPublicKey)
    ], UpdateCredentialPublicKeyResponse.prototype, "accountsV1CredentialCredentialPublicKey", void 0);
    return UpdateCredentialPublicKeyResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateCredentialPublicKeyResponse = UpdateCredentialPublicKeyResponse;
