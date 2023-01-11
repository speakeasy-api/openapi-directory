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
exports.DriveAboutGetResponse = exports.DriveAboutGetRequest = exports.DriveAboutGetSecurity = exports.DriveAboutGetSecurityOption7 = exports.DriveAboutGetSecurityOption6 = exports.DriveAboutGetSecurityOption5 = exports.DriveAboutGetSecurityOption4 = exports.DriveAboutGetSecurityOption3 = exports.DriveAboutGetSecurityOption2 = exports.DriveAboutGetSecurityOption1 = exports.DriveAboutGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveAboutGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveAboutGetQueryParams, _super);
    function DriveAboutGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveAboutGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "userIp", void 0);
    return DriveAboutGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetQueryParams = DriveAboutGetQueryParams;
var DriveAboutGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption1, _super);
    function DriveAboutGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurityOption1 = DriveAboutGetSecurityOption1;
var DriveAboutGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption2, _super);
    function DriveAboutGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurityOption2 = DriveAboutGetSecurityOption2;
var DriveAboutGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption3, _super);
    function DriveAboutGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurityOption3 = DriveAboutGetSecurityOption3;
var DriveAboutGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption4, _super);
    function DriveAboutGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurityOption4 = DriveAboutGetSecurityOption4;
var DriveAboutGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption5, _super);
    function DriveAboutGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurityOption5 = DriveAboutGetSecurityOption5;
var DriveAboutGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption6, _super);
    function DriveAboutGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption6;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurityOption6 = DriveAboutGetSecurityOption6;
var DriveAboutGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption7, _super);
    function DriveAboutGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption7;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurityOption7 = DriveAboutGetSecurityOption7;
var DriveAboutGetSecurity = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurity, _super);
    function DriveAboutGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption1)
    ], DriveAboutGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption2)
    ], DriveAboutGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption3)
    ], DriveAboutGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption4)
    ], DriveAboutGetSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption5)
    ], DriveAboutGetSecurity.prototype, "option5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption6)
    ], DriveAboutGetSecurity.prototype, "option6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption7)
    ], DriveAboutGetSecurity.prototype, "option7", void 0);
    return DriveAboutGetSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetSecurity = DriveAboutGetSecurity;
var DriveAboutGetRequest = /** @class */ (function (_super) {
    __extends(DriveAboutGetRequest, _super);
    function DriveAboutGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveAboutGetQueryParams)
    ], DriveAboutGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveAboutGetSecurity)
    ], DriveAboutGetRequest.prototype, "security", void 0);
    return DriveAboutGetRequest;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetRequest = DriveAboutGetRequest;
var DriveAboutGetResponse = /** @class */ (function (_super) {
    __extends(DriveAboutGetResponse, _super);
    function DriveAboutGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.About)
    ], DriveAboutGetResponse.prototype, "about", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveAboutGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveAboutGetResponse.prototype, "statusCode", void 0);
    return DriveAboutGetResponse;
}(utils_1.SpeakeasyBase));
exports.DriveAboutGetResponse = DriveAboutGetResponse;
