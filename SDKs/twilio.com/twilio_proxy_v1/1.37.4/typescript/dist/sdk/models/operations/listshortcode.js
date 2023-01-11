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
exports.ListShortCodeResponse = exports.ListShortCodeRequest = exports.ListShortCodeListShortCodeResponse = exports.ListShortCodeListShortCodeResponseMeta = exports.ListShortCodeSecurity = exports.ListShortCodeQueryParams = exports.ListShortCodePathParams = exports.ListShortCodeServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListShortCodeServerList = [
    "https://proxy.twilio.com",
];
var ListShortCodePathParams = /** @class */ (function (_super) {
    __extends(ListShortCodePathParams, _super);
    function ListShortCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListShortCodePathParams.prototype, "serviceSid", void 0);
    return ListShortCodePathParams;
}(utils_1.SpeakeasyBase));
exports.ListShortCodePathParams = ListShortCodePathParams;
var ListShortCodeQueryParams = /** @class */ (function (_super) {
    __extends(ListShortCodeQueryParams, _super);
    function ListShortCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListShortCodeQueryParams.prototype, "pageSize", void 0);
    return ListShortCodeQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListShortCodeQueryParams = ListShortCodeQueryParams;
var ListShortCodeSecurity = /** @class */ (function (_super) {
    __extends(ListShortCodeSecurity, _super);
    function ListShortCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListShortCodeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListShortCodeSecurity;
}(utils_1.SpeakeasyBase));
exports.ListShortCodeSecurity = ListShortCodeSecurity;
var ListShortCodeListShortCodeResponseMeta = /** @class */ (function (_super) {
    __extends(ListShortCodeListShortCodeResponseMeta, _super);
    function ListShortCodeListShortCodeResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListShortCodeListShortCodeResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListShortCodeListShortCodeResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponseMeta.prototype, "url", void 0);
    return ListShortCodeListShortCodeResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListShortCodeListShortCodeResponseMeta = ListShortCodeListShortCodeResponseMeta;
var ListShortCodeListShortCodeResponse = /** @class */ (function (_super) {
    __extends(ListShortCodeListShortCodeResponse, _super);
    function ListShortCodeListShortCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListShortCodeListShortCodeResponseMeta)
    ], ListShortCodeListShortCodeResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=short_codes", elemType: shared.ProxyV1ServiceShortCode }),
        __metadata("design:type", Array)
    ], ListShortCodeListShortCodeResponse.prototype, "shortCodes", void 0);
    return ListShortCodeListShortCodeResponse;
}(utils_1.SpeakeasyBase));
exports.ListShortCodeListShortCodeResponse = ListShortCodeListShortCodeResponse;
var ListShortCodeRequest = /** @class */ (function (_super) {
    __extends(ListShortCodeRequest, _super);
    function ListShortCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListShortCodeRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListShortCodePathParams)
    ], ListShortCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListShortCodeQueryParams)
    ], ListShortCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListShortCodeSecurity)
    ], ListShortCodeRequest.prototype, "security", void 0);
    return ListShortCodeRequest;
}(utils_1.SpeakeasyBase));
exports.ListShortCodeRequest = ListShortCodeRequest;
var ListShortCodeResponse = /** @class */ (function (_super) {
    __extends(ListShortCodeResponse, _super);
    function ListShortCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListShortCodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListShortCodeListShortCodeResponse)
    ], ListShortCodeResponse.prototype, "listShortCodeResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListShortCodeResponse.prototype, "statusCode", void 0);
    return ListShortCodeResponse;
}(utils_1.SpeakeasyBase));
exports.ListShortCodeResponse = ListShortCodeResponse;
