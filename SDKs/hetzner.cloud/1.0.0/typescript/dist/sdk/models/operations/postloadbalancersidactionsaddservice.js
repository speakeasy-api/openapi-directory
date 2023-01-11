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
exports.PostLoadBalancersIdActionsAddServiceResponse = exports.PostLoadBalancersIdActionsAddServiceRequest = exports.PostLoadBalancersIdActionsAddServiceActionResponse = exports.PostLoadBalancersIdActionsAddServiceActionResponseAction = exports.PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum = exports.PostLoadBalancersIdActionsAddServiceActionResponseActionResources = exports.PostLoadBalancersIdActionsAddServiceActionResponseActionError = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerService = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = exports.PostLoadBalancersIdActionsAddServicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostLoadBalancersIdActionsAddServicePathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServicePathParams, _super);
    function PostLoadBalancersIdActionsAddServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServicePathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsAddServicePathParams;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServicePathParams = PostLoadBalancersIdActionsAddServicePathParams;
// PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/**
 * Additional configuration for protocol http
**/
var PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp, _super);
    function PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "response", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_codes" }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "statusCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tls" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "tls", void 0);
    return PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
var PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
(function (PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum) {
    PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Http"] = "http";
})(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum || (exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = {}));
// PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
/**
 * Service health check
**/
var PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck, _super);
    function PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "http", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "interval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "retries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "timeout", void 0);
    return PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck = PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
// PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp
/**
 * Configuration option for protocols http and https
**/
var PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp, _super);
    function PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp.prototype, "certificates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_lifetime" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp.prototype, "cookieLifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp.prototype, "cookieName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_http" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp.prototype, "redirectHttp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp.prototype, "stickySessions", void 0);
    return PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp = PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp;
var PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum;
(function (PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum) {
    PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum["Http"] = "http";
    PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum["Https"] = "https";
})(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum = exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum || (exports.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum = {}));
var PostLoadBalancersIdActionsAddServiceLoadBalancerService = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceLoadBalancerService, _super);
    function PostLoadBalancersIdActionsAddServiceLoadBalancerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerService.prototype, "destinationPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health_check" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerService.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerService.prototype, "http", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerService.prototype, "listenPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerService.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxyprotocol" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsAddServiceLoadBalancerService.prototype, "proxyprotocol", void 0);
    return PostLoadBalancersIdActionsAddServiceLoadBalancerService;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceLoadBalancerService = PostLoadBalancersIdActionsAddServiceLoadBalancerService;
// PostLoadBalancersIdActionsAddServiceActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsAddServiceActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceActionResponseActionError, _super);
    function PostLoadBalancersIdActionsAddServiceActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceActionResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsAddServiceActionResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceActionResponseActionError = PostLoadBalancersIdActionsAddServiceActionResponseActionError;
var PostLoadBalancersIdActionsAddServiceActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsAddServiceActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsAddServiceActionResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceActionResponseActionResources = PostLoadBalancersIdActionsAddServiceActionResponseActionResources;
var PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum = exports.PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum || (exports.PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsAddServiceActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceActionResponseAction, _super);
    function PostLoadBalancersIdActionsAddServiceActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddServiceActionResponseActionError)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsAddServiceActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsAddServiceActionResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceActionResponseAction = PostLoadBalancersIdActionsAddServiceActionResponseAction;
var PostLoadBalancersIdActionsAddServiceActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceActionResponse, _super);
    function PostLoadBalancersIdActionsAddServiceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddServiceActionResponseAction)
    ], PostLoadBalancersIdActionsAddServiceActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsAddServiceActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceActionResponse = PostLoadBalancersIdActionsAddServiceActionResponse;
var PostLoadBalancersIdActionsAddServiceRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceRequest, _super);
    function PostLoadBalancersIdActionsAddServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostLoadBalancersIdActionsAddServicePathParams)
    ], PostLoadBalancersIdActionsAddServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddServiceLoadBalancerService)
    ], PostLoadBalancersIdActionsAddServiceRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsAddServiceRequest;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceRequest = PostLoadBalancersIdActionsAddServiceRequest;
var PostLoadBalancersIdActionsAddServiceResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddServiceResponse, _super);
    function PostLoadBalancersIdActionsAddServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostLoadBalancersIdActionsAddServiceActionResponse)
    ], PostLoadBalancersIdActionsAddServiceResponse.prototype, "actionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddServiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddServiceResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsAddServiceResponse;
}(utils_1.SpeakeasyBase));
exports.PostLoadBalancersIdActionsAddServiceResponse = PostLoadBalancersIdActionsAddServiceResponse;
