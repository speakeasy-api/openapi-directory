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
exports.CreateAccessTokenResponse = exports.CreateAccessTokenRequest = exports.CreateAccessTokenRequests = exports.CreateAccessTokenApplicationXWwwFormUrlencoded = exports.CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum = exports.CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum = exports.CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum = exports.CreateAccessTokenApplicationJson = exports.CreateAccessTokenApplicationJsonRealmEnum = exports.CreateAccessTokenApplicationJsonGrantTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateAccessTokenApplicationJsonGrantTypeEnum;
(function (CreateAccessTokenApplicationJsonGrantTypeEnum) {
    CreateAccessTokenApplicationJsonGrantTypeEnum["AuthorizationCode"] = "authorization_code";
    CreateAccessTokenApplicationJsonGrantTypeEnum["ClientCredentials"] = "client_credentials";
    CreateAccessTokenApplicationJsonGrantTypeEnum["RefreshToken"] = "refresh_token";
})(CreateAccessTokenApplicationJsonGrantTypeEnum = exports.CreateAccessTokenApplicationJsonGrantTypeEnum || (exports.CreateAccessTokenApplicationJsonGrantTypeEnum = {}));
var CreateAccessTokenApplicationJsonRealmEnum;
(function (CreateAccessTokenApplicationJsonRealmEnum) {
    CreateAccessTokenApplicationJsonRealmEnum["Customer"] = "customer";
    CreateAccessTokenApplicationJsonRealmEnum["Contributor"] = "contributor";
})(CreateAccessTokenApplicationJsonRealmEnum = exports.CreateAccessTokenApplicationJsonRealmEnum || (exports.CreateAccessTokenApplicationJsonRealmEnum = {}));
var CreateAccessTokenApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAccessTokenApplicationJson, _super);
    function CreateAccessTokenApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationJson.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationJson.prototype, "clientSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expires" }),
        __metadata("design:type", Boolean)
    ], CreateAccessTokenApplicationJson.prototype, "expires", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grant_type" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationJson.prototype, "grantType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=realm" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationJson.prototype, "realm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refresh_token" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationJson.prototype, "refreshToken", void 0);
    return CreateAccessTokenApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateAccessTokenApplicationJson = CreateAccessTokenApplicationJson;
var CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum;
(function (CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum) {
    CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum["True"] = "true";
    CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum["False"] = "false";
})(CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum = exports.CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum || (exports.CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum = {}));
var CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum;
(function (CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum) {
    CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum["AuthorizationCode"] = "authorization_code";
    CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum["ClientCredentials"] = "client_credentials";
    CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum["RefreshToken"] = "refresh_token";
})(CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum = exports.CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum || (exports.CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum = {}));
var CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum;
(function (CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum) {
    CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum["Customer"] = "customer";
    CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum["Contributor"] = "contributor";
})(CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum = exports.CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum || (exports.CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum = {}));
var CreateAccessTokenApplicationXWwwFormUrlencoded = /** @class */ (function (_super) {
    __extends(CreateAccessTokenApplicationXWwwFormUrlencoded, _super);
    function CreateAccessTokenApplicationXWwwFormUrlencoded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=client_id;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationXWwwFormUrlencoded.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=client_secret;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationXWwwFormUrlencoded.prototype, "clientSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=code;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationXWwwFormUrlencoded.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=expires;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationXWwwFormUrlencoded.prototype, "expires", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=grant_type;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationXWwwFormUrlencoded.prototype, "grantType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=realm;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationXWwwFormUrlencoded.prototype, "realm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=refresh_token;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenApplicationXWwwFormUrlencoded.prototype, "refreshToken", void 0);
    return CreateAccessTokenApplicationXWwwFormUrlencoded;
}(utils_1.SpeakeasyBase));
exports.CreateAccessTokenApplicationXWwwFormUrlencoded = CreateAccessTokenApplicationXWwwFormUrlencoded;
var CreateAccessTokenRequests = /** @class */ (function (_super) {
    __extends(CreateAccessTokenRequests, _super);
    function CreateAccessTokenRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAccessTokenApplicationJson)
    ], CreateAccessTokenRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateAccessTokenApplicationXWwwFormUrlencoded)
    ], CreateAccessTokenRequests.prototype, "object1", void 0);
    return CreateAccessTokenRequests;
}(utils_1.SpeakeasyBase));
exports.CreateAccessTokenRequests = CreateAccessTokenRequests;
var CreateAccessTokenRequest = /** @class */ (function (_super) {
    __extends(CreateAccessTokenRequest, _super);
    function CreateAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateAccessTokenRequests)
    ], CreateAccessTokenRequest.prototype, "request", void 0);
    return CreateAccessTokenRequest;
}(utils_1.SpeakeasyBase));
exports.CreateAccessTokenRequest = CreateAccessTokenRequest;
var CreateAccessTokenResponse = /** @class */ (function (_super) {
    __extends(CreateAccessTokenResponse, _super);
    function CreateAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OauthAccessTokenResponse)
    ], CreateAccessTokenResponse.prototype, "oauthAccessTokenResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateAccessTokenResponse.prototype, "statusCode", void 0);
    return CreateAccessTokenResponse;
}(utils_1.SpeakeasyBase));
exports.CreateAccessTokenResponse = CreateAccessTokenResponse;
