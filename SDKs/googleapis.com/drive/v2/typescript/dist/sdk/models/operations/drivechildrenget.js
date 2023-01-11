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
exports.DriveChildrenGetResponse = exports.DriveChildrenGetRequest = exports.DriveChildrenGetSecurity = exports.DriveChildrenGetSecurityOption7 = exports.DriveChildrenGetSecurityOption6 = exports.DriveChildrenGetSecurityOption5 = exports.DriveChildrenGetSecurityOption4 = exports.DriveChildrenGetSecurityOption3 = exports.DriveChildrenGetSecurityOption2 = exports.DriveChildrenGetSecurityOption1 = exports.DriveChildrenGetQueryParams = exports.DriveChildrenGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveChildrenGetPathParams = /** @class */ (function (_super) {
    __extends(DriveChildrenGetPathParams, _super);
    function DriveChildrenGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=childId" }),
        __metadata("design:type", String)
    ], DriveChildrenGetPathParams.prototype, "childId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], DriveChildrenGetPathParams.prototype, "folderId", void 0);
    return DriveChildrenGetPathParams;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetPathParams = DriveChildrenGetPathParams;
var DriveChildrenGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveChildrenGetQueryParams, _super);
    function DriveChildrenGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "userIp", void 0);
    return DriveChildrenGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetQueryParams = DriveChildrenGetQueryParams;
var DriveChildrenGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption1, _super);
    function DriveChildrenGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurityOption1 = DriveChildrenGetSecurityOption1;
var DriveChildrenGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption2, _super);
    function DriveChildrenGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurityOption2 = DriveChildrenGetSecurityOption2;
var DriveChildrenGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption3, _super);
    function DriveChildrenGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurityOption3 = DriveChildrenGetSecurityOption3;
var DriveChildrenGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption4, _super);
    function DriveChildrenGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurityOption4 = DriveChildrenGetSecurityOption4;
var DriveChildrenGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption5, _super);
    function DriveChildrenGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurityOption5 = DriveChildrenGetSecurityOption5;
var DriveChildrenGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption6, _super);
    function DriveChildrenGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption6;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurityOption6 = DriveChildrenGetSecurityOption6;
var DriveChildrenGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption7, _super);
    function DriveChildrenGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption7;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurityOption7 = DriveChildrenGetSecurityOption7;
var DriveChildrenGetSecurity = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurity, _super);
    function DriveChildrenGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption1)
    ], DriveChildrenGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption2)
    ], DriveChildrenGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption3)
    ], DriveChildrenGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption4)
    ], DriveChildrenGetSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption5)
    ], DriveChildrenGetSecurity.prototype, "option5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption6)
    ], DriveChildrenGetSecurity.prototype, "option6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption7)
    ], DriveChildrenGetSecurity.prototype, "option7", void 0);
    return DriveChildrenGetSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetSecurity = DriveChildrenGetSecurity;
var DriveChildrenGetRequest = /** @class */ (function (_super) {
    __extends(DriveChildrenGetRequest, _super);
    function DriveChildrenGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveChildrenGetPathParams)
    ], DriveChildrenGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveChildrenGetQueryParams)
    ], DriveChildrenGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveChildrenGetSecurity)
    ], DriveChildrenGetRequest.prototype, "security", void 0);
    return DriveChildrenGetRequest;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetRequest = DriveChildrenGetRequest;
var DriveChildrenGetResponse = /** @class */ (function (_super) {
    __extends(DriveChildrenGetResponse, _super);
    function DriveChildrenGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ChildReference)
    ], DriveChildrenGetResponse.prototype, "childReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveChildrenGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveChildrenGetResponse.prototype, "statusCode", void 0);
    return DriveChildrenGetResponse;
}(utils_1.SpeakeasyBase));
exports.DriveChildrenGetResponse = DriveChildrenGetResponse;
