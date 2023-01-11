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
exports.ListEnvironmentResponse = exports.ListEnvironmentRequest = exports.ListEnvironmentListEnvironmentResponse = exports.ListEnvironmentListEnvironmentResponseMeta = exports.ListEnvironmentSecurity = exports.ListEnvironmentQueryParams = exports.ListEnvironmentPathParams = exports.ListEnvironmentServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListEnvironmentServerList = [
    "https://serverless.twilio.com",
];
var ListEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(ListEnvironmentPathParams, _super);
    function ListEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListEnvironmentPathParams.prototype, "serviceSid", void 0);
    return ListEnvironmentPathParams;
}(utils_1.SpeakeasyBase));
exports.ListEnvironmentPathParams = ListEnvironmentPathParams;
var ListEnvironmentQueryParams = /** @class */ (function (_super) {
    __extends(ListEnvironmentQueryParams, _super);
    function ListEnvironmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEnvironmentQueryParams.prototype, "pageSize", void 0);
    return ListEnvironmentQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListEnvironmentQueryParams = ListEnvironmentQueryParams;
var ListEnvironmentSecurity = /** @class */ (function (_super) {
    __extends(ListEnvironmentSecurity, _super);
    function ListEnvironmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEnvironmentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEnvironmentSecurity;
}(utils_1.SpeakeasyBase));
exports.ListEnvironmentSecurity = ListEnvironmentSecurity;
var ListEnvironmentListEnvironmentResponseMeta = /** @class */ (function (_super) {
    __extends(ListEnvironmentListEnvironmentResponseMeta, _super);
    function ListEnvironmentListEnvironmentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEnvironmentListEnvironmentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEnvironmentListEnvironmentResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEnvironmentListEnvironmentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEnvironmentListEnvironmentResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEnvironmentListEnvironmentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEnvironmentListEnvironmentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEnvironmentListEnvironmentResponseMeta.prototype, "url", void 0);
    return ListEnvironmentListEnvironmentResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListEnvironmentListEnvironmentResponseMeta = ListEnvironmentListEnvironmentResponseMeta;
var ListEnvironmentListEnvironmentResponse = /** @class */ (function (_super) {
    __extends(ListEnvironmentListEnvironmentResponse, _super);
    function ListEnvironmentListEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environments", elemType: shared.ServerlessV1ServiceEnvironment }),
        __metadata("design:type", Array)
    ], ListEnvironmentListEnvironmentResponse.prototype, "environments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListEnvironmentListEnvironmentResponseMeta)
    ], ListEnvironmentListEnvironmentResponse.prototype, "meta", void 0);
    return ListEnvironmentListEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.ListEnvironmentListEnvironmentResponse = ListEnvironmentListEnvironmentResponse;
var ListEnvironmentRequest = /** @class */ (function (_super) {
    __extends(ListEnvironmentRequest, _super);
    function ListEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEnvironmentRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEnvironmentPathParams)
    ], ListEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEnvironmentQueryParams)
    ], ListEnvironmentRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEnvironmentSecurity)
    ], ListEnvironmentRequest.prototype, "security", void 0);
    return ListEnvironmentRequest;
}(utils_1.SpeakeasyBase));
exports.ListEnvironmentRequest = ListEnvironmentRequest;
var ListEnvironmentResponse = /** @class */ (function (_super) {
    __extends(ListEnvironmentResponse, _super);
    function ListEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEnvironmentListEnvironmentResponse)
    ], ListEnvironmentResponse.prototype, "listEnvironmentResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListEnvironmentResponse.prototype, "statusCode", void 0);
    return ListEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.ListEnvironmentResponse = ListEnvironmentResponse;
