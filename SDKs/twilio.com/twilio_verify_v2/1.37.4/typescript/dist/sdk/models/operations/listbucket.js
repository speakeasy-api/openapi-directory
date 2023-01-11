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
exports.ListBucketResponse = exports.ListBucketRequest = exports.ListBucketListBucketResponse = exports.ListBucketListBucketResponseMeta = exports.ListBucketSecurity = exports.ListBucketQueryParams = exports.ListBucketPathParams = exports.ListBucketServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListBucketServerList = [
    "https://verify.twilio.com",
];
var ListBucketPathParams = /** @class */ (function (_super) {
    __extends(ListBucketPathParams, _super);
    function ListBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" }),
        __metadata("design:type", String)
    ], ListBucketPathParams.prototype, "rateLimitSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListBucketPathParams.prototype, "serviceSid", void 0);
    return ListBucketPathParams;
}(utils_1.SpeakeasyBase));
exports.ListBucketPathParams = ListBucketPathParams;
var ListBucketQueryParams = /** @class */ (function (_super) {
    __extends(ListBucketQueryParams, _super);
    function ListBucketQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBucketQueryParams.prototype, "pageSize", void 0);
    return ListBucketQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListBucketQueryParams = ListBucketQueryParams;
var ListBucketSecurity = /** @class */ (function (_super) {
    __extends(ListBucketSecurity, _super);
    function ListBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBucketSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBucketSecurity;
}(utils_1.SpeakeasyBase));
exports.ListBucketSecurity = ListBucketSecurity;
var ListBucketListBucketResponseMeta = /** @class */ (function (_super) {
    __extends(ListBucketListBucketResponseMeta, _super);
    function ListBucketListBucketResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBucketListBucketResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBucketListBucketResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "url", void 0);
    return ListBucketListBucketResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListBucketListBucketResponseMeta = ListBucketListBucketResponseMeta;
var ListBucketListBucketResponse = /** @class */ (function (_super) {
    __extends(ListBucketListBucketResponse, _super);
    function ListBucketListBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buckets", elemType: shared.VerifyV2ServiceRateLimitBucket }),
        __metadata("design:type", Array)
    ], ListBucketListBucketResponse.prototype, "buckets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListBucketListBucketResponseMeta)
    ], ListBucketListBucketResponse.prototype, "meta", void 0);
    return ListBucketListBucketResponse;
}(utils_1.SpeakeasyBase));
exports.ListBucketListBucketResponse = ListBucketListBucketResponse;
var ListBucketRequest = /** @class */ (function (_super) {
    __extends(ListBucketRequest, _super);
    function ListBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBucketRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBucketPathParams)
    ], ListBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBucketQueryParams)
    ], ListBucketRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBucketSecurity)
    ], ListBucketRequest.prototype, "security", void 0);
    return ListBucketRequest;
}(utils_1.SpeakeasyBase));
exports.ListBucketRequest = ListBucketRequest;
var ListBucketResponse = /** @class */ (function (_super) {
    __extends(ListBucketResponse, _super);
    function ListBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBucketResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBucketListBucketResponse)
    ], ListBucketResponse.prototype, "listBucketResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListBucketResponse.prototype, "statusCode", void 0);
    return ListBucketResponse;
}(utils_1.SpeakeasyBase));
exports.ListBucketResponse = ListBucketResponse;
