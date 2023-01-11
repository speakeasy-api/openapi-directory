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
exports.UnbindNetworkResponse = exports.UnbindNetworkRequest = exports.UnbindNetworkPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UnbindNetworkPathParams = /** @class */ (function (_super) {
    __extends(UnbindNetworkPathParams, _super);
    function UnbindNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UnbindNetworkPathParams.prototype, "networkId", void 0);
    return UnbindNetworkPathParams;
}(utils_1.SpeakeasyBase));
exports.UnbindNetworkPathParams = UnbindNetworkPathParams;
var UnbindNetworkRequest = /** @class */ (function (_super) {
    __extends(UnbindNetworkRequest, _super);
    function UnbindNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UnbindNetworkPathParams)
    ], UnbindNetworkRequest.prototype, "pathParams", void 0);
    return UnbindNetworkRequest;
}(utils_1.SpeakeasyBase));
exports.UnbindNetworkRequest = UnbindNetworkRequest;
var UnbindNetworkResponse = /** @class */ (function (_super) {
    __extends(UnbindNetworkResponse, _super);
    function UnbindNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UnbindNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UnbindNetworkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UnbindNetworkResponse.prototype, "unbindNetwork200ApplicationJSONObject", void 0);
    return UnbindNetworkResponse;
}(utils_1.SpeakeasyBase));
exports.UnbindNetworkResponse = UnbindNetworkResponse;
