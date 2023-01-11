import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import externalurlobject as shared_externalurlobject
from ..shared import imageobject as shared_imageobject
from ..shared import episoderestrictionobject as shared_episoderestrictionobject
from ..shared import resumepointobject as shared_resumepointobject
from ..shared import simplifiedshowobject as shared_simplifiedshowobject


@dataclass_json
@dataclasses.dataclass
class EpisodeObject:
    r"""EpisodeObject

    https://developer.spotify.com/documentation/web-api/reference/#object-episodeobject - Find more info on the official Spotify Web API Reference
    """
    
    audio_preview_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_preview_url') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_ms') }})
    explicit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit') }})
    external_urls: Optional[shared_externalurlobject.ExternalURLObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    html_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[list[shared_imageobject.ImageObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    is_externally_hosted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_externally_hosted') }})
    is_playable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_playable') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    languages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date') }})
    release_date_precision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date_precision') }})
    restrictions: Optional[shared_episoderestrictionobject.EpisodeRestrictionObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    resume_point: Optional[shared_resumepointobject.ResumePointObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resume_point') }})
    show: Optional[shared_simplifiedshowobject.SimplifiedShowObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
