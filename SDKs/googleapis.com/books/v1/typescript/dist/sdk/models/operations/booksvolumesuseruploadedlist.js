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
exports.BooksVolumesUseruploadedListResponse = exports.BooksVolumesUseruploadedListRequest = exports.BooksVolumesUseruploadedListSecurity = exports.BooksVolumesUseruploadedListQueryParams = exports.BooksVolumesUseruploadedListProcessingStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BooksVolumesUseruploadedListProcessingStateEnum;
(function (BooksVolumesUseruploadedListProcessingStateEnum) {
    BooksVolumesUseruploadedListProcessingStateEnum["ProcessingStateUndefined"] = "PROCESSING_STATE_UNDEFINED";
    BooksVolumesUseruploadedListProcessingStateEnum["CompletedFailed"] = "COMPLETED_FAILED";
    BooksVolumesUseruploadedListProcessingStateEnum["CompletedSuccess"] = "COMPLETED_SUCCESS";
    BooksVolumesUseruploadedListProcessingStateEnum["Running"] = "RUNNING";
})(BooksVolumesUseruploadedListProcessingStateEnum = exports.BooksVolumesUseruploadedListProcessingStateEnum || (exports.BooksVolumesUseruploadedListProcessingStateEnum = {}));
var BooksVolumesUseruploadedListQueryParams = /** @class */ (function (_super) {
    __extends(BooksVolumesUseruploadedListQueryParams, _super);
    function BooksVolumesUseruploadedListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=processingState" }),
        __metadata("design:type", Array)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "processingState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=volumeId" }),
        __metadata("design:type", Array)
    ], BooksVolumesUseruploadedListQueryParams.prototype, "volumeId", void 0);
    return BooksVolumesUseruploadedListQueryParams;
}(utils_1.SpeakeasyBase));
exports.BooksVolumesUseruploadedListQueryParams = BooksVolumesUseruploadedListQueryParams;
var BooksVolumesUseruploadedListSecurity = /** @class */ (function (_super) {
    __extends(BooksVolumesUseruploadedListSecurity, _super);
    function BooksVolumesUseruploadedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksVolumesUseruploadedListSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksVolumesUseruploadedListSecurity.prototype, "oauth2c", void 0);
    return BooksVolumesUseruploadedListSecurity;
}(utils_1.SpeakeasyBase));
exports.BooksVolumesUseruploadedListSecurity = BooksVolumesUseruploadedListSecurity;
var BooksVolumesUseruploadedListRequest = /** @class */ (function (_super) {
    __extends(BooksVolumesUseruploadedListRequest, _super);
    function BooksVolumesUseruploadedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BooksVolumesUseruploadedListQueryParams)
    ], BooksVolumesUseruploadedListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BooksVolumesUseruploadedListSecurity)
    ], BooksVolumesUseruploadedListRequest.prototype, "security", void 0);
    return BooksVolumesUseruploadedListRequest;
}(utils_1.SpeakeasyBase));
exports.BooksVolumesUseruploadedListRequest = BooksVolumesUseruploadedListRequest;
var BooksVolumesUseruploadedListResponse = /** @class */ (function (_super) {
    __extends(BooksVolumesUseruploadedListResponse, _super);
    function BooksVolumesUseruploadedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BooksVolumesUseruploadedListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BooksVolumesUseruploadedListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Volumes)
    ], BooksVolumesUseruploadedListResponse.prototype, "volumes", void 0);
    return BooksVolumesUseruploadedListResponse;
}(utils_1.SpeakeasyBase));
exports.BooksVolumesUseruploadedListResponse = BooksVolumesUseruploadedListResponse;
