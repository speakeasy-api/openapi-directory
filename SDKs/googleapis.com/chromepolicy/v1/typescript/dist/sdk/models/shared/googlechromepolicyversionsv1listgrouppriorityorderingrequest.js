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
exports.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest = void 0;
var utils_1 = require("../../../internal/utils");
var googlechromepolicyversionsv1policytargetkey_1 = require("./googlechromepolicyversionsv1policytargetkey");
var class_transformer_1 = require("class-transformer");
/**
 * Request message for listing the group priority ordering of an app.
 */
var GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest = /** @class */ (function (_super) {
    __extends(GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest, _super);
    function GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "policyNamespace" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest.prototype, "policyNamespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "policyTargetKey" }),
        (0, class_transformer_1.Type)(function () { return googlechromepolicyversionsv1policytargetkey_1.GoogleChromePolicyVersionsV1PolicyTargetKey; }),
        __metadata("design:type", googlechromepolicyversionsv1policytargetkey_1.GoogleChromePolicyVersionsV1PolicyTargetKey)
    ], GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest.prototype, "policyTargetKey", void 0);
    return GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;
}(utils_1.SpeakeasyBase));
exports.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest = GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;
