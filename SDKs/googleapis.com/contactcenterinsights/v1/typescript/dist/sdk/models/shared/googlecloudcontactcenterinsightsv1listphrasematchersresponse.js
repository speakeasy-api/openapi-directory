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
exports.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudcontactcenterinsightsv1phrasematcher_1 = require("./googlecloudcontactcenterinsightsv1phrasematcher");
// GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
/**
 * The response of listing phrase matchers.
**/
var GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse, _super);
    function GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phraseMatchers", elemType: googlecloudcontactcenterinsightsv1phrasematcher_1.GoogleCloudContactcenterinsightsV1PhraseMatcher }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse.prototype, "phraseMatchers", void 0);
    return GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse = GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse;
