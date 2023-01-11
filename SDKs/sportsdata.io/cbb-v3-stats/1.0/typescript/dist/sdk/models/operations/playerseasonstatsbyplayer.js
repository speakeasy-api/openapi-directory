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
exports.PlayerSeasonStatsByPlayerResponse = exports.PlayerSeasonStatsByPlayerRequest = exports.PlayerSeasonStatsByPlayerPathParams = exports.PlayerSeasonStatsByPlayerFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PlayerSeasonStatsByPlayerFormatEnum;
(function (PlayerSeasonStatsByPlayerFormatEnum) {
    PlayerSeasonStatsByPlayerFormatEnum["Xml"] = "XML";
    PlayerSeasonStatsByPlayerFormatEnum["Json"] = "JSON";
})(PlayerSeasonStatsByPlayerFormatEnum = exports.PlayerSeasonStatsByPlayerFormatEnum || (exports.PlayerSeasonStatsByPlayerFormatEnum = {}));
var PlayerSeasonStatsByPlayerPathParams = /** @class */ (function (_super) {
    __extends(PlayerSeasonStatsByPlayerPathParams, _super);
    function PlayerSeasonStatsByPlayerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayerSeasonStatsByPlayerPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=playerid" }),
        __metadata("design:type", String)
    ], PlayerSeasonStatsByPlayerPathParams.prototype, "playerid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], PlayerSeasonStatsByPlayerPathParams.prototype, "season", void 0);
    return PlayerSeasonStatsByPlayerPathParams;
}(utils_1.SpeakeasyBase));
exports.PlayerSeasonStatsByPlayerPathParams = PlayerSeasonStatsByPlayerPathParams;
var PlayerSeasonStatsByPlayerRequest = /** @class */ (function (_super) {
    __extends(PlayerSeasonStatsByPlayerRequest, _super);
    function PlayerSeasonStatsByPlayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlayerSeasonStatsByPlayerPathParams)
    ], PlayerSeasonStatsByPlayerRequest.prototype, "pathParams", void 0);
    return PlayerSeasonStatsByPlayerRequest;
}(utils_1.SpeakeasyBase));
exports.PlayerSeasonStatsByPlayerRequest = PlayerSeasonStatsByPlayerRequest;
var PlayerSeasonStatsByPlayerResponse = /** @class */ (function (_super) {
    __extends(PlayerSeasonStatsByPlayerResponse, _super);
    function PlayerSeasonStatsByPlayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PlayerSeasonStatsByPlayerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PlayerSeasonStatsByPlayerResponse.prototype, "playerSeason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PlayerSeasonStatsByPlayerResponse.prototype, "statusCode", void 0);
    return PlayerSeasonStatsByPlayerResponse;
}(utils_1.SpeakeasyBase));
exports.PlayerSeasonStatsByPlayerResponse = PlayerSeasonStatsByPlayerResponse;
