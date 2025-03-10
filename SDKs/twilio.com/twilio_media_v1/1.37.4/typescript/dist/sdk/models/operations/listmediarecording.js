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
exports.ListMediaRecordingResponse = exports.ListMediaRecordingRequest = exports.ListMediaRecordingListMediaRecordingResponse = exports.ListMediaRecordingListMediaRecordingResponseMeta = exports.ListMediaRecordingSecurity = exports.ListMediaRecordingQueryParams = exports.ListMediaRecordingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListMediaRecordingServerList = [
    "https://media.twilio.com",
];
var ListMediaRecordingQueryParams = /** @class */ (function (_super) {
    __extends(ListMediaRecordingQueryParams, _super);
    function ListMediaRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMediaRecordingQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ProcessorSid" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "processorSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SourceSid" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "sourceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "status", void 0);
    return ListMediaRecordingQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListMediaRecordingQueryParams = ListMediaRecordingQueryParams;
var ListMediaRecordingSecurity = /** @class */ (function (_super) {
    __extends(ListMediaRecordingSecurity, _super);
    function ListMediaRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMediaRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMediaRecordingSecurity;
}(utils_1.SpeakeasyBase));
exports.ListMediaRecordingSecurity = ListMediaRecordingSecurity;
var ListMediaRecordingListMediaRecordingResponseMeta = /** @class */ (function (_super) {
    __extends(ListMediaRecordingListMediaRecordingResponseMeta, _super);
    function ListMediaRecordingListMediaRecordingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "url", void 0);
    return ListMediaRecordingListMediaRecordingResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListMediaRecordingListMediaRecordingResponseMeta = ListMediaRecordingListMediaRecordingResponseMeta;
var ListMediaRecordingListMediaRecordingResponse = /** @class */ (function (_super) {
    __extends(ListMediaRecordingListMediaRecordingResponse, _super);
    function ListMediaRecordingListMediaRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_recordings", elemType: shared.MediaV1MediaRecording }),
        __metadata("design:type", Array)
    ], ListMediaRecordingListMediaRecordingResponse.prototype, "mediaRecordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListMediaRecordingListMediaRecordingResponseMeta)
    ], ListMediaRecordingListMediaRecordingResponse.prototype, "meta", void 0);
    return ListMediaRecordingListMediaRecordingResponse;
}(utils_1.SpeakeasyBase));
exports.ListMediaRecordingListMediaRecordingResponse = ListMediaRecordingListMediaRecordingResponse;
var ListMediaRecordingRequest = /** @class */ (function (_super) {
    __extends(ListMediaRecordingRequest, _super);
    function ListMediaRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMediaRecordingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMediaRecordingQueryParams)
    ], ListMediaRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMediaRecordingSecurity)
    ], ListMediaRecordingRequest.prototype, "security", void 0);
    return ListMediaRecordingRequest;
}(utils_1.SpeakeasyBase));
exports.ListMediaRecordingRequest = ListMediaRecordingRequest;
var ListMediaRecordingResponse = /** @class */ (function (_super) {
    __extends(ListMediaRecordingResponse, _super);
    function ListMediaRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMediaRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMediaRecordingListMediaRecordingResponse)
    ], ListMediaRecordingResponse.prototype, "listMediaRecordingResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMediaRecordingResponse.prototype, "statusCode", void 0);
    return ListMediaRecordingResponse;
}(utils_1.SpeakeasyBase));
exports.ListMediaRecordingResponse = ListMediaRecordingResponse;
