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
exports.FirebaseProjectsIosAppsListResponse = exports.FirebaseProjectsIosAppsListRequest = exports.FirebaseProjectsIosAppsListSecurity = exports.FirebaseProjectsIosAppsListSecurityOption4 = exports.FirebaseProjectsIosAppsListSecurityOption3 = exports.FirebaseProjectsIosAppsListSecurityOption2 = exports.FirebaseProjectsIosAppsListSecurityOption1 = exports.FirebaseProjectsIosAppsListQueryParams = exports.FirebaseProjectsIosAppsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FirebaseProjectsIosAppsListPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListPathParams, _super);
    function FirebaseProjectsIosAppsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListPathParams.prototype, "parent", void 0);
    return FirebaseProjectsIosAppsListPathParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListPathParams = FirebaseProjectsIosAppsListPathParams;
var FirebaseProjectsIosAppsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListQueryParams, _super);
    function FirebaseProjectsIosAppsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsIosAppsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListQueryParams = FirebaseProjectsIosAppsListQueryParams;
var FirebaseProjectsIosAppsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListSecurityOption1, _super);
    function FirebaseProjectsIosAppsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsIosAppsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsIosAppsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsIosAppsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListSecurityOption1 = FirebaseProjectsIosAppsListSecurityOption1;
var FirebaseProjectsIosAppsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListSecurityOption2, _super);
    function FirebaseProjectsIosAppsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsIosAppsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsIosAppsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsIosAppsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListSecurityOption2 = FirebaseProjectsIosAppsListSecurityOption2;
var FirebaseProjectsIosAppsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListSecurityOption3, _super);
    function FirebaseProjectsIosAppsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsIosAppsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsIosAppsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseProjectsIosAppsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListSecurityOption3 = FirebaseProjectsIosAppsListSecurityOption3;
var FirebaseProjectsIosAppsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListSecurityOption4, _super);
    function FirebaseProjectsIosAppsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsIosAppsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsIosAppsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseProjectsIosAppsListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListSecurityOption4 = FirebaseProjectsIosAppsListSecurityOption4;
var FirebaseProjectsIosAppsListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListSecurity, _super);
    function FirebaseProjectsIosAppsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsIosAppsListSecurityOption1)
    ], FirebaseProjectsIosAppsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsIosAppsListSecurityOption2)
    ], FirebaseProjectsIosAppsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsIosAppsListSecurityOption3)
    ], FirebaseProjectsIosAppsListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsIosAppsListSecurityOption4)
    ], FirebaseProjectsIosAppsListSecurity.prototype, "option4", void 0);
    return FirebaseProjectsIosAppsListSecurity;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListSecurity = FirebaseProjectsIosAppsListSecurity;
var FirebaseProjectsIosAppsListRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListRequest, _super);
    function FirebaseProjectsIosAppsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsIosAppsListPathParams)
    ], FirebaseProjectsIosAppsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsIosAppsListQueryParams)
    ], FirebaseProjectsIosAppsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsIosAppsListSecurity)
    ], FirebaseProjectsIosAppsListRequest.prototype, "security", void 0);
    return FirebaseProjectsIosAppsListRequest;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListRequest = FirebaseProjectsIosAppsListRequest;
var FirebaseProjectsIosAppsListResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsListResponse, _super);
    function FirebaseProjectsIosAppsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListIosAppsResponse)
    ], FirebaseProjectsIosAppsListResponse.prototype, "listIosAppsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FirebaseProjectsIosAppsListResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsIosAppsListResponse;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsIosAppsListResponse = FirebaseProjectsIosAppsListResponse;
