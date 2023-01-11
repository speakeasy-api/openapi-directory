import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1phrasematcher as shared_googlecloudcontactcenterinsightsv1phrasematcher


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse:
    r"""GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
    The response of listing phrase matchers.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    phrase_matchers: Optional[list[shared_googlecloudcontactcenterinsightsv1phrasematcher.GoogleCloudContactcenterinsightsV1PhraseMatcher]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchers') }})
    
