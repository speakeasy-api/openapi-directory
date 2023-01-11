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
exports.GetImagesResponse = exports.GetImagesRequest = exports.GetImages200ApplicationJson = exports.GetImages200ApplicationJsonMeta = exports.GetImages200ApplicationJsonMetaPagination = exports.GetImages200ApplicationJsonImages = exports.GetImages200ApplicationJsonImagesTypeEnum = exports.GetImages200ApplicationJsonImagesStatusEnum = exports.GetImages200ApplicationJsonImagesProtection = exports.GetImages200ApplicationJsonImagesOsFlavorEnum = exports.GetImages200ApplicationJsonImagesCreatedFrom = exports.GetImagesQueryParams = exports.GetImagesTypeEnum = exports.GetImagesStatusEnum = exports.GetImagesSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetImagesSortEnum;
(function (GetImagesSortEnum) {
    GetImagesSortEnum["Id"] = "id";
    GetImagesSortEnum["IdAsc"] = "id:asc";
    GetImagesSortEnum["IdDesc"] = "id:desc";
    GetImagesSortEnum["Name"] = "name";
    GetImagesSortEnum["NameAsc"] = "name:asc";
    GetImagesSortEnum["NameDesc"] = "name:desc";
    GetImagesSortEnum["Created"] = "created";
    GetImagesSortEnum["CreatedAsc"] = "created:asc";
    GetImagesSortEnum["CreatedDesc"] = "created:desc";
})(GetImagesSortEnum = exports.GetImagesSortEnum || (exports.GetImagesSortEnum = {}));
var GetImagesStatusEnum;
(function (GetImagesStatusEnum) {
    GetImagesStatusEnum["Available"] = "available";
    GetImagesStatusEnum["Creating"] = "creating";
})(GetImagesStatusEnum = exports.GetImagesStatusEnum || (exports.GetImagesStatusEnum = {}));
var GetImagesTypeEnum;
(function (GetImagesTypeEnum) {
    GetImagesTypeEnum["System"] = "system";
    GetImagesTypeEnum["Snapshot"] = "snapshot";
    GetImagesTypeEnum["Backup"] = "backup";
    GetImagesTypeEnum["App"] = "app";
})(GetImagesTypeEnum = exports.GetImagesTypeEnum || (exports.GetImagesTypeEnum = {}));
var GetImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetImagesQueryParams, _super);
    function GetImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=bound_to" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "boundTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_deprecated" }),
        __metadata("design:type", Boolean)
    ], GetImagesQueryParams.prototype, "includeDeprecated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "type", void 0);
    return GetImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetImagesQueryParams = GetImagesQueryParams;
// GetImages200ApplicationJsonImagesCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var GetImages200ApplicationJsonImagesCreatedFrom = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationJsonImagesCreatedFrom, _super);
    function GetImages200ApplicationJsonImagesCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonImagesCreatedFrom.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImagesCreatedFrom.prototype, "name", void 0);
    return GetImages200ApplicationJsonImagesCreatedFrom;
}(utils_1.SpeakeasyBase));
exports.GetImages200ApplicationJsonImagesCreatedFrom = GetImages200ApplicationJsonImagesCreatedFrom;
var GetImages200ApplicationJsonImagesOsFlavorEnum;
(function (GetImages200ApplicationJsonImagesOsFlavorEnum) {
    GetImages200ApplicationJsonImagesOsFlavorEnum["Ubuntu"] = "ubuntu";
    GetImages200ApplicationJsonImagesOsFlavorEnum["Centos"] = "centos";
    GetImages200ApplicationJsonImagesOsFlavorEnum["Debian"] = "debian";
    GetImages200ApplicationJsonImagesOsFlavorEnum["Fedora"] = "fedora";
    GetImages200ApplicationJsonImagesOsFlavorEnum["Unknown"] = "unknown";
})(GetImages200ApplicationJsonImagesOsFlavorEnum = exports.GetImages200ApplicationJsonImagesOsFlavorEnum || (exports.GetImages200ApplicationJsonImagesOsFlavorEnum = {}));
// GetImages200ApplicationJsonImagesProtection
/**
 * Protection configuration for the Resource
**/
var GetImages200ApplicationJsonImagesProtection = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationJsonImagesProtection, _super);
    function GetImages200ApplicationJsonImagesProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetImages200ApplicationJsonImagesProtection.prototype, "delete", void 0);
    return GetImages200ApplicationJsonImagesProtection;
}(utils_1.SpeakeasyBase));
exports.GetImages200ApplicationJsonImagesProtection = GetImages200ApplicationJsonImagesProtection;
var GetImages200ApplicationJsonImagesStatusEnum;
(function (GetImages200ApplicationJsonImagesStatusEnum) {
    GetImages200ApplicationJsonImagesStatusEnum["Available"] = "available";
    GetImages200ApplicationJsonImagesStatusEnum["Creating"] = "creating";
    GetImages200ApplicationJsonImagesStatusEnum["Unavailable"] = "unavailable";
})(GetImages200ApplicationJsonImagesStatusEnum = exports.GetImages200ApplicationJsonImagesStatusEnum || (exports.GetImages200ApplicationJsonImagesStatusEnum = {}));
var GetImages200ApplicationJsonImagesTypeEnum;
(function (GetImages200ApplicationJsonImagesTypeEnum) {
    GetImages200ApplicationJsonImagesTypeEnum["System"] = "system";
    GetImages200ApplicationJsonImagesTypeEnum["App"] = "app";
    GetImages200ApplicationJsonImagesTypeEnum["Snapshot"] = "snapshot";
    GetImages200ApplicationJsonImagesTypeEnum["Backup"] = "backup";
    GetImages200ApplicationJsonImagesTypeEnum["Temporary"] = "temporary";
})(GetImages200ApplicationJsonImagesTypeEnum = exports.GetImages200ApplicationJsonImagesTypeEnum || (exports.GetImages200ApplicationJsonImagesTypeEnum = {}));
var GetImages200ApplicationJsonImages = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationJsonImages, _super);
    function GetImages200ApplicationJsonImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonImages.prototype, "boundTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "buildId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_from" }),
        __metadata("design:type", GetImages200ApplicationJsonImagesCreatedFrom)
    ], GetImages200ApplicationJsonImages.prototype, "createdFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "deprecated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonImages.prototype, "diskSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonImages.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonImages.prototype, "imageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GetImages200ApplicationJsonImages.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "osFlavor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "osVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protection" }),
        __metadata("design:type", GetImages200ApplicationJsonImagesProtection)
    ], GetImages200ApplicationJsonImages.prototype, "protection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], GetImages200ApplicationJsonImages.prototype, "rapidDeploy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetImages200ApplicationJsonImages.prototype, "type", void 0);
    return GetImages200ApplicationJsonImages;
}(utils_1.SpeakeasyBase));
exports.GetImages200ApplicationJsonImages = GetImages200ApplicationJsonImages;
var GetImages200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationJsonMetaPagination, _super);
    function GetImages200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetImages200ApplicationJsonMetaPagination;
}(utils_1.SpeakeasyBase));
exports.GetImages200ApplicationJsonMetaPagination = GetImages200ApplicationJsonMetaPagination;
var GetImages200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationJsonMeta, _super);
    function GetImages200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", GetImages200ApplicationJsonMetaPagination)
    ], GetImages200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetImages200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.GetImages200ApplicationJsonMeta = GetImages200ApplicationJsonMeta;
var GetImages200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationJson, _super);
    function GetImages200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images", elemType: GetImages200ApplicationJsonImages }),
        __metadata("design:type", Array)
    ], GetImages200ApplicationJson.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetImages200ApplicationJsonMeta)
    ], GetImages200ApplicationJson.prototype, "meta", void 0);
    return GetImages200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetImages200ApplicationJson = GetImages200ApplicationJson;
var GetImagesRequest = /** @class */ (function (_super) {
    __extends(GetImagesRequest, _super);
    function GetImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImagesQueryParams)
    ], GetImagesRequest.prototype, "queryParams", void 0);
    return GetImagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetImagesRequest = GetImagesRequest;
var GetImagesResponse = /** @class */ (function (_super) {
    __extends(GetImagesResponse, _super);
    function GetImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetImagesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImages200ApplicationJson)
    ], GetImagesResponse.prototype, "getImages200ApplicationJSONObject", void 0);
    return GetImagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetImagesResponse = GetImagesResponse;
