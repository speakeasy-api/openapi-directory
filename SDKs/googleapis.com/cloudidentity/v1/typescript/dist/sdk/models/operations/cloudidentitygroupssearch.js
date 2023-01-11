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
exports.CloudidentityGroupsSearchResponse = exports.CloudidentityGroupsSearchRequest = exports.CloudidentityGroupsSearchSecurity = exports.CloudidentityGroupsSearchSecurityOption3 = exports.CloudidentityGroupsSearchSecurityOption2 = exports.CloudidentityGroupsSearchSecurityOption1 = exports.CloudidentityGroupsSearchQueryParams = exports.CloudidentityGroupsSearchViewEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudidentityGroupsSearchViewEnum;
(function (CloudidentityGroupsSearchViewEnum) {
    CloudidentityGroupsSearchViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    CloudidentityGroupsSearchViewEnum["Basic"] = "BASIC";
    CloudidentityGroupsSearchViewEnum["Full"] = "FULL";
})(CloudidentityGroupsSearchViewEnum = exports.CloudidentityGroupsSearchViewEnum || (exports.CloudidentityGroupsSearchViewEnum = {}));
var CloudidentityGroupsSearchQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchQueryParams, _super);
    function CloudidentityGroupsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityGroupsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "view", void 0);
    return CloudidentityGroupsSearchQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsSearchQueryParams = CloudidentityGroupsSearchQueryParams;
var CloudidentityGroupsSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurityOption1, _super);
    function CloudidentityGroupsSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsSearchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsSearchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsSearchSecurityOption1 = CloudidentityGroupsSearchSecurityOption1;
var CloudidentityGroupsSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurityOption2, _super);
    function CloudidentityGroupsSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsSearchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsSearchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsSearchSecurityOption2 = CloudidentityGroupsSearchSecurityOption2;
var CloudidentityGroupsSearchSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurityOption3, _super);
    function CloudidentityGroupsSearchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsSearchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsSearchSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsSearchSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsSearchSecurityOption3 = CloudidentityGroupsSearchSecurityOption3;
var CloudidentityGroupsSearchSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurity, _super);
    function CloudidentityGroupsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsSearchSecurityOption1)
    ], CloudidentityGroupsSearchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsSearchSecurityOption2)
    ], CloudidentityGroupsSearchSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsSearchSecurityOption3)
    ], CloudidentityGroupsSearchSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsSearchSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsSearchSecurity = CloudidentityGroupsSearchSecurity;
var CloudidentityGroupsSearchRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchRequest, _super);
    function CloudidentityGroupsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudidentityGroupsSearchQueryParams)
    ], CloudidentityGroupsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudidentityGroupsSearchSecurity)
    ], CloudidentityGroupsSearchRequest.prototype, "security", void 0);
    return CloudidentityGroupsSearchRequest;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsSearchRequest = CloudidentityGroupsSearchRequest;
var CloudidentityGroupsSearchResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchResponse, _super);
    function CloudidentityGroupsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SearchGroupsResponse)
    ], CloudidentityGroupsSearchResponse.prototype, "searchGroupsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsSearchResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsSearchResponse;
}(utils_1.SpeakeasyBase));
exports.CloudidentityGroupsSearchResponse = CloudidentityGroupsSearchResponse;
