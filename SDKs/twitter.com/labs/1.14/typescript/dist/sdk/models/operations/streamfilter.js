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
exports.StreamFilterResponse = exports.StreamFilterRequest = exports.StreamFilterQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var StreamFilterQueryParams = /** @class */ (function (_super) {
    __extends(StreamFilterQueryParams, _super);
    function StreamFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=expansions" }),
        __metadata("design:type", Array)
    ], StreamFilterQueryParams.prototype, "expansions", void 0);
    return StreamFilterQueryParams;
}(utils_1.SpeakeasyBase));
exports.StreamFilterQueryParams = StreamFilterQueryParams;
var StreamFilterRequest = /** @class */ (function (_super) {
    __extends(StreamFilterRequest, _super);
    function StreamFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StreamFilterQueryParams)
    ], StreamFilterRequest.prototype, "queryParams", void 0);
    return StreamFilterRequest;
}(utils_1.SpeakeasyBase));
exports.StreamFilterRequest = StreamFilterRequest;
var StreamFilterResponse = /** @class */ (function (_super) {
    __extends(StreamFilterResponse, _super);
    function StreamFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StreamFilterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StreamFilterResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StreamFilterResponse.prototype, "problem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StreamFilterResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StreamFilterResponse.prototype, "streamFilter200ApplicationJSONObject", void 0);
    return StreamFilterResponse;
}(utils_1.SpeakeasyBase));
exports.StreamFilterResponse = StreamFilterResponse;
