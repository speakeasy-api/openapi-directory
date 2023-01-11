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
exports.ReloadOneDatasourceOneNodeResponse = exports.ReloadOneDatasourceOneNodeRequest = exports.ReloadOneDatasourceOneNode200ApplicationJson = exports.ReloadOneDatasourceOneNode200ApplicationJsonResultEnum = exports.ReloadOneDatasourceOneNode200ApplicationJsonActionEnum = exports.ReloadOneDatasourceOneNodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ReloadOneDatasourceOneNodePathParams = /** @class */ (function (_super) {
    __extends(ReloadOneDatasourceOneNodePathParams, _super);
    function ReloadOneDatasourceOneNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=datasourceId" }),
        __metadata("design:type", String)
    ], ReloadOneDatasourceOneNodePathParams.prototype, "datasourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ReloadOneDatasourceOneNodePathParams.prototype, "nodeId", void 0);
    return ReloadOneDatasourceOneNodePathParams;
}(utils_1.SpeakeasyBase));
exports.ReloadOneDatasourceOneNodePathParams = ReloadOneDatasourceOneNodePathParams;
var ReloadOneDatasourceOneNode200ApplicationJsonActionEnum;
(function (ReloadOneDatasourceOneNode200ApplicationJsonActionEnum) {
    ReloadOneDatasourceOneNode200ApplicationJsonActionEnum["ReloadOneDatasourceOneNode"] = "ReloadOneDatasourceOneNode";
})(ReloadOneDatasourceOneNode200ApplicationJsonActionEnum = exports.ReloadOneDatasourceOneNode200ApplicationJsonActionEnum || (exports.ReloadOneDatasourceOneNode200ApplicationJsonActionEnum = {}));
var ReloadOneDatasourceOneNode200ApplicationJsonResultEnum;
(function (ReloadOneDatasourceOneNode200ApplicationJsonResultEnum) {
    ReloadOneDatasourceOneNode200ApplicationJsonResultEnum["Success"] = "success";
    ReloadOneDatasourceOneNode200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadOneDatasourceOneNode200ApplicationJsonResultEnum = exports.ReloadOneDatasourceOneNode200ApplicationJsonResultEnum || (exports.ReloadOneDatasourceOneNode200ApplicationJsonResultEnum = {}));
var ReloadOneDatasourceOneNode200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadOneDatasourceOneNode200ApplicationJson, _super);
    function ReloadOneDatasourceOneNode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadOneDatasourceOneNode200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], ReloadOneDatasourceOneNode200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadOneDatasourceOneNode200ApplicationJson.prototype, "result", void 0);
    return ReloadOneDatasourceOneNode200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReloadOneDatasourceOneNode200ApplicationJson = ReloadOneDatasourceOneNode200ApplicationJson;
var ReloadOneDatasourceOneNodeRequest = /** @class */ (function (_super) {
    __extends(ReloadOneDatasourceOneNodeRequest, _super);
    function ReloadOneDatasourceOneNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReloadOneDatasourceOneNodePathParams)
    ], ReloadOneDatasourceOneNodeRequest.prototype, "pathParams", void 0);
    return ReloadOneDatasourceOneNodeRequest;
}(utils_1.SpeakeasyBase));
exports.ReloadOneDatasourceOneNodeRequest = ReloadOneDatasourceOneNodeRequest;
var ReloadOneDatasourceOneNodeResponse = /** @class */ (function (_super) {
    __extends(ReloadOneDatasourceOneNodeResponse, _super);
    function ReloadOneDatasourceOneNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReloadOneDatasourceOneNodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReloadOneDatasourceOneNode200ApplicationJson)
    ], ReloadOneDatasourceOneNodeResponse.prototype, "reloadOneDatasourceOneNode200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReloadOneDatasourceOneNodeResponse.prototype, "statusCode", void 0);
    return ReloadOneDatasourceOneNodeResponse;
}(utils_1.SpeakeasyBase));
exports.ReloadOneDatasourceOneNodeResponse = ReloadOneDatasourceOneNodeResponse;
