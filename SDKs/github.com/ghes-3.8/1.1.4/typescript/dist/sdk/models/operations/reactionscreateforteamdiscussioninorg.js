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
exports.ReactionsCreateForTeamDiscussionInOrgResponse = exports.ReactionsCreateForTeamDiscussionInOrgRequest = exports.ReactionsCreateForTeamDiscussionInOrgRequestBody = exports.ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * The [reaction type](https://docs.github.com/enterprise-server@3.8/rest/reference/reactions#reaction-types) to add to the team discussion.
 */
var ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;
(function (ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum) {
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = exports.ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum || (exports.ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = {}));
var ReactionsCreateForTeamDiscussionInOrgRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionInOrgRequestBody, _super);
    function ReactionsCreateForTeamDiscussionInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgRequestBody.prototype, "content", void 0);
    return ReactionsCreateForTeamDiscussionInOrgRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForTeamDiscussionInOrgRequestBody = ReactionsCreateForTeamDiscussionInOrgRequestBody;
var ReactionsCreateForTeamDiscussionInOrgRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionInOrgRequest, _super);
    function ReactionsCreateForTeamDiscussionInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForTeamDiscussionInOrgRequestBody)
    ], ReactionsCreateForTeamDiscussionInOrgRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=discussion_number",
        }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionInOrgRequest.prototype, "discussionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgRequest.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=team_slug",
        }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgRequest.prototype, "teamSlug", void 0);
    return ReactionsCreateForTeamDiscussionInOrgRequest;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForTeamDiscussionInOrgRequest = ReactionsCreateForTeamDiscussionInOrgRequest;
var ReactionsCreateForTeamDiscussionInOrgResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionInOrgResponse, _super);
    function ReactionsCreateForTeamDiscussionInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReactionsCreateForTeamDiscussionInOrgResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForTeamDiscussionInOrgResponse.prototype, "reaction", void 0);
    return ReactionsCreateForTeamDiscussionInOrgResponse;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForTeamDiscussionInOrgResponse = ReactionsCreateForTeamDiscussionInOrgResponse;
