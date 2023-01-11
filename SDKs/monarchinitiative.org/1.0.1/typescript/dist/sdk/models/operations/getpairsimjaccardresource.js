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
exports.GetPairSimJaccardResourceResponse = exports.GetPairSimJaccardResourceRequest = exports.GetPairSimJaccardResourceQueryParams = exports.GetPairSimJaccardResourcePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPairSimJaccardResourcePathParams = /** @class */ (function (_super) {
    __extends(GetPairSimJaccardResourcePathParams, _super);
    function GetPairSimJaccardResourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id1" }),
        __metadata("design:type", String)
    ], GetPairSimJaccardResourcePathParams.prototype, "id1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id2" }),
        __metadata("design:type", String)
    ], GetPairSimJaccardResourcePathParams.prototype, "id2", void 0);
    return GetPairSimJaccardResourcePathParams;
}(utils_1.SpeakeasyBase));
exports.GetPairSimJaccardResourcePathParams = GetPairSimJaccardResourcePathParams;
var GetPairSimJaccardResourceQueryParams = /** @class */ (function (_super) {
    __extends(GetPairSimJaccardResourceQueryParams, _super);
    function GetPairSimJaccardResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=object_category" }),
        __metadata("design:type", String)
    ], GetPairSimJaccardResourceQueryParams.prototype, "objectCategory", void 0);
    return GetPairSimJaccardResourceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPairSimJaccardResourceQueryParams = GetPairSimJaccardResourceQueryParams;
var GetPairSimJaccardResourceRequest = /** @class */ (function (_super) {
    __extends(GetPairSimJaccardResourceRequest, _super);
    function GetPairSimJaccardResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPairSimJaccardResourcePathParams)
    ], GetPairSimJaccardResourceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPairSimJaccardResourceQueryParams)
    ], GetPairSimJaccardResourceRequest.prototype, "queryParams", void 0);
    return GetPairSimJaccardResourceRequest;
}(utils_1.SpeakeasyBase));
exports.GetPairSimJaccardResourceRequest = GetPairSimJaccardResourceRequest;
var GetPairSimJaccardResourceResponse = /** @class */ (function (_super) {
    __extends(GetPairSimJaccardResourceResponse, _super);
    function GetPairSimJaccardResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPairSimJaccardResourceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPairSimJaccardResourceResponse.prototype, "statusCode", void 0);
    return GetPairSimJaccardResourceResponse;
}(utils_1.SpeakeasyBase));
exports.GetPairSimJaccardResourceResponse = GetPairSimJaccardResourceResponse;
