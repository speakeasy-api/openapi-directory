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
exports.BillingbudgetsBillingAccountsBudgetsGetResponse = exports.BillingbudgetsBillingAccountsBudgetsGetRequest = exports.BillingbudgetsBillingAccountsBudgetsGetSecurity = exports.BillingbudgetsBillingAccountsBudgetsGetSecurityOption2 = exports.BillingbudgetsBillingAccountsBudgetsGetSecurityOption1 = exports.BillingbudgetsBillingAccountsBudgetsGetQueryParams = exports.BillingbudgetsBillingAccountsBudgetsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BillingbudgetsBillingAccountsBudgetsGetPathParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsGetPathParams, _super);
    function BillingbudgetsBillingAccountsBudgetsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetPathParams.prototype, "name", void 0);
    return BillingbudgetsBillingAccountsBudgetsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.BillingbudgetsBillingAccountsBudgetsGetPathParams = BillingbudgetsBillingAccountsBudgetsGetPathParams;
var BillingbudgetsBillingAccountsBudgetsGetQueryParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsGetQueryParams, _super);
    function BillingbudgetsBillingAccountsBudgetsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetQueryParams.prototype, "uploadProtocol", void 0);
    return BillingbudgetsBillingAccountsBudgetsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.BillingbudgetsBillingAccountsBudgetsGetQueryParams = BillingbudgetsBillingAccountsBudgetsGetQueryParams;
var BillingbudgetsBillingAccountsBudgetsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsGetSecurityOption1, _super);
    function BillingbudgetsBillingAccountsBudgetsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.BillingbudgetsBillingAccountsBudgetsGetSecurityOption1 = BillingbudgetsBillingAccountsBudgetsGetSecurityOption1;
var BillingbudgetsBillingAccountsBudgetsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsGetSecurityOption2, _super);
    function BillingbudgetsBillingAccountsBudgetsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.BillingbudgetsBillingAccountsBudgetsGetSecurityOption2 = BillingbudgetsBillingAccountsBudgetsGetSecurityOption2;
var BillingbudgetsBillingAccountsBudgetsGetSecurity = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsGetSecurity, _super);
    function BillingbudgetsBillingAccountsBudgetsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsGetSecurityOption1)
    ], BillingbudgetsBillingAccountsBudgetsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsGetSecurityOption2)
    ], BillingbudgetsBillingAccountsBudgetsGetSecurity.prototype, "option2", void 0);
    return BillingbudgetsBillingAccountsBudgetsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.BillingbudgetsBillingAccountsBudgetsGetSecurity = BillingbudgetsBillingAccountsBudgetsGetSecurity;
var BillingbudgetsBillingAccountsBudgetsGetRequest = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsGetRequest, _super);
    function BillingbudgetsBillingAccountsBudgetsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsGetPathParams)
    ], BillingbudgetsBillingAccountsBudgetsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsGetQueryParams)
    ], BillingbudgetsBillingAccountsBudgetsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsGetSecurity)
    ], BillingbudgetsBillingAccountsBudgetsGetRequest.prototype, "security", void 0);
    return BillingbudgetsBillingAccountsBudgetsGetRequest;
}(utils_1.SpeakeasyBase));
exports.BillingbudgetsBillingAccountsBudgetsGetRequest = BillingbudgetsBillingAccountsBudgetsGetRequest;
var BillingbudgetsBillingAccountsBudgetsGetResponse = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsGetResponse, _super);
    function BillingbudgetsBillingAccountsBudgetsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleCloudBillingBudgetsV1Budget)
    ], BillingbudgetsBillingAccountsBudgetsGetResponse.prototype, "googleCloudBillingBudgetsV1Budget", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BillingbudgetsBillingAccountsBudgetsGetResponse.prototype, "statusCode", void 0);
    return BillingbudgetsBillingAccountsBudgetsGetResponse;
}(utils_1.SpeakeasyBase));
exports.BillingbudgetsBillingAccountsBudgetsGetResponse = BillingbudgetsBillingAccountsBudgetsGetResponse;
