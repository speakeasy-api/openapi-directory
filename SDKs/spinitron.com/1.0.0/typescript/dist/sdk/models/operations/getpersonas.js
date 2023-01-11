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
exports.GetPersonasResponse = exports.GetPersonasRequest = exports.GetPersonas200ApplicationJson = exports.GetPersonas200ApplicationJsonLinks = exports.GetPersonasQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPersonasQueryParams = /** @class */ (function (_super) {
    __extends(GetPersonasQueryParams, _super);
    function GetPersonasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetPersonasQueryParams.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], GetPersonasQueryParams.prototype, "expand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetPersonasQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetPersonasQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPersonasQueryParams.prototype, "page", void 0);
    return GetPersonasQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPersonasQueryParams = GetPersonasQueryParams;
var GetPersonas200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetPersonas200ApplicationJsonLinks, _super);
    function GetPersonas200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", shared.Link)
    ], GetPersonas200ApplicationJsonLinks.prototype, "self", void 0);
    return GetPersonas200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.GetPersonas200ApplicationJsonLinks = GetPersonas200ApplicationJsonLinks;
var GetPersonas200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPersonas200ApplicationJson, _super);
    function GetPersonas200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetPersonas200ApplicationJsonLinks)
    ], GetPersonas200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_meta" }),
        __metadata("design:type", shared.Pagination)
    ], GetPersonas200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.Persona }),
        __metadata("design:type", Array)
    ], GetPersonas200ApplicationJson.prototype, "items", void 0);
    return GetPersonas200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPersonas200ApplicationJson = GetPersonas200ApplicationJson;
var GetPersonasRequest = /** @class */ (function (_super) {
    __extends(GetPersonasRequest, _super);
    function GetPersonasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPersonasQueryParams)
    ], GetPersonasRequest.prototype, "queryParams", void 0);
    return GetPersonasRequest;
}(utils_1.SpeakeasyBase));
exports.GetPersonasRequest = GetPersonasRequest;
var GetPersonasResponse = /** @class */ (function (_super) {
    __extends(GetPersonasResponse, _super);
    function GetPersonasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetPersonasResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPersonasResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPersonasResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPersonas200ApplicationJson)
    ], GetPersonasResponse.prototype, "getPersonas200ApplicationJSONObject", void 0);
    return GetPersonasResponse;
}(utils_1.SpeakeasyBase));
exports.GetPersonasResponse = GetPersonasResponse;
