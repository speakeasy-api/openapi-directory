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
exports.ReactionsDeleteForTeamDiscussionResponse = exports.ReactionsDeleteForTeamDiscussionRequest = exports.ReactionsDeleteForTeamDiscussionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ReactionsDeleteForTeamDiscussionPathParams = /** @class */ (function (_super) {
    __extends(ReactionsDeleteForTeamDiscussionPathParams, _super);
    function ReactionsDeleteForTeamDiscussionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsDeleteForTeamDiscussionPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReactionsDeleteForTeamDiscussionPathParams.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=reaction_id" }),
        __metadata("design:type", Number)
    ], ReactionsDeleteForTeamDiscussionPathParams.prototype, "reactionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], ReactionsDeleteForTeamDiscussionPathParams.prototype, "teamSlug", void 0);
    return ReactionsDeleteForTeamDiscussionPathParams;
}(utils_1.SpeakeasyBase));
exports.ReactionsDeleteForTeamDiscussionPathParams = ReactionsDeleteForTeamDiscussionPathParams;
var ReactionsDeleteForTeamDiscussionRequest = /** @class */ (function (_super) {
    __extends(ReactionsDeleteForTeamDiscussionRequest, _super);
    function ReactionsDeleteForTeamDiscussionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReactionsDeleteForTeamDiscussionPathParams)
    ], ReactionsDeleteForTeamDiscussionRequest.prototype, "pathParams", void 0);
    return ReactionsDeleteForTeamDiscussionRequest;
}(utils_1.SpeakeasyBase));
exports.ReactionsDeleteForTeamDiscussionRequest = ReactionsDeleteForTeamDiscussionRequest;
var ReactionsDeleteForTeamDiscussionResponse = /** @class */ (function (_super) {
    __extends(ReactionsDeleteForTeamDiscussionResponse, _super);
    function ReactionsDeleteForTeamDiscussionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReactionsDeleteForTeamDiscussionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReactionsDeleteForTeamDiscussionResponse.prototype, "statusCode", void 0);
    return ReactionsDeleteForTeamDiscussionResponse;
}(utils_1.SpeakeasyBase));
exports.ReactionsDeleteForTeamDiscussionResponse = ReactionsDeleteForTeamDiscussionResponse;
