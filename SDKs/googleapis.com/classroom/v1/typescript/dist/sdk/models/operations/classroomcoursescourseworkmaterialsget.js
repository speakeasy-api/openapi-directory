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
exports.ClassroomCoursesCourseWorkMaterialsGetResponse = exports.ClassroomCoursesCourseWorkMaterialsGetRequest = exports.ClassroomCoursesCourseWorkMaterialsGetSecurity = exports.ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 = exports.ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 = exports.ClassroomCoursesCourseWorkMaterialsGetQueryParams = exports.ClassroomCoursesCourseWorkMaterialsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClassroomCoursesCourseWorkMaterialsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetPathParams, _super);
    function ClassroomCoursesCourseWorkMaterialsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetPathParams.prototype, "courseId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkMaterialsGetPathParams = ClassroomCoursesCourseWorkMaterialsGetPathParams;
var ClassroomCoursesCourseWorkMaterialsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetQueryParams, _super);
    function ClassroomCoursesCourseWorkMaterialsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkMaterialsGetQueryParams = ClassroomCoursesCourseWorkMaterialsGetQueryParams;
var ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetSecurityOption1, _super);
    function ClassroomCoursesCourseWorkMaterialsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 = ClassroomCoursesCourseWorkMaterialsGetSecurityOption1;
var ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetSecurityOption2, _super);
    function ClassroomCoursesCourseWorkMaterialsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 = ClassroomCoursesCourseWorkMaterialsGetSecurityOption2;
var ClassroomCoursesCourseWorkMaterialsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetSecurity, _super);
    function ClassroomCoursesCourseWorkMaterialsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetSecurityOption1)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetSecurityOption2)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurity.prototype, "option2", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkMaterialsGetSecurity = ClassroomCoursesCourseWorkMaterialsGetSecurity;
var ClassroomCoursesCourseWorkMaterialsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetRequest, _super);
    function ClassroomCoursesCourseWorkMaterialsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetPathParams)
    ], ClassroomCoursesCourseWorkMaterialsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetQueryParams)
    ], ClassroomCoursesCourseWorkMaterialsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetSecurity)
    ], ClassroomCoursesCourseWorkMaterialsGetRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetRequest;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkMaterialsGetRequest = ClassroomCoursesCourseWorkMaterialsGetRequest;
var ClassroomCoursesCourseWorkMaterialsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetResponse, _super);
    function ClassroomCoursesCourseWorkMaterialsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CourseWorkMaterial)
    ], ClassroomCoursesCourseWorkMaterialsGetResponse.prototype, "courseWorkMaterial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkMaterialsGetResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetResponse;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkMaterialsGetResponse = ClassroomCoursesCourseWorkMaterialsGetResponse;
