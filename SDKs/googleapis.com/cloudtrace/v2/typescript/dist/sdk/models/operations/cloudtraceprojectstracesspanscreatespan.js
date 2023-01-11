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
exports.CloudtraceProjectsTracesSpansCreateSpanResponse = exports.CloudtraceProjectsTracesSpansCreateSpanRequest = exports.CloudtraceProjectsTracesSpansCreateSpanSecurity = exports.CloudtraceProjectsTracesSpansCreateSpanSecurityOption2 = exports.CloudtraceProjectsTracesSpansCreateSpanSecurityOption1 = exports.CloudtraceProjectsTracesSpansCreateSpanQueryParams = exports.CloudtraceProjectsTracesSpansCreateSpanPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CloudtraceProjectsTracesSpansCreateSpanPathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesSpansCreateSpanPathParams, _super);
    function CloudtraceProjectsTracesSpansCreateSpanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanPathParams.prototype, "name", void 0);
    return CloudtraceProjectsTracesSpansCreateSpanPathParams;
}(utils_1.SpeakeasyBase));
exports.CloudtraceProjectsTracesSpansCreateSpanPathParams = CloudtraceProjectsTracesSpansCreateSpanPathParams;
var CloudtraceProjectsTracesSpansCreateSpanQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesSpansCreateSpanQueryParams, _super);
    function CloudtraceProjectsTracesSpansCreateSpanQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsTracesSpansCreateSpanQueryParams;
}(utils_1.SpeakeasyBase));
exports.CloudtraceProjectsTracesSpansCreateSpanQueryParams = CloudtraceProjectsTracesSpansCreateSpanQueryParams;
var CloudtraceProjectsTracesSpansCreateSpanSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesSpansCreateSpanSecurityOption1, _super);
    function CloudtraceProjectsTracesSpansCreateSpanSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesSpansCreateSpanSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesSpansCreateSpanSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesSpansCreateSpanSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.CloudtraceProjectsTracesSpansCreateSpanSecurityOption1 = CloudtraceProjectsTracesSpansCreateSpanSecurityOption1;
var CloudtraceProjectsTracesSpansCreateSpanSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesSpansCreateSpanSecurityOption2, _super);
    function CloudtraceProjectsTracesSpansCreateSpanSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesSpansCreateSpanSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesSpansCreateSpanSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesSpansCreateSpanSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.CloudtraceProjectsTracesSpansCreateSpanSecurityOption2 = CloudtraceProjectsTracesSpansCreateSpanSecurityOption2;
var CloudtraceProjectsTracesSpansCreateSpanSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesSpansCreateSpanSecurity, _super);
    function CloudtraceProjectsTracesSpansCreateSpanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesSpansCreateSpanSecurityOption1)
    ], CloudtraceProjectsTracesSpansCreateSpanSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesSpansCreateSpanSecurityOption2)
    ], CloudtraceProjectsTracesSpansCreateSpanSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTracesSpansCreateSpanSecurity;
}(utils_1.SpeakeasyBase));
exports.CloudtraceProjectsTracesSpansCreateSpanSecurity = CloudtraceProjectsTracesSpansCreateSpanSecurity;
var CloudtraceProjectsTracesSpansCreateSpanRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesSpansCreateSpanRequest, _super);
    function CloudtraceProjectsTracesSpansCreateSpanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudtraceProjectsTracesSpansCreateSpanPathParams)
    ], CloudtraceProjectsTracesSpansCreateSpanRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudtraceProjectsTracesSpansCreateSpanQueryParams)
    ], CloudtraceProjectsTracesSpansCreateSpanRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Span)
    ], CloudtraceProjectsTracesSpansCreateSpanRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CloudtraceProjectsTracesSpansCreateSpanSecurity)
    ], CloudtraceProjectsTracesSpansCreateSpanRequest.prototype, "security", void 0);
    return CloudtraceProjectsTracesSpansCreateSpanRequest;
}(utils_1.SpeakeasyBase));
exports.CloudtraceProjectsTracesSpansCreateSpanRequest = CloudtraceProjectsTracesSpansCreateSpanRequest;
var CloudtraceProjectsTracesSpansCreateSpanResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesSpansCreateSpanResponse, _super);
    function CloudtraceProjectsTracesSpansCreateSpanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesSpansCreateSpanResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Span)
    ], CloudtraceProjectsTracesSpansCreateSpanResponse.prototype, "span", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTracesSpansCreateSpanResponse.prototype, "statusCode", void 0);
    return CloudtraceProjectsTracesSpansCreateSpanResponse;
}(utils_1.SpeakeasyBase));
exports.CloudtraceProjectsTracesSpansCreateSpanResponse = CloudtraceProjectsTracesSpansCreateSpanResponse;
