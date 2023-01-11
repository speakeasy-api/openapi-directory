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
exports.ListEngagementResponse = exports.ListEngagementRequest = exports.ListEngagementListEngagementResponse = exports.ListEngagementListEngagementResponseMeta = exports.ListEngagementSecurity = exports.ListEngagementQueryParams = exports.ListEngagementPathParams = exports.ListEngagementServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListEngagementServerList = [
    "https://studio.twilio.com",
];
var ListEngagementPathParams = /** @class */ (function (_super) {
    __extends(ListEngagementPathParams, _super);
    function ListEngagementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], ListEngagementPathParams.prototype, "flowSid", void 0);
    return ListEngagementPathParams;
}(utils_1.SpeakeasyBase));
exports.ListEngagementPathParams = ListEngagementPathParams;
var ListEngagementQueryParams = /** @class */ (function (_super) {
    __extends(ListEngagementQueryParams, _super);
    function ListEngagementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEngagementQueryParams.prototype, "pageSize", void 0);
    return ListEngagementQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListEngagementQueryParams = ListEngagementQueryParams;
var ListEngagementSecurity = /** @class */ (function (_super) {
    __extends(ListEngagementSecurity, _super);
    function ListEngagementSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEngagementSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEngagementSecurity;
}(utils_1.SpeakeasyBase));
exports.ListEngagementSecurity = ListEngagementSecurity;
var ListEngagementListEngagementResponseMeta = /** @class */ (function (_super) {
    __extends(ListEngagementListEngagementResponseMeta, _super);
    function ListEngagementListEngagementResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEngagementListEngagementResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEngagementListEngagementResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "url", void 0);
    return ListEngagementListEngagementResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListEngagementListEngagementResponseMeta = ListEngagementListEngagementResponseMeta;
var ListEngagementListEngagementResponse = /** @class */ (function (_super) {
    __extends(ListEngagementListEngagementResponse, _super);
    function ListEngagementListEngagementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=engagements", elemType: shared.StudioV1FlowEngagement }),
        __metadata("design:type", Array)
    ], ListEngagementListEngagementResponse.prototype, "engagements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListEngagementListEngagementResponseMeta)
    ], ListEngagementListEngagementResponse.prototype, "meta", void 0);
    return ListEngagementListEngagementResponse;
}(utils_1.SpeakeasyBase));
exports.ListEngagementListEngagementResponse = ListEngagementListEngagementResponse;
var ListEngagementRequest = /** @class */ (function (_super) {
    __extends(ListEngagementRequest, _super);
    function ListEngagementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEngagementRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEngagementPathParams)
    ], ListEngagementRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEngagementQueryParams)
    ], ListEngagementRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEngagementSecurity)
    ], ListEngagementRequest.prototype, "security", void 0);
    return ListEngagementRequest;
}(utils_1.SpeakeasyBase));
exports.ListEngagementRequest = ListEngagementRequest;
var ListEngagementResponse = /** @class */ (function (_super) {
    __extends(ListEngagementResponse, _super);
    function ListEngagementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEngagementResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEngagementListEngagementResponse)
    ], ListEngagementResponse.prototype, "listEngagementResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListEngagementResponse.prototype, "statusCode", void 0);
    return ListEngagementResponse;
}(utils_1.SpeakeasyBase));
exports.ListEngagementResponse = ListEngagementResponse;
