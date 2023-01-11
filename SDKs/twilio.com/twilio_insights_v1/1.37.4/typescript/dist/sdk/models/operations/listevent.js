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
exports.ListEventResponse = exports.ListEventRequest = exports.ListEventListEventResponse = exports.ListEventListEventResponseMeta = exports.ListEventSecurity = exports.ListEventQueryParams = exports.ListEventPathParams = exports.ListEventServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListEventServerList = [
    "https://insights.twilio.com",
];
var ListEventPathParams = /** @class */ (function (_super) {
    __extends(ListEventPathParams, _super);
    function ListEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], ListEventPathParams.prototype, "callSid", void 0);
    return ListEventPathParams;
}(utils_1.SpeakeasyBase));
exports.ListEventPathParams = ListEventPathParams;
var ListEventQueryParams = /** @class */ (function (_super) {
    __extends(ListEventQueryParams, _super);
    function ListEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Edge" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "edge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEventQueryParams.prototype, "pageSize", void 0);
    return ListEventQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListEventQueryParams = ListEventQueryParams;
var ListEventSecurity = /** @class */ (function (_super) {
    __extends(ListEventSecurity, _super);
    function ListEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEventSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEventSecurity;
}(utils_1.SpeakeasyBase));
exports.ListEventSecurity = ListEventSecurity;
var ListEventListEventResponseMeta = /** @class */ (function (_super) {
    __extends(ListEventListEventResponseMeta, _super);
    function ListEventListEventResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEventListEventResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEventListEventResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "url", void 0);
    return ListEventListEventResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListEventListEventResponseMeta = ListEventListEventResponseMeta;
var ListEventListEventResponse = /** @class */ (function (_super) {
    __extends(ListEventListEventResponse, _super);
    function ListEventListEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: shared.InsightsV1CallEvent }),
        __metadata("design:type", Array)
    ], ListEventListEventResponse.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListEventListEventResponseMeta)
    ], ListEventListEventResponse.prototype, "meta", void 0);
    return ListEventListEventResponse;
}(utils_1.SpeakeasyBase));
exports.ListEventListEventResponse = ListEventListEventResponse;
var ListEventRequest = /** @class */ (function (_super) {
    __extends(ListEventRequest, _super);
    function ListEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEventRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEventPathParams)
    ], ListEventRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEventQueryParams)
    ], ListEventRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEventSecurity)
    ], ListEventRequest.prototype, "security", void 0);
    return ListEventRequest;
}(utils_1.SpeakeasyBase));
exports.ListEventRequest = ListEventRequest;
var ListEventResponse = /** @class */ (function (_super) {
    __extends(ListEventResponse, _super);
    function ListEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEventResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEventListEventResponse)
    ], ListEventResponse.prototype, "listEventResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListEventResponse.prototype, "statusCode", void 0);
    return ListEventResponse;
}(utils_1.SpeakeasyBase));
exports.ListEventResponse = ListEventResponse;
