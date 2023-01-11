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
exports.StorageObjectsGetIamPolicyResponse = exports.StorageObjectsGetIamPolicyRequest = exports.StorageObjectsGetIamPolicySecurity = exports.StorageObjectsGetIamPolicySecurityOption5 = exports.StorageObjectsGetIamPolicySecurityOption4 = exports.StorageObjectsGetIamPolicySecurityOption3 = exports.StorageObjectsGetIamPolicySecurityOption2 = exports.StorageObjectsGetIamPolicySecurityOption1 = exports.StorageObjectsGetIamPolicyQueryParams = exports.StorageObjectsGetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageObjectsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicyPathParams, _super);
    function StorageObjectsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyPathParams.prototype, "bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyPathParams.prototype, "object", void 0);
    return StorageObjectsGetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicyPathParams = StorageObjectsGetIamPolicyPathParams;
var StorageObjectsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicyQueryParams, _super);
    function StorageObjectsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "generation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyQueryParams.prototype, "userProject", void 0);
    return StorageObjectsGetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicyQueryParams = StorageObjectsGetIamPolicyQueryParams;
var StorageObjectsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicySecurityOption1, _super);
    function StorageObjectsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsGetIamPolicySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicySecurityOption1 = StorageObjectsGetIamPolicySecurityOption1;
var StorageObjectsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicySecurityOption2, _super);
    function StorageObjectsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsGetIamPolicySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicySecurityOption2 = StorageObjectsGetIamPolicySecurityOption2;
var StorageObjectsGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicySecurityOption3, _super);
    function StorageObjectsGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsGetIamPolicySecurityOption3;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicySecurityOption3 = StorageObjectsGetIamPolicySecurityOption3;
var StorageObjectsGetIamPolicySecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicySecurityOption4, _super);
    function StorageObjectsGetIamPolicySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetIamPolicySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetIamPolicySecurityOption4.prototype, "oauth2c", void 0);
    return StorageObjectsGetIamPolicySecurityOption4;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicySecurityOption4 = StorageObjectsGetIamPolicySecurityOption4;
var StorageObjectsGetIamPolicySecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicySecurityOption5, _super);
    function StorageObjectsGetIamPolicySecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetIamPolicySecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetIamPolicySecurityOption5.prototype, "oauth2c", void 0);
    return StorageObjectsGetIamPolicySecurityOption5;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicySecurityOption5 = StorageObjectsGetIamPolicySecurityOption5;
var StorageObjectsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicySecurity, _super);
    function StorageObjectsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetIamPolicySecurityOption1)
    ], StorageObjectsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetIamPolicySecurityOption2)
    ], StorageObjectsGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetIamPolicySecurityOption3)
    ], StorageObjectsGetIamPolicySecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetIamPolicySecurityOption4)
    ], StorageObjectsGetIamPolicySecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetIamPolicySecurityOption5)
    ], StorageObjectsGetIamPolicySecurity.prototype, "option5", void 0);
    return StorageObjectsGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicySecurity = StorageObjectsGetIamPolicySecurity;
var StorageObjectsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicyRequest, _super);
    function StorageObjectsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsGetIamPolicyPathParams)
    ], StorageObjectsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsGetIamPolicyQueryParams)
    ], StorageObjectsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsGetIamPolicySecurity)
    ], StorageObjectsGetIamPolicyRequest.prototype, "security", void 0);
    return StorageObjectsGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicyRequest = StorageObjectsGetIamPolicyRequest;
var StorageObjectsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsGetIamPolicyResponse, _super);
    function StorageObjectsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageObjectsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], StorageObjectsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageObjectsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return StorageObjectsGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsGetIamPolicyResponse = StorageObjectsGetIamPolicyResponse;
