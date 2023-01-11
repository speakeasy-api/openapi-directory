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
exports.GetImagesResponse = exports.GetImagesRequest = exports.GetImagesQueryParams = exports.GetImagesIncludeLicensedContentEnum = exports.GetImagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetImagesPathParams = /** @class */ (function (_super) {
    __extends(GetImagesPathParams, _super);
    function GetImagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetImagesPathParams.prototype, "id", void 0);
    return GetImagesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetImagesPathParams = GetImagesPathParams;
var GetImagesIncludeLicensedContentEnum;
(function (GetImagesIncludeLicensedContentEnum) {
    GetImagesIncludeLicensedContentEnum["Yes"] = "yes";
    GetImagesIncludeLicensedContentEnum["No"] = " no";
})(GetImagesIncludeLicensedContentEnum = exports.GetImagesIncludeLicensedContentEnum || (exports.GetImagesIncludeLicensedContentEnum = {}));
var GetImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetImagesQueryParams, _super);
    function GetImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "includeLicensedContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetImagesQueryParams.prototype, "locale", void 0);
    return GetImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetImagesQueryParams = GetImagesQueryParams;
var GetImagesRequest = /** @class */ (function (_super) {
    __extends(GetImagesRequest, _super);
    function GetImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImagesPathParams)
    ], GetImagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImagesQueryParams)
    ], GetImagesRequest.prototype, "queryParams", void 0);
    return GetImagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetImagesRequest = GetImagesRequest;
var GetImagesResponse = /** @class */ (function (_super) {
    __extends(GetImagesResponse, _super);
    function GetImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetImagesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetImagesResponse.prototype, "statusCode", void 0);
    return GetImagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetImagesResponse = GetImagesResponse;
