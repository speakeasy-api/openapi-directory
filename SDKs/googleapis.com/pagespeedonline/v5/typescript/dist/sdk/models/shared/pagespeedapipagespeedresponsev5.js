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
exports.PagespeedApiPagespeedResponseV5 = void 0;
var utils_1 = require("../../../internal/utils");
var lighthouseresultv5_1 = require("./lighthouseresultv5");
var pagespeedapiloadingexperiencev5_1 = require("./pagespeedapiloadingexperiencev5");
var pagespeedversion_1 = require("./pagespeedversion");
// PagespeedApiPagespeedResponseV5
/**
 * The Pagespeed API response object.
**/
var PagespeedApiPagespeedResponseV5 = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV5, _super);
    function PagespeedApiPagespeedResponseV5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analysisUTCTimestamp" }),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV5.prototype, "analysisUTCTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=captchaResult" }),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV5.prototype, "captchaResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV5.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV5.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lighthouseResult" }),
        __metadata("design:type", lighthouseresultv5_1.LighthouseResultV5)
    ], PagespeedApiPagespeedResponseV5.prototype, "lighthouseResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loadingExperience" }),
        __metadata("design:type", pagespeedapiloadingexperiencev5_1.PagespeedApiLoadingExperienceV5)
    ], PagespeedApiPagespeedResponseV5.prototype, "loadingExperience", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originLoadingExperience" }),
        __metadata("design:type", pagespeedapiloadingexperiencev5_1.PagespeedApiLoadingExperienceV5)
    ], PagespeedApiPagespeedResponseV5.prototype, "originLoadingExperience", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", pagespeedversion_1.PagespeedVersion)
    ], PagespeedApiPagespeedResponseV5.prototype, "version", void 0);
    return PagespeedApiPagespeedResponseV5;
}(utils_1.SpeakeasyBase));
exports.PagespeedApiPagespeedResponseV5 = PagespeedApiPagespeedResponseV5;
