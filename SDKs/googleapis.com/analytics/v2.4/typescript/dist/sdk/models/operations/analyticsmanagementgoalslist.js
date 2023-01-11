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
exports.AnalyticsManagementGoalsListResponse = exports.AnalyticsManagementGoalsListRequest = exports.AnalyticsManagementGoalsListSecurity = exports.AnalyticsManagementGoalsListSecurityOption2 = exports.AnalyticsManagementGoalsListSecurityOption1 = exports.AnalyticsManagementGoalsListQueryParams = exports.AnalyticsManagementGoalsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementGoalsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsListPathParams, _super);
    function AnalyticsManagementGoalsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListPathParams.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementGoalsListPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementGoalsListPathParams = AnalyticsManagementGoalsListPathParams;
var AnalyticsManagementGoalsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsListQueryParams, _super);
    function AnalyticsManagementGoalsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementGoalsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementGoalsListQueryParams = AnalyticsManagementGoalsListQueryParams;
var AnalyticsManagementGoalsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsListSecurityOption1, _super);
    function AnalyticsManagementGoalsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementGoalsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementGoalsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementGoalsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementGoalsListSecurityOption1 = AnalyticsManagementGoalsListSecurityOption1;
var AnalyticsManagementGoalsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsListSecurityOption2, _super);
    function AnalyticsManagementGoalsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementGoalsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementGoalsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementGoalsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementGoalsListSecurityOption2 = AnalyticsManagementGoalsListSecurityOption2;
var AnalyticsManagementGoalsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsListSecurity, _super);
    function AnalyticsManagementGoalsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementGoalsListSecurityOption1)
    ], AnalyticsManagementGoalsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementGoalsListSecurityOption2)
    ], AnalyticsManagementGoalsListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementGoalsListSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementGoalsListSecurity = AnalyticsManagementGoalsListSecurity;
var AnalyticsManagementGoalsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsListRequest, _super);
    function AnalyticsManagementGoalsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementGoalsListPathParams)
    ], AnalyticsManagementGoalsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementGoalsListQueryParams)
    ], AnalyticsManagementGoalsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementGoalsListSecurity)
    ], AnalyticsManagementGoalsListRequest.prototype, "security", void 0);
    return AnalyticsManagementGoalsListRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementGoalsListRequest = AnalyticsManagementGoalsListRequest;
var AnalyticsManagementGoalsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsListResponse, _super);
    function AnalyticsManagementGoalsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementGoalsListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementGoalsListResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementGoalsListResponse = AnalyticsManagementGoalsListResponse;
