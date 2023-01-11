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
exports.ListSyncMapResponse = exports.ListSyncMapRequest = exports.ListSyncMapListSyncMapResponse = exports.ListSyncMapListSyncMapResponseMeta = exports.ListSyncMapSecurity = exports.ListSyncMapQueryParams = exports.ListSyncMapPathParams = exports.ListSyncMapServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSyncMapServerList = [
    "https://sync.twilio.com",
];
var ListSyncMapPathParams = /** @class */ (function (_super) {
    __extends(ListSyncMapPathParams, _super);
    function ListSyncMapPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncMapPathParams.prototype, "serviceSid", void 0);
    return ListSyncMapPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapPathParams = ListSyncMapPathParams;
var ListSyncMapQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncMapQueryParams, _super);
    function ListSyncMapQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncMapQueryParams.prototype, "pageSize", void 0);
    return ListSyncMapQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapQueryParams = ListSyncMapQueryParams;
var ListSyncMapSecurity = /** @class */ (function (_super) {
    __extends(ListSyncMapSecurity, _super);
    function ListSyncMapSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncMapSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncMapSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapSecurity = ListSyncMapSecurity;
var ListSyncMapListSyncMapResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncMapListSyncMapResponseMeta, _super);
    function ListSyncMapListSyncMapResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapListSyncMapResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncMapListSyncMapResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapListSyncMapResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncMapListSyncMapResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncMapListSyncMapResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapListSyncMapResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncMapListSyncMapResponseMeta.prototype, "url", void 0);
    return ListSyncMapListSyncMapResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapListSyncMapResponseMeta = ListSyncMapListSyncMapResponseMeta;
var ListSyncMapListSyncMapResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapListSyncMapResponse, _super);
    function ListSyncMapListSyncMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maps", elemType: shared.SyncV1ServiceSyncMap }),
        __metadata("design:type", Array)
    ], ListSyncMapListSyncMapResponse.prototype, "maps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncMapListSyncMapResponseMeta)
    ], ListSyncMapListSyncMapResponse.prototype, "meta", void 0);
    return ListSyncMapListSyncMapResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapListSyncMapResponse = ListSyncMapListSyncMapResponse;
var ListSyncMapRequest = /** @class */ (function (_super) {
    __extends(ListSyncMapRequest, _super);
    function ListSyncMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncMapRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapPathParams)
    ], ListSyncMapRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapQueryParams)
    ], ListSyncMapRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapSecurity)
    ], ListSyncMapRequest.prototype, "security", void 0);
    return ListSyncMapRequest;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapRequest = ListSyncMapRequest;
var ListSyncMapResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapResponse, _super);
    function ListSyncMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncMapResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncMapListSyncMapResponse)
    ], ListSyncMapResponse.prototype, "listSyncMapResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSyncMapResponse.prototype, "statusCode", void 0);
    return ListSyncMapResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncMapResponse = ListSyncMapResponse;
