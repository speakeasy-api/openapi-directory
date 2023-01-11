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
exports.StorageObjectsCopyResponse = exports.StorageObjectsCopyRequest = exports.StorageObjectsCopySecurity = exports.StorageObjectsCopySecurityOption2 = exports.StorageObjectsCopySecurityOption1 = exports.StorageObjectsCopyQueryParams = exports.StorageObjectsCopyProjectionEnum = exports.StorageObjectsCopyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageObjectsCopyPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsCopyPathParams, _super);
    function StorageObjectsCopyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destinationBucket" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyPathParams.prototype, "destinationBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destinationObject" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyPathParams.prototype, "destinationObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sourceBucket" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyPathParams.prototype, "sourceBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sourceObject" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyPathParams.prototype, "sourceObject", void 0);
    return StorageObjectsCopyPathParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsCopyPathParams = StorageObjectsCopyPathParams;
var StorageObjectsCopyProjectionEnum;
(function (StorageObjectsCopyProjectionEnum) {
    StorageObjectsCopyProjectionEnum["Full"] = "full";
    StorageObjectsCopyProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsCopyProjectionEnum = exports.StorageObjectsCopyProjectionEnum || (exports.StorageObjectsCopyProjectionEnum = {}));
var StorageObjectsCopyQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsCopyQueryParams, _super);
    function StorageObjectsCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifGenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifSourceGenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifSourceGenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifSourceMetagenerationMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "ifSourceMetagenerationNotMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsCopyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "projection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceGeneration" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "sourceGeneration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsCopyQueryParams.prototype, "userIp", void 0);
    return StorageObjectsCopyQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsCopyQueryParams = StorageObjectsCopyQueryParams;
var StorageObjectsCopySecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsCopySecurityOption1, _super);
    function StorageObjectsCopySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsCopySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsCopySecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsCopySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsCopySecurityOption1 = StorageObjectsCopySecurityOption1;
var StorageObjectsCopySecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsCopySecurityOption2, _super);
    function StorageObjectsCopySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsCopySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsCopySecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsCopySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsCopySecurityOption2 = StorageObjectsCopySecurityOption2;
var StorageObjectsCopySecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsCopySecurity, _super);
    function StorageObjectsCopySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsCopySecurityOption1)
    ], StorageObjectsCopySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsCopySecurityOption2)
    ], StorageObjectsCopySecurity.prototype, "option2", void 0);
    return StorageObjectsCopySecurity;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsCopySecurity = StorageObjectsCopySecurity;
var StorageObjectsCopyRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsCopyRequest, _super);
    function StorageObjectsCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsCopyPathParams)
    ], StorageObjectsCopyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsCopyQueryParams)
    ], StorageObjectsCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectT)
    ], StorageObjectsCopyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageObjectsCopySecurity)
    ], StorageObjectsCopyRequest.prototype, "security", void 0);
    return StorageObjectsCopyRequest;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsCopyRequest = StorageObjectsCopyRequest;
var StorageObjectsCopyResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsCopyResponse, _super);
    function StorageObjectsCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageObjectsCopyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ObjectT)
    ], StorageObjectsCopyResponse.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageObjectsCopyResponse.prototype, "statusCode", void 0);
    return StorageObjectsCopyResponse;
}(utils_1.SpeakeasyBase));
exports.StorageObjectsCopyResponse = StorageObjectsCopyResponse;
