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
exports.ClassroomCoursesAnnouncementsPatchResponse = exports.ClassroomCoursesAnnouncementsPatchRequest = exports.ClassroomCoursesAnnouncementsPatchSecurity = exports.ClassroomCoursesAnnouncementsPatchQueryParams = exports.ClassroomCoursesAnnouncementsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClassroomCoursesAnnouncementsPatchPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsPatchPathParams, _super);
    function ClassroomCoursesAnnouncementsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchPathParams.prototype, "courseId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchPathParams.prototype, "id", void 0);
    return ClassroomCoursesAnnouncementsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesAnnouncementsPatchPathParams = ClassroomCoursesAnnouncementsPatchPathParams;
var ClassroomCoursesAnnouncementsPatchQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsPatchQueryParams, _super);
    function ClassroomCoursesAnnouncementsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesAnnouncementsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesAnnouncementsPatchQueryParams = ClassroomCoursesAnnouncementsPatchQueryParams;
var ClassroomCoursesAnnouncementsPatchSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsPatchSecurity, _super);
    function ClassroomCoursesAnnouncementsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAnnouncementsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAnnouncementsPatchSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesAnnouncementsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesAnnouncementsPatchSecurity = ClassroomCoursesAnnouncementsPatchSecurity;
var ClassroomCoursesAnnouncementsPatchRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsPatchRequest, _super);
    function ClassroomCoursesAnnouncementsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesAnnouncementsPatchPathParams)
    ], ClassroomCoursesAnnouncementsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesAnnouncementsPatchQueryParams)
    ], ClassroomCoursesAnnouncementsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Announcement)
    ], ClassroomCoursesAnnouncementsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassroomCoursesAnnouncementsPatchSecurity)
    ], ClassroomCoursesAnnouncementsPatchRequest.prototype, "security", void 0);
    return ClassroomCoursesAnnouncementsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesAnnouncementsPatchRequest = ClassroomCoursesAnnouncementsPatchRequest;
var ClassroomCoursesAnnouncementsPatchResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsPatchResponse, _super);
    function ClassroomCoursesAnnouncementsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Announcement)
    ], ClassroomCoursesAnnouncementsPatchResponse.prototype, "announcement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClassroomCoursesAnnouncementsPatchResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesAnnouncementsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.ClassroomCoursesAnnouncementsPatchResponse = ClassroomCoursesAnnouncementsPatchResponse;
