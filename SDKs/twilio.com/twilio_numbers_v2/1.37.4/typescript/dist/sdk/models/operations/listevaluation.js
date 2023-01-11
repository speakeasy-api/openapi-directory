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
exports.ListEvaluationResponse = exports.ListEvaluationRequest = exports.ListEvaluationListEvaluationResponse = exports.ListEvaluationListEvaluationResponseMeta = exports.ListEvaluationSecurity = exports.ListEvaluationQueryParams = exports.ListEvaluationPathParams = exports.ListEvaluationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListEvaluationServerList = [
    "https://numbers.twilio.com",
];
var ListEvaluationPathParams = /** @class */ (function (_super) {
    __extends(ListEvaluationPathParams, _super);
    function ListEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], ListEvaluationPathParams.prototype, "bundleSid", void 0);
    return ListEvaluationPathParams;
}(utils_1.SpeakeasyBase));
exports.ListEvaluationPathParams = ListEvaluationPathParams;
var ListEvaluationQueryParams = /** @class */ (function (_super) {
    __extends(ListEvaluationQueryParams, _super);
    function ListEvaluationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEvaluationQueryParams.prototype, "pageSize", void 0);
    return ListEvaluationQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListEvaluationQueryParams = ListEvaluationQueryParams;
var ListEvaluationSecurity = /** @class */ (function (_super) {
    __extends(ListEvaluationSecurity, _super);
    function ListEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEvaluationSecurity;
}(utils_1.SpeakeasyBase));
exports.ListEvaluationSecurity = ListEvaluationSecurity;
var ListEvaluationListEvaluationResponseMeta = /** @class */ (function (_super) {
    __extends(ListEvaluationListEvaluationResponseMeta, _super);
    function ListEvaluationListEvaluationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "url", void 0);
    return ListEvaluationListEvaluationResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListEvaluationListEvaluationResponseMeta = ListEvaluationListEvaluationResponseMeta;
var ListEvaluationListEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListEvaluationListEvaluationResponse, _super);
    function ListEvaluationListEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListEvaluationListEvaluationResponseMeta)
    ], ListEvaluationListEvaluationResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleEvaluation }),
        __metadata("design:type", Array)
    ], ListEvaluationListEvaluationResponse.prototype, "results", void 0);
    return ListEvaluationListEvaluationResponse;
}(utils_1.SpeakeasyBase));
exports.ListEvaluationListEvaluationResponse = ListEvaluationListEvaluationResponse;
var ListEvaluationRequest = /** @class */ (function (_super) {
    __extends(ListEvaluationRequest, _super);
    function ListEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEvaluationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEvaluationPathParams)
    ], ListEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEvaluationQueryParams)
    ], ListEvaluationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEvaluationSecurity)
    ], ListEvaluationRequest.prototype, "security", void 0);
    return ListEvaluationRequest;
}(utils_1.SpeakeasyBase));
exports.ListEvaluationRequest = ListEvaluationRequest;
var ListEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListEvaluationResponse, _super);
    function ListEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEvaluationListEvaluationResponse)
    ], ListEvaluationResponse.prototype, "listEvaluationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListEvaluationResponse.prototype, "statusCode", void 0);
    return ListEvaluationResponse;
}(utils_1.SpeakeasyBase));
exports.ListEvaluationResponse = ListEvaluationResponse;
