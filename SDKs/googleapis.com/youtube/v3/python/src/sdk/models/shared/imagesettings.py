import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedproperty as shared_localizedproperty


@dataclass_json
@dataclasses.dataclass
class ImageSettings:
    r"""ImageSettings
    Branding properties for images associated with the channel.
    """
    
    background_image_url: Optional[shared_localizedproperty.LocalizedProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageUrl') }})
    banner_external_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerExternalUrl') }})
    banner_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerImageUrl') }})
    banner_mobile_extra_hd_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerMobileExtraHdImageUrl') }})
    banner_mobile_hd_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerMobileHdImageUrl') }})
    banner_mobile_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerMobileImageUrl') }})
    banner_mobile_low_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerMobileLowImageUrl') }})
    banner_mobile_medium_hd_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerMobileMediumHdImageUrl') }})
    banner_tablet_extra_hd_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTabletExtraHdImageUrl') }})
    banner_tablet_hd_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTabletHdImageUrl') }})
    banner_tablet_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTabletImageUrl') }})
    banner_tablet_low_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTabletLowImageUrl') }})
    banner_tv_high_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTvHighImageUrl') }})
    banner_tv_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTvImageUrl') }})
    banner_tv_low_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTvLowImageUrl') }})
    banner_tv_medium_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerTvMediumImageUrl') }})
    large_branded_banner_image_imap_script: Optional[shared_localizedproperty.LocalizedProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeBrandedBannerImageImapScript') }})
    large_branded_banner_image_url: Optional[shared_localizedproperty.LocalizedProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeBrandedBannerImageUrl') }})
    small_branded_banner_image_imap_script: Optional[shared_localizedproperty.LocalizedProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallBrandedBannerImageImapScript') }})
    small_branded_banner_image_url: Optional[shared_localizedproperty.LocalizedProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallBrandedBannerImageUrl') }})
    tracking_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingImageUrl') }})
    watch_icon_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchIconImageUrl') }})
    
