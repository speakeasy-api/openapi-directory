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
exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse = exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest = exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity = exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams = exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams.prototype, "parent", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams;
}(utils_1.SpeakeasyBase));
exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams = RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams;
var RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams.prototype, "uploadProtocol", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams;
}(utils_1.SpeakeasyBase));
exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams = RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams;
var RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity.prototype, "oauth2c", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity;
}(utils_1.SpeakeasyBase));
exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity = RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity;
var RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest.prototype, "security", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest;
}(utils_1.SpeakeasyBase));
exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest = RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest;
var RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse.prototype, "statusCode", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse;
}(utils_1.SpeakeasyBase));
exports.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse = RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse;
