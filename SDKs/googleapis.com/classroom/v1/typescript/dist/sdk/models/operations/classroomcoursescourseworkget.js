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
exports.ClassroomCoursesCourseWorkGetResponse = exports.ClassroomCoursesCourseWorkGetRequest = exports.ClassroomCoursesCourseWorkGetSecurity = exports.ClassroomCoursesCourseWorkGetSecurityOption4 = exports.ClassroomCoursesCourseWorkGetSecurityOption3 = exports.ClassroomCoursesCourseWorkGetSecurityOption2 = exports.ClassroomCoursesCourseWorkGetSecurityOption1 = exports.ClassroomCoursesCourseWorkGetQueryParams = exports.ClassroomCoursesCourseWorkGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClassroomCoursesCourseWorkGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetPathParams, _super);
    function ClassroomCoursesCourseWorkGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetPathParams.prototype, "courseId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkGetPathParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetPathParams = ClassroomCoursesCourseWorkGetPathParams;
var ClassroomCoursesCourseWorkGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetQueryParams, _super);
    function ClassroomCoursesCourseWorkGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetQueryParams = ClassroomCoursesCourseWorkGetQueryParams;
var ClassroomCoursesCourseWorkGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption1, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetSecurityOption1 = ClassroomCoursesCourseWorkGetSecurityOption1;
var ClassroomCoursesCourseWorkGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption2, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetSecurityOption2 = ClassroomCoursesCourseWorkGetSecurityOption2;
var ClassroomCoursesCourseWorkGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption3, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetSecurityOption3 = ClassroomCoursesCourseWorkGetSecurityOption3;
var ClassroomCoursesCourseWorkGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption4, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetSecurityOption4 = ClassroomCoursesCourseWorkGetSecurityOption4;
var ClassroomCoursesCourseWorkGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurity, _super);
    function ClassroomCoursesCourseWorkGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption1)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption2)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption3)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption4)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option4", void 0);
    return ClassroomCoursesCourseWorkGetSecurity;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetSecurity = ClassroomCoursesCourseWorkGetSecurity;
var ClassroomCoursesCourseWorkGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetRequest, _super);
    function ClassroomCoursesCourseWorkGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesCourseWorkGetPathParams)
    ], ClassroomCoursesCourseWorkGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesCourseWorkGetQueryParams)
    ], ClassroomCoursesCourseWorkGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurity)
    ], ClassroomCoursesCourseWorkGetRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkGetRequest;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetRequest = ClassroomCoursesCourseWorkGetRequest;
var ClassroomCoursesCourseWorkGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetResponse, _super);
    function ClassroomCoursesCourseWorkGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CourseWork)
    ], ClassroomCoursesCourseWorkGetResponse.prototype, "courseWork", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkGetResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkGetResponse;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesCourseWorkGetResponse = ClassroomCoursesCourseWorkGetResponse;
