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
exports.ReplicapoolPoolsInsertResponse = exports.ReplicapoolPoolsInsertRequest = exports.ReplicapoolPoolsInsertSecurity = exports.ReplicapoolPoolsInsertSecurityOption3 = exports.ReplicapoolPoolsInsertSecurityOption2 = exports.ReplicapoolPoolsInsertSecurityOption1 = exports.ReplicapoolPoolsInsertQueryParams = exports.ReplicapoolPoolsInsertPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReplicapoolPoolsInsertPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertPathParams, _super);
    function ReplicapoolPoolsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertPathParams.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertPathParams.prototype, "zone", void 0);
    return ReplicapoolPoolsInsertPathParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertPathParams = ReplicapoolPoolsInsertPathParams;
var ReplicapoolPoolsInsertQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertQueryParams, _super);
    function ReplicapoolPoolsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "userIp", void 0);
    return ReplicapoolPoolsInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertQueryParams = ReplicapoolPoolsInsertQueryParams;
var ReplicapoolPoolsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurityOption1, _super);
    function ReplicapoolPoolsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsInsertSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertSecurityOption1 = ReplicapoolPoolsInsertSecurityOption1;
var ReplicapoolPoolsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurityOption2, _super);
    function ReplicapoolPoolsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsInsertSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertSecurityOption2 = ReplicapoolPoolsInsertSecurityOption2;
var ReplicapoolPoolsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurityOption3, _super);
    function ReplicapoolPoolsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsInsertSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertSecurityOption3 = ReplicapoolPoolsInsertSecurityOption3;
var ReplicapoolPoolsInsertSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurity, _super);
    function ReplicapoolPoolsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsInsertSecurityOption1)
    ], ReplicapoolPoolsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsInsertSecurityOption2)
    ], ReplicapoolPoolsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsInsertSecurityOption3)
    ], ReplicapoolPoolsInsertSecurity.prototype, "option3", void 0);
    return ReplicapoolPoolsInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertSecurity = ReplicapoolPoolsInsertSecurity;
var ReplicapoolPoolsInsertRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertRequest, _super);
    function ReplicapoolPoolsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsInsertPathParams)
    ], ReplicapoolPoolsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsInsertQueryParams)
    ], ReplicapoolPoolsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Pool)
    ], ReplicapoolPoolsInsertRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsInsertSecurity)
    ], ReplicapoolPoolsInsertRequest.prototype, "security", void 0);
    return ReplicapoolPoolsInsertRequest;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertRequest = ReplicapoolPoolsInsertRequest;
var ReplicapoolPoolsInsertResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertResponse, _super);
    function ReplicapoolPoolsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolPoolsInsertResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsInsertResponse.prototype, "statusCode", void 0);
    return ReplicapoolPoolsInsertResponse;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsInsertResponse = ReplicapoolPoolsInsertResponse;
