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
exports.ListCustomerProfileEntityAssignmentResponse = exports.ListCustomerProfileEntityAssignmentRequest = exports.ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse = exports.ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta = exports.ListCustomerProfileEntityAssignmentSecurity = exports.ListCustomerProfileEntityAssignmentQueryParams = exports.ListCustomerProfileEntityAssignmentPathParams = exports.ListCustomerProfileEntityAssignmentServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListCustomerProfileEntityAssignmentServerList = [
    "https://trusthub.twilio.com",
];
var ListCustomerProfileEntityAssignmentPathParams = /** @class */ (function (_super) {
    __extends(ListCustomerProfileEntityAssignmentPathParams, _super);
    function ListCustomerProfileEntityAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" }),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentPathParams.prototype, "customerProfileSid", void 0);
    return ListCustomerProfileEntityAssignmentPathParams;
}(utils_1.SpeakeasyBase));
exports.ListCustomerProfileEntityAssignmentPathParams = ListCustomerProfileEntityAssignmentPathParams;
var ListCustomerProfileEntityAssignmentQueryParams = /** @class */ (function (_super) {
    __extends(ListCustomerProfileEntityAssignmentQueryParams, _super);
    function ListCustomerProfileEntityAssignmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCustomerProfileEntityAssignmentQueryParams.prototype, "pageSize", void 0);
    return ListCustomerProfileEntityAssignmentQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCustomerProfileEntityAssignmentQueryParams = ListCustomerProfileEntityAssignmentQueryParams;
var ListCustomerProfileEntityAssignmentSecurity = /** @class */ (function (_super) {
    __extends(ListCustomerProfileEntityAssignmentSecurity, _super);
    function ListCustomerProfileEntityAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCustomerProfileEntityAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCustomerProfileEntityAssignmentSecurity;
}(utils_1.SpeakeasyBase));
exports.ListCustomerProfileEntityAssignmentSecurity = ListCustomerProfileEntityAssignmentSecurity;
var ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta = /** @class */ (function (_super) {
    __extends(ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta, _super);
    function ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta.prototype, "url", void 0);
    return ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta = ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta;
var ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse, _super);
    function ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment }),
        __metadata("design:type", Array)
    ], ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse.prototype, "results", void 0);
    return ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse;
}(utils_1.SpeakeasyBase));
exports.ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse = ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse;
var ListCustomerProfileEntityAssignmentRequest = /** @class */ (function (_super) {
    __extends(ListCustomerProfileEntityAssignmentRequest, _super);
    function ListCustomerProfileEntityAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCustomerProfileEntityAssignmentPathParams)
    ], ListCustomerProfileEntityAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCustomerProfileEntityAssignmentQueryParams)
    ], ListCustomerProfileEntityAssignmentRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCustomerProfileEntityAssignmentSecurity)
    ], ListCustomerProfileEntityAssignmentRequest.prototype, "security", void 0);
    return ListCustomerProfileEntityAssignmentRequest;
}(utils_1.SpeakeasyBase));
exports.ListCustomerProfileEntityAssignmentRequest = ListCustomerProfileEntityAssignmentRequest;
var ListCustomerProfileEntityAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListCustomerProfileEntityAssignmentResponse, _super);
    function ListCustomerProfileEntityAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCustomerProfileEntityAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse)
    ], ListCustomerProfileEntityAssignmentResponse.prototype, "listCustomerProfileEntityAssignmentResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCustomerProfileEntityAssignmentResponse.prototype, "statusCode", void 0);
    return ListCustomerProfileEntityAssignmentResponse;
}(utils_1.SpeakeasyBase));
exports.ListCustomerProfileEntityAssignmentResponse = ListCustomerProfileEntityAssignmentResponse;
