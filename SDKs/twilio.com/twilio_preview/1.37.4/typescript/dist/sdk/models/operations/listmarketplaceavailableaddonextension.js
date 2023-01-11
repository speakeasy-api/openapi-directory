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
exports.ListMarketplaceAvailableAddOnExtensionResponse = exports.ListMarketplaceAvailableAddOnExtensionRequest = exports.ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse = exports.ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta = exports.ListMarketplaceAvailableAddOnExtensionSecurity = exports.ListMarketplaceAvailableAddOnExtensionQueryParams = exports.ListMarketplaceAvailableAddOnExtensionPathParams = exports.ListMarketplaceAvailableAddOnExtensionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListMarketplaceAvailableAddOnExtensionServerList = [
    "https://preview.twilio.com",
];
var ListMarketplaceAvailableAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnExtensionPathParams, _super);
    function ListMarketplaceAvailableAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AvailableAddOnSid" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionPathParams.prototype, "availableAddOnSid", void 0);
    return ListMarketplaceAvailableAddOnExtensionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceAvailableAddOnExtensionPathParams = ListMarketplaceAvailableAddOnExtensionPathParams;
var ListMarketplaceAvailableAddOnExtensionQueryParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnExtensionQueryParams, _super);
    function ListMarketplaceAvailableAddOnExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnExtensionQueryParams.prototype, "pageSize", void 0);
    return ListMarketplaceAvailableAddOnExtensionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceAvailableAddOnExtensionQueryParams = ListMarketplaceAvailableAddOnExtensionQueryParams;
var ListMarketplaceAvailableAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnExtensionSecurity, _super);
    function ListMarketplaceAvailableAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMarketplaceAvailableAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMarketplaceAvailableAddOnExtensionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceAvailableAddOnExtensionSecurity = ListMarketplaceAvailableAddOnExtensionSecurity;
var ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta, _super);
    function ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta.prototype, "url", void 0);
    return ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta = ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta;
var ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse, _super);
    function ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extensions", elemType: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension }),
        __metadata("design:type", Array)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse.prototype, "extensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta)
    ], ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse.prototype, "meta", void 0);
    return ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse = ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse;
var ListMarketplaceAvailableAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnExtensionRequest, _super);
    function ListMarketplaceAvailableAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceAvailableAddOnExtensionPathParams)
    ], ListMarketplaceAvailableAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceAvailableAddOnExtensionQueryParams)
    ], ListMarketplaceAvailableAddOnExtensionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceAvailableAddOnExtensionSecurity)
    ], ListMarketplaceAvailableAddOnExtensionRequest.prototype, "security", void 0);
    return ListMarketplaceAvailableAddOnExtensionRequest;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceAvailableAddOnExtensionRequest = ListMarketplaceAvailableAddOnExtensionRequest;
var ListMarketplaceAvailableAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnExtensionResponse, _super);
    function ListMarketplaceAvailableAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse)
    ], ListMarketplaceAvailableAddOnExtensionResponse.prototype, "listMarketplaceAvailableAddOnExtensionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnExtensionResponse.prototype, "statusCode", void 0);
    return ListMarketplaceAvailableAddOnExtensionResponse;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceAvailableAddOnExtensionResponse = ListMarketplaceAvailableAddOnExtensionResponse;
