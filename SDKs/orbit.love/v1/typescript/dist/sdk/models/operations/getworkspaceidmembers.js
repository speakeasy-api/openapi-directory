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
exports.GetWorkspaceIdMembersResponse = exports.GetWorkspaceIdMembersRequest = exports.GetWorkspaceIdMembersSecurity = exports.GetWorkspaceIdMembersQueryParams = exports.GetWorkspaceIdMembersSortEnum = exports.GetWorkspaceIdMembersOrbitLevelEnum = exports.GetWorkspaceIdMembersItemsEnum = exports.GetWorkspaceIdMembersIdentityEnum = exports.GetWorkspaceIdMembersDirectionEnum = exports.GetWorkspaceIdMembersAffiliationEnum = exports.GetWorkspaceIdMembersActivityTypeEnum = exports.GetWorkspaceIdMembersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetWorkspaceIdMembersPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersPathParams, _super);
    function GetWorkspaceIdMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersPathParams.prototype, "workspaceId", void 0);
    return GetWorkspaceIdMembersPathParams;
}(utils_1.SpeakeasyBase));
exports.GetWorkspaceIdMembersPathParams = GetWorkspaceIdMembersPathParams;
var GetWorkspaceIdMembersActivityTypeEnum;
(function (GetWorkspaceIdMembersActivityTypeEnum) {
    GetWorkspaceIdMembersActivityTypeEnum["DiscordMessageSent"] = "discord:message:sent";
    GetWorkspaceIdMembersActivityTypeEnum["SlackThreadReplied"] = "slack:thread:replied";
    GetWorkspaceIdMembersActivityTypeEnum["DiscordMessageReplied"] = "discord:message:replied";
    GetWorkspaceIdMembersActivityTypeEnum["TweetSent"] = "tweet:sent";
    GetWorkspaceIdMembersActivityTypeEnum["TwitterFollowed"] = "twitter:followed";
    GetWorkspaceIdMembersActivityTypeEnum["DiscordServerJoined"] = "discord:server:joined";
    GetWorkspaceIdMembersActivityTypeEnum["DiscourseTopicCreated"] = "discourse:topic:created";
    GetWorkspaceIdMembersActivityTypeEnum["DiscoursePostCreated"] = "discourse:post:created";
    GetWorkspaceIdMembersActivityTypeEnum["SlackMessageSent"] = "slack:message:sent";
    GetWorkspaceIdMembersActivityTypeEnum["NoteCreated"] = "note:created";
    GetWorkspaceIdMembersActivityTypeEnum["PostCreated"] = "post:created";
    GetWorkspaceIdMembersActivityTypeEnum["IssuesOpened"] = "issues:opened";
    GetWorkspaceIdMembersActivityTypeEnum["IssueCommentCreated"] = "issue_comment:created";
    GetWorkspaceIdMembersActivityTypeEnum["PullRequestsOpened"] = "pull_requests:opened";
    GetWorkspaceIdMembersActivityTypeEnum["PullRequestsMerged"] = "pull_requests:merged";
    GetWorkspaceIdMembersActivityTypeEnum["CustomHappened"] = "custom:happened";
    GetWorkspaceIdMembersActivityTypeEnum["SlackChannelJoined"] = "slack:channel:joined";
    GetWorkspaceIdMembersActivityTypeEnum["StarCreated"] = "star:created";
})(GetWorkspaceIdMembersActivityTypeEnum = exports.GetWorkspaceIdMembersActivityTypeEnum || (exports.GetWorkspaceIdMembersActivityTypeEnum = {}));
var GetWorkspaceIdMembersAffiliationEnum;
(function (GetWorkspaceIdMembersAffiliationEnum) {
    GetWorkspaceIdMembersAffiliationEnum["Member"] = "member";
    GetWorkspaceIdMembersAffiliationEnum["Teammate"] = "teammate";
})(GetWorkspaceIdMembersAffiliationEnum = exports.GetWorkspaceIdMembersAffiliationEnum || (exports.GetWorkspaceIdMembersAffiliationEnum = {}));
var GetWorkspaceIdMembersDirectionEnum;
(function (GetWorkspaceIdMembersDirectionEnum) {
    GetWorkspaceIdMembersDirectionEnum["Asc"] = "ASC";
    GetWorkspaceIdMembersDirectionEnum["Desc"] = "DESC";
})(GetWorkspaceIdMembersDirectionEnum = exports.GetWorkspaceIdMembersDirectionEnum || (exports.GetWorkspaceIdMembersDirectionEnum = {}));
var GetWorkspaceIdMembersIdentityEnum;
(function (GetWorkspaceIdMembersIdentityEnum) {
    GetWorkspaceIdMembersIdentityEnum["Github"] = "github";
    GetWorkspaceIdMembersIdentityEnum["Twitter"] = "twitter";
    GetWorkspaceIdMembersIdentityEnum["Email"] = "email";
    GetWorkspaceIdMembersIdentityEnum["Discourse"] = "discourse";
    GetWorkspaceIdMembersIdentityEnum["Linkedin"] = "linkedin";
    GetWorkspaceIdMembersIdentityEnum["Devto"] = "devto";
    GetWorkspaceIdMembersIdentityEnum["Slack"] = "slack";
    GetWorkspaceIdMembersIdentityEnum["Discord"] = "discord";
})(GetWorkspaceIdMembersIdentityEnum = exports.GetWorkspaceIdMembersIdentityEnum || (exports.GetWorkspaceIdMembersIdentityEnum = {}));
var GetWorkspaceIdMembersItemsEnum;
(function (GetWorkspaceIdMembersItemsEnum) {
    GetWorkspaceIdMembersItemsEnum["Ten"] = "10";
    GetWorkspaceIdMembersItemsEnum["Fifty"] = "50";
    GetWorkspaceIdMembersItemsEnum["OneHundred"] = "100";
})(GetWorkspaceIdMembersItemsEnum = exports.GetWorkspaceIdMembersItemsEnum || (exports.GetWorkspaceIdMembersItemsEnum = {}));
var GetWorkspaceIdMembersOrbitLevelEnum;
(function (GetWorkspaceIdMembersOrbitLevelEnum) {
    GetWorkspaceIdMembersOrbitLevelEnum["One"] = "1";
    GetWorkspaceIdMembersOrbitLevelEnum["Two"] = "2";
    GetWorkspaceIdMembersOrbitLevelEnum["Three"] = "3";
    GetWorkspaceIdMembersOrbitLevelEnum["Four"] = "4";
    GetWorkspaceIdMembersOrbitLevelEnum["N"] = "n";
})(GetWorkspaceIdMembersOrbitLevelEnum = exports.GetWorkspaceIdMembersOrbitLevelEnum || (exports.GetWorkspaceIdMembersOrbitLevelEnum = {}));
var GetWorkspaceIdMembersSortEnum;
(function (GetWorkspaceIdMembersSortEnum) {
    GetWorkspaceIdMembersSortEnum["ActivitiesCount"] = "activities_count";
    GetWorkspaceIdMembersSortEnum["Company"] = "company";
    GetWorkspaceIdMembersSortEnum["CreatedAt"] = "created_at";
    GetWorkspaceIdMembersSortEnum["FirstActivity"] = "first_activity";
    GetWorkspaceIdMembersSortEnum["GithubFollowers"] = "github_followers";
    GetWorkspaceIdMembersSortEnum["Id"] = "id";
    GetWorkspaceIdMembersSortEnum["LastActivity"] = "last_activity";
    GetWorkspaceIdMembersSortEnum["Location"] = "location";
    GetWorkspaceIdMembersSortEnum["Love"] = "love";
    GetWorkspaceIdMembersSortEnum["Name"] = "name";
    GetWorkspaceIdMembersSortEnum["Orbit"] = "orbit";
    GetWorkspaceIdMembersSortEnum["Reach"] = "reach";
    GetWorkspaceIdMembersSortEnum["Title"] = "title";
    GetWorkspaceIdMembersSortEnum["TwitterFollowers"] = "twitter_followers";
    GetWorkspaceIdMembersSortEnum["UpdatedAt"] = "updated_at";
})(GetWorkspaceIdMembersSortEnum = exports.GetWorkspaceIdMembersSortEnum || (exports.GetWorkspaceIdMembersSortEnum = {}));
var GetWorkspaceIdMembersQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersQueryParams, _super);
    function GetWorkspaceIdMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=activities_count_max" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activitiesCountMax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=activities_count_min" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activitiesCountMin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=activity_tags" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activityTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=activity_type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=affiliation" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "affiliation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=company" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=identity" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=items" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=member_tags" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "memberTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orbit_level" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "orbitLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=weight" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "weight", void 0);
    return GetWorkspaceIdMembersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetWorkspaceIdMembersQueryParams = GetWorkspaceIdMembersQueryParams;
var GetWorkspaceIdMembersSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersSecurity, _super);
    function GetWorkspaceIdMembersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], GetWorkspaceIdMembersSecurity.prototype, "bearer", void 0);
    return GetWorkspaceIdMembersSecurity;
}(utils_1.SpeakeasyBase));
exports.GetWorkspaceIdMembersSecurity = GetWorkspaceIdMembersSecurity;
var GetWorkspaceIdMembersRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersRequest, _super);
    function GetWorkspaceIdMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWorkspaceIdMembersPathParams)
    ], GetWorkspaceIdMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWorkspaceIdMembersQueryParams)
    ], GetWorkspaceIdMembersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWorkspaceIdMembersSecurity)
    ], GetWorkspaceIdMembersRequest.prototype, "security", void 0);
    return GetWorkspaceIdMembersRequest;
}(utils_1.SpeakeasyBase));
exports.GetWorkspaceIdMembersRequest = GetWorkspaceIdMembersRequest;
var GetWorkspaceIdMembersResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersResponse, _super);
    function GetWorkspaceIdMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetWorkspaceIdMembersResponse.prototype, "statusCode", void 0);
    return GetWorkspaceIdMembersResponse;
}(utils_1.SpeakeasyBase));
exports.GetWorkspaceIdMembersResponse = GetWorkspaceIdMembersResponse;
