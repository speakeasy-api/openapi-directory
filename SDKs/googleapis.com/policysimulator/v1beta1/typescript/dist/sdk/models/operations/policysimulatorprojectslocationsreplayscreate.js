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
exports.PolicysimulatorProjectsLocationsReplaysCreateResponse = exports.PolicysimulatorProjectsLocationsReplaysCreateRequest = exports.PolicysimulatorProjectsLocationsReplaysCreateSecurity = exports.PolicysimulatorProjectsLocationsReplaysCreateQueryParams = exports.PolicysimulatorProjectsLocationsReplaysCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PolicysimulatorProjectsLocationsReplaysCreatePathParams = /** @class */ (function (_super) {
    __extends(PolicysimulatorProjectsLocationsReplaysCreatePathParams, _super);
    function PolicysimulatorProjectsLocationsReplaysCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreatePathParams.prototype, "parent", void 0);
    return PolicysimulatorProjectsLocationsReplaysCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.PolicysimulatorProjectsLocationsReplaysCreatePathParams = PolicysimulatorProjectsLocationsReplaysCreatePathParams;
var PolicysimulatorProjectsLocationsReplaysCreateQueryParams = /** @class */ (function (_super) {
    __extends(PolicysimulatorProjectsLocationsReplaysCreateQueryParams, _super);
    function PolicysimulatorProjectsLocationsReplaysCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PolicysimulatorProjectsLocationsReplaysCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PolicysimulatorProjectsLocationsReplaysCreateQueryParams = PolicysimulatorProjectsLocationsReplaysCreateQueryParams;
var PolicysimulatorProjectsLocationsReplaysCreateSecurity = /** @class */ (function (_super) {
    __extends(PolicysimulatorProjectsLocationsReplaysCreateSecurity, _super);
    function PolicysimulatorProjectsLocationsReplaysCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PolicysimulatorProjectsLocationsReplaysCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PolicysimulatorProjectsLocationsReplaysCreateSecurity.prototype, "oauth2c", void 0);
    return PolicysimulatorProjectsLocationsReplaysCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.PolicysimulatorProjectsLocationsReplaysCreateSecurity = PolicysimulatorProjectsLocationsReplaysCreateSecurity;
var PolicysimulatorProjectsLocationsReplaysCreateRequest = /** @class */ (function (_super) {
    __extends(PolicysimulatorProjectsLocationsReplaysCreateRequest, _super);
    function PolicysimulatorProjectsLocationsReplaysCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PolicysimulatorProjectsLocationsReplaysCreatePathParams)
    ], PolicysimulatorProjectsLocationsReplaysCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PolicysimulatorProjectsLocationsReplaysCreateQueryParams)
    ], PolicysimulatorProjectsLocationsReplaysCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPolicysimulatorV1beta1ReplayInput)
    ], PolicysimulatorProjectsLocationsReplaysCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PolicysimulatorProjectsLocationsReplaysCreateSecurity)
    ], PolicysimulatorProjectsLocationsReplaysCreateRequest.prototype, "security", void 0);
    return PolicysimulatorProjectsLocationsReplaysCreateRequest;
}(utils_1.SpeakeasyBase));
exports.PolicysimulatorProjectsLocationsReplaysCreateRequest = PolicysimulatorProjectsLocationsReplaysCreateRequest;
var PolicysimulatorProjectsLocationsReplaysCreateResponse = /** @class */ (function (_super) {
    __extends(PolicysimulatorProjectsLocationsReplaysCreateResponse, _super);
    function PolicysimulatorProjectsLocationsReplaysCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PolicysimulatorProjectsLocationsReplaysCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], PolicysimulatorProjectsLocationsReplaysCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PolicysimulatorProjectsLocationsReplaysCreateResponse.prototype, "statusCode", void 0);
    return PolicysimulatorProjectsLocationsReplaysCreateResponse;
}(utils_1.SpeakeasyBase));
exports.PolicysimulatorProjectsLocationsReplaysCreateResponse = PolicysimulatorProjectsLocationsReplaysCreateResponse;
