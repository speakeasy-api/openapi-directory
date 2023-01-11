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
exports.PeoplePeopleConnectionsListResponse = exports.PeoplePeopleConnectionsListRequest = exports.PeoplePeopleConnectionsListSecurity = exports.PeoplePeopleConnectionsListSecurityOption2 = exports.PeoplePeopleConnectionsListSecurityOption1 = exports.PeoplePeopleConnectionsListQueryParams = exports.PeoplePeopleConnectionsListSourcesEnum = exports.PeoplePeopleConnectionsListSortOrderEnum = exports.PeoplePeopleConnectionsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PeoplePeopleConnectionsListPathParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListPathParams, _super);
    function PeoplePeopleConnectionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListPathParams.prototype, "resourceName", void 0);
    return PeoplePeopleConnectionsListPathParams;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleConnectionsListPathParams = PeoplePeopleConnectionsListPathParams;
var PeoplePeopleConnectionsListSortOrderEnum;
(function (PeoplePeopleConnectionsListSortOrderEnum) {
    PeoplePeopleConnectionsListSortOrderEnum["LastModifiedAscending"] = "LAST_MODIFIED_ASCENDING";
    PeoplePeopleConnectionsListSortOrderEnum["LastModifiedDescending"] = "LAST_MODIFIED_DESCENDING";
    PeoplePeopleConnectionsListSortOrderEnum["FirstNameAscending"] = "FIRST_NAME_ASCENDING";
    PeoplePeopleConnectionsListSortOrderEnum["LastNameAscending"] = "LAST_NAME_ASCENDING";
})(PeoplePeopleConnectionsListSortOrderEnum = exports.PeoplePeopleConnectionsListSortOrderEnum || (exports.PeoplePeopleConnectionsListSortOrderEnum = {}));
var PeoplePeopleConnectionsListSourcesEnum;
(function (PeoplePeopleConnectionsListSourcesEnum) {
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleConnectionsListSourcesEnum = exports.PeoplePeopleConnectionsListSourcesEnum || (exports.PeoplePeopleConnectionsListSourcesEnum = {}));
var PeoplePeopleConnectionsListQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListQueryParams, _super);
    function PeoplePeopleConnectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=personFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "personFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=requestMask.includeField" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "requestMaskIncludeField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=requestSyncToken" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "requestSyncToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "sources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "syncToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleConnectionsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleConnectionsListQueryParams = PeoplePeopleConnectionsListQueryParams;
var PeoplePeopleConnectionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListSecurityOption1, _super);
    function PeoplePeopleConnectionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleConnectionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleConnectionsListSecurityOption1.prototype, "oauth2c", void 0);
    return PeoplePeopleConnectionsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleConnectionsListSecurityOption1 = PeoplePeopleConnectionsListSecurityOption1;
var PeoplePeopleConnectionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListSecurityOption2, _super);
    function PeoplePeopleConnectionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleConnectionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleConnectionsListSecurityOption2.prototype, "oauth2c", void 0);
    return PeoplePeopleConnectionsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleConnectionsListSecurityOption2 = PeoplePeopleConnectionsListSecurityOption2;
var PeoplePeopleConnectionsListSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListSecurity, _super);
    function PeoplePeopleConnectionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleConnectionsListSecurityOption1)
    ], PeoplePeopleConnectionsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleConnectionsListSecurityOption2)
    ], PeoplePeopleConnectionsListSecurity.prototype, "option2", void 0);
    return PeoplePeopleConnectionsListSecurity;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleConnectionsListSecurity = PeoplePeopleConnectionsListSecurity;
var PeoplePeopleConnectionsListRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListRequest, _super);
    function PeoplePeopleConnectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeoplePeopleConnectionsListPathParams)
    ], PeoplePeopleConnectionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeoplePeopleConnectionsListQueryParams)
    ], PeoplePeopleConnectionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeoplePeopleConnectionsListSecurity)
    ], PeoplePeopleConnectionsListRequest.prototype, "security", void 0);
    return PeoplePeopleConnectionsListRequest;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleConnectionsListRequest = PeoplePeopleConnectionsListRequest;
var PeoplePeopleConnectionsListResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListResponse, _super);
    function PeoplePeopleConnectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListConnectionsResponse)
    ], PeoplePeopleConnectionsListResponse.prototype, "listConnectionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PeoplePeopleConnectionsListResponse.prototype, "statusCode", void 0);
    return PeoplePeopleConnectionsListResponse;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleConnectionsListResponse = PeoplePeopleConnectionsListResponse;
