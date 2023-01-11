import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2hybridinspectstatistics as shared_googleprivacydlpv2hybridinspectstatistics
from ..shared import googleprivacydlpv2infotypestats as shared_googleprivacydlpv2infotypestats


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Result:
    r"""GooglePrivacyDlpV2Result
    All result fields mentioned below are updated while the job is processing.
    """
    
    hybrid_stats: Optional[shared_googleprivacydlpv2hybridinspectstatistics.GooglePrivacyDlpV2HybridInspectStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hybridStats') }})
    info_type_stats: Optional[list[shared_googleprivacydlpv2infotypestats.GooglePrivacyDlpV2InfoTypeStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypeStats') }})
    processed_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processedBytes') }})
    total_estimated_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalEstimatedBytes') }})
    
