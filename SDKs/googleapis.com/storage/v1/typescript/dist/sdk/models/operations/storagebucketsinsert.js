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
exports.StorageBucketsInsertResponse = exports.StorageBucketsInsertRequest = exports.StorageBucketsInsertSecurity = exports.StorageBucketsInsertSecurityOption3 = exports.StorageBucketsInsertSecurityOption2 = exports.StorageBucketsInsertSecurityOption1 = exports.StorageBucketsInsertQueryParams = exports.StorageBucketsInsertProjectionEnum = exports.StorageBucketsInsertPredefinedDefaultObjectAclEnum = exports.StorageBucketsInsertPredefinedAclEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageBucketsInsertPredefinedAclEnum;
(function (StorageBucketsInsertPredefinedAclEnum) {
    StorageBucketsInsertPredefinedAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageBucketsInsertPredefinedAclEnum["Private"] = "private";
    StorageBucketsInsertPredefinedAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageBucketsInsertPredefinedAclEnum["PublicRead"] = "publicRead";
    StorageBucketsInsertPredefinedAclEnum["PublicReadWrite"] = "publicReadWrite";
})(StorageBucketsInsertPredefinedAclEnum = exports.StorageBucketsInsertPredefinedAclEnum || (exports.StorageBucketsInsertPredefinedAclEnum = {}));
var StorageBucketsInsertPredefinedDefaultObjectAclEnum;
(function (StorageBucketsInsertPredefinedDefaultObjectAclEnum) {
    StorageBucketsInsertPredefinedDefaultObjectAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageBucketsInsertPredefinedDefaultObjectAclEnum["BucketOwnerFullControl"] = "bucketOwnerFullControl";
    StorageBucketsInsertPredefinedDefaultObjectAclEnum["BucketOwnerRead"] = "bucketOwnerRead";
    StorageBucketsInsertPredefinedDefaultObjectAclEnum["Private"] = "private";
    StorageBucketsInsertPredefinedDefaultObjectAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageBucketsInsertPredefinedDefaultObjectAclEnum["PublicRead"] = "publicRead";
})(StorageBucketsInsertPredefinedDefaultObjectAclEnum = exports.StorageBucketsInsertPredefinedDefaultObjectAclEnum || (exports.StorageBucketsInsertPredefinedDefaultObjectAclEnum = {}));
var StorageBucketsInsertProjectionEnum;
(function (StorageBucketsInsertProjectionEnum) {
    StorageBucketsInsertProjectionEnum["Full"] = "full";
    StorageBucketsInsertProjectionEnum["NoAcl"] = "noAcl";
})(StorageBucketsInsertProjectionEnum = exports.StorageBucketsInsertProjectionEnum || (exports.StorageBucketsInsertProjectionEnum = {}));
var StorageBucketsInsertQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsInsertQueryParams, _super);
    function StorageBucketsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=predefinedAcl" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "predefinedAcl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=predefinedDefaultObjectAcl" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "predefinedDefaultObjectAcl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "projection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsInsertQueryParams.prototype, "userProject", void 0);
    return StorageBucketsInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsInsertQueryParams = StorageBucketsInsertQueryParams;
var StorageBucketsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsInsertSecurityOption1, _super);
    function StorageBucketsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsInsertSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsInsertSecurityOption1 = StorageBucketsInsertSecurityOption1;
var StorageBucketsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsInsertSecurityOption2, _super);
    function StorageBucketsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsInsertSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsInsertSecurityOption2 = StorageBucketsInsertSecurityOption2;
var StorageBucketsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageBucketsInsertSecurityOption3, _super);
    function StorageBucketsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return StorageBucketsInsertSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsInsertSecurityOption3 = StorageBucketsInsertSecurityOption3;
var StorageBucketsInsertSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsInsertSecurity, _super);
    function StorageBucketsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsInsertSecurityOption1)
    ], StorageBucketsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsInsertSecurityOption2)
    ], StorageBucketsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsInsertSecurityOption3)
    ], StorageBucketsInsertSecurity.prototype, "option3", void 0);
    return StorageBucketsInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsInsertSecurity = StorageBucketsInsertSecurity;
var StorageBucketsInsertRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsInsertRequest, _super);
    function StorageBucketsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsInsertQueryParams)
    ], StorageBucketsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsInsertRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsInsertSecurity)
    ], StorageBucketsInsertRequest.prototype, "security", void 0);
    return StorageBucketsInsertRequest;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsInsertRequest = StorageBucketsInsertRequest;
var StorageBucketsInsertResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsInsertResponse, _super);
    function StorageBucketsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsInsertResponse.prototype, "bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageBucketsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageBucketsInsertResponse.prototype, "statusCode", void 0);
    return StorageBucketsInsertResponse;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsInsertResponse = StorageBucketsInsertResponse;
