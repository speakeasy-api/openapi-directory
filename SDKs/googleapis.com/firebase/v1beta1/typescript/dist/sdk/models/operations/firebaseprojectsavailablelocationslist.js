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
exports.FirebaseProjectsAvailableLocationsListResponse = exports.FirebaseProjectsAvailableLocationsListRequest = exports.FirebaseProjectsAvailableLocationsListSecurity = exports.FirebaseProjectsAvailableLocationsListSecurityOption4 = exports.FirebaseProjectsAvailableLocationsListSecurityOption3 = exports.FirebaseProjectsAvailableLocationsListSecurityOption2 = exports.FirebaseProjectsAvailableLocationsListSecurityOption1 = exports.FirebaseProjectsAvailableLocationsListQueryParams = exports.FirebaseProjectsAvailableLocationsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FirebaseProjectsAvailableLocationsListPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListPathParams, _super);
    function FirebaseProjectsAvailableLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListPathParams.prototype, "parent", void 0);
    return FirebaseProjectsAvailableLocationsListPathParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListPathParams = FirebaseProjectsAvailableLocationsListPathParams;
var FirebaseProjectsAvailableLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListQueryParams, _super);
    function FirebaseProjectsAvailableLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsAvailableLocationsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListQueryParams = FirebaseProjectsAvailableLocationsListQueryParams;
var FirebaseProjectsAvailableLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListSecurityOption1, _super);
    function FirebaseProjectsAvailableLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAvailableLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAvailableLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsAvailableLocationsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListSecurityOption1 = FirebaseProjectsAvailableLocationsListSecurityOption1;
var FirebaseProjectsAvailableLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListSecurityOption2, _super);
    function FirebaseProjectsAvailableLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAvailableLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAvailableLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsAvailableLocationsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListSecurityOption2 = FirebaseProjectsAvailableLocationsListSecurityOption2;
var FirebaseProjectsAvailableLocationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListSecurityOption3, _super);
    function FirebaseProjectsAvailableLocationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAvailableLocationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAvailableLocationsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseProjectsAvailableLocationsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListSecurityOption3 = FirebaseProjectsAvailableLocationsListSecurityOption3;
var FirebaseProjectsAvailableLocationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListSecurityOption4, _super);
    function FirebaseProjectsAvailableLocationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAvailableLocationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAvailableLocationsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseProjectsAvailableLocationsListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListSecurityOption4 = FirebaseProjectsAvailableLocationsListSecurityOption4;
var FirebaseProjectsAvailableLocationsListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListSecurity, _super);
    function FirebaseProjectsAvailableLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAvailableLocationsListSecurityOption1)
    ], FirebaseProjectsAvailableLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAvailableLocationsListSecurityOption2)
    ], FirebaseProjectsAvailableLocationsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAvailableLocationsListSecurityOption3)
    ], FirebaseProjectsAvailableLocationsListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAvailableLocationsListSecurityOption4)
    ], FirebaseProjectsAvailableLocationsListSecurity.prototype, "option4", void 0);
    return FirebaseProjectsAvailableLocationsListSecurity;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListSecurity = FirebaseProjectsAvailableLocationsListSecurity;
var FirebaseProjectsAvailableLocationsListRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListRequest, _super);
    function FirebaseProjectsAvailableLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsAvailableLocationsListPathParams)
    ], FirebaseProjectsAvailableLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsAvailableLocationsListQueryParams)
    ], FirebaseProjectsAvailableLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FirebaseProjectsAvailableLocationsListSecurity)
    ], FirebaseProjectsAvailableLocationsListRequest.prototype, "security", void 0);
    return FirebaseProjectsAvailableLocationsListRequest;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListRequest = FirebaseProjectsAvailableLocationsListRequest;
var FirebaseProjectsAvailableLocationsListResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAvailableLocationsListResponse, _super);
    function FirebaseProjectsAvailableLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FirebaseProjectsAvailableLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListAvailableLocationsResponse)
    ], FirebaseProjectsAvailableLocationsListResponse.prototype, "listAvailableLocationsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FirebaseProjectsAvailableLocationsListResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsAvailableLocationsListResponse;
}(utils_1.SpeakeasyBase));
exports.FirebaseProjectsAvailableLocationsListResponse = FirebaseProjectsAvailableLocationsListResponse;
