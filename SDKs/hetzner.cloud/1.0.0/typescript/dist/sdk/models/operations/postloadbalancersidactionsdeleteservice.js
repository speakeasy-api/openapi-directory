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
exports.PostLoadBalancersIdActionsDeleteServiceResponse = exports.PostLoadBalancersIdActionsDeleteServiceRequest = exports.PostLoadBalancersIdActionsDeleteServiceActionResponse = exports.PostLoadBalancersIdActionsDeleteServiceActionResponseAction = exports.PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum = exports.PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources = exports.PostLoadBalancersIdActionsDeleteServiceActionResponseActionError = exports.PostLoadBalancersIdActionsDeleteServiceRequestBody = exports.PostLoadBalancersIdActionsDeleteServicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostLoadBalancersIdActionsDeleteServicePathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServicePathParams, _super);
    function PostLoadBalancersIdActionsDeleteServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDeleteServicePathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsDeleteServicePathParams;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServicePathParams = PostLoadBalancersIdActionsDeleteServicePathParams;
var PostLoadBalancersIdActionsDeleteServiceRequestBody = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServiceRequestBody, _super);
    function PostLoadBalancersIdActionsDeleteServiceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDeleteServiceRequestBody.prototype, "listenPort", void 0);
    return PostLoadBalancersIdActionsDeleteServiceRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServiceRequestBody = PostLoadBalancersIdActionsDeleteServiceRequestBody;
// PostLoadBalancersIdActionsDeleteServiceActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsDeleteServiceActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServiceActionResponseActionError, _super);
    function PostLoadBalancersIdActionsDeleteServiceActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsDeleteServiceActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServiceActionResponseActionError = PostLoadBalancersIdActionsDeleteServiceActionResponseActionError;
var PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources = PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources;
var PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum = exports.PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum || (exports.PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsDeleteServiceActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServiceActionResponseAction, _super);
    function PostLoadBalancersIdActionsDeleteServiceActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsDeleteServiceActionResponseActionError)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsDeleteServiceActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServiceActionResponseAction = PostLoadBalancersIdActionsDeleteServiceActionResponseAction;
var PostLoadBalancersIdActionsDeleteServiceActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServiceActionResponse, _super);
    function PostLoadBalancersIdActionsDeleteServiceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsDeleteServiceActionResponseAction)
    ], PostLoadBalancersIdActionsDeleteServiceActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsDeleteServiceActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServiceActionResponse = PostLoadBalancersIdActionsDeleteServiceActionResponse;
var PostLoadBalancersIdActionsDeleteServiceRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServiceRequest, _super);
    function PostLoadBalancersIdActionsDeleteServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostLoadBalancersIdActionsDeleteServicePathParams)
    ], PostLoadBalancersIdActionsDeleteServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsDeleteServiceRequestBody)
    ], PostLoadBalancersIdActionsDeleteServiceRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsDeleteServiceRequest;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServiceRequest = PostLoadBalancersIdActionsDeleteServiceRequest;
var PostLoadBalancersIdActionsDeleteServiceResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDeleteServiceResponse, _super);
    function PostLoadBalancersIdActionsDeleteServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostLoadBalancersIdActionsDeleteServiceActionResponse)
    ], PostLoadBalancersIdActionsDeleteServiceResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDeleteServiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDeleteServiceResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsDeleteServiceResponse;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsDeleteServiceResponse = PostLoadBalancersIdActionsDeleteServiceResponse;
