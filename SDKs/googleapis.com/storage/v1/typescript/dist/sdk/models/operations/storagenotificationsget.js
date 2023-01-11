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
exports.StorageNotificationsGetResponse = exports.StorageNotificationsGetRequest = exports.StorageNotificationsGetSecurity = exports.StorageNotificationsGetSecurityOption5 = exports.StorageNotificationsGetSecurityOption4 = exports.StorageNotificationsGetSecurityOption3 = exports.StorageNotificationsGetSecurityOption2 = exports.StorageNotificationsGetSecurityOption1 = exports.StorageNotificationsGetQueryParams = exports.StorageNotificationsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageNotificationsGetPathParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetPathParams, _super);
    function StorageNotificationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetPathParams.prototype, "bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=notification" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetPathParams.prototype, "notification", void 0);
    return StorageNotificationsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetPathParams = StorageNotificationsGetPathParams;
var StorageNotificationsGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetQueryParams, _super);
    function StorageNotificationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageNotificationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "userProject", void 0);
    return StorageNotificationsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetQueryParams = StorageNotificationsGetQueryParams;
var StorageNotificationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption1, _super);
    function StorageNotificationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetSecurityOption1 = StorageNotificationsGetSecurityOption1;
var StorageNotificationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption2, _super);
    function StorageNotificationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetSecurityOption2 = StorageNotificationsGetSecurityOption2;
var StorageNotificationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption3, _super);
    function StorageNotificationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetSecurityOption3 = StorageNotificationsGetSecurityOption3;
var StorageNotificationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption4, _super);
    function StorageNotificationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetSecurityOption4 = StorageNotificationsGetSecurityOption4;
var StorageNotificationsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption5, _super);
    function StorageNotificationsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption5.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetSecurityOption5 = StorageNotificationsGetSecurityOption5;
var StorageNotificationsGetSecurity = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurity, _super);
    function StorageNotificationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption1)
    ], StorageNotificationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption2)
    ], StorageNotificationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption3)
    ], StorageNotificationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption4)
    ], StorageNotificationsGetSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption5)
    ], StorageNotificationsGetSecurity.prototype, "option5", void 0);
    return StorageNotificationsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetSecurity = StorageNotificationsGetSecurity;
var StorageNotificationsGetRequest = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetRequest, _super);
    function StorageNotificationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageNotificationsGetPathParams)
    ], StorageNotificationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageNotificationsGetQueryParams)
    ], StorageNotificationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageNotificationsGetSecurity)
    ], StorageNotificationsGetRequest.prototype, "security", void 0);
    return StorageNotificationsGetRequest;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetRequest = StorageNotificationsGetRequest;
var StorageNotificationsGetResponse = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetResponse, _super);
    function StorageNotificationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageNotificationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Notification)
    ], StorageNotificationsGetResponse.prototype, "notification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageNotificationsGetResponse.prototype, "statusCode", void 0);
    return StorageNotificationsGetResponse;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsGetResponse = StorageNotificationsGetResponse;
