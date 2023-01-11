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
exports.PostServersIdActionsDetachFromNetworkResponse = exports.PostServersIdActionsDetachFromNetworkRequest = exports.PostServersIdActionsDetachFromNetworkActionResponse = exports.PostServersIdActionsDetachFromNetworkActionResponseAction = exports.PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum = exports.PostServersIdActionsDetachFromNetworkActionResponseActionResources = exports.PostServersIdActionsDetachFromNetworkActionResponseActionError = exports.PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest = exports.PostServersIdActionsDetachFromNetworkPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostServersIdActionsDetachFromNetworkPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkPathParams, _super);
    function PostServersIdActionsDetachFromNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachFromNetworkPathParams.prototype, "id", void 0);
    return PostServersIdActionsDetachFromNetworkPathParams;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkPathParams = PostServersIdActionsDetachFromNetworkPathParams;
var PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest, _super);
    function PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest.prototype, "network", void 0);
    return PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest = PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest;
// PostServersIdActionsDetachFromNetworkActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsDetachFromNetworkActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkActionResponseActionError, _super);
    function PostServersIdActionsDetachFromNetworkActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsDetachFromNetworkActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkActionResponseActionError = PostServersIdActionsDetachFromNetworkActionResponseActionError;
var PostServersIdActionsDetachFromNetworkActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkActionResponseActionResources, _super);
    function PostServersIdActionsDetachFromNetworkActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachFromNetworkActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsDetachFromNetworkActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkActionResponseActionResources = PostServersIdActionsDetachFromNetworkActionResponseActionResources;
var PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
(function (PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum) {
    PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum = exports.PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum || (exports.PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum = {}));
var PostServersIdActionsDetachFromNetworkActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkActionResponseAction, _super);
    function PostServersIdActionsDetachFromNetworkActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsDetachFromNetworkActionResponseActionError)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostServersIdActionsDetachFromNetworkActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsDetachFromNetworkActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkActionResponseAction = PostServersIdActionsDetachFromNetworkActionResponseAction;
var PostServersIdActionsDetachFromNetworkActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkActionResponse, _super);
    function PostServersIdActionsDetachFromNetworkActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsDetachFromNetworkActionResponseAction)
    ], PostServersIdActionsDetachFromNetworkActionResponse.prototype, "action", void 0);
    return PostServersIdActionsDetachFromNetworkActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkActionResponse = PostServersIdActionsDetachFromNetworkActionResponse;
var PostServersIdActionsDetachFromNetworkRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkRequest, _super);
    function PostServersIdActionsDetachFromNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsDetachFromNetworkPathParams)
    ], PostServersIdActionsDetachFromNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest)
    ], PostServersIdActionsDetachFromNetworkRequest.prototype, "request", void 0);
    return PostServersIdActionsDetachFromNetworkRequest;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkRequest = PostServersIdActionsDetachFromNetworkRequest;
var PostServersIdActionsDetachFromNetworkResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachFromNetworkResponse, _super);
    function PostServersIdActionsDetachFromNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsDetachFromNetworkActionResponse)
    ], PostServersIdActionsDetachFromNetworkResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachFromNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachFromNetworkResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsDetachFromNetworkResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachFromNetworkResponse = PostServersIdActionsDetachFromNetworkResponse;
