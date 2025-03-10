"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PlayerGame = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PlayerGame = /** @class */ (function (_super) {
    __extends(PlayerGame, _super);
    function PlayerGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Assists" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "assists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AssistsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "assistsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "BlockedShots" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "blockedShots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "BlocksPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "blocksPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DateTime" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Day" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "day", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DefensiveRebounds" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "defensiveRebounds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DefensiveReboundsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "defensiveReboundsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DraftKingsPosition" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "draftKingsPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DraftKingsSalary" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "draftKingsSalary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "EffectiveFieldGoalsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "effectiveFieldGoalsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FanDuelPosition" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "fanDuelPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FanDuelSalary" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fanDuelSalary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FantasyDataSalary" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fantasyDataSalary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FantasyPoints" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fantasyPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FantasyPointsDraftKings" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fantasyPointsDraftKings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FantasyPointsFanDuel" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fantasyPointsFanDuel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FantasyPointsYahoo" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fantasyPointsYahoo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FieldGoalsAttempted" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fieldGoalsAttempted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FieldGoalsMade" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fieldGoalsMade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FieldGoalsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "fieldGoalsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FreeThrowsAttempted" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "freeThrowsAttempted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FreeThrowsMade" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "freeThrowsMade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "FreeThrowsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "freeThrowsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "GameID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "gameID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Games" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "games", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "GlobalGameID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "globalGameID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "GlobalOpponentID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "globalOpponentID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "GlobalTeamID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "globalTeamID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "HomeOrAway" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "homeOrAway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "InjuryBodyPart" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "injuryBodyPart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "InjuryNotes" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "injuryNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "InjuryStartDate" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "injuryStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "InjuryStatus" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "injuryStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "IsGameOver" }),
        __metadata("design:type", Boolean)
    ], PlayerGame.prototype, "isGameOver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Minutes" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "minutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Name" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OffensiveRebounds" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "offensiveRebounds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OffensiveReboundsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "offensiveReboundsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Opponent" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "opponent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OpponentID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "opponentID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OpponentPositionRank" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "opponentPositionRank", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OpponentRank" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "opponentRank", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PersonalFouls" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "personalFouls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PlayerEfficiencyRating" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "playerEfficiencyRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PlayerID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "playerID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Points" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "points", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Position" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Rebounds" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "rebounds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Season" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "season", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SeasonType" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "seasonType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "StatID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "statID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Steals" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "steals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "StealsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "stealsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Team" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "team", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TeamID" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "teamID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ThreePointersAttempted" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "threePointersAttempted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ThreePointersMade" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "threePointersMade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ThreePointersPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "threePointersPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TotalReboundsPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "totalReboundsPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TrueShootingAttempts" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "trueShootingAttempts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TrueShootingPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "trueShootingPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TurnOversPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "turnOversPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Turnovers" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "turnovers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TwoPointersAttempted" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "twoPointersAttempted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TwoPointersMade" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "twoPointersMade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TwoPointersPercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "twoPointersPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Updated" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "updated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UsageRatePercentage" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "usageRatePercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "YahooPosition" }),
        __metadata("design:type", String)
    ], PlayerGame.prototype, "yahooPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "YahooSalary" }),
        __metadata("design:type", Number)
    ], PlayerGame.prototype, "yahooSalary", void 0);
    return PlayerGame;
}(utils_1.SpeakeasyBase));
exports.PlayerGame = PlayerGame;
