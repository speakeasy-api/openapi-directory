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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeDocumentsV1Response = exports.MergeDocumentsV1Request = exports.MergeDocumentsV14XxApplicationProblemPlusJson = exports.MergeDocumentsV1RequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var MergeDocumentsV1RequestBody = /** @class */ (function (_super) {
    __extends(MergeDocumentsV1RequestBody, _super);
    function MergeDocumentsV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file;json=true" }),
        __metadata("design:type", Array)
    ], MergeDocumentsV1RequestBody.prototype, "file", void 0);
    return MergeDocumentsV1RequestBody;
}(utils_1.SpeakeasyBase));
exports.MergeDocumentsV1RequestBody = MergeDocumentsV1RequestBody;
var MergeDocumentsV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(MergeDocumentsV14XxApplicationProblemPlusJson, _super);
    function MergeDocumentsV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Object)
    ], MergeDocumentsV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeDocumentsV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MergeDocumentsV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MergeDocumentsV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return MergeDocumentsV14XxApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.MergeDocumentsV14XxApplicationProblemPlusJson = MergeDocumentsV14XxApplicationProblemPlusJson;
var MergeDocumentsV1Request = /** @class */ (function (_super) {
    __extends(MergeDocumentsV1Request, _super);
    function MergeDocumentsV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MergeDocumentsV1RequestBody)
    ], MergeDocumentsV1Request.prototype, "request", void 0);
    return MergeDocumentsV1Request;
}(utils_1.SpeakeasyBase));
exports.MergeDocumentsV1Request = MergeDocumentsV1Request;
var MergeDocumentsV1Response = /** @class */ (function (_super) {
    __extends(MergeDocumentsV1Response, _super);
    function MergeDocumentsV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MergeDocumentsV1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MergeDocumentsV1Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MergeDocumentsV1Response.prototype, "mergeDocumentsV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeDocumentsV14XxApplicationProblemPlusJson)
    ], MergeDocumentsV1Response.prototype, "mergeDocumentsV14XXApplicationProblemPlusJsonObject", void 0);
    return MergeDocumentsV1Response;
}(utils_1.SpeakeasyBase));
exports.MergeDocumentsV1Response = MergeDocumentsV1Response;
