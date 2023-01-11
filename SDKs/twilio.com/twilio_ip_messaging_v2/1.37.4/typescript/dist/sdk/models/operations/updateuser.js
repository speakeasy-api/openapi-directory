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
exports.UpdateUserResponse = exports.UpdateUserRequest = exports.UpdateUserSecurity = exports.UpdateUserUpdateUserRequest = exports.UpdateUserHeaders = exports.UpdateUserPathParams = exports.UpdateUserServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateUserServerList = [
    "https://ip-messaging.twilio.com",
];
var UpdateUserPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserPathParams, _super);
    function UpdateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateUserPathParams.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUserPathParams.prototype, "sid", void 0);
    return UpdateUserPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUserPathParams = UpdateUserPathParams;
var UpdateUserHeaders = /** @class */ (function (_super) {
    __extends(UpdateUserHeaders, _super);
    function UpdateUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateUserHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateUserHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateUserHeaders = UpdateUserHeaders;
var UpdateUserUpdateUserRequest = /** @class */ (function (_super) {
    __extends(UpdateUserUpdateUserRequest, _super);
    function UpdateUserUpdateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateUserUpdateUserRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUserUpdateUserRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], UpdateUserUpdateUserRequest.prototype, "roleSid", void 0);
    return UpdateUserUpdateUserRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserUpdateUserRequest = UpdateUserUpdateUserRequest;
var UpdateUserSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserSecurity, _super);
    function UpdateUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUserSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUserSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSecurity = UpdateUserSecurity;
var UpdateUserRequest = /** @class */ (function (_super) {
    __extends(UpdateUserRequest, _super);
    function UpdateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserPathParams)
    ], UpdateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserHeaders)
    ], UpdateUserRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUserUpdateUserRequest)
    ], UpdateUserRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserSecurity)
    ], UpdateUserRequest.prototype, "security", void 0);
    return UpdateUserRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserRequest = UpdateUserRequest;
var UpdateUserResponse = /** @class */ (function (_super) {
    __extends(UpdateUserResponse, _super);
    function UpdateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.IpMessagingV2ServiceUser)
    ], UpdateUserResponse.prototype, "ipMessagingV2ServiceUser", void 0);
    return UpdateUserResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUserResponse = UpdateUserResponse;
