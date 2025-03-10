"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.DoSigmaUsdExchangeResponse = exports.DoSigmaUsdExchangeRequest = void 0;
var utils_1 = require("../../../internal/utils");
var DoSigmaUsdExchangeRequest = /** @class */ (function (_super) {
    __extends(DoSigmaUsdExchangeRequest, _super);
    function DoSigmaUsdExchangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=address",
        }),
        __metadata("design:type", String)
    ], DoSigmaUsdExchangeRequest.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=amount",
        }),
        __metadata("design:type", Number)
    ], DoSigmaUsdExchangeRequest.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=checkRate",
        }),
        __metadata("design:type", Number)
    ], DoSigmaUsdExchangeRequest.prototype, "checkRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=executionFee",
        }),
        __metadata("design:type", Number)
    ], DoSigmaUsdExchangeRequest.prototype, "executionFee", void 0);
    return DoSigmaUsdExchangeRequest;
}(utils_1.SpeakeasyBase));
exports.DoSigmaUsdExchangeRequest = DoSigmaUsdExchangeRequest;
var DoSigmaUsdExchangeResponse = /** @class */ (function (_super) {
    __extends(DoSigmaUsdExchangeResponse, _super);
    function DoSigmaUsdExchangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DoSigmaUsdExchangeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DoSigmaUsdExchangeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DoSigmaUsdExchangeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DoSigmaUsdExchangeResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DoSigmaUsdExchangeResponse.prototype, "doSigmaUsdExchange400WildcardString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DoSigmaUsdExchangeResponse.prototype, "doSigmaUsdExchange401WildcardString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DoSigmaUsdExchangeResponse.prototype, "doSigmaUsdExchange404WildcardString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DoSigmaUsdExchangeResponse.prototype, "doSigmaUsdExchange409WildcardString", void 0);
    return DoSigmaUsdExchangeResponse;
}(utils_1.SpeakeasyBase));
exports.DoSigmaUsdExchangeResponse = DoSigmaUsdExchangeResponse;
