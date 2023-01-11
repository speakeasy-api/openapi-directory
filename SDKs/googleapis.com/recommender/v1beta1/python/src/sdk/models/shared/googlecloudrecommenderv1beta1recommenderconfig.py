import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1beta1recommendergenerationconfig as shared_googlecloudrecommenderv1beta1recommendergenerationconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1RecommenderConfigInput:
    r"""GoogleCloudRecommenderV1beta1RecommenderConfigInput
    Configuration for a Recommender.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recommender_generation_config: Optional[shared_googlecloudrecommenderv1beta1recommendergenerationconfig.GoogleCloudRecommenderV1beta1RecommenderGenerationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommenderGenerationConfig') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1RecommenderConfig:
    r"""GoogleCloudRecommenderV1beta1RecommenderConfig
    Configuration for a Recommender.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recommender_generation_config: Optional[shared_googlecloudrecommenderv1beta1recommendergenerationconfig.GoogleCloudRecommenderV1beta1RecommenderGenerationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommenderGenerationConfig') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
