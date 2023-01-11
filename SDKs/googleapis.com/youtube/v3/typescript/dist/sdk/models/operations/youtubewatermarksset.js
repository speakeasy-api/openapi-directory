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
exports.YoutubeWatermarksSetResponse = exports.YoutubeWatermarksSetRequest = exports.YoutubeWatermarksSetSecurity = exports.YoutubeWatermarksSetSecurityOption4 = exports.YoutubeWatermarksSetSecurityOption3 = exports.YoutubeWatermarksSetSecurityOption2 = exports.YoutubeWatermarksSetSecurityOption1 = exports.YoutubeWatermarksSetRequests = exports.YoutubeWatermarksSetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeWatermarksSetQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetQueryParams, _super);
    function YoutubeWatermarksSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeWatermarksSetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeWatermarksSetQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetQueryParams = YoutubeWatermarksSetQueryParams;
var YoutubeWatermarksSetRequests = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetRequests, _super);
    function YoutubeWatermarksSetRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeWatermarksSetRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeWatermarksSetRequests.prototype, "imageJpeg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/png" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeWatermarksSetRequests.prototype, "imagePng", void 0);
    return YoutubeWatermarksSetRequests;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetRequests = YoutubeWatermarksSetRequests;
var YoutubeWatermarksSetSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetSecurityOption1, _super);
    function YoutubeWatermarksSetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeWatermarksSetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeWatermarksSetSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeWatermarksSetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetSecurityOption1 = YoutubeWatermarksSetSecurityOption1;
var YoutubeWatermarksSetSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetSecurityOption2, _super);
    function YoutubeWatermarksSetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeWatermarksSetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeWatermarksSetSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeWatermarksSetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetSecurityOption2 = YoutubeWatermarksSetSecurityOption2;
var YoutubeWatermarksSetSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetSecurityOption3, _super);
    function YoutubeWatermarksSetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeWatermarksSetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeWatermarksSetSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeWatermarksSetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetSecurityOption3 = YoutubeWatermarksSetSecurityOption3;
var YoutubeWatermarksSetSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetSecurityOption4, _super);
    function YoutubeWatermarksSetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeWatermarksSetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeWatermarksSetSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeWatermarksSetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetSecurityOption4 = YoutubeWatermarksSetSecurityOption4;
var YoutubeWatermarksSetSecurity = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetSecurity, _super);
    function YoutubeWatermarksSetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeWatermarksSetSecurityOption1)
    ], YoutubeWatermarksSetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeWatermarksSetSecurityOption2)
    ], YoutubeWatermarksSetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeWatermarksSetSecurityOption3)
    ], YoutubeWatermarksSetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeWatermarksSetSecurityOption4)
    ], YoutubeWatermarksSetSecurity.prototype, "option4", void 0);
    return YoutubeWatermarksSetSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetSecurity = YoutubeWatermarksSetSecurity;
var YoutubeWatermarksSetRequest = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetRequest, _super);
    function YoutubeWatermarksSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeWatermarksSetQueryParams)
    ], YoutubeWatermarksSetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeWatermarksSetRequests)
    ], YoutubeWatermarksSetRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeWatermarksSetSecurity)
    ], YoutubeWatermarksSetRequest.prototype, "security", void 0);
    return YoutubeWatermarksSetRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetRequest = YoutubeWatermarksSetRequest;
var YoutubeWatermarksSetResponse = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksSetResponse, _super);
    function YoutubeWatermarksSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeWatermarksSetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeWatermarksSetResponse.prototype, "statusCode", void 0);
    return YoutubeWatermarksSetResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeWatermarksSetResponse = YoutubeWatermarksSetResponse;
