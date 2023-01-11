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
exports.PostNetworksIdActionsAddSubnetResponse = exports.PostNetworksIdActionsAddSubnetRequest = exports.PostNetworksIdActionsAddSubnetActionResponse = exports.PostNetworksIdActionsAddSubnetActionResponseAction = exports.PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum = exports.PostNetworksIdActionsAddSubnetActionResponseActionResources = exports.PostNetworksIdActionsAddSubnetActionResponseActionError = exports.PostNetworksIdActionsAddSubnetAddSubnetRequest = exports.PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum = exports.PostNetworksIdActionsAddSubnetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostNetworksIdActionsAddSubnetPathParams = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetPathParams, _super);
    function PostNetworksIdActionsAddSubnetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddSubnetPathParams.prototype, "id", void 0);
    return PostNetworksIdActionsAddSubnetPathParams;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetPathParams = PostNetworksIdActionsAddSubnetPathParams;
var PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum;
(function (PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum) {
    PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum["Cloud"] = "cloud";
    PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum["Server"] = "server";
    PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum["Vswitch"] = "vswitch";
})(PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum = exports.PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum || (exports.PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum = {}));
var PostNetworksIdActionsAddSubnetAddSubnetRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetAddSubnetRequest, _super);
    function PostNetworksIdActionsAddSubnetAddSubnetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetAddSubnetRequest.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetAddSubnetRequest.prototype, "networkZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetAddSubnetRequest.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vswitch_id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddSubnetAddSubnetRequest.prototype, "vswitchId", void 0);
    return PostNetworksIdActionsAddSubnetAddSubnetRequest;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetAddSubnetRequest = PostNetworksIdActionsAddSubnetAddSubnetRequest;
// PostNetworksIdActionsAddSubnetActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostNetworksIdActionsAddSubnetActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetActionResponseActionError, _super);
    function PostNetworksIdActionsAddSubnetActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetActionResponseActionError.prototype, "message", void 0);
    return PostNetworksIdActionsAddSubnetActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetActionResponseActionError = PostNetworksIdActionsAddSubnetActionResponseActionError;
var PostNetworksIdActionsAddSubnetActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetActionResponseActionResources, _super);
    function PostNetworksIdActionsAddSubnetActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddSubnetActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetActionResponseActionResources.prototype, "type", void 0);
    return PostNetworksIdActionsAddSubnetActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetActionResponseActionResources = PostNetworksIdActionsAddSubnetActionResponseActionResources;
var PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum;
(function (PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum) {
    PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum["Success"] = "success";
    PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum["Running"] = "running";
    PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum["Error"] = "error";
})(PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum = exports.PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum || (exports.PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum = {}));
var PostNetworksIdActionsAddSubnetActionResponseAction = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetActionResponseAction, _super);
    function PostNetworksIdActionsAddSubnetActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostNetworksIdActionsAddSubnetActionResponseActionError)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostNetworksIdActionsAddSubnetActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetActionResponseAction.prototype, "status", void 0);
    return PostNetworksIdActionsAddSubnetActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetActionResponseAction = PostNetworksIdActionsAddSubnetActionResponseAction;
var PostNetworksIdActionsAddSubnetActionResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetActionResponse, _super);
    function PostNetworksIdActionsAddSubnetActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostNetworksIdActionsAddSubnetActionResponseAction)
    ], PostNetworksIdActionsAddSubnetActionResponse.prototype, "action", void 0);
    return PostNetworksIdActionsAddSubnetActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetActionResponse = PostNetworksIdActionsAddSubnetActionResponse;
var PostNetworksIdActionsAddSubnetRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetRequest, _super);
    function PostNetworksIdActionsAddSubnetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostNetworksIdActionsAddSubnetPathParams)
    ], PostNetworksIdActionsAddSubnetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostNetworksIdActionsAddSubnetAddSubnetRequest)
    ], PostNetworksIdActionsAddSubnetRequest.prototype, "request", void 0);
    return PostNetworksIdActionsAddSubnetRequest;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetRequest = PostNetworksIdActionsAddSubnetRequest;
var PostNetworksIdActionsAddSubnetResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddSubnetResponse, _super);
    function PostNetworksIdActionsAddSubnetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostNetworksIdActionsAddSubnetActionResponse)
    ], PostNetworksIdActionsAddSubnetResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddSubnetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddSubnetResponse.prototype, "statusCode", void 0);
    return PostNetworksIdActionsAddSubnetResponse;
}(utils_1.SpeakeasyBase));
exports.PostNetworksIdActionsAddSubnetResponse = PostNetworksIdActionsAddSubnetResponse;
