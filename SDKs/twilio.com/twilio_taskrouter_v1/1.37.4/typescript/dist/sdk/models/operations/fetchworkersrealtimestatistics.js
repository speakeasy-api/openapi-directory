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
exports.FetchWorkersRealTimeStatisticsResponse = exports.FetchWorkersRealTimeStatisticsRequest = exports.FetchWorkersRealTimeStatisticsSecurity = exports.FetchWorkersRealTimeStatisticsQueryParams = exports.FetchWorkersRealTimeStatisticsPathParams = exports.FetchWorkersRealTimeStatisticsServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchWorkersRealTimeStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchWorkersRealTimeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsPathParams, _super);
    function FetchWorkersRealTimeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkersRealTimeStatisticsPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchWorkersRealTimeStatisticsPathParams = FetchWorkersRealTimeStatisticsPathParams;
var FetchWorkersRealTimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsQueryParams, _super);
    function FetchWorkersRealTimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkersRealTimeStatisticsQueryParams;
}(utils_1.SpeakeasyBase));
exports.FetchWorkersRealTimeStatisticsQueryParams = FetchWorkersRealTimeStatisticsQueryParams;
var FetchWorkersRealTimeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsSecurity, _super);
    function FetchWorkersRealTimeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkersRealTimeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkersRealTimeStatisticsSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchWorkersRealTimeStatisticsSecurity = FetchWorkersRealTimeStatisticsSecurity;
var FetchWorkersRealTimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsRequest, _super);
    function FetchWorkersRealTimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWorkersRealTimeStatisticsPathParams)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWorkersRealTimeStatisticsQueryParams)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchWorkersRealTimeStatisticsSecurity)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "security", void 0);
    return FetchWorkersRealTimeStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.FetchWorkersRealTimeStatisticsRequest = FetchWorkersRealTimeStatisticsRequest;
var FetchWorkersRealTimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsResponse, _super);
    function FetchWorkersRealTimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchWorkersRealTimeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics)
    ], FetchWorkersRealTimeStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics", void 0);
    return FetchWorkersRealTimeStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.FetchWorkersRealTimeStatisticsResponse = FetchWorkersRealTimeStatisticsResponse;
