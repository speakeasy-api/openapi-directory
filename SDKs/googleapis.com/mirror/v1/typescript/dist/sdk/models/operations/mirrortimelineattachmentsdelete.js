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
exports.MirrorTimelineAttachmentsDeleteResponse = exports.MirrorTimelineAttachmentsDeleteRequest = exports.MirrorTimelineAttachmentsDeleteSecurity = exports.MirrorTimelineAttachmentsDeleteQueryParams = exports.MirrorTimelineAttachmentsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MirrorTimelineAttachmentsDeletePathParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsDeletePathParams, _super);
    function MirrorTimelineAttachmentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=attachmentId" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeletePathParams.prototype, "attachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeletePathParams.prototype, "itemId", void 0);
    return MirrorTimelineAttachmentsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsDeletePathParams = MirrorTimelineAttachmentsDeletePathParams;
var MirrorTimelineAttachmentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsDeleteQueryParams, _super);
    function MirrorTimelineAttachmentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineAttachmentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeleteQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineAttachmentsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsDeleteQueryParams = MirrorTimelineAttachmentsDeleteQueryParams;
var MirrorTimelineAttachmentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsDeleteSecurity, _super);
    function MirrorTimelineAttachmentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineAttachmentsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineAttachmentsDeleteSecurity.prototype, "oauth2c", void 0);
    return MirrorTimelineAttachmentsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsDeleteSecurity = MirrorTimelineAttachmentsDeleteSecurity;
var MirrorTimelineAttachmentsDeleteRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsDeleteRequest, _super);
    function MirrorTimelineAttachmentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorTimelineAttachmentsDeletePathParams)
    ], MirrorTimelineAttachmentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorTimelineAttachmentsDeleteQueryParams)
    ], MirrorTimelineAttachmentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MirrorTimelineAttachmentsDeleteSecurity)
    ], MirrorTimelineAttachmentsDeleteRequest.prototype, "security", void 0);
    return MirrorTimelineAttachmentsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsDeleteRequest = MirrorTimelineAttachmentsDeleteRequest;
var MirrorTimelineAttachmentsDeleteResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsDeleteResponse, _super);
    function MirrorTimelineAttachmentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MirrorTimelineAttachmentsDeleteResponse.prototype, "statusCode", void 0);
    return MirrorTimelineAttachmentsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.MirrorTimelineAttachmentsDeleteResponse = MirrorTimelineAttachmentsDeleteResponse;
