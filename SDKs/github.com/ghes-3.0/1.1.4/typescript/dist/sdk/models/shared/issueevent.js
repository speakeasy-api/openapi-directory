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
exports.IssueEvent = exports.IssueEventSimpleUser = void 0;
var utils_1 = require("../../../internal/utils");
var authorassociationenum_1 = require("./authorassociationenum");
var issueeventdismissedreview_1 = require("./issueeventdismissedreview");
var issuesimple_1 = require("./issuesimple");
var issueeventlabel_1 = require("./issueeventlabel");
var issueeventmilestone_1 = require("./issueeventmilestone");
var issueeventprojectcard_1 = require("./issueeventprojectcard");
var issueeventrename_1 = require("./issueeventrename");
var team_1 = require("./team");
// IssueEventSimpleUser
/**
 * Simple User
**/
var IssueEventSimpleUser = /** @class */ (function (_super) {
    __extends(IssueEventSimpleUser, _super);
    function IssueEventSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueEventSimpleUser.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "login", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], IssueEventSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueEventSimpleUser.prototype, "url", void 0);
    return IssueEventSimpleUser;
}(utils_1.SpeakeasyBase));
exports.IssueEventSimpleUser = IssueEventSimpleUser;
// IssueEvent
/**
 * Issue Event
**/
var IssueEvent = /** @class */ (function (_super) {
    __extends(IssueEvent, _super);
    function IssueEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actor" }),
        __metadata("design:type", IssueEventSimpleUser)
    ], IssueEvent.prototype, "actor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee" }),
        __metadata("design:type", IssueEventSimpleUser)
    ], IssueEvent.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigner" }),
        __metadata("design:type", IssueEventSimpleUser)
    ], IssueEvent.prototype, "assigner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], IssueEvent.prototype, "authorAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commit_id" }),
        __metadata("design:type", String)
    ], IssueEvent.prototype, "commitId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commit_url" }),
        __metadata("design:type", String)
    ], IssueEvent.prototype, "commitUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], IssueEvent.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dismissed_review" }),
        __metadata("design:type", issueeventdismissedreview_1.IssueEventDismissedReview)
    ], IssueEvent.prototype, "dismissedReview", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], IssueEvent.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueEvent.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue" }),
        __metadata("design:type", issuesimple_1.IssueSimple)
    ], IssueEvent.prototype, "issue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", issueeventlabel_1.IssueEventLabel)
    ], IssueEvent.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lock_reason" }),
        __metadata("design:type", String)
    ], IssueEvent.prototype, "lockReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=milestone" }),
        __metadata("design:type", issueeventmilestone_1.IssueEventMilestone)
    ], IssueEvent.prototype, "milestone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueEvent.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performed_via_github_app" }),
        __metadata("design:type", Object)
    ], IssueEvent.prototype, "performedViaGithubApp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project_card" }),
        __metadata("design:type", issueeventprojectcard_1.IssueEventProjectCard)
    ], IssueEvent.prototype, "projectCard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rename" }),
        __metadata("design:type", issueeventrename_1.IssueEventRename)
    ], IssueEvent.prototype, "rename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_reviewer" }),
        __metadata("design:type", IssueEventSimpleUser)
    ], IssueEvent.prototype, "requestedReviewer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_team" }),
        __metadata("design:type", team_1.Team)
    ], IssueEvent.prototype, "requestedTeam", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=review_requester" }),
        __metadata("design:type", IssueEventSimpleUser)
    ], IssueEvent.prototype, "reviewRequester", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueEvent.prototype, "url", void 0);
    return IssueEvent;
}(utils_1.SpeakeasyBase));
exports.IssueEvent = IssueEvent;
