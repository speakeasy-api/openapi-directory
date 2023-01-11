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
exports.AnalyticsDataGaGetResponse = exports.AnalyticsDataGaGetRequest = exports.AnalyticsDataGaGetSecurity = exports.AnalyticsDataGaGetSecurityOption2 = exports.AnalyticsDataGaGetSecurityOption1 = exports.AnalyticsDataGaGetQueryParams = exports.AnalyticsDataGaGetSamplingLevelEnum = exports.AnalyticsDataGaGetOutputEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsDataGaGetOutputEnum;
(function (AnalyticsDataGaGetOutputEnum) {
    AnalyticsDataGaGetOutputEnum["DataTable"] = "dataTable";
    AnalyticsDataGaGetOutputEnum["Json"] = "json";
})(AnalyticsDataGaGetOutputEnum = exports.AnalyticsDataGaGetOutputEnum || (exports.AnalyticsDataGaGetOutputEnum = {}));
var AnalyticsDataGaGetSamplingLevelEnum;
(function (AnalyticsDataGaGetSamplingLevelEnum) {
    AnalyticsDataGaGetSamplingLevelEnum["Default"] = "DEFAULT";
    AnalyticsDataGaGetSamplingLevelEnum["Faster"] = "FASTER";
    AnalyticsDataGaGetSamplingLevelEnum["HigherPrecision"] = "HIGHER_PRECISION";
})(AnalyticsDataGaGetSamplingLevelEnum = exports.AnalyticsDataGaGetSamplingLevelEnum || (exports.AnalyticsDataGaGetSamplingLevelEnum = {}));
var AnalyticsDataGaGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetQueryParams, _super);
    function AnalyticsDataGaGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include-empty-rows" }),
        __metadata("design:type", Boolean)
    ], AnalyticsDataGaGetQueryParams.prototype, "includeEmptyRows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsDataGaGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "output", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsDataGaGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=samplingLevel" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "samplingLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=segment" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "segment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsDataGaGetQueryParams.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsDataGaGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataGaGetQueryParams = AnalyticsDataGaGetQueryParams;
var AnalyticsDataGaGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetSecurityOption1, _super);
    function AnalyticsDataGaGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataGaGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataGaGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsDataGaGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataGaGetSecurityOption1 = AnalyticsDataGaGetSecurityOption1;
var AnalyticsDataGaGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetSecurityOption2, _super);
    function AnalyticsDataGaGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataGaGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataGaGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsDataGaGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataGaGetSecurityOption2 = AnalyticsDataGaGetSecurityOption2;
var AnalyticsDataGaGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetSecurity, _super);
    function AnalyticsDataGaGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataGaGetSecurityOption1)
    ], AnalyticsDataGaGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataGaGetSecurityOption2)
    ], AnalyticsDataGaGetSecurity.prototype, "option2", void 0);
    return AnalyticsDataGaGetSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataGaGetSecurity = AnalyticsDataGaGetSecurity;
var AnalyticsDataGaGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetRequest, _super);
    function AnalyticsDataGaGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsDataGaGetQueryParams)
    ], AnalyticsDataGaGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsDataGaGetSecurity)
    ], AnalyticsDataGaGetRequest.prototype, "security", void 0);
    return AnalyticsDataGaGetRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataGaGetRequest = AnalyticsDataGaGetRequest;
var AnalyticsDataGaGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetResponse, _super);
    function AnalyticsDataGaGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GaData)
    ], AnalyticsDataGaGetResponse.prototype, "gaData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsDataGaGetResponse.prototype, "statusCode", void 0);
    return AnalyticsDataGaGetResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataGaGetResponse = AnalyticsDataGaGetResponse;
