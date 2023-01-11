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
exports.PullRequestReviewComment = exports.PullRequestReviewCommentStartSideEnum = exports.PullRequestReviewCommentSideEnum = exports.PullRequestReviewCommentLinks = exports.PullRequestReviewCommentLinksSelf = exports.PullRequestReviewCommentLinksPullRequest = exports.PullRequestReviewCommentLinksHtml = void 0;
var utils_1 = require("../../../internal/utils");
var authorassociationenum_1 = require("./authorassociationenum");
var reactionrollup_1 = require("./reactionrollup");
var simpleuser_1 = require("./simpleuser");
var PullRequestReviewCommentLinksHtml = /** @class */ (function (_super) {
    __extends(PullRequestReviewCommentLinksHtml, _super);
    function PullRequestReviewCommentLinksHtml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PullRequestReviewCommentLinksHtml.prototype, "href", void 0);
    return PullRequestReviewCommentLinksHtml;
}(utils_1.SpeakeasyBase));
exports.PullRequestReviewCommentLinksHtml = PullRequestReviewCommentLinksHtml;
var PullRequestReviewCommentLinksPullRequest = /** @class */ (function (_super) {
    __extends(PullRequestReviewCommentLinksPullRequest, _super);
    function PullRequestReviewCommentLinksPullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PullRequestReviewCommentLinksPullRequest.prototype, "href", void 0);
    return PullRequestReviewCommentLinksPullRequest;
}(utils_1.SpeakeasyBase));
exports.PullRequestReviewCommentLinksPullRequest = PullRequestReviewCommentLinksPullRequest;
var PullRequestReviewCommentLinksSelf = /** @class */ (function (_super) {
    __extends(PullRequestReviewCommentLinksSelf, _super);
    function PullRequestReviewCommentLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PullRequestReviewCommentLinksSelf.prototype, "href", void 0);
    return PullRequestReviewCommentLinksSelf;
}(utils_1.SpeakeasyBase));
exports.PullRequestReviewCommentLinksSelf = PullRequestReviewCommentLinksSelf;
var PullRequestReviewCommentLinks = /** @class */ (function (_super) {
    __extends(PullRequestReviewCommentLinks, _super);
    function PullRequestReviewCommentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html" }),
        __metadata("design:type", PullRequestReviewCommentLinksHtml)
    ], PullRequestReviewCommentLinks.prototype, "html", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pull_request" }),
        __metadata("design:type", PullRequestReviewCommentLinksPullRequest)
    ], PullRequestReviewCommentLinks.prototype, "pullRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", PullRequestReviewCommentLinksSelf)
    ], PullRequestReviewCommentLinks.prototype, "self", void 0);
    return PullRequestReviewCommentLinks;
}(utils_1.SpeakeasyBase));
exports.PullRequestReviewCommentLinks = PullRequestReviewCommentLinks;
var PullRequestReviewCommentSideEnum;
(function (PullRequestReviewCommentSideEnum) {
    PullRequestReviewCommentSideEnum["Left"] = "LEFT";
    PullRequestReviewCommentSideEnum["Right"] = "RIGHT";
})(PullRequestReviewCommentSideEnum = exports.PullRequestReviewCommentSideEnum || (exports.PullRequestReviewCommentSideEnum = {}));
var PullRequestReviewCommentStartSideEnum;
(function (PullRequestReviewCommentStartSideEnum) {
    PullRequestReviewCommentStartSideEnum["Left"] = "LEFT";
    PullRequestReviewCommentStartSideEnum["Right"] = "RIGHT";
})(PullRequestReviewCommentStartSideEnum = exports.PullRequestReviewCommentStartSideEnum || (exports.PullRequestReviewCommentStartSideEnum = {}));
// PullRequestReviewComment
/**
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
**/
var PullRequestReviewComment = /** @class */ (function (_super) {
    __extends(PullRequestReviewComment, _super);
    function PullRequestReviewComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", PullRequestReviewCommentLinks)
    ], PullRequestReviewComment.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "authorAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body_html" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "bodyHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body_text" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "bodyText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commit_id" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "commitId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PullRequestReviewComment.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diff_hunk" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "diffHunk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_reply_to_id" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "inReplyToId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=line" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "line", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_commit_id" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "originalCommitId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_line" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "originalLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_position" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "originalPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_start_line" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "originalStartLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pull_request_review_id" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "pullRequestReviewId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pull_request_url" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "pullRequestUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reactions" }),
        __metadata("design:type", reactionrollup_1.ReactionRollup)
    ], PullRequestReviewComment.prototype, "reactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=side" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "side", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_line" }),
        __metadata("design:type", Number)
    ], PullRequestReviewComment.prototype, "startLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_side" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "startSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PullRequestReviewComment.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestReviewComment.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", simpleuser_1.SimpleUser)
    ], PullRequestReviewComment.prototype, "user", void 0);
    return PullRequestReviewComment;
}(utils_1.SpeakeasyBase));
exports.PullRequestReviewComment = PullRequestReviewComment;
