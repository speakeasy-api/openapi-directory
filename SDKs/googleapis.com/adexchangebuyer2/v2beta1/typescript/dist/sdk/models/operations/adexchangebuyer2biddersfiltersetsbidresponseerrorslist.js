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
exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse = exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest = exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity = exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams = exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=filterSetName" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams.prototype, "filterSetName", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams = Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams;
var Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams = Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams;
var Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity = Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity;
var Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest = Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest;
var Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListBidResponseErrorsResponse)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse.prototype, "listBidResponseErrorsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse = Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse;
