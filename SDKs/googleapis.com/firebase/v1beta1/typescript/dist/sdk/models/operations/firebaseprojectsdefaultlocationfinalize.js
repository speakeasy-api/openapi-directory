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
exports.FirebaseProjectsDefaultLocationFinalizeResponse = exports.FirebaseProjectsDefaultLocationFinalizeRequest = exports.FirebaseProjectsDefaultLocationFinalizeSecurity = exports.FirebaseProjectsDefaultLocationFinalizeSecurityOption2 = exports.FirebaseProjectsDefaultLocationFinalizeSecurityOption1 = exports.FirebaseProjectsDefaultLocationFinalizeQueryParams = exports.FirebaseProjectsDefaultLocationFinalizePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FirebaseProjectsDefaultLocationFinalizePathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsDefaultLocationFinalizePathParams, _super);
    function FirebaseProjectsDefaultLocationFinalizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizePathParams.prototype, "parent", void 0);
    return FirebaseProjectsDefaultLocationFinalizePathParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsDefaultLocationFinalizePathParams = FirebaseProjectsDefaultLocationFinalizePathParams;
var FirebaseProjectsDefaultLocationFinalizeQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsDefaultLocationFinalizeQueryParams, _super);
    function FirebaseProjectsDefaultLocationFinalizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsDefaultLocationFinalizeQueryParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsDefaultLocationFinalizeQueryParams = FirebaseProjectsDefaultLocationFinalizeQueryParams;
var FirebaseProjectsDefaultLocationFinalizeSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsDefaultLocationFinalizeSecurityOption1, _super);
    function FirebaseProjectsDefaultLocationFinalizeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsDefaultLocationFinalizeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsDefaultLocationFinalizeSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsDefaultLocationFinalizeSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsDefaultLocationFinalizeSecurityOption1 = FirebaseProjectsDefaultLocationFinalizeSecurityOption1;
var FirebaseProjectsDefaultLocationFinalizeSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsDefaultLocationFinalizeSecurityOption2, _super);
    function FirebaseProjectsDefaultLocationFinalizeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsDefaultLocationFinalizeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsDefaultLocationFinalizeSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsDefaultLocationFinalizeSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsDefaultLocationFinalizeSecurityOption2 = FirebaseProjectsDefaultLocationFinalizeSecurityOption2;
var FirebaseProjectsDefaultLocationFinalizeSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsDefaultLocationFinalizeSecurity, _super);
    function FirebaseProjectsDefaultLocationFinalizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsDefaultLocationFinalizeSecurityOption1)
    ], FirebaseProjectsDefaultLocationFinalizeSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsDefaultLocationFinalizeSecurityOption2)
    ], FirebaseProjectsDefaultLocationFinalizeSecurity.prototype, "option2", void 0);
    return FirebaseProjectsDefaultLocationFinalizeSecurity;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsDefaultLocationFinalizeSecurity = FirebaseProjectsDefaultLocationFinalizeSecurity;
var FirebaseProjectsDefaultLocationFinalizeRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsDefaultLocationFinalizeRequest, _super);
    function FirebaseProjectsDefaultLocationFinalizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsDefaultLocationFinalizePathParams)
    ], FirebaseProjectsDefaultLocationFinalizeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsDefaultLocationFinalizeQueryParams)
    ], FirebaseProjectsDefaultLocationFinalizeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FinalizeDefaultLocationRequest)
    ], FirebaseProjectsDefaultLocationFinalizeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsDefaultLocationFinalizeSecurity)
    ], FirebaseProjectsDefaultLocationFinalizeRequest.prototype, "security", void 0);
    return FirebaseProjectsDefaultLocationFinalizeRequest;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsDefaultLocationFinalizeRequest = FirebaseProjectsDefaultLocationFinalizeRequest;
var FirebaseProjectsDefaultLocationFinalizeResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsDefaultLocationFinalizeResponse, _super);
    function FirebaseProjectsDefaultLocationFinalizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FirebaseProjectsDefaultLocationFinalizeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], FirebaseProjectsDefaultLocationFinalizeResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FirebaseProjectsDefaultLocationFinalizeResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsDefaultLocationFinalizeResponse;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsDefaultLocationFinalizeResponse = FirebaseProjectsDefaultLocationFinalizeResponse;
