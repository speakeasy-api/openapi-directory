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
exports.CreateNetworkSwitchLinkAggregationResponse = exports.CreateNetworkSwitchLinkAggregationRequest = exports.CreateNetworkSwitchLinkAggregationRequestBody = exports.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts = exports.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts = exports.CreateNetworkSwitchLinkAggregationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateNetworkSwitchLinkAggregationPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchLinkAggregationPathParams, _super);
    function CreateNetworkSwitchLinkAggregationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchLinkAggregationPathParams.prototype, "networkId", void 0);
    return CreateNetworkSwitchLinkAggregationPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchLinkAggregationPathParams = CreateNetworkSwitchLinkAggregationPathParams;
var CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts, _super);
    function CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts.prototype, "portId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts.prototype, "serial", void 0);
    return CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts = CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
var CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts, _super);
    function CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts.prototype, "portId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts.prototype, "profile", void 0);
    return CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts = CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;
var CreateNetworkSwitchLinkAggregationRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchLinkAggregationRequestBody, _super);
    function CreateNetworkSwitchLinkAggregationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=switchPorts", elemType: CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts }),
        __metadata("design:type", Array)
    ], CreateNetworkSwitchLinkAggregationRequestBody.prototype, "switchPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=switchProfilePorts", elemType: CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts }),
        __metadata("design:type", Array)
    ], CreateNetworkSwitchLinkAggregationRequestBody.prototype, "switchProfilePorts", void 0);
    return CreateNetworkSwitchLinkAggregationRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchLinkAggregationRequestBody = CreateNetworkSwitchLinkAggregationRequestBody;
var CreateNetworkSwitchLinkAggregationRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchLinkAggregationRequest, _super);
    function CreateNetworkSwitchLinkAggregationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkSwitchLinkAggregationPathParams)
    ], CreateNetworkSwitchLinkAggregationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkSwitchLinkAggregationRequestBody)
    ], CreateNetworkSwitchLinkAggregationRequest.prototype, "request", void 0);
    return CreateNetworkSwitchLinkAggregationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchLinkAggregationRequest = CreateNetworkSwitchLinkAggregationRequest;
var CreateNetworkSwitchLinkAggregationResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchLinkAggregationResponse, _super);
    function CreateNetworkSwitchLinkAggregationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNetworkSwitchLinkAggregationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchLinkAggregationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkSwitchLinkAggregationResponse.prototype, "createNetworkSwitchLinkAggregation201ApplicationJSONObject", void 0);
    return CreateNetworkSwitchLinkAggregationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkSwitchLinkAggregationResponse = CreateNetworkSwitchLinkAggregationResponse;
