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
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson = exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=issue_type_id" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams.prototype, "issueTypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams.prototype, "projectId", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams = GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson.prototype, "detail", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson = GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson.prototype, "detail", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson = GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson.prototype, "detail", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson = GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest.prototype, "pathParams", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest = GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest;
var GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse = /** @class */ (function (_super) {
    __extends(GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse, _super);
    function GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.JiraIssueStatus }),
        __metadata("design:type", Array)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse.prototype, "jiraIssueStatuses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse.prototype, "getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse.prototype, "getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson)
    ], GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse.prototype, "getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject", void 0);
    return GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse = GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse;
