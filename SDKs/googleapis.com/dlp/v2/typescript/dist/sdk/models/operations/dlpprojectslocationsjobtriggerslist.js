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
exports.DlpProjectsLocationsJobTriggersListResponse = exports.DlpProjectsLocationsJobTriggersListRequest = exports.DlpProjectsLocationsJobTriggersListSecurity = exports.DlpProjectsLocationsJobTriggersListQueryParams = exports.DlpProjectsLocationsJobTriggersListTypeEnum = exports.DlpProjectsLocationsJobTriggersListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DlpProjectsLocationsJobTriggersListPathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersListPathParams, _super);
    function DlpProjectsLocationsJobTriggersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListPathParams.prototype, "parent", void 0);
    return DlpProjectsLocationsJobTriggersListPathParams;
}(utils_1.SpeakeasyBase));
exports.DlpProjectsLocationsJobTriggersListPathParams = DlpProjectsLocationsJobTriggersListPathParams;
var DlpProjectsLocationsJobTriggersListTypeEnum;
(function (DlpProjectsLocationsJobTriggersListTypeEnum) {
    DlpProjectsLocationsJobTriggersListTypeEnum["DlpJobTypeUnspecified"] = "DLP_JOB_TYPE_UNSPECIFIED";
    DlpProjectsLocationsJobTriggersListTypeEnum["InspectJob"] = "INSPECT_JOB";
    DlpProjectsLocationsJobTriggersListTypeEnum["RiskAnalysisJob"] = "RISK_ANALYSIS_JOB";
})(DlpProjectsLocationsJobTriggersListTypeEnum = exports.DlpProjectsLocationsJobTriggersListTypeEnum || (exports.DlpProjectsLocationsJobTriggersListTypeEnum = {}));
var DlpProjectsLocationsJobTriggersListQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersListQueryParams, _super);
    function DlpProjectsLocationsJobTriggersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsLocationsJobTriggersListQueryParams;
}(utils_1.SpeakeasyBase));
exports.DlpProjectsLocationsJobTriggersListQueryParams = DlpProjectsLocationsJobTriggersListQueryParams;
var DlpProjectsLocationsJobTriggersListSecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersListSecurity, _super);
    function DlpProjectsLocationsJobTriggersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsLocationsJobTriggersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsLocationsJobTriggersListSecurity.prototype, "oauth2c", void 0);
    return DlpProjectsLocationsJobTriggersListSecurity;
}(utils_1.SpeakeasyBase));
exports.DlpProjectsLocationsJobTriggersListSecurity = DlpProjectsLocationsJobTriggersListSecurity;
var DlpProjectsLocationsJobTriggersListRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersListRequest, _super);
    function DlpProjectsLocationsJobTriggersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DlpProjectsLocationsJobTriggersListPathParams)
    ], DlpProjectsLocationsJobTriggersListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DlpProjectsLocationsJobTriggersListQueryParams)
    ], DlpProjectsLocationsJobTriggersListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DlpProjectsLocationsJobTriggersListSecurity)
    ], DlpProjectsLocationsJobTriggersListRequest.prototype, "security", void 0);
    return DlpProjectsLocationsJobTriggersListRequest;
}(utils_1.SpeakeasyBase));
exports.DlpProjectsLocationsJobTriggersListRequest = DlpProjectsLocationsJobTriggersListRequest;
var DlpProjectsLocationsJobTriggersListResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersListResponse, _super);
    function DlpProjectsLocationsJobTriggersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GooglePrivacyDlpV2ListJobTriggersResponse)
    ], DlpProjectsLocationsJobTriggersListResponse.prototype, "googlePrivacyDlpV2ListJobTriggersResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsJobTriggersListResponse.prototype, "statusCode", void 0);
    return DlpProjectsLocationsJobTriggersListResponse;
}(utils_1.SpeakeasyBase));
exports.DlpProjectsLocationsJobTriggersListResponse = DlpProjectsLocationsJobTriggersListResponse;
