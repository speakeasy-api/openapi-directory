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
exports.ListWebChannelResponse = exports.ListWebChannelRequest = exports.ListWebChannelListWebChannelResponse = exports.ListWebChannelListWebChannelResponseMeta = exports.ListWebChannelSecurity = exports.ListWebChannelQueryParams = exports.ListWebChannelServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListWebChannelServerList = [
    "https://flex-api.twilio.com",
];
var ListWebChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListWebChannelQueryParams, _super);
    function ListWebChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWebChannelQueryParams.prototype, "pageSize", void 0);
    return ListWebChannelQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListWebChannelQueryParams = ListWebChannelQueryParams;
var ListWebChannelSecurity = /** @class */ (function (_super) {
    __extends(ListWebChannelSecurity, _super);
    function ListWebChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWebChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWebChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.ListWebChannelSecurity = ListWebChannelSecurity;
var ListWebChannelListWebChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListWebChannelListWebChannelResponseMeta, _super);
    function ListWebChannelListWebChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWebChannelListWebChannelResponseMeta.prototype, "url", void 0);
    return ListWebChannelListWebChannelResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListWebChannelListWebChannelResponseMeta = ListWebChannelListWebChannelResponseMeta;
var ListWebChannelListWebChannelResponse = /** @class */ (function (_super) {
    __extends(ListWebChannelListWebChannelResponse, _super);
    function ListWebChannelListWebChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flex_chat_channels", elemType: shared.FlexV1WebChannel }),
        __metadata("design:type", Array)
    ], ListWebChannelListWebChannelResponse.prototype, "flexChatChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListWebChannelListWebChannelResponseMeta)
    ], ListWebChannelListWebChannelResponse.prototype, "meta", void 0);
    return ListWebChannelListWebChannelResponse;
}(utils_1.SpeakeasyBase));
exports.ListWebChannelListWebChannelResponse = ListWebChannelListWebChannelResponse;
var ListWebChannelRequest = /** @class */ (function (_super) {
    __extends(ListWebChannelRequest, _super);
    function ListWebChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWebChannelRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebChannelQueryParams)
    ], ListWebChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebChannelSecurity)
    ], ListWebChannelRequest.prototype, "security", void 0);
    return ListWebChannelRequest;
}(utils_1.SpeakeasyBase));
exports.ListWebChannelRequest = ListWebChannelRequest;
var ListWebChannelResponse = /** @class */ (function (_super) {
    __extends(ListWebChannelResponse, _super);
    function ListWebChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWebChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebChannelListWebChannelResponse)
    ], ListWebChannelResponse.prototype, "listWebChannelResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListWebChannelResponse.prototype, "statusCode", void 0);
    return ListWebChannelResponse;
}(utils_1.SpeakeasyBase));
exports.ListWebChannelResponse = ListWebChannelResponse;
