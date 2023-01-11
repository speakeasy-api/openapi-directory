import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfooter as shared_reportfooter
from ..shared import reportheader as shared_reportheader
from ..shared import reportrow as shared_reportrow


@dataclass_json
@dataclasses.dataclass
class GenerateNetworkReportResponse:
    r"""GenerateNetworkReportResponse
    The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ \"header\": { \"dateRange\": { \"startDate\": {\"year\": 2018, \"month\": 9, \"day\": 1}, \"endDate\": {\"year\": 2018, \"month\": 9, \"day\": 1} }, \"localizationSettings\": { \"currencyCode\": \"USD\", \"languageCode\": \"en-US\" } } }, { \"row\": { \"dimensionValues\": { \"DATE\": {\"value\": \"20180918\"}, \"APP\": { \"value\": \"ca-app-pub-8123415297019784~1001342552\", displayLabel: \"My app name!\" } }, \"metricValues\": { \"ESTIMATED_EARNINGS\": {\"microsValue\": 6500000} } } }, { \"footer\": {\"matchingRowCount\": 1} }]
    """
    
    footer: Optional[shared_reportfooter.ReportFooter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer') }})
    header: Optional[shared_reportheader.ReportHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    row: Optional[shared_reportrow.ReportRow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
