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
exports.DeploymentmanagerDeploymentsUpdateResponse = exports.DeploymentmanagerDeploymentsUpdateRequest = exports.DeploymentmanagerDeploymentsUpdateSecurity = exports.DeploymentmanagerDeploymentsUpdateSecurityOption2 = exports.DeploymentmanagerDeploymentsUpdateSecurityOption1 = exports.DeploymentmanagerDeploymentsUpdateQueryParams = exports.DeploymentmanagerDeploymentsUpdateDeletePolicyEnum = exports.DeploymentmanagerDeploymentsUpdateCreatePolicyEnum = exports.DeploymentmanagerDeploymentsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeploymentmanagerDeploymentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsUpdatePathParams, _super);
    function DeploymentmanagerDeploymentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdatePathParams.prototype, "deployment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdatePathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsUpdatePathParams = DeploymentmanagerDeploymentsUpdatePathParams;
var DeploymentmanagerDeploymentsUpdateCreatePolicyEnum;
(function (DeploymentmanagerDeploymentsUpdateCreatePolicyEnum) {
    DeploymentmanagerDeploymentsUpdateCreatePolicyEnum["CreateOrAcquire"] = "CREATE_OR_ACQUIRE";
    DeploymentmanagerDeploymentsUpdateCreatePolicyEnum["Acquire"] = "ACQUIRE";
})(DeploymentmanagerDeploymentsUpdateCreatePolicyEnum = exports.DeploymentmanagerDeploymentsUpdateCreatePolicyEnum || (exports.DeploymentmanagerDeploymentsUpdateCreatePolicyEnum = {}));
var DeploymentmanagerDeploymentsUpdateDeletePolicyEnum;
(function (DeploymentmanagerDeploymentsUpdateDeletePolicyEnum) {
    DeploymentmanagerDeploymentsUpdateDeletePolicyEnum["Delete"] = "DELETE";
    DeploymentmanagerDeploymentsUpdateDeletePolicyEnum["Abandon"] = "ABANDON";
})(DeploymentmanagerDeploymentsUpdateDeletePolicyEnum = exports.DeploymentmanagerDeploymentsUpdateDeletePolicyEnum || (exports.DeploymentmanagerDeploymentsUpdateDeletePolicyEnum = {}));
var DeploymentmanagerDeploymentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsUpdateQueryParams, _super);
    function DeploymentmanagerDeploymentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=createPolicy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "createPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deletePolicy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "deletePolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=preview" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "preview", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsUpdateQueryParams = DeploymentmanagerDeploymentsUpdateQueryParams;
var DeploymentmanagerDeploymentsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsUpdateSecurityOption1, _super);
    function DeploymentmanagerDeploymentsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsUpdateSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsUpdateSecurityOption1 = DeploymentmanagerDeploymentsUpdateSecurityOption1;
var DeploymentmanagerDeploymentsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsUpdateSecurityOption2, _super);
    function DeploymentmanagerDeploymentsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsUpdateSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsUpdateSecurityOption2 = DeploymentmanagerDeploymentsUpdateSecurityOption2;
var DeploymentmanagerDeploymentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsUpdateSecurity, _super);
    function DeploymentmanagerDeploymentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsUpdateSecurityOption1)
    ], DeploymentmanagerDeploymentsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsUpdateSecurityOption2)
    ], DeploymentmanagerDeploymentsUpdateSecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsUpdateSecurity = DeploymentmanagerDeploymentsUpdateSecurity;
var DeploymentmanagerDeploymentsUpdateRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsUpdateRequest, _super);
    function DeploymentmanagerDeploymentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsUpdatePathParams)
    ], DeploymentmanagerDeploymentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsUpdateQueryParams)
    ], DeploymentmanagerDeploymentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Deployment)
    ], DeploymentmanagerDeploymentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerDeploymentsUpdateSecurity)
    ], DeploymentmanagerDeploymentsUpdateRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsUpdateRequest = DeploymentmanagerDeploymentsUpdateRequest;
var DeploymentmanagerDeploymentsUpdateResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsUpdateResponse, _super);
    function DeploymentmanagerDeploymentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerDeploymentsUpdateResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsUpdateResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerDeploymentsUpdateResponse = DeploymentmanagerDeploymentsUpdateResponse;
