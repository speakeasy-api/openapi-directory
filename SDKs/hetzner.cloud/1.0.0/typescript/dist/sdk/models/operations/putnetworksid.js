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
exports.PutNetworksIdResponse = exports.PutNetworksIdRequest = exports.PutNetworksId200ApplicationJson = exports.PutNetworksId200ApplicationJsonNetwork = exports.PutNetworksId200ApplicationJsonNetworkSubnets = exports.PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum = exports.PutNetworksId200ApplicationJsonNetworkRoutes = exports.PutNetworksId200ApplicationJsonNetworkProtection = exports.PutNetworksIdUpdateNetworkRequest = exports.PutNetworksIdUpdateNetworkRequestLabels = exports.PutNetworksIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutNetworksIdPathParams = /** @class */ (function (_super) {
    __extends(PutNetworksIdPathParams, _super);
    function PutNetworksIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutNetworksIdPathParams.prototype, "id", void 0);
    return PutNetworksIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutNetworksIdPathParams = PutNetworksIdPathParams;
// PutNetworksIdUpdateNetworkRequestLabels
/**
 * User-defined labels (key-value pairs)
**/
var PutNetworksIdUpdateNetworkRequestLabels = /** @class */ (function (_super) {
    __extends(PutNetworksIdUpdateNetworkRequestLabels, _super);
    function PutNetworksIdUpdateNetworkRequestLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labelkey" }),
        __metadata("design:type", String)
    ], PutNetworksIdUpdateNetworkRequestLabels.prototype, "labelkey", void 0);
    return PutNetworksIdUpdateNetworkRequestLabels;
}(utils_1.SpeakeasyBase));
exports.PutNetworksIdUpdateNetworkRequestLabels = PutNetworksIdUpdateNetworkRequestLabels;
var PutNetworksIdUpdateNetworkRequest = /** @class */ (function (_super) {
    __extends(PutNetworksIdUpdateNetworkRequest, _super);
    function PutNetworksIdUpdateNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", PutNetworksIdUpdateNetworkRequestLabels)
    ], PutNetworksIdUpdateNetworkRequest.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutNetworksIdUpdateNetworkRequest.prototype, "name", void 0);
    return PutNetworksIdUpdateNetworkRequest;
}(utils_1.SpeakeasyBase));
exports.PutNetworksIdUpdateNetworkRequest = PutNetworksIdUpdateNetworkRequest;
// PutNetworksId200ApplicationJsonNetworkProtection
/**
 * Protection configuration for the Network
**/
var PutNetworksId200ApplicationJsonNetworkProtection = /** @class */ (function (_super) {
    __extends(PutNetworksId200ApplicationJsonNetworkProtection, _super);
    function PutNetworksId200ApplicationJsonNetworkProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PutNetworksId200ApplicationJsonNetworkProtection.prototype, "delete", void 0);
    return PutNetworksId200ApplicationJsonNetworkProtection;
}(utils_1.SpeakeasyBase));
exports.PutNetworksId200ApplicationJsonNetworkProtection = PutNetworksId200ApplicationJsonNetworkProtection;
var PutNetworksId200ApplicationJsonNetworkRoutes = /** @class */ (function (_super) {
    __extends(PutNetworksId200ApplicationJsonNetworkRoutes, _super);
    function PutNetworksId200ApplicationJsonNetworkRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetworkRoutes.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetworkRoutes.prototype, "gateway", void 0);
    return PutNetworksId200ApplicationJsonNetworkRoutes;
}(utils_1.SpeakeasyBase));
exports.PutNetworksId200ApplicationJsonNetworkRoutes = PutNetworksId200ApplicationJsonNetworkRoutes;
var PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
(function (PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum) {
    PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum["Cloud"] = "cloud";
    PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum["Server"] = "server";
    PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum["Vswitch"] = "vswitch";
})(PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum = exports.PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum || (exports.PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum = {}));
var PutNetworksId200ApplicationJsonNetworkSubnets = /** @class */ (function (_super) {
    __extends(PutNetworksId200ApplicationJsonNetworkSubnets, _super);
    function PutNetworksId200ApplicationJsonNetworkSubnets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetworkSubnets.prototype, "gateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetworkSubnets.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetworkSubnets.prototype, "networkZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetworkSubnets.prototype, "type", void 0);
    return PutNetworksId200ApplicationJsonNetworkSubnets;
}(utils_1.SpeakeasyBase));
exports.PutNetworksId200ApplicationJsonNetworkSubnets = PutNetworksId200ApplicationJsonNetworkSubnets;
var PutNetworksId200ApplicationJsonNetwork = /** @class */ (function (_super) {
    __extends(PutNetworksId200ApplicationJsonNetwork, _super);
    function PutNetworksId200ApplicationJsonNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "loadBalancers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protection" }),
        __metadata("design:type", PutNetworksId200ApplicationJsonNetworkProtection)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "protection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routes", elemType: PutNetworksId200ApplicationJsonNetworkRoutes }),
        __metadata("design:type", Array)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "servers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnets", elemType: PutNetworksId200ApplicationJsonNetworkSubnets }),
        __metadata("design:type", Array)
    ], PutNetworksId200ApplicationJsonNetwork.prototype, "subnets", void 0);
    return PutNetworksId200ApplicationJsonNetwork;
}(utils_1.SpeakeasyBase));
exports.PutNetworksId200ApplicationJsonNetwork = PutNetworksId200ApplicationJsonNetwork;
var PutNetworksId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutNetworksId200ApplicationJson, _super);
    function PutNetworksId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", PutNetworksId200ApplicationJsonNetwork)
    ], PutNetworksId200ApplicationJson.prototype, "network", void 0);
    return PutNetworksId200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutNetworksId200ApplicationJson = PutNetworksId200ApplicationJson;
var PutNetworksIdRequest = /** @class */ (function (_super) {
    __extends(PutNetworksIdRequest, _super);
    function PutNetworksIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutNetworksIdPathParams)
    ], PutNetworksIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutNetworksIdUpdateNetworkRequest)
    ], PutNetworksIdRequest.prototype, "request", void 0);
    return PutNetworksIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutNetworksIdRequest = PutNetworksIdRequest;
var PutNetworksIdResponse = /** @class */ (function (_super) {
    __extends(PutNetworksIdResponse, _super);
    function PutNetworksIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutNetworksIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutNetworksIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutNetworksId200ApplicationJson)
    ], PutNetworksIdResponse.prototype, "putNetworksId200ApplicationJSONObject", void 0);
    return PutNetworksIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutNetworksIdResponse = PutNetworksIdResponse;
