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
exports.GlobalpageloadResponse = exports.GlobalpageloadRequest = exports.Globalpageload200ApplicationJson = exports.GlobalpageloadQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GlobalpageloadQueryParams = /** @class */ (function (_super) {
    __extends(GlobalpageloadQueryParams, _super);
    function GlobalpageloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GlobalpageloadQueryParams.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], GlobalpageloadQueryParams.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GlobalpageloadQueryParams.prototype, "url", void 0);
    return GlobalpageloadQueryParams;
}(utils_1.SpeakeasyBase));
exports.GlobalpageloadQueryParams = GlobalpageloadQueryParams;
var Globalpageload200ApplicationJson = /** @class */ (function (_super) {
    __extends(Globalpageload200ApplicationJson, _super);
    function Globalpageload200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Globalpageload200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Contents" }),
        __metadata("design:type", String)
    ], Globalpageload200ApplicationJson.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Globalpageload200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Origin" }),
        __metadata("design:type", String)
    ], Globalpageload200ApplicationJson.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PageResponseStatus" }),
        __metadata("design:type", String)
    ], Globalpageload200ApplicationJson.prototype, "pageResponseStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Seconds" }),
        __metadata("design:type", String)
    ], Globalpageload200ApplicationJson.prototype, "seconds", void 0);
    return Globalpageload200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Globalpageload200ApplicationJson = Globalpageload200ApplicationJson;
var GlobalpageloadRequest = /** @class */ (function (_super) {
    __extends(GlobalpageloadRequest, _super);
    function GlobalpageloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GlobalpageloadQueryParams)
    ], GlobalpageloadRequest.prototype, "queryParams", void 0);
    return GlobalpageloadRequest;
}(utils_1.SpeakeasyBase));
exports.GlobalpageloadRequest = GlobalpageloadRequest;
var GlobalpageloadResponse = /** @class */ (function (_super) {
    __extends(GlobalpageloadResponse, _super);
    function GlobalpageloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GlobalpageloadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GlobalpageloadResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Globalpageload200ApplicationJson)
    ], GlobalpageloadResponse.prototype, "globalpageload200ApplicationJSONObject", void 0);
    return GlobalpageloadResponse;
}(utils_1.SpeakeasyBase));
exports.GlobalpageloadResponse = GlobalpageloadResponse;
