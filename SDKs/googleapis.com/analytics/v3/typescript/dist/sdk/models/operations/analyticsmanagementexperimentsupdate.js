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
exports.AnalyticsManagementExperimentsUpdateResponse = exports.AnalyticsManagementExperimentsUpdateRequest = exports.AnalyticsManagementExperimentsUpdateSecurity = exports.AnalyticsManagementExperimentsUpdateSecurityOption2 = exports.AnalyticsManagementExperimentsUpdateSecurityOption1 = exports.AnalyticsManagementExperimentsUpdateQueryParams = exports.AnalyticsManagementExperimentsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementExperimentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdatePathParams, _super);
    function AnalyticsManagementExperimentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=experimentId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "experimentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsUpdatePathParams = AnalyticsManagementExperimentsUpdatePathParams;
var AnalyticsManagementExperimentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateQueryParams, _super);
    function AnalyticsManagementExperimentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsUpdateQueryParams = AnalyticsManagementExperimentsUpdateQueryParams;
var AnalyticsManagementExperimentsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateSecurityOption1, _super);
    function AnalyticsManagementExperimentsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsUpdateSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsUpdateSecurityOption1 = AnalyticsManagementExperimentsUpdateSecurityOption1;
var AnalyticsManagementExperimentsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateSecurityOption2, _super);
    function AnalyticsManagementExperimentsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsUpdateSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsUpdateSecurityOption2 = AnalyticsManagementExperimentsUpdateSecurityOption2;
var AnalyticsManagementExperimentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateSecurity, _super);
    function AnalyticsManagementExperimentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateSecurityOption1)
    ], AnalyticsManagementExperimentsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateSecurityOption2)
    ], AnalyticsManagementExperimentsUpdateSecurity.prototype, "option2", void 0);
    return AnalyticsManagementExperimentsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsUpdateSecurity = AnalyticsManagementExperimentsUpdateSecurity;
var AnalyticsManagementExperimentsUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateRequest, _super);
    function AnalyticsManagementExperimentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementExperimentsUpdatePathParams)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateQueryParams)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateSecurity)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsUpdateRequest = AnalyticsManagementExperimentsUpdateRequest;
var AnalyticsManagementExperimentsUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateResponse, _super);
    function AnalyticsManagementExperimentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsUpdateResponse.prototype, "experiment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementExperimentsUpdateResponse = AnalyticsManagementExperimentsUpdateResponse;
