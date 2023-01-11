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
exports.GetListsNamesFormatResponse = exports.GetListsNamesFormatRequest = exports.GetListsNamesFormat200ApplicationJson = exports.GetListsNamesFormat200ApplicationJsonResults = exports.GetListsNamesFormatSecurity = exports.GetListsNamesFormatQueryParams = exports.GetListsNamesFormatPathParams = exports.GetListsNamesFormatFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListsNamesFormatFormatEnum;
(function (GetListsNamesFormatFormatEnum) {
    GetListsNamesFormatFormatEnum["Json"] = "json";
    GetListsNamesFormatFormatEnum["Jsonp"] = "jsonp";
})(GetListsNamesFormatFormatEnum = exports.GetListsNamesFormatFormatEnum || (exports.GetListsNamesFormatFormatEnum = {}));
var GetListsNamesFormatPathParams = /** @class */ (function (_super) {
    __extends(GetListsNamesFormatPathParams, _super);
    function GetListsNamesFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetListsNamesFormatPathParams.prototype, "format", void 0);
    return GetListsNamesFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetListsNamesFormatPathParams = GetListsNamesFormatPathParams;
var GetListsNamesFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetListsNamesFormatQueryParams, _super);
    function GetListsNamesFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-key" }),
        __metadata("design:type", String)
    ], GetListsNamesFormatQueryParams.prototype, "apiKey", void 0);
    return GetListsNamesFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListsNamesFormatQueryParams = GetListsNamesFormatQueryParams;
var GetListsNamesFormatSecurity = /** @class */ (function (_super) {
    __extends(GetListsNamesFormatSecurity, _super);
    function GetListsNamesFormatSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetListsNamesFormatSecurity.prototype, "apiKey", void 0);
    return GetListsNamesFormatSecurity;
}(utils_1.SpeakeasyBase));
exports.GetListsNamesFormatSecurity = GetListsNamesFormatSecurity;
var GetListsNamesFormat200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetListsNamesFormat200ApplicationJsonResults, _super);
    function GetListsNamesFormat200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJsonResults.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=list_name" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJsonResults.prototype, "listName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=list_name_encoded" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJsonResults.prototype, "listNameEncoded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newest_published_date" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJsonResults.prototype, "newestPublishedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oldest_published_date" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJsonResults.prototype, "oldestPublishedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJsonResults.prototype, "updated", void 0);
    return GetListsNamesFormat200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetListsNamesFormat200ApplicationJsonResults = GetListsNamesFormat200ApplicationJsonResults;
var GetListsNamesFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListsNamesFormat200ApplicationJson, _super);
    function GetListsNamesFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetListsNamesFormat200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: GetListsNamesFormat200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetListsNamesFormat200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetListsNamesFormat200ApplicationJson.prototype, "status", void 0);
    return GetListsNamesFormat200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListsNamesFormat200ApplicationJson = GetListsNamesFormat200ApplicationJson;
var GetListsNamesFormatRequest = /** @class */ (function (_super) {
    __extends(GetListsNamesFormatRequest, _super);
    function GetListsNamesFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListsNamesFormatPathParams)
    ], GetListsNamesFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListsNamesFormatQueryParams)
    ], GetListsNamesFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListsNamesFormatSecurity)
    ], GetListsNamesFormatRequest.prototype, "security", void 0);
    return GetListsNamesFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetListsNamesFormatRequest = GetListsNamesFormatRequest;
var GetListsNamesFormatResponse = /** @class */ (function (_super) {
    __extends(GetListsNamesFormatResponse, _super);
    function GetListsNamesFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListsNamesFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListsNamesFormat200ApplicationJson)
    ], GetListsNamesFormatResponse.prototype, "getListsNamesFormat200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListsNamesFormatResponse.prototype, "statusCode", void 0);
    return GetListsNamesFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetListsNamesFormatResponse = GetListsNamesFormatResponse;
