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
exports.ListSipIpAccessControlListMappingResponse = exports.ListSipIpAccessControlListMappingRequest = exports.ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse = exports.ListSipIpAccessControlListMappingSecurity = exports.ListSipIpAccessControlListMappingQueryParams = exports.ListSipIpAccessControlListMappingPathParams = exports.ListSipIpAccessControlListMappingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSipIpAccessControlListMappingServerList = [
    "https://api.twilio.com",
];
var ListSipIpAccessControlListMappingPathParams = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListMappingPathParams, _super);
    function ListSipIpAccessControlListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingPathParams.prototype, "domainSid", void 0);
    return ListSipIpAccessControlListMappingPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSipIpAccessControlListMappingPathParams = ListSipIpAccessControlListMappingPathParams;
var ListSipIpAccessControlListMappingQueryParams = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListMappingQueryParams, _super);
    function ListSipIpAccessControlListMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListMappingQueryParams.prototype, "pageSize", void 0);
    return ListSipIpAccessControlListMappingQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSipIpAccessControlListMappingQueryParams = ListSipIpAccessControlListMappingQueryParams;
var ListSipIpAccessControlListMappingSecurity = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListMappingSecurity, _super);
    function ListSipIpAccessControlListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipIpAccessControlListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipIpAccessControlListMappingSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSipIpAccessControlListMappingSecurity = ListSipIpAccessControlListMappingSecurity;
var ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse, _super);
    function ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_access_control_list_mappings", elemType: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping }),
        __metadata("design:type", Array)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "ipAccessControlListMappings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.prototype, "uri", void 0);
    return ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse = ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse;
var ListSipIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListMappingRequest, _super);
    function ListSipIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipIpAccessControlListMappingPathParams)
    ], ListSipIpAccessControlListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipIpAccessControlListMappingQueryParams)
    ], ListSipIpAccessControlListMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipIpAccessControlListMappingSecurity)
    ], ListSipIpAccessControlListMappingRequest.prototype, "security", void 0);
    return ListSipIpAccessControlListMappingRequest;
}(utils_1.SpeakeasyBase));
exports.ListSipIpAccessControlListMappingRequest = ListSipIpAccessControlListMappingRequest;
var ListSipIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListMappingResponse, _super);
    function ListSipIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse)
    ], ListSipIpAccessControlListMappingResponse.prototype, "listSipIpAccessControlListMappingResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListMappingResponse.prototype, "statusCode", void 0);
    return ListSipIpAccessControlListMappingResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipIpAccessControlListMappingResponse = ListSipIpAccessControlListMappingResponse;
