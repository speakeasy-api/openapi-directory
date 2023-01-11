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
exports.AnalyticsManagementExperimentsDeleteResponse = exports.AnalyticsManagementExperimentsDeleteRequest = exports.AnalyticsManagementExperimentsDeleteSecurity = exports.AnalyticsManagementExperimentsDeleteSecurityOption2 = exports.AnalyticsManagementExperimentsDeleteSecurityOption1 = exports.AnalyticsManagementExperimentsDeleteQueryParams = exports.AnalyticsManagementExperimentsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementExperimentsDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeletePathParams, _super);
    function AnalyticsManagementExperimentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=experimentId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "experimentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsDeletePathParams = AnalyticsManagementExperimentsDeletePathParams;
var AnalyticsManagementExperimentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteQueryParams, _super);
    function AnalyticsManagementExperimentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsDeleteQueryParams = AnalyticsManagementExperimentsDeleteQueryParams;
var AnalyticsManagementExperimentsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteSecurityOption1, _super);
    function AnalyticsManagementExperimentsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsDeleteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsDeleteSecurityOption1 = AnalyticsManagementExperimentsDeleteSecurityOption1;
var AnalyticsManagementExperimentsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteSecurityOption2, _super);
    function AnalyticsManagementExperimentsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsDeleteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsDeleteSecurityOption2 = AnalyticsManagementExperimentsDeleteSecurityOption2;
var AnalyticsManagementExperimentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteSecurity, _super);
    function AnalyticsManagementExperimentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteSecurityOption1)
    ], AnalyticsManagementExperimentsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteSecurityOption2)
    ], AnalyticsManagementExperimentsDeleteSecurity.prototype, "option2", void 0);
    return AnalyticsManagementExperimentsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsDeleteSecurity = AnalyticsManagementExperimentsDeleteSecurity;
var AnalyticsManagementExperimentsDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteRequest, _super);
    function AnalyticsManagementExperimentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementExperimentsDeletePathParams)
    ], AnalyticsManagementExperimentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteQueryParams)
    ], AnalyticsManagementExperimentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteSecurity)
    ], AnalyticsManagementExperimentsDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsDeleteRequest = AnalyticsManagementExperimentsDeleteRequest;
var AnalyticsManagementExperimentsDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteResponse, _super);
    function AnalyticsManagementExperimentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsDeleteResponse = AnalyticsManagementExperimentsDeleteResponse;
