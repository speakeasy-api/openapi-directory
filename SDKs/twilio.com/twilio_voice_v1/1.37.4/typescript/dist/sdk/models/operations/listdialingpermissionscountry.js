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
exports.ListDialingPermissionsCountryResponse = exports.ListDialingPermissionsCountryRequest = exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse = exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta = exports.ListDialingPermissionsCountrySecurity = exports.ListDialingPermissionsCountryQueryParams = exports.ListDialingPermissionsCountryServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListDialingPermissionsCountryServerList = [
    "https://voice.twilio.com",
];
var ListDialingPermissionsCountryQueryParams = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryQueryParams, _super);
    function ListDialingPermissionsCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Continent" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryQueryParams.prototype, "continent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryQueryParams.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=HighRiskSpecialNumbersEnabled" }),
        __metadata("design:type", Boolean)
    ], ListDialingPermissionsCountryQueryParams.prototype, "highRiskSpecialNumbersEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=HighRiskTollfraudNumbersEnabled" }),
        __metadata("design:type", Boolean)
    ], ListDialingPermissionsCountryQueryParams.prototype, "highRiskTollfraudNumbersEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=IsoCode" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryQueryParams.prototype, "isoCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=LowRiskNumbersEnabled" }),
        __metadata("design:type", Boolean)
    ], ListDialingPermissionsCountryQueryParams.prototype, "lowRiskNumbersEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryQueryParams.prototype, "pageSize", void 0);
    return ListDialingPermissionsCountryQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsCountryQueryParams = ListDialingPermissionsCountryQueryParams;
var ListDialingPermissionsCountrySecurity = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountrySecurity, _super);
    function ListDialingPermissionsCountrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDialingPermissionsCountrySecurity.prototype, "accountSidAuthToken", void 0);
    return ListDialingPermissionsCountrySecurity;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsCountrySecurity = ListDialingPermissionsCountrySecurity;
var ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta, _super);
    function ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta.prototype, "url", void 0);
    return ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta = ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta;
var ListDialingPermissionsCountryListDialingPermissionsCountryResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryListDialingPermissionsCountryResponse, _super);
    function ListDialingPermissionsCountryListDialingPermissionsCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountry }),
        __metadata("design:type", Array)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponse.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta)
    ], ListDialingPermissionsCountryListDialingPermissionsCountryResponse.prototype, "meta", void 0);
    return ListDialingPermissionsCountryListDialingPermissionsCountryResponse;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse = ListDialingPermissionsCountryListDialingPermissionsCountryResponse;
var ListDialingPermissionsCountryRequest = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryRequest, _super);
    function ListDialingPermissionsCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDialingPermissionsCountryQueryParams)
    ], ListDialingPermissionsCountryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDialingPermissionsCountrySecurity)
    ], ListDialingPermissionsCountryRequest.prototype, "security", void 0);
    return ListDialingPermissionsCountryRequest;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsCountryRequest = ListDialingPermissionsCountryRequest;
var ListDialingPermissionsCountryResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsCountryResponse, _super);
    function ListDialingPermissionsCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDialingPermissionsCountryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDialingPermissionsCountryListDialingPermissionsCountryResponse)
    ], ListDialingPermissionsCountryResponse.prototype, "listDialingPermissionsCountryResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDialingPermissionsCountryResponse.prototype, "statusCode", void 0);
    return ListDialingPermissionsCountryResponse;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsCountryResponse = ListDialingPermissionsCountryResponse;
