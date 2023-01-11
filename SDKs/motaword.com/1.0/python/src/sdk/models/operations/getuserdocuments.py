import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import listordertype_enum as shared_listordertype_enum
from ..shared import documentlist as shared_documentlist


@dataclasses.dataclass
class GetUserDocumentsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class GetUserDocumentsOrderByEnum(str, Enum):
    ID = "id"
    UPDATED_AT = "updated_at"
    CREATED_AT = "created_at"
    NAME = "name"

class GetUserDocumentsTypeFilterEnum(str, Enum):
    ALL = "ALL"
    TEXT_DOCUMENTS = "TEXT_DOCUMENTS"
    PRESENTATIONS = "PRESENTATIONS"
    SPREADSHEETS = "SPREADSHEETS"
    PDFS = "PDFS"
    IMAGES = "IMAGES"
    SUBTITLES = "SUBTITLES"
    DESIGNS = "DESIGNS"
    LOCALIZATION = "LOCALIZATION"
    WEB = "WEB"
    STYLE_GUIDES = "STYLE_GUIDES"
    GLOSSARIES = "GLOSSARIES"


@dataclasses.dataclass
class GetUserDocumentsQueryParams:
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language_code', 'style': 'form', 'explode': True }})
    order_by: Optional[GetUserDocumentsOrderByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    order_type: Optional[shared_listordertype_enum.ListOrderTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_type', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    recent: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recent', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    type_filter: Optional[GetUserDocumentsTypeFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type_filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserDocumentsRequest:
    path_params: GetUserDocumentsPathParams = dataclasses.field()
    query_params: GetUserDocumentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_list: Optional[shared_documentlist.DocumentList] = dataclasses.field(default=None)
    
