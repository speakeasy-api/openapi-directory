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
exports.ListPhoneNumberResponse = exports.ListPhoneNumberRequest = exports.ListPhoneNumberListPhoneNumberResponse = exports.ListPhoneNumberListPhoneNumberResponseMeta = exports.ListPhoneNumberSecurity = exports.ListPhoneNumberQueryParams = exports.ListPhoneNumberPathParams = exports.ListPhoneNumberServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListPhoneNumberServerList = [
    "https://messaging.twilio.com",
];
var ListPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(ListPhoneNumberPathParams, _super);
    function ListPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListPhoneNumberPathParams.prototype, "serviceSid", void 0);
    return ListPhoneNumberPathParams;
}(utils_1.SpeakeasyBase));
exports.ListPhoneNumberPathParams = ListPhoneNumberPathParams;
var ListPhoneNumberQueryParams = /** @class */ (function (_super) {
    __extends(ListPhoneNumberQueryParams, _super);
    function ListPhoneNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListPhoneNumberQueryParams.prototype, "pageSize", void 0);
    return ListPhoneNumberQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPhoneNumberQueryParams = ListPhoneNumberQueryParams;
var ListPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(ListPhoneNumberSecurity, _super);
    function ListPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return ListPhoneNumberSecurity;
}(utils_1.SpeakeasyBase));
exports.ListPhoneNumberSecurity = ListPhoneNumberSecurity;
var ListPhoneNumberListPhoneNumberResponseMeta = /** @class */ (function (_super) {
    __extends(ListPhoneNumberListPhoneNumberResponseMeta, _super);
    function ListPhoneNumberListPhoneNumberResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberListPhoneNumberResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListPhoneNumberListPhoneNumberResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberListPhoneNumberResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListPhoneNumberListPhoneNumberResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListPhoneNumberListPhoneNumberResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberListPhoneNumberResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListPhoneNumberListPhoneNumberResponseMeta.prototype, "url", void 0);
    return ListPhoneNumberListPhoneNumberResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListPhoneNumberListPhoneNumberResponseMeta = ListPhoneNumberListPhoneNumberResponseMeta;
var ListPhoneNumberListPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListPhoneNumberListPhoneNumberResponse, _super);
    function ListPhoneNumberListPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListPhoneNumberListPhoneNumberResponseMeta)
    ], ListPhoneNumberListPhoneNumberResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: shared.MessagingV1ServicePhoneNumber }),
        __metadata("design:type", Array)
    ], ListPhoneNumberListPhoneNumberResponse.prototype, "phoneNumbers", void 0);
    return ListPhoneNumberListPhoneNumberResponse;
}(utils_1.SpeakeasyBase));
exports.ListPhoneNumberListPhoneNumberResponse = ListPhoneNumberListPhoneNumberResponse;
var ListPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(ListPhoneNumberRequest, _super);
    function ListPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPhoneNumberRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneNumberPathParams)
    ], ListPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneNumberQueryParams)
    ], ListPhoneNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneNumberSecurity)
    ], ListPhoneNumberRequest.prototype, "security", void 0);
    return ListPhoneNumberRequest;
}(utils_1.SpeakeasyBase));
exports.ListPhoneNumberRequest = ListPhoneNumberRequest;
var ListPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListPhoneNumberResponse, _super);
    function ListPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneNumberListPhoneNumberResponse)
    ], ListPhoneNumberResponse.prototype, "listPhoneNumberResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPhoneNumberResponse.prototype, "statusCode", void 0);
    return ListPhoneNumberResponse;
}(utils_1.SpeakeasyBase));
exports.ListPhoneNumberResponse = ListPhoneNumberResponse;
