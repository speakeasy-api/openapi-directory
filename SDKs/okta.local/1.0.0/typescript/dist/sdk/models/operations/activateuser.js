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
exports.ActivateUserResponse = exports.ActivateUserRequest = exports.ActivateUserQueryParams = exports.ActivateUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ActivateUserPathParams = /** @class */ (function (_super) {
    __extends(ActivateUserPathParams, _super);
    function ActivateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ActivateUserPathParams.prototype, "userId", void 0);
    return ActivateUserPathParams;
}(utils_1.SpeakeasyBase));
exports.ActivateUserPathParams = ActivateUserPathParams;
var ActivateUserQueryParams = /** @class */ (function (_super) {
    __extends(ActivateUserQueryParams, _super);
    function ActivateUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sendEmail" }),
        __metadata("design:type", String)
    ], ActivateUserQueryParams.prototype, "sendEmail", void 0);
    return ActivateUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.ActivateUserQueryParams = ActivateUserQueryParams;
var ActivateUserRequest = /** @class */ (function (_super) {
    __extends(ActivateUserRequest, _super);
    function ActivateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActivateUserPathParams)
    ], ActivateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActivateUserQueryParams)
    ], ActivateUserRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/plain" }),
        __metadata("design:type", Uint8Array)
    ], ActivateUserRequest.prototype, "request", void 0);
    return ActivateUserRequest;
}(utils_1.SpeakeasyBase));
exports.ActivateUserRequest = ActivateUserRequest;
var ActivateUserResponse = /** @class */ (function (_super) {
    __extends(ActivateUserResponse, _super);
    function ActivateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ActivateUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ActivateUserResponse.prototype, "statusCode", void 0);
    return ActivateUserResponse;
}(utils_1.SpeakeasyBase));
exports.ActivateUserResponse = ActivateUserResponse;
