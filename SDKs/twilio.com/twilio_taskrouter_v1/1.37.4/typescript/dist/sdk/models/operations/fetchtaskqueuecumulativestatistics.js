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
exports.FetchTaskQueueCumulativeStatisticsResponse = exports.FetchTaskQueueCumulativeStatisticsRequest = exports.FetchTaskQueueCumulativeStatisticsSecurity = exports.FetchTaskQueueCumulativeStatisticsQueryParams = exports.FetchTaskQueueCumulativeStatisticsPathParams = exports.FetchTaskQueueCumulativeStatisticsServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchTaskQueueCumulativeStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchTaskQueueCumulativeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsPathParams, _super);
    function FetchTaskQueueCumulativeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsPathParams.prototype, "taskQueueSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchTaskQueueCumulativeStatisticsPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueCumulativeStatisticsPathParams = FetchTaskQueueCumulativeStatisticsPathParams;
var FetchTaskQueueCumulativeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsQueryParams, _super);
    function FetchTaskQueueCumulativeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchTaskQueueCumulativeStatisticsQueryParams;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueCumulativeStatisticsQueryParams = FetchTaskQueueCumulativeStatisticsQueryParams;
var FetchTaskQueueCumulativeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsSecurity, _super);
    function FetchTaskQueueCumulativeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskQueueCumulativeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskQueueCumulativeStatisticsSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueCumulativeStatisticsSecurity = FetchTaskQueueCumulativeStatisticsSecurity;
var FetchTaskQueueCumulativeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsRequest, _super);
    function FetchTaskQueueCumulativeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchTaskQueueCumulativeStatisticsPathParams)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchTaskQueueCumulativeStatisticsQueryParams)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchTaskQueueCumulativeStatisticsSecurity)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "security", void 0);
    return FetchTaskQueueCumulativeStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueCumulativeStatisticsRequest = FetchTaskQueueCumulativeStatisticsRequest;
var FetchTaskQueueCumulativeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsResponse, _super);
    function FetchTaskQueueCumulativeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchTaskQueueCumulativeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics)
    ], FetchTaskQueueCumulativeStatisticsResponse.prototype, "taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics", void 0);
    return FetchTaskQueueCumulativeStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueCumulativeStatisticsResponse = FetchTaskQueueCumulativeStatisticsResponse;
