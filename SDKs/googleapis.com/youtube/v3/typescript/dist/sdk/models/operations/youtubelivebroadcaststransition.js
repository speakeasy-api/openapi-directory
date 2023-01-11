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
exports.YoutubeLiveBroadcastsTransitionResponse = exports.YoutubeLiveBroadcastsTransitionRequest = exports.YoutubeLiveBroadcastsTransitionSecurity = exports.YoutubeLiveBroadcastsTransitionSecurityOption2 = exports.YoutubeLiveBroadcastsTransitionSecurityOption1 = exports.YoutubeLiveBroadcastsTransitionQueryParams = exports.YoutubeLiveBroadcastsTransitionBroadcastStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubeLiveBroadcastsTransitionBroadcastStatusEnum;
(function (YoutubeLiveBroadcastsTransitionBroadcastStatusEnum) {
    YoutubeLiveBroadcastsTransitionBroadcastStatusEnum["StatusUnspecified"] = "statusUnspecified";
    YoutubeLiveBroadcastsTransitionBroadcastStatusEnum["Testing"] = "testing";
    YoutubeLiveBroadcastsTransitionBroadcastStatusEnum["Live"] = "live";
    YoutubeLiveBroadcastsTransitionBroadcastStatusEnum["Complete"] = "complete";
})(YoutubeLiveBroadcastsTransitionBroadcastStatusEnum = exports.YoutubeLiveBroadcastsTransitionBroadcastStatusEnum || (exports.YoutubeLiveBroadcastsTransitionBroadcastStatusEnum = {}));
var YoutubeLiveBroadcastsTransitionQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsTransitionQueryParams, _super);
    function YoutubeLiveBroadcastsTransitionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=broadcastStatus" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "broadcastStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveBroadcastsTransitionQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubeLiveBroadcastsTransitionQueryParams = YoutubeLiveBroadcastsTransitionQueryParams;
var YoutubeLiveBroadcastsTransitionSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsTransitionSecurityOption1, _super);
    function YoutubeLiveBroadcastsTransitionSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsTransitionSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsTransitionSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsTransitionSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubeLiveBroadcastsTransitionSecurityOption1 = YoutubeLiveBroadcastsTransitionSecurityOption1;
var YoutubeLiveBroadcastsTransitionSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsTransitionSecurityOption2, _super);
    function YoutubeLiveBroadcastsTransitionSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsTransitionSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsTransitionSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsTransitionSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubeLiveBroadcastsTransitionSecurityOption2 = YoutubeLiveBroadcastsTransitionSecurityOption2;
var YoutubeLiveBroadcastsTransitionSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsTransitionSecurity, _super);
    function YoutubeLiveBroadcastsTransitionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsTransitionSecurityOption1)
    ], YoutubeLiveBroadcastsTransitionSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsTransitionSecurityOption2)
    ], YoutubeLiveBroadcastsTransitionSecurity.prototype, "option2", void 0);
    return YoutubeLiveBroadcastsTransitionSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubeLiveBroadcastsTransitionSecurity = YoutubeLiveBroadcastsTransitionSecurity;
var YoutubeLiveBroadcastsTransitionRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsTransitionRequest, _super);
    function YoutubeLiveBroadcastsTransitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeLiveBroadcastsTransitionQueryParams)
    ], YoutubeLiveBroadcastsTransitionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubeLiveBroadcastsTransitionSecurity)
    ], YoutubeLiveBroadcastsTransitionRequest.prototype, "security", void 0);
    return YoutubeLiveBroadcastsTransitionRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubeLiveBroadcastsTransitionRequest = YoutubeLiveBroadcastsTransitionRequest;
var YoutubeLiveBroadcastsTransitionResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsTransitionResponse, _super);
    function YoutubeLiveBroadcastsTransitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsTransitionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LiveBroadcast)
    ], YoutubeLiveBroadcastsTransitionResponse.prototype, "liveBroadcast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubeLiveBroadcastsTransitionResponse.prototype, "statusCode", void 0);
    return YoutubeLiveBroadcastsTransitionResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubeLiveBroadcastsTransitionResponse = YoutubeLiveBroadcastsTransitionResponse;
