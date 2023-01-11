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
exports.ListUnderstandQueryResponse = exports.ListUnderstandQueryRequest = exports.ListUnderstandQueryListUnderstandQueryResponse = exports.ListUnderstandQueryListUnderstandQueryResponseMeta = exports.ListUnderstandQuerySecurity = exports.ListUnderstandQueryQueryParams = exports.ListUnderstandQueryPathParams = exports.ListUnderstandQueryServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListUnderstandQueryServerList = [
    "https://preview.twilio.com",
];
var ListUnderstandQueryPathParams = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryPathParams, _super);
    function ListUnderstandQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryPathParams.prototype, "assistantSid", void 0);
    return ListUnderstandQueryPathParams;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandQueryPathParams = ListUnderstandQueryPathParams;
var ListUnderstandQueryQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryQueryParams, _super);
    function ListUnderstandQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Language" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ModelBuild" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryQueryParams.prototype, "modelBuild", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandQueryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryQueryParams.prototype, "status", void 0);
    return ListUnderstandQueryQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandQueryQueryParams = ListUnderstandQueryQueryParams;
var ListUnderstandQuerySecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandQuerySecurity, _super);
    function ListUnderstandQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandQuerySecurity;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandQuerySecurity = ListUnderstandQuerySecurity;
var ListUnderstandQueryListUnderstandQueryResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryListUnderstandQueryResponseMeta, _super);
    function ListUnderstandQueryListUnderstandQueryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "url", void 0);
    return ListUnderstandQueryListUnderstandQueryResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandQueryListUnderstandQueryResponseMeta = ListUnderstandQueryListUnderstandQueryResponseMeta;
var ListUnderstandQueryListUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryListUnderstandQueryResponse, _super);
    function ListUnderstandQueryListUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandQueryListUnderstandQueryResponseMeta)
    ], ListUnderstandQueryListUnderstandQueryResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queries", elemType: shared.PreviewUnderstandAssistantQuery }),
        __metadata("design:type", Array)
    ], ListUnderstandQueryListUnderstandQueryResponse.prototype, "queries", void 0);
    return ListUnderstandQueryListUnderstandQueryResponse;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandQueryListUnderstandQueryResponse = ListUnderstandQueryListUnderstandQueryResponse;
var ListUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryRequest, _super);
    function ListUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListUnderstandQueryRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandQueryPathParams)
    ], ListUnderstandQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandQueryQueryParams)
    ], ListUnderstandQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandQuerySecurity)
    ], ListUnderstandQueryRequest.prototype, "security", void 0);
    return ListUnderstandQueryRequest;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandQueryRequest = ListUnderstandQueryRequest;
var ListUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryResponse, _super);
    function ListUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListUnderstandQueryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUnderstandQueryListUnderstandQueryResponse)
    ], ListUnderstandQueryResponse.prototype, "listUnderstandQueryResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListUnderstandQueryResponse.prototype, "statusCode", void 0);
    return ListUnderstandQueryResponse;
}(utils_1.SpeakeasyBase));
exports.ListUnderstandQueryResponse = ListUnderstandQueryResponse;
