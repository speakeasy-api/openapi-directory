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
exports.PostTruckDistanceBetweenPairsOutputFormatResponse = exports.PostTruckDistanceBetweenPairsOutputFormatRequest = exports.PostTruckDistanceBetweenPairsOutputFormatQueryParams = exports.PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = exports.PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum = exports.PostTruckDistanceBetweenPairsOutputFormatPathParams = exports.PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
(function (PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum) {
    PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum["Json"] = "json";
    PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum["Html"] = "html";
})(PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = exports.PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum || (exports.PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = {}));
var PostTruckDistanceBetweenPairsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostTruckDistanceBetweenPairsOutputFormatPathParams, _super);
    function PostTruckDistanceBetweenPairsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostTruckDistanceBetweenPairsOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTruckDistanceBetweenPairsOutputFormatPathParams = PostTruckDistanceBetweenPairsOutputFormatPathParams;
var PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
(function (PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum) {
    PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum = exports.PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum || (exports.PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum = {}));
var PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
(function (PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum) {
    PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum["Km"] = "km";
    PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = exports.PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum || (exports.PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = {}));
var PostTruckDistanceBetweenPairsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostTruckDistanceBetweenPairsOutputFormatQueryParams, _super);
    function PostTruckDistanceBetweenPairsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromPoints" }),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "fromPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxPairs" }),
        __metadata("design:type", Number)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "maxPairs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=toPoints" }),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatQueryParams.prototype, "toPoints", void 0);
    return PostTruckDistanceBetweenPairsOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostTruckDistanceBetweenPairsOutputFormatQueryParams = PostTruckDistanceBetweenPairsOutputFormatQueryParams;
var PostTruckDistanceBetweenPairsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostTruckDistanceBetweenPairsOutputFormatRequest, _super);
    function PostTruckDistanceBetweenPairsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTruckDistanceBetweenPairsOutputFormatPathParams)
    ], PostTruckDistanceBetweenPairsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTruckDistanceBetweenPairsOutputFormatQueryParams)
    ], PostTruckDistanceBetweenPairsOutputFormatRequest.prototype, "queryParams", void 0);
    return PostTruckDistanceBetweenPairsOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.PostTruckDistanceBetweenPairsOutputFormatRequest = PostTruckDistanceBetweenPairsOutputFormatRequest;
var PostTruckDistanceBetweenPairsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostTruckDistanceBetweenPairsOutputFormatResponse, _super);
    function PostTruckDistanceBetweenPairsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTruckDistanceBetweenPairsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTruckDistanceBetweenPairsOutputFormatResponse.prototype, "statusCode", void 0);
    return PostTruckDistanceBetweenPairsOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.PostTruckDistanceBetweenPairsOutputFormatResponse = PostTruckDistanceBetweenPairsOutputFormatResponse;
