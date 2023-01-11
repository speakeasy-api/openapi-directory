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
exports.PostCertificatesIdActionsRetryResponse = exports.PostCertificatesIdActionsRetryRequest = exports.PostCertificatesIdActionsRetryActionResponse = exports.PostCertificatesIdActionsRetryActionResponseAction = exports.PostCertificatesIdActionsRetryActionResponseActionStatusEnum = exports.PostCertificatesIdActionsRetryActionResponseActionResources = exports.PostCertificatesIdActionsRetryActionResponseActionError = exports.PostCertificatesIdActionsRetryPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostCertificatesIdActionsRetryPathParams = /** @class */ (function (_super) {
    __extends(PostCertificatesIdActionsRetryPathParams, _super);
    function PostCertificatesIdActionsRetryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostCertificatesIdActionsRetryPathParams.prototype, "id", void 0);
    return PostCertificatesIdActionsRetryPathParams;
}(utils_1.SpeakeasyBase));
exports.PostCertificatesIdActionsRetryPathParams = PostCertificatesIdActionsRetryPathParams;
// PostCertificatesIdActionsRetryActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostCertificatesIdActionsRetryActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostCertificatesIdActionsRetryActionResponseActionError, _super);
    function PostCertificatesIdActionsRetryActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryActionResponseActionError.prototype, "message", void 0);
    return PostCertificatesIdActionsRetryActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostCertificatesIdActionsRetryActionResponseActionError = PostCertificatesIdActionsRetryActionResponseActionError;
var PostCertificatesIdActionsRetryActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostCertificatesIdActionsRetryActionResponseActionResources, _super);
    function PostCertificatesIdActionsRetryActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostCertificatesIdActionsRetryActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryActionResponseActionResources.prototype, "type", void 0);
    return PostCertificatesIdActionsRetryActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostCertificatesIdActionsRetryActionResponseActionResources = PostCertificatesIdActionsRetryActionResponseActionResources;
var PostCertificatesIdActionsRetryActionResponseActionStatusEnum;
(function (PostCertificatesIdActionsRetryActionResponseActionStatusEnum) {
    PostCertificatesIdActionsRetryActionResponseActionStatusEnum["Success"] = "success";
    PostCertificatesIdActionsRetryActionResponseActionStatusEnum["Running"] = "running";
    PostCertificatesIdActionsRetryActionResponseActionStatusEnum["Error"] = "error";
})(PostCertificatesIdActionsRetryActionResponseActionStatusEnum = exports.PostCertificatesIdActionsRetryActionResponseActionStatusEnum || (exports.PostCertificatesIdActionsRetryActionResponseActionStatusEnum = {}));
var PostCertificatesIdActionsRetryActionResponseAction = /** @class */ (function (_super) {
    __extends(PostCertificatesIdActionsRetryActionResponseAction, _super);
    function PostCertificatesIdActionsRetryActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostCertificatesIdActionsRetryActionResponseActionError)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostCertificatesIdActionsRetryActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryActionResponseAction.prototype, "status", void 0);
    return PostCertificatesIdActionsRetryActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostCertificatesIdActionsRetryActionResponseAction = PostCertificatesIdActionsRetryActionResponseAction;
var PostCertificatesIdActionsRetryActionResponse = /** @class */ (function (_super) {
    __extends(PostCertificatesIdActionsRetryActionResponse, _super);
    function PostCertificatesIdActionsRetryActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostCertificatesIdActionsRetryActionResponseAction)
    ], PostCertificatesIdActionsRetryActionResponse.prototype, "action", void 0);
    return PostCertificatesIdActionsRetryActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostCertificatesIdActionsRetryActionResponse = PostCertificatesIdActionsRetryActionResponse;
var PostCertificatesIdActionsRetryRequest = /** @class */ (function (_super) {
    __extends(PostCertificatesIdActionsRetryRequest, _super);
    function PostCertificatesIdActionsRetryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCertificatesIdActionsRetryPathParams)
    ], PostCertificatesIdActionsRetryRequest.prototype, "pathParams", void 0);
    return PostCertificatesIdActionsRetryRequest;
}(utils_1.SpeakeasyBase));
exports.PostCertificatesIdActionsRetryRequest = PostCertificatesIdActionsRetryRequest;
var PostCertificatesIdActionsRetryResponse = /** @class */ (function (_super) {
    __extends(PostCertificatesIdActionsRetryResponse, _super);
    function PostCertificatesIdActionsRetryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCertificatesIdActionsRetryActionResponse)
    ], PostCertificatesIdActionsRetryResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCertificatesIdActionsRetryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCertificatesIdActionsRetryResponse.prototype, "statusCode", void 0);
    return PostCertificatesIdActionsRetryResponse;
}(utils_1.SpeakeasyBase));
exports.PostCertificatesIdActionsRetryResponse = PostCertificatesIdActionsRetryResponse;
