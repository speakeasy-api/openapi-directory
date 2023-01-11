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
exports.ReloadAllDatasourcesOneNodeResponse = exports.ReloadAllDatasourcesOneNodeRequest = exports.ReloadAllDatasourcesOneNode200ApplicationJson = exports.ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum = exports.ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum = exports.ReloadAllDatasourcesOneNodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ReloadAllDatasourcesOneNodePathParams = /** @class */ (function (_super) {
    __extends(ReloadAllDatasourcesOneNodePathParams, _super);
    function ReloadAllDatasourcesOneNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesOneNodePathParams.prototype, "nodeId", void 0);
    return ReloadAllDatasourcesOneNodePathParams;
}(utils_1.SpeakeasyBase));
exports.ReloadAllDatasourcesOneNodePathParams = ReloadAllDatasourcesOneNodePathParams;
var ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum;
(function (ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum) {
    ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum["ReloadAllDatasourcesOneNode"] = "ReloadAllDatasourcesOneNode";
})(ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum = exports.ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum || (exports.ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum = {}));
var ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum;
(function (ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum) {
    ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum["Success"] = "success";
    ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum = exports.ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum || (exports.ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum = {}));
var ReloadAllDatasourcesOneNode200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadAllDatasourcesOneNode200ApplicationJson, _super);
    function ReloadAllDatasourcesOneNode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesOneNode200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesOneNode200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesOneNode200ApplicationJson.prototype, "result", void 0);
    return ReloadAllDatasourcesOneNode200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReloadAllDatasourcesOneNode200ApplicationJson = ReloadAllDatasourcesOneNode200ApplicationJson;
var ReloadAllDatasourcesOneNodeRequest = /** @class */ (function (_super) {
    __extends(ReloadAllDatasourcesOneNodeRequest, _super);
    function ReloadAllDatasourcesOneNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReloadAllDatasourcesOneNodePathParams)
    ], ReloadAllDatasourcesOneNodeRequest.prototype, "pathParams", void 0);
    return ReloadAllDatasourcesOneNodeRequest;
}(utils_1.SpeakeasyBase));
exports.ReloadAllDatasourcesOneNodeRequest = ReloadAllDatasourcesOneNodeRequest;
var ReloadAllDatasourcesOneNodeResponse = /** @class */ (function (_super) {
    __extends(ReloadAllDatasourcesOneNodeResponse, _super);
    function ReloadAllDatasourcesOneNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesOneNodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReloadAllDatasourcesOneNode200ApplicationJson)
    ], ReloadAllDatasourcesOneNodeResponse.prototype, "reloadAllDatasourcesOneNode200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReloadAllDatasourcesOneNodeResponse.prototype, "statusCode", void 0);
    return ReloadAllDatasourcesOneNodeResponse;
}(utils_1.SpeakeasyBase));
exports.ReloadAllDatasourcesOneNodeResponse = ReloadAllDatasourcesOneNodeResponse;
