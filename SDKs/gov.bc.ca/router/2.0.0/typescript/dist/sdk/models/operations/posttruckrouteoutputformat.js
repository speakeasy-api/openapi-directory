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
exports.PostTruckRouteOutputFormatResponse = exports.PostTruckRouteOutputFormatRequest = exports.PostTruckRouteOutputFormatQueryParams = exports.PostTruckRouteOutputFormatDistanceUnitEnum = exports.PostTruckRouteOutputFormatCriteriaEnum = exports.PostTruckRouteOutputFormatPathParams = exports.PostTruckRouteOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostTruckRouteOutputFormatOutputFormatEnum;
(function (PostTruckRouteOutputFormatOutputFormatEnum) {
    PostTruckRouteOutputFormatOutputFormatEnum["Json"] = "json";
    PostTruckRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostTruckRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(PostTruckRouteOutputFormatOutputFormatEnum = exports.PostTruckRouteOutputFormatOutputFormatEnum || (exports.PostTruckRouteOutputFormatOutputFormatEnum = {}));
var PostTruckRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostTruckRouteOutputFormatPathParams, _super);
    function PostTruckRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostTruckRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostTruckRouteOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTruckRouteOutputFormatPathParams = PostTruckRouteOutputFormatPathParams;
var PostTruckRouteOutputFormatCriteriaEnum;
(function (PostTruckRouteOutputFormatCriteriaEnum) {
    PostTruckRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostTruckRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostTruckRouteOutputFormatCriteriaEnum = exports.PostTruckRouteOutputFormatCriteriaEnum || (exports.PostTruckRouteOutputFormatCriteriaEnum = {}));
var PostTruckRouteOutputFormatDistanceUnitEnum;
(function (PostTruckRouteOutputFormatDistanceUnitEnum) {
    PostTruckRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    PostTruckRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostTruckRouteOutputFormatDistanceUnitEnum = exports.PostTruckRouteOutputFormatDistanceUnitEnum || (exports.PostTruckRouteOutputFormatDistanceUnitEnum = {}));
var PostTruckRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostTruckRouteOutputFormatQueryParams, _super);
    function PostTruckRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostTruckRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostTruckRouteOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostTruckRouteOutputFormatQueryParams = PostTruckRouteOutputFormatQueryParams;
var PostTruckRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostTruckRouteOutputFormatRequest, _super);
    function PostTruckRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTruckRouteOutputFormatPathParams)
    ], PostTruckRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTruckRouteOutputFormatQueryParams)
    ], PostTruckRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return PostTruckRouteOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.PostTruckRouteOutputFormatRequest = PostTruckRouteOutputFormatRequest;
var PostTruckRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostTruckRouteOutputFormatResponse, _super);
    function PostTruckRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTruckRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTruckRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return PostTruckRouteOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.PostTruckRouteOutputFormatResponse = PostTruckRouteOutputFormatResponse;
