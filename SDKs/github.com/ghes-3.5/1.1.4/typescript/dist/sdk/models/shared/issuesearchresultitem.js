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
exports.IssueSearchResultItem = exports.IssueSearchResultItemPullRequest = exports.IssueSearchResultItemLabels = void 0;
var utils_1 = require("../../../internal/utils");
var authorassociationenum_1 = require("./authorassociationenum");
var nullableintegration_1 = require("./nullableintegration");
var nullablemilestone_1 = require("./nullablemilestone");
var nullablesimpleuser_1 = require("./nullablesimpleuser");
var reactionrollup_1 = require("./reactionrollup");
var repository_1 = require("./repository");
var searchresulttextmatches_1 = require("./searchresulttextmatches");
var simpleuser_1 = require("./simpleuser");
var class_transformer_1 = require("class-transformer");
var IssueSearchResultItemLabels = /** @class */ (function (_super) {
    __extends(IssueSearchResultItemLabels, _super);
    function IssueSearchResultItemLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "color" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "default" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItemLabels.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemLabels.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "url", void 0);
    return IssueSearchResultItemLabels;
}(utils_1.SpeakeasyBase));
exports.IssueSearchResultItemLabels = IssueSearchResultItemLabels;
var IssueSearchResultItemPullRequest = /** @class */ (function (_super) {
    __extends(IssueSearchResultItemPullRequest, _super);
    function IssueSearchResultItemPullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "diff_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "diffUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merged_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], IssueSearchResultItemPullRequest.prototype, "mergedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "patch_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "patchUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "url", void 0);
    return IssueSearchResultItemPullRequest;
}(utils_1.SpeakeasyBase));
exports.IssueSearchResultItemPullRequest = IssueSearchResultItemPullRequest;
/**
 * Issue Search Result Item
 */
var IssueSearchResultItem = /** @class */ (function (_super) {
    __extends(IssueSearchResultItem, _super);
    function IssueSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "active_lock_reason" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "activeLockReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "assignee" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], IssueSearchResultItem.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: simpleuser_1.SimpleUser }),
        (0, class_transformer_1.Expose)({ name: "assignees" }),
        (0, class_transformer_1.Type)(function () { return simpleuser_1.SimpleUser; }),
        __metadata("design:type", Array)
    ], IssueSearchResultItem.prototype, "assignees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "author_association" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "authorAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body_html" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "bodyHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body_text" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "bodyText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "closed_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], IssueSearchResultItem.prototype, "closedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "commentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], IssueSearchResultItem.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "draft" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItem.prototype, "draft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "events_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "eventsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: IssueSearchResultItemLabels }),
        (0, class_transformer_1.Expose)({ name: "labels" }),
        (0, class_transformer_1.Type)(function () { return IssueSearchResultItemLabels; }),
        __metadata("design:type", Array)
    ], IssueSearchResultItem.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "labels_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "labelsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "locked" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItem.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "milestone" }),
        (0, class_transformer_1.Type)(function () { return nullablemilestone_1.NullableMilestone; }),
        __metadata("design:type", nullablemilestone_1.NullableMilestone)
    ], IssueSearchResultItem.prototype, "milestone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "number" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "performed_via_github_app" }),
        (0, class_transformer_1.Type)(function () { return nullableintegration_1.NullableIntegration; }),
        __metadata("design:type", nullableintegration_1.NullableIntegration)
    ], IssueSearchResultItem.prototype, "performedViaGithubApp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pull_request" }),
        (0, class_transformer_1.Type)(function () { return IssueSearchResultItemPullRequest; }),
        __metadata("design:type", IssueSearchResultItemPullRequest)
    ], IssueSearchResultItem.prototype, "pullRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "reactions" }),
        (0, class_transformer_1.Type)(function () { return reactionrollup_1.ReactionRollup; }),
        __metadata("design:type", reactionrollup_1.ReactionRollup)
    ], IssueSearchResultItem.prototype, "reactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repository" }),
        (0, class_transformer_1.Type)(function () { return repository_1.Repository; }),
        __metadata("design:type", repository_1.Repository)
    ], IssueSearchResultItem.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repository_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "repositoryUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "score" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state_reason" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "stateReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: searchresulttextmatches_1.SearchResultTextMatches }),
        (0, class_transformer_1.Expose)({ name: "text_matches" }),
        (0, class_transformer_1.Type)(function () { return searchresulttextmatches_1.SearchResultTextMatches; }),
        __metadata("design:type", Array)
    ], IssueSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "timeline_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "timelineUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], IssueSearchResultItem.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "user" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], IssueSearchResultItem.prototype, "user", void 0);
    return IssueSearchResultItem;
}(utils_1.SpeakeasyBase));
exports.IssueSearchResultItem = IssueSearchResultItem;
