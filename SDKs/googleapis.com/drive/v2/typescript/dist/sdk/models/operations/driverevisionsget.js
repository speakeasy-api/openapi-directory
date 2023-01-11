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
exports.DriveRevisionsGetResponse = exports.DriveRevisionsGetRequest = exports.DriveRevisionsGetSecurity = exports.DriveRevisionsGetSecurityOption7 = exports.DriveRevisionsGetSecurityOption6 = exports.DriveRevisionsGetSecurityOption5 = exports.DriveRevisionsGetSecurityOption4 = exports.DriveRevisionsGetSecurityOption3 = exports.DriveRevisionsGetSecurityOption2 = exports.DriveRevisionsGetSecurityOption1 = exports.DriveRevisionsGetQueryParams = exports.DriveRevisionsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveRevisionsGetPathParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetPathParams, _super);
    function DriveRevisionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetPathParams.prototype, "fileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=revisionId" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetPathParams.prototype, "revisionId", void 0);
    return DriveRevisionsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetPathParams = DriveRevisionsGetPathParams;
var DriveRevisionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetQueryParams, _super);
    function DriveRevisionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRevisionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "userIp", void 0);
    return DriveRevisionsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetQueryParams = DriveRevisionsGetQueryParams;
var DriveRevisionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption1, _super);
    function DriveRevisionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurityOption1 = DriveRevisionsGetSecurityOption1;
var DriveRevisionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption2, _super);
    function DriveRevisionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurityOption2 = DriveRevisionsGetSecurityOption2;
var DriveRevisionsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption3, _super);
    function DriveRevisionsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurityOption3 = DriveRevisionsGetSecurityOption3;
var DriveRevisionsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption4, _super);
    function DriveRevisionsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurityOption4 = DriveRevisionsGetSecurityOption4;
var DriveRevisionsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption5, _super);
    function DriveRevisionsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurityOption5 = DriveRevisionsGetSecurityOption5;
var DriveRevisionsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption6, _super);
    function DriveRevisionsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption6;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurityOption6 = DriveRevisionsGetSecurityOption6;
var DriveRevisionsGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption7, _super);
    function DriveRevisionsGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption7;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurityOption7 = DriveRevisionsGetSecurityOption7;
var DriveRevisionsGetSecurity = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurity, _super);
    function DriveRevisionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption1)
    ], DriveRevisionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption2)
    ], DriveRevisionsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption3)
    ], DriveRevisionsGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption4)
    ], DriveRevisionsGetSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption5)
    ], DriveRevisionsGetSecurity.prototype, "option5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption6)
    ], DriveRevisionsGetSecurity.prototype, "option6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption7)
    ], DriveRevisionsGetSecurity.prototype, "option7", void 0);
    return DriveRevisionsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetSecurity = DriveRevisionsGetSecurity;
var DriveRevisionsGetRequest = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetRequest, _super);
    function DriveRevisionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveRevisionsGetPathParams)
    ], DriveRevisionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveRevisionsGetQueryParams)
    ], DriveRevisionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveRevisionsGetSecurity)
    ], DriveRevisionsGetRequest.prototype, "security", void 0);
    return DriveRevisionsGetRequest;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetRequest = DriveRevisionsGetRequest;
var DriveRevisionsGetResponse = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetResponse, _super);
    function DriveRevisionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveRevisionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Revision)
    ], DriveRevisionsGetResponse.prototype, "revision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveRevisionsGetResponse.prototype, "statusCode", void 0);
    return DriveRevisionsGetResponse;
}(utils_1.SpeakeasyBase));
exports.DriveRevisionsGetResponse = DriveRevisionsGetResponse;
