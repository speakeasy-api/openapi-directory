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
exports.StorageObjectsComposeResponse = exports.StorageObjectsComposeRequest = exports.StorageObjectsComposeSecurity = exports.StorageObjectsComposeSecurityOption2 = exports.StorageObjectsComposeSecurityOption1 = exports.StorageObjectsComposeQueryParams = exports.StorageObjectsComposePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageObjectsComposePathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsComposePathParams, _super);
    function StorageObjectsComposePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destinationBucket" }),
        __metadata("design:type", String)
    ], StorageObjectsComposePathParams.prototype, "destinationBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destinationObject" }),
        __metadata("design:type", String)
    ], StorageObjectsComposePathParams.prototype, "destinationObject", void 0);
    return StorageObjectsComposePathParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsComposePathParams = StorageObjectsComposePathParams;
var StorageObjectsComposeQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsComposeQueryParams, _super);
    function StorageObjectsComposeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsComposeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsComposeQueryParams.prototype, "userIp", void 0);
    return StorageObjectsComposeQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsComposeQueryParams = StorageObjectsComposeQueryParams;
var StorageObjectsComposeSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsComposeSecurityOption1, _super);
    function StorageObjectsComposeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsComposeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsComposeSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsComposeSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsComposeSecurityOption1 = StorageObjectsComposeSecurityOption1;
var StorageObjectsComposeSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsComposeSecurityOption2, _super);
    function StorageObjectsComposeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsComposeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsComposeSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsComposeSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsComposeSecurityOption2 = StorageObjectsComposeSecurityOption2;
var StorageObjectsComposeSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsComposeSecurity, _super);
    function StorageObjectsComposeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsComposeSecurityOption1)
    ], StorageObjectsComposeSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsComposeSecurityOption2)
    ], StorageObjectsComposeSecurity.prototype, "option2", void 0);
    return StorageObjectsComposeSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsComposeSecurity = StorageObjectsComposeSecurity;
var StorageObjectsComposeRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsComposeRequest, _super);
    function StorageObjectsComposeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsComposePathParams)
    ], StorageObjectsComposeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsComposeQueryParams)
    ], StorageObjectsComposeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ComposeRequest)
    ], StorageObjectsComposeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsComposeSecurity)
    ], StorageObjectsComposeRequest.prototype, "security", void 0);
    return StorageObjectsComposeRequest;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsComposeRequest = StorageObjectsComposeRequest;
var StorageObjectsComposeResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsComposeResponse, _super);
    function StorageObjectsComposeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageObjectsComposeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ObjectT)
    ], StorageObjectsComposeResponse.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageObjectsComposeResponse.prototype, "statusCode", void 0);
    return StorageObjectsComposeResponse;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsComposeResponse = StorageObjectsComposeResponse;
