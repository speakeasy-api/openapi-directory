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
exports.BaseGist = exports.BaseGistFiles = void 0;
var utils_1 = require("../../../internal/utils");
var nullablesimpleuser_1 = require("./nullablesimpleuser");
var simpleuser_1 = require("./simpleuser");
var class_transformer_1 = require("class-transformer");
var BaseGistFiles = /** @class */ (function (_super) {
    __extends(BaseGistFiles, _super);
    function BaseGistFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filename" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "filename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "language" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "raw_url" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "rawUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "size" }),
        __metadata("design:type", Number)
    ], BaseGistFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "type", void 0);
    return BaseGistFiles;
}(utils_1.SpeakeasyBase));
exports.BaseGistFiles = BaseGistFiles;
/**
 * Base Gist
 */
var BaseGist = /** @class */ (function (_super) {
    __extends(BaseGist, _super);
    function BaseGist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments" }),
        __metadata("design:type", Number)
    ], BaseGist.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "commentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "commits_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "commitsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], BaseGist.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: BaseGistFiles }),
        (0, class_transformer_1.Expose)({ name: "files" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            var obj = {};
            for (var key in value) {
                obj[key] = (0, utils_1.objectToClass)(value[key], BaseGistFiles);
            }
            return obj;
        }, { toClassOnly: true }),
        __metadata("design:type", Object)
    ], BaseGist.prototype, "files", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "forks" }),
        __metadata("design:type", Array)
    ], BaseGist.prototype, "forks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "forks_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "forksUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "git_pull_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "gitPullUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "git_push_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "gitPushUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "history" }),
        __metadata("design:type", Array)
    ], BaseGist.prototype, "history", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "owner" }),
        (0, class_transformer_1.Type)(function () { return simpleuser_1.SimpleUser; }),
        __metadata("design:type", simpleuser_1.SimpleUser)
    ], BaseGist.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "public" }),
        __metadata("design:type", Boolean)
    ], BaseGist.prototype, "public", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "truncated" }),
        __metadata("design:type", Boolean)
    ], BaseGist.prototype, "truncated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], BaseGist.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "user" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], BaseGist.prototype, "user", void 0);
    return BaseGist;
}(utils_1.SpeakeasyBase));
exports.BaseGist = BaseGist;
