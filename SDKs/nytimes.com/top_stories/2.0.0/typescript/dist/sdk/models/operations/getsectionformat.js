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
exports.GetSectionFormatResponse = exports.GetSectionFormatRequest = exports.GetSectionFormat200ApplicationJson = exports.GetSectionFormatQueryParams = exports.GetSectionFormatPathParams = exports.GetSectionFormatSectionEnum = exports.GetSectionFormatFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSectionFormatFormatEnum;
(function (GetSectionFormatFormatEnum) {
    GetSectionFormatFormatEnum["Json"] = "json";
    GetSectionFormatFormatEnum["Jsonp"] = "jsonp";
})(GetSectionFormatFormatEnum = exports.GetSectionFormatFormatEnum || (exports.GetSectionFormatFormatEnum = {}));
var GetSectionFormatSectionEnum;
(function (GetSectionFormatSectionEnum) {
    GetSectionFormatSectionEnum["Home"] = "home";
    GetSectionFormatSectionEnum["Opinion"] = "opinion";
    GetSectionFormatSectionEnum["World"] = "world";
    GetSectionFormatSectionEnum["National"] = "national";
    GetSectionFormatSectionEnum["Politics"] = "politics";
    GetSectionFormatSectionEnum["Upshot"] = "upshot";
    GetSectionFormatSectionEnum["Nyregion"] = "nyregion";
    GetSectionFormatSectionEnum["Business"] = "business";
    GetSectionFormatSectionEnum["Technology"] = "technology";
    GetSectionFormatSectionEnum["Science"] = "science";
    GetSectionFormatSectionEnum["Health"] = "health";
    GetSectionFormatSectionEnum["Sports"] = "sports";
    GetSectionFormatSectionEnum["Arts"] = "arts";
    GetSectionFormatSectionEnum["Books"] = "books";
    GetSectionFormatSectionEnum["Movies"] = "movies";
    GetSectionFormatSectionEnum["Theater"] = "theater";
    GetSectionFormatSectionEnum["Sundayreview"] = "sundayreview";
    GetSectionFormatSectionEnum["Fashion"] = "fashion";
    GetSectionFormatSectionEnum["Tmagazine"] = "tmagazine";
    GetSectionFormatSectionEnum["Food"] = "food";
    GetSectionFormatSectionEnum["Travel"] = "travel";
    GetSectionFormatSectionEnum["Magazine"] = "magazine";
    GetSectionFormatSectionEnum["Realestate"] = "realestate";
    GetSectionFormatSectionEnum["Automobiles"] = "automobiles";
    GetSectionFormatSectionEnum["Obituaries"] = "obituaries";
    GetSectionFormatSectionEnum["Insider"] = "insider";
})(GetSectionFormatSectionEnum = exports.GetSectionFormatSectionEnum || (exports.GetSectionFormatSectionEnum = {}));
var GetSectionFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSectionFormatPathParams, _super);
    function GetSectionFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetSectionFormatPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetSectionFormatPathParams.prototype, "section", void 0);
    return GetSectionFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSectionFormatPathParams = GetSectionFormatPathParams;
var GetSectionFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSectionFormatQueryParams, _super);
    function GetSectionFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetSectionFormatQueryParams.prototype, "callback", void 0);
    return GetSectionFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSectionFormatQueryParams = GetSectionFormatQueryParams;
var GetSectionFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSectionFormat200ApplicationJson, _super);
    function GetSectionFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetSectionFormat200ApplicationJson.prototype, "results", void 0);
    return GetSectionFormat200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSectionFormat200ApplicationJson = GetSectionFormat200ApplicationJson;
var GetSectionFormatRequest = /** @class */ (function (_super) {
    __extends(GetSectionFormatRequest, _super);
    function GetSectionFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSectionFormatPathParams)
    ], GetSectionFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSectionFormatQueryParams)
    ], GetSectionFormatRequest.prototype, "queryParams", void 0);
    return GetSectionFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetSectionFormatRequest = GetSectionFormatRequest;
var GetSectionFormatResponse = /** @class */ (function (_super) {
    __extends(GetSectionFormatResponse, _super);
    function GetSectionFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSectionFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSectionFormatResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSectionFormat200ApplicationJson)
    ], GetSectionFormatResponse.prototype, "getSectionFormat200ApplicationJSONObject", void 0);
    return GetSectionFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetSectionFormatResponse = GetSectionFormatResponse;
