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
exports.UploadUserProfilePictureResponse = exports.UploadUserProfilePictureRequest = exports.UploadUserProfilePictureSecurity = exports.UploadUserProfilePictureRequestBody = exports.UploadUserProfilePictureRequestBodyProfilePicture = exports.UploadUserProfilePicturePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UploadUserProfilePicturePathParams = /** @class */ (function (_super) {
    __extends(UploadUserProfilePicturePathParams, _super);
    function UploadUserProfilePicturePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", Number)
    ], UploadUserProfilePicturePathParams.prototype, "userId", void 0);
    return UploadUserProfilePicturePathParams;
}(utils_1.SpeakeasyBase));
exports.UploadUserProfilePicturePathParams = UploadUserProfilePicturePathParams;
var UploadUserProfilePictureRequestBodyProfilePicture = /** @class */ (function (_super) {
    __extends(UploadUserProfilePictureRequestBodyProfilePicture, _super);
    function UploadUserProfilePictureRequestBodyProfilePicture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadUserProfilePictureRequestBodyProfilePicture.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=profile_picture" }),
        __metadata("design:type", String)
    ], UploadUserProfilePictureRequestBodyProfilePicture.prototype, "profilePicture", void 0);
    return UploadUserProfilePictureRequestBodyProfilePicture;
}(utils_1.SpeakeasyBase));
exports.UploadUserProfilePictureRequestBodyProfilePicture = UploadUserProfilePictureRequestBodyProfilePicture;
var UploadUserProfilePictureRequestBody = /** @class */ (function (_super) {
    __extends(UploadUserProfilePictureRequestBody, _super);
    function UploadUserProfilePictureRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadUserProfilePictureRequestBodyProfilePicture)
    ], UploadUserProfilePictureRequestBody.prototype, "profilePicture", void 0);
    return UploadUserProfilePictureRequestBody;
}(utils_1.SpeakeasyBase));
exports.UploadUserProfilePictureRequestBody = UploadUserProfilePictureRequestBody;
var UploadUserProfilePictureSecurity = /** @class */ (function (_super) {
    __extends(UploadUserProfilePictureSecurity, _super);
    function UploadUserProfilePictureSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeMwoAuth)
    ], UploadUserProfilePictureSecurity.prototype, "mwoAuth", void 0);
    return UploadUserProfilePictureSecurity;
}(utils_1.SpeakeasyBase));
exports.UploadUserProfilePictureSecurity = UploadUserProfilePictureSecurity;
var UploadUserProfilePictureRequest = /** @class */ (function (_super) {
    __extends(UploadUserProfilePictureRequest, _super);
    function UploadUserProfilePictureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadUserProfilePicturePathParams)
    ], UploadUserProfilePictureRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadUserProfilePictureRequestBody)
    ], UploadUserProfilePictureRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadUserProfilePictureSecurity)
    ], UploadUserProfilePictureRequest.prototype, "security", void 0);
    return UploadUserProfilePictureRequest;
}(utils_1.SpeakeasyBase));
exports.UploadUserProfilePictureRequest = UploadUserProfilePictureRequest;
var UploadUserProfilePictureResponse = /** @class */ (function (_super) {
    __extends(UploadUserProfilePictureResponse, _super);
    function UploadUserProfilePictureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadUserProfilePictureResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], UploadUserProfilePictureResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OperationStatus)
    ], UploadUserProfilePictureResponse.prototype, "operationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UploadUserProfilePictureResponse.prototype, "statusCode", void 0);
    return UploadUserProfilePictureResponse;
}(utils_1.SpeakeasyBase));
exports.UploadUserProfilePictureResponse = UploadUserProfilePictureResponse;
