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
exports.BrowserBotResponse = void 0;
var utils_1 = require("../../../internal/utils");
var BrowserBotResponse = /** @class */ (function (_super) {
    __extends(BrowserBotResponse, _super);
    function BrowserBotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elements" }),
        __metadata("design:type", Array)
    ], BrowserBotResponse.prototype, "elements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=execResults" }),
        __metadata("design:type", Array)
    ], BrowserBotResponse.prototype, "execResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpRedirectUrl" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "httpRedirectUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpStatusCode" }),
        __metadata("design:type", Number)
    ], BrowserBotResponse.prototype, "httpStatusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpStatusMessage" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "httpStatusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isError" }),
        __metadata("design:type", Boolean)
    ], BrowserBotResponse.prototype, "isError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isHttpOk" }),
        __metadata("design:type", Boolean)
    ], BrowserBotResponse.prototype, "isHttpOk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isHttpRedirect" }),
        __metadata("design:type", Boolean)
    ], BrowserBotResponse.prototype, "isHttpRedirect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSecure" }),
        __metadata("design:type", Boolean)
    ], BrowserBotResponse.prototype, "isSecure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isTimeout" }),
        __metadata("design:type", Boolean)
    ], BrowserBotResponse.prototype, "isTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loadTime" }),
        __metadata("design:type", Number)
    ], BrowserBotResponse.prototype, "loadTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "mimeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responseHeaders" }),
        __metadata("design:type", Object)
    ], BrowserBotResponse.prototype, "responseHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityDetails" }),
        __metadata("design:type", Object)
    ], BrowserBotResponse.prototype, "securityDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverIp" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "serverIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BrowserBotResponse.prototype, "url", void 0);
    return BrowserBotResponse;
}(utils_1.SpeakeasyBase));
exports.BrowserBotResponse = BrowserBotResponse;
