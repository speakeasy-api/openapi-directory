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
exports.SuggestCommentScoreRequest = void 0;
var utils_1 = require("../../../internal/utils");
var attributescores_1 = require("./attributescores");
var textentry_1 = require("./textentry");
var context_1 = require("./context");
// SuggestCommentScoreRequest
/**
 * The comment score suggestion request message.
**/
var SuggestCommentScoreRequest = /** @class */ (function (_super) {
    __extends(SuggestCommentScoreRequest, _super);
    function SuggestCommentScoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributeScores", elemType: attributescores_1.AttributeScores }),
        __metadata("design:type", Object)
    ], SuggestCommentScoreRequest.prototype, "attributeScores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], SuggestCommentScoreRequest.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", textentry_1.TextEntry)
    ], SuggestCommentScoreRequest.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communityId" }),
        __metadata("design:type", String)
    ], SuggestCommentScoreRequest.prototype, "communityId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=context" }),
        __metadata("design:type", context_1.Context)
    ], SuggestCommentScoreRequest.prototype, "context", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], SuggestCommentScoreRequest.prototype, "languages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], SuggestCommentScoreRequest.prototype, "sessionId", void 0);
    return SuggestCommentScoreRequest;
}(utils_1.SpeakeasyBase));
exports.SuggestCommentScoreRequest = SuggestCommentScoreRequest;
