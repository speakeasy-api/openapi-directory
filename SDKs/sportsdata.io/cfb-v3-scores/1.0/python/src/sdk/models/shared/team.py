"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Team:
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Active'), 'exclude': lambda f: f is None }})  
    ap_rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ApRank'), 'exclude': lambda f: f is None }})  
    coaches_rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CoachesRank'), 'exclude': lambda f: f is None }})  
    conference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Conference'), 'exclude': lambda f: f is None }})  
    conference_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConferenceID'), 'exclude': lambda f: f is None }})  
    conference_losses: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConferenceLosses'), 'exclude': lambda f: f is None }})  
    conference_wins: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConferenceWins'), 'exclude': lambda f: f is None }})  
    global_team_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GlobalTeamID'), 'exclude': lambda f: f is None }})  
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Key'), 'exclude': lambda f: f is None }})  
    losses: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Losses'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Name'), 'exclude': lambda f: f is None }})  
    playoff_rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PlayoffRank'), 'exclude': lambda f: f is None }})  
    rank_season: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RankSeason'), 'exclude': lambda f: f is None }})  
    rank_season_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RankSeasonType'), 'exclude': lambda f: f is None }})  
    rank_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RankWeek'), 'exclude': lambda f: f is None }})  
    school: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('School'), 'exclude': lambda f: f is None }})  
    short_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ShortDisplayName'), 'exclude': lambda f: f is None }})  
    stadium_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StadiumID'), 'exclude': lambda f: f is None }})  
    team_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TeamID'), 'exclude': lambda f: f is None }})  
    team_logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TeamLogoUrl'), 'exclude': lambda f: f is None }})  
    wins: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Wins'), 'exclude': lambda f: f is None }})  
    