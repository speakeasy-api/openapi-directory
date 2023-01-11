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
exports.ListDependentPhoneNumberResponse = exports.ListDependentPhoneNumberRequest = exports.ListDependentPhoneNumberListDependentPhoneNumberResponse = exports.ListDependentPhoneNumberSecurity = exports.ListDependentPhoneNumberQueryParams = exports.ListDependentPhoneNumberPathParams = exports.ListDependentPhoneNumberServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListDependentPhoneNumberServerList = [
    "https://api.twilio.com",
];
var ListDependentPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(ListDependentPhoneNumberPathParams, _super);
    function ListDependentPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AddressSid" }),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberPathParams.prototype, "addressSid", void 0);
    return ListDependentPhoneNumberPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDependentPhoneNumberPathParams = ListDependentPhoneNumberPathParams;
var ListDependentPhoneNumberQueryParams = /** @class */ (function (_super) {
    __extends(ListDependentPhoneNumberQueryParams, _super);
    function ListDependentPhoneNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDependentPhoneNumberQueryParams.prototype, "pageSize", void 0);
    return ListDependentPhoneNumberQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDependentPhoneNumberQueryParams = ListDependentPhoneNumberQueryParams;
var ListDependentPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(ListDependentPhoneNumberSecurity, _super);
    function ListDependentPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDependentPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDependentPhoneNumberSecurity;
}(utils_1.SpeakeasyBase));
exports.ListDependentPhoneNumberSecurity = ListDependentPhoneNumberSecurity;
var ListDependentPhoneNumberListDependentPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListDependentPhoneNumberListDependentPhoneNumberResponse, _super);
    function ListDependentPhoneNumberListDependentPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dependent_phone_numbers", elemType: shared.ApiV2010AccountAddressDependentPhoneNumber }),
        __metadata("design:type", Array)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "dependentPhoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberListDependentPhoneNumberResponse.prototype, "uri", void 0);
    return ListDependentPhoneNumberListDependentPhoneNumberResponse;
}(utils_1.SpeakeasyBase));
exports.ListDependentPhoneNumberListDependentPhoneNumberResponse = ListDependentPhoneNumberListDependentPhoneNumberResponse;
var ListDependentPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(ListDependentPhoneNumberRequest, _super);
    function ListDependentPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDependentPhoneNumberPathParams)
    ], ListDependentPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDependentPhoneNumberQueryParams)
    ], ListDependentPhoneNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDependentPhoneNumberSecurity)
    ], ListDependentPhoneNumberRequest.prototype, "security", void 0);
    return ListDependentPhoneNumberRequest;
}(utils_1.SpeakeasyBase));
exports.ListDependentPhoneNumberRequest = ListDependentPhoneNumberRequest;
var ListDependentPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(ListDependentPhoneNumberResponse, _super);
    function ListDependentPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDependentPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDependentPhoneNumberListDependentPhoneNumberResponse)
    ], ListDependentPhoneNumberResponse.prototype, "listDependentPhoneNumberResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDependentPhoneNumberResponse.prototype, "statusCode", void 0);
    return ListDependentPhoneNumberResponse;
}(utils_1.SpeakeasyBase));
exports.ListDependentPhoneNumberResponse = ListDependentPhoneNumberResponse;
