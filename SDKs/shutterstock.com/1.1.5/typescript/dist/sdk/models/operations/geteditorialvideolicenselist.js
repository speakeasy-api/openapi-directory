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
exports.GetEditorialVideoLicenseListResponse = exports.GetEditorialVideoLicenseListRequest = exports.GetEditorialVideoLicenseListSecurity = exports.GetEditorialVideoLicenseListQueryParams = exports.GetEditorialVideoLicenseListSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetEditorialVideoLicenseListSortEnum;
(function (GetEditorialVideoLicenseListSortEnum) {
    GetEditorialVideoLicenseListSortEnum["Newest"] = "newest";
    GetEditorialVideoLicenseListSortEnum["Oldest"] = "oldest";
})(GetEditorialVideoLicenseListSortEnum = exports.GetEditorialVideoLicenseListSortEnum || (exports.GetEditorialVideoLicenseListSortEnum = {}));
var GetEditorialVideoLicenseListQueryParams = /** @class */ (function (_super) {
    __extends(GetEditorialVideoLicenseListQueryParams, _super);
    function GetEditorialVideoLicenseListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", Date)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", Date)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=video_id" }),
        __metadata("design:type", String)
    ], GetEditorialVideoLicenseListQueryParams.prototype, "videoId", void 0);
    return GetEditorialVideoLicenseListQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetEditorialVideoLicenseListQueryParams = GetEditorialVideoLicenseListQueryParams;
var GetEditorialVideoLicenseListSecurity = /** @class */ (function (_super) {
    __extends(GetEditorialVideoLicenseListSecurity, _super);
    function GetEditorialVideoLicenseListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetEditorialVideoLicenseListSecurity.prototype, "customerAccessCode", void 0);
    return GetEditorialVideoLicenseListSecurity;
}(utils_1.SpeakeasyBase));
exports.GetEditorialVideoLicenseListSecurity = GetEditorialVideoLicenseListSecurity;
var GetEditorialVideoLicenseListRequest = /** @class */ (function (_super) {
    __extends(GetEditorialVideoLicenseListRequest, _super);
    function GetEditorialVideoLicenseListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEditorialVideoLicenseListQueryParams)
    ], GetEditorialVideoLicenseListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEditorialVideoLicenseListSecurity)
    ], GetEditorialVideoLicenseListRequest.prototype, "security", void 0);
    return GetEditorialVideoLicenseListRequest;
}(utils_1.SpeakeasyBase));
exports.GetEditorialVideoLicenseListRequest = GetEditorialVideoLicenseListRequest;
var GetEditorialVideoLicenseListResponse = /** @class */ (function (_super) {
    __extends(GetEditorialVideoLicenseListResponse, _super);
    function GetEditorialVideoLicenseListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEditorialVideoLicenseListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetEditorialVideoLicenseListResponse.prototype, "downloadHistoryDataList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEditorialVideoLicenseListResponse.prototype, "statusCode", void 0);
    return GetEditorialVideoLicenseListResponse;
}(utils_1.SpeakeasyBase));
exports.GetEditorialVideoLicenseListResponse = GetEditorialVideoLicenseListResponse;
