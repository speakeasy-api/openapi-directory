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
exports.UpdateNetworkMerakiAuthUserResponse = exports.UpdateNetworkMerakiAuthUserRequest = exports.UpdateNetworkMerakiAuthUserRequestBody = exports.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations = exports.UpdateNetworkMerakiAuthUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkMerakiAuthUserPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkMerakiAuthUserPathParams, _super);
    function UpdateNetworkMerakiAuthUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=merakiAuthUserId" }),
        __metadata("design:type", String)
    ], UpdateNetworkMerakiAuthUserPathParams.prototype, "merakiAuthUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkMerakiAuthUserPathParams.prototype, "networkId", void 0);
    return UpdateNetworkMerakiAuthUserPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkMerakiAuthUserPathParams = UpdateNetworkMerakiAuthUserPathParams;
var UpdateNetworkMerakiAuthUserRequestBodyAuthorizations = /** @class */ (function (_super) {
    __extends(UpdateNetworkMerakiAuthUserRequestBodyAuthorizations, _super);
    function UpdateNetworkMerakiAuthUserRequestBodyAuthorizations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiresAt" }),
        __metadata("design:type", String)
    ], UpdateNetworkMerakiAuthUserRequestBodyAuthorizations.prototype, "expiresAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssidNumber" }),
        __metadata("design:type", Number)
    ], UpdateNetworkMerakiAuthUserRequestBodyAuthorizations.prototype, "ssidNumber", void 0);
    return UpdateNetworkMerakiAuthUserRequestBodyAuthorizations;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations = UpdateNetworkMerakiAuthUserRequestBodyAuthorizations;
var UpdateNetworkMerakiAuthUserRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkMerakiAuthUserRequestBody, _super);
    function UpdateNetworkMerakiAuthUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorizations", elemType: UpdateNetworkMerakiAuthUserRequestBodyAuthorizations }),
        __metadata("design:type", Array)
    ], UpdateNetworkMerakiAuthUserRequestBody.prototype, "authorizations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailPasswordToUser" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkMerakiAuthUserRequestBody.prototype, "emailPasswordToUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkMerakiAuthUserRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateNetworkMerakiAuthUserRequestBody.prototype, "password", void 0);
    return UpdateNetworkMerakiAuthUserRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkMerakiAuthUserRequestBody = UpdateNetworkMerakiAuthUserRequestBody;
var UpdateNetworkMerakiAuthUserRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkMerakiAuthUserRequest, _super);
    function UpdateNetworkMerakiAuthUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkMerakiAuthUserPathParams)
    ], UpdateNetworkMerakiAuthUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkMerakiAuthUserRequestBody)
    ], UpdateNetworkMerakiAuthUserRequest.prototype, "request", void 0);
    return UpdateNetworkMerakiAuthUserRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkMerakiAuthUserRequest = UpdateNetworkMerakiAuthUserRequest;
var UpdateNetworkMerakiAuthUserResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkMerakiAuthUserResponse, _super);
    function UpdateNetworkMerakiAuthUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkMerakiAuthUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkMerakiAuthUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkMerakiAuthUserResponse.prototype, "updateNetworkMerakiAuthUser200ApplicationJSONObject", void 0);
    return UpdateNetworkMerakiAuthUserResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkMerakiAuthUserResponse = UpdateNetworkMerakiAuthUserResponse;
