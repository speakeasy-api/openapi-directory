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
exports.FetchWorkerStatisticsResponse = exports.FetchWorkerStatisticsRequest = exports.FetchWorkerStatisticsSecurity = exports.FetchWorkerStatisticsQueryParams = exports.FetchWorkerStatisticsPathParams = exports.FetchWorkerStatisticsServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchWorkerStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchWorkerStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsPathParams, _super);
    function FetchWorkerStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkerStatisticsPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchWorkerStatisticsPathParams = FetchWorkerStatisticsPathParams;
var FetchWorkerStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsQueryParams, _super);
    function FetchWorkerStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkerStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkerStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkerStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "taskChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TaskQueueName" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "taskQueueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "taskQueueSid", void 0);
    return FetchWorkerStatisticsQueryParams;
}(utils_1.SpeakeasyBase));
exports.FetchWorkerStatisticsQueryParams = FetchWorkerStatisticsQueryParams;
var FetchWorkerStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsSecurity, _super);
    function FetchWorkerStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkerStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkerStatisticsSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchWorkerStatisticsSecurity = FetchWorkerStatisticsSecurity;
var FetchWorkerStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsRequest, _super);
    function FetchWorkerStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWorkerStatisticsPathParams)
    ], FetchWorkerStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWorkerStatisticsQueryParams)
    ], FetchWorkerStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWorkerStatisticsSecurity)
    ], FetchWorkerStatisticsRequest.prototype, "security", void 0);
    return FetchWorkerStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.FetchWorkerStatisticsRequest = FetchWorkerStatisticsRequest;
var FetchWorkerStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsResponse, _super);
    function FetchWorkerStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchWorkerStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkerStatistics)
    ], FetchWorkerStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkerWorkerStatistics", void 0);
    return FetchWorkerStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.FetchWorkerStatisticsResponse = FetchWorkerStatisticsResponse;
