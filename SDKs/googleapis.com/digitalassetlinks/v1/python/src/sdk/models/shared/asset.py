import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidappasset as shared_androidappasset
from ..shared import webasset as shared_webasset


@dataclass_json
@dataclasses.dataclass
class Asset:
    r"""Asset
    Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
    """
    
    android_app: Optional[shared_androidappasset.AndroidAppAsset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidApp') }})
    web: Optional[shared_webasset.WebAsset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('web') }})
    
