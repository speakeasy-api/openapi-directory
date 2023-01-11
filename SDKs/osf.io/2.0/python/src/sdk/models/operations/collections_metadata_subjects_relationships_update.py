import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any


@dataclasses.dataclass
class CollectionsMetadataSubjectsRelationshipsUpdatePathParams:
    cgm_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsMetadataSubjectsRelationshipsUpdateRequest:
    path_params: CollectionsMetadataSubjectsRelationshipsUpdatePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsMetadataSubjectsRelationshipsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
