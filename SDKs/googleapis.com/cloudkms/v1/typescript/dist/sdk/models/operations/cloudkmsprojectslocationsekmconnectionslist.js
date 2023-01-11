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
exports.CloudkmsProjectsLocationsEkmConnectionsListResponse = exports.CloudkmsProjectsLocationsEkmConnectionsListRequest = exports.CloudkmsProjectsLocationsEkmConnectionsListSecurity = exports.CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2 = exports.CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1 = exports.CloudkmsProjectsLocationsEkmConnectionsListQueryParams = exports.CloudkmsProjectsLocationsEkmConnectionsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudkmsProjectsLocationsEkmConnectionsListPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsListPathParams, _super);
    function CloudkmsProjectsLocationsEkmConnectionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListPathParams.prototype, "parent", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsListPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudkmsProjectsLocationsEkmConnectionsListPathParams = CloudkmsProjectsLocationsEkmConnectionsListPathParams;
var CloudkmsProjectsLocationsEkmConnectionsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsListQueryParams, _super);
    function CloudkmsProjectsLocationsEkmConnectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudkmsProjectsLocationsEkmConnectionsListQueryParams = CloudkmsProjectsLocationsEkmConnectionsListQueryParams;
var CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1, _super);
    function CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1 = CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1;
var CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2, _super);
    function CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2 = CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2;
var CloudkmsProjectsLocationsEkmConnectionsListSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsListSecurity, _super);
    function CloudkmsProjectsLocationsEkmConnectionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1)
    ], CloudkmsProjectsLocationsEkmConnectionsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2)
    ], CloudkmsProjectsLocationsEkmConnectionsListSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsListSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudkmsProjectsLocationsEkmConnectionsListSecurity = CloudkmsProjectsLocationsEkmConnectionsListSecurity;
var CloudkmsProjectsLocationsEkmConnectionsListRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsListRequest, _super);
    function CloudkmsProjectsLocationsEkmConnectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsListPathParams)
    ], CloudkmsProjectsLocationsEkmConnectionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsListQueryParams)
    ], CloudkmsProjectsLocationsEkmConnectionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsListSecurity)
    ], CloudkmsProjectsLocationsEkmConnectionsListRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsListRequest;
}(utils_1.SpeakeasyBase));
exports.CloudkmsProjectsLocationsEkmConnectionsListRequest = CloudkmsProjectsLocationsEkmConnectionsListRequest;
var CloudkmsProjectsLocationsEkmConnectionsListResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsListResponse, _super);
    function CloudkmsProjectsLocationsEkmConnectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListEkmConnectionsResponse)
    ], CloudkmsProjectsLocationsEkmConnectionsListResponse.prototype, "listEkmConnectionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsEkmConnectionsListResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsListResponse;
}(utils_1.SpeakeasyBase));
exports.CloudkmsProjectsLocationsEkmConnectionsListResponse = CloudkmsProjectsLocationsEkmConnectionsListResponse;
