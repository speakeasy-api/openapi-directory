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
exports.ProjectsGetV2ProjectsGetResponse = exports.ProjectsGetV2ProjectsGetRequest = exports.ProjectsGetV2ProjectsGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProjectsGetV2ProjectsGetQueryParams = /** @class */ (function (_super) {
    __extends(ProjectsGetV2ProjectsGetQueryParams, _super);
    function ProjectsGetV2ProjectsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "entity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", Object)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sensorType" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "sensorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Object)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsGetQueryParams.prototype, "unit", void 0);
    return ProjectsGetV2ProjectsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ProjectsGetV2ProjectsGetQueryParams = ProjectsGetV2ProjectsGetQueryParams;
var ProjectsGetV2ProjectsGetRequest = /** @class */ (function (_super) {
    __extends(ProjectsGetV2ProjectsGetRequest, _super);
    function ProjectsGetV2ProjectsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProjectsGetV2ProjectsGetQueryParams)
    ], ProjectsGetV2ProjectsGetRequest.prototype, "queryParams", void 0);
    return ProjectsGetV2ProjectsGetRequest;
}(utils_1.SpeakeasyBase));
exports.ProjectsGetV2ProjectsGetRequest = ProjectsGetV2ProjectsGetRequest;
var ProjectsGetV2ProjectsGetResponse = /** @class */ (function (_super) {
    __extends(ProjectsGetV2ProjectsGetResponse, _super);
    function ProjectsGetV2ProjectsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HttpValidationError)
    ], ProjectsGetV2ProjectsGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OpenAqProjectsResult)
    ], ProjectsGetV2ProjectsGetResponse.prototype, "openAQProjectsResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsGetResponse.prototype, "statusCode", void 0);
    return ProjectsGetV2ProjectsGetResponse;
}(utils_1.SpeakeasyBase));
exports.ProjectsGetV2ProjectsGetResponse = ProjectsGetV2ProjectsGetResponse;
