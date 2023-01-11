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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDiscoveryV2VenuesResponse = exports.GetDiscoveryV2VenuesRequest = exports.GetDiscoveryV2VenuesQueryParams = exports.GetDiscoveryV2VenuesUnitEnum = exports.GetDiscoveryV2VenuesSourceEnum = exports.GetDiscoveryV2VenuesIncludeTestEnum = exports.GetDiscoveryV2VenuesIncludeSpellcheckEnum = exports.GetDiscoveryV2VenuesIncludeLicensedContentEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDiscoveryV2VenuesIncludeLicensedContentEnum;
(function (GetDiscoveryV2VenuesIncludeLicensedContentEnum) {
    GetDiscoveryV2VenuesIncludeLicensedContentEnum["Yes"] = "yes";
    GetDiscoveryV2VenuesIncludeLicensedContentEnum["No"] = " no";
})(GetDiscoveryV2VenuesIncludeLicensedContentEnum = exports.GetDiscoveryV2VenuesIncludeLicensedContentEnum || (exports.GetDiscoveryV2VenuesIncludeLicensedContentEnum = {}));
var GetDiscoveryV2VenuesIncludeSpellcheckEnum;
(function (GetDiscoveryV2VenuesIncludeSpellcheckEnum) {
    GetDiscoveryV2VenuesIncludeSpellcheckEnum["Yes"] = "yes";
    GetDiscoveryV2VenuesIncludeSpellcheckEnum["No"] = " no";
})(GetDiscoveryV2VenuesIncludeSpellcheckEnum = exports.GetDiscoveryV2VenuesIncludeSpellcheckEnum || (exports.GetDiscoveryV2VenuesIncludeSpellcheckEnum = {}));
var GetDiscoveryV2VenuesIncludeTestEnum;
(function (GetDiscoveryV2VenuesIncludeTestEnum) {
    GetDiscoveryV2VenuesIncludeTestEnum["Yes"] = "yes";
    GetDiscoveryV2VenuesIncludeTestEnum["No"] = " no";
    GetDiscoveryV2VenuesIncludeTestEnum["Only"] = " only";
})(GetDiscoveryV2VenuesIncludeTestEnum = exports.GetDiscoveryV2VenuesIncludeTestEnum || (exports.GetDiscoveryV2VenuesIncludeTestEnum = {}));
var GetDiscoveryV2VenuesSourceEnum;
(function (GetDiscoveryV2VenuesSourceEnum) {
    GetDiscoveryV2VenuesSourceEnum["Ticketmaster"] = "ticketmaster";
    GetDiscoveryV2VenuesSourceEnum["Universe"] = " universe";
    GetDiscoveryV2VenuesSourceEnum["Frontgate"] = " frontgate";
    GetDiscoveryV2VenuesSourceEnum["Tmr"] = " tmr";
})(GetDiscoveryV2VenuesSourceEnum = exports.GetDiscoveryV2VenuesSourceEnum || (exports.GetDiscoveryV2VenuesSourceEnum = {}));
var GetDiscoveryV2VenuesUnitEnum;
(function (GetDiscoveryV2VenuesUnitEnum) {
    GetDiscoveryV2VenuesUnitEnum["Miles"] = "miles";
    GetDiscoveryV2VenuesUnitEnum["Km"] = "km";
})(GetDiscoveryV2VenuesUnitEnum = exports.GetDiscoveryV2VenuesUnitEnum || (exports.GetDiscoveryV2VenuesUnitEnum = {}));
var GetDiscoveryV2VenuesQueryParams = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2VenuesQueryParams, _super);
    function GetDiscoveryV2VenuesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=countryCode" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=geoPoint" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "geoPoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "includeLicensedContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "includeSpellcheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeTest" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "includeTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keyword" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "keyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=latlong" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "latlong", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "radius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=stateCode" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "stateCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesQueryParams.prototype, "unit", void 0);
    return GetDiscoveryV2VenuesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2VenuesQueryParams = GetDiscoveryV2VenuesQueryParams;
var GetDiscoveryV2VenuesRequest = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2VenuesRequest, _super);
    function GetDiscoveryV2VenuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDiscoveryV2VenuesQueryParams)
    ], GetDiscoveryV2VenuesRequest.prototype, "queryParams", void 0);
    return GetDiscoveryV2VenuesRequest;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2VenuesRequest = GetDiscoveryV2VenuesRequest;
var GetDiscoveryV2VenuesResponse = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2VenuesResponse, _super);
    function GetDiscoveryV2VenuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDiscoveryV2VenuesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDiscoveryV2VenuesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDiscoveryV2VenuesResponse.prototype, "statusCode", void 0);
    return GetDiscoveryV2VenuesResponse;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2VenuesResponse = GetDiscoveryV2VenuesResponse;
