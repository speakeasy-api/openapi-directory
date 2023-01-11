import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ocrpredictresponse as shared_ocrpredictresponse


@dataclasses.dataclass
class OcrMultipartRequestBodySampleContent:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    sample_content: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'sampleContent' }})
    

@dataclasses.dataclass
class OcrMultipartRequestBody:
    model_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    sample_content: Optional[OcrMultipartRequestBodySampleContent] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    sample_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'sampleId' }})
    sample_location: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'sampleLocation' }})
    task: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'task' }})
    

@dataclasses.dataclass
class OcrMultipartSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class OcrMultipartRequest:
    security: OcrMultipartSecurity = dataclasses.field()
    request: Optional[OcrMultipartRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class OcrMultipartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ocr_predict_response: Optional[shared_ocrpredictresponse.OcrPredictResponse] = dataclasses.field(default=None)
    
