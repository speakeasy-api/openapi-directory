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
exports.StorageBucketsSetIamPolicyResponse = exports.StorageBucketsSetIamPolicyRequest = exports.StorageBucketsSetIamPolicySecurity = exports.StorageBucketsSetIamPolicySecurityOption2 = exports.StorageBucketsSetIamPolicySecurityOption1 = exports.StorageBucketsSetIamPolicyQueryParams = exports.StorageBucketsSetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageBucketsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyPathParams, _super);
    function StorageBucketsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyPathParams.prototype, "bucket", void 0);
    return StorageBucketsSetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsSetIamPolicyPathParams = StorageBucketsSetIamPolicyPathParams;
var StorageBucketsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyQueryParams, _super);
    function StorageBucketsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "userProject", void 0);
    return StorageBucketsSetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsSetIamPolicyQueryParams = StorageBucketsSetIamPolicyQueryParams;
var StorageBucketsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicySecurityOption1, _super);
    function StorageBucketsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsSetIamPolicySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsSetIamPolicySecurityOption1 = StorageBucketsSetIamPolicySecurityOption1;
var StorageBucketsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicySecurityOption2, _super);
    function StorageBucketsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsSetIamPolicySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsSetIamPolicySecurityOption2 = StorageBucketsSetIamPolicySecurityOption2;
var StorageBucketsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicySecurity, _super);
    function StorageBucketsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsSetIamPolicySecurityOption1)
    ], StorageBucketsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsSetIamPolicySecurityOption2)
    ], StorageBucketsSetIamPolicySecurity.prototype, "option2", void 0);
    return StorageBucketsSetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsSetIamPolicySecurity = StorageBucketsSetIamPolicySecurity;
var StorageBucketsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyRequest, _super);
    function StorageBucketsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsSetIamPolicyPathParams)
    ], StorageBucketsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsSetIamPolicyQueryParams)
    ], StorageBucketsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Policy)
    ], StorageBucketsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageBucketsSetIamPolicySecurity)
    ], StorageBucketsSetIamPolicyRequest.prototype, "security", void 0);
    return StorageBucketsSetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsSetIamPolicyRequest = StorageBucketsSetIamPolicyRequest;
var StorageBucketsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyResponse, _super);
    function StorageBucketsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], StorageBucketsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageBucketsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return StorageBucketsSetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.StorageBucketsSetIamPolicyResponse = StorageBucketsSetIamPolicyResponse;
