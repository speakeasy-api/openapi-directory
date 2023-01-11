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
exports.CloudidentityGroupsLookupResponse = exports.CloudidentityGroupsLookupRequest = exports.CloudidentityGroupsLookupSecurity = exports.CloudidentityGroupsLookupSecurityOption3 = exports.CloudidentityGroupsLookupSecurityOption2 = exports.CloudidentityGroupsLookupSecurityOption1 = exports.CloudidentityGroupsLookupQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudidentityGroupsLookupQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsLookupQueryParams, _super);
    function CloudidentityGroupsLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupKey.id" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "groupKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupKey.namespace" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "groupKeyNamespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsLookupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsLookupQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsLookupQueryParams = CloudidentityGroupsLookupQueryParams;
var CloudidentityGroupsLookupSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsLookupSecurityOption1, _super);
    function CloudidentityGroupsLookupSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsLookupSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsLookupSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsLookupSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsLookupSecurityOption1 = CloudidentityGroupsLookupSecurityOption1;
var CloudidentityGroupsLookupSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsLookupSecurityOption2, _super);
    function CloudidentityGroupsLookupSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsLookupSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsLookupSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsLookupSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsLookupSecurityOption2 = CloudidentityGroupsLookupSecurityOption2;
var CloudidentityGroupsLookupSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsLookupSecurityOption3, _super);
    function CloudidentityGroupsLookupSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsLookupSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsLookupSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsLookupSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsLookupSecurityOption3 = CloudidentityGroupsLookupSecurityOption3;
var CloudidentityGroupsLookupSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsLookupSecurity, _super);
    function CloudidentityGroupsLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsLookupSecurityOption1)
    ], CloudidentityGroupsLookupSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsLookupSecurityOption2)
    ], CloudidentityGroupsLookupSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsLookupSecurityOption3)
    ], CloudidentityGroupsLookupSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsLookupSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsLookupSecurity = CloudidentityGroupsLookupSecurity;
var CloudidentityGroupsLookupRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsLookupRequest, _super);
    function CloudidentityGroupsLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudidentityGroupsLookupQueryParams)
    ], CloudidentityGroupsLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudidentityGroupsLookupSecurity)
    ], CloudidentityGroupsLookupRequest.prototype, "security", void 0);
    return CloudidentityGroupsLookupRequest;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsLookupRequest = CloudidentityGroupsLookupRequest;
var CloudidentityGroupsLookupResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsLookupResponse, _super);
    function CloudidentityGroupsLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudidentityGroupsLookupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LookupGroupNameResponse)
    ], CloudidentityGroupsLookupResponse.prototype, "lookupGroupNameResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsLookupResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsLookupResponse;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsLookupResponse = CloudidentityGroupsLookupResponse;
