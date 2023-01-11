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
exports.PeoplePeopleDeleteContactPhotoResponse = exports.PeoplePeopleDeleteContactPhotoRequest = exports.PeoplePeopleDeleteContactPhotoSecurity = exports.PeoplePeopleDeleteContactPhotoQueryParams = exports.PeoplePeopleDeleteContactPhotoSourcesEnum = exports.PeoplePeopleDeleteContactPhotoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PeoplePeopleDeleteContactPhotoPathParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleDeleteContactPhotoPathParams, _super);
    function PeoplePeopleDeleteContactPhotoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoPathParams.prototype, "resourceName", void 0);
    return PeoplePeopleDeleteContactPhotoPathParams;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleDeleteContactPhotoPathParams = PeoplePeopleDeleteContactPhotoPathParams;
var PeoplePeopleDeleteContactPhotoSourcesEnum;
(function (PeoplePeopleDeleteContactPhotoSourcesEnum) {
    PeoplePeopleDeleteContactPhotoSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleDeleteContactPhotoSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleDeleteContactPhotoSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleDeleteContactPhotoSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleDeleteContactPhotoSourcesEnum = exports.PeoplePeopleDeleteContactPhotoSourcesEnum || (exports.PeoplePeopleDeleteContactPhotoSourcesEnum = {}));
var PeoplePeopleDeleteContactPhotoQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleDeleteContactPhotoQueryParams, _super);
    function PeoplePeopleDeleteContactPhotoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=personFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "personFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "sources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleDeleteContactPhotoQueryParams;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleDeleteContactPhotoQueryParams = PeoplePeopleDeleteContactPhotoQueryParams;
var PeoplePeopleDeleteContactPhotoSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleDeleteContactPhotoSecurity, _super);
    function PeoplePeopleDeleteContactPhotoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleDeleteContactPhotoSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleDeleteContactPhotoSecurity.prototype, "oauth2c", void 0);
    return PeoplePeopleDeleteContactPhotoSecurity;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleDeleteContactPhotoSecurity = PeoplePeopleDeleteContactPhotoSecurity;
var PeoplePeopleDeleteContactPhotoRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleDeleteContactPhotoRequest, _super);
    function PeoplePeopleDeleteContactPhotoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeoplePeopleDeleteContactPhotoPathParams)
    ], PeoplePeopleDeleteContactPhotoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeoplePeopleDeleteContactPhotoQueryParams)
    ], PeoplePeopleDeleteContactPhotoRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeoplePeopleDeleteContactPhotoSecurity)
    ], PeoplePeopleDeleteContactPhotoRequest.prototype, "security", void 0);
    return PeoplePeopleDeleteContactPhotoRequest;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleDeleteContactPhotoRequest = PeoplePeopleDeleteContactPhotoRequest;
var PeoplePeopleDeleteContactPhotoResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleDeleteContactPhotoResponse, _super);
    function PeoplePeopleDeleteContactPhotoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PeoplePeopleDeleteContactPhotoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeleteContactPhotoResponse)
    ], PeoplePeopleDeleteContactPhotoResponse.prototype, "deleteContactPhotoResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PeoplePeopleDeleteContactPhotoResponse.prototype, "statusCode", void 0);
    return PeoplePeopleDeleteContactPhotoResponse;
}(utils_1.SpeakeasyBase));
exports.PeoplePeopleDeleteContactPhotoResponse = PeoplePeopleDeleteContactPhotoResponse;
