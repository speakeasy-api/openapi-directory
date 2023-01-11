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
exports.StorageBucketAccessControlsPatchResponse = exports.StorageBucketAccessControlsPatchRequest = exports.StorageBucketAccessControlsPatchSecurity = exports.StorageBucketAccessControlsPatchSecurityOption2 = exports.StorageBucketAccessControlsPatchSecurityOption1 = exports.StorageBucketAccessControlsPatchQueryParams = exports.StorageBucketAccessControlsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageBucketAccessControlsPatchPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsPatchPathParams, _super);
    function StorageBucketAccessControlsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchPathParams.prototype, "bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchPathParams.prototype, "entity", void 0);
    return StorageBucketAccessControlsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.StorageBucketAccessControlsPatchPathParams = StorageBucketAccessControlsPatchPathParams;
var StorageBucketAccessControlsPatchQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsPatchQueryParams, _super);
    function StorageBucketAccessControlsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchQueryParams.prototype, "userProject", void 0);
    return StorageBucketAccessControlsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageBucketAccessControlsPatchQueryParams = StorageBucketAccessControlsPatchQueryParams;
var StorageBucketAccessControlsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsPatchSecurityOption1, _super);
    function StorageBucketAccessControlsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketAccessControlsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketAccessControlsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketAccessControlsPatchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageBucketAccessControlsPatchSecurityOption1 = StorageBucketAccessControlsPatchSecurityOption1;
var StorageBucketAccessControlsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsPatchSecurityOption2, _super);
    function StorageBucketAccessControlsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketAccessControlsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketAccessControlsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketAccessControlsPatchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageBucketAccessControlsPatchSecurityOption2 = StorageBucketAccessControlsPatchSecurityOption2;
var StorageBucketAccessControlsPatchSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsPatchSecurity, _super);
    function StorageBucketAccessControlsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketAccessControlsPatchSecurityOption1)
    ], StorageBucketAccessControlsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketAccessControlsPatchSecurityOption2)
    ], StorageBucketAccessControlsPatchSecurity.prototype, "option2", void 0);
    return StorageBucketAccessControlsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageBucketAccessControlsPatchSecurity = StorageBucketAccessControlsPatchSecurity;
var StorageBucketAccessControlsPatchRequest = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsPatchRequest, _super);
    function StorageBucketAccessControlsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketAccessControlsPatchPathParams)
    ], StorageBucketAccessControlsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketAccessControlsPatchQueryParams)
    ], StorageBucketAccessControlsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BucketAccessControl)
    ], StorageBucketAccessControlsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketAccessControlsPatchSecurity)
    ], StorageBucketAccessControlsPatchRequest.prototype, "security", void 0);
    return StorageBucketAccessControlsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.StorageBucketAccessControlsPatchRequest = StorageBucketAccessControlsPatchRequest;
var StorageBucketAccessControlsPatchResponse = /** @class */ (function (_super) {
    __extends(StorageBucketAccessControlsPatchResponse, _super);
    function StorageBucketAccessControlsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BucketAccessControl)
    ], StorageBucketAccessControlsPatchResponse.prototype, "bucketAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageBucketAccessControlsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageBucketAccessControlsPatchResponse.prototype, "statusCode", void 0);
    return StorageBucketAccessControlsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.StorageBucketAccessControlsPatchResponse = StorageBucketAccessControlsPatchResponse;
