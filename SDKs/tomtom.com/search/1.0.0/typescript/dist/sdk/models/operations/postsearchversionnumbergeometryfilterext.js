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
exports.PostSearchVersionNumberGeometryFilterExtResponse = exports.PostSearchVersionNumberGeometryFilterExtRequest = exports.PostSearchVersionNumberGeometryFilterExtRequestBody = exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList = exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition = exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi = exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress = exports.PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList = exports.PostSearchVersionNumberGeometryFilterExtPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostSearchVersionNumberGeometryFilterExtPathParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtPathParams, _super);
    function PostSearchVersionNumberGeometryFilterExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometryFilterExtPathParams.prototype, "ext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometryFilterExtPathParams.prototype, "versionNumber", void 0);
    return PostSearchVersionNumberGeometryFilterExtPathParams;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtPathParams = PostSearchVersionNumberGeometryFilterExtPathParams;
var PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList, _super);
    function PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=radius" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList.prototype, "radius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vertices" }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList.prototype, "vertices", void 0);
    return PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList = PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList;
var PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress, _super);
    function PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freeformAddress" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress.prototype, "freeformAddress", void 0);
    return PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress = PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress;
var PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi, _super);
    function PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi.prototype, "name", void 0);
    return PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi = PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi;
var PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition, _super);
    function PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition.prototype, "lat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition.prototype, "lon", void 0);
    return PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition = PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition;
var PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList, _super);
    function PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=poi" }),
        __metadata("design:type", PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList.prototype, "poi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition)
    ], PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList.prototype, "position", void 0);
    return PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList = PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList;
var PostSearchVersionNumberGeometryFilterExtRequestBody = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtRequestBody, _super);
    function PostSearchVersionNumberGeometryFilterExtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=geometryList", elemType: PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberGeometryFilterExtRequestBody.prototype, "geometryList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=poiList", elemType: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberGeometryFilterExtRequestBody.prototype, "poiList", void 0);
    return PostSearchVersionNumberGeometryFilterExtRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtRequestBody = PostSearchVersionNumberGeometryFilterExtRequestBody;
var PostSearchVersionNumberGeometryFilterExtRequest = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtRequest, _super);
    function PostSearchVersionNumberGeometryFilterExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSearchVersionNumberGeometryFilterExtPathParams)
    ], PostSearchVersionNumberGeometryFilterExtRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSearchVersionNumberGeometryFilterExtRequestBody)
    ], PostSearchVersionNumberGeometryFilterExtRequest.prototype, "request", void 0);
    return PostSearchVersionNumberGeometryFilterExtRequest;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtRequest = PostSearchVersionNumberGeometryFilterExtRequest;
var PostSearchVersionNumberGeometryFilterExtResponse = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometryFilterExtResponse, _super);
    function PostSearchVersionNumberGeometryFilterExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometryFilterExtResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometryFilterExtResponse.prototype, "statusCode", void 0);
    return PostSearchVersionNumberGeometryFilterExtResponse;
}(utils_1.SpeakeasyBase));
exports.PostSearchVersionNumberGeometryFilterExtResponse = PostSearchVersionNumberGeometryFilterExtResponse;
