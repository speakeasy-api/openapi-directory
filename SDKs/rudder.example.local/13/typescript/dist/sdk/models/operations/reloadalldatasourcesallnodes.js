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
exports.ReloadAllDatasourcesAllNodesResponse = exports.ReloadAllDatasourcesAllNodes200ApplicationJson = exports.ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum = exports.ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum;
(function (ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum) {
    ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum["ReloadAllDatasourcesAllNodes"] = "ReloadAllDatasourcesAllNodes";
})(ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum = exports.ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum || (exports.ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum = {}));
var ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum;
(function (ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum) {
    ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum["Success"] = "success";
    ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum = exports.ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum || (exports.ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum = {}));
var ReloadAllDatasourcesAllNodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadAllDatasourcesAllNodes200ApplicationJson, _super);
    function ReloadAllDatasourcesAllNodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesAllNodes200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesAllNodes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesAllNodes200ApplicationJson.prototype, "result", void 0);
    return ReloadAllDatasourcesAllNodes200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReloadAllDatasourcesAllNodes200ApplicationJson = ReloadAllDatasourcesAllNodes200ApplicationJson;
var ReloadAllDatasourcesAllNodesResponse = /** @class */ (function (_super) {
    __extends(ReloadAllDatasourcesAllNodesResponse, _super);
    function ReloadAllDatasourcesAllNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReloadAllDatasourcesAllNodesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReloadAllDatasourcesAllNodes200ApplicationJson)
    ], ReloadAllDatasourcesAllNodesResponse.prototype, "reloadAllDatasourcesAllNodes200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReloadAllDatasourcesAllNodesResponse.prototype, "statusCode", void 0);
    return ReloadAllDatasourcesAllNodesResponse;
}(utils_1.SpeakeasyBase));
exports.ReloadAllDatasourcesAllNodesResponse = ReloadAllDatasourcesAllNodesResponse;
