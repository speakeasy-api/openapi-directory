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
exports.ListChannelResponse = exports.ListChannelRequest = exports.ListChannelListChannelResponse = exports.ListChannelListChannelResponseMeta = exports.ListChannelSecurity = exports.ListChannelQueryParams = exports.ListChannelPathParams = exports.ListChannelServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListChannelServerList = [
    "https://ip-messaging.twilio.com",
];
var ListChannelPathParams = /** @class */ (function (_super) {
    __extends(ListChannelPathParams, _super);
    function ListChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListChannelPathParams.prototype, "serviceSid", void 0);
    return ListChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.ListChannelPathParams = ListChannelPathParams;
var ListChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListChannelQueryParams, _super);
    function ListChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListChannelQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Type" }),
        __metadata("design:type", Array)
    ], ListChannelQueryParams.prototype, "type", void 0);
    return ListChannelQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListChannelQueryParams = ListChannelQueryParams;
var ListChannelSecurity = /** @class */ (function (_super) {
    __extends(ListChannelSecurity, _super);
    function ListChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.ListChannelSecurity = ListChannelSecurity;
var ListChannelListChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListChannelListChannelResponseMeta, _super);
    function ListChannelListChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListChannelListChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListChannelListChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "url", void 0);
    return ListChannelListChannelResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListChannelListChannelResponseMeta = ListChannelListChannelResponseMeta;
var ListChannelListChannelResponse = /** @class */ (function (_super) {
    __extends(ListChannelListChannelResponse, _super);
    function ListChannelListChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels", elemType: shared.IpMessagingV2ServiceChannel }),
        __metadata("design:type", Array)
    ], ListChannelListChannelResponse.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListChannelListChannelResponseMeta)
    ], ListChannelListChannelResponse.prototype, "meta", void 0);
    return ListChannelListChannelResponse;
}(utils_1.SpeakeasyBase));
exports.ListChannelListChannelResponse = ListChannelListChannelResponse;
var ListChannelRequest = /** @class */ (function (_super) {
    __extends(ListChannelRequest, _super);
    function ListChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListChannelRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelPathParams)
    ], ListChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelQueryParams)
    ], ListChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelSecurity)
    ], ListChannelRequest.prototype, "security", void 0);
    return ListChannelRequest;
}(utils_1.SpeakeasyBase));
exports.ListChannelRequest = ListChannelRequest;
var ListChannelResponse = /** @class */ (function (_super) {
    __extends(ListChannelResponse, _super);
    function ListChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelListChannelResponse)
    ], ListChannelResponse.prototype, "listChannelResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListChannelResponse.prototype, "statusCode", void 0);
    return ListChannelResponse;
}(utils_1.SpeakeasyBase));
exports.ListChannelResponse = ListChannelResponse;
