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
exports.RemoveNetworkSwitchStackResponse = exports.RemoveNetworkSwitchStackRequest = exports.RemoveNetworkSwitchStackRequestBody = exports.RemoveNetworkSwitchStackPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RemoveNetworkSwitchStackPathParams = /** @class */ (function (_super) {
    __extends(RemoveNetworkSwitchStackPathParams, _super);
    function RemoveNetworkSwitchStackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], RemoveNetworkSwitchStackPathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=switchStackId" }),
        __metadata("design:type", String)
    ], RemoveNetworkSwitchStackPathParams.prototype, "switchStackId", void 0);
    return RemoveNetworkSwitchStackPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveNetworkSwitchStackPathParams = RemoveNetworkSwitchStackPathParams;
var RemoveNetworkSwitchStackRequestBody = /** @class */ (function (_super) {
    __extends(RemoveNetworkSwitchStackRequestBody, _super);
    function RemoveNetworkSwitchStackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], RemoveNetworkSwitchStackRequestBody.prototype, "serial", void 0);
    return RemoveNetworkSwitchStackRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveNetworkSwitchStackRequestBody = RemoveNetworkSwitchStackRequestBody;
var RemoveNetworkSwitchStackRequest = /** @class */ (function (_super) {
    __extends(RemoveNetworkSwitchStackRequest, _super);
    function RemoveNetworkSwitchStackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveNetworkSwitchStackPathParams)
    ], RemoveNetworkSwitchStackRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveNetworkSwitchStackRequestBody)
    ], RemoveNetworkSwitchStackRequest.prototype, "request", void 0);
    return RemoveNetworkSwitchStackRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveNetworkSwitchStackRequest = RemoveNetworkSwitchStackRequest;
var RemoveNetworkSwitchStackResponse = /** @class */ (function (_super) {
    __extends(RemoveNetworkSwitchStackResponse, _super);
    function RemoveNetworkSwitchStackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveNetworkSwitchStackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveNetworkSwitchStackResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RemoveNetworkSwitchStackResponse.prototype, "removeNetworkSwitchStack200ApplicationJSONObject", void 0);
    return RemoveNetworkSwitchStackResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveNetworkSwitchStackResponse = RemoveNetworkSwitchStackResponse;
