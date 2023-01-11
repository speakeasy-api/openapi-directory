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
exports.GamesSnapshotsGetResponse = exports.GamesSnapshotsGetRequest = exports.GamesSnapshotsGetSecurity = exports.GamesSnapshotsGetSecurityOption2 = exports.GamesSnapshotsGetSecurityOption1 = exports.GamesSnapshotsGetQueryParams = exports.GamesSnapshotsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GamesSnapshotsGetPathParams = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetPathParams, _super);
    function GamesSnapshotsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=snapshotId" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetPathParams.prototype, "snapshotId", void 0);
    return GamesSnapshotsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.GamesSnapshotsGetPathParams = GamesSnapshotsGetPathParams;
var GamesSnapshotsGetQueryParams = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetQueryParams, _super);
    function GamesSnapshotsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesSnapshotsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GamesSnapshotsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GamesSnapshotsGetQueryParams = GamesSnapshotsGetQueryParams;
var GamesSnapshotsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetSecurityOption1, _super);
    function GamesSnapshotsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesSnapshotsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesSnapshotsGetSecurityOption1.prototype, "oauth2c", void 0);
    return GamesSnapshotsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.GamesSnapshotsGetSecurityOption1 = GamesSnapshotsGetSecurityOption1;
var GamesSnapshotsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetSecurityOption2, _super);
    function GamesSnapshotsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesSnapshotsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesSnapshotsGetSecurityOption2.prototype, "oauth2c", void 0);
    return GamesSnapshotsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.GamesSnapshotsGetSecurityOption2 = GamesSnapshotsGetSecurityOption2;
var GamesSnapshotsGetSecurity = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetSecurity, _super);
    function GamesSnapshotsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", GamesSnapshotsGetSecurityOption1)
    ], GamesSnapshotsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", GamesSnapshotsGetSecurityOption2)
    ], GamesSnapshotsGetSecurity.prototype, "option2", void 0);
    return GamesSnapshotsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.GamesSnapshotsGetSecurity = GamesSnapshotsGetSecurity;
var GamesSnapshotsGetRequest = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetRequest, _super);
    function GamesSnapshotsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GamesSnapshotsGetPathParams)
    ], GamesSnapshotsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GamesSnapshotsGetQueryParams)
    ], GamesSnapshotsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GamesSnapshotsGetSecurity)
    ], GamesSnapshotsGetRequest.prototype, "security", void 0);
    return GamesSnapshotsGetRequest;
}(utils_1.SpeakeasyBase));
exports.GamesSnapshotsGetRequest = GamesSnapshotsGetRequest;
var GamesSnapshotsGetResponse = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetResponse, _super);
    function GamesSnapshotsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GamesSnapshotsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Snapshot)
    ], GamesSnapshotsGetResponse.prototype, "snapshot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GamesSnapshotsGetResponse.prototype, "statusCode", void 0);
    return GamesSnapshotsGetResponse;
}(utils_1.SpeakeasyBase));
exports.GamesSnapshotsGetResponse = GamesSnapshotsGetResponse;
