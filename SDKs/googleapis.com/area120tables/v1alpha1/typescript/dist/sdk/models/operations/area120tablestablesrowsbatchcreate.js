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
exports.Area120tablesTablesRowsBatchCreateResponse = exports.Area120tablesTablesRowsBatchCreateRequest = exports.Area120tablesTablesRowsBatchCreateSecurity = exports.Area120tablesTablesRowsBatchCreateSecurityOption4 = exports.Area120tablesTablesRowsBatchCreateSecurityOption3 = exports.Area120tablesTablesRowsBatchCreateSecurityOption2 = exports.Area120tablesTablesRowsBatchCreateSecurityOption1 = exports.Area120tablesTablesRowsBatchCreateQueryParams = exports.Area120tablesTablesRowsBatchCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var Area120tablesTablesRowsBatchCreatePathParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreatePathParams, _super);
    function Area120tablesTablesRowsBatchCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreatePathParams.prototype, "parent", void 0);
    return Area120tablesTablesRowsBatchCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreatePathParams = Area120tablesTablesRowsBatchCreatePathParams;
var Area120tablesTablesRowsBatchCreateQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateQueryParams, _super);
    function Area120tablesTablesRowsBatchCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateQueryParams.prototype, "uploadProtocol", void 0);
    return Area120tablesTablesRowsBatchCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateQueryParams = Area120tablesTablesRowsBatchCreateQueryParams;
var Area120tablesTablesRowsBatchCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateSecurityOption1, _super);
    function Area120tablesTablesRowsBatchCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchCreateSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchCreateSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateSecurityOption1 = Area120tablesTablesRowsBatchCreateSecurityOption1;
var Area120tablesTablesRowsBatchCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateSecurityOption2, _super);
    function Area120tablesTablesRowsBatchCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchCreateSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchCreateSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateSecurityOption2 = Area120tablesTablesRowsBatchCreateSecurityOption2;
var Area120tablesTablesRowsBatchCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateSecurityOption3, _super);
    function Area120tablesTablesRowsBatchCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchCreateSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchCreateSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateSecurityOption3 = Area120tablesTablesRowsBatchCreateSecurityOption3;
var Area120tablesTablesRowsBatchCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateSecurityOption4, _super);
    function Area120tablesTablesRowsBatchCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchCreateSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchCreateSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateSecurityOption4 = Area120tablesTablesRowsBatchCreateSecurityOption4;
var Area120tablesTablesRowsBatchCreateSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateSecurity, _super);
    function Area120tablesTablesRowsBatchCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchCreateSecurityOption1)
    ], Area120tablesTablesRowsBatchCreateSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchCreateSecurityOption2)
    ], Area120tablesTablesRowsBatchCreateSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchCreateSecurityOption3)
    ], Area120tablesTablesRowsBatchCreateSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchCreateSecurityOption4)
    ], Area120tablesTablesRowsBatchCreateSecurity.prototype, "option4", void 0);
    return Area120tablesTablesRowsBatchCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateSecurity = Area120tablesTablesRowsBatchCreateSecurity;
var Area120tablesTablesRowsBatchCreateRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateRequest, _super);
    function Area120tablesTablesRowsBatchCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Area120tablesTablesRowsBatchCreatePathParams)
    ], Area120tablesTablesRowsBatchCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Area120tablesTablesRowsBatchCreateQueryParams)
    ], Area120tablesTablesRowsBatchCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchCreateRowsRequest)
    ], Area120tablesTablesRowsBatchCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Area120tablesTablesRowsBatchCreateSecurity)
    ], Area120tablesTablesRowsBatchCreateRequest.prototype, "security", void 0);
    return Area120tablesTablesRowsBatchCreateRequest;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateRequest = Area120tablesTablesRowsBatchCreateRequest;
var Area120tablesTablesRowsBatchCreateResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchCreateResponse, _super);
    function Area120tablesTablesRowsBatchCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BatchCreateRowsResponse)
    ], Area120tablesTablesRowsBatchCreateResponse.prototype, "batchCreateRowsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsBatchCreateResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesRowsBatchCreateResponse;
}(utils_1.SpeakeasyBase));
exports.Area120tablesTablesRowsBatchCreateResponse = Area120tablesTablesRowsBatchCreateResponse;
