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
exports.GetDiscoveryV2ClassificationsResponse = exports.GetDiscoveryV2ClassificationsRequest = exports.GetDiscoveryV2ClassificationsQueryParams = exports.GetDiscoveryV2ClassificationsSourceEnum = exports.GetDiscoveryV2ClassificationsIncludeTestEnum = exports.GetDiscoveryV2ClassificationsIncludeSpellcheckEnum = exports.GetDiscoveryV2ClassificationsIncludeLicensedContentEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDiscoveryV2ClassificationsIncludeLicensedContentEnum;
(function (GetDiscoveryV2ClassificationsIncludeLicensedContentEnum) {
    GetDiscoveryV2ClassificationsIncludeLicensedContentEnum["Yes"] = "yes";
    GetDiscoveryV2ClassificationsIncludeLicensedContentEnum["No"] = " no";
})(GetDiscoveryV2ClassificationsIncludeLicensedContentEnum = exports.GetDiscoveryV2ClassificationsIncludeLicensedContentEnum || (exports.GetDiscoveryV2ClassificationsIncludeLicensedContentEnum = {}));
var GetDiscoveryV2ClassificationsIncludeSpellcheckEnum;
(function (GetDiscoveryV2ClassificationsIncludeSpellcheckEnum) {
    GetDiscoveryV2ClassificationsIncludeSpellcheckEnum["Yes"] = "yes";
    GetDiscoveryV2ClassificationsIncludeSpellcheckEnum["No"] = " no";
})(GetDiscoveryV2ClassificationsIncludeSpellcheckEnum = exports.GetDiscoveryV2ClassificationsIncludeSpellcheckEnum || (exports.GetDiscoveryV2ClassificationsIncludeSpellcheckEnum = {}));
var GetDiscoveryV2ClassificationsIncludeTestEnum;
(function (GetDiscoveryV2ClassificationsIncludeTestEnum) {
    GetDiscoveryV2ClassificationsIncludeTestEnum["Yes"] = "yes";
    GetDiscoveryV2ClassificationsIncludeTestEnum["No"] = " no";
    GetDiscoveryV2ClassificationsIncludeTestEnum["Only"] = " only";
})(GetDiscoveryV2ClassificationsIncludeTestEnum = exports.GetDiscoveryV2ClassificationsIncludeTestEnum || (exports.GetDiscoveryV2ClassificationsIncludeTestEnum = {}));
var GetDiscoveryV2ClassificationsSourceEnum;
(function (GetDiscoveryV2ClassificationsSourceEnum) {
    GetDiscoveryV2ClassificationsSourceEnum["Ticketmaster"] = "ticketmaster";
    GetDiscoveryV2ClassificationsSourceEnum["Universe"] = " universe";
    GetDiscoveryV2ClassificationsSourceEnum["Frontgate"] = " frontgate";
    GetDiscoveryV2ClassificationsSourceEnum["Tmr"] = " tmr";
})(GetDiscoveryV2ClassificationsSourceEnum = exports.GetDiscoveryV2ClassificationsSourceEnum || (exports.GetDiscoveryV2ClassificationsSourceEnum = {}));
var GetDiscoveryV2ClassificationsQueryParams = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2ClassificationsQueryParams, _super);
    function GetDiscoveryV2ClassificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "includeLicensedContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "includeSpellcheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeTest" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "includeTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keyword" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "keyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsQueryParams.prototype, "source", void 0);
    return GetDiscoveryV2ClassificationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2ClassificationsQueryParams = GetDiscoveryV2ClassificationsQueryParams;
var GetDiscoveryV2ClassificationsRequest = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2ClassificationsRequest, _super);
    function GetDiscoveryV2ClassificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDiscoveryV2ClassificationsQueryParams)
    ], GetDiscoveryV2ClassificationsRequest.prototype, "queryParams", void 0);
    return GetDiscoveryV2ClassificationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2ClassificationsRequest = GetDiscoveryV2ClassificationsRequest;
var GetDiscoveryV2ClassificationsResponse = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2ClassificationsResponse, _super);
    function GetDiscoveryV2ClassificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDiscoveryV2ClassificationsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDiscoveryV2ClassificationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDiscoveryV2ClassificationsResponse.prototype, "statusCode", void 0);
    return GetDiscoveryV2ClassificationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2ClassificationsResponse = GetDiscoveryV2ClassificationsResponse;
