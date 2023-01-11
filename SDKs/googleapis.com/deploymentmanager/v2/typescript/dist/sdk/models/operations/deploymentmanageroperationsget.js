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
exports.DeploymentmanagerOperationsGetResponse = exports.DeploymentmanagerOperationsGetRequest = exports.DeploymentmanagerOperationsGetSecurity = exports.DeploymentmanagerOperationsGetSecurityOption4 = exports.DeploymentmanagerOperationsGetSecurityOption3 = exports.DeploymentmanagerOperationsGetSecurityOption2 = exports.DeploymentmanagerOperationsGetSecurityOption1 = exports.DeploymentmanagerOperationsGetQueryParams = exports.DeploymentmanagerOperationsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeploymentmanagerOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetPathParams, _super);
    function DeploymentmanagerOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=operation" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetPathParams.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetPathParams.prototype, "project", void 0);
    return DeploymentmanagerOperationsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetPathParams = DeploymentmanagerOperationsGetPathParams;
var DeploymentmanagerOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetQueryParams, _super);
    function DeploymentmanagerOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerOperationsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetQueryParams = DeploymentmanagerOperationsGetQueryParams;
var DeploymentmanagerOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption1, _super);
    function DeploymentmanagerOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetSecurityOption1 = DeploymentmanagerOperationsGetSecurityOption1;
var DeploymentmanagerOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption2, _super);
    function DeploymentmanagerOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetSecurityOption2 = DeploymentmanagerOperationsGetSecurityOption2;
var DeploymentmanagerOperationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption3, _super);
    function DeploymentmanagerOperationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetSecurityOption3 = DeploymentmanagerOperationsGetSecurityOption3;
var DeploymentmanagerOperationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption4, _super);
    function DeploymentmanagerOperationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetSecurityOption4 = DeploymentmanagerOperationsGetSecurityOption4;
var DeploymentmanagerOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurity, _super);
    function DeploymentmanagerOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption1)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption2)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption3)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption4)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerOperationsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetSecurity = DeploymentmanagerOperationsGetSecurity;
var DeploymentmanagerOperationsGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetRequest, _super);
    function DeploymentmanagerOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerOperationsGetPathParams)
    ], DeploymentmanagerOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerOperationsGetQueryParams)
    ], DeploymentmanagerOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurity)
    ], DeploymentmanagerOperationsGetRequest.prototype, "security", void 0);
    return DeploymentmanagerOperationsGetRequest;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetRequest = DeploymentmanagerOperationsGetRequest;
var DeploymentmanagerOperationsGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetResponse, _super);
    function DeploymentmanagerOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeploymentmanagerOperationsGetResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerOperationsGetResponse;
}(utils_1.SpeakeasyBase));
exports.DeploymentmanagerOperationsGetResponse = DeploymentmanagerOperationsGetResponse;
