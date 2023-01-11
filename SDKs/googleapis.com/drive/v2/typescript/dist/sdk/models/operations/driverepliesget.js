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
exports.DriveRepliesGetResponse = exports.DriveRepliesGetRequest = exports.DriveRepliesGetSecurity = exports.DriveRepliesGetSecurityOption3 = exports.DriveRepliesGetSecurityOption2 = exports.DriveRepliesGetSecurityOption1 = exports.DriveRepliesGetQueryParams = exports.DriveRepliesGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveRepliesGetPathParams = /** @class */ (function (_super) {
    __extends(DriveRepliesGetPathParams, _super);
    function DriveRepliesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveRepliesGetPathParams.prototype, "commentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRepliesGetPathParams.prototype, "fileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=replyId" }),
        __metadata("design:type", String)
    ], DriveRepliesGetPathParams.prototype, "replyId", void 0);
    return DriveRepliesGetPathParams;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetPathParams = DriveRepliesGetPathParams;
var DriveRepliesGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveRepliesGetQueryParams, _super);
    function DriveRepliesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRepliesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRepliesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], DriveRepliesGetQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRepliesGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRepliesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRepliesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRepliesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRepliesGetQueryParams.prototype, "userIp", void 0);
    return DriveRepliesGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetQueryParams = DriveRepliesGetQueryParams;
var DriveRepliesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRepliesGetSecurityOption1, _super);
    function DriveRepliesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRepliesGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetSecurityOption1 = DriveRepliesGetSecurityOption1;
var DriveRepliesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRepliesGetSecurityOption2, _super);
    function DriveRepliesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRepliesGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetSecurityOption2 = DriveRepliesGetSecurityOption2;
var DriveRepliesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveRepliesGetSecurityOption3, _super);
    function DriveRepliesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveRepliesGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetSecurityOption3 = DriveRepliesGetSecurityOption3;
var DriveRepliesGetSecurity = /** @class */ (function (_super) {
    __extends(DriveRepliesGetSecurity, _super);
    function DriveRepliesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesGetSecurityOption1)
    ], DriveRepliesGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesGetSecurityOption2)
    ], DriveRepliesGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesGetSecurityOption3)
    ], DriveRepliesGetSecurity.prototype, "option3", void 0);
    return DriveRepliesGetSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetSecurity = DriveRepliesGetSecurity;
var DriveRepliesGetRequest = /** @class */ (function (_super) {
    __extends(DriveRepliesGetRequest, _super);
    function DriveRepliesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveRepliesGetPathParams)
    ], DriveRepliesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveRepliesGetQueryParams)
    ], DriveRepliesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveRepliesGetSecurity)
    ], DriveRepliesGetRequest.prototype, "security", void 0);
    return DriveRepliesGetRequest;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetRequest = DriveRepliesGetRequest;
var DriveRepliesGetResponse = /** @class */ (function (_super) {
    __extends(DriveRepliesGetResponse, _super);
    function DriveRepliesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CommentReply)
    ], DriveRepliesGetResponse.prototype, "commentReply", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveRepliesGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveRepliesGetResponse.prototype, "statusCode", void 0);
    return DriveRepliesGetResponse;
}(utils_1.SpeakeasyBase));
exports.DriveRepliesGetResponse = DriveRepliesGetResponse;
