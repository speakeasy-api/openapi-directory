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
exports.YoutubeAbuseReportsInsertResponse = exports.YoutubeAbuseReportsInsertRequest = exports.YoutubeAbuseReportsInsertSecurity = exports.YoutubeAbuseReportsInsertSecurityOption2 = exports.YoutubeAbuseReportsInsertSecurityOption1 = exports.YoutubeAbuseReportsInsertQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeAbuseReportsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertQueryParams, _super);
    function YoutubeAbuseReportsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAbuseReportsInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeAbuseReportsInsertQueryParams = YoutubeAbuseReportsInsertQueryParams;
var YoutubeAbuseReportsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertSecurityOption1, _super);
    function YoutubeAbuseReportsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAbuseReportsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAbuseReportsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAbuseReportsInsertSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeAbuseReportsInsertSecurityOption1 = YoutubeAbuseReportsInsertSecurityOption1;
var YoutubeAbuseReportsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertSecurityOption2, _super);
    function YoutubeAbuseReportsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAbuseReportsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAbuseReportsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAbuseReportsInsertSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeAbuseReportsInsertSecurityOption2 = YoutubeAbuseReportsInsertSecurityOption2;
var YoutubeAbuseReportsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertSecurity, _super);
    function YoutubeAbuseReportsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAbuseReportsInsertSecurityOption1)
    ], YoutubeAbuseReportsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAbuseReportsInsertSecurityOption2)
    ], YoutubeAbuseReportsInsertSecurity.prototype, "option2", void 0);
    return YoutubeAbuseReportsInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeAbuseReportsInsertSecurity = YoutubeAbuseReportsInsertSecurity;
var YoutubeAbuseReportsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertRequest, _super);
    function YoutubeAbuseReportsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeAbuseReportsInsertQueryParams)
    ], YoutubeAbuseReportsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AbuseReport)
    ], YoutubeAbuseReportsInsertRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeAbuseReportsInsertSecurity)
    ], YoutubeAbuseReportsInsertRequest.prototype, "security", void 0);
    return YoutubeAbuseReportsInsertRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeAbuseReportsInsertRequest = YoutubeAbuseReportsInsertRequest;
var YoutubeAbuseReportsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertResponse, _super);
    function YoutubeAbuseReportsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AbuseReport)
    ], YoutubeAbuseReportsInsertResponse.prototype, "abuseReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeAbuseReportsInsertResponse.prototype, "statusCode", void 0);
    return YoutubeAbuseReportsInsertResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeAbuseReportsInsertResponse = YoutubeAbuseReportsInsertResponse;
