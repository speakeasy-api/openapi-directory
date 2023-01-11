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
exports.ListIncomingPhoneNumberResponse = exports.ListIncomingPhoneNumberRequest = exports.ListIncomingPhoneNumberListIncomingPhoneNumberResponse = exports.ListIncomingPhoneNumberSecurity = exports.ListIncomingPhoneNumberQueryParams = exports.ListIncomingPhoneNumberPathParams = exports.ListIncomingPhoneNumberServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListIncomingPhoneNumberServerList = [
    "https://api.twilio.com",
];
var ListIncomingPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberPathParams, _super);
    function ListIncomingPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberPathParams.prototype, "accountSid", void 0);
    return ListIncomingPhoneNumberPathParams;
}(utils_1.SpeakeasyBase));
exports.ListIncomingPhoneNumberPathParams = ListIncomingPhoneNumberPathParams;
var ListIncomingPhoneNumberQueryParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberQueryParams, _super);
    function ListIncomingPhoneNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListIncomingPhoneNumberQueryParams.prototype, "beta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Origin" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberQueryParams.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberQueryParams.prototype, "phoneNumber", void 0);
    return ListIncomingPhoneNumberQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListIncomingPhoneNumberQueryParams = ListIncomingPhoneNumberQueryParams;
var ListIncomingPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberSecurity, _super);
    function ListIncomingPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIncomingPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIncomingPhoneNumberSecurity;
}(utils_1.SpeakeasyBase));
exports.ListIncomingPhoneNumberSecurity = ListIncomingPhoneNumberSecurity;
var ListIncomingPhoneNumberListIncomingPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberListIncomingPhoneNumberResponse, _super);
    function ListIncomingPhoneNumberListIncomingPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=incoming_phone_numbers", elemType: shared.ApiV2010AccountIncomingPhoneNumber }),
        __metadata("design:type", Array)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "incomingPhoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberListIncomingPhoneNumberResponse.prototype, "uri", void 0);
    return ListIncomingPhoneNumberListIncomingPhoneNumberResponse;
}(utils_1.SpeakeasyBase));
exports.ListIncomingPhoneNumberListIncomingPhoneNumberResponse = ListIncomingPhoneNumberListIncomingPhoneNumberResponse;
var ListIncomingPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberRequest, _super);
    function ListIncomingPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIncomingPhoneNumberPathParams)
    ], ListIncomingPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIncomingPhoneNumberQueryParams)
    ], ListIncomingPhoneNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIncomingPhoneNumberSecurity)
    ], ListIncomingPhoneNumberRequest.prototype, "security", void 0);
    return ListIncomingPhoneNumberRequest;
}(utils_1.SpeakeasyBase));
exports.ListIncomingPhoneNumberRequest = ListIncomingPhoneNumberRequest;
var ListIncomingPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberResponse, _super);
    function ListIncomingPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIncomingPhoneNumberListIncomingPhoneNumberResponse)
    ], ListIncomingPhoneNumberResponse.prototype, "listIncomingPhoneNumberResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberResponse.prototype, "statusCode", void 0);
    return ListIncomingPhoneNumberResponse;
}(utils_1.SpeakeasyBase));
exports.ListIncomingPhoneNumberResponse = ListIncomingPhoneNumberResponse;
