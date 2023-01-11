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
exports.FirebaseProjectsWebAppsListResponse = exports.FirebaseProjectsWebAppsListRequest = exports.FirebaseProjectsWebAppsListSecurity = exports.FirebaseProjectsWebAppsListSecurityOption4 = exports.FirebaseProjectsWebAppsListSecurityOption3 = exports.FirebaseProjectsWebAppsListSecurityOption2 = exports.FirebaseProjectsWebAppsListSecurityOption1 = exports.FirebaseProjectsWebAppsListQueryParams = exports.FirebaseProjectsWebAppsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FirebaseProjectsWebAppsListPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListPathParams, _super);
    function FirebaseProjectsWebAppsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListPathParams.prototype, "parent", void 0);
    return FirebaseProjectsWebAppsListPathParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListPathParams = FirebaseProjectsWebAppsListPathParams;
var FirebaseProjectsWebAppsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListQueryParams, _super);
    function FirebaseProjectsWebAppsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsWebAppsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListQueryParams = FirebaseProjectsWebAppsListQueryParams;
var FirebaseProjectsWebAppsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListSecurityOption1, _super);
    function FirebaseProjectsWebAppsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListSecurityOption1 = FirebaseProjectsWebAppsListSecurityOption1;
var FirebaseProjectsWebAppsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListSecurityOption2, _super);
    function FirebaseProjectsWebAppsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListSecurityOption2 = FirebaseProjectsWebAppsListSecurityOption2;
var FirebaseProjectsWebAppsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListSecurityOption3, _super);
    function FirebaseProjectsWebAppsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListSecurityOption3 = FirebaseProjectsWebAppsListSecurityOption3;
var FirebaseProjectsWebAppsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListSecurityOption4, _super);
    function FirebaseProjectsWebAppsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListSecurityOption4 = FirebaseProjectsWebAppsListSecurityOption4;
var FirebaseProjectsWebAppsListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListSecurity, _super);
    function FirebaseProjectsWebAppsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsListSecurityOption1)
    ], FirebaseProjectsWebAppsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsListSecurityOption2)
    ], FirebaseProjectsWebAppsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsListSecurityOption3)
    ], FirebaseProjectsWebAppsListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsListSecurityOption4)
    ], FirebaseProjectsWebAppsListSecurity.prototype, "option4", void 0);
    return FirebaseProjectsWebAppsListSecurity;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListSecurity = FirebaseProjectsWebAppsListSecurity;
var FirebaseProjectsWebAppsListRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListRequest, _super);
    function FirebaseProjectsWebAppsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsWebAppsListPathParams)
    ], FirebaseProjectsWebAppsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsWebAppsListQueryParams)
    ], FirebaseProjectsWebAppsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsWebAppsListSecurity)
    ], FirebaseProjectsWebAppsListRequest.prototype, "security", void 0);
    return FirebaseProjectsWebAppsListRequest;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListRequest = FirebaseProjectsWebAppsListRequest;
var FirebaseProjectsWebAppsListResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsListResponse, _super);
    function FirebaseProjectsWebAppsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListWebAppsResponse)
    ], FirebaseProjectsWebAppsListResponse.prototype, "listWebAppsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FirebaseProjectsWebAppsListResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsWebAppsListResponse;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsWebAppsListResponse = FirebaseProjectsWebAppsListResponse;
