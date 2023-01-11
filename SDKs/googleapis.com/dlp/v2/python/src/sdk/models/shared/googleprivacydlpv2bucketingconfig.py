import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bucket as shared_googleprivacydlpv2bucket


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2BucketingConfig:
    r"""GooglePrivacyDlpV2BucketingConfig
    Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
    """
    
    buckets: Optional[list[shared_googleprivacydlpv2bucket.GooglePrivacyDlpV2Bucket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    
