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
exports.ListMarketplaceInstalledAddOnExtensionResponse = exports.ListMarketplaceInstalledAddOnExtensionRequest = exports.ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse = exports.ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta = exports.ListMarketplaceInstalledAddOnExtensionSecurity = exports.ListMarketplaceInstalledAddOnExtensionQueryParams = exports.ListMarketplaceInstalledAddOnExtensionPathParams = exports.ListMarketplaceInstalledAddOnExtensionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListMarketplaceInstalledAddOnExtensionServerList = [
    "https://preview.twilio.com",
];
var ListMarketplaceInstalledAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionPathParams, _super);
    function ListMarketplaceInstalledAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=InstalledAddOnSid" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionPathParams.prototype, "installedAddOnSid", void 0);
    return ListMarketplaceInstalledAddOnExtensionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceInstalledAddOnExtensionPathParams = ListMarketplaceInstalledAddOnExtensionPathParams;
var ListMarketplaceInstalledAddOnExtensionQueryParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionQueryParams, _super);
    function ListMarketplaceInstalledAddOnExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionQueryParams.prototype, "pageSize", void 0);
    return ListMarketplaceInstalledAddOnExtensionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceInstalledAddOnExtensionQueryParams = ListMarketplaceInstalledAddOnExtensionQueryParams;
var ListMarketplaceInstalledAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionSecurity, _super);
    function ListMarketplaceInstalledAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMarketplaceInstalledAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMarketplaceInstalledAddOnExtensionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceInstalledAddOnExtensionSecurity = ListMarketplaceInstalledAddOnExtensionSecurity;
var ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta, _super);
    function ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "url", void 0);
    return ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta = ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta;
var ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse, _super);
    function ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extensions", elemType: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension }),
        __metadata("design:type", Array)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse.prototype, "extensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse.prototype, "meta", void 0);
    return ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse = ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse;
var ListMarketplaceInstalledAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionRequest, _super);
    function ListMarketplaceInstalledAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionPathParams)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionQueryParams)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionSecurity)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "security", void 0);
    return ListMarketplaceInstalledAddOnExtensionRequest;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceInstalledAddOnExtensionRequest = ListMarketplaceInstalledAddOnExtensionRequest;
var ListMarketplaceInstalledAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionResponse, _super);
    function ListMarketplaceInstalledAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse)
    ], ListMarketplaceInstalledAddOnExtensionResponse.prototype, "listMarketplaceInstalledAddOnExtensionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionResponse.prototype, "statusCode", void 0);
    return ListMarketplaceInstalledAddOnExtensionResponse;
}(utils_1.SpeakeasyBase));
exports.ListMarketplaceInstalledAddOnExtensionResponse = ListMarketplaceInstalledAddOnExtensionResponse;
