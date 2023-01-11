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
exports.ListSupportingDocumentResponse = exports.ListSupportingDocumentRequest = exports.ListSupportingDocumentListSupportingDocumentResponse = exports.ListSupportingDocumentListSupportingDocumentResponseMeta = exports.ListSupportingDocumentSecurity = exports.ListSupportingDocumentQueryParams = exports.ListSupportingDocumentServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSupportingDocumentServerList = [
    "https://trusthub.twilio.com",
];
var ListSupportingDocumentQueryParams = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentQueryParams, _super);
    function ListSupportingDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSupportingDocumentQueryParams.prototype, "pageSize", void 0);
    return ListSupportingDocumentQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSupportingDocumentQueryParams = ListSupportingDocumentQueryParams;
var ListSupportingDocumentSecurity = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentSecurity, _super);
    function ListSupportingDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSupportingDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSupportingDocumentSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSupportingDocumentSecurity = ListSupportingDocumentSecurity;
var ListSupportingDocumentListSupportingDocumentResponseMeta = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentListSupportingDocumentResponseMeta, _super);
    function ListSupportingDocumentListSupportingDocumentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "url", void 0);
    return ListSupportingDocumentListSupportingDocumentResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSupportingDocumentListSupportingDocumentResponseMeta = ListSupportingDocumentListSupportingDocumentResponseMeta;
var ListSupportingDocumentListSupportingDocumentResponse = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentListSupportingDocumentResponse, _super);
    function ListSupportingDocumentListSupportingDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSupportingDocumentListSupportingDocumentResponseMeta)
    ], ListSupportingDocumentListSupportingDocumentResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.TrusthubV1SupportingDocument }),
        __metadata("design:type", Array)
    ], ListSupportingDocumentListSupportingDocumentResponse.prototype, "results", void 0);
    return ListSupportingDocumentListSupportingDocumentResponse;
}(utils_1.SpeakeasyBase));
exports.ListSupportingDocumentListSupportingDocumentResponse = ListSupportingDocumentListSupportingDocumentResponse;
var ListSupportingDocumentRequest = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentRequest, _super);
    function ListSupportingDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSupportingDocumentRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSupportingDocumentQueryParams)
    ], ListSupportingDocumentRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSupportingDocumentSecurity)
    ], ListSupportingDocumentRequest.prototype, "security", void 0);
    return ListSupportingDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.ListSupportingDocumentRequest = ListSupportingDocumentRequest;
var ListSupportingDocumentResponse = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentResponse, _super);
    function ListSupportingDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSupportingDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSupportingDocumentListSupportingDocumentResponse)
    ], ListSupportingDocumentResponse.prototype, "listSupportingDocumentResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSupportingDocumentResponse.prototype, "statusCode", void 0);
    return ListSupportingDocumentResponse;
}(utils_1.SpeakeasyBase));
exports.ListSupportingDocumentResponse = ListSupportingDocumentResponse;
