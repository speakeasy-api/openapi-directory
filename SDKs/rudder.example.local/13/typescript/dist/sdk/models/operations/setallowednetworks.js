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
exports.SetAllowedNetworksResponse = exports.SetAllowedNetworksRequest = exports.SetAllowedNetworks200ApplicationJson = exports.SetAllowedNetworks200ApplicationJsonResultEnum = exports.SetAllowedNetworks200ApplicationJsonData = exports.SetAllowedNetworks200ApplicationJsonActionEnum = exports.SetAllowedNetworksRequestBody = exports.SetAllowedNetworksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var SetAllowedNetworksPathParams = /** @class */ (function (_super) {
    __extends(SetAllowedNetworksPathParams, _super);
    function SetAllowedNetworksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], SetAllowedNetworksPathParams.prototype, "nodeId", void 0);
    return SetAllowedNetworksPathParams;
}(utils_1.SpeakeasyBase));
exports.SetAllowedNetworksPathParams = SetAllowedNetworksPathParams;
var SetAllowedNetworksRequestBody = /** @class */ (function (_super) {
    __extends(SetAllowedNetworksRequestBody, _super);
    function SetAllowedNetworksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], SetAllowedNetworksRequestBody.prototype, "value", void 0);
    return SetAllowedNetworksRequestBody;
}(utils_1.SpeakeasyBase));
exports.SetAllowedNetworksRequestBody = SetAllowedNetworksRequestBody;
var SetAllowedNetworks200ApplicationJsonActionEnum;
(function (SetAllowedNetworks200ApplicationJsonActionEnum) {
    SetAllowedNetworks200ApplicationJsonActionEnum["ModifyAllowedNetworks"] = "modifyAllowedNetworks";
})(SetAllowedNetworks200ApplicationJsonActionEnum = exports.SetAllowedNetworks200ApplicationJsonActionEnum || (exports.SetAllowedNetworks200ApplicationJsonActionEnum = {}));
// SetAllowedNetworks200ApplicationJsonData
/**
 * Information about the allowed_networks settings
**/
var SetAllowedNetworks200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(SetAllowedNetworks200ApplicationJsonData, _super);
    function SetAllowedNetworks200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_networks" }),
        __metadata("design:type", Array)
    ], SetAllowedNetworks200ApplicationJsonData.prototype, "allowedNetworks", void 0);
    return SetAllowedNetworks200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.SetAllowedNetworks200ApplicationJsonData = SetAllowedNetworks200ApplicationJsonData;
var SetAllowedNetworks200ApplicationJsonResultEnum;
(function (SetAllowedNetworks200ApplicationJsonResultEnum) {
    SetAllowedNetworks200ApplicationJsonResultEnum["Success"] = "success";
    SetAllowedNetworks200ApplicationJsonResultEnum["Error"] = "error";
})(SetAllowedNetworks200ApplicationJsonResultEnum = exports.SetAllowedNetworks200ApplicationJsonResultEnum || (exports.SetAllowedNetworks200ApplicationJsonResultEnum = {}));
var SetAllowedNetworks200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetAllowedNetworks200ApplicationJson, _super);
    function SetAllowedNetworks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], SetAllowedNetworks200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", SetAllowedNetworks200ApplicationJsonData)
    ], SetAllowedNetworks200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SetAllowedNetworks200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], SetAllowedNetworks200ApplicationJson.prototype, "result", void 0);
    return SetAllowedNetworks200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetAllowedNetworks200ApplicationJson = SetAllowedNetworks200ApplicationJson;
var SetAllowedNetworksRequest = /** @class */ (function (_super) {
    __extends(SetAllowedNetworksRequest, _super);
    function SetAllowedNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetAllowedNetworksPathParams)
    ], SetAllowedNetworksRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetAllowedNetworksRequestBody)
    ], SetAllowedNetworksRequest.prototype, "request", void 0);
    return SetAllowedNetworksRequest;
}(utils_1.SpeakeasyBase));
exports.SetAllowedNetworksRequest = SetAllowedNetworksRequest;
var SetAllowedNetworksResponse = /** @class */ (function (_super) {
    __extends(SetAllowedNetworksResponse, _super);
    function SetAllowedNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SetAllowedNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SetAllowedNetworksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetAllowedNetworks200ApplicationJson)
    ], SetAllowedNetworksResponse.prototype, "setAllowedNetworks200ApplicationJSONObject", void 0);
    return SetAllowedNetworksResponse;
}(utils_1.SpeakeasyBase));
exports.SetAllowedNetworksResponse = SetAllowedNetworksResponse;
