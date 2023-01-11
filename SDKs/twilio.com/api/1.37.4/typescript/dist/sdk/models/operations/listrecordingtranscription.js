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
exports.ListRecordingTranscriptionResponse = exports.ListRecordingTranscriptionRequest = exports.ListRecordingTranscriptionListRecordingTranscriptionResponse = exports.ListRecordingTranscriptionSecurity = exports.ListRecordingTranscriptionQueryParams = exports.ListRecordingTranscriptionPathParams = exports.ListRecordingTranscriptionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListRecordingTranscriptionServerList = [
    "https://api.twilio.com",
];
var ListRecordingTranscriptionPathParams = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionPathParams, _super);
    function ListRecordingTranscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=RecordingSid" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionPathParams.prototype, "recordingSid", void 0);
    return ListRecordingTranscriptionPathParams;
}(utils_1.SpeakeasyBase));
exports.ListRecordingTranscriptionPathParams = ListRecordingTranscriptionPathParams;
var ListRecordingTranscriptionQueryParams = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionQueryParams, _super);
    function ListRecordingTranscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionQueryParams.prototype, "pageSize", void 0);
    return ListRecordingTranscriptionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListRecordingTranscriptionQueryParams = ListRecordingTranscriptionQueryParams;
var ListRecordingTranscriptionSecurity = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionSecurity, _super);
    function ListRecordingTranscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRecordingTranscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRecordingTranscriptionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListRecordingTranscriptionSecurity = ListRecordingTranscriptionSecurity;
var ListRecordingTranscriptionListRecordingTranscriptionResponse = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionListRecordingTranscriptionResponse, _super);
    function ListRecordingTranscriptionListRecordingTranscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transcriptions", elemType: shared.ApiV2010AccountRecordingRecordingTranscription }),
        __metadata("design:type", Array)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "transcriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "uri", void 0);
    return ListRecordingTranscriptionListRecordingTranscriptionResponse;
}(utils_1.SpeakeasyBase));
exports.ListRecordingTranscriptionListRecordingTranscriptionResponse = ListRecordingTranscriptionListRecordingTranscriptionResponse;
var ListRecordingTranscriptionRequest = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionRequest, _super);
    function ListRecordingTranscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRecordingTranscriptionPathParams)
    ], ListRecordingTranscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRecordingTranscriptionQueryParams)
    ], ListRecordingTranscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRecordingTranscriptionSecurity)
    ], ListRecordingTranscriptionRequest.prototype, "security", void 0);
    return ListRecordingTranscriptionRequest;
}(utils_1.SpeakeasyBase));
exports.ListRecordingTranscriptionRequest = ListRecordingTranscriptionRequest;
var ListRecordingTranscriptionResponse = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionResponse, _super);
    function ListRecordingTranscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRecordingTranscriptionListRecordingTranscriptionResponse)
    ], ListRecordingTranscriptionResponse.prototype, "listRecordingTranscriptionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionResponse.prototype, "statusCode", void 0);
    return ListRecordingTranscriptionResponse;
}(utils_1.SpeakeasyBase));
exports.ListRecordingTranscriptionResponse = ListRecordingTranscriptionResponse;
