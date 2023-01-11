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
exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse = exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest = exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity = exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams = exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams, _super);
    function GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams.prototype, "companyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams.prototype, "employeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams.prototype, "year", void 0);
    return GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams;
}(utils_1.SpeakeasyBase));
exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams = GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams;
var GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams, _super);
    function GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dettypes" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams.prototype, "dettypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includetotalcount" }),
        __metadata("design:type", Boolean)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams.prototype, "includetotalcount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagenumber" }),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams.prototype, "pagenumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams.prototype, "pagesize", void 0);
    return GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams = GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams;
var GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity, _super);
    function GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity.prototype, "paylocityAuth", void 0);
    return GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity;
}(utils_1.SpeakeasyBase));
exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity = GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity;
var GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest, _super);
    function GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest.prototype, "security", void 0);
    return GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest;
}(utils_1.SpeakeasyBase));
exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest = GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest;
var GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse, _super);
    function GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.ErrorT }),
        __metadata("design:type", Array)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.PayStatementSummary }),
        __metadata("design:type", Array)
    ], GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse.prototype, "payStatementSummaries", void 0);
    return GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse;
}(utils_1.SpeakeasyBase));
exports.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse = GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse;
