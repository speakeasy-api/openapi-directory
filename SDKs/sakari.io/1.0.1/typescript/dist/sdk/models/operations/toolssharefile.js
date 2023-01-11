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
exports.ToolsShareFileResponse = exports.ToolsShareFileRequest = exports.ToolsShareFileSecurity = exports.ToolsShareFileRequests = exports.ToolsShareFileMultipartFormData = exports.ToolsShareFileMultipartFormDataMedia = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ToolsShareFileMultipartFormDataMedia = /** @class */ (function (_super) {
    __extends(ToolsShareFileMultipartFormDataMedia, _super);
    function ToolsShareFileMultipartFormDataMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ToolsShareFileMultipartFormDataMedia.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=media" }),
        __metadata("design:type", String)
    ], ToolsShareFileMultipartFormDataMedia.prototype, "media", void 0);
    return ToolsShareFileMultipartFormDataMedia;
}(utils_1.SpeakeasyBase));
exports.ToolsShareFileMultipartFormDataMedia = ToolsShareFileMultipartFormDataMedia;
var ToolsShareFileMultipartFormData = /** @class */ (function (_super) {
    __extends(ToolsShareFileMultipartFormData, _super);
    function ToolsShareFileMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", ToolsShareFileMultipartFormDataMedia)
    ], ToolsShareFileMultipartFormData.prototype, "media", void 0);
    return ToolsShareFileMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.ToolsShareFileMultipartFormData = ToolsShareFileMultipartFormData;
var ToolsShareFileRequests = /** @class */ (function (_super) {
    __extends(ToolsShareFileRequests, _super);
    function ToolsShareFileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], ToolsShareFileRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ToolsShareFileMultipartFormData)
    ], ToolsShareFileRequests.prototype, "object", void 0);
    return ToolsShareFileRequests;
}(utils_1.SpeakeasyBase));
exports.ToolsShareFileRequests = ToolsShareFileRequests;
var ToolsShareFileSecurity = /** @class */ (function (_super) {
    __extends(ToolsShareFileSecurity, _super);
    function ToolsShareFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], ToolsShareFileSecurity.prototype, "sakariAuth", void 0);
    return ToolsShareFileSecurity;
}(utils_1.SpeakeasyBase));
exports.ToolsShareFileSecurity = ToolsShareFileSecurity;
var ToolsShareFileRequest = /** @class */ (function (_super) {
    __extends(ToolsShareFileRequest, _super);
    function ToolsShareFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ToolsShareFileRequests)
    ], ToolsShareFileRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ToolsShareFileSecurity)
    ], ToolsShareFileRequest.prototype, "security", void 0);
    return ToolsShareFileRequest;
}(utils_1.SpeakeasyBase));
exports.ToolsShareFileRequest = ToolsShareFileRequest;
var ToolsShareFileResponse = /** @class */ (function (_super) {
    __extends(ToolsShareFileResponse, _super);
    function ToolsShareFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ToolsShareFileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], ToolsShareFileResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ShareFileResponse)
    ], ToolsShareFileResponse.prototype, "shareFileResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ToolsShareFileResponse.prototype, "statusCode", void 0);
    return ToolsShareFileResponse;
}(utils_1.SpeakeasyBase));
exports.ToolsShareFileResponse = ToolsShareFileResponse;
