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
exports.StorageBucketsPatchResponse = exports.StorageBucketsPatchRequest = exports.StorageBucketsPatchSecurity = exports.StorageBucketsPatchSecurityOption2 = exports.StorageBucketsPatchSecurityOption1 = exports.StorageBucketsPatchQueryParams = exports.StorageBucketsPatchProjectionEnum = exports.StorageBucketsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageBucketsPatchPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchPathParams, _super);
    function StorageBucketsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchPathParams.prototype, "bucket", void 0);
    return StorageBucketsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsPatchPathParams = StorageBucketsPatchPathParams;
var StorageBucketsPatchProjectionEnum;
(function (StorageBucketsPatchProjectionEnum) {
    StorageBucketsPatchProjectionEnum["Full"] = "full";
    StorageBucketsPatchProjectionEnum["NoAcl"] = "noAcl";
})(StorageBucketsPatchProjectionEnum = exports.StorageBucketsPatchProjectionEnum || (exports.StorageBucketsPatchProjectionEnum = {}));
var StorageBucketsPatchQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchQueryParams, _super);
    function StorageBucketsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "projection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "userIp", void 0);
    return StorageBucketsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsPatchQueryParams = StorageBucketsPatchQueryParams;
var StorageBucketsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchSecurityOption1, _super);
    function StorageBucketsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsPatchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsPatchSecurityOption1 = StorageBucketsPatchSecurityOption1;
var StorageBucketsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchSecurityOption2, _super);
    function StorageBucketsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsPatchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsPatchSecurityOption2 = StorageBucketsPatchSecurityOption2;
var StorageBucketsPatchSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchSecurity, _super);
    function StorageBucketsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsPatchSecurityOption1)
    ], StorageBucketsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsPatchSecurityOption2)
    ], StorageBucketsPatchSecurity.prototype, "option2", void 0);
    return StorageBucketsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsPatchSecurity = StorageBucketsPatchSecurity;
var StorageBucketsPatchRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchRequest, _super);
    function StorageBucketsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsPatchPathParams)
    ], StorageBucketsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsPatchQueryParams)
    ], StorageBucketsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsPatchSecurity)
    ], StorageBucketsPatchRequest.prototype, "security", void 0);
    return StorageBucketsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsPatchRequest = StorageBucketsPatchRequest;
var StorageBucketsPatchResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchResponse, _super);
    function StorageBucketsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsPatchResponse.prototype, "bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageBucketsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageBucketsPatchResponse.prototype, "statusCode", void 0);
    return StorageBucketsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsPatchResponse = StorageBucketsPatchResponse;
