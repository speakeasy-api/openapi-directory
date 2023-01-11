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
exports.StorageNotificationsDeleteResponse = exports.StorageNotificationsDeleteRequest = exports.StorageNotificationsDeleteSecurity = exports.StorageNotificationsDeleteSecurityOption3 = exports.StorageNotificationsDeleteSecurityOption2 = exports.StorageNotificationsDeleteSecurityOption1 = exports.StorageNotificationsDeleteQueryParams = exports.StorageNotificationsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageNotificationsDeletePathParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeletePathParams, _super);
    function StorageNotificationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeletePathParams.prototype, "bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=notification" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeletePathParams.prototype, "notification", void 0);
    return StorageNotificationsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeletePathParams = StorageNotificationsDeletePathParams;
var StorageNotificationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeleteQueryParams, _super);
    function StorageNotificationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageNotificationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteQueryParams.prototype, "userProject", void 0);
    return StorageNotificationsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeleteQueryParams = StorageNotificationsDeleteQueryParams;
var StorageNotificationsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeleteSecurityOption1, _super);
    function StorageNotificationsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return StorageNotificationsDeleteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeleteSecurityOption1 = StorageNotificationsDeleteSecurityOption1;
var StorageNotificationsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeleteSecurityOption2, _super);
    function StorageNotificationsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return StorageNotificationsDeleteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeleteSecurityOption2 = StorageNotificationsDeleteSecurityOption2;
var StorageNotificationsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeleteSecurityOption3, _super);
    function StorageNotificationsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return StorageNotificationsDeleteSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeleteSecurityOption3 = StorageNotificationsDeleteSecurityOption3;
var StorageNotificationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeleteSecurity, _super);
    function StorageNotificationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsDeleteSecurityOption1)
    ], StorageNotificationsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsDeleteSecurityOption2)
    ], StorageNotificationsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsDeleteSecurityOption3)
    ], StorageNotificationsDeleteSecurity.prototype, "option3", void 0);
    return StorageNotificationsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeleteSecurity = StorageNotificationsDeleteSecurity;
var StorageNotificationsDeleteRequest = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeleteRequest, _super);
    function StorageNotificationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageNotificationsDeletePathParams)
    ], StorageNotificationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageNotificationsDeleteQueryParams)
    ], StorageNotificationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageNotificationsDeleteSecurity)
    ], StorageNotificationsDeleteRequest.prototype, "security", void 0);
    return StorageNotificationsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeleteRequest = StorageNotificationsDeleteRequest;
var StorageNotificationsDeleteResponse = /** @class */ (function (_super) {
    __extends(StorageNotificationsDeleteResponse, _super);
    function StorageNotificationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageNotificationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageNotificationsDeleteResponse.prototype, "statusCode", void 0);
    return StorageNotificationsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.StorageNotificationsDeleteResponse = StorageNotificationsDeleteResponse;
