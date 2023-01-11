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
exports.AndroiddeviceprovisioningPartnersCustomersCreateResponse = exports.AndroiddeviceprovisioningPartnersCustomersCreateRequest = exports.AndroiddeviceprovisioningPartnersCustomersCreateQueryParams = exports.AndroiddeviceprovisioningPartnersCustomersCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AndroiddeviceprovisioningPartnersCustomersCreatePathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersCreatePathParams, _super);
    function AndroiddeviceprovisioningPartnersCustomersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreatePathParams.prototype, "parent", void 0);
    return AndroiddeviceprovisioningPartnersCustomersCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.AndroiddeviceprovisioningPartnersCustomersCreatePathParams = AndroiddeviceprovisioningPartnersCustomersCreatePathParams;
var AndroiddeviceprovisioningPartnersCustomersCreateQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersCreateQueryParams, _super);
    function AndroiddeviceprovisioningPartnersCustomersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersCustomersCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AndroiddeviceprovisioningPartnersCustomersCreateQueryParams = AndroiddeviceprovisioningPartnersCustomersCreateQueryParams;
var AndroiddeviceprovisioningPartnersCustomersCreateRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersCreateRequest, _super);
    function AndroiddeviceprovisioningPartnersCustomersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersCustomersCreatePathParams)
    ], AndroiddeviceprovisioningPartnersCustomersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersCustomersCreateQueryParams)
    ], AndroiddeviceprovisioningPartnersCustomersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCustomerRequestInput)
    ], AndroiddeviceprovisioningPartnersCustomersCreateRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningPartnersCustomersCreateRequest;
}(utils_1.SpeakeasyBase));
exports.AndroiddeviceprovisioningPartnersCustomersCreateRequest = AndroiddeviceprovisioningPartnersCustomersCreateRequest;
var AndroiddeviceprovisioningPartnersCustomersCreateResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersCreateResponse, _super);
    function AndroiddeviceprovisioningPartnersCustomersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Company)
    ], AndroiddeviceprovisioningPartnersCustomersCreateResponse.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersCustomersCreateResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersCustomersCreateResponse;
}(utils_1.SpeakeasyBase));
exports.AndroiddeviceprovisioningPartnersCustomersCreateResponse = AndroiddeviceprovisioningPartnersCustomersCreateResponse;
