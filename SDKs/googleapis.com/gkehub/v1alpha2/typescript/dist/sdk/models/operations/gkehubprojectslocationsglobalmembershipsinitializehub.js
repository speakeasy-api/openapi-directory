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
exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse = exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest = exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity = exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams = exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams, _super);
    function GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams.prototype, "project", void 0);
    return GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams;
}(utils_1.SpeakeasyBase));
exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams = GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams;
var GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams, _super);
    function GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams;
}(utils_1.SpeakeasyBase));
exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams = GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams;
var GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity, _super);
    function GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;
}(utils_1.SpeakeasyBase));
exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity = GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;
var GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest, _super);
    function GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
}(utils_1.SpeakeasyBase));
exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest = GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
var GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse, _super);
    function GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InitializeHubResponse)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse.prototype, "initializeHubResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse;
}(utils_1.SpeakeasyBase));
exports.GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse = GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse;
