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
exports.AddTextWatermarkV1Response = exports.AddTextWatermarkV1Request = exports.AddTextWatermarkV14XxApplicationProblemPlusJson = exports.AddTextWatermarkV1RequestBody = exports.AddTextWatermarkV1RequestBodyFile = exports.AddTextWatermarkV1RequestBodyColorEnum = void 0;
var utils_1 = require("../../../internal/utils");
var AddTextWatermarkV1RequestBodyColorEnum;
(function (AddTextWatermarkV1RequestBodyColorEnum) {
    AddTextWatermarkV1RequestBodyColorEnum["Red"] = "Red";
    AddTextWatermarkV1RequestBodyColorEnum["Blue"] = "Blue";
    AddTextWatermarkV1RequestBodyColorEnum["Gray"] = "Gray";
    AddTextWatermarkV1RequestBodyColorEnum["Black"] = "Black";
})(AddTextWatermarkV1RequestBodyColorEnum = exports.AddTextWatermarkV1RequestBodyColorEnum || (exports.AddTextWatermarkV1RequestBodyColorEnum = {}));
var AddTextWatermarkV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(AddTextWatermarkV1RequestBodyFile, _super);
    function AddTextWatermarkV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], AddTextWatermarkV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], AddTextWatermarkV1RequestBodyFile.prototype, "file", void 0);
    return AddTextWatermarkV1RequestBodyFile;
}(utils_1.SpeakeasyBase));
exports.AddTextWatermarkV1RequestBodyFile = AddTextWatermarkV1RequestBodyFile;
var AddTextWatermarkV1RequestBody = /** @class */ (function (_super) {
    __extends(AddTextWatermarkV1RequestBody, _super);
    function AddTextWatermarkV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=color" }),
        __metadata("design:type", String)
    ], AddTextWatermarkV1RequestBody.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", AddTextWatermarkV1RequestBodyFile)
    ], AddTextWatermarkV1RequestBody.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=line_1" }),
        __metadata("design:type", String)
    ], AddTextWatermarkV1RequestBody.prototype, "line1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=line_2" }),
        __metadata("design:type", String)
    ], AddTextWatermarkV1RequestBody.prototype, "line2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=line_3" }),
        __metadata("design:type", String)
    ], AddTextWatermarkV1RequestBody.prototype, "line3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=margin" }),
        __metadata("design:type", Number)
    ], AddTextWatermarkV1RequestBody.prototype, "margin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=template" }),
        __metadata("design:type", Number)
    ], AddTextWatermarkV1RequestBody.prototype, "template", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=transparency" }),
        __metadata("design:type", Number)
    ], AddTextWatermarkV1RequestBody.prototype, "transparency", void 0);
    return AddTextWatermarkV1RequestBody;
}(utils_1.SpeakeasyBase));
exports.AddTextWatermarkV1RequestBody = AddTextWatermarkV1RequestBody;
var AddTextWatermarkV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(AddTextWatermarkV14XxApplicationProblemPlusJson, _super);
    function AddTextWatermarkV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Object)
    ], AddTextWatermarkV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddTextWatermarkV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AddTextWatermarkV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddTextWatermarkV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return AddTextWatermarkV14XxApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.AddTextWatermarkV14XxApplicationProblemPlusJson = AddTextWatermarkV14XxApplicationProblemPlusJson;
var AddTextWatermarkV1Request = /** @class */ (function (_super) {
    __extends(AddTextWatermarkV1Request, _super);
    function AddTextWatermarkV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddTextWatermarkV1RequestBody)
    ], AddTextWatermarkV1Request.prototype, "request", void 0);
    return AddTextWatermarkV1Request;
}(utils_1.SpeakeasyBase));
exports.AddTextWatermarkV1Request = AddTextWatermarkV1Request;
var AddTextWatermarkV1Response = /** @class */ (function (_super) {
    __extends(AddTextWatermarkV1Response, _super);
    function AddTextWatermarkV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddTextWatermarkV1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddTextWatermarkV1Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddTextWatermarkV1Response.prototype, "addTextWatermarkV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddTextWatermarkV14XxApplicationProblemPlusJson)
    ], AddTextWatermarkV1Response.prototype, "addTextWatermarkV14XXApplicationProblemPlusJsonObject", void 0);
    return AddTextWatermarkV1Response;
}(utils_1.SpeakeasyBase));
exports.AddTextWatermarkV1Response = AddTextWatermarkV1Response;
