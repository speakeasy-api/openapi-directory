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
exports.PlayByPlayDeltaResponse = exports.PlayByPlayDeltaRequest = exports.PlayByPlayDeltaPathParams = exports.PlayByPlayDeltaFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PlayByPlayDeltaFormatEnum;
(function (PlayByPlayDeltaFormatEnum) {
    PlayByPlayDeltaFormatEnum["Xml"] = "XML";
    PlayByPlayDeltaFormatEnum["Json"] = "JSON";
})(PlayByPlayDeltaFormatEnum = exports.PlayByPlayDeltaFormatEnum || (exports.PlayByPlayDeltaFormatEnum = {}));
var PlayByPlayDeltaPathParams = /** @class */ (function (_super) {
    __extends(PlayByPlayDeltaPathParams, _super);
    function PlayByPlayDeltaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], PlayByPlayDeltaPathParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayByPlayDeltaPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=minutes" }),
        __metadata("design:type", String)
    ], PlayByPlayDeltaPathParams.prototype, "minutes", void 0);
    return PlayByPlayDeltaPathParams;
}(utils_1.SpeakeasyBase));
exports.PlayByPlayDeltaPathParams = PlayByPlayDeltaPathParams;
var PlayByPlayDeltaRequest = /** @class */ (function (_super) {
    __extends(PlayByPlayDeltaRequest, _super);
    function PlayByPlayDeltaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlayByPlayDeltaPathParams)
    ], PlayByPlayDeltaRequest.prototype, "pathParams", void 0);
    return PlayByPlayDeltaRequest;
}(utils_1.SpeakeasyBase));
exports.PlayByPlayDeltaRequest = PlayByPlayDeltaRequest;
var PlayByPlayDeltaResponse = /** @class */ (function (_super) {
    __extends(PlayByPlayDeltaResponse, _super);
    function PlayByPlayDeltaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PlayByPlayDeltaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], PlayByPlayDeltaResponse.prototype, "playByPlays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PlayByPlayDeltaResponse.prototype, "statusCode", void 0);
    return PlayByPlayDeltaResponse;
}(utils_1.SpeakeasyBase));
exports.PlayByPlayDeltaResponse = PlayByPlayDeltaResponse;
