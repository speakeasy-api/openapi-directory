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
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams.prototype, "projectId", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams = GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson.prototype, "detail", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson = GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson.prototype, "detail", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson = GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson.prototype, "detail", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson = GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest.prototype, "pathParams", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest = GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.JiraIssueType }),
        __metadata("design:type", Array)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse.prototype, "jiraIssueTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse.prototype, "getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse.prototype, "getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse.prototype, "getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse = GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse;
