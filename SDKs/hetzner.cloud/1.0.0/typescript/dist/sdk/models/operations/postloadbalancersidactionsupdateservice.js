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
exports.PostLoadBalancersIdActionsUpdateServiceResponse = exports.PostLoadBalancersIdActionsUpdateServiceRequest = exports.PostLoadBalancersIdActionsUpdateServiceActionResponse = exports.PostLoadBalancersIdActionsUpdateServiceActionResponseAction = exports.PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum = exports.PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources = exports.PostLoadBalancersIdActionsUpdateServiceActionResponseActionError = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerService = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = exports.PostLoadBalancersIdActionsUpdateServicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostLoadBalancersIdActionsUpdateServicePathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServicePathParams, _super);
    function PostLoadBalancersIdActionsUpdateServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServicePathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsUpdateServicePathParams;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServicePathParams = PostLoadBalancersIdActionsUpdateServicePathParams;
// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/**
 * Additional configuration for protocol http
**/
var PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp, _super);
    function PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "response", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_codes" }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "statusCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tls" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "tls", void 0);
    return PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
var PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
(function (PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum) {
    PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Http"] = "http";
})(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum || (exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = {}));
// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
/**
 * Service health check
**/
var PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck, _super);
    function PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "http", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "interval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "retries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "timeout", void 0);
    return PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp
/**
 * Configuration option for protocols http and https
**/
var PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp, _super);
    function PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp.prototype, "certificates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_lifetime" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp.prototype, "cookieLifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp.prototype, "cookieName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_http" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp.prototype, "redirectHttp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp.prototype, "stickySessions", void 0);
    return PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp = PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp;
var PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum;
(function (PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum) {
    PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum["Http"] = "http";
    PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum["Https"] = "https";
})(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum = exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum || (exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum = {}));
var PostLoadBalancersIdActionsUpdateServiceLoadBalancerService = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceLoadBalancerService, _super);
    function PostLoadBalancersIdActionsUpdateServiceLoadBalancerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerService.prototype, "destinationPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health_check" }),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerService.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerService.prototype, "http", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerService.prototype, "listenPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerService.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxyprotocol" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsUpdateServiceLoadBalancerService.prototype, "proxyprotocol", void 0);
    return PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceLoadBalancerService = PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
// PostLoadBalancersIdActionsUpdateServiceActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsUpdateServiceActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceActionResponseActionError, _super);
    function PostLoadBalancersIdActionsUpdateServiceActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsUpdateServiceActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceActionResponseActionError = PostLoadBalancersIdActionsUpdateServiceActionResponseActionError;
var PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources = PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources;
var PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum = exports.PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum || (exports.PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsUpdateServiceActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceActionResponseAction, _super);
    function PostLoadBalancersIdActionsUpdateServiceActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServiceActionResponseActionError)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsUpdateServiceActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceActionResponseAction = PostLoadBalancersIdActionsUpdateServiceActionResponseAction;
var PostLoadBalancersIdActionsUpdateServiceActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceActionResponse, _super);
    function PostLoadBalancersIdActionsUpdateServiceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServiceActionResponseAction)
    ], PostLoadBalancersIdActionsUpdateServiceActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsUpdateServiceActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceActionResponse = PostLoadBalancersIdActionsUpdateServiceActionResponse;
var PostLoadBalancersIdActionsUpdateServiceRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceRequest, _super);
    function PostLoadBalancersIdActionsUpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServicePathParams)
    ], PostLoadBalancersIdActionsUpdateServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServiceLoadBalancerService)
    ], PostLoadBalancersIdActionsUpdateServiceRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsUpdateServiceRequest;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceRequest = PostLoadBalancersIdActionsUpdateServiceRequest;
var PostLoadBalancersIdActionsUpdateServiceResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsUpdateServiceResponse, _super);
    function PostLoadBalancersIdActionsUpdateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostLoadBalancersIdActionsUpdateServiceActionResponse)
    ], PostLoadBalancersIdActionsUpdateServiceResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsUpdateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsUpdateServiceResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsUpdateServiceResponse;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsUpdateServiceResponse = PostLoadBalancersIdActionsUpdateServiceResponse;
