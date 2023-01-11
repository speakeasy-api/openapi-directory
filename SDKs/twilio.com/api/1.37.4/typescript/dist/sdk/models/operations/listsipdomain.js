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
exports.ListSipDomainResponse = exports.ListSipDomainRequest = exports.ListSipDomainListSipDomainResponse = exports.ListSipDomainSecurity = exports.ListSipDomainQueryParams = exports.ListSipDomainPathParams = exports.ListSipDomainServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSipDomainServerList = [
    "https://api.twilio.com",
];
var ListSipDomainPathParams = /** @class */ (function (_super) {
    __extends(ListSipDomainPathParams, _super);
    function ListSipDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipDomainPathParams.prototype, "accountSid", void 0);
    return ListSipDomainPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSipDomainPathParams = ListSipDomainPathParams;
var ListSipDomainQueryParams = /** @class */ (function (_super) {
    __extends(ListSipDomainQueryParams, _super);
    function ListSipDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipDomainQueryParams.prototype, "pageSize", void 0);
    return ListSipDomainQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSipDomainQueryParams = ListSipDomainQueryParams;
var ListSipDomainSecurity = /** @class */ (function (_super) {
    __extends(ListSipDomainSecurity, _super);
    function ListSipDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipDomainSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipDomainSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSipDomainSecurity = ListSipDomainSecurity;
var ListSipDomainListSipDomainResponse = /** @class */ (function (_super) {
    __extends(ListSipDomainListSipDomainResponse, _super);
    function ListSipDomainListSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domains", elemType: shared.ApiV2010AccountSipSipDomain }),
        __metadata("design:type", Array)
    ], ListSipDomainListSipDomainResponse.prototype, "domains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipDomainListSipDomainResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipDomainListSipDomainResponse.prototype, "uri", void 0);
    return ListSipDomainListSipDomainResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipDomainListSipDomainResponse = ListSipDomainListSipDomainResponse;
var ListSipDomainRequest = /** @class */ (function (_super) {
    __extends(ListSipDomainRequest, _super);
    function ListSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipDomainRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipDomainPathParams)
    ], ListSipDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipDomainQueryParams)
    ], ListSipDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipDomainSecurity)
    ], ListSipDomainRequest.prototype, "security", void 0);
    return ListSipDomainRequest;
}(utils_1.SpeakeasyBase));
exports.ListSipDomainRequest = ListSipDomainRequest;
var ListSipDomainResponse = /** @class */ (function (_super) {
    __extends(ListSipDomainResponse, _super);
    function ListSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipDomainResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipDomainListSipDomainResponse)
    ], ListSipDomainResponse.prototype, "listSipDomainResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSipDomainResponse.prototype, "statusCode", void 0);
    return ListSipDomainResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipDomainResponse = ListSipDomainResponse;
