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
exports.YoutubeChannelsListResponse = exports.YoutubeChannelsListRequest = exports.YoutubeChannelsListSecurity = exports.YoutubeChannelsListSecurityOption5 = exports.YoutubeChannelsListSecurityOption4 = exports.YoutubeChannelsListSecurityOption3 = exports.YoutubeChannelsListSecurityOption2 = exports.YoutubeChannelsListSecurityOption1 = exports.YoutubeChannelsListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeChannelsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListQueryParams, _super);
    function YoutubeChannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=categoryId" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "categoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=forUsername" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "forUsername", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "hl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeChannelsListQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=managedByMe" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelsListQueryParams.prototype, "managedByMe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeChannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mine" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelsListQueryParams.prototype, "mine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mySubscribers" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelsListQueryParams.prototype, "mySubscribers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeChannelsListQueryParams.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeChannelsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeChannelsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListQueryParams = YoutubeChannelsListQueryParams;
var YoutubeChannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListSecurityOption1, _super);
    function YoutubeChannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeChannelsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListSecurityOption1 = YoutubeChannelsListSecurityOption1;
var YoutubeChannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListSecurityOption2, _super);
    function YoutubeChannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeChannelsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListSecurityOption2 = YoutubeChannelsListSecurityOption2;
var YoutubeChannelsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListSecurityOption3, _super);
    function YoutubeChannelsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeChannelsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListSecurityOption3 = YoutubeChannelsListSecurityOption3;
var YoutubeChannelsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListSecurityOption4, _super);
    function YoutubeChannelsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeChannelsListSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListSecurityOption4 = YoutubeChannelsListSecurityOption4;
var YoutubeChannelsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListSecurityOption5, _super);
    function YoutubeChannelsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelsListSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeChannelsListSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListSecurityOption5 = YoutubeChannelsListSecurityOption5;
var YoutubeChannelsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListSecurity, _super);
    function YoutubeChannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelsListSecurityOption1)
    ], YoutubeChannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelsListSecurityOption2)
    ], YoutubeChannelsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelsListSecurityOption3)
    ], YoutubeChannelsListSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelsListSecurityOption4)
    ], YoutubeChannelsListSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelsListSecurityOption5)
    ], YoutubeChannelsListSecurity.prototype, "option5", void 0);
    return YoutubeChannelsListSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListSecurity = YoutubeChannelsListSecurity;
var YoutubeChannelsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListRequest, _super);
    function YoutubeChannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeChannelsListQueryParams)
    ], YoutubeChannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeChannelsListSecurity)
    ], YoutubeChannelsListRequest.prototype, "security", void 0);
    return YoutubeChannelsListRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListRequest = YoutubeChannelsListRequest;
var YoutubeChannelsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeChannelsListResponse, _super);
    function YoutubeChannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ChannelListResponse)
    ], YoutubeChannelsListResponse.prototype, "channelListResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeChannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeChannelsListResponse.prototype, "statusCode", void 0);
    return YoutubeChannelsListResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeChannelsListResponse = YoutubeChannelsListResponse;
