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
exports.SubmitTranscriptionJobResponse = exports.SubmitTranscriptionJobRequest = exports.SubmitTranscriptionJob400ApplicationProblemPlusJson = exports.SubmitTranscriptionJobRequests = exports.SubmitTranscriptionJobMultipartFormData = exports.SubmitTranscriptionJobMultipartFormDataMedia = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SubmitTranscriptionJobMultipartFormDataMedia = /** @class */ (function (_super) {
    __extends(SubmitTranscriptionJobMultipartFormDataMedia, _super);
    function SubmitTranscriptionJobMultipartFormDataMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], SubmitTranscriptionJobMultipartFormDataMedia.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=media" }),
        __metadata("design:type", String)
    ], SubmitTranscriptionJobMultipartFormDataMedia.prototype, "media", void 0);
    return SubmitTranscriptionJobMultipartFormDataMedia;
}(utils_1.SpeakeasyBase));
exports.SubmitTranscriptionJobMultipartFormDataMedia = SubmitTranscriptionJobMultipartFormDataMedia;
var SubmitTranscriptionJobMultipartFormData = /** @class */ (function (_super) {
    __extends(SubmitTranscriptionJobMultipartFormData, _super);
    function SubmitTranscriptionJobMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", SubmitTranscriptionJobMultipartFormDataMedia)
    ], SubmitTranscriptionJobMultipartFormData.prototype, "media", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=options;json=true" }),
        __metadata("design:type", shared.SubmitJobOptions)
    ], SubmitTranscriptionJobMultipartFormData.prototype, "options", void 0);
    return SubmitTranscriptionJobMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.SubmitTranscriptionJobMultipartFormData = SubmitTranscriptionJobMultipartFormData;
var SubmitTranscriptionJobRequests = /** @class */ (function (_super) {
    __extends(SubmitTranscriptionJobRequests, _super);
    function SubmitTranscriptionJobRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubmitJobMediaUrlOptions)
    ], SubmitTranscriptionJobRequests.prototype, "submitJobMediaUrlOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SubmitTranscriptionJobMultipartFormData)
    ], SubmitTranscriptionJobRequests.prototype, "object", void 0);
    return SubmitTranscriptionJobRequests;
}(utils_1.SpeakeasyBase));
exports.SubmitTranscriptionJobRequests = SubmitTranscriptionJobRequests;
// SubmitTranscriptionJob400ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var SubmitTranscriptionJob400ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(SubmitTranscriptionJob400ApplicationProblemPlusJson, _super);
    function SubmitTranscriptionJob400ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", Object)
    ], SubmitTranscriptionJob400ApplicationProblemPlusJson.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], SubmitTranscriptionJob400ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SubmitTranscriptionJob400ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SubmitTranscriptionJob400ApplicationProblemPlusJson.prototype, "type", void 0);
    return SubmitTranscriptionJob400ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.SubmitTranscriptionJob400ApplicationProblemPlusJson = SubmitTranscriptionJob400ApplicationProblemPlusJson;
var SubmitTranscriptionJobRequest = /** @class */ (function (_super) {
    __extends(SubmitTranscriptionJobRequest, _super);
    function SubmitTranscriptionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SubmitTranscriptionJobRequests)
    ], SubmitTranscriptionJobRequest.prototype, "request", void 0);
    return SubmitTranscriptionJobRequest;
}(utils_1.SpeakeasyBase));
exports.SubmitTranscriptionJobRequest = SubmitTranscriptionJobRequest;
var SubmitTranscriptionJobResponse = /** @class */ (function (_super) {
    __extends(SubmitTranscriptionJobResponse, _super);
    function SubmitTranscriptionJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SubmitTranscriptionJobResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Job)
    ], SubmitTranscriptionJobResponse.prototype, "job", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SubmitTranscriptionJobResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SubmitTranscriptionJob400ApplicationProblemPlusJson)
    ], SubmitTranscriptionJobResponse.prototype, "submitTranscriptionJob400ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SubmitTranscriptionJobResponse.prototype, "submitTranscriptionJob401ApplicationProblemPlusJsonAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SubmitTranscriptionJobResponse.prototype, "submitTranscriptionJob413ApplicationProblemPlusJsonAny", void 0);
    return SubmitTranscriptionJobResponse;
}(utils_1.SpeakeasyBase));
exports.SubmitTranscriptionJobResponse = SubmitTranscriptionJobResponse;
