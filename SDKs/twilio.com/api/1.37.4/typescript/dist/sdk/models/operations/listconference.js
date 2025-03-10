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
exports.ListConferenceResponse = exports.ListConferenceRequest = exports.ListConferenceListConferenceResponse = exports.ListConferenceSecurity = exports.ListConferenceQueryParams = exports.ListConferencePathParams = exports.ListConferenceServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListConferenceServerList = [
    "https://api.twilio.com",
];
var ListConferencePathParams = /** @class */ (function (_super) {
    __extends(ListConferencePathParams, _super);
    function ListConferencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListConferencePathParams.prototype, "accountSid", void 0);
    return ListConferencePathParams;
}(utils_1.SpeakeasyBase));
exports.ListConferencePathParams = ListConferencePathParams;
var ListConferenceQueryParams = /** @class */ (function (_super) {
    __extends(ListConferenceQueryParams, _super);
    function ListConferenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreated" }),
        __metadata("design:type", Date)
    ], ListConferenceQueryParams.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreated<" }),
        __metadata("design:type", Date)
    ], ListConferenceQueryParams.prototype, "dateCreatedLessThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateCreated>" }),
        __metadata("design:type", Date)
    ], ListConferenceQueryParams.prototype, "dateCreatedGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateUpdated" }),
        __metadata("design:type", Date)
    ], ListConferenceQueryParams.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateUpdated<" }),
        __metadata("design:type", Date)
    ], ListConferenceQueryParams.prototype, "dateUpdatedLessThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DateUpdated>" }),
        __metadata("design:type", Date)
    ], ListConferenceQueryParams.prototype, "dateUpdatedGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConferenceQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListConferenceQueryParams.prototype, "status", void 0);
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
var ListConferenceListConferenceResponse = /** @class */ (function (_super) {
    __extends(ListConferenceListConferenceResponse, _super);
    function ListConferenceListConferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conferences", elemType: shared.ApiV2010AccountConference }),
        __metadata("design:type", Array)
    ], ListConferenceListConferenceResponse.prototype, "conferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListConferenceListConferenceResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConferenceListConferenceResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConferenceListConferenceResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListConferenceListConferenceResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListConferenceListConferenceResponse.prototype, "uri", void 0);
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
        __metadata("design:type", ListConferencePathParams)
    ], ListConferenceRequest.prototype, "pathParams", void 0);
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
