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
exports.ListNetworkAccessProfileNetworkResponse = exports.ListNetworkAccessProfileNetworkRequest = exports.ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse = exports.ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta = exports.ListNetworkAccessProfileNetworkSecurity = exports.ListNetworkAccessProfileNetworkQueryParams = exports.ListNetworkAccessProfileNetworkPathParams = exports.ListNetworkAccessProfileNetworkServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListNetworkAccessProfileNetworkServerList = [
    "https://supersim.twilio.com",
];
var ListNetworkAccessProfileNetworkPathParams = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkPathParams, _super);
    function ListNetworkAccessProfileNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkPathParams.prototype, "networkAccessProfileSid", void 0);
    return ListNetworkAccessProfileNetworkPathParams;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileNetworkPathParams = ListNetworkAccessProfileNetworkPathParams;
var ListNetworkAccessProfileNetworkQueryParams = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkQueryParams, _super);
    function ListNetworkAccessProfileNetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkQueryParams.prototype, "pageSize", void 0);
    return ListNetworkAccessProfileNetworkQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileNetworkQueryParams = ListNetworkAccessProfileNetworkQueryParams;
var ListNetworkAccessProfileNetworkSecurity = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkSecurity, _super);
    function ListNetworkAccessProfileNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListNetworkAccessProfileNetworkSecurity.prototype, "accountSidAuthToken", void 0);
    return ListNetworkAccessProfileNetworkSecurity;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileNetworkSecurity = ListNetworkAccessProfileNetworkSecurity;
var ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta, _super);
    function ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta.prototype, "url", void 0);
    return ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta = ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta;
var ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse, _super);
    function ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networks", elemType: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork }),
        __metadata("design:type", Array)
    ], ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse.prototype, "networks", void 0);
    return ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse = ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse;
var ListNetworkAccessProfileNetworkRequest = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkRequest, _super);
    function ListNetworkAccessProfileNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkAccessProfileNetworkPathParams)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkAccessProfileNetworkQueryParams)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkAccessProfileNetworkSecurity)
    ], ListNetworkAccessProfileNetworkRequest.prototype, "security", void 0);
    return ListNetworkAccessProfileNetworkRequest;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileNetworkRequest = ListNetworkAccessProfileNetworkRequest;
var ListNetworkAccessProfileNetworkResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileNetworkResponse, _super);
    function ListNetworkAccessProfileNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse)
    ], ListNetworkAccessProfileNetworkResponse.prototype, "listNetworkAccessProfileNetworkResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileNetworkResponse.prototype, "statusCode", void 0);
    return ListNetworkAccessProfileNetworkResponse;
}(utils_1.SpeakeasyBase));
exports.ListNetworkAccessProfileNetworkResponse = ListNetworkAccessProfileNetworkResponse;
