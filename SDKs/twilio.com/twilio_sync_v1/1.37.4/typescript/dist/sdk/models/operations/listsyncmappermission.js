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
exports.ListSyncMapPermissionResponse = exports.ListSyncMapPermissionRequest = exports.ListSyncMapPermissionListSyncMapPermissionResponse = exports.ListSyncMapPermissionListSyncMapPermissionResponseMeta = exports.ListSyncMapPermissionSecurity = exports.ListSyncMapPermissionQueryParams = exports.ListSyncMapPermissionPathParams = exports.ListSyncMapPermissionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSyncMapPermissionServerList = [
    "https://sync.twilio.com",
];
var ListSyncMapPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionPathParams, _super);
    function ListSyncMapPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionPathParams.prototype, "mapSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionPathParams.prototype, "serviceSid", void 0);
    return ListSyncMapPermissionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPermissionPathParams = ListSyncMapPermissionPathParams;
var ListSyncMapPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionQueryParams, _super);
    function ListSyncMapPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionQueryParams.prototype, "pageSize", void 0);
    return ListSyncMapPermissionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPermissionQueryParams = ListSyncMapPermissionQueryParams;
var ListSyncMapPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionSecurity, _super);
    function ListSyncMapPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncMapPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncMapPermissionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPermissionSecurity = ListSyncMapPermissionSecurity;
var ListSyncMapPermissionListSyncMapPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionListSyncMapPermissionResponseMeta, _super);
    function ListSyncMapPermissionListSyncMapPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "url", void 0);
    return ListSyncMapPermissionListSyncMapPermissionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPermissionListSyncMapPermissionResponseMeta = ListSyncMapPermissionListSyncMapPermissionResponseMeta;
var ListSyncMapPermissionListSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionListSyncMapPermissionResponse, _super);
    function ListSyncMapPermissionListSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncMapPermissionListSyncMapPermissionResponseMeta)
    ], ListSyncMapPermissionListSyncMapPermissionResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions", elemType: shared.SyncV1ServiceSyncMapSyncMapPermission }),
        __metadata("design:type", Array)
    ], ListSyncMapPermissionListSyncMapPermissionResponse.prototype, "permissions", void 0);
    return ListSyncMapPermissionListSyncMapPermissionResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPermissionListSyncMapPermissionResponse = ListSyncMapPermissionListSyncMapPermissionResponse;
var ListSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionRequest, _super);
    function ListSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncMapPermissionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapPermissionPathParams)
    ], ListSyncMapPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapPermissionQueryParams)
    ], ListSyncMapPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapPermissionSecurity)
    ], ListSyncMapPermissionRequest.prototype, "security", void 0);
    return ListSyncMapPermissionRequest;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPermissionRequest = ListSyncMapPermissionRequest;
var ListSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionResponse, _super);
    function ListSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncMapPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapPermissionListSyncMapPermissionResponse)
    ], ListSyncMapPermissionResponse.prototype, "listSyncMapPermissionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionResponse.prototype, "statusCode", void 0);
    return ListSyncMapPermissionResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPermissionResponse = ListSyncMapPermissionResponse;
