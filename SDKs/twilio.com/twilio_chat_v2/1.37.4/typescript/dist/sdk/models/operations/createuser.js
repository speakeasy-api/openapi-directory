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
exports.CreateUserResponse = exports.CreateUserRequest = exports.CreateUserSecurity = exports.CreateUserCreateUserRequest = exports.CreateUserHeaders = exports.CreateUserPathParams = exports.CreateUserServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateUserServerList = [
    "https://chat.twilio.com",
];
var CreateUserPathParams = /** @class */ (function (_super) {
    __extends(CreateUserPathParams, _super);
    function CreateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateUserPathParams.prototype, "serviceSid", void 0);
    return CreateUserPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateUserPathParams = CreateUserPathParams;
var CreateUserHeaders = /** @class */ (function (_super) {
    __extends(CreateUserHeaders, _super);
    function CreateUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateUserHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateUserHeaders = CreateUserHeaders;
var CreateUserCreateUserRequest = /** @class */ (function (_super) {
    __extends(CreateUserCreateUserRequest, _super);
    function CreateUserCreateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateUserCreateUserRequest.prototype, "roleSid", void 0);
    return CreateUserCreateUserRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUserCreateUserRequest = CreateUserCreateUserRequest;
var CreateUserSecurity = /** @class */ (function (_super) {
    __extends(CreateUserSecurity, _super);
    function CreateUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUserSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUserSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateUserSecurity = CreateUserSecurity;
var CreateUserRequest = /** @class */ (function (_super) {
    __extends(CreateUserRequest, _super);
    function CreateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUserPathParams)
    ], CreateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUserHeaders)
    ], CreateUserRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUserCreateUserRequest)
    ], CreateUserRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUserSecurity)
    ], CreateUserRequest.prototype, "security", void 0);
    return CreateUserRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUserRequest = CreateUserRequest;
var CreateUserResponse = /** @class */ (function (_super) {
    __extends(CreateUserResponse, _super);
    function CreateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ChatV2ServiceUser)
    ], CreateUserResponse.prototype, "chatV2ServiceUser", void 0);
    return CreateUserResponse;
}(utils_1.SpeakeasyBase));
exports.CreateUserResponse = CreateUserResponse;
