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
exports.ListVideoRoomSummaryResponse = exports.ListVideoRoomSummaryRequest = exports.ListVideoRoomSummaryListVideoRoomSummaryResponse = exports.ListVideoRoomSummaryListVideoRoomSummaryResponseMeta = exports.ListVideoRoomSummarySecurity = exports.ListVideoRoomSummaryQueryParams = exports.ListVideoRoomSummaryServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListVideoRoomSummaryServerList = [
    "https://insights.twilio.com",
];
var ListVideoRoomSummaryQueryParams = /** @class */ (function (_super) {
    __extends(ListVideoRoomSummaryQueryParams, _super);
    function ListVideoRoomSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Codec" }),
        __metadata("design:type", Array)
    ], ListVideoRoomSummaryQueryParams.prototype, "codec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=CreatedAfter" }),
        __metadata("design:type", Date)
    ], ListVideoRoomSummaryQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=CreatedBefore" }),
        __metadata("design:type", Date)
    ], ListVideoRoomSummaryQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListVideoRoomSummaryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RoomName" }),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryQueryParams.prototype, "roomName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RoomType" }),
        __metadata("design:type", Array)
    ], ListVideoRoomSummaryQueryParams.prototype, "roomType", void 0);
    return ListVideoRoomSummaryQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListVideoRoomSummaryQueryParams = ListVideoRoomSummaryQueryParams;
var ListVideoRoomSummarySecurity = /** @class */ (function (_super) {
    __extends(ListVideoRoomSummarySecurity, _super);
    function ListVideoRoomSummarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListVideoRoomSummarySecurity.prototype, "accountSidAuthToken", void 0);
    return ListVideoRoomSummarySecurity;
}(utils_1.SpeakeasyBase));
exports.ListVideoRoomSummarySecurity = ListVideoRoomSummarySecurity;
var ListVideoRoomSummaryListVideoRoomSummaryResponseMeta = /** @class */ (function (_super) {
    __extends(ListVideoRoomSummaryListVideoRoomSummaryResponseMeta, _super);
    function ListVideoRoomSummaryListVideoRoomSummaryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponseMeta.prototype, "url", void 0);
    return ListVideoRoomSummaryListVideoRoomSummaryResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListVideoRoomSummaryListVideoRoomSummaryResponseMeta = ListVideoRoomSummaryListVideoRoomSummaryResponseMeta;
var ListVideoRoomSummaryListVideoRoomSummaryResponse = /** @class */ (function (_super) {
    __extends(ListVideoRoomSummaryListVideoRoomSummaryResponse, _super);
    function ListVideoRoomSummaryListVideoRoomSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListVideoRoomSummaryListVideoRoomSummaryResponseMeta)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: shared.InsightsV1VideoRoomSummary }),
        __metadata("design:type", Array)
    ], ListVideoRoomSummaryListVideoRoomSummaryResponse.prototype, "rooms", void 0);
    return ListVideoRoomSummaryListVideoRoomSummaryResponse;
}(utils_1.SpeakeasyBase));
exports.ListVideoRoomSummaryListVideoRoomSummaryResponse = ListVideoRoomSummaryListVideoRoomSummaryResponse;
var ListVideoRoomSummaryRequest = /** @class */ (function (_super) {
    __extends(ListVideoRoomSummaryRequest, _super);
    function ListVideoRoomSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVideoRoomSummaryQueryParams)
    ], ListVideoRoomSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVideoRoomSummarySecurity)
    ], ListVideoRoomSummaryRequest.prototype, "security", void 0);
    return ListVideoRoomSummaryRequest;
}(utils_1.SpeakeasyBase));
exports.ListVideoRoomSummaryRequest = ListVideoRoomSummaryRequest;
var ListVideoRoomSummaryResponse = /** @class */ (function (_super) {
    __extends(ListVideoRoomSummaryResponse, _super);
    function ListVideoRoomSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListVideoRoomSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVideoRoomSummaryListVideoRoomSummaryResponse)
    ], ListVideoRoomSummaryResponse.prototype, "listVideoRoomSummaryResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListVideoRoomSummaryResponse.prototype, "statusCode", void 0);
    return ListVideoRoomSummaryResponse;
}(utils_1.SpeakeasyBase));
exports.ListVideoRoomSummaryResponse = ListVideoRoomSummaryResponse;
