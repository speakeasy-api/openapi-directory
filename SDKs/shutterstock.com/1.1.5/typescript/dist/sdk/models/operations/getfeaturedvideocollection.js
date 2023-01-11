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
exports.GetFeaturedVideoCollectionResponse = exports.GetFeaturedVideoCollectionRequest = exports.GetFeaturedVideoCollectionSecurity = exports.GetFeaturedVideoCollectionQueryParams = exports.GetFeaturedVideoCollectionEmbedEnum = exports.GetFeaturedVideoCollectionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetFeaturedVideoCollectionPathParams = /** @class */ (function (_super) {
    __extends(GetFeaturedVideoCollectionPathParams, _super);
    function GetFeaturedVideoCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetFeaturedVideoCollectionPathParams.prototype, "id", void 0);
    return GetFeaturedVideoCollectionPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFeaturedVideoCollectionPathParams = GetFeaturedVideoCollectionPathParams;
var GetFeaturedVideoCollectionEmbedEnum;
(function (GetFeaturedVideoCollectionEmbedEnum) {
    GetFeaturedVideoCollectionEmbedEnum["ShareUrl"] = "share_url";
})(GetFeaturedVideoCollectionEmbedEnum = exports.GetFeaturedVideoCollectionEmbedEnum || (exports.GetFeaturedVideoCollectionEmbedEnum = {}));
var GetFeaturedVideoCollectionQueryParams = /** @class */ (function (_super) {
    __extends(GetFeaturedVideoCollectionQueryParams, _super);
    function GetFeaturedVideoCollectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", String)
    ], GetFeaturedVideoCollectionQueryParams.prototype, "embed", void 0);
    return GetFeaturedVideoCollectionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFeaturedVideoCollectionQueryParams = GetFeaturedVideoCollectionQueryParams;
var GetFeaturedVideoCollectionSecurity = /** @class */ (function (_super) {
    __extends(GetFeaturedVideoCollectionSecurity, _super);
    function GetFeaturedVideoCollectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetFeaturedVideoCollectionSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetFeaturedVideoCollectionSecurity.prototype, "customerAccessCode", void 0);
    return GetFeaturedVideoCollectionSecurity;
}(utils_1.SpeakeasyBase));
exports.GetFeaturedVideoCollectionSecurity = GetFeaturedVideoCollectionSecurity;
var GetFeaturedVideoCollectionRequest = /** @class */ (function (_super) {
    __extends(GetFeaturedVideoCollectionRequest, _super);
    function GetFeaturedVideoCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFeaturedVideoCollectionPathParams)
    ], GetFeaturedVideoCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFeaturedVideoCollectionQueryParams)
    ], GetFeaturedVideoCollectionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFeaturedVideoCollectionSecurity)
    ], GetFeaturedVideoCollectionRequest.prototype, "security", void 0);
    return GetFeaturedVideoCollectionRequest;
}(utils_1.SpeakeasyBase));
exports.GetFeaturedVideoCollectionRequest = GetFeaturedVideoCollectionRequest;
var GetFeaturedVideoCollectionResponse = /** @class */ (function (_super) {
    __extends(GetFeaturedVideoCollectionResponse, _super);
    function GetFeaturedVideoCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFeaturedVideoCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FeaturedCollection)
    ], GetFeaturedVideoCollectionResponse.prototype, "featuredCollection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFeaturedVideoCollectionResponse.prototype, "statusCode", void 0);
    return GetFeaturedVideoCollectionResponse;
}(utils_1.SpeakeasyBase));
exports.GetFeaturedVideoCollectionResponse = GetFeaturedVideoCollectionResponse;
