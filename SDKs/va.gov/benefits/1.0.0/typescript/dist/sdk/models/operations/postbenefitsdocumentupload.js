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
exports.PostBenefitsDocumentUploadResponse = exports.PostBenefitsDocumentUploadRequest = exports.PostBenefitsDocumentUpload500ApplicationJson = exports.PostBenefitsDocumentUpload429ApplicationJson = exports.PostBenefitsDocumentUpload422ApplicationJson = exports.PostBenefitsDocumentUpload403ApplicationJson = exports.PostBenefitsDocumentUpload401ApplicationJson = exports.PostBenefitsDocumentUpload202ApplicationJson = exports.PostBenefitsDocumentUploadSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostBenefitsDocumentUploadSecurity = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUploadSecurity, _super);
    function PostBenefitsDocumentUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PostBenefitsDocumentUploadSecurity.prototype, "apikey", void 0);
    return PostBenefitsDocumentUploadSecurity;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUploadSecurity = PostBenefitsDocumentUploadSecurity;
var PostBenefitsDocumentUpload202ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload202ApplicationJson, _super);
    function PostBenefitsDocumentUpload202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PostBenefitsDocumentUpload202ApplicationJson.prototype, "data", void 0);
    return PostBenefitsDocumentUpload202ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUpload202ApplicationJson = PostBenefitsDocumentUpload202ApplicationJson;
var PostBenefitsDocumentUpload401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload401ApplicationJson, _super);
    function PostBenefitsDocumentUpload401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload401ApplicationJson.prototype, "message", void 0);
    return PostBenefitsDocumentUpload401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUpload401ApplicationJson = PostBenefitsDocumentUpload401ApplicationJson;
var PostBenefitsDocumentUpload403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload403ApplicationJson, _super);
    function PostBenefitsDocumentUpload403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload403ApplicationJson.prototype, "message", void 0);
    return PostBenefitsDocumentUpload403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUpload403ApplicationJson = PostBenefitsDocumentUpload403ApplicationJson;
var PostBenefitsDocumentUpload422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload422ApplicationJson, _super);
    function PostBenefitsDocumentUpload422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], PostBenefitsDocumentUpload422ApplicationJson.prototype, "errors", void 0);
    return PostBenefitsDocumentUpload422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUpload422ApplicationJson = PostBenefitsDocumentUpload422ApplicationJson;
var PostBenefitsDocumentUpload429ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload429ApplicationJson, _super);
    function PostBenefitsDocumentUpload429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload429ApplicationJson.prototype, "message", void 0);
    return PostBenefitsDocumentUpload429ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUpload429ApplicationJson = PostBenefitsDocumentUpload429ApplicationJson;
var PostBenefitsDocumentUpload500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload500ApplicationJson, _super);
    function PostBenefitsDocumentUpload500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "title", void 0);
    return PostBenefitsDocumentUpload500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUpload500ApplicationJson = PostBenefitsDocumentUpload500ApplicationJson;
var PostBenefitsDocumentUploadRequest = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUploadRequest, _super);
    function PostBenefitsDocumentUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBenefitsDocumentUploadSecurity)
    ], PostBenefitsDocumentUploadRequest.prototype, "security", void 0);
    return PostBenefitsDocumentUploadRequest;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUploadRequest = PostBenefitsDocumentUploadRequest;
var PostBenefitsDocumentUploadResponse = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUploadResponse, _super);
    function PostBenefitsDocumentUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUploadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostBenefitsDocumentUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBenefitsDocumentUpload202ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload202ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBenefitsDocumentUpload401ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBenefitsDocumentUpload403ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBenefitsDocumentUpload422ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBenefitsDocumentUpload429ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload429ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBenefitsDocumentUpload500ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload500ApplicationJSONObject", void 0);
    return PostBenefitsDocumentUploadResponse;
}(utils_1.SpeakeasyBase));
exports.PostBenefitsDocumentUploadResponse = PostBenefitsDocumentUploadResponse;
