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
exports.ListAssetResponse = exports.ListAssetRequest = exports.ListAssetListAssetResponse = exports.ListAssetListAssetResponseMeta = exports.ListAssetSecurity = exports.ListAssetQueryParams = exports.ListAssetPathParams = exports.ListAssetServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListAssetServerList = [
    "https://serverless.twilio.com",
];
var ListAssetPathParams = /** @class */ (function (_super) {
    __extends(ListAssetPathParams, _super);
    function ListAssetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListAssetPathParams.prototype, "serviceSid", void 0);
    return ListAssetPathParams;
}(utils_1.SpeakeasyBase));
exports.ListAssetPathParams = ListAssetPathParams;
var ListAssetQueryParams = /** @class */ (function (_super) {
    __extends(ListAssetQueryParams, _super);
    function ListAssetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAssetQueryParams.prototype, "pageSize", void 0);
    return ListAssetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAssetQueryParams = ListAssetQueryParams;
var ListAssetSecurity = /** @class */ (function (_super) {
    __extends(ListAssetSecurity, _super);
    function ListAssetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAssetSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAssetSecurity;
}(utils_1.SpeakeasyBase));
exports.ListAssetSecurity = ListAssetSecurity;
var ListAssetListAssetResponseMeta = /** @class */ (function (_super) {
    __extends(ListAssetListAssetResponseMeta, _super);
    function ListAssetListAssetResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAssetListAssetResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAssetListAssetResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "url", void 0);
    return ListAssetListAssetResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListAssetListAssetResponseMeta = ListAssetListAssetResponseMeta;
var ListAssetListAssetResponse = /** @class */ (function (_super) {
    __extends(ListAssetListAssetResponse, _super);
    function ListAssetListAssetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets", elemType: shared.ServerlessV1ServiceAsset }),
        __metadata("design:type", Array)
    ], ListAssetListAssetResponse.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAssetListAssetResponseMeta)
    ], ListAssetListAssetResponse.prototype, "meta", void 0);
    return ListAssetListAssetResponse;
}(utils_1.SpeakeasyBase));
exports.ListAssetListAssetResponse = ListAssetListAssetResponse;
var ListAssetRequest = /** @class */ (function (_super) {
    __extends(ListAssetRequest, _super);
    function ListAssetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAssetRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssetPathParams)
    ], ListAssetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssetQueryParams)
    ], ListAssetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssetSecurity)
    ], ListAssetRequest.prototype, "security", void 0);
    return ListAssetRequest;
}(utils_1.SpeakeasyBase));
exports.ListAssetRequest = ListAssetRequest;
var ListAssetResponse = /** @class */ (function (_super) {
    __extends(ListAssetResponse, _super);
    function ListAssetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAssetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssetListAssetResponse)
    ], ListAssetResponse.prototype, "listAssetResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAssetResponse.prototype, "statusCode", void 0);
    return ListAssetResponse;
}(utils_1.SpeakeasyBase));
exports.ListAssetResponse = ListAssetResponse;
