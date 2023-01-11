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
exports.PostServersIdActionsPoweroffResponse = exports.PostServersIdActionsPoweroffRequest = exports.PostServersIdActionsPoweroffActionResponse = exports.PostServersIdActionsPoweroffActionResponseAction = exports.PostServersIdActionsPoweroffActionResponseActionStatusEnum = exports.PostServersIdActionsPoweroffActionResponseActionResources = exports.PostServersIdActionsPoweroffActionResponseActionError = exports.PostServersIdActionsPoweroffPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostServersIdActionsPoweroffPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweroffPathParams, _super);
    function PostServersIdActionsPoweroffPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweroffPathParams.prototype, "id", void 0);
    return PostServersIdActionsPoweroffPathParams;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsPoweroffPathParams = PostServersIdActionsPoweroffPathParams;
// PostServersIdActionsPoweroffActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsPoweroffActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweroffActionResponseActionError, _super);
    function PostServersIdActionsPoweroffActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsPoweroffActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsPoweroffActionResponseActionError = PostServersIdActionsPoweroffActionResponseActionError;
var PostServersIdActionsPoweroffActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweroffActionResponseActionResources, _super);
    function PostServersIdActionsPoweroffActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweroffActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsPoweroffActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsPoweroffActionResponseActionResources = PostServersIdActionsPoweroffActionResponseActionResources;
var PostServersIdActionsPoweroffActionResponseActionStatusEnum;
(function (PostServersIdActionsPoweroffActionResponseActionStatusEnum) {
    PostServersIdActionsPoweroffActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsPoweroffActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsPoweroffActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsPoweroffActionResponseActionStatusEnum = exports.PostServersIdActionsPoweroffActionResponseActionStatusEnum || (exports.PostServersIdActionsPoweroffActionResponseActionStatusEnum = {}));
var PostServersIdActionsPoweroffActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweroffActionResponseAction, _super);
    function PostServersIdActionsPoweroffActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsPoweroffActionResponseActionError)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostServersIdActionsPoweroffActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsPoweroffActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsPoweroffActionResponseAction = PostServersIdActionsPoweroffActionResponseAction;
var PostServersIdActionsPoweroffActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweroffActionResponse, _super);
    function PostServersIdActionsPoweroffActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsPoweroffActionResponseAction)
    ], PostServersIdActionsPoweroffActionResponse.prototype, "action", void 0);
    return PostServersIdActionsPoweroffActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsPoweroffActionResponse = PostServersIdActionsPoweroffActionResponse;
var PostServersIdActionsPoweroffRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweroffRequest, _super);
    function PostServersIdActionsPoweroffRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsPoweroffPathParams)
    ], PostServersIdActionsPoweroffRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsPoweroffRequest;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsPoweroffRequest = PostServersIdActionsPoweroffRequest;
var PostServersIdActionsPoweroffResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweroffResponse, _super);
    function PostServersIdActionsPoweroffResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsPoweroffActionResponse)
    ], PostServersIdActionsPoweroffResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweroffResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweroffResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsPoweroffResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsPoweroffResponse = PostServersIdActionsPoweroffResponse;
