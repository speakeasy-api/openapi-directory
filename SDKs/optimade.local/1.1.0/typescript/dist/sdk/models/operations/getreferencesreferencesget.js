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
exports.GetReferencesReferencesGetResponse = exports.GetReferencesReferencesGetRequest = exports.GetReferencesReferencesGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetReferencesReferencesGetQueryParams = /** @class */ (function (_super) {
    __extends(GetReferencesReferencesGetQueryParams, _super);
    function GetReferencesReferencesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_hint" }),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetQueryParams.prototype, "apiHint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email_address" }),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetQueryParams.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetQueryParams.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_above" }),
        __metadata("design:type", Number)
    ], GetReferencesReferencesGetQueryParams.prototype, "pageAbove", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_below" }),
        __metadata("design:type", Number)
    ], GetReferencesReferencesGetQueryParams.prototype, "pageBelow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_cursor" }),
        __metadata("design:type", Number)
    ], GetReferencesReferencesGetQueryParams.prototype, "pageCursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_limit" }),
        __metadata("design:type", Number)
    ], GetReferencesReferencesGetQueryParams.prototype, "pageLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], GetReferencesReferencesGetQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_offset" }),
        __metadata("design:type", Number)
    ], GetReferencesReferencesGetQueryParams.prototype, "pageOffset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=response_fields" }),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetQueryParams.prototype, "responseFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=response_format" }),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetQueryParams.prototype, "responseFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetQueryParams.prototype, "sort", void 0);
    return GetReferencesReferencesGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReferencesReferencesGetQueryParams = GetReferencesReferencesGetQueryParams;
var GetReferencesReferencesGetRequest = /** @class */ (function (_super) {
    __extends(GetReferencesReferencesGetRequest, _super);
    function GetReferencesReferencesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReferencesReferencesGetQueryParams)
    ], GetReferencesReferencesGetRequest.prototype, "queryParams", void 0);
    return GetReferencesReferencesGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetReferencesReferencesGetRequest = GetReferencesReferencesGetRequest;
var GetReferencesReferencesGetResponse = /** @class */ (function (_super) {
    __extends(GetReferencesReferencesGetResponse, _super);
    function GetReferencesReferencesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReferencesReferencesGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetReferencesReferencesGetResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ReferenceResponseMany)
    ], GetReferencesReferencesGetResponse.prototype, "referenceResponseMany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReferencesReferencesGetResponse.prototype, "statusCode", void 0);
    return GetReferencesReferencesGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetReferencesReferencesGetResponse = GetReferencesReferencesGetResponse;
