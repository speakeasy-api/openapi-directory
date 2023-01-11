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
exports.ListTaskQueueResponse = exports.ListTaskQueueRequest = exports.ListTaskQueueListTaskQueueResponse = exports.ListTaskQueueListTaskQueueResponseMeta = exports.ListTaskQueueSecurity = exports.ListTaskQueueQueryParams = exports.ListTaskQueuePathParams = exports.ListTaskQueueServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListTaskQueueServerList = [
    "https://taskrouter.twilio.com",
];
var ListTaskQueuePathParams = /** @class */ (function (_super) {
    __extends(ListTaskQueuePathParams, _super);
    function ListTaskQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListTaskQueuePathParams.prototype, "workspaceSid", void 0);
    return ListTaskQueuePathParams;
}(utils_1.SpeakeasyBase));
exports.ListTaskQueuePathParams = ListTaskQueuePathParams;
var ListTaskQueueQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskQueueQueryParams, _super);
    function ListTaskQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EvaluateWorkerAttributes" }),
        __metadata("design:type", String)
    ], ListTaskQueueQueryParams.prototype, "evaluateWorkerAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListTaskQueueQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Ordering" }),
        __metadata("design:type", String)
    ], ListTaskQueueQueryParams.prototype, "ordering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskQueueQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=WorkerSid" }),
        __metadata("design:type", String)
    ], ListTaskQueueQueryParams.prototype, "workerSid", void 0);
    return ListTaskQueueQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListTaskQueueQueryParams = ListTaskQueueQueryParams;
var ListTaskQueueSecurity = /** @class */ (function (_super) {
    __extends(ListTaskQueueSecurity, _super);
    function ListTaskQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskQueueSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskQueueSecurity;
}(utils_1.SpeakeasyBase));
exports.ListTaskQueueSecurity = ListTaskQueueSecurity;
var ListTaskQueueListTaskQueueResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskQueueListTaskQueueResponseMeta, _super);
    function ListTaskQueueListTaskQueueResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskQueueListTaskQueueResponseMeta.prototype, "url", void 0);
    return ListTaskQueueListTaskQueueResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListTaskQueueListTaskQueueResponseMeta = ListTaskQueueListTaskQueueResponseMeta;
var ListTaskQueueListTaskQueueResponse = /** @class */ (function (_super) {
    __extends(ListTaskQueueListTaskQueueResponse, _super);
    function ListTaskQueueListTaskQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskQueueListTaskQueueResponseMeta)
    ], ListTaskQueueListTaskQueueResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=task_queues", elemType: shared.TaskrouterV1WorkspaceTaskQueue }),
        __metadata("design:type", Array)
    ], ListTaskQueueListTaskQueueResponse.prototype, "taskQueues", void 0);
    return ListTaskQueueListTaskQueueResponse;
}(utils_1.SpeakeasyBase));
exports.ListTaskQueueListTaskQueueResponse = ListTaskQueueListTaskQueueResponse;
var ListTaskQueueRequest = /** @class */ (function (_super) {
    __extends(ListTaskQueueRequest, _super);
    function ListTaskQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTaskQueueRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskQueuePathParams)
    ], ListTaskQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskQueueQueryParams)
    ], ListTaskQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskQueueSecurity)
    ], ListTaskQueueRequest.prototype, "security", void 0);
    return ListTaskQueueRequest;
}(utils_1.SpeakeasyBase));
exports.ListTaskQueueRequest = ListTaskQueueRequest;
var ListTaskQueueResponse = /** @class */ (function (_super) {
    __extends(ListTaskQueueResponse, _super);
    function ListTaskQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTaskQueueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskQueueListTaskQueueResponse)
    ], ListTaskQueueResponse.prototype, "listTaskQueueResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListTaskQueueResponse.prototype, "statusCode", void 0);
    return ListTaskQueueResponse;
}(utils_1.SpeakeasyBase));
exports.ListTaskQueueResponse = ListTaskQueueResponse;
