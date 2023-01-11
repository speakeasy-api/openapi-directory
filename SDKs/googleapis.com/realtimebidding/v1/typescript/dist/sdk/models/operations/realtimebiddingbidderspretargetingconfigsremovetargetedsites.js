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
exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse = exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest = exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity = exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams = exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pretargetingConfig" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams.prototype, "pretargetingConfig", void 0);
    return RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams;
}(utils_1.SpeakeasyBase));
exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams = RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams;
var RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams;
}(utils_1.SpeakeasyBase));
exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams = RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams;
var RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity, _super);
    function RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity;
}(utils_1.SpeakeasyBase));
exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity = RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity;
var RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest, _super);
    function RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveTargetedSitesRequest)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest;
}(utils_1.SpeakeasyBase));
exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest = RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest;
var RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse, _super);
    function RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PretargetingConfig)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse;
}(utils_1.SpeakeasyBase));
exports.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse = RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse;
