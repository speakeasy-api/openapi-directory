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
exports.AnalyticsDataMcfGetResponse = exports.AnalyticsDataMcfGetRequest = exports.AnalyticsDataMcfGetSecurity = exports.AnalyticsDataMcfGetSecurityOption2 = exports.AnalyticsDataMcfGetSecurityOption1 = exports.AnalyticsDataMcfGetQueryParams = exports.AnalyticsDataMcfGetSamplingLevelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsDataMcfGetSamplingLevelEnum;
(function (AnalyticsDataMcfGetSamplingLevelEnum) {
    AnalyticsDataMcfGetSamplingLevelEnum["Default"] = "DEFAULT";
    AnalyticsDataMcfGetSamplingLevelEnum["Faster"] = "FASTER";
    AnalyticsDataMcfGetSamplingLevelEnum["HigherPrecision"] = "HIGHER_PRECISION";
})(AnalyticsDataMcfGetSamplingLevelEnum = exports.AnalyticsDataMcfGetSamplingLevelEnum || (exports.AnalyticsDataMcfGetSamplingLevelEnum = {}));
var AnalyticsDataMcfGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsDataMcfGetQueryParams, _super);
    function AnalyticsDataMcfGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsDataMcfGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsDataMcfGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=samplingLevel" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "samplingLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsDataMcfGetQueryParams.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsDataMcfGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataMcfGetQueryParams = AnalyticsDataMcfGetQueryParams;
var AnalyticsDataMcfGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsDataMcfGetSecurityOption1, _super);
    function AnalyticsDataMcfGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataMcfGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataMcfGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsDataMcfGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataMcfGetSecurityOption1 = AnalyticsDataMcfGetSecurityOption1;
var AnalyticsDataMcfGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsDataMcfGetSecurityOption2, _super);
    function AnalyticsDataMcfGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataMcfGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataMcfGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsDataMcfGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataMcfGetSecurityOption2 = AnalyticsDataMcfGetSecurityOption2;
var AnalyticsDataMcfGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsDataMcfGetSecurity, _super);
    function AnalyticsDataMcfGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataMcfGetSecurityOption1)
    ], AnalyticsDataMcfGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataMcfGetSecurityOption2)
    ], AnalyticsDataMcfGetSecurity.prototype, "option2", void 0);
    return AnalyticsDataMcfGetSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataMcfGetSecurity = AnalyticsDataMcfGetSecurity;
var AnalyticsDataMcfGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsDataMcfGetRequest, _super);
    function AnalyticsDataMcfGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsDataMcfGetQueryParams)
    ], AnalyticsDataMcfGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsDataMcfGetSecurity)
    ], AnalyticsDataMcfGetRequest.prototype, "security", void 0);
    return AnalyticsDataMcfGetRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataMcfGetRequest = AnalyticsDataMcfGetRequest;
var AnalyticsDataMcfGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsDataMcfGetResponse, _super);
    function AnalyticsDataMcfGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsDataMcfGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.McfData)
    ], AnalyticsDataMcfGetResponse.prototype, "mcfData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsDataMcfGetResponse.prototype, "statusCode", void 0);
    return AnalyticsDataMcfGetResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsDataMcfGetResponse = AnalyticsDataMcfGetResponse;
