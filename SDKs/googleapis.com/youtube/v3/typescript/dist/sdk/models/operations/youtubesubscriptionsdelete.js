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
exports.YoutubeSubscriptionsDeleteResponse = exports.YoutubeSubscriptionsDeleteRequest = exports.YoutubeSubscriptionsDeleteSecurity = exports.YoutubeSubscriptionsDeleteSecurityOption3 = exports.YoutubeSubscriptionsDeleteSecurityOption2 = exports.YoutubeSubscriptionsDeleteSecurityOption1 = exports.YoutubeSubscriptionsDeleteQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeSubscriptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsDeleteQueryParams, _super);
    function YoutubeSubscriptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeSubscriptionsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeSubscriptionsDeleteQueryParams = YoutubeSubscriptionsDeleteQueryParams;
var YoutubeSubscriptionsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsDeleteSecurityOption1, _super);
    function YoutubeSubscriptionsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsDeleteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeSubscriptionsDeleteSecurityOption1 = YoutubeSubscriptionsDeleteSecurityOption1;
var YoutubeSubscriptionsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsDeleteSecurityOption2, _super);
    function YoutubeSubscriptionsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsDeleteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeSubscriptionsDeleteSecurityOption2 = YoutubeSubscriptionsDeleteSecurityOption2;
var YoutubeSubscriptionsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsDeleteSecurityOption3, _super);
    function YoutubeSubscriptionsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsDeleteSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeSubscriptionsDeleteSecurityOption3 = YoutubeSubscriptionsDeleteSecurityOption3;
var YoutubeSubscriptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsDeleteSecurity, _super);
    function YoutubeSubscriptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsDeleteSecurityOption1)
    ], YoutubeSubscriptionsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsDeleteSecurityOption2)
    ], YoutubeSubscriptionsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsDeleteSecurityOption3)
    ], YoutubeSubscriptionsDeleteSecurity.prototype, "option3", void 0);
    return YoutubeSubscriptionsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeSubscriptionsDeleteSecurity = YoutubeSubscriptionsDeleteSecurity;
var YoutubeSubscriptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsDeleteRequest, _super);
    function YoutubeSubscriptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeSubscriptionsDeleteQueryParams)
    ], YoutubeSubscriptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeSubscriptionsDeleteSecurity)
    ], YoutubeSubscriptionsDeleteRequest.prototype, "security", void 0);
    return YoutubeSubscriptionsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeSubscriptionsDeleteRequest = YoutubeSubscriptionsDeleteRequest;
var YoutubeSubscriptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsDeleteResponse, _super);
    function YoutubeSubscriptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeSubscriptionsDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeSubscriptionsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeSubscriptionsDeleteResponse = YoutubeSubscriptionsDeleteResponse;
