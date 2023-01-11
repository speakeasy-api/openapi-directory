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
exports.GetQuoteAuthorsSearchResponse = exports.GetQuoteAuthorsSearchRequest = exports.GetQuoteAuthorsSearchSecurity = exports.GetQuoteAuthorsSearchQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetQuoteAuthorsSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetQuoteAuthorsSearchQueryParams, _super);
    function GetQuoteAuthorsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=detailed" }),
        __metadata("design:type", Boolean)
    ], GetQuoteAuthorsSearchQueryParams.prototype, "detailed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetQuoteAuthorsSearchQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetQuoteAuthorsSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetQuoteAuthorsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetQuoteAuthorsSearchQueryParams.prototype, "start", void 0);
    return GetQuoteAuthorsSearchQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetQuoteAuthorsSearchQueryParams = GetQuoteAuthorsSearchQueryParams;
var GetQuoteAuthorsSearchSecurity = /** @class */ (function (_super) {
    __extends(GetQuoteAuthorsSearchSecurity, _super);
    function GetQuoteAuthorsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXTheySaidSoApiSecret)
    ], GetQuoteAuthorsSearchSecurity.prototype, "xTheySaidSoApiSecret", void 0);
    return GetQuoteAuthorsSearchSecurity;
}(utils_1.SpeakeasyBase));
exports.GetQuoteAuthorsSearchSecurity = GetQuoteAuthorsSearchSecurity;
var GetQuoteAuthorsSearchRequest = /** @class */ (function (_super) {
    __extends(GetQuoteAuthorsSearchRequest, _super);
    function GetQuoteAuthorsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetQuoteAuthorsSearchQueryParams)
    ], GetQuoteAuthorsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetQuoteAuthorsSearchSecurity)
    ], GetQuoteAuthorsSearchRequest.prototype, "security", void 0);
    return GetQuoteAuthorsSearchRequest;
}(utils_1.SpeakeasyBase));
exports.GetQuoteAuthorsSearchRequest = GetQuoteAuthorsSearchRequest;
var GetQuoteAuthorsSearchResponse = /** @class */ (function (_super) {
    __extends(GetQuoteAuthorsSearchResponse, _super);
    function GetQuoteAuthorsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetQuoteAuthorsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetQuoteAuthorsSearchResponse.prototype, "statusCode", void 0);
    return GetQuoteAuthorsSearchResponse;
}(utils_1.SpeakeasyBase));
exports.GetQuoteAuthorsSearchResponse = GetQuoteAuthorsSearchResponse;
