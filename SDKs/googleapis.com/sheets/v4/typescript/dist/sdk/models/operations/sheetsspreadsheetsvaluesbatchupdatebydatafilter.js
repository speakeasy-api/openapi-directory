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
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse = exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest = exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity = exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 = exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 = exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 = exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams = exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams = SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams;
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams = SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams;
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 = SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1;
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 = SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2;
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 = SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3;
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity = SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity;
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateValuesByDataFilterRequest)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest = SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest;
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BatchUpdateValuesByDataFilterResponse)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse.prototype, "batchUpdateValuesByDataFilterResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse = SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse;
