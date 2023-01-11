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
exports.StorageObjectsRewriteResponse = exports.StorageObjectsRewriteRequest = exports.StorageObjectsRewriteSecurity = exports.StorageObjectsRewriteSecurityOption3 = exports.StorageObjectsRewriteSecurityOption2 = exports.StorageObjectsRewriteSecurityOption1 = exports.StorageObjectsRewriteQueryParams = exports.StorageObjectsRewriteProjectionEnum = exports.StorageObjectsRewriteDestinationPredefinedAclEnum = exports.StorageObjectsRewritePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageObjectsRewritePathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsRewritePathParams, _super);
    function StorageObjectsRewritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destinationBucket" }),
        __metadata("design:type", String)
    ], StorageObjectsRewritePathParams.prototype, "destinationBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destinationObject" }),
        __metadata("design:type", String)
    ], StorageObjectsRewritePathParams.prototype, "destinationObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sourceBucket" }),
        __metadata("design:type", String)
    ], StorageObjectsRewritePathParams.prototype, "sourceBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sourceObject" }),
        __metadata("design:type", String)
    ], StorageObjectsRewritePathParams.prototype, "sourceObject", void 0);
    return StorageObjectsRewritePathParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewritePathParams = StorageObjectsRewritePathParams;
var StorageObjectsRewriteDestinationPredefinedAclEnum;
(function (StorageObjectsRewriteDestinationPredefinedAclEnum) {
    StorageObjectsRewriteDestinationPredefinedAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageObjectsRewriteDestinationPredefinedAclEnum["BucketOwnerFullControl"] = "bucketOwnerFullControl";
    StorageObjectsRewriteDestinationPredefinedAclEnum["BucketOwnerRead"] = "bucketOwnerRead";
    StorageObjectsRewriteDestinationPredefinedAclEnum["Private"] = "private";
    StorageObjectsRewriteDestinationPredefinedAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageObjectsRewriteDestinationPredefinedAclEnum["PublicRead"] = "publicRead";
})(StorageObjectsRewriteDestinationPredefinedAclEnum = exports.StorageObjectsRewriteDestinationPredefinedAclEnum || (exports.StorageObjectsRewriteDestinationPredefinedAclEnum = {}));
var StorageObjectsRewriteProjectionEnum;
(function (StorageObjectsRewriteProjectionEnum) {
    StorageObjectsRewriteProjectionEnum["Full"] = "full";
    StorageObjectsRewriteProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsRewriteProjectionEnum = exports.StorageObjectsRewriteProjectionEnum || (exports.StorageObjectsRewriteProjectionEnum = {}));
var StorageObjectsRewriteQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsRewriteQueryParams, _super);
    function StorageObjectsRewriteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destinationKmsKeyName" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "destinationKmsKeyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destinationPredefinedAcl" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "destinationPredefinedAcl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifGenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifSourceGenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifSourceGenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifSourceMetagenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "ifSourceMetagenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxBytesRewrittenPerCall" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "maxBytesRewrittenPerCall", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsRewriteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "projection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rewriteToken" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "rewriteToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceGeneration" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "sourceGeneration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsRewriteQueryParams.prototype, "userProject", void 0);
    return StorageObjectsRewriteQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewriteQueryParams = StorageObjectsRewriteQueryParams;
var StorageObjectsRewriteSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsRewriteSecurityOption1, _super);
    function StorageObjectsRewriteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsRewriteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsRewriteSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsRewriteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewriteSecurityOption1 = StorageObjectsRewriteSecurityOption1;
var StorageObjectsRewriteSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsRewriteSecurityOption2, _super);
    function StorageObjectsRewriteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsRewriteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsRewriteSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsRewriteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewriteSecurityOption2 = StorageObjectsRewriteSecurityOption2;
var StorageObjectsRewriteSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsRewriteSecurityOption3, _super);
    function StorageObjectsRewriteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsRewriteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsRewriteSecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsRewriteSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewriteSecurityOption3 = StorageObjectsRewriteSecurityOption3;
var StorageObjectsRewriteSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsRewriteSecurity, _super);
    function StorageObjectsRewriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsRewriteSecurityOption1)
    ], StorageObjectsRewriteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsRewriteSecurityOption2)
    ], StorageObjectsRewriteSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsRewriteSecurityOption3)
    ], StorageObjectsRewriteSecurity.prototype, "option3", void 0);
    return StorageObjectsRewriteSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewriteSecurity = StorageObjectsRewriteSecurity;
var StorageObjectsRewriteRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsRewriteRequest, _super);
    function StorageObjectsRewriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsRewritePathParams)
    ], StorageObjectsRewriteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsRewriteQueryParams)
    ], StorageObjectsRewriteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectT)
    ], StorageObjectsRewriteRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsRewriteSecurity)
    ], StorageObjectsRewriteRequest.prototype, "security", void 0);
    return StorageObjectsRewriteRequest;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewriteRequest = StorageObjectsRewriteRequest;
var StorageObjectsRewriteResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsRewriteResponse, _super);
    function StorageObjectsRewriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageObjectsRewriteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RewriteResponse)
    ], StorageObjectsRewriteResponse.prototype, "rewriteResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageObjectsRewriteResponse.prototype, "statusCode", void 0);
    return StorageObjectsRewriteResponse;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsRewriteResponse = StorageObjectsRewriteResponse;
