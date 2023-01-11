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
exports.DriveDrivesGetResponse = exports.DriveDrivesGetRequest = exports.DriveDrivesGetSecurity = exports.DriveDrivesGetSecurityOption2 = exports.DriveDrivesGetSecurityOption1 = exports.DriveDrivesGetQueryParams = exports.DriveDrivesGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveDrivesGetPathParams = /** @class */ (function (_super) {
    __extends(DriveDrivesGetPathParams, _super);
    function DriveDrivesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=driveId" }),
        __metadata("design:type", String)
    ], DriveDrivesGetPathParams.prototype, "driveId", void 0);
    return DriveDrivesGetPathParams;
}(utils_1.SpeakeasyBase));
exports.DriveDrivesGetPathParams = DriveDrivesGetPathParams;
var DriveDrivesGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveDrivesGetQueryParams, _super);
    function DriveDrivesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveDrivesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveDrivesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveDrivesGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveDrivesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveDrivesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveDrivesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DriveDrivesGetQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveDrivesGetQueryParams.prototype, "userIp", void 0);
    return DriveDrivesGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveDrivesGetQueryParams = DriveDrivesGetQueryParams;
var DriveDrivesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveDrivesGetSecurityOption1, _super);
    function DriveDrivesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveDrivesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveDrivesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveDrivesGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveDrivesGetSecurityOption1 = DriveDrivesGetSecurityOption1;
var DriveDrivesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveDrivesGetSecurityOption2, _super);
    function DriveDrivesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveDrivesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveDrivesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveDrivesGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveDrivesGetSecurityOption2 = DriveDrivesGetSecurityOption2;
var DriveDrivesGetSecurity = /** @class */ (function (_super) {
    __extends(DriveDrivesGetSecurity, _super);
    function DriveDrivesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveDrivesGetSecurityOption1)
    ], DriveDrivesGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveDrivesGetSecurityOption2)
    ], DriveDrivesGetSecurity.prototype, "option2", void 0);
    return DriveDrivesGetSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveDrivesGetSecurity = DriveDrivesGetSecurity;
var DriveDrivesGetRequest = /** @class */ (function (_super) {
    __extends(DriveDrivesGetRequest, _super);
    function DriveDrivesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveDrivesGetPathParams)
    ], DriveDrivesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveDrivesGetQueryParams)
    ], DriveDrivesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveDrivesGetSecurity)
    ], DriveDrivesGetRequest.prototype, "security", void 0);
    return DriveDrivesGetRequest;
}(utils_1.SpeakeasyBase));
exports.DriveDrivesGetRequest = DriveDrivesGetRequest;
var DriveDrivesGetResponse = /** @class */ (function (_super) {
    __extends(DriveDrivesGetResponse, _super);
    function DriveDrivesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveDrivesGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Drive)
    ], DriveDrivesGetResponse.prototype, "drive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveDrivesGetResponse.prototype, "statusCode", void 0);
    return DriveDrivesGetResponse;
}(utils_1.SpeakeasyBase));
exports.DriveDrivesGetResponse = DriveDrivesGetResponse;
