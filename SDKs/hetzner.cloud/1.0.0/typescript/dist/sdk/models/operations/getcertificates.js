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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCertificatesResponse = exports.GetCertificatesRequest = exports.GetCertificatesCertificatesResponse = exports.GetCertificatesCertificatesResponseMeta = exports.GetCertificatesCertificatesResponseMetaPagination = exports.GetCertificatesCertificatesResponseCertificate = exports.GetCertificatesCertificatesResponseCertificateUsedBy = exports.GetCertificatesCertificatesResponseCertificateTypeEnum = exports.GetCertificatesCertificatesResponseCertificateStatus = exports.GetCertificatesCertificatesResponseCertificateStatusRenewalEnum = exports.GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum = exports.GetCertificatesCertificatesResponseCertificateStatusError = exports.GetCertificatesQueryParams = exports.GetCertificatesTypeParameterTypeEnum = exports.GetCertificatesSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetCertificatesSortEnum;
(function (GetCertificatesSortEnum) {
    GetCertificatesSortEnum["Id"] = "id";
    GetCertificatesSortEnum["IdAsc"] = "id:asc";
    GetCertificatesSortEnum["IdDesc"] = "id:desc";
    GetCertificatesSortEnum["Name"] = "name";
    GetCertificatesSortEnum["NameAsc"] = "name:asc";
    GetCertificatesSortEnum["NameDesc"] = "name:desc";
    GetCertificatesSortEnum["Created"] = "created";
    GetCertificatesSortEnum["CreatedAsc"] = "created:asc";
    GetCertificatesSortEnum["CreatedDesc"] = "created:desc";
})(GetCertificatesSortEnum = exports.GetCertificatesSortEnum || (exports.GetCertificatesSortEnum = {}));
var GetCertificatesTypeParameterTypeEnum;
(function (GetCertificatesTypeParameterTypeEnum) {
    GetCertificatesTypeParameterTypeEnum["Uploaded"] = "uploaded";
    GetCertificatesTypeParameterTypeEnum["Managed"] = "managed";
})(GetCertificatesTypeParameterTypeEnum = exports.GetCertificatesTypeParameterTypeEnum || (exports.GetCertificatesTypeParameterTypeEnum = {}));
var GetCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(GetCertificatesQueryParams, _super);
    function GetCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetCertificatesQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetCertificatesQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCertificatesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetCertificatesQueryParams.prototype, "type", void 0);
    return GetCertificatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesQueryParams = GetCertificatesQueryParams;
// GetCertificatesCertificatesResponseCertificateStatusError
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
var GetCertificatesCertificatesResponseCertificateStatusError = /** @class */ (function (_super) {
    __extends(GetCertificatesCertificatesResponseCertificateStatusError, _super);
    function GetCertificatesCertificatesResponseCertificateStatusError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificateStatusError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificateStatusError.prototype, "message", void 0);
    return GetCertificatesCertificatesResponseCertificateStatusError;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesCertificatesResponseCertificateStatusError = GetCertificatesCertificatesResponseCertificateStatusError;
var GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum;
(function (GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum) {
    GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum["Pending"] = "pending";
    GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum["Completed"] = "completed";
    GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum["Failed"] = "failed";
})(GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum = exports.GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum || (exports.GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum = {}));
var GetCertificatesCertificatesResponseCertificateStatusRenewalEnum;
(function (GetCertificatesCertificatesResponseCertificateStatusRenewalEnum) {
    GetCertificatesCertificatesResponseCertificateStatusRenewalEnum["Scheduled"] = "scheduled";
    GetCertificatesCertificatesResponseCertificateStatusRenewalEnum["Pending"] = "pending";
    GetCertificatesCertificatesResponseCertificateStatusRenewalEnum["Failed"] = "failed";
    GetCertificatesCertificatesResponseCertificateStatusRenewalEnum["Unavailable"] = "unavailable";
})(GetCertificatesCertificatesResponseCertificateStatusRenewalEnum = exports.GetCertificatesCertificatesResponseCertificateStatusRenewalEnum || (exports.GetCertificatesCertificatesResponseCertificateStatusRenewalEnum = {}));
// GetCertificatesCertificatesResponseCertificateStatus
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
var GetCertificatesCertificatesResponseCertificateStatus = /** @class */ (function (_super) {
    __extends(GetCertificatesCertificatesResponseCertificateStatus, _super);
    function GetCertificatesCertificatesResponseCertificateStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", GetCertificatesCertificatesResponseCertificateStatusError)
    ], GetCertificatesCertificatesResponseCertificateStatus.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issuance" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificateStatus.prototype, "issuance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewal" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificateStatus.prototype, "renewal", void 0);
    return GetCertificatesCertificatesResponseCertificateStatus;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesCertificatesResponseCertificateStatus = GetCertificatesCertificatesResponseCertificateStatus;
var GetCertificatesCertificatesResponseCertificateTypeEnum;
(function (GetCertificatesCertificatesResponseCertificateTypeEnum) {
    GetCertificatesCertificatesResponseCertificateTypeEnum["Uploaded"] = "uploaded";
    GetCertificatesCertificatesResponseCertificateTypeEnum["Managed"] = "managed";
})(GetCertificatesCertificatesResponseCertificateTypeEnum = exports.GetCertificatesCertificatesResponseCertificateTypeEnum || (exports.GetCertificatesCertificatesResponseCertificateTypeEnum = {}));
var GetCertificatesCertificatesResponseCertificateUsedBy = /** @class */ (function (_super) {
    __extends(GetCertificatesCertificatesResponseCertificateUsedBy, _super);
    function GetCertificatesCertificatesResponseCertificateUsedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseCertificateUsedBy.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificateUsedBy.prototype, "type", void 0);
    return GetCertificatesCertificatesResponseCertificateUsedBy;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesCertificatesResponseCertificateUsedBy = GetCertificatesCertificatesResponseCertificateUsedBy;
var GetCertificatesCertificatesResponseCertificate = /** @class */ (function (_super) {
    __extends(GetCertificatesCertificatesResponseCertificate, _super);
    function GetCertificatesCertificatesResponseCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "certificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain_names" }),
        __metadata("design:type", Array)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "domainNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "fingerprint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=not_valid_after" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "notValidAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=not_valid_before" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "notValidBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", GetCertificatesCertificatesResponseCertificateStatus)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used_by", elemType: GetCertificatesCertificatesResponseCertificateUsedBy }),
        __metadata("design:type", Array)
    ], GetCertificatesCertificatesResponseCertificate.prototype, "usedBy", void 0);
    return GetCertificatesCertificatesResponseCertificate;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesCertificatesResponseCertificate = GetCertificatesCertificatesResponseCertificate;
var GetCertificatesCertificatesResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetCertificatesCertificatesResponseMetaPagination, _super);
    function GetCertificatesCertificatesResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetCertificatesCertificatesResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetCertificatesCertificatesResponseMetaPagination;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesCertificatesResponseMetaPagination = GetCertificatesCertificatesResponseMetaPagination;
var GetCertificatesCertificatesResponseMeta = /** @class */ (function (_super) {
    __extends(GetCertificatesCertificatesResponseMeta, _super);
    function GetCertificatesCertificatesResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", GetCertificatesCertificatesResponseMetaPagination)
    ], GetCertificatesCertificatesResponseMeta.prototype, "pagination", void 0);
    return GetCertificatesCertificatesResponseMeta;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesCertificatesResponseMeta = GetCertificatesCertificatesResponseMeta;
var GetCertificatesCertificatesResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesCertificatesResponse, _super);
    function GetCertificatesCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificates", elemType: GetCertificatesCertificatesResponseCertificate }),
        __metadata("design:type", Array)
    ], GetCertificatesCertificatesResponse.prototype, "certificates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetCertificatesCertificatesResponseMeta)
    ], GetCertificatesCertificatesResponse.prototype, "meta", void 0);
    return GetCertificatesCertificatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesCertificatesResponse = GetCertificatesCertificatesResponse;
var GetCertificatesRequest = /** @class */ (function (_super) {
    __extends(GetCertificatesRequest, _super);
    function GetCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCertificatesQueryParams)
    ], GetCertificatesRequest.prototype, "queryParams", void 0);
    return GetCertificatesRequest;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesRequest = GetCertificatesRequest;
var GetCertificatesResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesResponse, _super);
    function GetCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCertificatesCertificatesResponse)
    ], GetCertificatesResponse.prototype, "certificatesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCertificatesResponse.prototype, "statusCode", void 0);
    return GetCertificatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesResponse = GetCertificatesResponse;
