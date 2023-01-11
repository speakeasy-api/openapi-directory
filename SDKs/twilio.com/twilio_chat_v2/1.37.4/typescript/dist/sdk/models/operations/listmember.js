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
exports.ListMemberResponse = exports.ListMemberRequest = exports.ListMemberListMemberResponse = exports.ListMemberListMemberResponseMeta = exports.ListMemberSecurity = exports.ListMemberQueryParams = exports.ListMemberPathParams = exports.ListMemberServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListMemberServerList = [
    "https://chat.twilio.com",
];
var ListMemberPathParams = /** @class */ (function (_super) {
    __extends(ListMemberPathParams, _super);
    function ListMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListMemberPathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListMemberPathParams.prototype, "serviceSid", void 0);
    return ListMemberPathParams;
}(utils_1.SpeakeasyBase));
exports.ListMemberPathParams = ListMemberPathParams;
var ListMemberQueryParams = /** @class */ (function (_super) {
    __extends(ListMemberQueryParams, _super);
    function ListMemberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", Array)
    ], ListMemberQueryParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMemberQueryParams.prototype, "pageSize", void 0);
    return ListMemberQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListMemberQueryParams = ListMemberQueryParams;
var ListMemberSecurity = /** @class */ (function (_super) {
    __extends(ListMemberSecurity, _super);
    function ListMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMemberSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMemberSecurity;
}(utils_1.SpeakeasyBase));
exports.ListMemberSecurity = ListMemberSecurity;
var ListMemberListMemberResponseMeta = /** @class */ (function (_super) {
    __extends(ListMemberListMemberResponseMeta, _super);
    function ListMemberListMemberResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "url", void 0);
    return ListMemberListMemberResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListMemberListMemberResponseMeta = ListMemberListMemberResponseMeta;
var ListMemberListMemberResponse = /** @class */ (function (_super) {
    __extends(ListMemberListMemberResponse, _super);
    function ListMemberListMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: shared.ChatV2ServiceChannelMember }),
        __metadata("design:type", Array)
    ], ListMemberListMemberResponse.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListMemberListMemberResponseMeta)
    ], ListMemberListMemberResponse.prototype, "meta", void 0);
    return ListMemberListMemberResponse;
}(utils_1.SpeakeasyBase));
exports.ListMemberListMemberResponse = ListMemberListMemberResponse;
var ListMemberRequest = /** @class */ (function (_super) {
    __extends(ListMemberRequest, _super);
    function ListMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMemberRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMemberPathParams)
    ], ListMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMemberQueryParams)
    ], ListMemberRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMemberSecurity)
    ], ListMemberRequest.prototype, "security", void 0);
    return ListMemberRequest;
}(utils_1.SpeakeasyBase));
exports.ListMemberRequest = ListMemberRequest;
var ListMemberResponse = /** @class */ (function (_super) {
    __extends(ListMemberResponse, _super);
    function ListMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMemberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMemberListMemberResponse)
    ], ListMemberResponse.prototype, "listMemberResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMemberResponse.prototype, "statusCode", void 0);
    return ListMemberResponse;
}(utils_1.SpeakeasyBase));
exports.ListMemberResponse = ListMemberResponse;
