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
exports.ReplicapoolReplicasRestartResponse = exports.ReplicapoolReplicasRestartRequest = exports.ReplicapoolReplicasRestartSecurity = exports.ReplicapoolReplicasRestartSecurityOption3 = exports.ReplicapoolReplicasRestartSecurityOption2 = exports.ReplicapoolReplicasRestartSecurityOption1 = exports.ReplicapoolReplicasRestartQueryParams = exports.ReplicapoolReplicasRestartPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReplicapoolReplicasRestartPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartPathParams, _super);
    function ReplicapoolReplicasRestartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "poolName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=replicaName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "replicaName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "zone", void 0);
    return ReplicapoolReplicasRestartPathParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartPathParams = ReplicapoolReplicasRestartPathParams;
var ReplicapoolReplicasRestartQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartQueryParams, _super);
    function ReplicapoolReplicasRestartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "userIp", void 0);
    return ReplicapoolReplicasRestartQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartQueryParams = ReplicapoolReplicasRestartQueryParams;
var ReplicapoolReplicasRestartSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurityOption1, _super);
    function ReplicapoolReplicasRestartSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasRestartSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasRestartSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasRestartSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartSecurityOption1 = ReplicapoolReplicasRestartSecurityOption1;
var ReplicapoolReplicasRestartSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurityOption2, _super);
    function ReplicapoolReplicasRestartSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasRestartSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasRestartSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasRestartSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartSecurityOption2 = ReplicapoolReplicasRestartSecurityOption2;
var ReplicapoolReplicasRestartSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurityOption3, _super);
    function ReplicapoolReplicasRestartSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasRestartSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasRestartSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasRestartSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartSecurityOption3 = ReplicapoolReplicasRestartSecurityOption3;
var ReplicapoolReplicasRestartSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurity, _super);
    function ReplicapoolReplicasRestartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasRestartSecurityOption1)
    ], ReplicapoolReplicasRestartSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasRestartSecurityOption2)
    ], ReplicapoolReplicasRestartSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasRestartSecurityOption3)
    ], ReplicapoolReplicasRestartSecurity.prototype, "option3", void 0);
    return ReplicapoolReplicasRestartSecurity;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartSecurity = ReplicapoolReplicasRestartSecurity;
var ReplicapoolReplicasRestartRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartRequest, _super);
    function ReplicapoolReplicasRestartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolReplicasRestartPathParams)
    ], ReplicapoolReplicasRestartRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolReplicasRestartQueryParams)
    ], ReplicapoolReplicasRestartRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolReplicasRestartSecurity)
    ], ReplicapoolReplicasRestartRequest.prototype, "security", void 0);
    return ReplicapoolReplicasRestartRequest;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartRequest = ReplicapoolReplicasRestartRequest;
var ReplicapoolReplicasRestartResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartResponse, _super);
    function ReplicapoolReplicasRestartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolReplicasRestartResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplicapoolReplicasRestartResponse.prototype, "statusCode", void 0);
    return ReplicapoolReplicasRestartResponse;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolReplicasRestartResponse = ReplicapoolReplicasRestartResponse;
