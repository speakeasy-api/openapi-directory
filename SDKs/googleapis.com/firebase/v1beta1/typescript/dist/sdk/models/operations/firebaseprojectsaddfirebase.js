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
exports.FirebaseProjectsAddFirebaseResponse = exports.FirebaseProjectsAddFirebaseRequest = exports.FirebaseProjectsAddFirebaseSecurity = exports.FirebaseProjectsAddFirebaseSecurityOption2 = exports.FirebaseProjectsAddFirebaseSecurityOption1 = exports.FirebaseProjectsAddFirebaseQueryParams = exports.FirebaseProjectsAddFirebasePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FirebaseProjectsAddFirebasePathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddFirebasePathParams, _super);
    function FirebaseProjectsAddFirebasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebasePathParams.prototype, "project", void 0);
    return FirebaseProjectsAddFirebasePathParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAddFirebasePathParams = FirebaseProjectsAddFirebasePathParams;
var FirebaseProjectsAddFirebaseQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddFirebaseQueryParams, _super);
    function FirebaseProjectsAddFirebaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsAddFirebaseQueryParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAddFirebaseQueryParams = FirebaseProjectsAddFirebaseQueryParams;
var FirebaseProjectsAddFirebaseSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddFirebaseSecurityOption1, _super);
    function FirebaseProjectsAddFirebaseSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAddFirebaseSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAddFirebaseSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsAddFirebaseSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAddFirebaseSecurityOption1 = FirebaseProjectsAddFirebaseSecurityOption1;
var FirebaseProjectsAddFirebaseSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddFirebaseSecurityOption2, _super);
    function FirebaseProjectsAddFirebaseSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAddFirebaseSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAddFirebaseSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsAddFirebaseSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAddFirebaseSecurityOption2 = FirebaseProjectsAddFirebaseSecurityOption2;
var FirebaseProjectsAddFirebaseSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddFirebaseSecurity, _super);
    function FirebaseProjectsAddFirebaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAddFirebaseSecurityOption1)
    ], FirebaseProjectsAddFirebaseSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAddFirebaseSecurityOption2)
    ], FirebaseProjectsAddFirebaseSecurity.prototype, "option2", void 0);
    return FirebaseProjectsAddFirebaseSecurity;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAddFirebaseSecurity = FirebaseProjectsAddFirebaseSecurity;
var FirebaseProjectsAddFirebaseRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddFirebaseRequest, _super);
    function FirebaseProjectsAddFirebaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsAddFirebasePathParams)
    ], FirebaseProjectsAddFirebaseRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsAddFirebaseQueryParams)
    ], FirebaseProjectsAddFirebaseRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddFirebaseRequest)
    ], FirebaseProjectsAddFirebaseRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsAddFirebaseSecurity)
    ], FirebaseProjectsAddFirebaseRequest.prototype, "security", void 0);
    return FirebaseProjectsAddFirebaseRequest;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAddFirebaseRequest = FirebaseProjectsAddFirebaseRequest;
var FirebaseProjectsAddFirebaseResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddFirebaseResponse, _super);
    function FirebaseProjectsAddFirebaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FirebaseProjectsAddFirebaseResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], FirebaseProjectsAddFirebaseResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FirebaseProjectsAddFirebaseResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsAddFirebaseResponse;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAddFirebaseResponse = FirebaseProjectsAddFirebaseResponse;
