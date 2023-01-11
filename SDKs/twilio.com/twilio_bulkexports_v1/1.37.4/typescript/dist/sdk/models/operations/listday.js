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
exports.ListDayResponse = exports.ListDayRequest = exports.ListDayListDayResponse = exports.ListDayListDayResponseMeta = exports.ListDaySecurity = exports.ListDayQueryParams = exports.ListDayPathParams = exports.ListDayServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListDayServerList = [
    "https://bulkexports.twilio.com",
];
var ListDayPathParams = /** @class */ (function (_super) {
    __extends(ListDayPathParams, _super);
    function ListDayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ResourceType" }),
        __metadata("design:type", String)
    ], ListDayPathParams.prototype, "resourceType", void 0);
    return ListDayPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDayPathParams = ListDayPathParams;
var ListDayQueryParams = /** @class */ (function (_super) {
    __extends(ListDayQueryParams, _super);
    function ListDayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDayQueryParams.prototype, "pageSize", void 0);
    return ListDayQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDayQueryParams = ListDayQueryParams;
var ListDaySecurity = /** @class */ (function (_super) {
    __extends(ListDaySecurity, _super);
    function ListDaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDaySecurity.prototype, "accountSidAuthToken", void 0);
    return ListDaySecurity;
}(utils_1.SpeakeasyBase));
exports.ListDaySecurity = ListDaySecurity;
var ListDayListDayResponseMeta = /** @class */ (function (_super) {
    __extends(ListDayListDayResponseMeta, _super);
    function ListDayListDayResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDayListDayResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDayListDayResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDayListDayResponseMeta.prototype, "url", void 0);
    return ListDayListDayResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListDayListDayResponseMeta = ListDayListDayResponseMeta;
var ListDayListDayResponse = /** @class */ (function (_super) {
    __extends(ListDayListDayResponse, _super);
    function ListDayListDayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=days", elemType: shared.BulkexportsV1ExportDay }),
        __metadata("design:type", Array)
    ], ListDayListDayResponse.prototype, "days", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDayListDayResponseMeta)
    ], ListDayListDayResponse.prototype, "meta", void 0);
    return ListDayListDayResponse;
}(utils_1.SpeakeasyBase));
exports.ListDayListDayResponse = ListDayListDayResponse;
var ListDayRequest = /** @class */ (function (_super) {
    __extends(ListDayRequest, _super);
    function ListDayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDayRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDayPathParams)
    ], ListDayRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDayQueryParams)
    ], ListDayRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDaySecurity)
    ], ListDayRequest.prototype, "security", void 0);
    return ListDayRequest;
}(utils_1.SpeakeasyBase));
exports.ListDayRequest = ListDayRequest;
var ListDayResponse = /** @class */ (function (_super) {
    __extends(ListDayResponse, _super);
    function ListDayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDayResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDayListDayResponse)
    ], ListDayResponse.prototype, "listDayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDayResponse.prototype, "statusCode", void 0);
    return ListDayResponse;
}(utils_1.SpeakeasyBase));
exports.ListDayResponse = ListDayResponse;
