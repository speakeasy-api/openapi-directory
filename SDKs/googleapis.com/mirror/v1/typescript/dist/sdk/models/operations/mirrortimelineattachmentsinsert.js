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
exports.MirrorTimelineAttachmentsInsertResponse = exports.MirrorTimelineAttachmentsInsertRequest = exports.MirrorTimelineAttachmentsInsertSecurity = exports.MirrorTimelineAttachmentsInsertQueryParams = exports.MirrorTimelineAttachmentsInsertPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MirrorTimelineAttachmentsInsertPathParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsInsertPathParams, _super);
    function MirrorTimelineAttachmentsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertPathParams.prototype, "itemId", void 0);
    return MirrorTimelineAttachmentsInsertPathParams;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsInsertPathParams = MirrorTimelineAttachmentsInsertPathParams;
var MirrorTimelineAttachmentsInsertQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsInsertQueryParams, _super);
    function MirrorTimelineAttachmentsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineAttachmentsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineAttachmentsInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsInsertQueryParams = MirrorTimelineAttachmentsInsertQueryParams;
var MirrorTimelineAttachmentsInsertSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsInsertSecurity, _super);
    function MirrorTimelineAttachmentsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineAttachmentsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineAttachmentsInsertSecurity.prototype, "oauth2c", void 0);
    return MirrorTimelineAttachmentsInsertSecurity;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsInsertSecurity = MirrorTimelineAttachmentsInsertSecurity;
var MirrorTimelineAttachmentsInsertRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsInsertRequest, _super);
    function MirrorTimelineAttachmentsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorTimelineAttachmentsInsertPathParams)
    ], MirrorTimelineAttachmentsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorTimelineAttachmentsInsertQueryParams)
    ], MirrorTimelineAttachmentsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorTimelineAttachmentsInsertSecurity)
    ], MirrorTimelineAttachmentsInsertRequest.prototype, "security", void 0);
    return MirrorTimelineAttachmentsInsertRequest;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsInsertRequest = MirrorTimelineAttachmentsInsertRequest;
var MirrorTimelineAttachmentsInsertResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsInsertResponse, _super);
    function MirrorTimelineAttachmentsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineAttachmentsInsertResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MirrorTimelineAttachmentsInsertResponse.prototype, "statusCode", void 0);
    return MirrorTimelineAttachmentsInsertResponse;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsInsertResponse = MirrorTimelineAttachmentsInsertResponse;
