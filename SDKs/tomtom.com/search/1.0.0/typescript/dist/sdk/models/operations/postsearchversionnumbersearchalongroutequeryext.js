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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSearchVersionNumberSearchAlongRouteQueryExtResponse = exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequest = exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody = exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute = exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints = exports.PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams = exports.PostSearchVersionNumberSearchAlongRouteQueryExtPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostSearchVersionNumberSearchAlongRouteQueryExtPathParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtPathParams, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtPathParams.prototype, "ext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtPathParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtPathParams.prototype, "versionNumber", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtPathParams;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberSearchAlongRouteQueryExtPathParams = PostSearchVersionNumberSearchAlongRouteQueryExtPathParams;
var PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxDetourTime" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams.prototype, "maxDetourTime", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams = PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams;
var PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints.prototype, "lat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints.prototype, "lon", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints = PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints;
var PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=points", elemType: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute.prototype, "points", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute = PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
var PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=route" }),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody.prototype, "route", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody = PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
var PostSearchVersionNumberSearchAlongRouteQueryExtRequest = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequest, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtPathParams)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequest.prototype, "request", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequest;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberSearchAlongRouteQueryExtRequest = PostSearchVersionNumberSearchAlongRouteQueryExtRequest;
var PostSearchVersionNumberSearchAlongRouteQueryExtResponse = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtResponse, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtResponse.prototype, "statusCode", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtResponse;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberSearchAlongRouteQueryExtResponse = PostSearchVersionNumberSearchAlongRouteQueryExtResponse;
