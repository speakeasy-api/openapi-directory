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
exports.YoutubeVideosDeleteResponse = exports.YoutubeVideosDeleteRequest = exports.YoutubeVideosDeleteSecurity = exports.YoutubeVideosDeleteSecurityOption3 = exports.YoutubeVideosDeleteSecurityOption2 = exports.YoutubeVideosDeleteSecurityOption1 = exports.YoutubeVideosDeleteQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeVideosDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideosDeleteQueryParams, _super);
    function YoutubeVideosDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeVideosDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosDeleteQueryParams = YoutubeVideosDeleteQueryParams;
var YoutubeVideosDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideosDeleteSecurityOption1, _super);
    function YoutubeVideosDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideosDeleteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosDeleteSecurityOption1 = YoutubeVideosDeleteSecurityOption1;
var YoutubeVideosDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideosDeleteSecurityOption2, _super);
    function YoutubeVideosDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideosDeleteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosDeleteSecurityOption2 = YoutubeVideosDeleteSecurityOption2;
var YoutubeVideosDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideosDeleteSecurityOption3, _super);
    function YoutubeVideosDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideosDeleteSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosDeleteSecurityOption3 = YoutubeVideosDeleteSecurityOption3;
var YoutubeVideosDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideosDeleteSecurity, _super);
    function YoutubeVideosDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosDeleteSecurityOption1)
    ], YoutubeVideosDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosDeleteSecurityOption2)
    ], YoutubeVideosDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosDeleteSecurityOption3)
    ], YoutubeVideosDeleteSecurity.prototype, "option3", void 0);
    return YoutubeVideosDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosDeleteSecurity = YoutubeVideosDeleteSecurity;
var YoutubeVideosDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideosDeleteRequest, _super);
    function YoutubeVideosDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeVideosDeleteQueryParams)
    ], YoutubeVideosDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeVideosDeleteSecurity)
    ], YoutubeVideosDeleteRequest.prototype, "security", void 0);
    return YoutubeVideosDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosDeleteRequest = YoutubeVideosDeleteRequest;
var YoutubeVideosDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideosDeleteResponse, _super);
    function YoutubeVideosDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeVideosDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeVideosDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeVideosDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeVideosDeleteResponse = YoutubeVideosDeleteResponse;
