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
exports.ListServiceUserResponse = exports.ListServiceUserRequest = exports.ListServiceUserListServiceUserResponse = exports.ListServiceUserListServiceUserResponseMeta = exports.ListServiceUserSecurity = exports.ListServiceUserQueryParams = exports.ListServiceUserPathParams = exports.ListServiceUserServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListServiceUserServerList = [
    "https://conversations.twilio.com",
];
var ListServiceUserPathParams = /** @class */ (function (_super) {
    __extends(ListServiceUserPathParams, _super);
    function ListServiceUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceUserPathParams.prototype, "chatServiceSid", void 0);
    return ListServiceUserPathParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceUserPathParams = ListServiceUserPathParams;
var ListServiceUserQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceUserQueryParams, _super);
    function ListServiceUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceUserQueryParams.prototype, "pageSize", void 0);
    return ListServiceUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceUserQueryParams = ListServiceUserQueryParams;
var ListServiceUserSecurity = /** @class */ (function (_super) {
    __extends(ListServiceUserSecurity, _super);
    function ListServiceUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceUserSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceUserSecurity;
}(utils_1.SpeakeasyBase));
exports.ListServiceUserSecurity = ListServiceUserSecurity;
var ListServiceUserListServiceUserResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceUserListServiceUserResponseMeta, _super);
    function ListServiceUserListServiceUserResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceUserListServiceUserResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceUserListServiceUserResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceUserListServiceUserResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceUserListServiceUserResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceUserListServiceUserResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceUserListServiceUserResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceUserListServiceUserResponseMeta.prototype, "url", void 0);
    return ListServiceUserListServiceUserResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListServiceUserListServiceUserResponseMeta = ListServiceUserListServiceUserResponseMeta;
var ListServiceUserListServiceUserResponse = /** @class */ (function (_super) {
    __extends(ListServiceUserListServiceUserResponse, _super);
    function ListServiceUserListServiceUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceUserListServiceUserResponseMeta)
    ], ListServiceUserListServiceUserResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: shared.ConversationsV1ServiceServiceUser }),
        __metadata("design:type", Array)
    ], ListServiceUserListServiceUserResponse.prototype, "users", void 0);
    return ListServiceUserListServiceUserResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceUserListServiceUserResponse = ListServiceUserListServiceUserResponse;
var ListServiceUserRequest = /** @class */ (function (_super) {
    __extends(ListServiceUserRequest, _super);
    function ListServiceUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceUserRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceUserPathParams)
    ], ListServiceUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceUserQueryParams)
    ], ListServiceUserRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceUserSecurity)
    ], ListServiceUserRequest.prototype, "security", void 0);
    return ListServiceUserRequest;
}(utils_1.SpeakeasyBase));
exports.ListServiceUserRequest = ListServiceUserRequest;
var ListServiceUserResponse = /** @class */ (function (_super) {
    __extends(ListServiceUserResponse, _super);
    function ListServiceUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceUserListServiceUserResponse)
    ], ListServiceUserResponse.prototype, "listServiceUserResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListServiceUserResponse.prototype, "statusCode", void 0);
    return ListServiceUserResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceUserResponse = ListServiceUserResponse;
