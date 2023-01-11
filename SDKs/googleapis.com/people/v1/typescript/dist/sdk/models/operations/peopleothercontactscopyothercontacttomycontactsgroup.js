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
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse = exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest = exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity = exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2 = exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1 = exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams = exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams = /** @class */ (function (_super) {
    __extends(PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams, _super);
    function PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams.prototype, "resourceName", void 0);
    return PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams;
}(utils_1.SpeakeasyBase));
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams = PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams;
var PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams = /** @class */ (function (_super) {
    __extends(PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams, _super);
    function PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams.prototype, "uploadProtocol", void 0);
    return PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams = PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams;
var PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1 = /** @class */ (function (_super) {
    __extends(PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1, _super);
    function PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1.prototype, "oauth2c", void 0);
    return PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1 = PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1;
var PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2 = /** @class */ (function (_super) {
    __extends(PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2, _super);
    function PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2.prototype, "oauth2c", void 0);
    return PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2 = PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2;
var PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity = /** @class */ (function (_super) {
    __extends(PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity, _super);
    function PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity.prototype, "option2", void 0);
    return PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity;
}(utils_1.SpeakeasyBase));
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity = PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity;
var PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest = /** @class */ (function (_super) {
    __extends(PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest, _super);
    function PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CopyOtherContactToMyContactsGroupRequest)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest.prototype, "security", void 0);
    return PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest = PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest;
var PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse = /** @class */ (function (_super) {
    __extends(PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse, _super);
    function PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Person)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse.prototype, "person", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse.prototype, "statusCode", void 0);
    return PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse = PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse;
