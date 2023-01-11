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
exports.ListSystemsResponse = exports.ListSystemsRequest = exports.ListSystemsSecurity = exports.ListSystemsQueryParams = exports.ListSystemsSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListSystemsSortEnum;
(function (ListSystemsSortEnum) {
    ListSystemsSortEnum["Id"] = "id";
    ListSystemsSortEnum["DisplayName"] = "display_name";
    ListSystemsSortEnum["LastEvaluation"] = "last_evaluation";
    ListSystemsSortEnum["LastUpload"] = "last_upload";
    ListSystemsSortEnum["RhsaCount"] = "rhsa_count";
    ListSystemsSortEnum["RhbaCount"] = "rhba_count";
    ListSystemsSortEnum["RheaCount"] = "rhea_count";
    ListSystemsSortEnum["OtherCount"] = "other_count";
    ListSystemsSortEnum["Stale"] = "stale";
    ListSystemsSortEnum["PackagesInstalled"] = "packages_installed";
    ListSystemsSortEnum["PackagesUpdatable"] = "packages_updatable";
})(ListSystemsSortEnum = exports.ListSystemsSortEnum || (exports.ListSystemsSortEnum = {}));
var ListSystemsQueryParams = /** @class */ (function (_super) {
    __extends(ListSystemsQueryParams, _super);
    function ListSystemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[created]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[culled_timestamp]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterCulledTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[display_name]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterDisplayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[insights_id]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterInsightsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[last_evaluation]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterLastEvaluation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[last_upload]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterLastUpload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[other_count]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterOtherCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[packages_installed]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterPackagesInstalled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[packages_updatable]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterPackagesUpdatable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[rhba_count]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterRhbaCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[rhea_count]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterRheaCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[rhsa_count]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterRhsaCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[stale]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterStale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[stale_timestamp]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterStaleTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[stale_warning_timestamp]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterStaleWarningTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" }),
        __metadata("design:type", Array)
    ], ListSystemsQueryParams.prototype, "filterSystemProfileSapSidsIn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "filterSystemProfileSapSystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListSystemsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListSystemsQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "search", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListSystemsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ListSystemsQueryParams.prototype, "tags", void 0);
    return ListSystemsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSystemsQueryParams = ListSystemsQueryParams;
var ListSystemsSecurity = /** @class */ (function (_super) {
    __extends(ListSystemsSecurity, _super);
    function ListSystemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ListSystemsSecurity.prototype, "rhIdentity", void 0);
    return ListSystemsSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSystemsSecurity = ListSystemsSecurity;
var ListSystemsRequest = /** @class */ (function (_super) {
    __extends(ListSystemsRequest, _super);
    function ListSystemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSystemsQueryParams)
    ], ListSystemsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSystemsSecurity)
    ], ListSystemsRequest.prototype, "security", void 0);
    return ListSystemsRequest;
}(utils_1.SpeakeasyBase));
exports.ListSystemsRequest = ListSystemsRequest;
var ListSystemsResponse = /** @class */ (function (_super) {
    __extends(ListSystemsResponse, _super);
    function ListSystemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSystemsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSystemsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ControllersSystemsResponse)
    ], ListSystemsResponse.prototype, "controllersSystemsResponse", void 0);
    return ListSystemsResponse;
}(utils_1.SpeakeasyBase));
exports.ListSystemsResponse = ListSystemsResponse;
