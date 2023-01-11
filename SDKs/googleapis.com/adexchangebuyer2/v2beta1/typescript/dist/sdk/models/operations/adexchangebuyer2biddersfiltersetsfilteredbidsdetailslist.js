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
exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse = exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest = exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity = exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams = exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams, _super);
    function Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creativeStatusId" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams.prototype, "creativeStatusId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=filterSetName" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams.prototype, "filterSetName", void 0);
    return Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams = Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams;
var Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams, _super);
    function Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams = Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams;
var Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity, _super);
    function Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity = Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity;
var Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest, _super);
    function Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest = Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest;
var Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse, _super);
    function Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListCreativeStatusBreakdownByDetailResponse)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse.prototype, "listCreativeStatusBreakdownByDetailResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse = Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse;
