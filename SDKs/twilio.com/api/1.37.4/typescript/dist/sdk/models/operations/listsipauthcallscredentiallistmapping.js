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
exports.ListSipAuthCallsCredentialListMappingResponse = exports.ListSipAuthCallsCredentialListMappingRequest = exports.ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse = exports.ListSipAuthCallsCredentialListMappingSecurity = exports.ListSipAuthCallsCredentialListMappingQueryParams = exports.ListSipAuthCallsCredentialListMappingPathParams = exports.ListSipAuthCallsCredentialListMappingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSipAuthCallsCredentialListMappingServerList = [
    "https://api.twilio.com",
];
var ListSipAuthCallsCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingPathParams, _super);
    function ListSipAuthCallsCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingPathParams.prototype, "domainSid", void 0);
    return ListSipAuthCallsCredentialListMappingPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSipAuthCallsCredentialListMappingPathParams = ListSipAuthCallsCredentialListMappingPathParams;
var ListSipAuthCallsCredentialListMappingQueryParams = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingQueryParams, _super);
    function ListSipAuthCallsCredentialListMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingQueryParams.prototype, "pageSize", void 0);
    return ListSipAuthCallsCredentialListMappingQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSipAuthCallsCredentialListMappingQueryParams = ListSipAuthCallsCredentialListMappingQueryParams;
var ListSipAuthCallsCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingSecurity, _super);
    function ListSipAuthCallsCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipAuthCallsCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipAuthCallsCredentialListMappingSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSipAuthCallsCredentialListMappingSecurity = ListSipAuthCallsCredentialListMappingSecurity;
var ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse, _super);
    function ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping }),
        __metadata("design:type", Array)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "uri", void 0);
    return ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse = ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse;
var ListSipAuthCallsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingRequest, _super);
    function ListSipAuthCallsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingPathParams)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingQueryParams)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingSecurity)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "security", void 0);
    return ListSipAuthCallsCredentialListMappingRequest;
}(utils_1.SpeakeasyBase));
exports.ListSipAuthCallsCredentialListMappingRequest = ListSipAuthCallsCredentialListMappingRequest;
var ListSipAuthCallsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingResponse, _super);
    function ListSipAuthCallsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse)
    ], ListSipAuthCallsCredentialListMappingResponse.prototype, "listSipAuthCallsCredentialListMappingResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingResponse.prototype, "statusCode", void 0);
    return ListSipAuthCallsCredentialListMappingResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipAuthCallsCredentialListMappingResponse = ListSipAuthCallsCredentialListMappingResponse;
