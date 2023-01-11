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
exports.ModifyAllowedNetworksResponse = exports.ModifyAllowedNetworksRequest = exports.ModifyAllowedNetworks200ApplicationJson = exports.ModifyAllowedNetworks200ApplicationJsonResultEnum = exports.ModifyAllowedNetworks200ApplicationJsonData = exports.ModifyAllowedNetworks200ApplicationJsonActionEnum = exports.ModifyAllowedNetworksRequestBody = exports.ModifyAllowedNetworksRequestBodyAllowedNetworks = exports.ModifyAllowedNetworksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ModifyAllowedNetworksPathParams = /** @class */ (function (_super) {
    __extends(ModifyAllowedNetworksPathParams, _super);
    function ModifyAllowedNetworksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ModifyAllowedNetworksPathParams.prototype, "nodeId", void 0);
    return ModifyAllowedNetworksPathParams;
}(utils_1.SpeakeasyBase));
exports.ModifyAllowedNetworksPathParams = ModifyAllowedNetworksPathParams;
var ModifyAllowedNetworksRequestBodyAllowedNetworks = /** @class */ (function (_super) {
    __extends(ModifyAllowedNetworksRequestBodyAllowedNetworks, _super);
    function ModifyAllowedNetworksRequestBodyAllowedNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add" }),
        __metadata("design:type", Array)
    ], ModifyAllowedNetworksRequestBodyAllowedNetworks.prototype, "add", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Array)
    ], ModifyAllowedNetworksRequestBodyAllowedNetworks.prototype, "delete", void 0);
    return ModifyAllowedNetworksRequestBodyAllowedNetworks;
}(utils_1.SpeakeasyBase));
exports.ModifyAllowedNetworksRequestBodyAllowedNetworks = ModifyAllowedNetworksRequestBodyAllowedNetworks;
var ModifyAllowedNetworksRequestBody = /** @class */ (function (_super) {
    __extends(ModifyAllowedNetworksRequestBody, _super);
    function ModifyAllowedNetworksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_networks" }),
        __metadata("design:type", ModifyAllowedNetworksRequestBodyAllowedNetworks)
    ], ModifyAllowedNetworksRequestBody.prototype, "allowedNetworks", void 0);
    return ModifyAllowedNetworksRequestBody;
}(utils_1.SpeakeasyBase));
exports.ModifyAllowedNetworksRequestBody = ModifyAllowedNetworksRequestBody;
var ModifyAllowedNetworks200ApplicationJsonActionEnum;
(function (ModifyAllowedNetworks200ApplicationJsonActionEnum) {
    ModifyAllowedNetworks200ApplicationJsonActionEnum["ModifySetting"] = "modifySetting";
})(ModifyAllowedNetworks200ApplicationJsonActionEnum = exports.ModifyAllowedNetworks200ApplicationJsonActionEnum || (exports.ModifyAllowedNetworks200ApplicationJsonActionEnum = {}));
// ModifyAllowedNetworks200ApplicationJsonData
/**
 * Information about the allowed_networks settings
**/
var ModifyAllowedNetworks200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ModifyAllowedNetworks200ApplicationJsonData, _super);
    function ModifyAllowedNetworks200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_networks" }),
        __metadata("design:type", Array)
    ], ModifyAllowedNetworks200ApplicationJsonData.prototype, "allowedNetworks", void 0);
    return ModifyAllowedNetworks200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ModifyAllowedNetworks200ApplicationJsonData = ModifyAllowedNetworks200ApplicationJsonData;
var ModifyAllowedNetworks200ApplicationJsonResultEnum;
(function (ModifyAllowedNetworks200ApplicationJsonResultEnum) {
    ModifyAllowedNetworks200ApplicationJsonResultEnum["Success"] = "success";
    ModifyAllowedNetworks200ApplicationJsonResultEnum["Error"] = "error";
})(ModifyAllowedNetworks200ApplicationJsonResultEnum = exports.ModifyAllowedNetworks200ApplicationJsonResultEnum || (exports.ModifyAllowedNetworks200ApplicationJsonResultEnum = {}));
var ModifyAllowedNetworks200ApplicationJson = /** @class */ (function (_super) {
    __extends(ModifyAllowedNetworks200ApplicationJson, _super);
    function ModifyAllowedNetworks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ModifyAllowedNetworks200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ModifyAllowedNetworks200ApplicationJsonData)
    ], ModifyAllowedNetworks200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ModifyAllowedNetworks200ApplicationJson.prototype, "result", void 0);
    return ModifyAllowedNetworks200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ModifyAllowedNetworks200ApplicationJson = ModifyAllowedNetworks200ApplicationJson;
var ModifyAllowedNetworksRequest = /** @class */ (function (_super) {
    __extends(ModifyAllowedNetworksRequest, _super);
    function ModifyAllowedNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyAllowedNetworksPathParams)
    ], ModifyAllowedNetworksRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ModifyAllowedNetworksRequestBody)
    ], ModifyAllowedNetworksRequest.prototype, "request", void 0);
    return ModifyAllowedNetworksRequest;
}(utils_1.SpeakeasyBase));
exports.ModifyAllowedNetworksRequest = ModifyAllowedNetworksRequest;
var ModifyAllowedNetworksResponse = /** @class */ (function (_super) {
    __extends(ModifyAllowedNetworksResponse, _super);
    function ModifyAllowedNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyAllowedNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ModifyAllowedNetworksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyAllowedNetworks200ApplicationJson)
    ], ModifyAllowedNetworksResponse.prototype, "modifyAllowedNetworks200ApplicationJSONObject", void 0);
    return ModifyAllowedNetworksResponse;
}(utils_1.SpeakeasyBase));
exports.ModifyAllowedNetworksResponse = ModifyAllowedNetworksResponse;
