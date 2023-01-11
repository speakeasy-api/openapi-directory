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
exports.TopicSentimentOutput = void 0;
var utils_1 = require("../../../internal/utils");
var sentiment_1 = require("./sentiment");
var topicsentiment_1 = require("./topicsentiment");
var topic_1 = require("./topic");
var TopicSentimentOutput = /** @class */ (function (_super) {
    __extends(TopicSentimentOutput, _super);
    function TopicSentimentOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TopicSentimentOutput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], TopicSentimentOutput.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sentiments", elemType: sentiment_1.Sentiment }),
        __metadata("design:type", Array)
    ], TopicSentimentOutput.prototype, "sentiments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], TopicSentimentOutput.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topicSentiments", elemType: topicsentiment_1.TopicSentiment }),
        __metadata("design:type", Array)
    ], TopicSentimentOutput.prototype, "topicSentiments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topics", elemType: topic_1.Topic }),
        __metadata("design:type", Array)
    ], TopicSentimentOutput.prototype, "topics", void 0);
    return TopicSentimentOutput;
}(utils_1.SpeakeasyBase));
exports.TopicSentimentOutput = TopicSentimentOutput;
