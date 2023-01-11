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
exports.Adexchangebuyer2AccountsCreativesCreateResponse = exports.Adexchangebuyer2AccountsCreativesCreateRequest = exports.Adexchangebuyer2AccountsCreativesCreateSecurity = exports.Adexchangebuyer2AccountsCreativesCreateQueryParams = exports.Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum = exports.Adexchangebuyer2AccountsCreativesCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var Adexchangebuyer2AccountsCreativesCreatePathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesCreatePathParams, _super);
    function Adexchangebuyer2AccountsCreativesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreatePathParams.prototype, "accountId", void 0);
    return Adexchangebuyer2AccountsCreativesCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsCreativesCreatePathParams = Adexchangebuyer2AccountsCreativesCreatePathParams;
var Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum;
(function (Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum) {
    Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum["NoDuplicates"] = "NO_DUPLICATES";
    Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum["ForceEnableDuplicateIds"] = "FORCE_ENABLE_DUPLICATE_IDS";
})(Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum = exports.Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum || (exports.Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum = {}));
var Adexchangebuyer2AccountsCreativesCreateQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesCreateQueryParams, _super);
    function Adexchangebuyer2AccountsCreativesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=duplicateIdMode" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "duplicateIdMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsCreativesCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsCreativesCreateQueryParams = Adexchangebuyer2AccountsCreativesCreateQueryParams;
var Adexchangebuyer2AccountsCreativesCreateSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesCreateSecurity, _super);
    function Adexchangebuyer2AccountsCreativesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsCreativesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsCreativesCreateSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsCreativesCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsCreativesCreateSecurity = Adexchangebuyer2AccountsCreativesCreateSecurity;
var Adexchangebuyer2AccountsCreativesCreateRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesCreateRequest, _super);
    function Adexchangebuyer2AccountsCreativesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesCreatePathParams)
    ], Adexchangebuyer2AccountsCreativesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesCreateQueryParams)
    ], Adexchangebuyer2AccountsCreativesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Creative)
    ], Adexchangebuyer2AccountsCreativesCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesCreateSecurity)
    ], Adexchangebuyer2AccountsCreativesCreateRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsCreativesCreateRequest;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsCreativesCreateRequest = Adexchangebuyer2AccountsCreativesCreateRequest;
var Adexchangebuyer2AccountsCreativesCreateResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesCreateResponse, _super);
    function Adexchangebuyer2AccountsCreativesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Creative)
    ], Adexchangebuyer2AccountsCreativesCreateResponse.prototype, "creative", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsCreativesCreateResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsCreativesCreateResponse;
}(utils_1.SpeakeasyBase));
exports.Adexchangebuyer2AccountsCreativesCreateResponse = Adexchangebuyer2AccountsCreativesCreateResponse;
