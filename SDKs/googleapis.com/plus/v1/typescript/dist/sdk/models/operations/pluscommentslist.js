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
exports.PlusCommentsListResponse = exports.PlusCommentsListRequest = exports.PlusCommentsListSecurity = exports.PlusCommentsListSecurityOption2 = exports.PlusCommentsListSecurityOption1 = exports.PlusCommentsListQueryParams = exports.PlusCommentsListSortOrderEnum = exports.PlusCommentsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PlusCommentsListPathParams = /** @class */ (function (_super) {
    __extends(PlusCommentsListPathParams, _super);
    function PlusCommentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=activityId" }),
        __metadata("design:type", String)
    ], PlusCommentsListPathParams.prototype, "activityId", void 0);
    return PlusCommentsListPathParams;
}(utils_1.SpeakeasyBase));
exports.PlusCommentsListPathParams = PlusCommentsListPathParams;
var PlusCommentsListSortOrderEnum;
(function (PlusCommentsListSortOrderEnum) {
    PlusCommentsListSortOrderEnum["Ascending"] = "ascending";
    PlusCommentsListSortOrderEnum["Descending"] = "descending";
})(PlusCommentsListSortOrderEnum = exports.PlusCommentsListSortOrderEnum || (exports.PlusCommentsListSortOrderEnum = {}));
var PlusCommentsListQueryParams = /** @class */ (function (_super) {
    __extends(PlusCommentsListQueryParams, _super);
    function PlusCommentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PlusCommentsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusCommentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusCommentsListQueryParams.prototype, "userIp", void 0);
    return PlusCommentsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.PlusCommentsListQueryParams = PlusCommentsListQueryParams;
var PlusCommentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusCommentsListSecurityOption1, _super);
    function PlusCommentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusCommentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusCommentsListSecurityOption1.prototype, "oauth2c", void 0);
    return PlusCommentsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.PlusCommentsListSecurityOption1 = PlusCommentsListSecurityOption1;
var PlusCommentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusCommentsListSecurityOption2, _super);
    function PlusCommentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusCommentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusCommentsListSecurityOption2.prototype, "oauth2c", void 0);
    return PlusCommentsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.PlusCommentsListSecurityOption2 = PlusCommentsListSecurityOption2;
var PlusCommentsListSecurity = /** @class */ (function (_super) {
    __extends(PlusCommentsListSecurity, _super);
    function PlusCommentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", PlusCommentsListSecurityOption1)
    ], PlusCommentsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", PlusCommentsListSecurityOption2)
    ], PlusCommentsListSecurity.prototype, "option2", void 0);
    return PlusCommentsListSecurity;
}(utils_1.SpeakeasyBase));
exports.PlusCommentsListSecurity = PlusCommentsListSecurity;
var PlusCommentsListRequest = /** @class */ (function (_super) {
    __extends(PlusCommentsListRequest, _super);
    function PlusCommentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlusCommentsListPathParams)
    ], PlusCommentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlusCommentsListQueryParams)
    ], PlusCommentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlusCommentsListSecurity)
    ], PlusCommentsListRequest.prototype, "security", void 0);
    return PlusCommentsListRequest;
}(utils_1.SpeakeasyBase));
exports.PlusCommentsListRequest = PlusCommentsListRequest;
var PlusCommentsListResponse = /** @class */ (function (_super) {
    __extends(PlusCommentsListResponse, _super);
    function PlusCommentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CommentFeed)
    ], PlusCommentsListResponse.prototype, "commentFeed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PlusCommentsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PlusCommentsListResponse.prototype, "statusCode", void 0);
    return PlusCommentsListResponse;
}(utils_1.SpeakeasyBase));
exports.PlusCommentsListResponse = PlusCommentsListResponse;
