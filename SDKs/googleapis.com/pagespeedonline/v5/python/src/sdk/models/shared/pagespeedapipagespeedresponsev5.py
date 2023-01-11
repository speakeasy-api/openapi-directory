import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lighthouseresultv5 as shared_lighthouseresultv5
from ..shared import pagespeedapiloadingexperiencev5 as shared_pagespeedapiloadingexperiencev5
from ..shared import pagespeedversion as shared_pagespeedversion


@dataclass_json
@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV5:
    r"""PagespeedAPIPagespeedResponseV5
    The Pagespeed API response object.
    """
    
    analysis_utc_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisUTCTimestamp') }})
    captcha_result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captchaResult') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lighthouse_result: Optional[shared_lighthouseresultv5.LighthouseResultV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lighthouseResult') }})
    loading_experience: Optional[shared_pagespeedapiloadingexperiencev5.PagespeedAPILoadingExperienceV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadingExperience') }})
    origin_loading_experience: Optional[shared_pagespeedapiloadingexperiencev5.PagespeedAPILoadingExperienceV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originLoadingExperience') }})
    version: Optional[shared_pagespeedversion.PagespeedVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
