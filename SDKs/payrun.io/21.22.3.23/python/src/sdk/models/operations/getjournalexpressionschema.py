import dataclasses
from typing import Any,Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetJournalExpressionSchemaHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalExpressionSchemaRequest:
    headers: GetJournalExpressionSchemaHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetJournalExpressionSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    journal_expression_data_table: Optional[Any] = dataclasses.field(default=None)
    
