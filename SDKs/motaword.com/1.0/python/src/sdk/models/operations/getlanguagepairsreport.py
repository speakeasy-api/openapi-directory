import dataclasses
from typing import Optional
from ..shared import reportfilter as shared_reportfilter
from ..shared import error as shared_error
from ..shared import languagepairsreport as shared_languagepairsreport


@dataclasses.dataclass
class GetLanguagePairsReportRequest:
    request: Optional[shared_reportfilter.ReportFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetLanguagePairsReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    language_pairs_report: Optional[shared_languagepairsreport.LanguagePairsReport] = dataclasses.field(default=None)
    
