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
exports.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse = exports.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest = exports.Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity = exports.Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams = exports.Adexchangebuyer2AccountsFinalizedProposalsPausePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var Adexchangebuyer2AccountsFinalizedProposalsPausePathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsPausePathParams, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsPausePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPausePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPausePathParams.prototype, "proposalId", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsPausePathParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsFinalizedProposalsPausePathParams = Adexchangebuyer2AccountsFinalizedProposalsPausePathParams;
var Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams = Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams;
var Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity = Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity;
var Adexchangebuyer2AccountsFinalizedProposalsPauseRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsPauseRequest, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsPauseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsPausePathParams)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsPauseQueryParams)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PauseProposalDealsRequest)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsPauseRequest;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest = Adexchangebuyer2AccountsFinalizedProposalsPauseRequest;
var Adexchangebuyer2AccountsFinalizedProposalsPauseResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsPauseResponse, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsPauseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Proposal)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseResponse.prototype, "proposal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsFinalizedProposalsPauseResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsPauseResponse;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse = Adexchangebuyer2AccountsFinalizedProposalsPauseResponse;
