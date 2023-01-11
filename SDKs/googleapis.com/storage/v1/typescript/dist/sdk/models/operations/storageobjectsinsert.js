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
exports.StorageObjectsInsertResponse = exports.StorageObjectsInsertRequest = exports.StorageObjectsInsertSecurity = exports.StorageObjectsInsertSecurityOption3 = exports.StorageObjectsInsertSecurityOption2 = exports.StorageObjectsInsertSecurityOption1 = exports.StorageObjectsInsertQueryParams = exports.StorageObjectsInsertProjectionEnum = exports.StorageObjectsInsertPredefinedAclEnum = exports.StorageObjectsInsertPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageObjectsInsertPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertPathParams, _super);
    function StorageObjectsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertPathParams.prototype, "bucket", void 0);
    return StorageObjectsInsertPathParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertPathParams = StorageObjectsInsertPathParams;
var StorageObjectsInsertPredefinedAclEnum;
(function (StorageObjectsInsertPredefinedAclEnum) {
    StorageObjectsInsertPredefinedAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageObjectsInsertPredefinedAclEnum["BucketOwnerFullControl"] = "bucketOwnerFullControl";
    StorageObjectsInsertPredefinedAclEnum["BucketOwnerRead"] = "bucketOwnerRead";
    StorageObjectsInsertPredefinedAclEnum["Private"] = "private";
    StorageObjectsInsertPredefinedAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageObjectsInsertPredefinedAclEnum["PublicRead"] = "publicRead";
})(StorageObjectsInsertPredefinedAclEnum = exports.StorageObjectsInsertPredefinedAclEnum || (exports.StorageObjectsInsertPredefinedAclEnum = {}));
var StorageObjectsInsertProjectionEnum;
(function (StorageObjectsInsertProjectionEnum) {
    StorageObjectsInsertProjectionEnum["Full"] = "full";
    StorageObjectsInsertProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsInsertProjectionEnum = exports.StorageObjectsInsertProjectionEnum || (exports.StorageObjectsInsertProjectionEnum = {}));
var StorageObjectsInsertQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertQueryParams, _super);
    function StorageObjectsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=contentEncoding" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "contentEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifGenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=kmsKeyName" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "kmsKeyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=predefinedAcl" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "predefinedAcl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "projection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "userProject", void 0);
    return StorageObjectsInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertQueryParams = StorageObjectsInsertQueryParams;
var StorageObjectsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurityOption1, _super);
    function StorageObjectsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsInsertSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertSecurityOption1 = StorageObjectsInsertSecurityOption1;
var StorageObjectsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurityOption2, _super);
    function StorageObjectsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsInsertSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertSecurityOption2 = StorageObjectsInsertSecurityOption2;
var StorageObjectsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurityOption3, _super);
    function StorageObjectsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsInsertSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertSecurityOption3 = StorageObjectsInsertSecurityOption3;
var StorageObjectsInsertSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurity, _super);
    function StorageObjectsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsInsertSecurityOption1)
    ], StorageObjectsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsInsertSecurityOption2)
    ], StorageObjectsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsInsertSecurityOption3)
    ], StorageObjectsInsertSecurity.prototype, "option3", void 0);
    return StorageObjectsInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertSecurity = StorageObjectsInsertSecurity;
var StorageObjectsInsertRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertRequest, _super);
    function StorageObjectsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsInsertPathParams)
    ], StorageObjectsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsInsertQueryParams)
    ], StorageObjectsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], StorageObjectsInsertRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsInsertSecurity)
    ], StorageObjectsInsertRequest.prototype, "security", void 0);
    return StorageObjectsInsertRequest;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertRequest = StorageObjectsInsertRequest;
var StorageObjectsInsertResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertResponse, _super);
    function StorageObjectsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageObjectsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ObjectT)
    ], StorageObjectsInsertResponse.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageObjectsInsertResponse.prototype, "statusCode", void 0);
    return StorageObjectsInsertResponse;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsInsertResponse = StorageObjectsInsertResponse;
