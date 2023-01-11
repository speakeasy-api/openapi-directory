import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httproutecorspolicy as shared_httproutecorspolicy
from ..shared import httproutedestination as shared_httproutedestination
from ..shared import httproutefaultinjectionpolicy as shared_httproutefaultinjectionpolicy
from ..shared import httprouteredirect as shared_httprouteredirect
from ..shared import httprouteheadermodifier as shared_httprouteheadermodifier
from ..shared import httprouterequestmirrorpolicy as shared_httprouterequestmirrorpolicy
from ..shared import httprouteretrypolicy as shared_httprouteretrypolicy
from ..shared import httprouteurlrewrite as shared_httprouteurlrewrite


@dataclass_json
@dataclasses.dataclass
class HTTPRouteRouteAction:
    r"""HTTPRouteRouteAction
    The specifications for routing traffic and applying associated policies.
    """
    
    cors_policy: Optional[shared_httproutecorspolicy.HTTPRouteCorsPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corsPolicy') }})
    destinations: Optional[list[shared_httproutedestination.HTTPRouteDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    fault_injection_policy: Optional[shared_httproutefaultinjectionpolicy.HTTPRouteFaultInjectionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faultInjectionPolicy') }})
    redirect: Optional[shared_httprouteredirect.HTTPRouteRedirect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect') }})
    request_header_modifier: Optional[shared_httprouteheadermodifier.HTTPRouteHeaderModifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestHeaderModifier') }})
    request_mirror_policy: Optional[shared_httprouterequestmirrorpolicy.HTTPRouteRequestMirrorPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMirrorPolicy') }})
    response_header_modifier: Optional[shared_httprouteheadermodifier.HTTPRouteHeaderModifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseHeaderModifier') }})
    retry_policy: Optional[shared_httprouteretrypolicy.HTTPRouteRetryPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    url_rewrite: Optional[shared_httprouteurlrewrite.HTTPRouteURLRewrite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRewrite') }})
    
