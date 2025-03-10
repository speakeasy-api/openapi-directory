"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PlayerGameProjection:
    
    at_bats: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AtBats'), 'exclude': lambda f: f is None }})  
    balls_in_play: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BallsInPlay'), 'exclude': lambda f: f is None }})  
    batting_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BattingAverage'), 'exclude': lambda f: f is None }})  
    batting_average_on_balls_in_play: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BattingAverageOnBallsInPlay'), 'exclude': lambda f: f is None }})  
    batting_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BattingOrder'), 'exclude': lambda f: f is None }})  
    batting_order_confirmed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BattingOrderConfirmed'), 'exclude': lambda f: f is None }})  
    caught_stealing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CaughtStealing'), 'exclude': lambda f: f is None }})  
    date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DateTime'), 'exclude': lambda f: f is None }})  
    day: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Day'), 'exclude': lambda f: f is None }})  
    double_plays: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DoublePlays'), 'exclude': lambda f: f is None }})  
    doubles: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Doubles'), 'exclude': lambda f: f is None }})  
    draft_kings_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DraftKingsPosition'), 'exclude': lambda f: f is None }})  
    draft_kings_salary: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DraftKingsSalary'), 'exclude': lambda f: f is None }})  
    earned_run_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EarnedRunAverage'), 'exclude': lambda f: f is None }})  
    errors: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Errors'), 'exclude': lambda f: f is None }})  
    fan_duel_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FanDuelPosition'), 'exclude': lambda f: f is None }})  
    fan_duel_salary: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FanDuelSalary'), 'exclude': lambda f: f is None }})  
    fantasy_data_salary: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyDataSalary'), 'exclude': lambda f: f is None }})  
    fantasy_draft_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyDraftPosition'), 'exclude': lambda f: f is None }})  
    fantasy_draft_salary: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyDraftSalary'), 'exclude': lambda f: f is None }})  
    fantasy_points: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyPoints'), 'exclude': lambda f: f is None }})  
    fantasy_points_batting: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyPointsBatting'), 'exclude': lambda f: f is None }})  
    fantasy_points_draft_kings: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyPointsDraftKings'), 'exclude': lambda f: f is None }})  
    fantasy_points_fan_duel: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyPointsFanDuel'), 'exclude': lambda f: f is None }})  
    fantasy_points_fantasy_draft: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyPointsFantasyDraft'), 'exclude': lambda f: f is None }})  
    fantasy_points_pitching: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyPointsPitching'), 'exclude': lambda f: f is None }})  
    fantasy_points_yahoo: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FantasyPointsYahoo'), 'exclude': lambda f: f is None }})  
    fielding_independent_pitching: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FieldingIndependentPitching'), 'exclude': lambda f: f is None }})  
    fly_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FlyOuts'), 'exclude': lambda f: f is None }})  
    game_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GameID'), 'exclude': lambda f: f is None }})  
    games: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Games'), 'exclude': lambda f: f is None }})  
    global_game_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GlobalGameID'), 'exclude': lambda f: f is None }})  
    global_opponent_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GlobalOpponentID'), 'exclude': lambda f: f is None }})  
    global_team_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GlobalTeamID'), 'exclude': lambda f: f is None }})  
    grand_slams: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GrandSlams'), 'exclude': lambda f: f is None }})  
    ground_into_double_play: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GroundIntoDoublePlay'), 'exclude': lambda f: f is None }})  
    ground_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GroundOuts'), 'exclude': lambda f: f is None }})  
    hit_by_pitch: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('HitByPitch'), 'exclude': lambda f: f is None }})  
    hits: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Hits'), 'exclude': lambda f: f is None }})  
    home_or_away: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('HomeOrAway'), 'exclude': lambda f: f is None }})  
    home_runs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('HomeRuns'), 'exclude': lambda f: f is None }})  
    injury_body_part: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InjuryBodyPart'), 'exclude': lambda f: f is None }})  
    injury_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InjuryNotes'), 'exclude': lambda f: f is None }})  
    injury_start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InjuryStartDate'), 'exclude': lambda f: f is None }})  
    injury_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InjuryStatus'), 'exclude': lambda f: f is None }})  
    innings_pitched_decimal: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InningsPitchedDecimal'), 'exclude': lambda f: f is None }})  
    innings_pitched_full: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InningsPitchedFull'), 'exclude': lambda f: f is None }})  
    innings_pitched_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InningsPitchedOuts'), 'exclude': lambda f: f is None }})  
    intentional_walks: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntentionalWalks'), 'exclude': lambda f: f is None }})  
    is_game_over: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IsGameOver'), 'exclude': lambda f: f is None }})  
    isolated_power: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IsolatedPower'), 'exclude': lambda f: f is None }})  
    left_on_base: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LeftOnBase'), 'exclude': lambda f: f is None }})  
    line_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LineOuts'), 'exclude': lambda f: f is None }})  
    losses: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Losses'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Name'), 'exclude': lambda f: f is None }})  
    on_base_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OnBasePercentage'), 'exclude': lambda f: f is None }})  
    on_base_plus_slugging: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OnBasePlusSlugging'), 'exclude': lambda f: f is None }})  
    opponent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Opponent'), 'exclude': lambda f: f is None }})  
    opponent_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OpponentID'), 'exclude': lambda f: f is None }})  
    opponent_position_rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OpponentPositionRank'), 'exclude': lambda f: f is None }})  
    opponent_rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OpponentRank'), 'exclude': lambda f: f is None }})  
    outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Outs'), 'exclude': lambda f: f is None }})  
    pitches_seen: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchesSeen'), 'exclude': lambda f: f is None }})  
    pitches_thrown: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchesThrown'), 'exclude': lambda f: f is None }})  
    pitches_thrown_strikes: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchesThrownStrikes'), 'exclude': lambda f: f is None }})  
    pitching_balls_in_play: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingBallsInPlay'), 'exclude': lambda f: f is None }})  
    pitching_batting_average_against: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingBattingAverageAgainst'), 'exclude': lambda f: f is None }})  
    pitching_batting_average_on_balls_in_play: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingBattingAverageOnBallsInPlay'), 'exclude': lambda f: f is None }})  
    pitching_blown_saves: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingBlownSaves'), 'exclude': lambda f: f is None }})  
    pitching_catchers_interference: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingCatchersInterference'), 'exclude': lambda f: f is None }})  
    pitching_complete_games: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingCompleteGames'), 'exclude': lambda f: f is None }})  
    pitching_double_plays: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingDoublePlays'), 'exclude': lambda f: f is None }})  
    pitching_doubles: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingDoubles'), 'exclude': lambda f: f is None }})  
    pitching_earned_runs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingEarnedRuns'), 'exclude': lambda f: f is None }})  
    pitching_fly_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingFlyOuts'), 'exclude': lambda f: f is None }})  
    pitching_grand_slams: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingGrandSlams'), 'exclude': lambda f: f is None }})  
    pitching_ground_into_double_play: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingGroundIntoDoublePlay'), 'exclude': lambda f: f is None }})  
    pitching_ground_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingGroundOuts'), 'exclude': lambda f: f is None }})  
    pitching_hit_by_pitch: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingHitByPitch'), 'exclude': lambda f: f is None }})  
    pitching_hits: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingHits'), 'exclude': lambda f: f is None }})  
    pitching_holds: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingHolds'), 'exclude': lambda f: f is None }})  
    pitching_home_runs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingHomeRuns'), 'exclude': lambda f: f is None }})  
    pitching_inning_started: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingInningStarted'), 'exclude': lambda f: f is None }})  
    pitching_intentional_walks: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingIntentionalWalks'), 'exclude': lambda f: f is None }})  
    pitching_line_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingLineOuts'), 'exclude': lambda f: f is None }})  
    pitching_no_hitters: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingNoHitters'), 'exclude': lambda f: f is None }})  
    pitching_on_base_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingOnBasePercentage'), 'exclude': lambda f: f is None }})  
    pitching_on_base_plus_slugging: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingOnBasePlusSlugging'), 'exclude': lambda f: f is None }})  
    pitching_perfect_games: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingPerfectGames'), 'exclude': lambda f: f is None }})  
    pitching_plate_appearances: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingPlateAppearances'), 'exclude': lambda f: f is None }})  
    pitching_pop_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingPopOuts'), 'exclude': lambda f: f is None }})  
    pitching_quality_starts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingQualityStarts'), 'exclude': lambda f: f is None }})  
    pitching_reached_on_error: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingReachedOnError'), 'exclude': lambda f: f is None }})  
    pitching_runs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingRuns'), 'exclude': lambda f: f is None }})  
    pitching_sacrifice_flies: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingSacrificeFlies'), 'exclude': lambda f: f is None }})  
    pitching_sacrifices: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingSacrifices'), 'exclude': lambda f: f is None }})  
    pitching_shut_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingShutOuts'), 'exclude': lambda f: f is None }})  
    pitching_singles: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingSingles'), 'exclude': lambda f: f is None }})  
    pitching_slugging_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingSluggingPercentage'), 'exclude': lambda f: f is None }})  
    pitching_strikeouts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingStrikeouts'), 'exclude': lambda f: f is None }})  
    pitching_strikeouts_per_nine_innings: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingStrikeoutsPerNineInnings'), 'exclude': lambda f: f is None }})  
    pitching_total_bases: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingTotalBases'), 'exclude': lambda f: f is None }})  
    pitching_triples: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingTriples'), 'exclude': lambda f: f is None }})  
    pitching_walks: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingWalks'), 'exclude': lambda f: f is None }})  
    pitching_walks_per_nine_innings: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingWalksPerNineInnings'), 'exclude': lambda f: f is None }})  
    pitching_weighted_on_base_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PitchingWeightedOnBasePercentage'), 'exclude': lambda f: f is None }})  
    plate_appearances: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PlateAppearances'), 'exclude': lambda f: f is None }})  
    player_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PlayerID'), 'exclude': lambda f: f is None }})  
    pop_outs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PopOuts'), 'exclude': lambda f: f is None }})  
    position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Position'), 'exclude': lambda f: f is None }})  
    position_category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PositionCategory'), 'exclude': lambda f: f is None }})  
    reached_on_error: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReachedOnError'), 'exclude': lambda f: f is None }})  
    runs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Runs'), 'exclude': lambda f: f is None }})  
    runs_batted_in: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RunsBattedIn'), 'exclude': lambda f: f is None }})  
    sacrifice_flies: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SacrificeFlies'), 'exclude': lambda f: f is None }})  
    sacrifices: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Sacrifices'), 'exclude': lambda f: f is None }})  
    saves: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Saves'), 'exclude': lambda f: f is None }})  
    season: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Season'), 'exclude': lambda f: f is None }})  
    season_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SeasonType'), 'exclude': lambda f: f is None }})  
    singles: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Singles'), 'exclude': lambda f: f is None }})  
    slugging_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SluggingPercentage'), 'exclude': lambda f: f is None }})  
    started: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Started'), 'exclude': lambda f: f is None }})  
    stat_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StatID'), 'exclude': lambda f: f is None }})  
    stolen_bases: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StolenBases'), 'exclude': lambda f: f is None }})  
    strikeouts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Strikeouts'), 'exclude': lambda f: f is None }})  
    substitute_batting_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SubstituteBattingOrder'), 'exclude': lambda f: f is None }})  
    substitute_batting_order_sequence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SubstituteBattingOrderSequence'), 'exclude': lambda f: f is None }})  
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Team'), 'exclude': lambda f: f is None }})  
    team_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TeamID'), 'exclude': lambda f: f is None }})  
    total_bases: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TotalBases'), 'exclude': lambda f: f is None }})  
    total_outs_pitched: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TotalOutsPitched'), 'exclude': lambda f: f is None }})  
    triples: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Triples'), 'exclude': lambda f: f is None }})  
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Updated'), 'exclude': lambda f: f is None }})  
    walks: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Walks'), 'exclude': lambda f: f is None }})  
    walks_hits_per_innings_pitched: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WalksHitsPerInningsPitched'), 'exclude': lambda f: f is None }})  
    weighted_on_base_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WeightedOnBasePercentage'), 'exclude': lambda f: f is None }})  
    wins: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Wins'), 'exclude': lambda f: f is None }})  
    yahoo_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('YahooPosition'), 'exclude': lambda f: f is None }})  
    yahoo_salary: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('YahooSalary'), 'exclude': lambda f: f is None }})  
    