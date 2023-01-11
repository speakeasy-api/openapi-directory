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
exports.DriveFilesWatchResponse = exports.DriveFilesWatchRequest = exports.DriveFilesWatchSecurity = exports.DriveFilesWatchSecurityOption7 = exports.DriveFilesWatchSecurityOption6 = exports.DriveFilesWatchSecurityOption5 = exports.DriveFilesWatchSecurityOption4 = exports.DriveFilesWatchSecurityOption3 = exports.DriveFilesWatchSecurityOption2 = exports.DriveFilesWatchSecurityOption1 = exports.DriveFilesWatchQueryParams = exports.DriveFilesWatchProjectionEnum = exports.DriveFilesWatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveFilesWatchPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesWatchPathParams, _super);
    function DriveFilesWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesWatchPathParams.prototype, "fileId", void 0);
    return DriveFilesWatchPathParams;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchPathParams = DriveFilesWatchPathParams;
var DriveFilesWatchProjectionEnum;
(function (DriveFilesWatchProjectionEnum) {
    DriveFilesWatchProjectionEnum["Basic"] = "BASIC";
    DriveFilesWatchProjectionEnum["Full"] = "FULL";
})(DriveFilesWatchProjectionEnum = exports.DriveFilesWatchProjectionEnum || (exports.DriveFilesWatchProjectionEnum = {}));
var DriveFilesWatchQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesWatchQueryParams, _super);
    function DriveFilesWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=acknowledgeAbuse" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "acknowledgeAbuse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "projection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=revisionId" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "revisionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updateViewedDate" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "updateViewedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "userIp", void 0);
    return DriveFilesWatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchQueryParams = DriveFilesWatchQueryParams;
var DriveFilesWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption1, _super);
    function DriveFilesWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurityOption1 = DriveFilesWatchSecurityOption1;
var DriveFilesWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption2, _super);
    function DriveFilesWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurityOption2 = DriveFilesWatchSecurityOption2;
var DriveFilesWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption3, _super);
    function DriveFilesWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurityOption3 = DriveFilesWatchSecurityOption3;
var DriveFilesWatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption4, _super);
    function DriveFilesWatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurityOption4 = DriveFilesWatchSecurityOption4;
var DriveFilesWatchSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption5, _super);
    function DriveFilesWatchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurityOption5 = DriveFilesWatchSecurityOption5;
var DriveFilesWatchSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption6, _super);
    function DriveFilesWatchSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption6.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption6;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurityOption6 = DriveFilesWatchSecurityOption6;
var DriveFilesWatchSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption7, _super);
    function DriveFilesWatchSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption7.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption7;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurityOption7 = DriveFilesWatchSecurityOption7;
var DriveFilesWatchSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurity, _super);
    function DriveFilesWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption1)
    ], DriveFilesWatchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption2)
    ], DriveFilesWatchSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption3)
    ], DriveFilesWatchSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption4)
    ], DriveFilesWatchSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption5)
    ], DriveFilesWatchSecurity.prototype, "option5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption6)
    ], DriveFilesWatchSecurity.prototype, "option6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption7)
    ], DriveFilesWatchSecurity.prototype, "option7", void 0);
    return DriveFilesWatchSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchSecurity = DriveFilesWatchSecurity;
var DriveFilesWatchRequest = /** @class */ (function (_super) {
    __extends(DriveFilesWatchRequest, _super);
    function DriveFilesWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesWatchPathParams)
    ], DriveFilesWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesWatchQueryParams)
    ], DriveFilesWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], DriveFilesWatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesWatchSecurity)
    ], DriveFilesWatchRequest.prototype, "security", void 0);
    return DriveFilesWatchRequest;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchRequest = DriveFilesWatchRequest;
var DriveFilesWatchResponse = /** @class */ (function (_super) {
    __extends(DriveFilesWatchResponse, _super);
    function DriveFilesWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Channel)
    ], DriveFilesWatchResponse.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveFilesWatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveFilesWatchResponse.prototype, "statusCode", void 0);
    return DriveFilesWatchResponse;
}(utils_1.SpeakeasyBase));
exports.DriveFilesWatchResponse = DriveFilesWatchResponse;
