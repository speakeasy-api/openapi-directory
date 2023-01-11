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
exports.FetchTaskQueueRealTimeStatisticsResponse = exports.FetchTaskQueueRealTimeStatisticsRequest = exports.FetchTaskQueueRealTimeStatisticsSecurity = exports.FetchTaskQueueRealTimeStatisticsQueryParams = exports.FetchTaskQueueRealTimeStatisticsPathParams = exports.FetchTaskQueueRealTimeStatisticsServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchTaskQueueRealTimeStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchTaskQueueRealTimeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsPathParams, _super);
    function FetchTaskQueueRealTimeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsPathParams.prototype, "taskQueueSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchTaskQueueRealTimeStatisticsPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueRealTimeStatisticsPathParams = FetchTaskQueueRealTimeStatisticsPathParams;
var FetchTaskQueueRealTimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsQueryParams, _super);
    function FetchTaskQueueRealTimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchTaskQueueRealTimeStatisticsQueryParams;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueRealTimeStatisticsQueryParams = FetchTaskQueueRealTimeStatisticsQueryParams;
var FetchTaskQueueRealTimeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsSecurity, _super);
    function FetchTaskQueueRealTimeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskQueueRealTimeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskQueueRealTimeStatisticsSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueRealTimeStatisticsSecurity = FetchTaskQueueRealTimeStatisticsSecurity;
var FetchTaskQueueRealTimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsRequest, _super);
    function FetchTaskQueueRealTimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchTaskQueueRealTimeStatisticsPathParams)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchTaskQueueRealTimeStatisticsQueryParams)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchTaskQueueRealTimeStatisticsSecurity)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "security", void 0);
    return FetchTaskQueueRealTimeStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueRealTimeStatisticsRequest = FetchTaskQueueRealTimeStatisticsRequest;
var FetchTaskQueueRealTimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsResponse, _super);
    function FetchTaskQueueRealTimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchTaskQueueRealTimeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics)
    ], FetchTaskQueueRealTimeStatisticsResponse.prototype, "taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics", void 0);
    return FetchTaskQueueRealTimeStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.FetchTaskQueueRealTimeStatisticsResponse = FetchTaskQueueRealTimeStatisticsResponse;
