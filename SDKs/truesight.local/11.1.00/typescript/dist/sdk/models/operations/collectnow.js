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
exports.CollectNowResponse = exports.CollectNowRequest = exports.CollectNowQueryParams = exports.CollectNowPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CollectNowPathParams = /** @class */ (function (_super) {
    __extends(CollectNowPathParams, _super);
    function CollectNowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", Number)
    ], CollectNowPathParams.prototype, "deviceId", void 0);
    return CollectNowPathParams;
}(utils_1.SpeakeasyBase));
exports.CollectNowPathParams = CollectNowPathParams;
var CollectNowQueryParams = /** @class */ (function (_super) {
    __extends(CollectNowQueryParams, _super);
    function CollectNowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=monitorClass" }),
        __metadata("design:type", String)
    ], CollectNowQueryParams.prototype, "monitorClass", void 0);
    return CollectNowQueryParams;
}(utils_1.SpeakeasyBase));
exports.CollectNowQueryParams = CollectNowQueryParams;
var CollectNowRequest = /** @class */ (function (_super) {
    __extends(CollectNowRequest, _super);
    function CollectNowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CollectNowPathParams)
    ], CollectNowRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CollectNowQueryParams)
    ], CollectNowRequest.prototype, "queryParams", void 0);
    return CollectNowRequest;
}(utils_1.SpeakeasyBase));
exports.CollectNowRequest = CollectNowRequest;
var CollectNowResponse = /** @class */ (function (_super) {
    __extends(CollectNowResponse, _super);
    function CollectNowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CollectNowResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CollectNowResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CollectNowResponse.prototype, "statusCode", void 0);
    return CollectNowResponse;
}(utils_1.SpeakeasyBase));
exports.CollectNowResponse = CollectNowResponse;
