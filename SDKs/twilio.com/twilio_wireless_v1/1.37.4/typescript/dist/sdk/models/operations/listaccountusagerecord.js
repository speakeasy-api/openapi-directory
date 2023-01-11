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
exports.ListAccountUsageRecordResponse = exports.ListAccountUsageRecordRequest = exports.ListAccountUsageRecordListAccountUsageRecordResponse = exports.ListAccountUsageRecordListAccountUsageRecordResponseMeta = exports.ListAccountUsageRecordSecurity = exports.ListAccountUsageRecordQueryParams = exports.ListAccountUsageRecordServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListAccountUsageRecordServerList = [
    "https://wireless.twilio.com",
];
var ListAccountUsageRecordQueryParams = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordQueryParams, _super);
    function ListAccountUsageRecordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=End" }),
        __metadata("design:type", Date)
    ], ListAccountUsageRecordQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Granularity" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordQueryParams.prototype, "granularity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Start" }),
        __metadata("design:type", Date)
    ], ListAccountUsageRecordQueryParams.prototype, "start", void 0);
    return ListAccountUsageRecordQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAccountUsageRecordQueryParams = ListAccountUsageRecordQueryParams;
var ListAccountUsageRecordSecurity = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordSecurity, _super);
    function ListAccountUsageRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAccountUsageRecordSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAccountUsageRecordSecurity;
}(utils_1.SpeakeasyBase));
exports.ListAccountUsageRecordSecurity = ListAccountUsageRecordSecurity;
var ListAccountUsageRecordListAccountUsageRecordResponseMeta = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordListAccountUsageRecordResponseMeta, _super);
    function ListAccountUsageRecordListAccountUsageRecordResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "url", void 0);
    return ListAccountUsageRecordListAccountUsageRecordResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListAccountUsageRecordListAccountUsageRecordResponseMeta = ListAccountUsageRecordListAccountUsageRecordResponseMeta;
var ListAccountUsageRecordListAccountUsageRecordResponse = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordListAccountUsageRecordResponse, _super);
    function ListAccountUsageRecordListAccountUsageRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAccountUsageRecordListAccountUsageRecordResponseMeta)
    ], ListAccountUsageRecordListAccountUsageRecordResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage_records", elemType: shared.WirelessV1AccountUsageRecord }),
        __metadata("design:type", Array)
    ], ListAccountUsageRecordListAccountUsageRecordResponse.prototype, "usageRecords", void 0);
    return ListAccountUsageRecordListAccountUsageRecordResponse;
}(utils_1.SpeakeasyBase));
exports.ListAccountUsageRecordListAccountUsageRecordResponse = ListAccountUsageRecordListAccountUsageRecordResponse;
var ListAccountUsageRecordRequest = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordRequest, _super);
    function ListAccountUsageRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAccountUsageRecordRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAccountUsageRecordQueryParams)
    ], ListAccountUsageRecordRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAccountUsageRecordSecurity)
    ], ListAccountUsageRecordRequest.prototype, "security", void 0);
    return ListAccountUsageRecordRequest;
}(utils_1.SpeakeasyBase));
exports.ListAccountUsageRecordRequest = ListAccountUsageRecordRequest;
var ListAccountUsageRecordResponse = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordResponse, _super);
    function ListAccountUsageRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAccountUsageRecordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAccountUsageRecordListAccountUsageRecordResponse)
    ], ListAccountUsageRecordResponse.prototype, "listAccountUsageRecordResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordResponse.prototype, "statusCode", void 0);
    return ListAccountUsageRecordResponse;
}(utils_1.SpeakeasyBase));
exports.ListAccountUsageRecordResponse = ListAccountUsageRecordResponse;
