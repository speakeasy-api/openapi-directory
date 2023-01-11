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
exports.ListSubscribedEventResponse = exports.ListSubscribedEventRequest = exports.ListSubscribedEventListSubscribedEventResponse = exports.ListSubscribedEventListSubscribedEventResponseMeta = exports.ListSubscribedEventSecurity = exports.ListSubscribedEventQueryParams = exports.ListSubscribedEventPathParams = exports.ListSubscribedEventServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSubscribedEventServerList = [
    "https://events.twilio.com",
];
var ListSubscribedEventPathParams = /** @class */ (function (_super) {
    __extends(ListSubscribedEventPathParams, _super);
    function ListSubscribedEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" }),
        __metadata("design:type", String)
    ], ListSubscribedEventPathParams.prototype, "subscriptionSid", void 0);
    return ListSubscribedEventPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSubscribedEventPathParams = ListSubscribedEventPathParams;
var ListSubscribedEventQueryParams = /** @class */ (function (_super) {
    __extends(ListSubscribedEventQueryParams, _super);
    function ListSubscribedEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSubscribedEventQueryParams.prototype, "pageSize", void 0);
    return ListSubscribedEventQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSubscribedEventQueryParams = ListSubscribedEventQueryParams;
var ListSubscribedEventSecurity = /** @class */ (function (_super) {
    __extends(ListSubscribedEventSecurity, _super);
    function ListSubscribedEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSubscribedEventSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSubscribedEventSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSubscribedEventSecurity = ListSubscribedEventSecurity;
var ListSubscribedEventListSubscribedEventResponseMeta = /** @class */ (function (_super) {
    __extends(ListSubscribedEventListSubscribedEventResponseMeta, _super);
    function ListSubscribedEventListSubscribedEventResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "url", void 0);
    return ListSubscribedEventListSubscribedEventResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSubscribedEventListSubscribedEventResponseMeta = ListSubscribedEventListSubscribedEventResponseMeta;
var ListSubscribedEventListSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(ListSubscribedEventListSubscribedEventResponse, _super);
    function ListSubscribedEventListSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSubscribedEventListSubscribedEventResponseMeta)
    ], ListSubscribedEventListSubscribedEventResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types", elemType: shared.EventsV1SubscriptionSubscribedEvent }),
        __metadata("design:type", Array)
    ], ListSubscribedEventListSubscribedEventResponse.prototype, "types", void 0);
    return ListSubscribedEventListSubscribedEventResponse;
}(utils_1.SpeakeasyBase));
exports.ListSubscribedEventListSubscribedEventResponse = ListSubscribedEventListSubscribedEventResponse;
var ListSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(ListSubscribedEventRequest, _super);
    function ListSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSubscribedEventRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSubscribedEventPathParams)
    ], ListSubscribedEventRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSubscribedEventQueryParams)
    ], ListSubscribedEventRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSubscribedEventSecurity)
    ], ListSubscribedEventRequest.prototype, "security", void 0);
    return ListSubscribedEventRequest;
}(utils_1.SpeakeasyBase));
exports.ListSubscribedEventRequest = ListSubscribedEventRequest;
var ListSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(ListSubscribedEventResponse, _super);
    function ListSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSubscribedEventResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSubscribedEventListSubscribedEventResponse)
    ], ListSubscribedEventResponse.prototype, "listSubscribedEventResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSubscribedEventResponse.prototype, "statusCode", void 0);
    return ListSubscribedEventResponse;
}(utils_1.SpeakeasyBase));
exports.ListSubscribedEventResponse = ListSubscribedEventResponse;
