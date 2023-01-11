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
exports.AdexchangebuyerCreativesListDealsResponse = exports.AdexchangebuyerCreativesListDealsRequest = exports.AdexchangebuyerCreativesListDealsSecurity = exports.AdexchangebuyerCreativesListDealsQueryParams = exports.AdexchangebuyerCreativesListDealsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AdexchangebuyerCreativesListDealsPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListDealsPathParams, _super);
    function AdexchangebuyerCreativesListDealsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesListDealsPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=buyerCreativeId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsPathParams.prototype, "buyerCreativeId", void 0);
    return AdexchangebuyerCreativesListDealsPathParams;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerCreativesListDealsPathParams = AdexchangebuyerCreativesListDealsPathParams;
var AdexchangebuyerCreativesListDealsQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListDealsQueryParams, _super);
    function AdexchangebuyerCreativesListDealsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerCreativesListDealsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerCreativesListDealsQueryParams;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerCreativesListDealsQueryParams = AdexchangebuyerCreativesListDealsQueryParams;
var AdexchangebuyerCreativesListDealsSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListDealsSecurity, _super);
    function AdexchangebuyerCreativesListDealsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerCreativesListDealsSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerCreativesListDealsSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerCreativesListDealsSecurity;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerCreativesListDealsSecurity = AdexchangebuyerCreativesListDealsSecurity;
var AdexchangebuyerCreativesListDealsRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListDealsRequest, _super);
    function AdexchangebuyerCreativesListDealsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerCreativesListDealsPathParams)
    ], AdexchangebuyerCreativesListDealsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerCreativesListDealsQueryParams)
    ], AdexchangebuyerCreativesListDealsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerCreativesListDealsSecurity)
    ], AdexchangebuyerCreativesListDealsRequest.prototype, "security", void 0);
    return AdexchangebuyerCreativesListDealsRequest;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerCreativesListDealsRequest = AdexchangebuyerCreativesListDealsRequest;
var AdexchangebuyerCreativesListDealsResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesListDealsResponse, _super);
    function AdexchangebuyerCreativesListDealsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesListDealsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreativeDealIds)
    ], AdexchangebuyerCreativesListDealsResponse.prototype, "creativeDealIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesListDealsResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerCreativesListDealsResponse;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerCreativesListDealsResponse = AdexchangebuyerCreativesListDealsResponse;
