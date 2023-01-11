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
exports.GetAllAccountsResponse = exports.GetAllAccountsRequest = exports.GetAllAccounts200ApplicationJson = exports.GetAllAccounts200ApplicationJsonLinks = exports.GetAllAccounts200ApplicationJsonLinksSelf = exports.GetAllAccounts200ApplicationJsonLinksPrev = exports.GetAllAccounts200ApplicationJsonLinksNext = exports.GetAllAccounts200ApplicationJsonLinksLast = exports.GetAllAccounts200ApplicationJsonLinksFirst = exports.GetAllAccountsSecurity = exports.GetAllAccountsQueryParams = exports.GetAllAccountsProviderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllAccountsProviderEnum;
(function (GetAllAccountsProviderEnum) {
    GetAllAccountsProviderEnum["Messenger"] = "messenger";
    GetAllAccountsProviderEnum["ViberServiceMsg"] = "viber_service_msg";
    GetAllAccountsProviderEnum["Whatsapp"] = "whatsapp";
})(GetAllAccountsProviderEnum = exports.GetAllAccountsProviderEnum || (exports.GetAllAccountsProviderEnum = {}));
var GetAllAccountsQueryParams = /** @class */ (function (_super) {
    __extends(GetAllAccountsQueryParams, _super);
    function GetAllAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], GetAllAccountsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetAllAccountsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=provider" }),
        __metadata("design:type", String)
    ], GetAllAccountsQueryParams.prototype, "provider", void 0);
    return GetAllAccountsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountsQueryParams = GetAllAccountsQueryParams;
var GetAllAccountsSecurity = /** @class */ (function (_super) {
    __extends(GetAllAccountsSecurity, _super);
    function GetAllAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAllAccountsSecurity.prototype, "bearerAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetAllAccountsSecurity.prototype, "basicAuth", void 0);
    return GetAllAccountsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountsSecurity = GetAllAccountsSecurity;
var GetAllAccounts200ApplicationJsonLinksFirst = /** @class */ (function (_super) {
    __extends(GetAllAccounts200ApplicationJsonLinksFirst, _super);
    function GetAllAccounts200ApplicationJsonLinksFirst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetAllAccounts200ApplicationJsonLinksFirst.prototype, "href", void 0);
    return GetAllAccounts200ApplicationJsonLinksFirst;
}(utils_1.SpeakeasyBase));
exports.GetAllAccounts200ApplicationJsonLinksFirst = GetAllAccounts200ApplicationJsonLinksFirst;
var GetAllAccounts200ApplicationJsonLinksLast = /** @class */ (function (_super) {
    __extends(GetAllAccounts200ApplicationJsonLinksLast, _super);
    function GetAllAccounts200ApplicationJsonLinksLast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetAllAccounts200ApplicationJsonLinksLast.prototype, "href", void 0);
    return GetAllAccounts200ApplicationJsonLinksLast;
}(utils_1.SpeakeasyBase));
exports.GetAllAccounts200ApplicationJsonLinksLast = GetAllAccounts200ApplicationJsonLinksLast;
var GetAllAccounts200ApplicationJsonLinksNext = /** @class */ (function (_super) {
    __extends(GetAllAccounts200ApplicationJsonLinksNext, _super);
    function GetAllAccounts200ApplicationJsonLinksNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetAllAccounts200ApplicationJsonLinksNext.prototype, "href", void 0);
    return GetAllAccounts200ApplicationJsonLinksNext;
}(utils_1.SpeakeasyBase));
exports.GetAllAccounts200ApplicationJsonLinksNext = GetAllAccounts200ApplicationJsonLinksNext;
var GetAllAccounts200ApplicationJsonLinksPrev = /** @class */ (function (_super) {
    __extends(GetAllAccounts200ApplicationJsonLinksPrev, _super);
    function GetAllAccounts200ApplicationJsonLinksPrev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetAllAccounts200ApplicationJsonLinksPrev.prototype, "href", void 0);
    return GetAllAccounts200ApplicationJsonLinksPrev;
}(utils_1.SpeakeasyBase));
exports.GetAllAccounts200ApplicationJsonLinksPrev = GetAllAccounts200ApplicationJsonLinksPrev;
var GetAllAccounts200ApplicationJsonLinksSelf = /** @class */ (function (_super) {
    __extends(GetAllAccounts200ApplicationJsonLinksSelf, _super);
    function GetAllAccounts200ApplicationJsonLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetAllAccounts200ApplicationJsonLinksSelf.prototype, "href", void 0);
    return GetAllAccounts200ApplicationJsonLinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetAllAccounts200ApplicationJsonLinksSelf = GetAllAccounts200ApplicationJsonLinksSelf;
var GetAllAccounts200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetAllAccounts200ApplicationJsonLinks, _super);
    function GetAllAccounts200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", GetAllAccounts200ApplicationJsonLinksFirst)
    ], GetAllAccounts200ApplicationJsonLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", GetAllAccounts200ApplicationJsonLinksLast)
    ], GetAllAccounts200ApplicationJsonLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", GetAllAccounts200ApplicationJsonLinksNext)
    ], GetAllAccounts200ApplicationJsonLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", GetAllAccounts200ApplicationJsonLinksPrev)
    ], GetAllAccounts200ApplicationJsonLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetAllAccounts200ApplicationJsonLinksSelf)
    ], GetAllAccounts200ApplicationJsonLinks.prototype, "self", void 0);
    return GetAllAccounts200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.GetAllAccounts200ApplicationJsonLinks = GetAllAccounts200ApplicationJsonLinks;
var GetAllAccounts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllAccounts200ApplicationJson, _super);
    function GetAllAccounts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_embedded", elemType: shared.GetAllAccountResponse }),
        __metadata("design:type", Array)
    ], GetAllAccounts200ApplicationJson.prototype, "embedded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetAllAccounts200ApplicationJsonLinks)
    ], GetAllAccounts200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], GetAllAccounts200ApplicationJson.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetAllAccounts200ApplicationJson.prototype, "pageSize", void 0);
    return GetAllAccounts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAllAccounts200ApplicationJson = GetAllAccounts200ApplicationJson;
var GetAllAccountsRequest = /** @class */ (function (_super) {
    __extends(GetAllAccountsRequest, _super);
    function GetAllAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllAccountsQueryParams)
    ], GetAllAccountsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllAccountsSecurity)
    ], GetAllAccountsRequest.prototype, "security", void 0);
    return GetAllAccountsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountsRequest = GetAllAccountsRequest;
var GetAllAccountsResponse = /** @class */ (function (_super) {
    __extends(GetAllAccountsResponse, _super);
    function GetAllAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndOneResponse)
    ], GetAllAccountsResponse.prototype, "fourHundredAndOneResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllAccounts200ApplicationJson)
    ], GetAllAccountsResponse.prototype, "getAllAccounts200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllAccountsResponse.prototype, "statusCode", void 0);
    return GetAllAccountsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllAccountsResponse = GetAllAccountsResponse;
