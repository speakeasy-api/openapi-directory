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
exports.ListBindingResponse = exports.ListBindingRequest = exports.ListBindingListBindingResponse = exports.ListBindingListBindingResponseMeta = exports.ListBindingSecurity = exports.ListBindingQueryParams = exports.ListBindingPathParams = exports.ListBindingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListBindingServerList = [
    "https://ip-messaging.twilio.com",
];
var ListBindingPathParams = /** @class */ (function (_super) {
    __extends(ListBindingPathParams, _super);
    function ListBindingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListBindingPathParams.prototype, "serviceSid", void 0);
    return ListBindingPathParams;
}(utils_1.SpeakeasyBase));
exports.ListBindingPathParams = ListBindingPathParams;
var ListBindingQueryParams = /** @class */ (function (_super) {
    __extends(ListBindingQueryParams, _super);
    function ListBindingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=BindingType" }),
        __metadata("design:type", Array)
    ], ListBindingQueryParams.prototype, "bindingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", Array)
    ], ListBindingQueryParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBindingQueryParams.prototype, "pageSize", void 0);
    return ListBindingQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListBindingQueryParams = ListBindingQueryParams;
var ListBindingSecurity = /** @class */ (function (_super) {
    __extends(ListBindingSecurity, _super);
    function ListBindingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBindingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBindingSecurity;
}(utils_1.SpeakeasyBase));
exports.ListBindingSecurity = ListBindingSecurity;
var ListBindingListBindingResponseMeta = /** @class */ (function (_super) {
    __extends(ListBindingListBindingResponseMeta, _super);
    function ListBindingListBindingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBindingListBindingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBindingListBindingResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBindingListBindingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBindingListBindingResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBindingListBindingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBindingListBindingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBindingListBindingResponseMeta.prototype, "url", void 0);
    return ListBindingListBindingResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListBindingListBindingResponseMeta = ListBindingListBindingResponseMeta;
var ListBindingListBindingResponse = /** @class */ (function (_super) {
    __extends(ListBindingListBindingResponse, _super);
    function ListBindingListBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bindings", elemType: shared.IpMessagingV2ServiceBinding }),
        __metadata("design:type", Array)
    ], ListBindingListBindingResponse.prototype, "bindings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListBindingListBindingResponseMeta)
    ], ListBindingListBindingResponse.prototype, "meta", void 0);
    return ListBindingListBindingResponse;
}(utils_1.SpeakeasyBase));
exports.ListBindingListBindingResponse = ListBindingListBindingResponse;
var ListBindingRequest = /** @class */ (function (_super) {
    __extends(ListBindingRequest, _super);
    function ListBindingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBindingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBindingPathParams)
    ], ListBindingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBindingQueryParams)
    ], ListBindingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBindingSecurity)
    ], ListBindingRequest.prototype, "security", void 0);
    return ListBindingRequest;
}(utils_1.SpeakeasyBase));
exports.ListBindingRequest = ListBindingRequest;
var ListBindingResponse = /** @class */ (function (_super) {
    __extends(ListBindingResponse, _super);
    function ListBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBindingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBindingListBindingResponse)
    ], ListBindingResponse.prototype, "listBindingResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListBindingResponse.prototype, "statusCode", void 0);
    return ListBindingResponse;
}(utils_1.SpeakeasyBase));
exports.ListBindingResponse = ListBindingResponse;
