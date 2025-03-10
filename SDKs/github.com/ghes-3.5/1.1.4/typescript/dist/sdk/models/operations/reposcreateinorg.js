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
exports.ReposCreateInOrgResponse = exports.ReposCreateInOrgRequest = exports.ReposCreateInOrgRequestBody = exports.ReposCreateInOrgRequestBodyVisibilityEnum = exports.ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum = exports.ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum = exports.ReposCreateInOrgRequestBodyMergeCommitTitleEnum = exports.ReposCreateInOrgRequestBodyMergeCommitMessageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * The default value for a merge commit message.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
var ReposCreateInOrgRequestBodyMergeCommitMessageEnum;
(function (ReposCreateInOrgRequestBodyMergeCommitMessageEnum) {
    ReposCreateInOrgRequestBodyMergeCommitMessageEnum["PrBody"] = "PR_BODY";
    ReposCreateInOrgRequestBodyMergeCommitMessageEnum["PrTitle"] = "PR_TITLE";
    ReposCreateInOrgRequestBodyMergeCommitMessageEnum["Blank"] = "BLANK";
})(ReposCreateInOrgRequestBodyMergeCommitMessageEnum = exports.ReposCreateInOrgRequestBodyMergeCommitMessageEnum || (exports.ReposCreateInOrgRequestBodyMergeCommitMessageEnum = {}));
/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
var ReposCreateInOrgRequestBodyMergeCommitTitleEnum;
(function (ReposCreateInOrgRequestBodyMergeCommitTitleEnum) {
    ReposCreateInOrgRequestBodyMergeCommitTitleEnum["PrTitle"] = "PR_TITLE";
    ReposCreateInOrgRequestBodyMergeCommitTitleEnum["MergeMessage"] = "MERGE_MESSAGE";
})(ReposCreateInOrgRequestBodyMergeCommitTitleEnum = exports.ReposCreateInOrgRequestBodyMergeCommitTitleEnum || (exports.ReposCreateInOrgRequestBodyMergeCommitTitleEnum = {}));
/**
 * The default value for a squash merge commit message:
 *
 * @remarks
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
var ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum;
(function (ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum) {
    ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum["PrBody"] = "PR_BODY";
    ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum["CommitMessages"] = "COMMIT_MESSAGES";
    ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum["Blank"] = "BLANK";
})(ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum = exports.ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum || (exports.ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum = {}));
/**
 * The default value for a squash merge commit title:
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
var ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum;
(function (ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum) {
    ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum["PrTitle"] = "PR_TITLE";
    ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum["CommitOrPrTitle"] = "COMMIT_OR_PR_TITLE";
})(ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum = exports.ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum || (exports.ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum = {}));
/**
 * The visibility of the repository. **Note**: For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://docs.github.com/enterprise-server@3.5/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.
 *
 * @remarks
 * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
 */
var ReposCreateInOrgRequestBodyVisibilityEnum;
(function (ReposCreateInOrgRequestBodyVisibilityEnum) {
    ReposCreateInOrgRequestBodyVisibilityEnum["Public"] = "public";
    ReposCreateInOrgRequestBodyVisibilityEnum["Private"] = "private";
    ReposCreateInOrgRequestBodyVisibilityEnum["Internal"] = "internal";
})(ReposCreateInOrgRequestBodyVisibilityEnum = exports.ReposCreateInOrgRequestBodyVisibilityEnum || (exports.ReposCreateInOrgRequestBodyVisibilityEnum = {}));
var ReposCreateInOrgRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateInOrgRequestBody, _super);
    function ReposCreateInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_auto_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "allowAutoMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "allowMergeCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "allowRebaseMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "allowSquashMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "auto_init" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "autoInit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "gitignore_template" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "gitignoreTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_downloads" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "hasDownloads", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_issues" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "hasIssues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_projects" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "hasProjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_wiki" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "hasWiki", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "homepage" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is_template" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "isTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "license_template" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "licenseTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merge_commit_message" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "mergeCommitMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merge_commit_title" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "mergeCommitTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "private" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "private", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "squash_merge_commit_message" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "squashMergeCommitMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "squash_merge_commit_title" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "squashMergeCommitTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "team_id" }),
        __metadata("design:type", Number)
    ], ReposCreateInOrgRequestBody.prototype, "teamId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "use_squash_pr_title_as_default" }),
        __metadata("design:type", Boolean)
    ], ReposCreateInOrgRequestBody.prototype, "useSquashPrTitleAsDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "visibility" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequestBody.prototype, "visibility", void 0);
    return ReposCreateInOrgRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposCreateInOrgRequestBody = ReposCreateInOrgRequestBody;
var ReposCreateInOrgRequest = /** @class */ (function (_super) {
    __extends(ReposCreateInOrgRequest, _super);
    function ReposCreateInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateInOrgRequestBody)
    ], ReposCreateInOrgRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReposCreateInOrgRequest.prototype, "org", void 0);
    return ReposCreateInOrgRequest;
}(utils_1.SpeakeasyBase));
exports.ReposCreateInOrgRequest = ReposCreateInOrgRequest;
var ReposCreateInOrgResponse = /** @class */ (function (_super) {
    __extends(ReposCreateInOrgResponse, _super);
    function ReposCreateInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposCreateInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReposCreateInOrgResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposCreateInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReposCreateInOrgResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreateInOrgResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Repository)
    ], ReposCreateInOrgResponse.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateInOrgResponse.prototype, "validationError", void 0);
    return ReposCreateInOrgResponse;
}(utils_1.SpeakeasyBase));
exports.ReposCreateInOrgResponse = ReposCreateInOrgResponse;
