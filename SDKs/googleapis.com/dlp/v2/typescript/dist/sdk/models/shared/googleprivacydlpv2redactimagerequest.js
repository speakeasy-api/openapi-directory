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
exports.GooglePrivacyDlpV2RedactImageRequest = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2bytecontentitem_1 = require("./googleprivacydlpv2bytecontentitem");
var googleprivacydlpv2imageredactionconfig_1 = require("./googleprivacydlpv2imageredactionconfig");
var googleprivacydlpv2inspectconfig_1 = require("./googleprivacydlpv2inspectconfig");
// GooglePrivacyDlpV2RedactImageRequest
/**
 * Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
**/
var GooglePrivacyDlpV2RedactImageRequest = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2RedactImageRequest, _super);
    function GooglePrivacyDlpV2RedactImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=byteItem" }),
        __metadata("design:type", googleprivacydlpv2bytecontentitem_1.GooglePrivacyDlpV2ByteContentItem)
    ], GooglePrivacyDlpV2RedactImageRequest.prototype, "byteItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageRedactionConfigs", elemType: googleprivacydlpv2imageredactionconfig_1.GooglePrivacyDlpV2ImageRedactionConfig }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2RedactImageRequest.prototype, "imageRedactionConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includeFindings" }),
        __metadata("design:type", Boolean)
    ], GooglePrivacyDlpV2RedactImageRequest.prototype, "includeFindings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inspectConfig" }),
        __metadata("design:type", googleprivacydlpv2inspectconfig_1.GooglePrivacyDlpV2InspectConfig)
    ], GooglePrivacyDlpV2RedactImageRequest.prototype, "inspectConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2RedactImageRequest.prototype, "locationId", void 0);
    return GooglePrivacyDlpV2RedactImageRequest;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2RedactImageRequest = GooglePrivacyDlpV2RedactImageRequest;
