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
exports.GetArticlesearchJsonResponse = exports.GetArticlesearchJsonRequest = exports.GetArticlesearchJson200ApplicationJson = exports.GetArticlesearchJson200ApplicationJsonResponse = exports.GetArticlesearchJson200ApplicationJsonResponseMeta = exports.GetArticlesearchJsonQueryParams = exports.GetArticlesearchJsonSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetArticlesearchJsonSortEnum;
(function (GetArticlesearchJsonSortEnum) {
    GetArticlesearchJsonSortEnum["Newest"] = "newest";
    GetArticlesearchJsonSortEnum["Oldest"] = "oldest";
})(GetArticlesearchJsonSortEnum = exports.GetArticlesearchJsonSortEnum || (exports.GetArticlesearchJsonSortEnum = {}));
var GetArticlesearchJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetArticlesearchJsonQueryParams, _super);
    function GetArticlesearchJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=begin_date" }),
        __metadata("design:type", String)
    ], GetArticlesearchJsonQueryParams.prototype, "beginDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetArticlesearchJsonQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_field" }),
        __metadata("design:type", String)
    ], GetArticlesearchJsonQueryParams.prototype, "facetField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_filter" }),
        __metadata("design:type", Boolean)
    ], GetArticlesearchJsonQueryParams.prototype, "facetFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fl" }),
        __metadata("design:type", String)
    ], GetArticlesearchJsonQueryParams.prototype, "fl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fq" }),
        __metadata("design:type", String)
    ], GetArticlesearchJsonQueryParams.prototype, "fq", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", Boolean)
    ], GetArticlesearchJsonQueryParams.prototype, "hl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetArticlesearchJsonQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetArticlesearchJsonQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetArticlesearchJsonQueryParams.prototype, "sort", void 0);
    return GetArticlesearchJsonQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetArticlesearchJsonQueryParams = GetArticlesearchJsonQueryParams;
var GetArticlesearchJson200ApplicationJsonResponseMeta = /** @class */ (function (_super) {
    __extends(GetArticlesearchJson200ApplicationJsonResponseMeta, _super);
    function GetArticlesearchJson200ApplicationJsonResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hits" }),
        __metadata("design:type", Number)
    ], GetArticlesearchJson200ApplicationJsonResponseMeta.prototype, "hits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GetArticlesearchJson200ApplicationJsonResponseMeta.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetArticlesearchJson200ApplicationJsonResponseMeta.prototype, "time", void 0);
    return GetArticlesearchJson200ApplicationJsonResponseMeta;
}(utils_1.SpeakeasyBase));
exports.GetArticlesearchJson200ApplicationJsonResponseMeta = GetArticlesearchJson200ApplicationJsonResponseMeta;
var GetArticlesearchJson200ApplicationJsonResponse = /** @class */ (function (_super) {
    __extends(GetArticlesearchJson200ApplicationJsonResponse, _super);
    function GetArticlesearchJson200ApplicationJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=docs", elemType: shared.Doc }),
        __metadata("design:type", Array)
    ], GetArticlesearchJson200ApplicationJsonResponse.prototype, "docs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetArticlesearchJson200ApplicationJsonResponseMeta)
    ], GetArticlesearchJson200ApplicationJsonResponse.prototype, "meta", void 0);
    return GetArticlesearchJson200ApplicationJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetArticlesearchJson200ApplicationJsonResponse = GetArticlesearchJson200ApplicationJsonResponse;
var GetArticlesearchJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetArticlesearchJson200ApplicationJson, _super);
    function GetArticlesearchJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", GetArticlesearchJson200ApplicationJsonResponse)
    ], GetArticlesearchJson200ApplicationJson.prototype, "response", void 0);
    return GetArticlesearchJson200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetArticlesearchJson200ApplicationJson = GetArticlesearchJson200ApplicationJson;
var GetArticlesearchJsonRequest = /** @class */ (function (_super) {
    __extends(GetArticlesearchJsonRequest, _super);
    function GetArticlesearchJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetArticlesearchJsonQueryParams)
    ], GetArticlesearchJsonRequest.prototype, "queryParams", void 0);
    return GetArticlesearchJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetArticlesearchJsonRequest = GetArticlesearchJsonRequest;
var GetArticlesearchJsonResponse = /** @class */ (function (_super) {
    __extends(GetArticlesearchJsonResponse, _super);
    function GetArticlesearchJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetArticlesearchJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetArticlesearchJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetArticlesearchJson200ApplicationJson)
    ], GetArticlesearchJsonResponse.prototype, "getArticlesearchJSON200ApplicationJSONObject", void 0);
    return GetArticlesearchJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetArticlesearchJsonResponse = GetArticlesearchJsonResponse;
