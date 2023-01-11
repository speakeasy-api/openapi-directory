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
exports.ListDocumentPermissionResponse = exports.ListDocumentPermissionRequest = exports.ListDocumentPermissionListDocumentPermissionResponse = exports.ListDocumentPermissionListDocumentPermissionResponseMeta = exports.ListDocumentPermissionSecurity = exports.ListDocumentPermissionQueryParams = exports.ListDocumentPermissionPathParams = exports.ListDocumentPermissionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListDocumentPermissionServerList = [
    "https://sync.twilio.com",
];
var ListDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListDocumentPermissionPathParams, _super);
    function ListDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], ListDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return ListDocumentPermissionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDocumentPermissionPathParams = ListDocumentPermissionPathParams;
var ListDocumentPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListDocumentPermissionQueryParams, _super);
    function ListDocumentPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDocumentPermissionQueryParams.prototype, "pageSize", void 0);
    return ListDocumentPermissionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDocumentPermissionQueryParams = ListDocumentPermissionQueryParams;
var ListDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListDocumentPermissionSecurity, _super);
    function ListDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDocumentPermissionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListDocumentPermissionSecurity = ListDocumentPermissionSecurity;
var ListDocumentPermissionListDocumentPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListDocumentPermissionListDocumentPermissionResponseMeta, _super);
    function ListDocumentPermissionListDocumentPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDocumentPermissionListDocumentPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDocumentPermissionListDocumentPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDocumentPermissionListDocumentPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDocumentPermissionListDocumentPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDocumentPermissionListDocumentPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDocumentPermissionListDocumentPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDocumentPermissionListDocumentPermissionResponseMeta.prototype, "url", void 0);
    return ListDocumentPermissionListDocumentPermissionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListDocumentPermissionListDocumentPermissionResponseMeta = ListDocumentPermissionListDocumentPermissionResponseMeta;
var ListDocumentPermissionListDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(ListDocumentPermissionListDocumentPermissionResponse, _super);
    function ListDocumentPermissionListDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDocumentPermissionListDocumentPermissionResponseMeta)
    ], ListDocumentPermissionListDocumentPermissionResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions", elemType: shared.SyncV1ServiceDocumentDocumentPermission }),
        __metadata("design:type", Array)
    ], ListDocumentPermissionListDocumentPermissionResponse.prototype, "permissions", void 0);
    return ListDocumentPermissionListDocumentPermissionResponse;
}(utils_1.SpeakeasyBase));
exports.ListDocumentPermissionListDocumentPermissionResponse = ListDocumentPermissionListDocumentPermissionResponse;
var ListDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(ListDocumentPermissionRequest, _super);
    function ListDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDocumentPermissionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDocumentPermissionPathParams)
    ], ListDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDocumentPermissionQueryParams)
    ], ListDocumentPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDocumentPermissionSecurity)
    ], ListDocumentPermissionRequest.prototype, "security", void 0);
    return ListDocumentPermissionRequest;
}(utils_1.SpeakeasyBase));
exports.ListDocumentPermissionRequest = ListDocumentPermissionRequest;
var ListDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(ListDocumentPermissionResponse, _super);
    function ListDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDocumentPermissionListDocumentPermissionResponse)
    ], ListDocumentPermissionResponse.prototype, "listDocumentPermissionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDocumentPermissionResponse.prototype, "statusCode", void 0);
    return ListDocumentPermissionResponse;
}(utils_1.SpeakeasyBase));
exports.ListDocumentPermissionResponse = ListDocumentPermissionResponse;
