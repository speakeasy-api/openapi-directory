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
exports.GetResponse = exports.GetRequest = exports.GetQueryParams = exports.GetIncludeLicensedContentEnum = exports.GetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPathParams = /** @class */ (function (_super) {
    __extends(GetPathParams, _super);
    function GetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPathParams.prototype, "id", void 0);
    return GetPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPathParams = GetPathParams;
var GetIncludeLicensedContentEnum;
(function (GetIncludeLicensedContentEnum) {
    GetIncludeLicensedContentEnum["Yes"] = "yes";
    GetIncludeLicensedContentEnum["No"] = " no";
})(GetIncludeLicensedContentEnum = exports.GetIncludeLicensedContentEnum || (exports.GetIncludeLicensedContentEnum = {}));
var GetQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryParams, _super);
    function GetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "includeLicensedContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "locale", void 0);
    return GetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetQueryParams = GetQueryParams;
var GetRequest = /** @class */ (function (_super) {
    __extends(GetRequest, _super);
    function GetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPathParams)
    ], GetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetQueryParams)
    ], GetRequest.prototype, "queryParams", void 0);
    return GetRequest;
}(utils_1.SpeakeasyBase));
exports.GetRequest = GetRequest;
var GetResponse = /** @class */ (function (_super) {
    __extends(GetResponse, _super);
    function GetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResponse.prototype, "statusCode", void 0);
    return GetResponse;
}(utils_1.SpeakeasyBase));
exports.GetResponse = GetResponse;
