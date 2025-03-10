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
exports.ListFunctionResponse = exports.ListFunctionRequest = exports.ListFunctionListFunctionResponse = exports.ListFunctionListFunctionResponseMeta = exports.ListFunctionSecurity = exports.ListFunctionQueryParams = exports.ListFunctionPathParams = exports.ListFunctionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListFunctionServerList = [
    "https://serverless.twilio.com",
];
var ListFunctionPathParams = /** @class */ (function (_super) {
    __extends(ListFunctionPathParams, _super);
    function ListFunctionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListFunctionPathParams.prototype, "serviceSid", void 0);
    return ListFunctionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListFunctionPathParams = ListFunctionPathParams;
var ListFunctionQueryParams = /** @class */ (function (_super) {
    __extends(ListFunctionQueryParams, _super);
    function ListFunctionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFunctionQueryParams.prototype, "pageSize", void 0);
    return ListFunctionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListFunctionQueryParams = ListFunctionQueryParams;
var ListFunctionSecurity = /** @class */ (function (_super) {
    __extends(ListFunctionSecurity, _super);
    function ListFunctionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFunctionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFunctionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListFunctionSecurity = ListFunctionSecurity;
var ListFunctionListFunctionResponseMeta = /** @class */ (function (_super) {
    __extends(ListFunctionListFunctionResponseMeta, _super);
    function ListFunctionListFunctionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFunctionListFunctionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFunctionListFunctionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFunctionListFunctionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFunctionListFunctionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFunctionListFunctionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFunctionListFunctionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFunctionListFunctionResponseMeta.prototype, "url", void 0);
    return ListFunctionListFunctionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListFunctionListFunctionResponseMeta = ListFunctionListFunctionResponseMeta;
var ListFunctionListFunctionResponse = /** @class */ (function (_super) {
    __extends(ListFunctionListFunctionResponse, _super);
    function ListFunctionListFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=functions", elemType: shared.ServerlessV1ServiceFunction }),
        __metadata("design:type", Array)
    ], ListFunctionListFunctionResponse.prototype, "functions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListFunctionListFunctionResponseMeta)
    ], ListFunctionListFunctionResponse.prototype, "meta", void 0);
    return ListFunctionListFunctionResponse;
}(utils_1.SpeakeasyBase));
exports.ListFunctionListFunctionResponse = ListFunctionListFunctionResponse;
var ListFunctionRequest = /** @class */ (function (_super) {
    __extends(ListFunctionRequest, _super);
    function ListFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFunctionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFunctionPathParams)
    ], ListFunctionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFunctionQueryParams)
    ], ListFunctionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFunctionSecurity)
    ], ListFunctionRequest.prototype, "security", void 0);
    return ListFunctionRequest;
}(utils_1.SpeakeasyBase));
exports.ListFunctionRequest = ListFunctionRequest;
var ListFunctionResponse = /** @class */ (function (_super) {
    __extends(ListFunctionResponse, _super);
    function ListFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFunctionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFunctionListFunctionResponse)
    ], ListFunctionResponse.prototype, "listFunctionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListFunctionResponse.prototype, "statusCode", void 0);
    return ListFunctionResponse;
}(utils_1.SpeakeasyBase));
exports.ListFunctionResponse = ListFunctionResponse;
