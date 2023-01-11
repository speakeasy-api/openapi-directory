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
exports.AuthConfig = exports.AuthConfigAuthTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var configvariable_1 = require("./configvariable");
var oauth2clientcredentials_1 = require("./oauth2clientcredentials");
var oauth2jwtbearer_1 = require("./oauth2jwtbearer");
var sshpublickey_1 = require("./sshpublickey");
var userpassword_1 = require("./userpassword");
var AuthConfigAuthTypeEnum;
(function (AuthConfigAuthTypeEnum) {
    AuthConfigAuthTypeEnum["AuthTypeUnspecified"] = "AUTH_TYPE_UNSPECIFIED";
    AuthConfigAuthTypeEnum["UserPassword"] = "USER_PASSWORD";
    AuthConfigAuthTypeEnum["Oauth2JwtBearer"] = "OAUTH2_JWT_BEARER";
    AuthConfigAuthTypeEnum["Oauth2ClientCredentials"] = "OAUTH2_CLIENT_CREDENTIALS";
    AuthConfigAuthTypeEnum["SshPublicKey"] = "SSH_PUBLIC_KEY";
    AuthConfigAuthTypeEnum["Oauth2AuthCodeFlow"] = "OAUTH2_AUTH_CODE_FLOW";
})(AuthConfigAuthTypeEnum = exports.AuthConfigAuthTypeEnum || (exports.AuthConfigAuthTypeEnum = {}));
// AuthConfig
/**
 * AuthConfig defines details of a authentication type.
**/
var AuthConfig = /** @class */ (function (_super) {
    __extends(AuthConfig, _super);
    function AuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalVariables", elemType: configvariable_1.ConfigVariable }),
        __metadata("design:type", Array)
    ], AuthConfig.prototype, "additionalVariables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], AuthConfig.prototype, "authType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauth2ClientCredentials" }),
        __metadata("design:type", oauth2clientcredentials_1.Oauth2ClientCredentials)
    ], AuthConfig.prototype, "oauth2ClientCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauth2JwtBearer" }),
        __metadata("design:type", oauth2jwtbearer_1.Oauth2JwtBearer)
    ], AuthConfig.prototype, "oauth2JwtBearer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sshPublicKey" }),
        __metadata("design:type", sshpublickey_1.SshPublicKey)
    ], AuthConfig.prototype, "sshPublicKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userPassword" }),
        __metadata("design:type", userpassword_1.UserPassword)
    ], AuthConfig.prototype, "userPassword", void 0);
    return AuthConfig;
}(utils_1.SpeakeasyBase));
exports.AuthConfig = AuthConfig;
