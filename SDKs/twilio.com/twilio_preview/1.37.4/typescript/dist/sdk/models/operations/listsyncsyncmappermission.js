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
exports.ListSyncSyncMapPermissionResponse = exports.ListSyncSyncMapPermissionRequest = exports.ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse = exports.ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta = exports.ListSyncSyncMapPermissionSecurity = exports.ListSyncSyncMapPermissionQueryParams = exports.ListSyncSyncMapPermissionPathParams = exports.ListSyncSyncMapPermissionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSyncSyncMapPermissionServerList = [
    "https://preview.twilio.com",
];
var ListSyncSyncMapPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionPathParams, _super);
    function ListSyncSyncMapPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionPathParams.prototype, "mapSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionPathParams.prototype, "serviceSid", void 0);
    return ListSyncSyncMapPermissionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncMapPermissionPathParams = ListSyncSyncMapPermissionPathParams;
var ListSyncSyncMapPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionQueryParams, _super);
    function ListSyncSyncMapPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionQueryParams.prototype, "pageSize", void 0);
    return ListSyncSyncMapPermissionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncMapPermissionQueryParams = ListSyncSyncMapPermissionQueryParams;
var ListSyncSyncMapPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionSecurity, _super);
    function ListSyncSyncMapPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncSyncMapPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncSyncMapPermissionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncMapPermissionSecurity = ListSyncSyncMapPermissionSecurity;
var ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta, _super);
    function ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "url", void 0);
    return ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta = ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta;
var ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse, _super);
    function ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceSyncMapSyncMapPermission }),
        __metadata("design:type", Array)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse.prototype, "permissions", void 0);
    return ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse = ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse;
var ListSyncSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionRequest, _super);
    function ListSyncSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncMapPermissionPathParams)
    ], ListSyncSyncMapPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncMapPermissionQueryParams)
    ], ListSyncSyncMapPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncMapPermissionSecurity)
    ], ListSyncSyncMapPermissionRequest.prototype, "security", void 0);
    return ListSyncSyncMapPermissionRequest;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncMapPermissionRequest = ListSyncSyncMapPermissionRequest;
var ListSyncSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionResponse, _super);
    function ListSyncSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse)
    ], ListSyncSyncMapPermissionResponse.prototype, "listSyncSyncMapPermissionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionResponse.prototype, "statusCode", void 0);
    return ListSyncSyncMapPermissionResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncMapPermissionResponse = ListSyncSyncMapPermissionResponse;
