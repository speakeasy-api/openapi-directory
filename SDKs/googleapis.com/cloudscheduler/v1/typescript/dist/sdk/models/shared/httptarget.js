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
exports.HttpTarget = exports.HttpTargetHttpMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var oauthtoken_1 = require("./oauthtoken");
var oidctoken_1 = require("./oidctoken");
var HttpTargetHttpMethodEnum;
(function (HttpTargetHttpMethodEnum) {
    HttpTargetHttpMethodEnum["HttpMethodUnspecified"] = "HTTP_METHOD_UNSPECIFIED";
    HttpTargetHttpMethodEnum["Post"] = "POST";
    HttpTargetHttpMethodEnum["Get"] = "GET";
    HttpTargetHttpMethodEnum["Head"] = "HEAD";
    HttpTargetHttpMethodEnum["Put"] = "PUT";
    HttpTargetHttpMethodEnum["Delete"] = "DELETE";
    HttpTargetHttpMethodEnum["Patch"] = "PATCH";
    HttpTargetHttpMethodEnum["Options"] = "OPTIONS";
})(HttpTargetHttpMethodEnum = exports.HttpTargetHttpMethodEnum || (exports.HttpTargetHttpMethodEnum = {}));
// HttpTarget
/**
 * Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.
**/
var HttpTarget = /** @class */ (function (_super) {
    __extends(HttpTarget, _super);
    function HttpTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], HttpTarget.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers" }),
        __metadata("design:type", Object)
    ], HttpTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], HttpTarget.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauthToken" }),
        __metadata("design:type", oauthtoken_1.OAuthToken)
    ], HttpTarget.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oidcToken" }),
        __metadata("design:type", oidctoken_1.OidcToken)
    ], HttpTarget.prototype, "oidcToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], HttpTarget.prototype, "uri", void 0);
    return HttpTarget;
}(utils_1.SpeakeasyBase));
exports.HttpTarget = HttpTarget;
