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
exports.VerifyCapability = exports.VerifyCapabilityWebhooks = exports.VerifyCapabilityWebhooksStatusUrl = exports.VerifyCapabilityWebhooksStatusUrlHttpMethodEnum = exports.VerifyCapabilityVersionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var VerifyCapabilityVersionEnum;
(function (VerifyCapabilityVersionEnum) {
    VerifyCapabilityVersionEnum["V2"] = "v2";
})(VerifyCapabilityVersionEnum = exports.VerifyCapabilityVersionEnum || (exports.VerifyCapabilityVersionEnum = {}));
var VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
(function (VerifyCapabilityWebhooksStatusUrlHttpMethodEnum) {
    VerifyCapabilityWebhooksStatusUrlHttpMethodEnum["Post"] = "POST";
})(VerifyCapabilityWebhooksStatusUrlHttpMethodEnum = exports.VerifyCapabilityWebhooksStatusUrlHttpMethodEnum || (exports.VerifyCapabilityWebhooksStatusUrlHttpMethodEnum = {}));
// VerifyCapabilityWebhooksStatusUrl
/**
 * Vonage will send request status events (e.g. `progress`, `complete`) to this URL
**/
var VerifyCapabilityWebhooksStatusUrl = /** @class */ (function (_super) {
    __extends(VerifyCapabilityWebhooksStatusUrl, _super);
    function VerifyCapabilityWebhooksStatusUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], VerifyCapabilityWebhooksStatusUrl.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], VerifyCapabilityWebhooksStatusUrl.prototype, "httpMethod", void 0);
    return VerifyCapabilityWebhooksStatusUrl;
}(utils_1.SpeakeasyBase));
exports.VerifyCapabilityWebhooksStatusUrl = VerifyCapabilityWebhooksStatusUrl;
var VerifyCapabilityWebhooks = /** @class */ (function (_super) {
    __extends(VerifyCapabilityWebhooks, _super);
    function VerifyCapabilityWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_url" }),
        __metadata("design:type", VerifyCapabilityWebhooksStatusUrl)
    ], VerifyCapabilityWebhooks.prototype, "statusUrl", void 0);
    return VerifyCapabilityWebhooks;
}(utils_1.SpeakeasyBase));
exports.VerifyCapabilityWebhooks = VerifyCapabilityWebhooks;
// VerifyCapability
/**
 * Two factor authentication related configuration
**/
var VerifyCapability = /** @class */ (function (_super) {
    __extends(VerifyCapability, _super);
    function VerifyCapability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], VerifyCapability.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhooks" }),
        __metadata("design:type", VerifyCapabilityWebhooks)
    ], VerifyCapability.prototype, "webhooks", void 0);
    return VerifyCapability;
}(utils_1.SpeakeasyBase));
exports.VerifyCapability = VerifyCapability;
