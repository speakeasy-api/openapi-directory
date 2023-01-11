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
exports.PostServersIdActionsAddToPlacementGroupResponse = exports.PostServersIdActionsAddToPlacementGroupRequest = exports.PostServersIdActionsAddToPlacementGroupActionResponse = exports.PostServersIdActionsAddToPlacementGroupActionResponseAction = exports.PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum = exports.PostServersIdActionsAddToPlacementGroupActionResponseActionResources = exports.PostServersIdActionsAddToPlacementGroupActionResponseActionError = exports.PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest = exports.PostServersIdActionsAddToPlacementGroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostServersIdActionsAddToPlacementGroupPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupPathParams, _super);
    function PostServersIdActionsAddToPlacementGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAddToPlacementGroupPathParams.prototype, "id", void 0);
    return PostServersIdActionsAddToPlacementGroupPathParams;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupPathParams = PostServersIdActionsAddToPlacementGroupPathParams;
var PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest, _super);
    function PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placement_group" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest.prototype, "placementGroup", void 0);
    return PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest = PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest;
// PostServersIdActionsAddToPlacementGroupActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsAddToPlacementGroupActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupActionResponseActionError, _super);
    function PostServersIdActionsAddToPlacementGroupActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsAddToPlacementGroupActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupActionResponseActionError = PostServersIdActionsAddToPlacementGroupActionResponseActionError;
var PostServersIdActionsAddToPlacementGroupActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupActionResponseActionResources, _super);
    function PostServersIdActionsAddToPlacementGroupActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAddToPlacementGroupActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsAddToPlacementGroupActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupActionResponseActionResources = PostServersIdActionsAddToPlacementGroupActionResponseActionResources;
var PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum;
(function (PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum) {
    PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum = exports.PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum || (exports.PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum = {}));
var PostServersIdActionsAddToPlacementGroupActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupActionResponseAction, _super);
    function PostServersIdActionsAddToPlacementGroupActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsAddToPlacementGroupActionResponseActionError)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostServersIdActionsAddToPlacementGroupActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsAddToPlacementGroupActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupActionResponseAction = PostServersIdActionsAddToPlacementGroupActionResponseAction;
var PostServersIdActionsAddToPlacementGroupActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupActionResponse, _super);
    function PostServersIdActionsAddToPlacementGroupActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsAddToPlacementGroupActionResponseAction)
    ], PostServersIdActionsAddToPlacementGroupActionResponse.prototype, "action", void 0);
    return PostServersIdActionsAddToPlacementGroupActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupActionResponse = PostServersIdActionsAddToPlacementGroupActionResponse;
var PostServersIdActionsAddToPlacementGroupRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupRequest, _super);
    function PostServersIdActionsAddToPlacementGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsAddToPlacementGroupPathParams)
    ], PostServersIdActionsAddToPlacementGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest)
    ], PostServersIdActionsAddToPlacementGroupRequest.prototype, "request", void 0);
    return PostServersIdActionsAddToPlacementGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupRequest = PostServersIdActionsAddToPlacementGroupRequest;
var PostServersIdActionsAddToPlacementGroupResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAddToPlacementGroupResponse, _super);
    function PostServersIdActionsAddToPlacementGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsAddToPlacementGroupActionResponse)
    ], PostServersIdActionsAddToPlacementGroupResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostServersIdActionsAddToPlacementGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostServersIdActionsAddToPlacementGroupResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsAddToPlacementGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsAddToPlacementGroupResponse = PostServersIdActionsAddToPlacementGroupResponse;
