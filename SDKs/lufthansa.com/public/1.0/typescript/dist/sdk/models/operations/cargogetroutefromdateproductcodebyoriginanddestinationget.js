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
exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse = exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest = exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity = exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders = exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams = exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
(function (CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum) {
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fan"] = "FAN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fco"] = "FCO";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fcp"] = "FCP";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fdg"] = "FDG";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ftf"] = "FTF";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fun"] = "FUN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fwn"] = "FWN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Yco"] = "YCO";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ycp"] = "YCP";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ydg"] = "YDG";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ynb"] = "YNB";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ynz"] = "YNZ";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ytf"] = "YTF";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Yun"] = "YUN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Zxb"] = "ZXB";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Zxf"] = "ZXF";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Zxr"] = "ZXR";
})(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum || (exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = {}));
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destination" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fromDate" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "fromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=productCode" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "productCode", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams;
}(utils_1.SpeakeasyBase));
exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams = CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams;
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders.prototype, "accept", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders;
}(utils_1.SpeakeasyBase));
exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders = CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders;
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity.prototype, "auth", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
}(utils_1.SpeakeasyBase));
exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity = CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest.prototype, "security", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
}(utils_1.SpeakeasyBase));
exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest = CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse.prototype, "cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse.prototype, "statusCode", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse;
}(utils_1.SpeakeasyBase));
exports.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse = CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse;
