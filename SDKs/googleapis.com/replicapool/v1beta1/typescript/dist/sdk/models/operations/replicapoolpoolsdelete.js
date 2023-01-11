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
exports.ReplicapoolPoolsDeleteResponse = exports.ReplicapoolPoolsDeleteRequest = exports.ReplicapoolPoolsDeleteSecurity = exports.ReplicapoolPoolsDeleteSecurityOption3 = exports.ReplicapoolPoolsDeleteSecurityOption2 = exports.ReplicapoolPoolsDeleteSecurityOption1 = exports.ReplicapoolPoolsDeleteQueryParams = exports.ReplicapoolPoolsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReplicapoolPoolsDeletePathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeletePathParams, _super);
    function ReplicapoolPoolsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeletePathParams.prototype, "poolName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeletePathParams.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeletePathParams.prototype, "zone", void 0);
    return ReplicapoolPoolsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeletePathParams = ReplicapoolPoolsDeletePathParams;
var ReplicapoolPoolsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeleteQueryParams, _super);
    function ReplicapoolPoolsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolPoolsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeleteQueryParams.prototype, "userIp", void 0);
    return ReplicapoolPoolsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeleteQueryParams = ReplicapoolPoolsDeleteQueryParams;
var ReplicapoolPoolsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeleteSecurityOption1, _super);
    function ReplicapoolPoolsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsDeleteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeleteSecurityOption1 = ReplicapoolPoolsDeleteSecurityOption1;
var ReplicapoolPoolsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeleteSecurityOption2, _super);
    function ReplicapoolPoolsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsDeleteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeleteSecurityOption2 = ReplicapoolPoolsDeleteSecurityOption2;
var ReplicapoolPoolsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeleteSecurityOption3, _super);
    function ReplicapoolPoolsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsDeleteSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeleteSecurityOption3 = ReplicapoolPoolsDeleteSecurityOption3;
var ReplicapoolPoolsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeleteSecurity, _super);
    function ReplicapoolPoolsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsDeleteSecurityOption1)
    ], ReplicapoolPoolsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsDeleteSecurityOption2)
    ], ReplicapoolPoolsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsDeleteSecurityOption3)
    ], ReplicapoolPoolsDeleteSecurity.prototype, "option3", void 0);
    return ReplicapoolPoolsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeleteSecurity = ReplicapoolPoolsDeleteSecurity;
var ReplicapoolPoolsDeleteRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeleteRequest, _super);
    function ReplicapoolPoolsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsDeletePathParams)
    ], ReplicapoolPoolsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsDeleteQueryParams)
    ], ReplicapoolPoolsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PoolsDeleteRequest)
    ], ReplicapoolPoolsDeleteRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsDeleteSecurity)
    ], ReplicapoolPoolsDeleteRequest.prototype, "security", void 0);
    return ReplicapoolPoolsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeleteRequest = ReplicapoolPoolsDeleteRequest;
var ReplicapoolPoolsDeleteResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsDeleteResponse, _super);
    function ReplicapoolPoolsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicapoolPoolsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsDeleteResponse.prototype, "statusCode", void 0);
    return ReplicapoolPoolsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsDeleteResponse = ReplicapoolPoolsDeleteResponse;
