import dataclasses
from typing import Optional
from enum import Enum
from ..shared import label_download_type_enum as shared_label_download_type_enum
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_label_by_id_response_body as shared_get_label_by_id_response_body


@dataclasses.dataclass
class GetLabelByIDPathParams:
    label_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'label_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLabelByIDQueryParams:
    label_download_type: Optional[shared_label_download_type_enum.LabelDownloadTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_download_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLabelByIDRequest:
    path_params: GetLabelByIDPathParams = dataclasses.field()
    query_params: GetLabelByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLabelByIDResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_label_by_id_response_body: Optional[shared_get_label_by_id_response_body.GetLabelByIDResponseBodyOutput] = dataclasses.field(default=None)
    
