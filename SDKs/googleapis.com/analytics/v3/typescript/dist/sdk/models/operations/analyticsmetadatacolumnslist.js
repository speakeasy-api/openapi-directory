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
exports.AnalyticsMetadataColumnsListResponse = exports.AnalyticsMetadataColumnsListRequest = exports.AnalyticsMetadataColumnsListSecurity = exports.AnalyticsMetadataColumnsListSecurityOption3 = exports.AnalyticsMetadataColumnsListSecurityOption2 = exports.AnalyticsMetadataColumnsListSecurityOption1 = exports.AnalyticsMetadataColumnsListQueryParams = exports.AnalyticsMetadataColumnsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsMetadataColumnsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListPathParams, _super);
    function AnalyticsMetadataColumnsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=reportType" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListPathParams.prototype, "reportType", void 0);
    return AnalyticsMetadataColumnsListPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListPathParams = AnalyticsMetadataColumnsListPathParams;
var AnalyticsMetadataColumnsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListQueryParams, _super);
    function AnalyticsMetadataColumnsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsMetadataColumnsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListQueryParams = AnalyticsMetadataColumnsListQueryParams;
var AnalyticsMetadataColumnsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurityOption1, _super);
    function AnalyticsMetadataColumnsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsMetadataColumnsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsMetadataColumnsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsMetadataColumnsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListSecurityOption1 = AnalyticsMetadataColumnsListSecurityOption1;
var AnalyticsMetadataColumnsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurityOption2, _super);
    function AnalyticsMetadataColumnsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsMetadataColumnsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsMetadataColumnsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsMetadataColumnsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListSecurityOption2 = AnalyticsMetadataColumnsListSecurityOption2;
var AnalyticsMetadataColumnsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurityOption3, _super);
    function AnalyticsMetadataColumnsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsMetadataColumnsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsMetadataColumnsListSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsMetadataColumnsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListSecurityOption3 = AnalyticsMetadataColumnsListSecurityOption3;
var AnalyticsMetadataColumnsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurity, _super);
    function AnalyticsMetadataColumnsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurityOption1)
    ], AnalyticsMetadataColumnsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurityOption2)
    ], AnalyticsMetadataColumnsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurityOption3)
    ], AnalyticsMetadataColumnsListSecurity.prototype, "option3", void 0);
    return AnalyticsMetadataColumnsListSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListSecurity = AnalyticsMetadataColumnsListSecurity;
var AnalyticsMetadataColumnsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListRequest, _super);
    function AnalyticsMetadataColumnsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsMetadataColumnsListPathParams)
    ], AnalyticsMetadataColumnsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsMetadataColumnsListQueryParams)
    ], AnalyticsMetadataColumnsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurity)
    ], AnalyticsMetadataColumnsListRequest.prototype, "security", void 0);
    return AnalyticsMetadataColumnsListRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListRequest = AnalyticsMetadataColumnsListRequest;
var AnalyticsMetadataColumnsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListResponse, _super);
    function AnalyticsMetadataColumnsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Columns)
    ], AnalyticsMetadataColumnsListResponse.prototype, "columns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsMetadataColumnsListResponse.prototype, "statusCode", void 0);
    return AnalyticsMetadataColumnsListResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsMetadataColumnsListResponse = AnalyticsMetadataColumnsListResponse;
