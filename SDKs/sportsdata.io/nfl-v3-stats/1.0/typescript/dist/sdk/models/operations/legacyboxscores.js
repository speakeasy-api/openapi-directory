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
exports.LegacyBoxScoresResponse = exports.LegacyBoxScoresRequest = exports.LegacyBoxScoresPathParams = exports.LegacyBoxScoresFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LegacyBoxScoresFormatEnum;
(function (LegacyBoxScoresFormatEnum) {
    LegacyBoxScoresFormatEnum["Xml"] = "XML";
    LegacyBoxScoresFormatEnum["Json"] = "JSON";
})(LegacyBoxScoresFormatEnum = exports.LegacyBoxScoresFormatEnum || (exports.LegacyBoxScoresFormatEnum = {}));
var LegacyBoxScoresPathParams = /** @class */ (function (_super) {
    __extends(LegacyBoxScoresPathParams, _super);
    function LegacyBoxScoresPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], LegacyBoxScoresPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], LegacyBoxScoresPathParams.prototype, "season", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], LegacyBoxScoresPathParams.prototype, "week", void 0);
    return LegacyBoxScoresPathParams;
}(utils_1.SpeakeasyBase));
exports.LegacyBoxScoresPathParams = LegacyBoxScoresPathParams;
var LegacyBoxScoresRequest = /** @class */ (function (_super) {
    __extends(LegacyBoxScoresRequest, _super);
    function LegacyBoxScoresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LegacyBoxScoresPathParams)
    ], LegacyBoxScoresRequest.prototype, "pathParams", void 0);
    return LegacyBoxScoresRequest;
}(utils_1.SpeakeasyBase));
exports.LegacyBoxScoresRequest = LegacyBoxScoresRequest;
var LegacyBoxScoresResponse = /** @class */ (function (_super) {
    __extends(LegacyBoxScoresResponse, _super);
    function LegacyBoxScoresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], LegacyBoxScoresResponse.prototype, "boxScores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LegacyBoxScoresResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LegacyBoxScoresResponse.prototype, "statusCode", void 0);
    return LegacyBoxScoresResponse;
}(utils_1.SpeakeasyBase));
exports.LegacyBoxScoresResponse = LegacyBoxScoresResponse;
