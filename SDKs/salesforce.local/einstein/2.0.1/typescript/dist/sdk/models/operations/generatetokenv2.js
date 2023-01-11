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
exports.GenerateTokenV2Response = exports.GenerateTokenV2Request = exports.GenerateTokenV2RequestBody = exports.GenerateTokenV2RequestBodyGrantTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GenerateTokenV2RequestBodyGrantTypeEnum;
(function (GenerateTokenV2RequestBodyGrantTypeEnum) {
    GenerateTokenV2RequestBodyGrantTypeEnum["UrnIetfParamsOauthGrantTypeJwtBearer"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
    GenerateTokenV2RequestBodyGrantTypeEnum["RefreshToken"] = "refresh_token";
})(GenerateTokenV2RequestBodyGrantTypeEnum = exports.GenerateTokenV2RequestBodyGrantTypeEnum || (exports.GenerateTokenV2RequestBodyGrantTypeEnum = {}));
var GenerateTokenV2RequestBody = /** @class */ (function (_super) {
    __extends(GenerateTokenV2RequestBody, _super);
    function GenerateTokenV2RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=assertion;" }),
        __metadata("design:type", String)
    ], GenerateTokenV2RequestBody.prototype, "assertion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=grant_type;" }),
        __metadata("design:type", String)
    ], GenerateTokenV2RequestBody.prototype, "grantType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=refresh_token;" }),
        __metadata("design:type", String)
    ], GenerateTokenV2RequestBody.prototype, "refreshToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=scope;" }),
        __metadata("design:type", String)
    ], GenerateTokenV2RequestBody.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=valid_for;" }),
        __metadata("design:type", Number)
    ], GenerateTokenV2RequestBody.prototype, "validFor", void 0);
    return GenerateTokenV2RequestBody;
}(utils_1.SpeakeasyBase));
exports.GenerateTokenV2RequestBody = GenerateTokenV2RequestBody;
var GenerateTokenV2Request = /** @class */ (function (_super) {
    __extends(GenerateTokenV2Request, _super);
    function GenerateTokenV2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", GenerateTokenV2RequestBody)
    ], GenerateTokenV2Request.prototype, "request", void 0);
    return GenerateTokenV2Request;
}(utils_1.SpeakeasyBase));
exports.GenerateTokenV2Request = GenerateTokenV2Request;
var GenerateTokenV2Response = /** @class */ (function (_super) {
    __extends(GenerateTokenV2Response, _super);
    function GenerateTokenV2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GenerateTokenV2Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GenerateAccessTokenResponse)
    ], GenerateTokenV2Response.prototype, "generateAccessTokenResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GenerateTokenV2Response.prototype, "statusCode", void 0);
    return GenerateTokenV2Response;
}(utils_1.SpeakeasyBase));
exports.GenerateTokenV2Response = GenerateTokenV2Response;
