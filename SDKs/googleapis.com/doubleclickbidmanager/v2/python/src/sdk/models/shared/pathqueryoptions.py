import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelgrouping as shared_channelgrouping
from ..shared import pathfilter as shared_pathfilter


@dataclass_json
@dataclasses.dataclass
class PathQueryOptions:
    r"""PathQueryOptions
    Path Query Options for Report Options.
    """
    
    channel_grouping: Optional[shared_channelgrouping.ChannelGrouping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelGrouping') }})
    path_filters: Optional[list[shared_pathfilter.PathFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathFilters') }})
    
