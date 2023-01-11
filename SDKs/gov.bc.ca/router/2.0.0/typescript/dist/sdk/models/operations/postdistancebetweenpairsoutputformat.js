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
exports.PostDistanceBetweenPairsOutputFormatResponse = exports.PostDistanceBetweenPairsOutputFormatRequest = exports.PostDistanceBetweenPairsOutputFormatQueryParams = exports.PostDistanceBetweenPairsOutputFormatDistanceUnitEnum = exports.PostDistanceBetweenPairsOutputFormatCriteriaEnum = exports.PostDistanceBetweenPairsOutputFormatPathParams = exports.PostDistanceBetweenPairsOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDistanceBetweenPairsOutputFormatOutputFormatEnum;
(function (PostDistanceBetweenPairsOutputFormatOutputFormatEnum) {
    PostDistanceBetweenPairsOutputFormatOutputFormatEnum["Json"] = "json";
    PostDistanceBetweenPairsOutputFormatOutputFormatEnum["Html"] = "html";
})(PostDistanceBetweenPairsOutputFormatOutputFormatEnum = exports.PostDistanceBetweenPairsOutputFormatOutputFormatEnum || (exports.PostDistanceBetweenPairsOutputFormatOutputFormatEnum = {}));
var PostDistanceBetweenPairsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostDistanceBetweenPairsOutputFormatPathParams, _super);
    function PostDistanceBetweenPairsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostDistanceBetweenPairsOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.PostDistanceBetweenPairsOutputFormatPathParams = PostDistanceBetweenPairsOutputFormatPathParams;
var PostDistanceBetweenPairsOutputFormatCriteriaEnum;
(function (PostDistanceBetweenPairsOutputFormatCriteriaEnum) {
    PostDistanceBetweenPairsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostDistanceBetweenPairsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostDistanceBetweenPairsOutputFormatCriteriaEnum = exports.PostDistanceBetweenPairsOutputFormatCriteriaEnum || (exports.PostDistanceBetweenPairsOutputFormatCriteriaEnum = {}));
var PostDistanceBetweenPairsOutputFormatDistanceUnitEnum;
(function (PostDistanceBetweenPairsOutputFormatDistanceUnitEnum) {
    PostDistanceBetweenPairsOutputFormatDistanceUnitEnum["Km"] = "km";
    PostDistanceBetweenPairsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostDistanceBetweenPairsOutputFormatDistanceUnitEnum = exports.PostDistanceBetweenPairsOutputFormatDistanceUnitEnum || (exports.PostDistanceBetweenPairsOutputFormatDistanceUnitEnum = {}));
var PostDistanceBetweenPairsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostDistanceBetweenPairsOutputFormatQueryParams, _super);
    function PostDistanceBetweenPairsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromPoints" }),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "fromPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxPairs" }),
        __metadata("design:type", Number)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "maxPairs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=toPoints" }),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatQueryParams.prototype, "toPoints", void 0);
    return PostDistanceBetweenPairsOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDistanceBetweenPairsOutputFormatQueryParams = PostDistanceBetweenPairsOutputFormatQueryParams;
var PostDistanceBetweenPairsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostDistanceBetweenPairsOutputFormatRequest, _super);
    function PostDistanceBetweenPairsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDistanceBetweenPairsOutputFormatPathParams)
    ], PostDistanceBetweenPairsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDistanceBetweenPairsOutputFormatQueryParams)
    ], PostDistanceBetweenPairsOutputFormatRequest.prototype, "queryParams", void 0);
    return PostDistanceBetweenPairsOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.PostDistanceBetweenPairsOutputFormatRequest = PostDistanceBetweenPairsOutputFormatRequest;
var PostDistanceBetweenPairsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostDistanceBetweenPairsOutputFormatResponse, _super);
    function PostDistanceBetweenPairsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDistanceBetweenPairsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDistanceBetweenPairsOutputFormatResponse.prototype, "statusCode", void 0);
    return PostDistanceBetweenPairsOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.PostDistanceBetweenPairsOutputFormatResponse = PostDistanceBetweenPairsOutputFormatResponse;
