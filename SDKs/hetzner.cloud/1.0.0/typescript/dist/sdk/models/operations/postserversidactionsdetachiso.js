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
exports.PostServersIdActionsDetachIsoResponse = exports.PostServersIdActionsDetachIsoRequest = exports.PostServersIdActionsDetachIsoActionResponse = exports.PostServersIdActionsDetachIsoActionResponseAction = exports.PostServersIdActionsDetachIsoActionResponseActionStatusEnum = exports.PostServersIdActionsDetachIsoActionResponseActionResources = exports.PostServersIdActionsDetachIsoActionResponseActionError = exports.PostServersIdActionsDetachIsoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostServersIdActionsDetachIsoPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachIsoPathParams, _super);
    function PostServersIdActionsDetachIsoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachIsoPathParams.prototype, "id", void 0);
    return PostServersIdActionsDetachIsoPathParams;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachIsoPathParams = PostServersIdActionsDetachIsoPathParams;
// PostServersIdActionsDetachIsoActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsDetachIsoActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachIsoActionResponseActionError, _super);
    function PostServersIdActionsDetachIsoActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsDetachIsoActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachIsoActionResponseActionError = PostServersIdActionsDetachIsoActionResponseActionError;
var PostServersIdActionsDetachIsoActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachIsoActionResponseActionResources, _super);
    function PostServersIdActionsDetachIsoActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachIsoActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsDetachIsoActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachIsoActionResponseActionResources = PostServersIdActionsDetachIsoActionResponseActionResources;
var PostServersIdActionsDetachIsoActionResponseActionStatusEnum;
(function (PostServersIdActionsDetachIsoActionResponseActionStatusEnum) {
    PostServersIdActionsDetachIsoActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsDetachIsoActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsDetachIsoActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsDetachIsoActionResponseActionStatusEnum = exports.PostServersIdActionsDetachIsoActionResponseActionStatusEnum || (exports.PostServersIdActionsDetachIsoActionResponseActionStatusEnum = {}));
var PostServersIdActionsDetachIsoActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachIsoActionResponseAction, _super);
    function PostServersIdActionsDetachIsoActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsDetachIsoActionResponseActionError)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostServersIdActionsDetachIsoActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsDetachIsoActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachIsoActionResponseAction = PostServersIdActionsDetachIsoActionResponseAction;
var PostServersIdActionsDetachIsoActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachIsoActionResponse, _super);
    function PostServersIdActionsDetachIsoActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsDetachIsoActionResponseAction)
    ], PostServersIdActionsDetachIsoActionResponse.prototype, "action", void 0);
    return PostServersIdActionsDetachIsoActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachIsoActionResponse = PostServersIdActionsDetachIsoActionResponse;
var PostServersIdActionsDetachIsoRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachIsoRequest, _super);
    function PostServersIdActionsDetachIsoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsDetachIsoPathParams)
    ], PostServersIdActionsDetachIsoRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsDetachIsoRequest;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachIsoRequest = PostServersIdActionsDetachIsoRequest;
var PostServersIdActionsDetachIsoResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDetachIsoResponse, _super);
    function PostServersIdActionsDetachIsoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostServersIdActionsDetachIsoActionResponse)
    ], PostServersIdActionsDetachIsoResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostServersIdActionsDetachIsoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostServersIdActionsDetachIsoResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsDetachIsoResponse;
}(utils_1.SpeakeasyBase));
exports.PostServersIdActionsDetachIsoResponse = PostServersIdActionsDetachIsoResponse;
