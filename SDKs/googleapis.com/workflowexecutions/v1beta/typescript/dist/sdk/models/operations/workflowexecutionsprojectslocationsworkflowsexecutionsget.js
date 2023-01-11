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
exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse = exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest = exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity = exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams = exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum = exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams.prototype, "name", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams;
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum;
(function (WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum) {
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum["ExecutionViewUnspecified"] = "EXECUTION_VIEW_UNSPECIFIED";
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum["Basic"] = "BASIC";
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum["Full"] = "FULL";
})(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum = exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum || (exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum = {}));
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams.prototype, "view", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams;
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity.prototype, "oauth2c", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity;
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest.prototype, "security", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest;
}(utils_1.SpeakeasyBase));
exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest;
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Execution)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse.prototype, "execution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse.prototype, "statusCode", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse;
}(utils_1.SpeakeasyBase));
exports.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse;
