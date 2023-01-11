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
exports.ListTaskChannelResponse = exports.ListTaskChannelRequest = exports.ListTaskChannelListTaskChannelResponse = exports.ListTaskChannelListTaskChannelResponseMeta = exports.ListTaskChannelSecurity = exports.ListTaskChannelQueryParams = exports.ListTaskChannelPathParams = exports.ListTaskChannelServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListTaskChannelServerList = [
    "https://taskrouter.twilio.com",
];
var ListTaskChannelPathParams = /** @class */ (function (_super) {
    __extends(ListTaskChannelPathParams, _super);
    function ListTaskChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListTaskChannelPathParams.prototype, "workspaceSid", void 0);
    return ListTaskChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.ListTaskChannelPathParams = ListTaskChannelPathParams;
var ListTaskChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskChannelQueryParams, _super);
    function ListTaskChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskChannelQueryParams.prototype, "pageSize", void 0);
    return ListTaskChannelQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListTaskChannelQueryParams = ListTaskChannelQueryParams;
var ListTaskChannelSecurity = /** @class */ (function (_super) {
    __extends(ListTaskChannelSecurity, _super);
    function ListTaskChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.ListTaskChannelSecurity = ListTaskChannelSecurity;
var ListTaskChannelListTaskChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskChannelListTaskChannelResponseMeta, _super);
    function ListTaskChannelListTaskChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "url", void 0);
    return ListTaskChannelListTaskChannelResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListTaskChannelListTaskChannelResponseMeta = ListTaskChannelListTaskChannelResponseMeta;
var ListTaskChannelListTaskChannelResponse = /** @class */ (function (_super) {
    __extends(ListTaskChannelListTaskChannelResponse, _super);
    function ListTaskChannelListTaskChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels", elemType: shared.TaskrouterV1WorkspaceTaskChannel }),
        __metadata("design:type", Array)
    ], ListTaskChannelListTaskChannelResponse.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskChannelListTaskChannelResponseMeta)
    ], ListTaskChannelListTaskChannelResponse.prototype, "meta", void 0);
    return ListTaskChannelListTaskChannelResponse;
}(utils_1.SpeakeasyBase));
exports.ListTaskChannelListTaskChannelResponse = ListTaskChannelListTaskChannelResponse;
var ListTaskChannelRequest = /** @class */ (function (_super) {
    __extends(ListTaskChannelRequest, _super);
    function ListTaskChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTaskChannelRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskChannelPathParams)
    ], ListTaskChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskChannelQueryParams)
    ], ListTaskChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskChannelSecurity)
    ], ListTaskChannelRequest.prototype, "security", void 0);
    return ListTaskChannelRequest;
}(utils_1.SpeakeasyBase));
exports.ListTaskChannelRequest = ListTaskChannelRequest;
var ListTaskChannelResponse = /** @class */ (function (_super) {
    __extends(ListTaskChannelResponse, _super);
    function ListTaskChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTaskChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskChannelListTaskChannelResponse)
    ], ListTaskChannelResponse.prototype, "listTaskChannelResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListTaskChannelResponse.prototype, "statusCode", void 0);
    return ListTaskChannelResponse;
}(utils_1.SpeakeasyBase));
exports.ListTaskChannelResponse = ListTaskChannelResponse;
