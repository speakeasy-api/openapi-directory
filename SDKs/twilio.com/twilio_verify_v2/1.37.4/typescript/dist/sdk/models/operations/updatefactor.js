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
exports.UpdateFactorResponse = exports.UpdateFactorRequest = exports.UpdateFactorSecurity = exports.UpdateFactorUpdateFactorRequest = exports.UpdateFactorPathParams = exports.UpdateFactorServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateFactorServerList = [
    "https://verify.twilio.com",
];
var UpdateFactorPathParams = /** @class */ (function (_super) {
    __extends(UpdateFactorPathParams, _super);
    function UpdateFactorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], UpdateFactorPathParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateFactorPathParams.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateFactorPathParams.prototype, "sid", void 0);
    return UpdateFactorPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateFactorPathParams = UpdateFactorPathParams;
var UpdateFactorUpdateFactorRequest = /** @class */ (function (_super) {
    __extends(UpdateFactorUpdateFactorRequest, _super);
    function UpdateFactorUpdateFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=AuthPayload;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "authPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Config.Alg;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configAlg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Config.CodeLength;" }),
        __metadata("design:type", Number)
    ], UpdateFactorUpdateFactorRequest.prototype, "configCodeLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Config.NotificationPlatform;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configNotificationPlatform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Config.NotificationToken;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configNotificationToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Config.SdkVersion;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "configSdkVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Config.Skew;" }),
        __metadata("design:type", Number)
    ], UpdateFactorUpdateFactorRequest.prototype, "configSkew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Config.TimeStep;" }),
        __metadata("design:type", Number)
    ], UpdateFactorUpdateFactorRequest.prototype, "configTimeStep", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateFactorUpdateFactorRequest.prototype, "friendlyName", void 0);
    return UpdateFactorUpdateFactorRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFactorUpdateFactorRequest = UpdateFactorUpdateFactorRequest;
var UpdateFactorSecurity = /** @class */ (function (_super) {
    __extends(UpdateFactorSecurity, _super);
    function UpdateFactorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFactorSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFactorSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateFactorSecurity = UpdateFactorSecurity;
var UpdateFactorRequest = /** @class */ (function (_super) {
    __extends(UpdateFactorRequest, _super);
    function UpdateFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFactorRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFactorPathParams)
    ], UpdateFactorRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFactorUpdateFactorRequest)
    ], UpdateFactorRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFactorSecurity)
    ], UpdateFactorRequest.prototype, "security", void 0);
    return UpdateFactorRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFactorRequest = UpdateFactorRequest;
var UpdateFactorResponse = /** @class */ (function (_super) {
    __extends(UpdateFactorResponse, _super);
    function UpdateFactorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFactorResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateFactorResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VerifyV2ServiceEntityFactor)
    ], UpdateFactorResponse.prototype, "verifyV2ServiceEntityFactor", void 0);
    return UpdateFactorResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateFactorResponse = UpdateFactorResponse;
