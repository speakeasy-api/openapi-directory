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
exports.GetNetworksResponse = exports.GetNetworksRequest = exports.GetNetworks200ApplicationJson = exports.GetNetworks200ApplicationJsonNetworks = exports.GetNetworks200ApplicationJsonNetworksSubnets = exports.GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum = exports.GetNetworks200ApplicationJsonNetworksRoutes = exports.GetNetworks200ApplicationJsonNetworksProtection = exports.GetNetworks200ApplicationJsonMeta = exports.GetNetworks200ApplicationJsonMetaPagination = exports.GetNetworksQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworksQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworksQueryParams, _super);
    function GetNetworksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetNetworksQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetNetworksQueryParams.prototype, "name", void 0);
    return GetNetworksQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworksQueryParams = GetNetworksQueryParams;
var GetNetworks200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationJsonMetaPagination, _super);
    function GetNetworks200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetNetworks200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetNetworks200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetNetworks200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetNetworks200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetNetworks200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetNetworks200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetNetworks200ApplicationJsonMetaPagination;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationJsonMetaPagination = GetNetworks200ApplicationJsonMetaPagination;
var GetNetworks200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationJsonMeta, _super);
    function GetNetworks200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", GetNetworks200ApplicationJsonMetaPagination)
    ], GetNetworks200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetNetworks200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationJsonMeta = GetNetworks200ApplicationJsonMeta;
// GetNetworks200ApplicationJsonNetworksProtection
/**
 * Protection configuration for the Network
**/
var GetNetworks200ApplicationJsonNetworksProtection = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationJsonNetworksProtection, _super);
    function GetNetworks200ApplicationJsonNetworksProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetNetworks200ApplicationJsonNetworksProtection.prototype, "delete", void 0);
    return GetNetworks200ApplicationJsonNetworksProtection;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationJsonNetworksProtection = GetNetworks200ApplicationJsonNetworksProtection;
var GetNetworks200ApplicationJsonNetworksRoutes = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationJsonNetworksRoutes, _super);
    function GetNetworks200ApplicationJsonNetworksRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworksRoutes.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworksRoutes.prototype, "gateway", void 0);
    return GetNetworks200ApplicationJsonNetworksRoutes;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationJsonNetworksRoutes = GetNetworks200ApplicationJsonNetworksRoutes;
var GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum;
(function (GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum) {
    GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum["Cloud"] = "cloud";
    GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum["Server"] = "server";
    GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum["Vswitch"] = "vswitch";
})(GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum = exports.GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum || (exports.GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum = {}));
var GetNetworks200ApplicationJsonNetworksSubnets = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationJsonNetworksSubnets, _super);
    function GetNetworks200ApplicationJsonNetworksSubnets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworksSubnets.prototype, "gateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworksSubnets.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworksSubnets.prototype, "networkZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworksSubnets.prototype, "type", void 0);
    return GetNetworks200ApplicationJsonNetworksSubnets;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationJsonNetworksSubnets = GetNetworks200ApplicationJsonNetworksSubnets;
var GetNetworks200ApplicationJsonNetworks = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationJsonNetworks, _super);
    function GetNetworks200ApplicationJsonNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "ipRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "loadBalancers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protection" }),
        __metadata("design:type", GetNetworks200ApplicationJsonNetworksProtection)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "protection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routes", elemType: GetNetworks200ApplicationJsonNetworksRoutes }),
        __metadata("design:type", Array)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "servers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnets", elemType: GetNetworks200ApplicationJsonNetworksSubnets }),
        __metadata("design:type", Array)
    ], GetNetworks200ApplicationJsonNetworks.prototype, "subnets", void 0);
    return GetNetworks200ApplicationJsonNetworks;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationJsonNetworks = GetNetworks200ApplicationJsonNetworks;
var GetNetworks200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationJson, _super);
    function GetNetworks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetNetworks200ApplicationJsonMeta)
    ], GetNetworks200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networks", elemType: GetNetworks200ApplicationJsonNetworks }),
        __metadata("design:type", Array)
    ], GetNetworks200ApplicationJson.prototype, "networks", void 0);
    return GetNetworks200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationJson = GetNetworks200ApplicationJson;
var GetNetworksRequest = /** @class */ (function (_super) {
    __extends(GetNetworksRequest, _super);
    function GetNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworksQueryParams)
    ], GetNetworksRequest.prototype, "queryParams", void 0);
    return GetNetworksRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworksRequest = GetNetworksRequest;
var GetNetworksResponse = /** @class */ (function (_super) {
    __extends(GetNetworksResponse, _super);
    function GetNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworks200ApplicationJson)
    ], GetNetworksResponse.prototype, "getNetworks200ApplicationJSONObject", void 0);
    return GetNetworksResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworksResponse = GetNetworksResponse;
