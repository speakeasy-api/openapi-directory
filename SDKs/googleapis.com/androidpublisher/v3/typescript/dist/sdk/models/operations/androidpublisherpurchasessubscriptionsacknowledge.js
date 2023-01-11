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
exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse = exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest = exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity = exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams = exports.AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams, _super);
    function AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams.prototype, "packageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams.prototype, "token", void 0);
    return AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams = AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams;
var AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams, _super);
    function AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams = AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams;
var AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity, _super);
    function AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity = AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity;
var AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest, _super);
    function AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionPurchasesAcknowledgeRequest)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest.prototype, "security", void 0);
    return AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest = AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest;
var AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse, _super);
    function AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse.prototype, "statusCode", void 0);
    return AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse = AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse;
