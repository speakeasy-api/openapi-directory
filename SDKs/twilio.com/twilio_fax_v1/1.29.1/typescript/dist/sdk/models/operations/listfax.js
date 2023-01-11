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
exports.ListFaxResponse = exports.ListFaxRequest = exports.ListFaxListFaxResponse = exports.ListFaxListFaxResponseMeta = exports.ListFaxSecurity = exports.ListFaxQueryParams = exports.ListFaxServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListFaxServerList = [
    "https://fax.twilio.com",
];
var ListFaxQueryParams = /** @class */ (function (_super) {
    __extends(ListFaxQueryParams, _super);
    function ListFaxQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListFaxQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreatedOnOrBefore" }),
        __metadata("design:type", Date)
    ], ListFaxQueryParams.prototype, "dateCreatedOnOrBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=From" }),
        __metadata("design:type", String)
    ], ListFaxQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFaxQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=To" }),
        __metadata("design:type", String)
    ], ListFaxQueryParams.prototype, "to", void 0);
    return ListFaxQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListFaxQueryParams = ListFaxQueryParams;
var ListFaxSecurity = /** @class */ (function (_super) {
    __extends(ListFaxSecurity, _super);
    function ListFaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFaxSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFaxSecurity;
}(utils_1.SpeakeasyBase));
exports.ListFaxSecurity = ListFaxSecurity;
var ListFaxListFaxResponseMeta = /** @class */ (function (_super) {
    __extends(ListFaxListFaxResponseMeta, _super);
    function ListFaxListFaxResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFaxListFaxResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFaxListFaxResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "url", void 0);
    return ListFaxListFaxResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListFaxListFaxResponseMeta = ListFaxListFaxResponseMeta;
var ListFaxListFaxResponse = /** @class */ (function (_super) {
    __extends(ListFaxListFaxResponse, _super);
    function ListFaxListFaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=faxes", elemType: shared.FaxV1Fax }),
        __metadata("design:type", Array)
    ], ListFaxListFaxResponse.prototype, "faxes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListFaxListFaxResponseMeta)
    ], ListFaxListFaxResponse.prototype, "meta", void 0);
    return ListFaxListFaxResponse;
}(utils_1.SpeakeasyBase));
exports.ListFaxListFaxResponse = ListFaxListFaxResponse;
var ListFaxRequest = /** @class */ (function (_super) {
    __extends(ListFaxRequest, _super);
    function ListFaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFaxRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFaxQueryParams)
    ], ListFaxRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFaxSecurity)
    ], ListFaxRequest.prototype, "security", void 0);
    return ListFaxRequest;
}(utils_1.SpeakeasyBase));
exports.ListFaxRequest = ListFaxRequest;
var ListFaxResponse = /** @class */ (function (_super) {
    __extends(ListFaxResponse, _super);
    function ListFaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFaxResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFaxListFaxResponse)
    ], ListFaxResponse.prototype, "listFaxResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListFaxResponse.prototype, "statusCode", void 0);
    return ListFaxResponse;
}(utils_1.SpeakeasyBase));
exports.ListFaxResponse = ListFaxResponse;
