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
exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse = exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest = exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams, _super);
    function UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=rendezvousPointId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams.prototype, "rendezvousPointId", void 0);
    return UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams = UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams;
var UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody, _super);
    function UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interfaceIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody.prototype, "interfaceIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multicastGroup" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody.prototype, "multicastGroup", void 0);
    return UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
var UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest, _super);
    function UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest = UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
var UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse, _super);
    function UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse.prototype, "updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject", void 0);
    return UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse = UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse;
