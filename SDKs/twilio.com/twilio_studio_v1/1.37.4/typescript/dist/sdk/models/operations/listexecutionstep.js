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
exports.ListExecutionStepResponse = exports.ListExecutionStepRequest = exports.ListExecutionStepListExecutionStepResponse = exports.ListExecutionStepListExecutionStepResponseMeta = exports.ListExecutionStepSecurity = exports.ListExecutionStepQueryParams = exports.ListExecutionStepPathParams = exports.ListExecutionStepServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListExecutionStepServerList = [
    "https://studio.twilio.com",
];
var ListExecutionStepPathParams = /** @class */ (function (_super) {
    __extends(ListExecutionStepPathParams, _super);
    function ListExecutionStepPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" }),
        __metadata("design:type", String)
    ], ListExecutionStepPathParams.prototype, "executionSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], ListExecutionStepPathParams.prototype, "flowSid", void 0);
    return ListExecutionStepPathParams;
}(utils_1.SpeakeasyBase));
exports.ListExecutionStepPathParams = ListExecutionStepPathParams;
var ListExecutionStepQueryParams = /** @class */ (function (_super) {
    __extends(ListExecutionStepQueryParams, _super);
    function ListExecutionStepQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListExecutionStepQueryParams.prototype, "pageSize", void 0);
    return ListExecutionStepQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListExecutionStepQueryParams = ListExecutionStepQueryParams;
var ListExecutionStepSecurity = /** @class */ (function (_super) {
    __extends(ListExecutionStepSecurity, _super);
    function ListExecutionStepSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListExecutionStepSecurity.prototype, "accountSidAuthToken", void 0);
    return ListExecutionStepSecurity;
}(utils_1.SpeakeasyBase));
exports.ListExecutionStepSecurity = ListExecutionStepSecurity;
var ListExecutionStepListExecutionStepResponseMeta = /** @class */ (function (_super) {
    __extends(ListExecutionStepListExecutionStepResponseMeta, _super);
    function ListExecutionStepListExecutionStepResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListExecutionStepListExecutionStepResponseMeta.prototype, "url", void 0);
    return ListExecutionStepListExecutionStepResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListExecutionStepListExecutionStepResponseMeta = ListExecutionStepListExecutionStepResponseMeta;
var ListExecutionStepListExecutionStepResponse = /** @class */ (function (_super) {
    __extends(ListExecutionStepListExecutionStepResponse, _super);
    function ListExecutionStepListExecutionStepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListExecutionStepListExecutionStepResponseMeta)
    ], ListExecutionStepListExecutionStepResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=steps", elemType: shared.StudioV1FlowExecutionExecutionStep }),
        __metadata("design:type", Array)
    ], ListExecutionStepListExecutionStepResponse.prototype, "steps", void 0);
    return ListExecutionStepListExecutionStepResponse;
}(utils_1.SpeakeasyBase));
exports.ListExecutionStepListExecutionStepResponse = ListExecutionStepListExecutionStepResponse;
var ListExecutionStepRequest = /** @class */ (function (_super) {
    __extends(ListExecutionStepRequest, _super);
    function ListExecutionStepRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListExecutionStepRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListExecutionStepPathParams)
    ], ListExecutionStepRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListExecutionStepQueryParams)
    ], ListExecutionStepRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListExecutionStepSecurity)
    ], ListExecutionStepRequest.prototype, "security", void 0);
    return ListExecutionStepRequest;
}(utils_1.SpeakeasyBase));
exports.ListExecutionStepRequest = ListExecutionStepRequest;
var ListExecutionStepResponse = /** @class */ (function (_super) {
    __extends(ListExecutionStepResponse, _super);
    function ListExecutionStepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListExecutionStepResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListExecutionStepListExecutionStepResponse)
    ], ListExecutionStepResponse.prototype, "listExecutionStepResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListExecutionStepResponse.prototype, "statusCode", void 0);
    return ListExecutionStepResponse;
}(utils_1.SpeakeasyBase));
exports.ListExecutionStepResponse = ListExecutionStepResponse;
