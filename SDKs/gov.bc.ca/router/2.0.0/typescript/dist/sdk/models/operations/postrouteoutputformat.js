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
exports.PostRouteOutputFormatResponse = exports.PostRouteOutputFormatRequest = exports.PostRouteOutputFormatQueryParams = exports.PostRouteOutputFormatDistanceUnitEnum = exports.PostRouteOutputFormatCriteriaEnum = exports.PostRouteOutputFormatPathParams = exports.PostRouteOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostRouteOutputFormatOutputFormatEnum;
(function (PostRouteOutputFormatOutputFormatEnum) {
    PostRouteOutputFormatOutputFormatEnum["Json"] = "json";
    PostRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    PostRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(PostRouteOutputFormatOutputFormatEnum = exports.PostRouteOutputFormatOutputFormatEnum || (exports.PostRouteOutputFormatOutputFormatEnum = {}));
var PostRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(PostRouteOutputFormatPathParams, _super);
    function PostRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], PostRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return PostRouteOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.PostRouteOutputFormatPathParams = PostRouteOutputFormatPathParams;
var PostRouteOutputFormatCriteriaEnum;
(function (PostRouteOutputFormatCriteriaEnum) {
    PostRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    PostRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(PostRouteOutputFormatCriteriaEnum = exports.PostRouteOutputFormatCriteriaEnum || (exports.PostRouteOutputFormatCriteriaEnum = {}));
var PostRouteOutputFormatDistanceUnitEnum;
(function (PostRouteOutputFormatDistanceUnitEnum) {
    PostRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    PostRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(PostRouteOutputFormatDistanceUnitEnum = exports.PostRouteOutputFormatDistanceUnitEnum || (exports.PostRouteOutputFormatDistanceUnitEnum = {}));
var PostRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostRouteOutputFormatQueryParams, _super);
    function PostRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], PostRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], PostRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], PostRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], PostRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], PostRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], PostRouteOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], PostRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], PostRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], PostRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return PostRouteOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostRouteOutputFormatQueryParams = PostRouteOutputFormatQueryParams;
var PostRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(PostRouteOutputFormatRequest, _super);
    function PostRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRouteOutputFormatPathParams)
    ], PostRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRouteOutputFormatQueryParams)
    ], PostRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return PostRouteOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.PostRouteOutputFormatRequest = PostRouteOutputFormatRequest;
var PostRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(PostRouteOutputFormatResponse, _super);
    function PostRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return PostRouteOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.PostRouteOutputFormatResponse = PostRouteOutputFormatResponse;
