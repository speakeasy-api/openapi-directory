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
exports.PostVolumesIdActionsChangeProtectionResponse = exports.PostVolumesIdActionsChangeProtectionRequest = exports.PostVolumesIdActionsChangeProtectionActionResponse = exports.PostVolumesIdActionsChangeProtectionActionResponseAction = exports.PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum = exports.PostVolumesIdActionsChangeProtectionActionResponseActionResources = exports.PostVolumesIdActionsChangeProtectionActionResponseActionError = exports.PostVolumesIdActionsChangeProtectionRequestBody = exports.PostVolumesIdActionsChangeProtectionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostVolumesIdActionsChangeProtectionPathParams = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionPathParams, _super);
    function PostVolumesIdActionsChangeProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsChangeProtectionPathParams.prototype, "id", void 0);
    return PostVolumesIdActionsChangeProtectionPathParams;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionPathParams = PostVolumesIdActionsChangeProtectionPathParams;
var PostVolumesIdActionsChangeProtectionRequestBody = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionRequestBody, _super);
    function PostVolumesIdActionsChangeProtectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostVolumesIdActionsChangeProtectionRequestBody.prototype, "delete", void 0);
    return PostVolumesIdActionsChangeProtectionRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionRequestBody = PostVolumesIdActionsChangeProtectionRequestBody;
// PostVolumesIdActionsChangeProtectionActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostVolumesIdActionsChangeProtectionActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionActionResponseActionError, _super);
    function PostVolumesIdActionsChangeProtectionActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionActionResponseActionError.prototype, "message", void 0);
    return PostVolumesIdActionsChangeProtectionActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionActionResponseActionError = PostVolumesIdActionsChangeProtectionActionResponseActionError;
var PostVolumesIdActionsChangeProtectionActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionActionResponseActionResources, _super);
    function PostVolumesIdActionsChangeProtectionActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsChangeProtectionActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionActionResponseActionResources.prototype, "type", void 0);
    return PostVolumesIdActionsChangeProtectionActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionActionResponseActionResources = PostVolumesIdActionsChangeProtectionActionResponseActionResources;
var PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum;
(function (PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum) {
    PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum["Success"] = "success";
    PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum["Running"] = "running";
    PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum["Error"] = "error";
})(PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum = exports.PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum || (exports.PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum = {}));
var PostVolumesIdActionsChangeProtectionActionResponseAction = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionActionResponseAction, _super);
    function PostVolumesIdActionsChangeProtectionActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostVolumesIdActionsChangeProtectionActionResponseActionError)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostVolumesIdActionsChangeProtectionActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionActionResponseAction.prototype, "status", void 0);
    return PostVolumesIdActionsChangeProtectionActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionActionResponseAction = PostVolumesIdActionsChangeProtectionActionResponseAction;
var PostVolumesIdActionsChangeProtectionActionResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionActionResponse, _super);
    function PostVolumesIdActionsChangeProtectionActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostVolumesIdActionsChangeProtectionActionResponseAction)
    ], PostVolumesIdActionsChangeProtectionActionResponse.prototype, "action", void 0);
    return PostVolumesIdActionsChangeProtectionActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionActionResponse = PostVolumesIdActionsChangeProtectionActionResponse;
var PostVolumesIdActionsChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionRequest, _super);
    function PostVolumesIdActionsChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostVolumesIdActionsChangeProtectionPathParams)
    ], PostVolumesIdActionsChangeProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostVolumesIdActionsChangeProtectionRequestBody)
    ], PostVolumesIdActionsChangeProtectionRequest.prototype, "request", void 0);
    return PostVolumesIdActionsChangeProtectionRequest;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionRequest = PostVolumesIdActionsChangeProtectionRequest;
var PostVolumesIdActionsChangeProtectionResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsChangeProtectionResponse, _super);
    function PostVolumesIdActionsChangeProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostVolumesIdActionsChangeProtectionActionResponse)
    ], PostVolumesIdActionsChangeProtectionResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostVolumesIdActionsChangeProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsChangeProtectionResponse.prototype, "statusCode", void 0);
    return PostVolumesIdActionsChangeProtectionResponse;
}(utils_1.SpeakeasyBase));
exports.PostVolumesIdActionsChangeProtectionResponse = PostVolumesIdActionsChangeProtectionResponse;
