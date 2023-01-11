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
exports.OsloginUsersGetLoginProfileResponse = exports.OsloginUsersGetLoginProfileRequest = exports.OsloginUsersGetLoginProfileSecurity = exports.OsloginUsersGetLoginProfileSecurityOption4 = exports.OsloginUsersGetLoginProfileSecurityOption3 = exports.OsloginUsersGetLoginProfileSecurityOption2 = exports.OsloginUsersGetLoginProfileSecurityOption1 = exports.OsloginUsersGetLoginProfileQueryParams = exports.OsloginUsersGetLoginProfileViewEnum = exports.OsloginUsersGetLoginProfileOperatingSystemTypeEnum = exports.OsloginUsersGetLoginProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var OsloginUsersGetLoginProfilePathParams = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfilePathParams, _super);
    function OsloginUsersGetLoginProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfilePathParams.prototype, "name", void 0);
    return OsloginUsersGetLoginProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfilePathParams = OsloginUsersGetLoginProfilePathParams;
var OsloginUsersGetLoginProfileOperatingSystemTypeEnum;
(function (OsloginUsersGetLoginProfileOperatingSystemTypeEnum) {
    OsloginUsersGetLoginProfileOperatingSystemTypeEnum["OperatingSystemTypeUnspecified"] = "OPERATING_SYSTEM_TYPE_UNSPECIFIED";
    OsloginUsersGetLoginProfileOperatingSystemTypeEnum["Linux"] = "LINUX";
    OsloginUsersGetLoginProfileOperatingSystemTypeEnum["Windows"] = "WINDOWS";
})(OsloginUsersGetLoginProfileOperatingSystemTypeEnum = exports.OsloginUsersGetLoginProfileOperatingSystemTypeEnum || (exports.OsloginUsersGetLoginProfileOperatingSystemTypeEnum = {}));
var OsloginUsersGetLoginProfileViewEnum;
(function (OsloginUsersGetLoginProfileViewEnum) {
    OsloginUsersGetLoginProfileViewEnum["LoginProfileViewUnspecified"] = "LOGIN_PROFILE_VIEW_UNSPECIFIED";
    OsloginUsersGetLoginProfileViewEnum["Basic"] = "BASIC";
    OsloginUsersGetLoginProfileViewEnum["SecurityKey"] = "SECURITY_KEY";
})(OsloginUsersGetLoginProfileViewEnum = exports.OsloginUsersGetLoginProfileViewEnum || (exports.OsloginUsersGetLoginProfileViewEnum = {}));
var OsloginUsersGetLoginProfileQueryParams = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileQueryParams, _super);
    function OsloginUsersGetLoginProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=operatingSystemType" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "operatingSystemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=systemId" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "systemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileQueryParams.prototype, "view", void 0);
    return OsloginUsersGetLoginProfileQueryParams;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileQueryParams = OsloginUsersGetLoginProfileQueryParams;
var OsloginUsersGetLoginProfileSecurityOption1 = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileSecurityOption1, _super);
    function OsloginUsersGetLoginProfileSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersGetLoginProfileSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersGetLoginProfileSecurityOption1.prototype, "oauth2c", void 0);
    return OsloginUsersGetLoginProfileSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileSecurityOption1 = OsloginUsersGetLoginProfileSecurityOption1;
var OsloginUsersGetLoginProfileSecurityOption2 = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileSecurityOption2, _super);
    function OsloginUsersGetLoginProfileSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersGetLoginProfileSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersGetLoginProfileSecurityOption2.prototype, "oauth2c", void 0);
    return OsloginUsersGetLoginProfileSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileSecurityOption2 = OsloginUsersGetLoginProfileSecurityOption2;
var OsloginUsersGetLoginProfileSecurityOption3 = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileSecurityOption3, _super);
    function OsloginUsersGetLoginProfileSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersGetLoginProfileSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersGetLoginProfileSecurityOption3.prototype, "oauth2c", void 0);
    return OsloginUsersGetLoginProfileSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileSecurityOption3 = OsloginUsersGetLoginProfileSecurityOption3;
var OsloginUsersGetLoginProfileSecurityOption4 = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileSecurityOption4, _super);
    function OsloginUsersGetLoginProfileSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersGetLoginProfileSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersGetLoginProfileSecurityOption4.prototype, "oauth2c", void 0);
    return OsloginUsersGetLoginProfileSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileSecurityOption4 = OsloginUsersGetLoginProfileSecurityOption4;
var OsloginUsersGetLoginProfileSecurity = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileSecurity, _super);
    function OsloginUsersGetLoginProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersGetLoginProfileSecurityOption1)
    ], OsloginUsersGetLoginProfileSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersGetLoginProfileSecurityOption2)
    ], OsloginUsersGetLoginProfileSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersGetLoginProfileSecurityOption3)
    ], OsloginUsersGetLoginProfileSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersGetLoginProfileSecurityOption4)
    ], OsloginUsersGetLoginProfileSecurity.prototype, "option4", void 0);
    return OsloginUsersGetLoginProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileSecurity = OsloginUsersGetLoginProfileSecurity;
var OsloginUsersGetLoginProfileRequest = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileRequest, _super);
    function OsloginUsersGetLoginProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OsloginUsersGetLoginProfilePathParams)
    ], OsloginUsersGetLoginProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OsloginUsersGetLoginProfileQueryParams)
    ], OsloginUsersGetLoginProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OsloginUsersGetLoginProfileSecurity)
    ], OsloginUsersGetLoginProfileRequest.prototype, "security", void 0);
    return OsloginUsersGetLoginProfileRequest;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileRequest = OsloginUsersGetLoginProfileRequest;
var OsloginUsersGetLoginProfileResponse = /** @class */ (function (_super) {
    __extends(OsloginUsersGetLoginProfileResponse, _super);
    function OsloginUsersGetLoginProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], OsloginUsersGetLoginProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LoginProfile)
    ], OsloginUsersGetLoginProfileResponse.prototype, "loginProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], OsloginUsersGetLoginProfileResponse.prototype, "statusCode", void 0);
    return OsloginUsersGetLoginProfileResponse;
}(utils_1.SpeakeasyBase));
exports.OsloginUsersGetLoginProfileResponse = OsloginUsersGetLoginProfileResponse;
