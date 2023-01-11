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
exports.GetCertificatesIdActionsResponse = exports.GetCertificatesIdActionsRequest = exports.GetCertificatesIdActionsActionsResponse = exports.GetCertificatesIdActionsActionsResponseMeta = exports.GetCertificatesIdActionsActionsResponseMetaPagination = exports.GetCertificatesIdActionsActionsResponseAction = exports.GetCertificatesIdActionsActionsResponseActionStatusEnum = exports.GetCertificatesIdActionsActionsResponseActionResources = exports.GetCertificatesIdActionsActionsResponseActionError = exports.GetCertificatesIdActionsQueryParams = exports.GetCertificatesIdActionsStatusParameterStatusEnum = exports.GetCertificatesIdActionsSortParameterSortEnum = exports.GetCertificatesIdActionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCertificatesIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsPathParams, _super);
    function GetCertificatesIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsPathParams.prototype, "id", void 0);
    return GetCertificatesIdActionsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsPathParams = GetCertificatesIdActionsPathParams;
var GetCertificatesIdActionsSortParameterSortEnum;
(function (GetCertificatesIdActionsSortParameterSortEnum) {
    GetCertificatesIdActionsSortParameterSortEnum["Id"] = "id";
    GetCertificatesIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetCertificatesIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetCertificatesIdActionsSortParameterSortEnum["Command"] = "command";
    GetCertificatesIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetCertificatesIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetCertificatesIdActionsSortParameterSortEnum["Status"] = "status";
    GetCertificatesIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetCertificatesIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetCertificatesIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetCertificatesIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetCertificatesIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetCertificatesIdActionsSortParameterSortEnum["Started"] = "started";
    GetCertificatesIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetCertificatesIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetCertificatesIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetCertificatesIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetCertificatesIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetCertificatesIdActionsSortParameterSortEnum = exports.GetCertificatesIdActionsSortParameterSortEnum || (exports.GetCertificatesIdActionsSortParameterSortEnum = {}));
var GetCertificatesIdActionsStatusParameterStatusEnum;
(function (GetCertificatesIdActionsStatusParameterStatusEnum) {
    GetCertificatesIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetCertificatesIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetCertificatesIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetCertificatesIdActionsStatusParameterStatusEnum = exports.GetCertificatesIdActionsStatusParameterStatusEnum || (exports.GetCertificatesIdActionsStatusParameterStatusEnum = {}));
var GetCertificatesIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsQueryParams, _super);
    function GetCertificatesIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsQueryParams.prototype, "status", void 0);
    return GetCertificatesIdActionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsQueryParams = GetCertificatesIdActionsQueryParams;
// GetCertificatesIdActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetCertificatesIdActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionsResponseActionError, _super);
    function GetCertificatesIdActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionsResponseActionError.prototype, "message", void 0);
    return GetCertificatesIdActionsActionsResponseActionError;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsActionsResponseActionError = GetCertificatesIdActionsActionsResponseActionError;
var GetCertificatesIdActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionsResponseActionResources, _super);
    function GetCertificatesIdActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetCertificatesIdActionsActionsResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsActionsResponseActionResources = GetCertificatesIdActionsActionsResponseActionResources;
var GetCertificatesIdActionsActionsResponseActionStatusEnum;
(function (GetCertificatesIdActionsActionsResponseActionStatusEnum) {
    GetCertificatesIdActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetCertificatesIdActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetCertificatesIdActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetCertificatesIdActionsActionsResponseActionStatusEnum = exports.GetCertificatesIdActionsActionsResponseActionStatusEnum || (exports.GetCertificatesIdActionsActionsResponseActionStatusEnum = {}));
var GetCertificatesIdActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionsResponseAction, _super);
    function GetCertificatesIdActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", GetCertificatesIdActionsActionsResponseActionError)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: GetCertificatesIdActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionsResponseAction.prototype, "status", void 0);
    return GetCertificatesIdActionsActionsResponseAction;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsActionsResponseAction = GetCertificatesIdActionsActionsResponseAction;
var GetCertificatesIdActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionsResponseMetaPagination, _super);
    function GetCertificatesIdActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetCertificatesIdActionsActionsResponseMetaPagination;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsActionsResponseMetaPagination = GetCertificatesIdActionsActionsResponseMetaPagination;
var GetCertificatesIdActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionsResponseMeta, _super);
    function GetCertificatesIdActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", GetCertificatesIdActionsActionsResponseMetaPagination)
    ], GetCertificatesIdActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetCertificatesIdActionsActionsResponseMeta;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsActionsResponseMeta = GetCertificatesIdActionsActionsResponseMeta;
var GetCertificatesIdActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionsResponse, _super);
    function GetCertificatesIdActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: GetCertificatesIdActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetCertificatesIdActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetCertificatesIdActionsActionsResponseMeta)
    ], GetCertificatesIdActionsActionsResponse.prototype, "meta", void 0);
    return GetCertificatesIdActionsActionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsActionsResponse = GetCertificatesIdActionsActionsResponse;
var GetCertificatesIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsRequest, _super);
    function GetCertificatesIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCertificatesIdActionsPathParams)
    ], GetCertificatesIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCertificatesIdActionsQueryParams)
    ], GetCertificatesIdActionsRequest.prototype, "queryParams", void 0);
    return GetCertificatesIdActionsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsRequest = GetCertificatesIdActionsRequest;
var GetCertificatesIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsResponse, _super);
    function GetCertificatesIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCertificatesIdActionsActionsResponse)
    ], GetCertificatesIdActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsResponse.prototype, "statusCode", void 0);
    return GetCertificatesIdActionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCertificatesIdActionsResponse = GetCertificatesIdActionsResponse;
