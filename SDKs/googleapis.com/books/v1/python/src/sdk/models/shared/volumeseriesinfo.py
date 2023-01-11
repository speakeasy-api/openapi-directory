import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VolumeseriesinfoVolumeSeriesIssue:
    issue_display_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueDisplayNumber') }})
    issue_order_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueOrderNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeseriesinfoVolumeSeries:
    issue: Optional[list[VolumeseriesinfoVolumeSeriesIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    order_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    series_book_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesBookType') }})
    series_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesId') }})
    

@dataclass_json
@dataclasses.dataclass
class Volumeseriesinfo:
    book_display_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookDisplayNumber') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    short_series_book_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortSeriesBookTitle') }})
    volume_series: Optional[list[VolumeseriesinfoVolumeSeries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeSeries') }})
    
