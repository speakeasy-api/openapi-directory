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
exports.ListTrustProductEvaluationResponse = exports.ListTrustProductEvaluationRequest = exports.ListTrustProductEvaluationListTrustProductEvaluationResponse = exports.ListTrustProductEvaluationListTrustProductEvaluationResponseMeta = exports.ListTrustProductEvaluationSecurity = exports.ListTrustProductEvaluationQueryParams = exports.ListTrustProductEvaluationPathParams = exports.ListTrustProductEvaluationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListTrustProductEvaluationServerList = [
    "https://trusthub.twilio.com",
];
var ListTrustProductEvaluationPathParams = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationPathParams, _super);
    function ListTrustProductEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationPathParams.prototype, "trustProductSid", void 0);
    return ListTrustProductEvaluationPathParams;
}(utils_1.SpeakeasyBase));
exports.ListTrustProductEvaluationPathParams = ListTrustProductEvaluationPathParams;
var ListTrustProductEvaluationQueryParams = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationQueryParams, _super);
    function ListTrustProductEvaluationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationQueryParams.prototype, "pageSize", void 0);
    return ListTrustProductEvaluationQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListTrustProductEvaluationQueryParams = ListTrustProductEvaluationQueryParams;
var ListTrustProductEvaluationSecurity = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationSecurity, _super);
    function ListTrustProductEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTrustProductEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTrustProductEvaluationSecurity;
}(utils_1.SpeakeasyBase));
exports.ListTrustProductEvaluationSecurity = ListTrustProductEvaluationSecurity;
var ListTrustProductEvaluationListTrustProductEvaluationResponseMeta = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationListTrustProductEvaluationResponseMeta, _super);
    function ListTrustProductEvaluationListTrustProductEvaluationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "url", void 0);
    return ListTrustProductEvaluationListTrustProductEvaluationResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListTrustProductEvaluationListTrustProductEvaluationResponseMeta = ListTrustProductEvaluationListTrustProductEvaluationResponseMeta;
var ListTrustProductEvaluationListTrustProductEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationListTrustProductEvaluationResponse, _super);
    function ListTrustProductEvaluationListTrustProductEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListTrustProductEvaluationListTrustProductEvaluationResponseMeta)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductEvaluation }),
        __metadata("design:type", Array)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponse.prototype, "results", void 0);
    return ListTrustProductEvaluationListTrustProductEvaluationResponse;
}(utils_1.SpeakeasyBase));
exports.ListTrustProductEvaluationListTrustProductEvaluationResponse = ListTrustProductEvaluationListTrustProductEvaluationResponse;
var ListTrustProductEvaluationRequest = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationRequest, _super);
    function ListTrustProductEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTrustProductEvaluationPathParams)
    ], ListTrustProductEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTrustProductEvaluationQueryParams)
    ], ListTrustProductEvaluationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTrustProductEvaluationSecurity)
    ], ListTrustProductEvaluationRequest.prototype, "security", void 0);
    return ListTrustProductEvaluationRequest;
}(utils_1.SpeakeasyBase));
exports.ListTrustProductEvaluationRequest = ListTrustProductEvaluationRequest;
var ListTrustProductEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationResponse, _super);
    function ListTrustProductEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTrustProductEvaluationListTrustProductEvaluationResponse)
    ], ListTrustProductEvaluationResponse.prototype, "listTrustProductEvaluationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationResponse.prototype, "statusCode", void 0);
    return ListTrustProductEvaluationResponse;
}(utils_1.SpeakeasyBase));
exports.ListTrustProductEvaluationResponse = ListTrustProductEvaluationResponse;
