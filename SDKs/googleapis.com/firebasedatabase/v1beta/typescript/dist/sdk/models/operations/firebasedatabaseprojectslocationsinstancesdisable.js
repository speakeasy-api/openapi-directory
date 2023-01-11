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
exports.FirebasedatabaseProjectsLocationsInstancesDisableResponse = exports.FirebasedatabaseProjectsLocationsInstancesDisableRequest = exports.FirebasedatabaseProjectsLocationsInstancesDisableSecurity = exports.FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2 = exports.FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1 = exports.FirebasedatabaseProjectsLocationsInstancesDisableQueryParams = exports.FirebasedatabaseProjectsLocationsInstancesDisablePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FirebasedatabaseProjectsLocationsInstancesDisablePathParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDisablePathParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisablePathParams.prototype, "name", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDisablePathParams;
}(utils_1.SpeakeasyBase));
exports.FirebasedatabaseProjectsLocationsInstancesDisablePathParams = FirebasedatabaseProjectsLocationsInstancesDisablePathParams;
var FirebasedatabaseProjectsLocationsInstancesDisableQueryParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDisableQueryParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesDisableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDisableQueryParams;
}(utils_1.SpeakeasyBase));
exports.FirebasedatabaseProjectsLocationsInstancesDisableQueryParams = FirebasedatabaseProjectsLocationsInstancesDisableQueryParams;
var FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1, _super);
    function FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1 = FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1;
var FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2, _super);
    function FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2 = FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2;
var FirebasedatabaseProjectsLocationsInstancesDisableSecurity = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDisableSecurity, _super);
    function FirebasedatabaseProjectsLocationsInstancesDisableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1)
    ], FirebasedatabaseProjectsLocationsInstancesDisableSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2)
    ], FirebasedatabaseProjectsLocationsInstancesDisableSecurity.prototype, "option2", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDisableSecurity;
}(utils_1.SpeakeasyBase));
exports.FirebasedatabaseProjectsLocationsInstancesDisableSecurity = FirebasedatabaseProjectsLocationsInstancesDisableSecurity;
var FirebasedatabaseProjectsLocationsInstancesDisableRequest = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDisableRequest, _super);
    function FirebasedatabaseProjectsLocationsInstancesDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDisablePathParams)
    ], FirebasedatabaseProjectsLocationsInstancesDisableRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDisableQueryParams)
    ], FirebasedatabaseProjectsLocationsInstancesDisableRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], FirebasedatabaseProjectsLocationsInstancesDisableRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDisableSecurity)
    ], FirebasedatabaseProjectsLocationsInstancesDisableRequest.prototype, "security", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDisableRequest;
}(utils_1.SpeakeasyBase));
exports.FirebasedatabaseProjectsLocationsInstancesDisableRequest = FirebasedatabaseProjectsLocationsInstancesDisableRequest;
var FirebasedatabaseProjectsLocationsInstancesDisableResponse = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDisableResponse, _super);
    function FirebasedatabaseProjectsLocationsInstancesDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDisableResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DatabaseInstance)
    ], FirebasedatabaseProjectsLocationsInstancesDisableResponse.prototype, "databaseInstance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FirebasedatabaseProjectsLocationsInstancesDisableResponse.prototype, "statusCode", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDisableResponse;
}(utils_1.SpeakeasyBase));
exports.FirebasedatabaseProjectsLocationsInstancesDisableResponse = FirebasedatabaseProjectsLocationsInstancesDisableResponse;
