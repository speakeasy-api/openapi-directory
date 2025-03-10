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
exports.VerifyV2ServiceAccessToken = void 0;
var utils_1 = require("../../../internal/utils");
var accesstokenenumfactortypesenum_1 = require("./accesstokenenumfactortypesenum");
var VerifyV2ServiceAccessToken = /** @class */ (function (_super) {
    __extends(VerifyV2ServiceAccessToken, _super);
    function VerifyV2ServiceAccessToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VerifyV2ServiceAccessToken.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_identity" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "entityIdentity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=factor_friendly_name" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "factorFriendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=factor_type" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "factorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "sid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], VerifyV2ServiceAccessToken.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VerifyV2ServiceAccessToken.prototype, "url", void 0);
    return VerifyV2ServiceAccessToken;
}(utils_1.SpeakeasyBase));
exports.VerifyV2ServiceAccessToken = VerifyV2ServiceAccessToken;
