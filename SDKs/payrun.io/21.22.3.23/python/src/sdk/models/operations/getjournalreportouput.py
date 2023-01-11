import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetJournalReportOuputQueryParams:
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    ledger_target: str = dataclasses.field(metadata={'query_param': { 'field_name': 'LedgerTarget', 'style': 'form', 'explode': True }})
    pay_frequency: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PayFrequency', 'style': 'form', 'explode': True }})
    tax_year: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    tax_period: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaxPeriod', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetJournalReportOuputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalReportOuputRequest:
    headers: GetJournalReportOuputHeaders = dataclasses.field()
    query_params: GetJournalReportOuputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJournalReportOuputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_journal_report_ouput_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
