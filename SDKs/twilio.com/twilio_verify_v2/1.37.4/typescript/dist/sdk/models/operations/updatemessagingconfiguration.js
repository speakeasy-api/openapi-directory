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
exports.UpdateMessagingConfigurationResponse = exports.UpdateMessagingConfigurationRequest = exports.UpdateMessagingConfigurationSecurity = exports.UpdateMessagingConfigurationUpdateMessagingConfigurationRequest = exports.UpdateMessagingConfigurationPathParams = exports.UpdateMessagingConfigurationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateMessagingConfigurationServerList = [
    "https://verify.twilio.com",
];
var UpdateMessagingConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationPathParams, _super);
    function UpdateMessagingConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Country" }),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationPathParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationPathParams.prototype, "serviceSid", void 0);
    return UpdateMessagingConfigurationPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateMessagingConfigurationPathParams = UpdateMessagingConfigurationPathParams;
var UpdateMessagingConfigurationUpdateMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationUpdateMessagingConfigurationRequest, _super);
    function UpdateMessagingConfigurationUpdateMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationUpdateMessagingConfigurationRequest.prototype, "messagingServiceSid", void 0);
    return UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMessagingConfigurationUpdateMessagingConfigurationRequest = UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;
var UpdateMessagingConfigurationSecurity = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationSecurity, _super);
    function UpdateMessagingConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMessagingConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMessagingConfigurationSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateMessagingConfigurationSecurity = UpdateMessagingConfigurationSecurity;
var UpdateMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationRequest, _super);
    function UpdateMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessagingConfigurationPathParams)
    ], UpdateMessagingConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMessagingConfigurationUpdateMessagingConfigurationRequest)
    ], UpdateMessagingConfigurationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessagingConfigurationSecurity)
    ], UpdateMessagingConfigurationRequest.prototype, "security", void 0);
    return UpdateMessagingConfigurationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMessagingConfigurationRequest = UpdateMessagingConfigurationRequest;
var UpdateMessagingConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateMessagingConfigurationResponse, _super);
    function UpdateMessagingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMessagingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateMessagingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VerifyV2ServiceMessagingConfiguration)
    ], UpdateMessagingConfigurationResponse.prototype, "verifyV2ServiceMessagingConfiguration", void 0);
    return UpdateMessagingConfigurationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateMessagingConfigurationResponse = UpdateMessagingConfigurationResponse;
