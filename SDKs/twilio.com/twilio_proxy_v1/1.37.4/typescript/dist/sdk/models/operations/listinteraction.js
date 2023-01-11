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
exports.ListInteractionResponse = exports.ListInteractionRequest = exports.ListInteractionListInteractionResponse = exports.ListInteractionListInteractionResponseMeta = exports.ListInteractionSecurity = exports.ListInteractionQueryParams = exports.ListInteractionPathParams = exports.ListInteractionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListInteractionServerList = [
    "https://proxy.twilio.com",
];
var ListInteractionPathParams = /** @class */ (function (_super) {
    __extends(ListInteractionPathParams, _super);
    function ListInteractionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListInteractionPathParams.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=SessionSid" }),
        __metadata("design:type", String)
    ], ListInteractionPathParams.prototype, "sessionSid", void 0);
    return ListInteractionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListInteractionPathParams = ListInteractionPathParams;
var ListInteractionQueryParams = /** @class */ (function (_super) {
    __extends(ListInteractionQueryParams, _super);
    function ListInteractionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListInteractionQueryParams.prototype, "pageSize", void 0);
    return ListInteractionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListInteractionQueryParams = ListInteractionQueryParams;
var ListInteractionSecurity = /** @class */ (function (_super) {
    __extends(ListInteractionSecurity, _super);
    function ListInteractionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListInteractionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListInteractionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListInteractionSecurity = ListInteractionSecurity;
var ListInteractionListInteractionResponseMeta = /** @class */ (function (_super) {
    __extends(ListInteractionListInteractionResponseMeta, _super);
    function ListInteractionListInteractionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionListInteractionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListInteractionListInteractionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionListInteractionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListInteractionListInteractionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListInteractionListInteractionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListInteractionListInteractionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListInteractionListInteractionResponseMeta.prototype, "url", void 0);
    return ListInteractionListInteractionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListInteractionListInteractionResponseMeta = ListInteractionListInteractionResponseMeta;
var ListInteractionListInteractionResponse = /** @class */ (function (_super) {
    __extends(ListInteractionListInteractionResponse, _super);
    function ListInteractionListInteractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions", elemType: shared.ProxyV1ServiceSessionInteraction }),
        __metadata("design:type", Array)
    ], ListInteractionListInteractionResponse.prototype, "interactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListInteractionListInteractionResponseMeta)
    ], ListInteractionListInteractionResponse.prototype, "meta", void 0);
    return ListInteractionListInteractionResponse;
}(utils_1.SpeakeasyBase));
exports.ListInteractionListInteractionResponse = ListInteractionListInteractionResponse;
var ListInteractionRequest = /** @class */ (function (_super) {
    __extends(ListInteractionRequest, _super);
    function ListInteractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListInteractionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInteractionPathParams)
    ], ListInteractionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInteractionQueryParams)
    ], ListInteractionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInteractionSecurity)
    ], ListInteractionRequest.prototype, "security", void 0);
    return ListInteractionRequest;
}(utils_1.SpeakeasyBase));
exports.ListInteractionRequest = ListInteractionRequest;
var ListInteractionResponse = /** @class */ (function (_super) {
    __extends(ListInteractionResponse, _super);
    function ListInteractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListInteractionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInteractionListInteractionResponse)
    ], ListInteractionResponse.prototype, "listInteractionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListInteractionResponse.prototype, "statusCode", void 0);
    return ListInteractionResponse;
}(utils_1.SpeakeasyBase));
exports.ListInteractionResponse = ListInteractionResponse;
