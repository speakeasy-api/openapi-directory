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
exports.ListInviteResponse = exports.ListInviteRequest = exports.ListInviteListInviteResponse = exports.ListInviteListInviteResponseMeta = exports.ListInviteSecurity = exports.ListInviteQueryParams = exports.ListInvitePathParams = exports.ListInviteServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListInviteServerList = [
    "https://chat.twilio.com",
];
var ListInvitePathParams = /** @class */ (function (_super) {
    __extends(ListInvitePathParams, _super);
    function ListInvitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListInvitePathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListInvitePathParams.prototype, "serviceSid", void 0);
    return ListInvitePathParams;
}(utils_1.SpeakeasyBase));
exports.ListInvitePathParams = ListInvitePathParams;
var ListInviteQueryParams = /** @class */ (function (_super) {
    __extends(ListInviteQueryParams, _super);
    function ListInviteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", Array)
    ], ListInviteQueryParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListInviteQueryParams.prototype, "pageSize", void 0);
    return ListInviteQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListInviteQueryParams = ListInviteQueryParams;
var ListInviteSecurity = /** @class */ (function (_super) {
    __extends(ListInviteSecurity, _super);
    function ListInviteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListInviteSecurity.prototype, "accountSidAuthToken", void 0);
    return ListInviteSecurity;
}(utils_1.SpeakeasyBase));
exports.ListInviteSecurity = ListInviteSecurity;
var ListInviteListInviteResponseMeta = /** @class */ (function (_super) {
    __extends(ListInviteListInviteResponseMeta, _super);
    function ListInviteListInviteResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListInviteListInviteResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListInviteListInviteResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListInviteListInviteResponseMeta.prototype, "url", void 0);
    return ListInviteListInviteResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListInviteListInviteResponseMeta = ListInviteListInviteResponseMeta;
var ListInviteListInviteResponse = /** @class */ (function (_super) {
    __extends(ListInviteListInviteResponse, _super);
    function ListInviteListInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invites", elemType: shared.ChatV1ServiceChannelInvite }),
        __metadata("design:type", Array)
    ], ListInviteListInviteResponse.prototype, "invites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListInviteListInviteResponseMeta)
    ], ListInviteListInviteResponse.prototype, "meta", void 0);
    return ListInviteListInviteResponse;
}(utils_1.SpeakeasyBase));
exports.ListInviteListInviteResponse = ListInviteListInviteResponse;
var ListInviteRequest = /** @class */ (function (_super) {
    __extends(ListInviteRequest, _super);
    function ListInviteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListInviteRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInvitePathParams)
    ], ListInviteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInviteQueryParams)
    ], ListInviteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInviteSecurity)
    ], ListInviteRequest.prototype, "security", void 0);
    return ListInviteRequest;
}(utils_1.SpeakeasyBase));
exports.ListInviteRequest = ListInviteRequest;
var ListInviteResponse = /** @class */ (function (_super) {
    __extends(ListInviteResponse, _super);
    function ListInviteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListInviteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInviteListInviteResponse)
    ], ListInviteResponse.prototype, "listInviteResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListInviteResponse.prototype, "statusCode", void 0);
    return ListInviteResponse;
}(utils_1.SpeakeasyBase));
exports.ListInviteResponse = ListInviteResponse;
