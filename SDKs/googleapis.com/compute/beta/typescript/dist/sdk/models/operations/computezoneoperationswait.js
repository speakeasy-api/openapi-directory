"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ComputeZoneOperationsWaitResponse = exports.ComputeZoneOperationsWaitRequest = exports.ComputeZoneOperationsWaitSecurity = exports.ComputeZoneOperationsWaitSecurityOption3 = exports.ComputeZoneOperationsWaitSecurityOption2 = exports.ComputeZoneOperationsWaitSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeZoneOperationsWaitSecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeZoneOperationsWaitSecurityOption1, _super);
    function ComputeZoneOperationsWaitSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitSecurityOption1.prototype, "oauth2c", void 0);
    return ComputeZoneOperationsWaitSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeZoneOperationsWaitSecurityOption1 = ComputeZoneOperationsWaitSecurityOption1;
var ComputeZoneOperationsWaitSecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeZoneOperationsWaitSecurityOption2, _super);
    function ComputeZoneOperationsWaitSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitSecurityOption2.prototype, "oauth2c", void 0);
    return ComputeZoneOperationsWaitSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeZoneOperationsWaitSecurityOption2 = ComputeZoneOperationsWaitSecurityOption2;
var ComputeZoneOperationsWaitSecurityOption3 = /** @class */ (function (_super) {
    __extends(ComputeZoneOperationsWaitSecurityOption3, _super);
    function ComputeZoneOperationsWaitSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitSecurityOption3.prototype, "oauth2c", void 0);
    return ComputeZoneOperationsWaitSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ComputeZoneOperationsWaitSecurityOption3 = ComputeZoneOperationsWaitSecurityOption3;
var ComputeZoneOperationsWaitSecurity = /** @class */ (function (_super) {
    __extends(ComputeZoneOperationsWaitSecurity, _super);
    function ComputeZoneOperationsWaitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeZoneOperationsWaitSecurityOption1)
    ], ComputeZoneOperationsWaitSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeZoneOperationsWaitSecurityOption2)
    ], ComputeZoneOperationsWaitSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeZoneOperationsWaitSecurityOption3)
    ], ComputeZoneOperationsWaitSecurity.prototype, "option3", void 0);
    return ComputeZoneOperationsWaitSecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeZoneOperationsWaitSecurity = ComputeZoneOperationsWaitSecurity;
var ComputeZoneOperationsWaitRequest = /** @class */ (function (_super) {
    __extends(ComputeZoneOperationsWaitRequest, _super);
    function ComputeZoneOperationsWaitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=operation",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeZoneOperationsWaitRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=zone",
        }),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitRequest.prototype, "zone", void 0);
    return ComputeZoneOperationsWaitRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeZoneOperationsWaitRequest = ComputeZoneOperationsWaitRequest;
var ComputeZoneOperationsWaitResponse = /** @class */ (function (_super) {
    __extends(ComputeZoneOperationsWaitResponse, _super);
    function ComputeZoneOperationsWaitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeZoneOperationsWaitResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], ComputeZoneOperationsWaitResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeZoneOperationsWaitResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeZoneOperationsWaitResponse.prototype, "rawResponse", void 0);
    return ComputeZoneOperationsWaitResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeZoneOperationsWaitResponse = ComputeZoneOperationsWaitResponse;
