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
exports.BatchProjectsLocationsTasksGetIamPolicyResponse = exports.BatchProjectsLocationsTasksGetIamPolicyRequest = exports.BatchProjectsLocationsTasksGetIamPolicySecurity = exports.BatchProjectsLocationsTasksGetIamPolicyQueryParams = exports.BatchProjectsLocationsTasksGetIamPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BatchProjectsLocationsTasksGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsTasksGetIamPolicyPathParams, _super);
    function BatchProjectsLocationsTasksGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyPathParams.prototype, "resource", void 0);
    return BatchProjectsLocationsTasksGetIamPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.BatchProjectsLocationsTasksGetIamPolicyPathParams = BatchProjectsLocationsTasksGetIamPolicyPathParams;
var BatchProjectsLocationsTasksGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsTasksGetIamPolicyQueryParams, _super);
    function BatchProjectsLocationsTasksGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BatchProjectsLocationsTasksGetIamPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.BatchProjectsLocationsTasksGetIamPolicyQueryParams = BatchProjectsLocationsTasksGetIamPolicyQueryParams;
var BatchProjectsLocationsTasksGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsTasksGetIamPolicySecurity, _super);
    function BatchProjectsLocationsTasksGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BatchProjectsLocationsTasksGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BatchProjectsLocationsTasksGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return BatchProjectsLocationsTasksGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.BatchProjectsLocationsTasksGetIamPolicySecurity = BatchProjectsLocationsTasksGetIamPolicySecurity;
var BatchProjectsLocationsTasksGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsTasksGetIamPolicyRequest, _super);
    function BatchProjectsLocationsTasksGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BatchProjectsLocationsTasksGetIamPolicyPathParams)
    ], BatchProjectsLocationsTasksGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BatchProjectsLocationsTasksGetIamPolicyQueryParams)
    ], BatchProjectsLocationsTasksGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BatchProjectsLocationsTasksGetIamPolicySecurity)
    ], BatchProjectsLocationsTasksGetIamPolicyRequest.prototype, "security", void 0);
    return BatchProjectsLocationsTasksGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.BatchProjectsLocationsTasksGetIamPolicyRequest = BatchProjectsLocationsTasksGetIamPolicyRequest;
var BatchProjectsLocationsTasksGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsTasksGetIamPolicyResponse, _super);
    function BatchProjectsLocationsTasksGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BatchProjectsLocationsTasksGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], BatchProjectsLocationsTasksGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BatchProjectsLocationsTasksGetIamPolicyResponse.prototype, "statusCode", void 0);
    return BatchProjectsLocationsTasksGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.BatchProjectsLocationsTasksGetIamPolicyResponse = BatchProjectsLocationsTasksGetIamPolicyResponse;
