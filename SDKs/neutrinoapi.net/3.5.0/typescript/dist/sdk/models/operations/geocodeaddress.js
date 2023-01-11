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
exports.GeocodeAddressResponse = exports.GeocodeAddressRequest = exports.GeocodeAddressRequestBody = exports.GeocodeAddressRequestBodyOutputCaseEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GeocodeAddressRequestBodyOutputCaseEnum;
(function (GeocodeAddressRequestBodyOutputCaseEnum) {
    GeocodeAddressRequestBodyOutputCaseEnum["Camel"] = "camel";
})(GeocodeAddressRequestBodyOutputCaseEnum = exports.GeocodeAddressRequestBodyOutputCaseEnum || (exports.GeocodeAddressRequestBodyOutputCaseEnum = {}));
var GeocodeAddressRequestBody = /** @class */ (function (_super) {
    __extends(GeocodeAddressRequestBody, _super);
    function GeocodeAddressRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=address;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=city;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=country-code;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=county;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=fuzzy-search;" }),
        __metadata("design:type", Boolean)
    ], GeocodeAddressRequestBody.prototype, "fuzzySearch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=house-number;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "houseNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=language-code;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=output-case;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "outputCase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=postal-code;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=state;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=street;" }),
        __metadata("design:type", String)
    ], GeocodeAddressRequestBody.prototype, "street", void 0);
    return GeocodeAddressRequestBody;
}(utils_1.SpeakeasyBase));
exports.GeocodeAddressRequestBody = GeocodeAddressRequestBody;
var GeocodeAddressRequest = /** @class */ (function (_super) {
    __extends(GeocodeAddressRequest, _super);
    function GeocodeAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", GeocodeAddressRequestBody)
    ], GeocodeAddressRequest.prototype, "request", void 0);
    return GeocodeAddressRequest;
}(utils_1.SpeakeasyBase));
exports.GeocodeAddressRequest = GeocodeAddressRequest;
var GeocodeAddressResponse = /** @class */ (function (_super) {
    __extends(GeocodeAddressResponse, _super);
    function GeocodeAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiError)
    ], GeocodeAddressResponse.prototype, "apiError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GeocodeAddressResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GeocodeAddressResponse)
    ], GeocodeAddressResponse.prototype, "geocodeAddressResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GeocodeAddressResponse.prototype, "statusCode", void 0);
    return GeocodeAddressResponse;
}(utils_1.SpeakeasyBase));
exports.GeocodeAddressResponse = GeocodeAddressResponse;
