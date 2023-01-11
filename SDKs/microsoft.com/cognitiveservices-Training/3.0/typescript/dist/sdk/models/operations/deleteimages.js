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
exports.DeleteImagesResponse = exports.DeleteImagesRequest = exports.DeleteImagesHeaders = exports.DeleteImagesQueryParams = exports.DeleteImagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteImagesPathParams = /** @class */ (function (_super) {
    __extends(DeleteImagesPathParams, _super);
    function DeleteImagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DeleteImagesPathParams.prototype, "projectId", void 0);
    return DeleteImagesPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteImagesPathParams = DeleteImagesPathParams;
var DeleteImagesQueryParams = /** @class */ (function (_super) {
    __extends(DeleteImagesQueryParams, _super);
    function DeleteImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=imageIds" }),
        __metadata("design:type", Array)
    ], DeleteImagesQueryParams.prototype, "imageIds", void 0);
    return DeleteImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteImagesQueryParams = DeleteImagesQueryParams;
var DeleteImagesHeaders = /** @class */ (function (_super) {
    __extends(DeleteImagesHeaders, _super);
    function DeleteImagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], DeleteImagesHeaders.prototype, "trainingKey", void 0);
    return DeleteImagesHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteImagesHeaders = DeleteImagesHeaders;
var DeleteImagesRequest = /** @class */ (function (_super) {
    __extends(DeleteImagesRequest, _super);
    function DeleteImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteImagesPathParams)
    ], DeleteImagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteImagesQueryParams)
    ], DeleteImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteImagesHeaders)
    ], DeleteImagesRequest.prototype, "headers", void 0);
    return DeleteImagesRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteImagesRequest = DeleteImagesRequest;
var DeleteImagesResponse = /** @class */ (function (_super) {
    __extends(DeleteImagesResponse, _super);
    function DeleteImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeleteImagesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteImagesResponse.prototype, "statusCode", void 0);
    return DeleteImagesResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteImagesResponse = DeleteImagesResponse;
