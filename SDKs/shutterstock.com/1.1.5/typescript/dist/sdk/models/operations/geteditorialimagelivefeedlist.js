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
exports.GetEditorialImageLivefeedListResponse = exports.GetEditorialImageLivefeedListRequest = exports.GetEditorialImageLivefeedListSecurity = exports.GetEditorialImageLivefeedListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetEditorialImageLivefeedListQueryParams = /** @class */ (function (_super) {
    __extends(GetEditorialImageLivefeedListQueryParams, _super);
    function GetEditorialImageLivefeedListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetEditorialImageLivefeedListQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEditorialImageLivefeedListQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetEditorialImageLivefeedListQueryParams.prototype, "perPage", void 0);
    return GetEditorialImageLivefeedListQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetEditorialImageLivefeedListQueryParams = GetEditorialImageLivefeedListQueryParams;
var GetEditorialImageLivefeedListSecurity = /** @class */ (function (_super) {
    __extends(GetEditorialImageLivefeedListSecurity, _super);
    function GetEditorialImageLivefeedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetEditorialImageLivefeedListSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetEditorialImageLivefeedListSecurity.prototype, "customerAccessCode", void 0);
    return GetEditorialImageLivefeedListSecurity;
}(utils_1.SpeakeasyBase));
exports.GetEditorialImageLivefeedListSecurity = GetEditorialImageLivefeedListSecurity;
var GetEditorialImageLivefeedListRequest = /** @class */ (function (_super) {
    __extends(GetEditorialImageLivefeedListRequest, _super);
    function GetEditorialImageLivefeedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEditorialImageLivefeedListQueryParams)
    ], GetEditorialImageLivefeedListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEditorialImageLivefeedListSecurity)
    ], GetEditorialImageLivefeedListRequest.prototype, "security", void 0);
    return GetEditorialImageLivefeedListRequest;
}(utils_1.SpeakeasyBase));
exports.GetEditorialImageLivefeedListRequest = GetEditorialImageLivefeedListRequest;
var GetEditorialImageLivefeedListResponse = /** @class */ (function (_super) {
    __extends(GetEditorialImageLivefeedListResponse, _super);
    function GetEditorialImageLivefeedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEditorialImageLivefeedListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.EditorialImageLivefeedList)
    ], GetEditorialImageLivefeedListResponse.prototype, "editorialImageLivefeedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEditorialImageLivefeedListResponse.prototype, "statusCode", void 0);
    return GetEditorialImageLivefeedListResponse;
}(utils_1.SpeakeasyBase));
exports.GetEditorialImageLivefeedListResponse = GetEditorialImageLivefeedListResponse;
