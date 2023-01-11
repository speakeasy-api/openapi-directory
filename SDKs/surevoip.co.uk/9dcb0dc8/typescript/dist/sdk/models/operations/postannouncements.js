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
exports.PostAnnouncementsResponse = exports.PostAnnouncementsRequest = exports.PostAnnouncements403ApplicationJson = exports.PostAnnouncements400ApplicationJson = exports.PostAnnouncements400ApplicationJsonErrors = exports.PostAnnouncements201ApplicationJson = exports.PostAnnouncements201ApplicationJsonAnnouncement = exports.PostAnnouncements201ApplicationJsonAnnouncementUrl = exports.PostAnnouncementsRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostAnnouncementsRequestBody = /** @class */ (function (_super) {
    __extends(PostAnnouncementsRequestBody, _super);
    function PostAnnouncementsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], PostAnnouncementsRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], PostAnnouncementsRequestBody.prototype, "file", void 0);
    return PostAnnouncementsRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncementsRequestBody = PostAnnouncementsRequestBody;
var PostAnnouncements201ApplicationJsonAnnouncementUrl = /** @class */ (function (_super) {
    __extends(PostAnnouncements201ApplicationJsonAnnouncementUrl, _super);
    function PostAnnouncements201ApplicationJsonAnnouncementUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncementUrl.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncementUrl.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncementUrl.prototype, "title", void 0);
    return PostAnnouncements201ApplicationJsonAnnouncementUrl;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncements201ApplicationJsonAnnouncementUrl = PostAnnouncements201ApplicationJsonAnnouncementUrl;
var PostAnnouncements201ApplicationJsonAnnouncement = /** @class */ (function (_super) {
    __extends(PostAnnouncements201ApplicationJsonAnnouncement, _super);
    function PostAnnouncements201ApplicationJsonAnnouncement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creation_date" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_internal" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "fileInternal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "filename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src_ip_address" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "srcIpAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", PostAnnouncements201ApplicationJsonAnnouncementUrl)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "url", void 0);
    return PostAnnouncements201ApplicationJsonAnnouncement;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncements201ApplicationJsonAnnouncement = PostAnnouncements201ApplicationJsonAnnouncement;
var PostAnnouncements201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnouncements201ApplicationJson, _super);
    function PostAnnouncements201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=announcement" }),
        __metadata("design:type", PostAnnouncements201ApplicationJsonAnnouncement)
    ], PostAnnouncements201ApplicationJson.prototype, "announcement", void 0);
    return PostAnnouncements201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncements201ApplicationJson = PostAnnouncements201ApplicationJson;
var PostAnnouncements400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(PostAnnouncements400ApplicationJsonErrors, _super);
    function PostAnnouncements400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], PostAnnouncements400ApplicationJsonErrors.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", Array)
    ], PostAnnouncements400ApplicationJsonErrors.prototype, "message", void 0);
    return PostAnnouncements400ApplicationJsonErrors;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncements400ApplicationJsonErrors = PostAnnouncements400ApplicationJsonErrors;
var PostAnnouncements400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnouncements400ApplicationJson, _super);
    function PostAnnouncements400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: PostAnnouncements400ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], PostAnnouncements400ApplicationJson.prototype, "errors", void 0);
    return PostAnnouncements400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncements400ApplicationJson = PostAnnouncements400ApplicationJson;
var PostAnnouncements403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnouncements403ApplicationJson, _super);
    function PostAnnouncements403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnouncements403ApplicationJson.prototype, "message", void 0);
    return PostAnnouncements403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncements403ApplicationJson = PostAnnouncements403ApplicationJson;
var PostAnnouncementsRequest = /** @class */ (function (_super) {
    __extends(PostAnnouncementsRequest, _super);
    function PostAnnouncementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostAnnouncementsRequestBody)
    ], PostAnnouncementsRequest.prototype, "request", void 0);
    return PostAnnouncementsRequest;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncementsRequest = PostAnnouncementsRequest;
var PostAnnouncementsResponse = /** @class */ (function (_super) {
    __extends(PostAnnouncementsResponse, _super);
    function PostAnnouncementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAnnouncementsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAnnouncementsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAnnouncements201ApplicationJson)
    ], PostAnnouncementsResponse.prototype, "postAnnouncements201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAnnouncements400ApplicationJson)
    ], PostAnnouncementsResponse.prototype, "postAnnouncements400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAnnouncements403ApplicationJson)
    ], PostAnnouncementsResponse.prototype, "postAnnouncements403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OneannouncementsPostResponses403ContentApplication1jsonSchema)
    ], PostAnnouncementsResponse.prototype, "oneannouncementsPostResponses403ContentApplication1jsonSchema", void 0);
    return PostAnnouncementsResponse;
}(utils_1.SpeakeasyBase));
exports.PostAnnouncementsResponse = PostAnnouncementsResponse;
