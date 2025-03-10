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
exports.ActionsUpdateEnvironmentVariableResponse = exports.ActionsUpdateEnvironmentVariableRequest = exports.ActionsUpdateEnvironmentVariableRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var ActionsUpdateEnvironmentVariableRequestBody = /** @class */ (function (_super) {
    __extends(ActionsUpdateEnvironmentVariableRequestBody, _super);
    function ActionsUpdateEnvironmentVariableRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ActionsUpdateEnvironmentVariableRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "value" }),
        __metadata("design:type", String)
    ], ActionsUpdateEnvironmentVariableRequestBody.prototype, "value", void 0);
    return ActionsUpdateEnvironmentVariableRequestBody;
}(utils_1.SpeakeasyBase));
exports.ActionsUpdateEnvironmentVariableRequestBody = ActionsUpdateEnvironmentVariableRequestBody;
var ActionsUpdateEnvironmentVariableRequest = /** @class */ (function (_super) {
    __extends(ActionsUpdateEnvironmentVariableRequest, _super);
    function ActionsUpdateEnvironmentVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsUpdateEnvironmentVariableRequestBody)
    ], ActionsUpdateEnvironmentVariableRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=environment_name",
        }),
        __metadata("design:type", String)
    ], ActionsUpdateEnvironmentVariableRequest.prototype, "environmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=name",
        }),
        __metadata("design:type", String)
    ], ActionsUpdateEnvironmentVariableRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=repository_id",
        }),
        __metadata("design:type", Number)
    ], ActionsUpdateEnvironmentVariableRequest.prototype, "repositoryId", void 0);
    return ActionsUpdateEnvironmentVariableRequest;
}(utils_1.SpeakeasyBase));
exports.ActionsUpdateEnvironmentVariableRequest = ActionsUpdateEnvironmentVariableRequest;
var ActionsUpdateEnvironmentVariableResponse = /** @class */ (function (_super) {
    __extends(ActionsUpdateEnvironmentVariableResponse, _super);
    function ActionsUpdateEnvironmentVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ActionsUpdateEnvironmentVariableResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ActionsUpdateEnvironmentVariableResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ActionsUpdateEnvironmentVariableResponse.prototype, "rawResponse", void 0);
    return ActionsUpdateEnvironmentVariableResponse;
}(utils_1.SpeakeasyBase));
exports.ActionsUpdateEnvironmentVariableResponse = ActionsUpdateEnvironmentVariableResponse;
