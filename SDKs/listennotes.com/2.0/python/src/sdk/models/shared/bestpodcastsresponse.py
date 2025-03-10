"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import podcastsimple as shared_podcastsimple
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BestPodcastsResponse:
    r"""OK"""
    
    has_next: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('has_next') }})  
    has_previous: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('has_previous') }})  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The id of this genre"""  
    listennotes_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('listennotes_url') }})
    r"""Url of the list of best podcasts on [ListenNotes.com](https://www.ListenNotes.com)."""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""This genre's name."""  
    next_page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('next_page_number') }})  
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page_number') }})  
    parent_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('parent_id') }})
    r"""The id of parent genre."""  
    podcasts: list[shared_podcastsimple.PodcastSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('podcasts') }})  
    previous_page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('previous_page_number') }})  
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total') }})  
    