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
exports.DeploymentmanagerDeploymentsPatchResponse = exports.DeploymentmanagerDeploymentsPatchRequest = exports.DeploymentmanagerDeploymentsPatchSecurity = exports.DeploymentmanagerDeploymentsPatchSecurityOption2 = exports.DeploymentmanagerDeploymentsPatchSecurityOption1 = exports.DeploymentmanagerDeploymentsPatchQueryParams = exports.DeploymentmanagerDeploymentsPatchDeletePolicyEnum = exports.DeploymentmanagerDeploymentsPatchCreatePolicyEnum = exports.DeploymentmanagerDeploymentsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeploymentmanagerDeploymentsPatchPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsPatchPathParams, _super);
    function DeploymentmanagerDeploymentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchPathParams.prototype, "deployment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchPathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsPatchPathParams = DeploymentmanagerDeploymentsPatchPathParams;
var DeploymentmanagerDeploymentsPatchCreatePolicyEnum;
(function (DeploymentmanagerDeploymentsPatchCreatePolicyEnum) {
    DeploymentmanagerDeploymentsPatchCreatePolicyEnum["CreateOrAcquire"] = "CREATE_OR_ACQUIRE";
    DeploymentmanagerDeploymentsPatchCreatePolicyEnum["Acquire"] = "ACQUIRE";
})(DeploymentmanagerDeploymentsPatchCreatePolicyEnum = exports.DeploymentmanagerDeploymentsPatchCreatePolicyEnum || (exports.DeploymentmanagerDeploymentsPatchCreatePolicyEnum = {}));
var DeploymentmanagerDeploymentsPatchDeletePolicyEnum;
(function (DeploymentmanagerDeploymentsPatchDeletePolicyEnum) {
    DeploymentmanagerDeploymentsPatchDeletePolicyEnum["Delete"] = "DELETE";
    DeploymentmanagerDeploymentsPatchDeletePolicyEnum["Abandon"] = "ABANDON";
})(DeploymentmanagerDeploymentsPatchDeletePolicyEnum = exports.DeploymentmanagerDeploymentsPatchDeletePolicyEnum || (exports.DeploymentmanagerDeploymentsPatchDeletePolicyEnum = {}));
var DeploymentmanagerDeploymentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsPatchQueryParams, _super);
    function DeploymentmanagerDeploymentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=createPolicy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "createPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deletePolicy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "deletePolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=preview" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "preview", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsPatchQueryParams = DeploymentmanagerDeploymentsPatchQueryParams;
var DeploymentmanagerDeploymentsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsPatchSecurityOption1, _super);
    function DeploymentmanagerDeploymentsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsPatchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsPatchSecurityOption1 = DeploymentmanagerDeploymentsPatchSecurityOption1;
var DeploymentmanagerDeploymentsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsPatchSecurityOption2, _super);
    function DeploymentmanagerDeploymentsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsPatchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsPatchSecurityOption2 = DeploymentmanagerDeploymentsPatchSecurityOption2;
var DeploymentmanagerDeploymentsPatchSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsPatchSecurity, _super);
    function DeploymentmanagerDeploymentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsPatchSecurityOption1)
    ], DeploymentmanagerDeploymentsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsPatchSecurityOption2)
    ], DeploymentmanagerDeploymentsPatchSecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsPatchSecurity = DeploymentmanagerDeploymentsPatchSecurity;
var DeploymentmanagerDeploymentsPatchRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsPatchRequest, _super);
    function DeploymentmanagerDeploymentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsPatchPathParams)
    ], DeploymentmanagerDeploymentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsPatchQueryParams)
    ], DeploymentmanagerDeploymentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Deployment)
    ], DeploymentmanagerDeploymentsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsPatchSecurity)
    ], DeploymentmanagerDeploymentsPatchRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsPatchRequest = DeploymentmanagerDeploymentsPatchRequest;
var DeploymentmanagerDeploymentsPatchResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsPatchResponse, _super);
    function DeploymentmanagerDeploymentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerDeploymentsPatchResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsPatchResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsPatchResponse = DeploymentmanagerDeploymentsPatchResponse;
