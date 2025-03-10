"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess:
    r"""Details associated with a free access plan with limits."""
    
    duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('durationInMinutes'), 'exclude': lambda f: f is None }})
    r"""How long a device can use a network for free."""  
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})
    r"""Whether or not free access is enabled."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling:
    r"""Details associated with billing splash."""
    
    free_access: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('freeAccess'), 'exclude': lambda f: f is None }})
    r"""Details associated with a free access plan with limits."""  
    prepaid_access_fast_login_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prepaidAccessFastLoginEnabled'), 'exclude': lambda f: f is None }})
    r"""Whether or not billing uses the fast login prepaid access option."""  
    reply_to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('replyToEmailAddress'), 'exclude': lambda f: f is None }})
    r"""The email address that receives replies from clients."""  
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum(str, Enum):
    r"""How login attempts should be handled when the controller is unreachable. Can be either 'open', 'restricted', or 'default'."""
    DEFAULT = 'default'
    OPEN = 'open'
    RESTRICTED = 'restricted'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship:
    r"""Details associated with guest sponsored splash."""
    
    duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('durationInMinutes'), 'exclude': lambda f: f is None }})
    r"""Duration in minutes of sponsored guest authorization. Must be between 1 and 60480 (6 weeks)"""  
    guest_can_request_timeframe: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('guestCanRequestTimeframe'), 'exclude': lambda f: f is None }})
    r"""Whether or not guests can specify how much time they are requesting."""  
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum(str, Enum):
    r"""The strength of the enforcement of selected system types. Must be one of: 'focused', 'click-through', and 'strict'."""
    CLICK_THROUGH = 'click-through'
    FOCUSED = 'focused'
    STRICT = 'strict'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork:
    r"""Systems Manager network targeted for sentry enrollment."""
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The network ID of the Systems Manager network."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment:
    r"""Systems Manager sentry enrollment splash settings."""
    
    enforced_systems: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enforcedSystems'), 'exclude': lambda f: f is None }})
    r"""The system types that the Sentry enforces. Must be included in: 'iOS, 'Android', 'macOS', and 'Windows'."""  
    strength: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('strength'), 'exclude': lambda f: f is None }})
    r"""The strength of the enforcement of selected system types. Must be one of: 'focused', 'click-through', and 'strict'."""  
    systems_manager_network: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('systemsManagerNetwork'), 'exclude': lambda f: f is None }})
    r"""Systems Manager network targeted for sentry enrollment."""  
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum(str, Enum):
    r"""The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'."""
    GIF = 'gif'
    JPG = 'jpg'
    PNG = 'png'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage:
    r"""Properties for setting a new image."""
    
    contents: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contents'), 'exclude': lambda f: f is None }})
    r"""The file contents (a base 64 encoded string) of your new image."""  
    format: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('format'), 'exclude': lambda f: f is None }})
    r"""The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage:
    r"""The image used in the splash page."""
    
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extension'), 'exclude': lambda f: f is None }})
    r"""The extension of the image file."""  
    image: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('image'), 'exclude': lambda f: f is None }})
    r"""Properties for setting a new image."""  
    md5: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('md5'), 'exclude': lambda f: f is None }})
    r"""The MD5 value of the image file. Setting this to null will remove the image from the splash page."""  
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum(str, Enum):
    r"""The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'."""
    GIF = 'gif'
    JPG = 'jpg'
    PNG = 'png'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage:
    r"""Properties for setting a new image."""
    
    contents: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contents'), 'exclude': lambda f: f is None }})
    r"""The file contents (a base 64 encoded string) of your new logo."""  
    format: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('format'), 'exclude': lambda f: f is None }})
    r"""The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo:
    r"""The logo used in the splash page."""
    
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extension'), 'exclude': lambda f: f is None }})
    r"""The extension of the logo file."""  
    image: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('image'), 'exclude': lambda f: f is None }})
    r"""Properties for setting a new image."""  
    md5: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('md5'), 'exclude': lambda f: f is None }})
    r"""The MD5 value of the logo file. Setting this to null will remove the logo from the splash page."""  
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum(str, Enum):
    r"""The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'."""
    GIF = 'gif'
    JPG = 'jpg'
    PNG = 'png'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage:
    r"""Properties for setting a new image."""
    
    contents: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contents'), 'exclude': lambda f: f is None }})
    r"""The file contents (a base 64 encoded string) of your new prepaid front."""  
    format: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('format'), 'exclude': lambda f: f is None }})
    r"""The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront:
    r"""The prepaid front image used in the splash page."""
    
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extension'), 'exclude': lambda f: f is None }})
    r"""The extension of the prepaid front image file."""  
    image: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('image'), 'exclude': lambda f: f is None }})
    r"""Properties for setting a new image."""  
    md5: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('md5'), 'exclude': lambda f: f is None }})
    r"""The MD5 value of the prepaid front image file. Setting this to null will remove the prepaid front from the splash page."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBody:
    
    allow_simultaneous_logins: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allowSimultaneousLogins'), 'exclude': lambda f: f is None }})
    r"""Whether or not to allow simultaneous logins from different devices."""  
    billing: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('billing'), 'exclude': lambda f: f is None }})
    r"""Details associated with billing splash."""  
    block_all_traffic_before_sign_on: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('blockAllTrafficBeforeSignOn'), 'exclude': lambda f: f is None }})
    r"""How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged."""  
    controller_disconnection_behavior: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('controllerDisconnectionBehavior'), 'exclude': lambda f: f is None }})
    r"""How login attempts should be handled when the controller is unreachable. Can be either 'open', 'restricted', or 'default'."""  
    guest_sponsorship: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('guestSponsorship'), 'exclude': lambda f: f is None }})
    r"""Details associated with guest sponsored splash."""  
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('redirectUrl'), 'exclude': lambda f: f is None }})
    r"""The custom redirect URL where the users will go after the splash page."""  
    sentry_enrollment: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sentryEnrollment'), 'exclude': lambda f: f is None }})
    r"""Systems Manager sentry enrollment splash settings."""  
    splash_image: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashImage'), 'exclude': lambda f: f is None }})
    r"""The image used in the splash page."""  
    splash_logo: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashLogo'), 'exclude': lambda f: f is None }})
    r"""The logo used in the splash page."""  
    splash_prepaid_front: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashPrepaidFront'), 'exclude': lambda f: f is None }})
    r"""The prepaid front image used in the splash page."""  
    splash_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashTimeout'), 'exclude': lambda f: f is None }})
    r"""Splash timeout in minutes. This will determine how often users will see the splash page."""  
    splash_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashUrl'), 'exclude': lambda f: f is None }})
    r"""[optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'"""  
    use_redirect_url: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('useRedirectUrl'), 'exclude': lambda f: f is None }})
    r"""The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page. A custom redirect URL must be set if this is true."""  
    use_splash_url: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('useSplashUrl'), 'exclude': lambda f: f is None }})
    r"""[optional] Boolean indicating whether the users will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL."""  
    welcome_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('welcomeMessage'), 'exclude': lambda f: f is None }})
    r"""The welcome message for the users on the splash page."""  
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequest:
    
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})  
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})  
    request_body: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBillingFreeAccess:
    r"""Details associated with a free access plan with limits"""
    
    duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('durationInMinutes'), 'exclude': lambda f: f is None }})
    r"""How long a device can use a network for free."""  
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})
    r"""Whether or not free access is enabled."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBilling:
    r"""Details associated with billing splash"""
    
    free_access: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBillingFreeAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('freeAccess'), 'exclude': lambda f: f is None }})
    r"""Details associated with a free access plan with limits"""  
    prepaid_access_fast_login_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prepaidAccessFastLoginEnabled'), 'exclude': lambda f: f is None }})
    r"""Whether or not billing uses the fast login prepaid access option."""  
    reply_to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('replyToEmailAddress'), 'exclude': lambda f: f is None }})
    r"""The email address that reeceives replies from clients"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONGuestSponsorship:
    r"""Details associated with guest sponsored splash"""
    
    duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('durationInMinutes'), 'exclude': lambda f: f is None }})
    r"""Duration in minutes of sponsored guest authorization."""  
    guest_can_request_timeframe: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('guestCanRequestTimeframe'), 'exclude': lambda f: f is None }})
    r"""Whether or not guests can specify how much time they are requesting."""  
    
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistrationAuthorizationTypeEnum(str, Enum):
    r"""How created user accounts should be authorized."""
    ADMIN = 'admin'
    AUTO = 'auto'
    SELF_EMAIL = 'self_email'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistration:
    r"""Self-registration for splash with Meraki authentication."""
    
    authorization_type: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistrationAuthorizationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('authorizationType'), 'exclude': lambda f: f is None }})
    r"""How created user accounts should be authorized."""  
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})
    r"""Whether or not to allow users to create their own account on the network."""  
    
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentStrengthEnum(str, Enum):
    r"""The strength of the enforcement of selected system types."""
    CLICK_THROUGH = 'click-through'
    FOCUSED = 'focused'
    STRICT = 'strict'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentSystemsManagerNetwork:
    r"""Systems Manager network targeted for sentry enrollment."""
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""The network ID of the Systems Manager network."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollment:
    r"""Systems Manager sentry enrollment splash settings."""
    
    enforced_systems: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enforcedSystems'), 'exclude': lambda f: f is None }})
    r"""The system types that the Sentry enforces."""  
    strength: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentStrengthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('strength'), 'exclude': lambda f: f is None }})
    r"""The strength of the enforcement of selected system types."""  
    systems_manager_network: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentSystemsManagerNetwork] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('systemsManagerNetwork'), 'exclude': lambda f: f is None }})
    r"""Systems Manager network targeted for sentry enrollment."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashImage:
    r"""The image used in the splash page."""
    
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extension'), 'exclude': lambda f: f is None }})
    r"""The extension of the image file."""  
    md5: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('md5'), 'exclude': lambda f: f is None }})
    r"""The MD5 value of the image file."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashLogo:
    r"""The logo used in the splash page."""
    
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extension'), 'exclude': lambda f: f is None }})
    r"""The extension of the logo file."""  
    md5: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('md5'), 'exclude': lambda f: f is None }})
    r"""The MD5 value of the logo file."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashPrepaidFront:
    r"""The prepaid front image used in the splash page."""
    
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extension'), 'exclude': lambda f: f is None }})
    r"""The extension of the prepaid front image file."""  
    md5: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('md5'), 'exclude': lambda f: f is None }})
    r"""The MD5 value of the prepaid front image file."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSON:
    r"""Successful operation"""
    
    allow_simultaneous_logins: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allowSimultaneousLogins'), 'exclude': lambda f: f is None }})
    r"""Whether or not to allow simultaneous logins from different devices."""  
    billing: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBilling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('billing'), 'exclude': lambda f: f is None }})
    r"""Details associated with billing splash"""  
    block_all_traffic_before_sign_on: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('blockAllTrafficBeforeSignOn'), 'exclude': lambda f: f is None }})
    r"""How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged."""  
    controller_disconnection_behavior: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('controllerDisconnectionBehavior'), 'exclude': lambda f: f is None }})
    r"""How login attempts should be handled when the controller is unreachable."""  
    guest_sponsorship: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONGuestSponsorship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('guestSponsorship'), 'exclude': lambda f: f is None }})
    r"""Details associated with guest sponsored splash"""  
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('redirectUrl'), 'exclude': lambda f: f is None }})
    r"""The custom redirect URL where the users will go after the splash page."""  
    self_registration: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('selfRegistration'), 'exclude': lambda f: f is None }})
    r"""Self-registration for splash with Meraki authentication."""  
    sentry_enrollment: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sentryEnrollment'), 'exclude': lambda f: f is None }})
    r"""Systems Manager sentry enrollment splash settings."""  
    splash_image: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashImage'), 'exclude': lambda f: f is None }})
    r"""The image used in the splash page."""  
    splash_logo: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashLogo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashLogo'), 'exclude': lambda f: f is None }})
    r"""The logo used in the splash page."""  
    splash_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashPage'), 'exclude': lambda f: f is None }})
    r"""The type of splash page for this SSID"""  
    splash_prepaid_front: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashPrepaidFront] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashPrepaidFront'), 'exclude': lambda f: f is None }})
    r"""The prepaid front image used in the splash page."""  
    splash_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashTimeout'), 'exclude': lambda f: f is None }})
    r"""Splash timeout in minutes."""  
    splash_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('splashUrl'), 'exclude': lambda f: f is None }})
    r"""The custom splash URL of the click-through splash page."""  
    ssid_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ssidNumber'), 'exclude': lambda f: f is None }})
    r"""SSID number"""  
    use_redirect_url: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('useRedirectUrl'), 'exclude': lambda f: f is None }})
    r"""The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page."""  
    use_splash_url: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('useSplashUrl'), 'exclude': lambda f: f is None }})
    r"""Boolean indicating whether the users will be redirected to the custom splash url"""  
    welcome_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('welcomeMessage'), 'exclude': lambda f: f is None }})
    r"""The welcome message for the users on the splash page."""  
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidSplashSettingsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    update_network_wireless_ssid_splash_settings_200_application_json_object: Optional[UpdateNetworkWirelessSsidSplashSettings200ApplicationJSON] = dataclasses.field(default=None)
    r"""Successful operation"""  
    