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
exports.ListConferenceResponse = exports.ListConferenceRequest = exports.ListConferenceListConferenceResponse = exports.ListConferenceListConferenceResponseMeta = exports.ListConferenceSecurity = exports.ListConferenceQueryParams = exports.ListConferenceServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListConferenceServerList = [
    "https://insights.twilio.com",
];
var ListConferenceQueryParams = /** @class */ (function (_super) {
    __extends(ListConferenceQueryParams, _super);
    function ListConferenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "conferenceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=CreatedAfter" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=CreatedBefore" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DetectedIssues" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "detectedIssues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndReason" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "endReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MixerRegion" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "mixerRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConferenceQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Subaccount" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "subaccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Tags" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "tags", void 0);
    return ListConferenceQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListConferenceQueryParams = ListConferenceQueryParams;
var ListConferenceSecurity = /** @class */ (function (_super) {
    __extends(ListConferenceSecurity, _super);
    function ListConferenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConferenceSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConferenceSecurity;
}(utils_1.SpeakeasyBase));
exports.ListConferenceSecurity = ListConferenceSecurity;
var ListConferenceListConferenceResponseMeta = /** @class */ (function (_super) {
    __extends(ListConferenceListConferenceResponseMeta, _super);
    function ListConferenceListConferenceResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConferenceListConferenceResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConferenceListConferenceResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponseMeta.prototype, "url", void 0);
    return ListConferenceListConferenceResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListConferenceListConferenceResponseMeta = ListConferenceListConferenceResponseMeta;
var ListConferenceListConferenceResponse = /** @class */ (function (_super) {
    __extends(ListConferenceListConferenceResponse, _super);
    function ListConferenceListConferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conferences", elemType: shared.InsightsV1Conference }),
        __metadata("design:type", Array)
    ], ListConferenceListConferenceResponse.prototype, "conferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListConferenceListConferenceResponseMeta)
    ], ListConferenceListConferenceResponse.prototype, "meta", void 0);
    return ListConferenceListConferenceResponse;
}(utils_1.SpeakeasyBase));
exports.ListConferenceListConferenceResponse = ListConferenceListConferenceResponse;
var ListConferenceRequest = /** @class */ (function (_super) {
    __extends(ListConferenceRequest, _super);
    function ListConferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConferenceRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConferenceQueryParams)
    ], ListConferenceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConferenceSecurity)
    ], ListConferenceRequest.prototype, "security", void 0);
    return ListConferenceRequest;
}(utils_1.SpeakeasyBase));
exports.ListConferenceRequest = ListConferenceRequest;
var ListConferenceResponse = /** @class */ (function (_super) {
    __extends(ListConferenceResponse, _super);
    function ListConferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConferenceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConferenceListConferenceResponse)
    ], ListConferenceResponse.prototype, "listConferenceResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConferenceResponse.prototype, "statusCode", void 0);
    return ListConferenceResponse;
}(utils_1.SpeakeasyBase));
exports.ListConferenceResponse = ListConferenceResponse;
