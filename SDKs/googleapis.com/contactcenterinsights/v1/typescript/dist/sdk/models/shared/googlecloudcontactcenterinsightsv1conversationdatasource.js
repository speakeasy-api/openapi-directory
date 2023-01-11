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
exports.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput = exports.GoogleCloudContactcenterinsightsV1ConversationDataSource = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudcontactcenterinsightsv1dialogflowsource_1 = require("./googlecloudcontactcenterinsightsv1dialogflowsource");
var googlecloudcontactcenterinsightsv1gcssource_1 = require("./googlecloudcontactcenterinsightsv1gcssource");
var googlecloudcontactcenterinsightsv1dialogflowsource_2 = require("./googlecloudcontactcenterinsightsv1dialogflowsource");
// GoogleCloudContactcenterinsightsV1ConversationDataSource
/**
 * The conversation source, which is a combination of transcript and audio.
**/
var GoogleCloudContactcenterinsightsV1ConversationDataSource = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ConversationDataSource, _super);
    function GoogleCloudContactcenterinsightsV1ConversationDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dialogflowSource" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1dialogflowsource_1.GoogleCloudContactcenterinsightsV1DialogflowSource)
    ], GoogleCloudContactcenterinsightsV1ConversationDataSource.prototype, "dialogflowSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsSource" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1gcssource_1.GoogleCloudContactcenterinsightsV1GcsSource)
    ], GoogleCloudContactcenterinsightsV1ConversationDataSource.prototype, "gcsSource", void 0);
    return GoogleCloudContactcenterinsightsV1ConversationDataSource;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1ConversationDataSource = GoogleCloudContactcenterinsightsV1ConversationDataSource;
// GoogleCloudContactcenterinsightsV1ConversationDataSourceInput
/**
 * The conversation source, which is a combination of transcript and audio.
**/
var GoogleCloudContactcenterinsightsV1ConversationDataSourceInput = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ConversationDataSourceInput, _super);
    function GoogleCloudContactcenterinsightsV1ConversationDataSourceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dialogflowSource" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1dialogflowsource_2.GoogleCloudContactcenterinsightsV1DialogflowSourceInput)
    ], GoogleCloudContactcenterinsightsV1ConversationDataSourceInput.prototype, "dialogflowSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsSource" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1gcssource_1.GoogleCloudContactcenterinsightsV1GcsSource)
    ], GoogleCloudContactcenterinsightsV1ConversationDataSourceInput.prototype, "gcsSource", void 0);
    return GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput = GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
