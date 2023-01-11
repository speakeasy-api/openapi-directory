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
exports.ReplicapoolPoolsResizeResponse = exports.ReplicapoolPoolsResizeRequest = exports.ReplicapoolPoolsResizeSecurity = exports.ReplicapoolPoolsResizeSecurityOption3 = exports.ReplicapoolPoolsResizeSecurityOption2 = exports.ReplicapoolPoolsResizeSecurityOption1 = exports.ReplicapoolPoolsResizeQueryParams = exports.ReplicapoolPoolsResizePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReplicapoolPoolsResizePathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizePathParams, _super);
    function ReplicapoolPoolsResizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizePathParams.prototype, "poolName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizePathParams.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizePathParams.prototype, "zone", void 0);
    return ReplicapoolPoolsResizePathParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizePathParams = ReplicapoolPoolsResizePathParams;
var ReplicapoolPoolsResizeQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizeQueryParams, _super);
    function ReplicapoolPoolsResizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=numReplicas" }),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "numReplicas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizeQueryParams.prototype, "userIp", void 0);
    return ReplicapoolPoolsResizeQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizeQueryParams = ReplicapoolPoolsResizeQueryParams;
var ReplicapoolPoolsResizeSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizeSecurityOption1, _super);
    function ReplicapoolPoolsResizeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsResizeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsResizeSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsResizeSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizeSecurityOption1 = ReplicapoolPoolsResizeSecurityOption1;
var ReplicapoolPoolsResizeSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizeSecurityOption2, _super);
    function ReplicapoolPoolsResizeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsResizeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsResizeSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsResizeSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizeSecurityOption2 = ReplicapoolPoolsResizeSecurityOption2;
var ReplicapoolPoolsResizeSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizeSecurityOption3, _super);
    function ReplicapoolPoolsResizeSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsResizeSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsResizeSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsResizeSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizeSecurityOption3 = ReplicapoolPoolsResizeSecurityOption3;
var ReplicapoolPoolsResizeSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizeSecurity, _super);
    function ReplicapoolPoolsResizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsResizeSecurityOption1)
    ], ReplicapoolPoolsResizeSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsResizeSecurityOption2)
    ], ReplicapoolPoolsResizeSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsResizeSecurityOption3)
    ], ReplicapoolPoolsResizeSecurity.prototype, "option3", void 0);
    return ReplicapoolPoolsResizeSecurity;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizeSecurity = ReplicapoolPoolsResizeSecurity;
var ReplicapoolPoolsResizeRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizeRequest, _super);
    function ReplicapoolPoolsResizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsResizePathParams)
    ], ReplicapoolPoolsResizeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsResizeQueryParams)
    ], ReplicapoolPoolsResizeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsResizeSecurity)
    ], ReplicapoolPoolsResizeRequest.prototype, "security", void 0);
    return ReplicapoolPoolsResizeRequest;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizeRequest = ReplicapoolPoolsResizeRequest;
var ReplicapoolPoolsResizeResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsResizeResponse, _super);
    function ReplicapoolPoolsResizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolPoolsResizeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicapoolPoolsResizeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsResizeResponse.prototype, "statusCode", void 0);
    return ReplicapoolPoolsResizeResponse;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsResizeResponse = ReplicapoolPoolsResizeResponse;
