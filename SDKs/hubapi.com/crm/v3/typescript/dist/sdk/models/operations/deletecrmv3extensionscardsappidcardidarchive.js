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
exports.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse = exports.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest = exports.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity = /** @class */ (function (_super) {
    __extends(DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity, _super);
    function DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=query;name=hapikey",
        }),
        __metadata("design:type", String)
    ], DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity.prototype, "developerHapikey", void 0);
    return DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity = DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;
var DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest = /** @class */ (function (_super) {
    __extends(DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest, _super);
    function DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=appId",
        }),
        __metadata("design:type", Number)
    ], DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=cardId",
        }),
        __metadata("design:type", String)
    ], DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest.prototype, "cardId", void 0);
    return DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest = DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
var DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse = /** @class */ (function (_super) {
    __extends(DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse, _super);
    function DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse.prototype, "rawResponse", void 0);
    return DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse = DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse;
