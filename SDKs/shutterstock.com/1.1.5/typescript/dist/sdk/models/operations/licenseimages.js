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
exports.LicenseImagesResponse = exports.LicenseImagesRequest = exports.LicenseImagesSecurity = exports.LicenseImagesQueryParams = exports.LicenseImagesSizeEnum = exports.LicenseImagesFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LicenseImagesFormatEnum;
(function (LicenseImagesFormatEnum) {
    LicenseImagesFormatEnum["Eps"] = "eps";
    LicenseImagesFormatEnum["Jpg"] = "jpg";
})(LicenseImagesFormatEnum = exports.LicenseImagesFormatEnum || (exports.LicenseImagesFormatEnum = {}));
var LicenseImagesSizeEnum;
(function (LicenseImagesSizeEnum) {
    LicenseImagesSizeEnum["Small"] = "small";
    LicenseImagesSizeEnum["Medium"] = "medium";
    LicenseImagesSizeEnum["Huge"] = "huge";
    LicenseImagesSizeEnum["Vector"] = "vector";
    LicenseImagesSizeEnum["Custom"] = "custom";
})(LicenseImagesSizeEnum = exports.LicenseImagesSizeEnum || (exports.LicenseImagesSizeEnum = {}));
var LicenseImagesQueryParams = /** @class */ (function (_super) {
    __extends(LicenseImagesQueryParams, _super);
    function LicenseImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], LicenseImagesQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search_id" }),
        __metadata("design:type", String)
    ], LicenseImagesQueryParams.prototype, "searchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], LicenseImagesQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subscription_id" }),
        __metadata("design:type", String)
    ], LicenseImagesQueryParams.prototype, "subscriptionId", void 0);
    return LicenseImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.LicenseImagesQueryParams = LicenseImagesQueryParams;
var LicenseImagesSecurity = /** @class */ (function (_super) {
    __extends(LicenseImagesSecurity, _super);
    function LicenseImagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], LicenseImagesSecurity.prototype, "customerAccessCode", void 0);
    return LicenseImagesSecurity;
}(utils_1.SpeakeasyBase));
exports.LicenseImagesSecurity = LicenseImagesSecurity;
var LicenseImagesRequest = /** @class */ (function (_super) {
    __extends(LicenseImagesRequest, _super);
    function LicenseImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LicenseImagesQueryParams)
    ], LicenseImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LicenseImageRequest)
    ], LicenseImagesRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LicenseImagesSecurity)
    ], LicenseImagesRequest.prototype, "security", void 0);
    return LicenseImagesRequest;
}(utils_1.SpeakeasyBase));
exports.LicenseImagesRequest = LicenseImagesRequest;
var LicenseImagesResponse = /** @class */ (function (_super) {
    __extends(LicenseImagesResponse, _super);
    function LicenseImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LicenseImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], LicenseImagesResponse.prototype, "licenseImageResultDataList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LicenseImagesResponse.prototype, "statusCode", void 0);
    return LicenseImagesResponse;
}(utils_1.SpeakeasyBase));
exports.LicenseImagesResponse = LicenseImagesResponse;
