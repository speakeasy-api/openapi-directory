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
exports.MirrorLocationsGetResponse = exports.MirrorLocationsGetRequest = exports.MirrorLocationsGetSecurity = exports.MirrorLocationsGetSecurityOption2 = exports.MirrorLocationsGetSecurityOption1 = exports.MirrorLocationsGetQueryParams = exports.MirrorLocationsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MirrorLocationsGetPathParams = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetPathParams, _super);
    function MirrorLocationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetPathParams.prototype, "id", void 0);
    return MirrorLocationsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.MirrorLocationsGetPathParams = MirrorLocationsGetPathParams;
var MirrorLocationsGetQueryParams = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetQueryParams, _super);
    function MirrorLocationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorLocationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "userIp", void 0);
    return MirrorLocationsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.MirrorLocationsGetQueryParams = MirrorLocationsGetQueryParams;
var MirrorLocationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetSecurityOption1, _super);
    function MirrorLocationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorLocationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorLocationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return MirrorLocationsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.MirrorLocationsGetSecurityOption1 = MirrorLocationsGetSecurityOption1;
var MirrorLocationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetSecurityOption2, _super);
    function MirrorLocationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorLocationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorLocationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return MirrorLocationsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.MirrorLocationsGetSecurityOption2 = MirrorLocationsGetSecurityOption2;
var MirrorLocationsGetSecurity = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetSecurity, _super);
    function MirrorLocationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", MirrorLocationsGetSecurityOption1)
    ], MirrorLocationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", MirrorLocationsGetSecurityOption2)
    ], MirrorLocationsGetSecurity.prototype, "option2", void 0);
    return MirrorLocationsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.MirrorLocationsGetSecurity = MirrorLocationsGetSecurity;
var MirrorLocationsGetRequest = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetRequest, _super);
    function MirrorLocationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorLocationsGetPathParams)
    ], MirrorLocationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorLocationsGetQueryParams)
    ], MirrorLocationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorLocationsGetSecurity)
    ], MirrorLocationsGetRequest.prototype, "security", void 0);
    return MirrorLocationsGetRequest;
}(utils_1.SpeakeasyBase));
exports.MirrorLocationsGetRequest = MirrorLocationsGetRequest;
var MirrorLocationsGetResponse = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetResponse, _super);
    function MirrorLocationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MirrorLocationsGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MirrorLocationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MirrorLocationsGetResponse.prototype, "statusCode", void 0);
    return MirrorLocationsGetResponse;
}(utils_1.SpeakeasyBase));
exports.MirrorLocationsGetResponse = MirrorLocationsGetResponse;
