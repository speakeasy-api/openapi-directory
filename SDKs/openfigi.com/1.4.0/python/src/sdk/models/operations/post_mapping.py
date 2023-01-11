import dataclasses
from typing import Any,Optional
from ..shared import mappingjob as shared_mappingjob
from ..shared import mappingjobresultfigilist as shared_mappingjobresultfigilist
from ..shared import mappingjobresultfiginotfound as shared_mappingjobresultfiginotfound


@dataclasses.dataclass
class PostMappingRequest:
    request: Optional[list[shared_mappingjob.MappingJob]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_mapping_job_result: Optional[list[Any]] = dataclasses.field(default=None)
    post_mapping_400_wildcard_string: Optional[str] = dataclasses.field(default=None)
    post_mapping_401_wildcard_string: Optional[str] = dataclasses.field(default=None)
    post_mapping_406_wildcard_string: Optional[str] = dataclasses.field(default=None)
    post_mapping_413_wildcard_string: Optional[str] = dataclasses.field(default=None)
    post_mapping_500_wildcard_string: Optional[str] = dataclasses.field(default=None)
    
