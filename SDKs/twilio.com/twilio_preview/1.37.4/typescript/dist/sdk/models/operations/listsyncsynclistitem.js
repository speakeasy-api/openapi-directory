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
exports.ListSyncSyncListItemResponse = exports.ListSyncSyncListItemRequest = exports.ListSyncSyncListItemListSyncSyncListItemResponse = exports.ListSyncSyncListItemListSyncSyncListItemResponseMeta = exports.ListSyncSyncListItemSecurity = exports.ListSyncSyncListItemQueryParams = exports.ListSyncSyncListItemPathParams = exports.ListSyncSyncListItemServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSyncSyncListItemServerList = [
    "https://preview.twilio.com",
];
var ListSyncSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncListItemPathParams, _super);
    function ListSyncSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemPathParams.prototype, "serviceSid", void 0);
    return ListSyncSyncListItemPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncListItemPathParams = ListSyncSyncListItemPathParams;
var ListSyncSyncListItemQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncListItemQueryParams, _super);
    function ListSyncSyncListItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Bounds" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemQueryParams.prototype, "bounds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=From" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListItemQueryParams.prototype, "pageSize", void 0);
    return ListSyncSyncListItemQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncListItemQueryParams = ListSyncSyncListItemQueryParams;
var ListSyncSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(ListSyncSyncListItemSecurity, _super);
    function ListSyncSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncSyncListItemSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncListItemSecurity = ListSyncSyncListItemSecurity;
var ListSyncSyncListItemListSyncSyncListItemResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncSyncListItemListSyncSyncListItemResponseMeta, _super);
    function ListSyncSyncListItemListSyncSyncListItemResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemListSyncSyncListItemResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemListSyncSyncListItemResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemListSyncSyncListItemResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListItemListSyncSyncListItemResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListItemListSyncSyncListItemResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemListSyncSyncListItemResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListItemListSyncSyncListItemResponseMeta.prototype, "url", void 0);
    return ListSyncSyncListItemListSyncSyncListItemResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncListItemListSyncSyncListItemResponseMeta = ListSyncSyncListItemListSyncSyncListItemResponseMeta;
var ListSyncSyncListItemListSyncSyncListItemResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncListItemListSyncSyncListItemResponse, _super);
    function ListSyncSyncListItemListSyncSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.PreviewSyncServiceSyncListSyncListItem }),
        __metadata("design:type", Array)
    ], ListSyncSyncListItemListSyncSyncListItemResponse.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncSyncListItemListSyncSyncListItemResponseMeta)
    ], ListSyncSyncListItemListSyncSyncListItemResponse.prototype, "meta", void 0);
    return ListSyncSyncListItemListSyncSyncListItemResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncListItemListSyncSyncListItemResponse = ListSyncSyncListItemListSyncSyncListItemResponse;
var ListSyncSyncListItemRequest = /** @class */ (function (_super) {
    __extends(ListSyncSyncListItemRequest, _super);
    function ListSyncSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncSyncListItemRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncListItemPathParams)
    ], ListSyncSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncListItemQueryParams)
    ], ListSyncSyncListItemRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncListItemSecurity)
    ], ListSyncSyncListItemRequest.prototype, "security", void 0);
    return ListSyncSyncListItemRequest;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncListItemRequest = ListSyncSyncListItemRequest;
var ListSyncSyncListItemResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncListItemResponse, _super);
    function ListSyncSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSyncSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSyncSyncListItemListSyncSyncListItemResponse)
    ], ListSyncSyncListItemResponse.prototype, "listSyncSyncListItemResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSyncSyncListItemResponse.prototype, "statusCode", void 0);
    return ListSyncSyncListItemResponse;
}(utils_1.SpeakeasyBase));
exports.ListSyncSyncListItemResponse = ListSyncSyncListItemResponse;
