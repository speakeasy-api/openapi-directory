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
exports.CloudchannelAccountsChannelPartnerLinksListResponse = exports.CloudchannelAccountsChannelPartnerLinksListRequest = exports.CloudchannelAccountsChannelPartnerLinksListSecurity = exports.CloudchannelAccountsChannelPartnerLinksListQueryParams = exports.CloudchannelAccountsChannelPartnerLinksListViewEnum = exports.CloudchannelAccountsChannelPartnerLinksListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudchannelAccountsChannelPartnerLinksListPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListPathParams, _super);
    function CloudchannelAccountsChannelPartnerLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsChannelPartnerLinksListPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsChannelPartnerLinksListPathParams = CloudchannelAccountsChannelPartnerLinksListPathParams;
var CloudchannelAccountsChannelPartnerLinksListViewEnum;
(function (CloudchannelAccountsChannelPartnerLinksListViewEnum) {
    CloudchannelAccountsChannelPartnerLinksListViewEnum["Unspecified"] = "UNSPECIFIED";
    CloudchannelAccountsChannelPartnerLinksListViewEnum["Basic"] = "BASIC";
    CloudchannelAccountsChannelPartnerLinksListViewEnum["Full"] = "FULL";
})(CloudchannelAccountsChannelPartnerLinksListViewEnum = exports.CloudchannelAccountsChannelPartnerLinksListViewEnum || (exports.CloudchannelAccountsChannelPartnerLinksListViewEnum = {}));
var CloudchannelAccountsChannelPartnerLinksListQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListQueryParams, _super);
    function CloudchannelAccountsChannelPartnerLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "view", void 0);
    return CloudchannelAccountsChannelPartnerLinksListQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsChannelPartnerLinksListQueryParams = CloudchannelAccountsChannelPartnerLinksListQueryParams;
var CloudchannelAccountsChannelPartnerLinksListSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListSecurity, _super);
    function CloudchannelAccountsChannelPartnerLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsChannelPartnerLinksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsChannelPartnerLinksListSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsChannelPartnerLinksListSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsChannelPartnerLinksListSecurity = CloudchannelAccountsChannelPartnerLinksListSecurity;
var CloudchannelAccountsChannelPartnerLinksListRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListRequest, _super);
    function CloudchannelAccountsChannelPartnerLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksListPathParams)
    ], CloudchannelAccountsChannelPartnerLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksListQueryParams)
    ], CloudchannelAccountsChannelPartnerLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksListSecurity)
    ], CloudchannelAccountsChannelPartnerLinksListRequest.prototype, "security", void 0);
    return CloudchannelAccountsChannelPartnerLinksListRequest;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsChannelPartnerLinksListRequest = CloudchannelAccountsChannelPartnerLinksListRequest;
var CloudchannelAccountsChannelPartnerLinksListResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListResponse, _super);
    function CloudchannelAccountsChannelPartnerLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListChannelPartnerLinksResponse)
    ], CloudchannelAccountsChannelPartnerLinksListResponse.prototype, "googleCloudChannelV1ListChannelPartnerLinksResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsChannelPartnerLinksListResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsChannelPartnerLinksListResponse;
}(utils_1.SpeakeasyBase));
exports.CloudchannelAccountsChannelPartnerLinksListResponse = CloudchannelAccountsChannelPartnerLinksListResponse;
