"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.TrunkingV1Trunk = exports.TrunkingV1TrunkDisasterRecoveryMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var trunkenumtransfercalleridenum_1 = require("./trunkenumtransfercalleridenum");
var trunkenumtransfersettingenum_1 = require("./trunkenumtransfersettingenum");
var class_transformer_1 = require("class-transformer");
/**
 * The HTTP method we use to call the `disaster_recovery_url`. Can be: `GET` or `POST`.
 */
var TrunkingV1TrunkDisasterRecoveryMethodEnum;
(function (TrunkingV1TrunkDisasterRecoveryMethodEnum) {
    TrunkingV1TrunkDisasterRecoveryMethodEnum["Head"] = "HEAD";
    TrunkingV1TrunkDisasterRecoveryMethodEnum["Get"] = "GET";
    TrunkingV1TrunkDisasterRecoveryMethodEnum["Post"] = "POST";
    TrunkingV1TrunkDisasterRecoveryMethodEnum["Patch"] = "PATCH";
    TrunkingV1TrunkDisasterRecoveryMethodEnum["Put"] = "PUT";
    TrunkingV1TrunkDisasterRecoveryMethodEnum["Delete"] = "DELETE";
})(TrunkingV1TrunkDisasterRecoveryMethodEnum = exports.TrunkingV1TrunkDisasterRecoveryMethodEnum || (exports.TrunkingV1TrunkDisasterRecoveryMethodEnum = {}));
/**
 * Created
 */
var TrunkingV1Trunk = /** @class */ (function (_super) {
    __extends(TrunkingV1Trunk, _super);
    function TrunkingV1Trunk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "account_sid" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "auth_type" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "authType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "auth_type_set" }),
        __metadata("design:type", Array)
    ], TrunkingV1Trunk.prototype, "authTypeSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cnam_lookup_enabled" }),
        __metadata("design:type", Boolean)
    ], TrunkingV1Trunk.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_created" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], TrunkingV1Trunk.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_updated" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], TrunkingV1Trunk.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "disaster_recovery_method" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "disasterRecoveryMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "disaster_recovery_url" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "disasterRecoveryUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "domain_name" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "domainName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "friendly_name" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "links" }),
        __metadata("design:type", Object)
    ], TrunkingV1Trunk.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recording" }),
        __metadata("design:type", Object)
    ], TrunkingV1Trunk.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "secure" }),
        __metadata("design:type", Boolean)
    ], TrunkingV1Trunk.prototype, "secure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sid" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "sid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "transfer_caller_id" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "transferCallerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "transfer_mode" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "transferMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], TrunkingV1Trunk.prototype, "url", void 0);
    return TrunkingV1Trunk;
}(utils_1.SpeakeasyBase));
exports.TrunkingV1Trunk = TrunkingV1Trunk;
