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
exports.ListDialingPermissionsHrsPrefixesResponse = exports.ListDialingPermissionsHrsPrefixesRequest = exports.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse = exports.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta = exports.ListDialingPermissionsHrsPrefixesSecurity = exports.ListDialingPermissionsHrsPrefixesQueryParams = exports.ListDialingPermissionsHrsPrefixesPathParams = exports.ListDialingPermissionsHrsPrefixesServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListDialingPermissionsHrsPrefixesServerList = [
    "https://voice.twilio.com",
];
var ListDialingPermissionsHrsPrefixesPathParams = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesPathParams, _super);
    function ListDialingPermissionsHrsPrefixesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=IsoCode" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesPathParams.prototype, "isoCode", void 0);
    return ListDialingPermissionsHrsPrefixesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsHrsPrefixesPathParams = ListDialingPermissionsHrsPrefixesPathParams;
var ListDialingPermissionsHrsPrefixesQueryParams = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesQueryParams, _super);
    function ListDialingPermissionsHrsPrefixesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesQueryParams.prototype, "pageSize", void 0);
    return ListDialingPermissionsHrsPrefixesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsHrsPrefixesQueryParams = ListDialingPermissionsHrsPrefixesQueryParams;
var ListDialingPermissionsHrsPrefixesSecurity = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesSecurity, _super);
    function ListDialingPermissionsHrsPrefixesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDialingPermissionsHrsPrefixesSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDialingPermissionsHrsPrefixesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsHrsPrefixesSecurity = ListDialingPermissionsHrsPrefixesSecurity;
var ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta, _super);
    function ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "url", void 0);
    return ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta = ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta;
var ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse, _super);
    function ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes }),
        __metadata("design:type", Array)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse.prototype, "meta", void 0);
    return ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse = ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;
var ListDialingPermissionsHrsPrefixesRequest = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesRequest, _super);
    function ListDialingPermissionsHrsPrefixesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesPathParams)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesQueryParams)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesSecurity)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "security", void 0);
    return ListDialingPermissionsHrsPrefixesRequest;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsHrsPrefixesRequest = ListDialingPermissionsHrsPrefixesRequest;
var ListDialingPermissionsHrsPrefixesResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesResponse, _super);
    function ListDialingPermissionsHrsPrefixesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse)
    ], ListDialingPermissionsHrsPrefixesResponse.prototype, "listDialingPermissionsHrsPrefixesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesResponse.prototype, "statusCode", void 0);
    return ListDialingPermissionsHrsPrefixesResponse;
}(utils_1.SpeakeasyBase));
exports.ListDialingPermissionsHrsPrefixesResponse = ListDialingPermissionsHrsPrefixesResponse;
