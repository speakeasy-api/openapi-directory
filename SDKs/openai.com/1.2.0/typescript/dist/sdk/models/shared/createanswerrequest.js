"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.CreateAnswerRequest = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var CreateAnswerRequest = /** @class */ (function (_super) {
    __extends(CreateAnswerRequest, _super);
    function CreateAnswerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "documents" }),
        __metadata("design:type", Array)
    ], CreateAnswerRequest.prototype, "documents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "examples" }),
        __metadata("design:type", Array)
    ], CreateAnswerRequest.prototype, "examples", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "examples_context" }),
        __metadata("design:type", String)
    ], CreateAnswerRequest.prototype, "examplesContext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "expand" }),
        __metadata("design:type", Array)
    ], CreateAnswerRequest.prototype, "expand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "file" }),
        __metadata("design:type", String)
    ], CreateAnswerRequest.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "logit_bias" }),
        __metadata("design:type", Object)
    ], CreateAnswerRequest.prototype, "logitBias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "logprobs" }),
        __metadata("design:type", Number)
    ], CreateAnswerRequest.prototype, "logprobs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "max_rerank" }),
        __metadata("design:type", Number)
    ], CreateAnswerRequest.prototype, "maxRerank", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "max_tokens" }),
        __metadata("design:type", Number)
    ], CreateAnswerRequest.prototype, "maxTokens", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "model" }),
        __metadata("design:type", String)
    ], CreateAnswerRequest.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "n" }),
        __metadata("design:type", Number)
    ], CreateAnswerRequest.prototype, "n", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "question" }),
        __metadata("design:type", String)
    ], CreateAnswerRequest.prototype, "question", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "return_metadata" }),
        __metadata("design:type", Boolean)
    ], CreateAnswerRequest.prototype, "returnMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "return_prompt" }),
        __metadata("design:type", Boolean)
    ], CreateAnswerRequest.prototype, "returnPrompt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "search_model" }),
        __metadata("design:type", String)
    ], CreateAnswerRequest.prototype, "searchModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "stop" }),
        __metadata("design:type", Object)
    ], CreateAnswerRequest.prototype, "stop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "temperature" }),
        __metadata("design:type", Number)
    ], CreateAnswerRequest.prototype, "temperature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "user" }),
        __metadata("design:type", String)
    ], CreateAnswerRequest.prototype, "user", void 0);
    return CreateAnswerRequest;
}(utils_1.SpeakeasyBase));
exports.CreateAnswerRequest = CreateAnswerRequest;
