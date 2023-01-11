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
exports.UpdateABlockResponse = exports.UpdateABlockRequest = exports.UpdateABlock200ApplicationJson = exports.UpdateABlock200ApplicationJsonParagraph = exports.UpdateABlock200ApplicationJsonParagraphText = exports.UpdateABlock200ApplicationJsonParagraphTextText = exports.UpdateABlock200ApplicationJsonParagraphTextAnnotations = exports.UpdateABlockRequestBody = exports.UpdateABlockRequestBodyParagraph = exports.UpdateABlockRequestBodyParagraphText = exports.UpdateABlockRequestBodyParagraphTextText = exports.UpdateABlockPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateABlockPathParams = /** @class */ (function (_super) {
    __extends(UpdateABlockPathParams, _super);
    function UpdateABlockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateABlockPathParams.prototype, "id", void 0);
    return UpdateABlockPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateABlockPathParams = UpdateABlockPathParams;
var UpdateABlockRequestBodyParagraphTextText = /** @class */ (function (_super) {
    __extends(UpdateABlockRequestBodyParagraphTextText, _super);
    function UpdateABlockRequestBodyParagraphTextText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], UpdateABlockRequestBodyParagraphTextText.prototype, "content", void 0);
    return UpdateABlockRequestBodyParagraphTextText;
}(utils_1.SpeakeasyBase));
exports.UpdateABlockRequestBodyParagraphTextText = UpdateABlockRequestBodyParagraphTextText;
var UpdateABlockRequestBodyParagraphText = /** @class */ (function (_super) {
    __extends(UpdateABlockRequestBodyParagraphText, _super);
    function UpdateABlockRequestBodyParagraphText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", UpdateABlockRequestBodyParagraphTextText)
    ], UpdateABlockRequestBodyParagraphText.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateABlockRequestBodyParagraphText.prototype, "type", void 0);
    return UpdateABlockRequestBodyParagraphText;
}(utils_1.SpeakeasyBase));
exports.UpdateABlockRequestBodyParagraphText = UpdateABlockRequestBodyParagraphText;
var UpdateABlockRequestBodyParagraph = /** @class */ (function (_super) {
    __extends(UpdateABlockRequestBodyParagraph, _super);
    function UpdateABlockRequestBodyParagraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text", elemType: UpdateABlockRequestBodyParagraphText }),
        __metadata("design:type", Array)
    ], UpdateABlockRequestBodyParagraph.prototype, "text", void 0);
    return UpdateABlockRequestBodyParagraph;
}(utils_1.SpeakeasyBase));
exports.UpdateABlockRequestBodyParagraph = UpdateABlockRequestBodyParagraph;
var UpdateABlockRequestBody = /** @class */ (function (_super) {
    __extends(UpdateABlockRequestBody, _super);
    function UpdateABlockRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paragraph" }),
        __metadata("design:type", UpdateABlockRequestBodyParagraph)
    ], UpdateABlockRequestBody.prototype, "paragraph", void 0);
    return UpdateABlockRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateABlockRequestBody = UpdateABlockRequestBody;
var UpdateABlock200ApplicationJsonParagraphTextAnnotations = /** @class */ (function (_super) {
    __extends(UpdateABlock200ApplicationJsonParagraphTextAnnotations, _super);
    function UpdateABlock200ApplicationJsonParagraphTextAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], UpdateABlock200ApplicationJsonParagraphTextAnnotations.prototype, "bold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], UpdateABlock200ApplicationJsonParagraphTextAnnotations.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJsonParagraphTextAnnotations.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], UpdateABlock200ApplicationJsonParagraphTextAnnotations.prototype, "italic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], UpdateABlock200ApplicationJsonParagraphTextAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], UpdateABlock200ApplicationJsonParagraphTextAnnotations.prototype, "underline", void 0);
    return UpdateABlock200ApplicationJsonParagraphTextAnnotations;
}(utils_1.SpeakeasyBase));
exports.UpdateABlock200ApplicationJsonParagraphTextAnnotations = UpdateABlock200ApplicationJsonParagraphTextAnnotations;
var UpdateABlock200ApplicationJsonParagraphTextText = /** @class */ (function (_super) {
    __extends(UpdateABlock200ApplicationJsonParagraphTextText, _super);
    function UpdateABlock200ApplicationJsonParagraphTextText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJsonParagraphTextText.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], UpdateABlock200ApplicationJsonParagraphTextText.prototype, "link", void 0);
    return UpdateABlock200ApplicationJsonParagraphTextText;
}(utils_1.SpeakeasyBase));
exports.UpdateABlock200ApplicationJsonParagraphTextText = UpdateABlock200ApplicationJsonParagraphTextText;
var UpdateABlock200ApplicationJsonParagraphText = /** @class */ (function (_super) {
    __extends(UpdateABlock200ApplicationJsonParagraphText, _super);
    function UpdateABlock200ApplicationJsonParagraphText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotations" }),
        __metadata("design:type", UpdateABlock200ApplicationJsonParagraphTextAnnotations)
    ], UpdateABlock200ApplicationJsonParagraphText.prototype, "annotations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], UpdateABlock200ApplicationJsonParagraphText.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJsonParagraphText.prototype, "plainText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", UpdateABlock200ApplicationJsonParagraphTextText)
    ], UpdateABlock200ApplicationJsonParagraphText.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJsonParagraphText.prototype, "type", void 0);
    return UpdateABlock200ApplicationJsonParagraphText;
}(utils_1.SpeakeasyBase));
exports.UpdateABlock200ApplicationJsonParagraphText = UpdateABlock200ApplicationJsonParagraphText;
var UpdateABlock200ApplicationJsonParagraph = /** @class */ (function (_super) {
    __extends(UpdateABlock200ApplicationJsonParagraph, _super);
    function UpdateABlock200ApplicationJsonParagraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text", elemType: UpdateABlock200ApplicationJsonParagraphText }),
        __metadata("design:type", Array)
    ], UpdateABlock200ApplicationJsonParagraph.prototype, "text", void 0);
    return UpdateABlock200ApplicationJsonParagraph;
}(utils_1.SpeakeasyBase));
exports.UpdateABlock200ApplicationJsonParagraph = UpdateABlock200ApplicationJsonParagraph;
var UpdateABlock200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateABlock200ApplicationJson, _super);
    function UpdateABlock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJson.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_children" }),
        __metadata("design:type", Boolean)
    ], UpdateABlock200ApplicationJson.prototype, "hasChildren", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJson.prototype, "lastEditedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJson.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paragraph" }),
        __metadata("design:type", UpdateABlock200ApplicationJsonParagraph)
    ], UpdateABlock200ApplicationJson.prototype, "paragraph", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateABlock200ApplicationJson.prototype, "type", void 0);
    return UpdateABlock200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateABlock200ApplicationJson = UpdateABlock200ApplicationJson;
var UpdateABlockRequest = /** @class */ (function (_super) {
    __extends(UpdateABlockRequest, _super);
    function UpdateABlockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateABlockPathParams)
    ], UpdateABlockRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateABlockRequestBody)
    ], UpdateABlockRequest.prototype, "request", void 0);
    return UpdateABlockRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateABlockRequest = UpdateABlockRequest;
var UpdateABlockResponse = /** @class */ (function (_super) {
    __extends(UpdateABlockResponse, _super);
    function UpdateABlockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateABlockResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateABlockResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateABlockResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateABlock200ApplicationJson)
    ], UpdateABlockResponse.prototype, "updateABlock200ApplicationJSONObject", void 0);
    return UpdateABlockResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateABlockResponse = UpdateABlockResponse;
