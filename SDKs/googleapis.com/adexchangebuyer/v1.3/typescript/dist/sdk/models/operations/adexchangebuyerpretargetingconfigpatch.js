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
exports.AdexchangebuyerPretargetingConfigPatchResponse = exports.AdexchangebuyerPretargetingConfigPatchRequest = exports.AdexchangebuyerPretargetingConfigPatchSecurity = exports.AdexchangebuyerPretargetingConfigPatchQueryParams = exports.AdexchangebuyerPretargetingConfigPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AdexchangebuyerPretargetingConfigPatchPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigPatchPathParams, _super);
    function AdexchangebuyerPretargetingConfigPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchPathParams.prototype, "configId", void 0);
    return AdexchangebuyerPretargetingConfigPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerPretargetingConfigPatchPathParams = AdexchangebuyerPretargetingConfigPatchPathParams;
var AdexchangebuyerPretargetingConfigPatchQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigPatchQueryParams, _super);
    function AdexchangebuyerPretargetingConfigPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPretargetingConfigPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPretargetingConfigPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerPretargetingConfigPatchQueryParams = AdexchangebuyerPretargetingConfigPatchQueryParams;
var AdexchangebuyerPretargetingConfigPatchSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigPatchSecurity, _super);
    function AdexchangebuyerPretargetingConfigPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPretargetingConfigPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPretargetingConfigPatchSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPretargetingConfigPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerPretargetingConfigPatchSecurity = AdexchangebuyerPretargetingConfigPatchSecurity;
var AdexchangebuyerPretargetingConfigPatchRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigPatchRequest, _super);
    function AdexchangebuyerPretargetingConfigPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigPatchPathParams)
    ], AdexchangebuyerPretargetingConfigPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigPatchQueryParams)
    ], AdexchangebuyerPretargetingConfigPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PretargetingConfig)
    ], AdexchangebuyerPretargetingConfigPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerPretargetingConfigPatchSecurity)
    ], AdexchangebuyerPretargetingConfigPatchRequest.prototype, "security", void 0);
    return AdexchangebuyerPretargetingConfigPatchRequest;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerPretargetingConfigPatchRequest = AdexchangebuyerPretargetingConfigPatchRequest;
var AdexchangebuyerPretargetingConfigPatchResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPretargetingConfigPatchResponse, _super);
    function AdexchangebuyerPretargetingConfigPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AdexchangebuyerPretargetingConfigPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PretargetingConfig)
    ], AdexchangebuyerPretargetingConfigPatchResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPretargetingConfigPatchResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPretargetingConfigPatchResponse;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerPretargetingConfigPatchResponse = AdexchangebuyerPretargetingConfigPatchResponse;
