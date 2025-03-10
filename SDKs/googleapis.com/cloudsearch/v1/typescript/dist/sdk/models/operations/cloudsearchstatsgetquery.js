"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.CloudsearchStatsGetQueryResponse = exports.CloudsearchStatsGetQueryRequest = exports.CloudsearchStatsGetQuerySecurity = exports.CloudsearchStatsGetQuerySecurityOption3 = exports.CloudsearchStatsGetQuerySecurityOption2 = exports.CloudsearchStatsGetQuerySecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudsearchStatsGetQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetQuerySecurityOption1, _super);
    function CloudsearchStatsGetQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQuerySecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetQuerySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudsearchStatsGetQuerySecurityOption1 = CloudsearchStatsGetQuerySecurityOption1;
var CloudsearchStatsGetQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetQuerySecurityOption2, _super);
    function CloudsearchStatsGetQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQuerySecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetQuerySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudsearchStatsGetQuerySecurityOption2 = CloudsearchStatsGetQuerySecurityOption2;
var CloudsearchStatsGetQuerySecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetQuerySecurityOption3, _super);
    function CloudsearchStatsGetQuerySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQuerySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQuerySecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetQuerySecurityOption3;
}(utils_1.SpeakeasyBase));
exports.CloudsearchStatsGetQuerySecurityOption3 = CloudsearchStatsGetQuerySecurityOption3;
var CloudsearchStatsGetQuerySecurity = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetQuerySecurity, _super);
    function CloudsearchStatsGetQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetQuerySecurityOption1)
    ], CloudsearchStatsGetQuerySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetQuerySecurityOption2)
    ], CloudsearchStatsGetQuerySecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetQuerySecurityOption3)
    ], CloudsearchStatsGetQuerySecurity.prototype, "option3", void 0);
    return CloudsearchStatsGetQuerySecurity;
}(utils_1.SpeakeasyBase));
exports.CloudsearchStatsGetQuerySecurity = CloudsearchStatsGetQuerySecurity;
var CloudsearchStatsGetQueryRequest = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetQueryRequest, _super);
    function CloudsearchStatsGetQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fromDate.day",
        }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetQueryRequest.prototype, "fromDateDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fromDate.month",
        }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetQueryRequest.prototype, "fromDateMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fromDate.year",
        }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetQueryRequest.prototype, "fromDateYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], CloudsearchStatsGetQueryRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=toDate.day",
        }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetQueryRequest.prototype, "toDateDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=toDate.month",
        }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetQueryRequest.prototype, "toDateMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=toDate.year",
        }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetQueryRequest.prototype, "toDateYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryRequest.prototype, "uploadProtocol", void 0);
    return CloudsearchStatsGetQueryRequest;
}(utils_1.SpeakeasyBase));
exports.CloudsearchStatsGetQueryRequest = CloudsearchStatsGetQueryRequest;
var CloudsearchStatsGetQueryResponse = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetQueryResponse, _super);
    function CloudsearchStatsGetQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudsearchStatsGetQueryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetCustomerQueryStatsResponse)
    ], CloudsearchStatsGetQueryResponse.prototype, "getCustomerQueryStatsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CloudsearchStatsGetQueryResponse.prototype, "rawResponse", void 0);
    return CloudsearchStatsGetQueryResponse;
}(utils_1.SpeakeasyBase));
exports.CloudsearchStatsGetQueryResponse = CloudsearchStatsGetQueryResponse;
