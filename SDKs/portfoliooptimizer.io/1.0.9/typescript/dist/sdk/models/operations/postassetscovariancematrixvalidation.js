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
exports.PostAssetsCovarianceMatrixValidationResponse = exports.PostAssetsCovarianceMatrixValidationRequest = exports.PostAssetsCovarianceMatrixValidation200ApplicationJson = exports.PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum = exports.PostAssetsCovarianceMatrixValidationRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostAssetsCovarianceMatrixValidationRequestBody = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixValidationRequestBody, _super);
    function PostAssetsCovarianceMatrixValidationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCovarianceMatrixValidationRequestBody.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrixValidationRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    return PostAssetsCovarianceMatrixValidationRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAssetsCovarianceMatrixValidationRequestBody = PostAssetsCovarianceMatrixValidationRequestBody;
var PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum;
(function (PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum) {
    PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum["ValidCovarianceMatrix"] = "valid covariance matrix";
    PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum["InvalidCovarianceMatrixNonSymmetricMatrix"] = "invalid covariance matrix - non symmetric matrix";
    PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum["InvalidCovarianceMatrixNonPositiveDiagonalElements"] = "invalid covariance matrix - non positive diagonal elements";
    PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum["InvalidCovarianceMatrixNonPositiveSemiDefiniteMatrix"] = "invalid covariance matrix - non positive semi-definite matrix";
})(PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum = exports.PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum || (exports.PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum = {}));
var PostAssetsCovarianceMatrixValidation200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixValidation200ApplicationJson, _super);
    function PostAssetsCovarianceMatrixValidation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAssetsCovarianceMatrixValidation200ApplicationJson.prototype, "message", void 0);
    return PostAssetsCovarianceMatrixValidation200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAssetsCovarianceMatrixValidation200ApplicationJson = PostAssetsCovarianceMatrixValidation200ApplicationJson;
var PostAssetsCovarianceMatrixValidationRequest = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixValidationRequest, _super);
    function PostAssetsCovarianceMatrixValidationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAssetsCovarianceMatrixValidationRequestBody)
    ], PostAssetsCovarianceMatrixValidationRequest.prototype, "request", void 0);
    return PostAssetsCovarianceMatrixValidationRequest;
}(utils_1.SpeakeasyBase));
exports.PostAssetsCovarianceMatrixValidationRequest = PostAssetsCovarianceMatrixValidationRequest;
var PostAssetsCovarianceMatrixValidationResponse = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixValidationResponse, _super);
    function PostAssetsCovarianceMatrixValidationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAssetsCovarianceMatrixValidationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAssetsCovarianceMatrixValidationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssetsCovarianceMatrixValidation200ApplicationJson)
    ], PostAssetsCovarianceMatrixValidationResponse.prototype, "postAssetsCovarianceMatrixValidation200ApplicationJSONObject", void 0);
    return PostAssetsCovarianceMatrixValidationResponse;
}(utils_1.SpeakeasyBase));
exports.PostAssetsCovarianceMatrixValidationResponse = PostAssetsCovarianceMatrixValidationResponse;
