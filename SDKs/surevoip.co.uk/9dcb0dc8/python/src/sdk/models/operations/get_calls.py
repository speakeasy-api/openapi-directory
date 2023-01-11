import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import one_get_responses_200_content_application_1json_schema as shared_one_get_responses_200_content_application_1json_schema
from ..shared import oneannouncements_post_responses_400_content_application_1json_schema as shared_oneannouncements_post_responses_400_content_application_1json_schema
from ..shared import oneannouncements_post_responses_403_content_application_1json_schema as shared_oneannouncements_post_responses_403_content_application_1json_schema


@dataclasses.dataclass
class GetCallsQueryParams:
    validate: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'validate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCallsRequest:
    query_params: GetCallsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCallsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    one_get_responses_200_content_application_1json_schema: Optional[shared_one_get_responses_200_content_application_1json_schema.OneGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    oneannouncements_post_responses_400_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_400_content_application_1json_schema.OneannouncementsPostResponses400ContentApplication1jsonSchema] = dataclasses.field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_403_content_application_1json_schema.OneannouncementsPostResponses403ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
