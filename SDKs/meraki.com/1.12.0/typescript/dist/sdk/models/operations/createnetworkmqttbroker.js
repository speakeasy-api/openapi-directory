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
exports.CreateNetworkMqttBrokerResponse = exports.CreateNetworkMqttBrokerRequest = exports.CreateNetworkMqttBrokerRequestBody = exports.CreateNetworkMqttBrokerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateNetworkMqttBrokerPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkMqttBrokerPathParams, _super);
    function CreateNetworkMqttBrokerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkMqttBrokerPathParams.prototype, "networkId", void 0);
    return CreateNetworkMqttBrokerPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkMqttBrokerPathParams = CreateNetworkMqttBrokerPathParams;
var CreateNetworkMqttBrokerRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkMqttBrokerRequestBody, _super);
    function CreateNetworkMqttBrokerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], CreateNetworkMqttBrokerRequestBody.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkMqttBrokerRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateNetworkMqttBrokerRequestBody.prototype, "port", void 0);
    return CreateNetworkMqttBrokerRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkMqttBrokerRequestBody = CreateNetworkMqttBrokerRequestBody;
var CreateNetworkMqttBrokerRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkMqttBrokerRequest, _super);
    function CreateNetworkMqttBrokerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkMqttBrokerPathParams)
    ], CreateNetworkMqttBrokerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkMqttBrokerRequestBody)
    ], CreateNetworkMqttBrokerRequest.prototype, "request", void 0);
    return CreateNetworkMqttBrokerRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkMqttBrokerRequest = CreateNetworkMqttBrokerRequest;
var CreateNetworkMqttBrokerResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkMqttBrokerResponse, _super);
    function CreateNetworkMqttBrokerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNetworkMqttBrokerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNetworkMqttBrokerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkMqttBrokerResponse.prototype, "createNetworkMqttBroker201ApplicationJSONObject", void 0);
    return CreateNetworkMqttBrokerResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkMqttBrokerResponse = CreateNetworkMqttBrokerResponse;
