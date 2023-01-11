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
exports.ListConferenceRecordingResponse = exports.ListConferenceRecordingRequest = exports.ListConferenceRecordingListConferenceRecordingResponse = exports.ListConferenceRecordingSecurity = exports.ListConferenceRecordingQueryParams = exports.ListConferenceRecordingPathParams = exports.ListConferenceRecordingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListConferenceRecordingServerList = [
    "https://api.twilio.com",
];
var ListConferenceRecordingPathParams = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingPathParams, _super);
    function ListConferenceRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingPathParams.prototype, "conferenceSid", void 0);
    return ListConferenceRecordingPathParams;
}(utils_1.SpeakeasyBase));
exports.ListConferenceRecordingPathParams = ListConferenceRecordingPathParams;
var ListConferenceRecordingQueryParams = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingQueryParams, _super);
    function ListConferenceRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreated" }),
        __metadata("design:type", Date)
    ], ListConferenceRecordingQueryParams.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreated<" }),
        __metadata("design:type", Date)
    ], ListConferenceRecordingQueryParams.prototype, "dateCreatedLessThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreated>" }),
        __metadata("design:type", Date)
    ], ListConferenceRecordingQueryParams.prototype, "dateCreatedGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingQueryParams.prototype, "pageSize", void 0);
    return ListConferenceRecordingQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListConferenceRecordingQueryParams = ListConferenceRecordingQueryParams;
var ListConferenceRecordingSecurity = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingSecurity, _super);
    function ListConferenceRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConferenceRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConferenceRecordingSecurity;
}(utils_1.SpeakeasyBase));
exports.ListConferenceRecordingSecurity = ListConferenceRecordingSecurity;
var ListConferenceRecordingListConferenceRecordingResponse = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingListConferenceRecordingResponse, _super);
    function ListConferenceRecordingListConferenceRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordings", elemType: shared.ApiV2010AccountConferenceConferenceRecording }),
        __metadata("design:type", Array)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "recordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "uri", void 0);
    return ListConferenceRecordingListConferenceRecordingResponse;
}(utils_1.SpeakeasyBase));
exports.ListConferenceRecordingListConferenceRecordingResponse = ListConferenceRecordingListConferenceRecordingResponse;
var ListConferenceRecordingRequest = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingRequest, _super);
    function ListConferenceRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConferenceRecordingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConferenceRecordingPathParams)
    ], ListConferenceRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConferenceRecordingQueryParams)
    ], ListConferenceRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConferenceRecordingSecurity)
    ], ListConferenceRecordingRequest.prototype, "security", void 0);
    return ListConferenceRecordingRequest;
}(utils_1.SpeakeasyBase));
exports.ListConferenceRecordingRequest = ListConferenceRecordingRequest;
var ListConferenceRecordingResponse = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingResponse, _super);
    function ListConferenceRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConferenceRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConferenceRecordingListConferenceRecordingResponse)
    ], ListConferenceRecordingResponse.prototype, "listConferenceRecordingResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConferenceRecordingResponse.prototype, "statusCode", void 0);
    return ListConferenceRecordingResponse;
}(utils_1.SpeakeasyBase));
exports.ListConferenceRecordingResponse = ListConferenceRecordingResponse;
