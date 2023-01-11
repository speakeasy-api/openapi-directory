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
exports.PlayerSeasonSplitStatsResponse = exports.PlayerSeasonSplitStatsRequest = exports.PlayerSeasonSplitStatsPathParams = exports.PlayerSeasonSplitStatsSplitEnum = exports.PlayerSeasonSplitStatsFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PlayerSeasonSplitStatsFormatEnum;
(function (PlayerSeasonSplitStatsFormatEnum) {
    PlayerSeasonSplitStatsFormatEnum["Xml"] = "XML";
    PlayerSeasonSplitStatsFormatEnum["Json"] = "JSON";
})(PlayerSeasonSplitStatsFormatEnum = exports.PlayerSeasonSplitStatsFormatEnum || (exports.PlayerSeasonSplitStatsFormatEnum = {}));
var PlayerSeasonSplitStatsSplitEnum;
(function (PlayerSeasonSplitStatsSplitEnum) {
    PlayerSeasonSplitStatsSplitEnum["L"] = "L";
    PlayerSeasonSplitStatsSplitEnum["R"] = "R";
    PlayerSeasonSplitStatsSplitEnum["S"] = "S";
})(PlayerSeasonSplitStatsSplitEnum = exports.PlayerSeasonSplitStatsSplitEnum || (exports.PlayerSeasonSplitStatsSplitEnum = {}));
var PlayerSeasonSplitStatsPathParams = /** @class */ (function (_super) {
    __extends(PlayerSeasonSplitStatsPathParams, _super);
    function PlayerSeasonSplitStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayerSeasonSplitStatsPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], PlayerSeasonSplitStatsPathParams.prototype, "season", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=split" }),
        __metadata("design:type", String)
    ], PlayerSeasonSplitStatsPathParams.prototype, "split", void 0);
    return PlayerSeasonSplitStatsPathParams;
}(utils_1.SpeakeasyBase));
exports.PlayerSeasonSplitStatsPathParams = PlayerSeasonSplitStatsPathParams;
var PlayerSeasonSplitStatsRequest = /** @class */ (function (_super) {
    __extends(PlayerSeasonSplitStatsRequest, _super);
    function PlayerSeasonSplitStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PlayerSeasonSplitStatsPathParams)
    ], PlayerSeasonSplitStatsRequest.prototype, "pathParams", void 0);
    return PlayerSeasonSplitStatsRequest;
}(utils_1.SpeakeasyBase));
exports.PlayerSeasonSplitStatsRequest = PlayerSeasonSplitStatsRequest;
var PlayerSeasonSplitStatsResponse = /** @class */ (function (_super) {
    __extends(PlayerSeasonSplitStatsResponse, _super);
    function PlayerSeasonSplitStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PlayerSeasonSplitStatsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], PlayerSeasonSplitStatsResponse.prototype, "playerSeasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PlayerSeasonSplitStatsResponse.prototype, "statusCode", void 0);
    return PlayerSeasonSplitStatsResponse;
}(utils_1.SpeakeasyBase));
exports.PlayerSeasonSplitStatsResponse = PlayerSeasonSplitStatsResponse;
