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
exports.ReposCreateDeploymentStatusResponse = exports.ReposCreateDeploymentStatusRequest = exports.ReposCreateDeploymentStatusRequestBody = exports.ReposCreateDeploymentStatusRequestBodyStateEnum = exports.ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = exports.ReposCreateDeploymentStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposCreateDeploymentStatusPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentStatusPathParams, _super);
    function ReposCreateDeploymentStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deployment_id" }),
        __metadata("design:type", Number)
    ], ReposCreateDeploymentStatusPathParams.prototype, "deploymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusPathParams.prototype, "repo", void 0);
    return ReposCreateDeploymentStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeploymentStatusPathParams = ReposCreateDeploymentStatusPathParams;
var ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;
(function (ReposCreateDeploymentStatusRequestBodyEnvironmentEnum) {
    ReposCreateDeploymentStatusRequestBodyEnvironmentEnum["Production"] = "production";
    ReposCreateDeploymentStatusRequestBodyEnvironmentEnum["Staging"] = "staging";
    ReposCreateDeploymentStatusRequestBodyEnvironmentEnum["Qa"] = "qa";
})(ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = exports.ReposCreateDeploymentStatusRequestBodyEnvironmentEnum || (exports.ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = {}));
var ReposCreateDeploymentStatusRequestBodyStateEnum;
(function (ReposCreateDeploymentStatusRequestBodyStateEnum) {
    ReposCreateDeploymentStatusRequestBodyStateEnum["Error"] = "error";
    ReposCreateDeploymentStatusRequestBodyStateEnum["Failure"] = "failure";
    ReposCreateDeploymentStatusRequestBodyStateEnum["Inactive"] = "inactive";
    ReposCreateDeploymentStatusRequestBodyStateEnum["InProgress"] = "in_progress";
    ReposCreateDeploymentStatusRequestBodyStateEnum["Queued"] = "queued";
    ReposCreateDeploymentStatusRequestBodyStateEnum["Pending"] = "pending";
    ReposCreateDeploymentStatusRequestBodyStateEnum["Success"] = "success";
})(ReposCreateDeploymentStatusRequestBodyStateEnum = exports.ReposCreateDeploymentStatusRequestBodyStateEnum || (exports.ReposCreateDeploymentStatusRequestBodyStateEnum = {}));
var ReposCreateDeploymentStatusRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentStatusRequestBody, _super);
    function ReposCreateDeploymentStatusRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_inactive" }),
        __metadata("design:type", Boolean)
    ], ReposCreateDeploymentStatusRequestBody.prototype, "autoInactive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusRequestBody.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment_url" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusRequestBody.prototype, "environmentUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=log_url" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusRequestBody.prototype, "logUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusRequestBody.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_url" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusRequestBody.prototype, "targetUrl", void 0);
    return ReposCreateDeploymentStatusRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeploymentStatusRequestBody = ReposCreateDeploymentStatusRequestBody;
var ReposCreateDeploymentStatusRequest = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentStatusRequest, _super);
    function ReposCreateDeploymentStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposCreateDeploymentStatusPathParams)
    ], ReposCreateDeploymentStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateDeploymentStatusRequestBody)
    ], ReposCreateDeploymentStatusRequest.prototype, "request", void 0);
    return ReposCreateDeploymentStatusRequest;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeploymentStatusRequest = ReposCreateDeploymentStatusRequest;
var ReposCreateDeploymentStatusResponse = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentStatusResponse, _super);
    function ReposCreateDeploymentStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposCreateDeploymentStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReposCreateDeploymentStatusResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposCreateDeploymentStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeploymentStatus)
    ], ReposCreateDeploymentStatusResponse.prototype, "deploymentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateDeploymentStatusResponse.prototype, "validationError", void 0);
    return ReposCreateDeploymentStatusResponse;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeploymentStatusResponse = ReposCreateDeploymentStatusResponse;
