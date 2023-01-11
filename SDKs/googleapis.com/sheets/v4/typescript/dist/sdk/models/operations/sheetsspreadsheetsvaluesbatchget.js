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
exports.SheetsSpreadsheetsValuesBatchGetResponse = exports.SheetsSpreadsheetsValuesBatchGetRequest = exports.SheetsSpreadsheetsValuesBatchGetSecurity = exports.SheetsSpreadsheetsValuesBatchGetSecurityOption5 = exports.SheetsSpreadsheetsValuesBatchGetSecurityOption4 = exports.SheetsSpreadsheetsValuesBatchGetSecurityOption3 = exports.SheetsSpreadsheetsValuesBatchGetSecurityOption2 = exports.SheetsSpreadsheetsValuesBatchGetSecurityOption1 = exports.SheetsSpreadsheetsValuesBatchGetQueryParams = exports.SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum = exports.SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum = exports.SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum = exports.SheetsSpreadsheetsValuesBatchGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SheetsSpreadsheetsValuesBatchGetPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetPathParams, _super);
    function SheetsSpreadsheetsValuesBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesBatchGetPathParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetPathParams = SheetsSpreadsheetsValuesBatchGetPathParams;
var SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum;
(function (SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum) {
    SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum["SerialNumber"] = "SERIAL_NUMBER";
    SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum["FormattedString"] = "FORMATTED_STRING";
})(SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum = exports.SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum || (exports.SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum = {}));
var SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum;
(function (SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum) {
    SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum["Rows"] = "ROWS";
    SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum["Columns"] = "COLUMNS";
})(SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum = exports.SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum || (exports.SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum = {}));
var SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum;
(function (SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum) {
    SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum["FormattedValue"] = "FORMATTED_VALUE";
    SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum["UnformattedValue"] = "UNFORMATTED_VALUE";
    SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum["Formula"] = "FORMULA";
})(SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum = exports.SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum || (exports.SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum = {}));
var SheetsSpreadsheetsValuesBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetQueryParams, _super);
    function SheetsSpreadsheetsValuesBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateTimeRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "dateTimeRenderOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=majorDimension" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "majorDimension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ranges" }),
        __metadata("design:type", Array)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "ranges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=valueRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetQueryParams.prototype, "valueRenderOption", void 0);
    return SheetsSpreadsheetsValuesBatchGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetQueryParams = SheetsSpreadsheetsValuesBatchGetQueryParams;
var SheetsSpreadsheetsValuesBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetSecurityOption1, _super);
    function SheetsSpreadsheetsValuesBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetSecurityOption1 = SheetsSpreadsheetsValuesBatchGetSecurityOption1;
var SheetsSpreadsheetsValuesBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetSecurityOption2, _super);
    function SheetsSpreadsheetsValuesBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetSecurityOption2 = SheetsSpreadsheetsValuesBatchGetSecurityOption2;
var SheetsSpreadsheetsValuesBatchGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetSecurityOption3, _super);
    function SheetsSpreadsheetsValuesBatchGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetSecurityOption3 = SheetsSpreadsheetsValuesBatchGetSecurityOption3;
var SheetsSpreadsheetsValuesBatchGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetSecurityOption4, _super);
    function SheetsSpreadsheetsValuesBatchGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption4.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetSecurityOption4 = SheetsSpreadsheetsValuesBatchGetSecurityOption4;
var SheetsSpreadsheetsValuesBatchGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetSecurityOption5, _super);
    function SheetsSpreadsheetsValuesBatchGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetSecurityOption5.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetSecurityOption5 = SheetsSpreadsheetsValuesBatchGetSecurityOption5;
var SheetsSpreadsheetsValuesBatchGetSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetSecurity, _super);
    function SheetsSpreadsheetsValuesBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetSecurityOption1)
    ], SheetsSpreadsheetsValuesBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetSecurityOption2)
    ], SheetsSpreadsheetsValuesBatchGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetSecurityOption3)
    ], SheetsSpreadsheetsValuesBatchGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetSecurityOption4)
    ], SheetsSpreadsheetsValuesBatchGetSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetSecurityOption5)
    ], SheetsSpreadsheetsValuesBatchGetSecurity.prototype, "option5", void 0);
    return SheetsSpreadsheetsValuesBatchGetSecurity;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetSecurity = SheetsSpreadsheetsValuesBatchGetSecurity;
var SheetsSpreadsheetsValuesBatchGetRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetRequest, _super);
    function SheetsSpreadsheetsValuesBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetPathParams)
    ], SheetsSpreadsheetsValuesBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetQueryParams)
    ], SheetsSpreadsheetsValuesBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetSecurity)
    ], SheetsSpreadsheetsValuesBatchGetRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesBatchGetRequest;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetRequest = SheetsSpreadsheetsValuesBatchGetRequest;
var SheetsSpreadsheetsValuesBatchGetResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetResponse, _super);
    function SheetsSpreadsheetsValuesBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BatchGetValuesResponse)
    ], SheetsSpreadsheetsValuesBatchGetResponse.prototype, "batchGetValuesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesBatchGetResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesBatchGetResponse;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsValuesBatchGetResponse = SheetsSpreadsheetsValuesBatchGetResponse;
