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
exports.PlayerGameStatsDeltaResponse = exports.PlayerGameStatsDeltaRequest = exports.PlayerGameStatsDeltaPathParams = exports.PlayerGameStatsDeltaFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PlayerGameStatsDeltaFormatEnum;
(function (PlayerGameStatsDeltaFormatEnum) {
    PlayerGameStatsDeltaFormatEnum["Xml"] = "XML";
    PlayerGameStatsDeltaFormatEnum["Json"] = "JSON";
})(PlayerGameStatsDeltaFormatEnum = exports.PlayerGameStatsDeltaFormatEnum || (exports.PlayerGameStatsDeltaFormatEnum = {}));
var PlayerGameStatsDeltaPathParams = /** @class */ (function (_super) {
    __extends(PlayerGameStatsDeltaPathParams, _super);
    function PlayerGameStatsDeltaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayerGameStatsDeltaPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=minutes" }),
        __metadata("design:type", String)
    ], PlayerGameStatsDeltaPathParams.prototype, "minutes", void 0);
    return PlayerGameStatsDeltaPathParams;
}(utils_1.SpeakeasyBase));
exports.PlayerGameStatsDeltaPathParams = PlayerGameStatsDeltaPathParams;
var PlayerGameStatsDeltaRequest = /** @class */ (function (_super) {
    __extends(PlayerGameStatsDeltaRequest, _super);
    function PlayerGameStatsDeltaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlayerGameStatsDeltaPathParams)
    ], PlayerGameStatsDeltaRequest.prototype, "pathParams", void 0);
    return PlayerGameStatsDeltaRequest;
}(utils_1.SpeakeasyBase));
exports.PlayerGameStatsDeltaRequest = PlayerGameStatsDeltaRequest;
var PlayerGameStatsDeltaResponse = /** @class */ (function (_super) {
    __extends(PlayerGameStatsDeltaResponse, _super);
    function PlayerGameStatsDeltaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PlayerGameStatsDeltaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], PlayerGameStatsDeltaResponse.prototype, "playerGames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PlayerGameStatsDeltaResponse.prototype, "statusCode", void 0);
    return PlayerGameStatsDeltaResponse;
}(utils_1.SpeakeasyBase));
exports.PlayerGameStatsDeltaResponse = PlayerGameStatsDeltaResponse;
