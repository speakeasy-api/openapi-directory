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
exports.PostNetworksResponse = exports.PostNetworksRequest = exports.PostNetworks201ApplicationJson = exports.PostNetworks201ApplicationJsonNetwork = exports.PostNetworks201ApplicationJsonNetworkSubnets = exports.PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum = exports.PostNetworks201ApplicationJsonNetworkRoutes = exports.PostNetworks201ApplicationJsonNetworkProtection = exports.PostNetworksCreateNetworkRequest = exports.PostNetworksCreateNetworkRequestSubnets = exports.PostNetworksCreateNetworkRequestSubnetsTypeEnum = exports.PostNetworksCreateNetworkRequestRoutes = exports.PostNetworksCreateNetworkRequestLabels = void 0;
var utils_1 = require("../../../internal/utils");
// PostNetworksCreateNetworkRequestLabels
/**
 * User-defined labels (key-value pairs)
**/
var PostNetworksCreateNetworkRequestLabels = /** @class */ (function (_super) {
    __extends(PostNetworksCreateNetworkRequestLabels, _super);
    function PostNetworksCreateNetworkRequestLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labelkey" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequestLabels.prototype, "labelkey", void 0);
    return PostNetworksCreateNetworkRequestLabels;
}(utils_1.SpeakeasyBase));
exports.PostNetworksCreateNetworkRequestLabels = PostNetworksCreateNetworkRequestLabels;
var PostNetworksCreateNetworkRequestRoutes = /** @class */ (function (_super) {
    __extends(PostNetworksCreateNetworkRequestRoutes, _super);
    function PostNetworksCreateNetworkRequestRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequestRoutes.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequestRoutes.prototype, "gateway", void 0);
    return PostNetworksCreateNetworkRequestRoutes;
}(utils_1.SpeakeasyBase));
exports.PostNetworksCreateNetworkRequestRoutes = PostNetworksCreateNetworkRequestRoutes;
var PostNetworksCreateNetworkRequestSubnetsTypeEnum;
(function (PostNetworksCreateNetworkRequestSubnetsTypeEnum) {
    PostNetworksCreateNetworkRequestSubnetsTypeEnum["Cloud"] = "cloud";
    PostNetworksCreateNetworkRequestSubnetsTypeEnum["Server"] = "server";
    PostNetworksCreateNetworkRequestSubnetsTypeEnum["Vswitch"] = "vswitch";
})(PostNetworksCreateNetworkRequestSubnetsTypeEnum = exports.PostNetworksCreateNetworkRequestSubnetsTypeEnum || (exports.PostNetworksCreateNetworkRequestSubnetsTypeEnum = {}));
var PostNetworksCreateNetworkRequestSubnets = /** @class */ (function (_super) {
    __extends(PostNetworksCreateNetworkRequestSubnets, _super);
    function PostNetworksCreateNetworkRequestSubnets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequestSubnets.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequestSubnets.prototype, "networkZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequestSubnets.prototype, "type", void 0);
    return PostNetworksCreateNetworkRequestSubnets;
}(utils_1.SpeakeasyBase));
exports.PostNetworksCreateNetworkRequestSubnets = PostNetworksCreateNetworkRequestSubnets;
var PostNetworksCreateNetworkRequest = /** @class */ (function (_super) {
    __extends(PostNetworksCreateNetworkRequest, _super);
    function PostNetworksCreateNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequest.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", PostNetworksCreateNetworkRequestLabels)
    ], PostNetworksCreateNetworkRequest.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostNetworksCreateNetworkRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routes", elemType: PostNetworksCreateNetworkRequestRoutes }),
        __metadata("design:type", Array)
    ], PostNetworksCreateNetworkRequest.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnets", elemType: PostNetworksCreateNetworkRequestSubnets }),
        __metadata("design:type", Array)
    ], PostNetworksCreateNetworkRequest.prototype, "subnets", void 0);
    return PostNetworksCreateNetworkRequest;
}(utils_1.SpeakeasyBase));
exports.PostNetworksCreateNetworkRequest = PostNetworksCreateNetworkRequest;
// PostNetworks201ApplicationJsonNetworkProtection
/**
 * Protection configuration for the Network
**/
var PostNetworks201ApplicationJsonNetworkProtection = /** @class */ (function (_super) {
    __extends(PostNetworks201ApplicationJsonNetworkProtection, _super);
    function PostNetworks201ApplicationJsonNetworkProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostNetworks201ApplicationJsonNetworkProtection.prototype, "delete", void 0);
    return PostNetworks201ApplicationJsonNetworkProtection;
}(utils_1.SpeakeasyBase));
exports.PostNetworks201ApplicationJsonNetworkProtection = PostNetworks201ApplicationJsonNetworkProtection;
var PostNetworks201ApplicationJsonNetworkRoutes = /** @class */ (function (_super) {
    __extends(PostNetworks201ApplicationJsonNetworkRoutes, _super);
    function PostNetworks201ApplicationJsonNetworkRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetworkRoutes.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetworkRoutes.prototype, "gateway", void 0);
    return PostNetworks201ApplicationJsonNetworkRoutes;
}(utils_1.SpeakeasyBase));
exports.PostNetworks201ApplicationJsonNetworkRoutes = PostNetworks201ApplicationJsonNetworkRoutes;
var PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum;
(function (PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum) {
    PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum["Cloud"] = "cloud";
    PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum["Server"] = "server";
    PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum["Vswitch"] = "vswitch";
})(PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum = exports.PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum || (exports.PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum = {}));
var PostNetworks201ApplicationJsonNetworkSubnets = /** @class */ (function (_super) {
    __extends(PostNetworks201ApplicationJsonNetworkSubnets, _super);
    function PostNetworks201ApplicationJsonNetworkSubnets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetworkSubnets.prototype, "gateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetworkSubnets.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetworkSubnets.prototype, "networkZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetworkSubnets.prototype, "type", void 0);
    return PostNetworks201ApplicationJsonNetworkSubnets;
}(utils_1.SpeakeasyBase));
exports.PostNetworks201ApplicationJsonNetworkSubnets = PostNetworks201ApplicationJsonNetworkSubnets;
var PostNetworks201ApplicationJsonNetwork = /** @class */ (function (_super) {
    __extends(PostNetworks201ApplicationJsonNetwork, _super);
    function PostNetworks201ApplicationJsonNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "loadBalancers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protection" }),
        __metadata("design:type", PostNetworks201ApplicationJsonNetworkProtection)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "protection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routes", elemType: PostNetworks201ApplicationJsonNetworkRoutes }),
        __metadata("design:type", Array)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "servers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnets", elemType: PostNetworks201ApplicationJsonNetworkSubnets }),
        __metadata("design:type", Array)
    ], PostNetworks201ApplicationJsonNetwork.prototype, "subnets", void 0);
    return PostNetworks201ApplicationJsonNetwork;
}(utils_1.SpeakeasyBase));
exports.PostNetworks201ApplicationJsonNetwork = PostNetworks201ApplicationJsonNetwork;
var PostNetworks201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostNetworks201ApplicationJson, _super);
    function PostNetworks201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", PostNetworks201ApplicationJsonNetwork)
    ], PostNetworks201ApplicationJson.prototype, "network", void 0);
    return PostNetworks201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostNetworks201ApplicationJson = PostNetworks201ApplicationJson;
var PostNetworksRequest = /** @class */ (function (_super) {
    __extends(PostNetworksRequest, _super);
    function PostNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostNetworksCreateNetworkRequest)
    ], PostNetworksRequest.prototype, "request", void 0);
    return PostNetworksRequest;
}(utils_1.SpeakeasyBase));
exports.PostNetworksRequest = PostNetworksRequest;
var PostNetworksResponse = /** @class */ (function (_super) {
    __extends(PostNetworksResponse, _super);
    function PostNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostNetworksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostNetworks201ApplicationJson)
    ], PostNetworksResponse.prototype, "postNetworks201ApplicationJSONObject", void 0);
    return PostNetworksResponse;
}(utils_1.SpeakeasyBase));
exports.PostNetworksResponse = PostNetworksResponse;
