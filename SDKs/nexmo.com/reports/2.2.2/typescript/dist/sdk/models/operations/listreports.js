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
exports.ListReportsResponse = exports.ListReportsRequest = exports.ListReports200ApplicationJson = exports.ListReportsSecurity = exports.ListReportsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListReportsQueryParams = /** @class */ (function (_super) {
    __extends(ListReportsQueryParams, _super);
    function ListReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=account_id" }),
        __metadata("design:type", String)
    ], ListReportsQueryParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_from" }),
        __metadata("design:type", Date)
    ], ListReportsQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_to" }),
        __metadata("design:type", Date)
    ], ListReportsQueryParams.prototype, "dateTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ListReportsQueryParams.prototype, "status", void 0);
    return ListReportsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListReportsQueryParams = ListReportsQueryParams;
var ListReportsSecurity = /** @class */ (function (_super) {
    __extends(ListReportsSecurity, _super);
    function ListReportsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], ListReportsSecurity.prototype, "basicAuth", void 0);
    return ListReportsSecurity;
}(utils_1.SpeakeasyBase));
exports.ListReportsSecurity = ListReportsSecurity;
var ListReports200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListReports200ApplicationJson, _super);
    function ListReports200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], ListReports200ApplicationJson.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reports" }),
        __metadata("design:type", Array)
    ], ListReports200ApplicationJson.prototype, "reports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self_link" }),
        __metadata("design:type", String)
    ], ListReports200ApplicationJson.prototype, "selfLink", void 0);
    return ListReports200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListReports200ApplicationJson = ListReports200ApplicationJson;
var ListReportsRequest = /** @class */ (function (_super) {
    __extends(ListReportsRequest, _super);
    function ListReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListReportsQueryParams)
    ], ListReportsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListReportsSecurity)
    ], ListReportsRequest.prototype, "security", void 0);
    return ListReportsRequest;
}(utils_1.SpeakeasyBase));
exports.ListReportsRequest = ListReportsRequest;
var ListReportsResponse = /** @class */ (function (_super) {
    __extends(ListReportsResponse, _super);
    function ListReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListReportsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListReportsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListReports200ApplicationJson)
    ], ListReportsResponse.prototype, "listReports200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListReportsResponse.prototype, "listReports400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListReportsResponse.prototype, "listReports401ApplicationJSONAny", void 0);
    return ListReportsResponse;
}(utils_1.SpeakeasyBase));
exports.ListReportsResponse = ListReportsResponse;
