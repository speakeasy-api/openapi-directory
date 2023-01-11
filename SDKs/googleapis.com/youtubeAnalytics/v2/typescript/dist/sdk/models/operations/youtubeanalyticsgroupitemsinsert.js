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
exports.YoutubeAnalyticsGroupItemsInsertResponse = exports.YoutubeAnalyticsGroupItemsInsertRequest = exports.YoutubeAnalyticsGroupItemsInsertSecurity = exports.YoutubeAnalyticsGroupItemsInsertSecurityOption5 = exports.YoutubeAnalyticsGroupItemsInsertSecurityOption4 = exports.YoutubeAnalyticsGroupItemsInsertSecurityOption3 = exports.YoutubeAnalyticsGroupItemsInsertSecurityOption2 = exports.YoutubeAnalyticsGroupItemsInsertSecurityOption1 = exports.YoutubeAnalyticsGroupItemsInsertQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeAnalyticsGroupItemsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertQueryParams, _super);
    function YoutubeAnalyticsGroupItemsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsGroupItemsInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertQueryParams = YoutubeAnalyticsGroupItemsInsertQueryParams;
var YoutubeAnalyticsGroupItemsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertSecurityOption1, _super);
    function YoutubeAnalyticsGroupItemsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsInsertSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertSecurityOption1 = YoutubeAnalyticsGroupItemsInsertSecurityOption1;
var YoutubeAnalyticsGroupItemsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertSecurityOption2, _super);
    function YoutubeAnalyticsGroupItemsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsInsertSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertSecurityOption2 = YoutubeAnalyticsGroupItemsInsertSecurityOption2;
var YoutubeAnalyticsGroupItemsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertSecurityOption3, _super);
    function YoutubeAnalyticsGroupItemsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsInsertSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertSecurityOption3 = YoutubeAnalyticsGroupItemsInsertSecurityOption3;
var YoutubeAnalyticsGroupItemsInsertSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertSecurityOption4, _super);
    function YoutubeAnalyticsGroupItemsInsertSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsInsertSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertSecurityOption4 = YoutubeAnalyticsGroupItemsInsertSecurityOption4;
var YoutubeAnalyticsGroupItemsInsertSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertSecurityOption5, _super);
    function YoutubeAnalyticsGroupItemsInsertSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsInsertSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsInsertSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertSecurityOption5 = YoutubeAnalyticsGroupItemsInsertSecurityOption5;
var YoutubeAnalyticsGroupItemsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertSecurity, _super);
    function YoutubeAnalyticsGroupItemsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsInsertSecurityOption1)
    ], YoutubeAnalyticsGroupItemsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsInsertSecurityOption2)
    ], YoutubeAnalyticsGroupItemsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsInsertSecurityOption3)
    ], YoutubeAnalyticsGroupItemsInsertSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsInsertSecurityOption4)
    ], YoutubeAnalyticsGroupItemsInsertSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsInsertSecurityOption5)
    ], YoutubeAnalyticsGroupItemsInsertSecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsGroupItemsInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertSecurity = YoutubeAnalyticsGroupItemsInsertSecurity;
var YoutubeAnalyticsGroupItemsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertRequest, _super);
    function YoutubeAnalyticsGroupItemsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeAnalyticsGroupItemsInsertQueryParams)
    ], YoutubeAnalyticsGroupItemsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupItem)
    ], YoutubeAnalyticsGroupItemsInsertRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeAnalyticsGroupItemsInsertSecurity)
    ], YoutubeAnalyticsGroupItemsInsertRequest.prototype, "security", void 0);
    return YoutubeAnalyticsGroupItemsInsertRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertRequest = YoutubeAnalyticsGroupItemsInsertRequest;
var YoutubeAnalyticsGroupItemsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsInsertResponse, _super);
    function YoutubeAnalyticsGroupItemsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GroupItem)
    ], YoutubeAnalyticsGroupItemsInsertResponse.prototype, "groupItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsGroupItemsInsertResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsGroupItemsInsertResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeAnalyticsGroupItemsInsertResponse = YoutubeAnalyticsGroupItemsInsertResponse;
