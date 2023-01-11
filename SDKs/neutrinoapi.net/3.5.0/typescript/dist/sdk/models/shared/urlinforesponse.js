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
exports.UrlInfoResponse = void 0;
var utils_1 = require("../../../internal/utils");
var UrlInfoResponse = /** @class */ (function (_super) {
    __extends(UrlInfoResponse, _super);
    function UrlInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentEncoding" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "contentEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentSize" }),
        __metadata("design:type", Number)
    ], UrlInfoResponse.prototype, "contentSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpOk" }),
        __metadata("design:type", Boolean)
    ], UrlInfoResponse.prototype, "httpOk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpRedirect" }),
        __metadata("design:type", Boolean)
    ], UrlInfoResponse.prototype, "httpRedirect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpStatus" }),
        __metadata("design:type", Number)
    ], UrlInfoResponse.prototype, "httpStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpStatusMessage" }),
        __metadata("design:type", Number)
    ], UrlInfoResponse.prototype, "httpStatusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isError" }),
        __metadata("design:type", Boolean)
    ], UrlInfoResponse.prototype, "isError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isTimeout" }),
        __metadata("design:type", Boolean)
    ], UrlInfoResponse.prototype, "isTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loadTime" }),
        __metadata("design:type", Number)
    ], UrlInfoResponse.prototype, "loadTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", Object)
    ], UrlInfoResponse.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=real" }),
        __metadata("design:type", Boolean)
    ], UrlInfoResponse.prototype, "real", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverCity" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "serverCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverCountry" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "serverCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverCountryCode" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "serverCountryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverHostname" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "serverHostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverIp" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "serverIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverName" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "serverName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverRegion" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "serverRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "urlPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPort" }),
        __metadata("design:type", Number)
    ], UrlInfoResponse.prototype, "urlPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlProtocol" }),
        __metadata("design:type", String)
    ], UrlInfoResponse.prototype, "urlProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], UrlInfoResponse.prototype, "valid", void 0);
    return UrlInfoResponse;
}(utils_1.SpeakeasyBase));
exports.UrlInfoResponse = UrlInfoResponse;
