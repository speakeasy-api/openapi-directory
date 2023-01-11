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
exports.DoubleclicksearchConversionGetByCustomerIdResponse = exports.DoubleclicksearchConversionGetByCustomerIdRequest = exports.DoubleclicksearchConversionGetByCustomerIdSecurity = exports.DoubleclicksearchConversionGetByCustomerIdQueryParams = exports.DoubleclicksearchConversionGetByCustomerIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DoubleclicksearchConversionGetByCustomerIdPathParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetByCustomerIdPathParams, _super);
    function DoubleclicksearchConversionGetByCustomerIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdPathParams.prototype, "customerId", void 0);
    return DoubleclicksearchConversionGetByCustomerIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DoubleclicksearchConversionGetByCustomerIdPathParams = DoubleclicksearchConversionGetByCustomerIdPathParams;
var DoubleclicksearchConversionGetByCustomerIdQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetByCustomerIdQueryParams, _super);
    function DoubleclicksearchConversionGetByCustomerIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=adGroupId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "adGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=adId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "adId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=agencyId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "agencyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=campaignId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "campaignId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criterionId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "criterionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=engineAccountId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "engineAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rowCount" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "rowCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startRow" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "startRow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclicksearchConversionGetByCustomerIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.DoubleclicksearchConversionGetByCustomerIdQueryParams = DoubleclicksearchConversionGetByCustomerIdQueryParams;
var DoubleclicksearchConversionGetByCustomerIdSecurity = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetByCustomerIdSecurity, _super);
    function DoubleclicksearchConversionGetByCustomerIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclicksearchConversionGetByCustomerIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclicksearchConversionGetByCustomerIdSecurity.prototype, "oauth2c", void 0);
    return DoubleclicksearchConversionGetByCustomerIdSecurity;
}(utils_1.SpeakeasyBase));
exports.DoubleclicksearchConversionGetByCustomerIdSecurity = DoubleclicksearchConversionGetByCustomerIdSecurity;
var DoubleclicksearchConversionGetByCustomerIdRequest = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetByCustomerIdRequest, _super);
    function DoubleclicksearchConversionGetByCustomerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DoubleclicksearchConversionGetByCustomerIdPathParams)
    ], DoubleclicksearchConversionGetByCustomerIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DoubleclicksearchConversionGetByCustomerIdQueryParams)
    ], DoubleclicksearchConversionGetByCustomerIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DoubleclicksearchConversionGetByCustomerIdSecurity)
    ], DoubleclicksearchConversionGetByCustomerIdRequest.prototype, "security", void 0);
    return DoubleclicksearchConversionGetByCustomerIdRequest;
}(utils_1.SpeakeasyBase));
exports.DoubleclicksearchConversionGetByCustomerIdRequest = DoubleclicksearchConversionGetByCustomerIdRequest;
var DoubleclicksearchConversionGetByCustomerIdResponse = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetByCustomerIdResponse, _super);
    function DoubleclicksearchConversionGetByCustomerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetByCustomerIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversionList)
    ], DoubleclicksearchConversionGetByCustomerIdResponse.prototype, "conversionList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetByCustomerIdResponse.prototype, "statusCode", void 0);
    return DoubleclicksearchConversionGetByCustomerIdResponse;
}(utils_1.SpeakeasyBase));
exports.DoubleclicksearchConversionGetByCustomerIdResponse = DoubleclicksearchConversionGetByCustomerIdResponse;
