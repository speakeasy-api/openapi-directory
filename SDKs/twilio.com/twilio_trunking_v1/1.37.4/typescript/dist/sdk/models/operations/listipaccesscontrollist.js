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
exports.ListIpAccessControlListResponse = exports.ListIpAccessControlListRequest = exports.ListIpAccessControlListListIpAccessControlListResponse = exports.ListIpAccessControlListListIpAccessControlListResponseMeta = exports.ListIpAccessControlListSecurity = exports.ListIpAccessControlListQueryParams = exports.ListIpAccessControlListPathParams = exports.ListIpAccessControlListServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListIpAccessControlListServerList = [
    "https://trunking.twilio.com",
];
var ListIpAccessControlListPathParams = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListPathParams, _super);
    function ListIpAccessControlListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListPathParams.prototype, "trunkSid", void 0);
    return ListIpAccessControlListPathParams;
}(utils_1.SpeakeasyBase));
exports.ListIpAccessControlListPathParams = ListIpAccessControlListPathParams;
var ListIpAccessControlListQueryParams = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListQueryParams, _super);
    function ListIpAccessControlListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIpAccessControlListQueryParams.prototype, "pageSize", void 0);
    return ListIpAccessControlListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListIpAccessControlListQueryParams = ListIpAccessControlListQueryParams;
var ListIpAccessControlListSecurity = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListSecurity, _super);
    function ListIpAccessControlListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIpAccessControlListSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIpAccessControlListSecurity;
}(utils_1.SpeakeasyBase));
exports.ListIpAccessControlListSecurity = ListIpAccessControlListSecurity;
var ListIpAccessControlListListIpAccessControlListResponseMeta = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListListIpAccessControlListResponseMeta, _super);
    function ListIpAccessControlListListIpAccessControlListResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "url", void 0);
    return ListIpAccessControlListListIpAccessControlListResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListIpAccessControlListListIpAccessControlListResponseMeta = ListIpAccessControlListListIpAccessControlListResponseMeta;
var ListIpAccessControlListListIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListListIpAccessControlListResponse, _super);
    function ListIpAccessControlListListIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_access_control_lists", elemType: shared.TrunkingV1TrunkIpAccessControlList }),
        __metadata("design:type", Array)
    ], ListIpAccessControlListListIpAccessControlListResponse.prototype, "ipAccessControlLists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListIpAccessControlListListIpAccessControlListResponseMeta)
    ], ListIpAccessControlListListIpAccessControlListResponse.prototype, "meta", void 0);
    return ListIpAccessControlListListIpAccessControlListResponse;
}(utils_1.SpeakeasyBase));
exports.ListIpAccessControlListListIpAccessControlListResponse = ListIpAccessControlListListIpAccessControlListResponse;
var ListIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListRequest, _super);
    function ListIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListIpAccessControlListRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIpAccessControlListPathParams)
    ], ListIpAccessControlListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIpAccessControlListQueryParams)
    ], ListIpAccessControlListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIpAccessControlListSecurity)
    ], ListIpAccessControlListRequest.prototype, "security", void 0);
    return ListIpAccessControlListRequest;
}(utils_1.SpeakeasyBase));
exports.ListIpAccessControlListRequest = ListIpAccessControlListRequest;
var ListIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListResponse, _super);
    function ListIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListIpAccessControlListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIpAccessControlListListIpAccessControlListResponse)
    ], ListIpAccessControlListResponse.prototype, "listIpAccessControlListResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListIpAccessControlListResponse.prototype, "statusCode", void 0);
    return ListIpAccessControlListResponse;
}(utils_1.SpeakeasyBase));
exports.ListIpAccessControlListResponse = ListIpAccessControlListResponse;
