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
exports.ListRoomParticipantResponse = exports.ListRoomParticipantRequest = exports.ListRoomParticipantListRoomParticipantResponse = exports.ListRoomParticipantListRoomParticipantResponseMeta = exports.ListRoomParticipantSecurity = exports.ListRoomParticipantQueryParams = exports.ListRoomParticipantPathParams = exports.ListRoomParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListRoomParticipantServerList = [
    "https://video.twilio.com",
];
var ListRoomParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPathParams, _super);
    function ListRoomParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPathParams.prototype, "roomSid", void 0);
    return ListRoomParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.ListRoomParticipantPathParams = ListRoomParticipantPathParams;
var ListRoomParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantQueryParams, _super);
    function ListRoomParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListRoomParticipantQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], ListRoomParticipantQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], ListRoomParticipantQueryParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListRoomParticipantQueryParams.prototype, "status", void 0);
    return ListRoomParticipantQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListRoomParticipantQueryParams = ListRoomParticipantQueryParams;
var ListRoomParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSecurity, _super);
    function ListRoomParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRoomParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRoomParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.ListRoomParticipantSecurity = ListRoomParticipantSecurity;
var ListRoomParticipantListRoomParticipantResponseMeta = /** @class */ (function (_super) {
    __extends(ListRoomParticipantListRoomParticipantResponseMeta, _super);
    function ListRoomParticipantListRoomParticipantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "url", void 0);
    return ListRoomParticipantListRoomParticipantResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListRoomParticipantListRoomParticipantResponseMeta = ListRoomParticipantListRoomParticipantResponseMeta;
var ListRoomParticipantListRoomParticipantResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantListRoomParticipantResponse, _super);
    function ListRoomParticipantListRoomParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListRoomParticipantListRoomParticipantResponseMeta)
    ], ListRoomParticipantListRoomParticipantResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: shared.VideoV1RoomRoomParticipant }),
        __metadata("design:type", Array)
    ], ListRoomParticipantListRoomParticipantResponse.prototype, "participants", void 0);
    return ListRoomParticipantListRoomParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.ListRoomParticipantListRoomParticipantResponse = ListRoomParticipantListRoomParticipantResponse;
var ListRoomParticipantRequest = /** @class */ (function (_super) {
    __extends(ListRoomParticipantRequest, _super);
    function ListRoomParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRoomParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRoomParticipantPathParams)
    ], ListRoomParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRoomParticipantQueryParams)
    ], ListRoomParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRoomParticipantSecurity)
    ], ListRoomParticipantRequest.prototype, "security", void 0);
    return ListRoomParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.ListRoomParticipantRequest = ListRoomParticipantRequest;
var ListRoomParticipantResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantResponse, _super);
    function ListRoomParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRoomParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRoomParticipantListRoomParticipantResponse)
    ], ListRoomParticipantResponse.prototype, "listRoomParticipantResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListRoomParticipantResponse.prototype, "statusCode", void 0);
    return ListRoomParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.ListRoomParticipantResponse = ListRoomParticipantResponse;
