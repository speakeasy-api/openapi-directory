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
exports.ClassroomUserProfilesGuardiansListResponse = exports.ClassroomUserProfilesGuardiansListRequest = exports.ClassroomUserProfilesGuardiansListSecurity = exports.ClassroomUserProfilesGuardiansListSecurityOption3 = exports.ClassroomUserProfilesGuardiansListSecurityOption2 = exports.ClassroomUserProfilesGuardiansListSecurityOption1 = exports.ClassroomUserProfilesGuardiansListQueryParams = exports.ClassroomUserProfilesGuardiansListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClassroomUserProfilesGuardiansListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListPathParams, _super);
    function ClassroomUserProfilesGuardiansListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=studentId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListPathParams.prototype, "studentId", void 0);
    return ClassroomUserProfilesGuardiansListPathParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListPathParams = ClassroomUserProfilesGuardiansListPathParams;
var ClassroomUserProfilesGuardiansListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListQueryParams, _super);
    function ClassroomUserProfilesGuardiansListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=invitedEmailAddress" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "invitedEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomUserProfilesGuardiansListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListQueryParams = ClassroomUserProfilesGuardiansListQueryParams;
var ClassroomUserProfilesGuardiansListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListSecurityOption1, _super);
    function ClassroomUserProfilesGuardiansListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardiansListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardiansListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardiansListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListSecurityOption1 = ClassroomUserProfilesGuardiansListSecurityOption1;
var ClassroomUserProfilesGuardiansListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListSecurityOption2, _super);
    function ClassroomUserProfilesGuardiansListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardiansListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardiansListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardiansListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListSecurityOption2 = ClassroomUserProfilesGuardiansListSecurityOption2;
var ClassroomUserProfilesGuardiansListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListSecurityOption3, _super);
    function ClassroomUserProfilesGuardiansListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardiansListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardiansListSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardiansListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListSecurityOption3 = ClassroomUserProfilesGuardiansListSecurityOption3;
var ClassroomUserProfilesGuardiansListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListSecurity, _super);
    function ClassroomUserProfilesGuardiansListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardiansListSecurityOption1)
    ], ClassroomUserProfilesGuardiansListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardiansListSecurityOption2)
    ], ClassroomUserProfilesGuardiansListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardiansListSecurityOption3)
    ], ClassroomUserProfilesGuardiansListSecurity.prototype, "option3", void 0);
    return ClassroomUserProfilesGuardiansListSecurity;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListSecurity = ClassroomUserProfilesGuardiansListSecurity;
var ClassroomUserProfilesGuardiansListRequest = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListRequest, _super);
    function ClassroomUserProfilesGuardiansListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomUserProfilesGuardiansListPathParams)
    ], ClassroomUserProfilesGuardiansListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomUserProfilesGuardiansListQueryParams)
    ], ClassroomUserProfilesGuardiansListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomUserProfilesGuardiansListSecurity)
    ], ClassroomUserProfilesGuardiansListRequest.prototype, "security", void 0);
    return ClassroomUserProfilesGuardiansListRequest;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListRequest = ClassroomUserProfilesGuardiansListRequest;
var ClassroomUserProfilesGuardiansListResponse = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansListResponse, _super);
    function ClassroomUserProfilesGuardiansListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListGuardiansResponse)
    ], ClassroomUserProfilesGuardiansListResponse.prototype, "listGuardiansResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardiansListResponse.prototype, "statusCode", void 0);
    return ClassroomUserProfilesGuardiansListResponse;
}(utils_1.SpeakeasyBase));
exports.ClassroomUserProfilesGuardiansListResponse = ClassroomUserProfilesGuardiansListResponse;
