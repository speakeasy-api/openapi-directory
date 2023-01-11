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
exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse = exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest = exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity = exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams = exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=filterSetName" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams.prototype, "filterSetName", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams = Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams;
var Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams = Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams;
var Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity = Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity;
var Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest = Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest;
var Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse, _super);
    function Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListBidResponsesWithoutBidsResponse)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse.prototype, "listBidResponsesWithoutBidsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse = Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse;
