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
exports.ListNetworkResponse = exports.ListNetworkRequest = exports.ListNetworkListNetworkResponse = exports.ListNetworkListNetworkResponseMeta = exports.ListNetworkSecurity = exports.ListNetworkQueryParams = exports.ListNetworkServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListNetworkServerList = [
    "https://supersim.twilio.com",
];
var ListNetworkQueryParams = /** @class */ (function (_super) {
    __extends(ListNetworkQueryParams, _super);
    function ListNetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=IsoCountry" }),
        __metadata("design:type", String)
    ], ListNetworkQueryParams.prototype, "isoCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Mcc" }),
        __metadata("design:type", String)
    ], ListNetworkQueryParams.prototype, "mcc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Mnc" }),
        __metadata("design:type", String)
    ], ListNetworkQueryParams.prototype, "mnc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListNetworkQueryParams.prototype, "pageSize", void 0);
    return ListNetworkQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListNetworkQueryParams = ListNetworkQueryParams;
var ListNetworkSecurity = /** @class */ (function (_super) {
    __extends(ListNetworkSecurity, _super);
    function ListNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListNetworkSecurity.prototype, "accountSidAuthToken", void 0);
    return ListNetworkSecurity;
}(utils_1.SpeakeasyBase));
exports.ListNetworkSecurity = ListNetworkSecurity;
var ListNetworkListNetworkResponseMeta = /** @class */ (function (_super) {
    __extends(ListNetworkListNetworkResponseMeta, _super);
    function ListNetworkListNetworkResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkListNetworkResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListNetworkListNetworkResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkListNetworkResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListNetworkListNetworkResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListNetworkListNetworkResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkListNetworkResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListNetworkListNetworkResponseMeta.prototype, "url", void 0);
    return ListNetworkListNetworkResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListNetworkListNetworkResponseMeta = ListNetworkListNetworkResponseMeta;
var ListNetworkListNetworkResponse = /** @class */ (function (_super) {
    __extends(ListNetworkListNetworkResponse, _super);
    function ListNetworkListNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListNetworkListNetworkResponseMeta)
    ], ListNetworkListNetworkResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networks", elemType: shared.SupersimV1Network }),
        __metadata("design:type", Array)
    ], ListNetworkListNetworkResponse.prototype, "networks", void 0);
    return ListNetworkListNetworkResponse;
}(utils_1.SpeakeasyBase));
exports.ListNetworkListNetworkResponse = ListNetworkListNetworkResponse;
var ListNetworkRequest = /** @class */ (function (_super) {
    __extends(ListNetworkRequest, _super);
    function ListNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListNetworkRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkQueryParams)
    ], ListNetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkSecurity)
    ], ListNetworkRequest.prototype, "security", void 0);
    return ListNetworkRequest;
}(utils_1.SpeakeasyBase));
exports.ListNetworkRequest = ListNetworkRequest;
var ListNetworkResponse = /** @class */ (function (_super) {
    __extends(ListNetworkResponse, _super);
    function ListNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListNetworkListNetworkResponse)
    ], ListNetworkResponse.prototype, "listNetworkResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListNetworkResponse.prototype, "statusCode", void 0);
    return ListNetworkResponse;
}(utils_1.SpeakeasyBase));
exports.ListNetworkResponse = ListNetworkResponse;
