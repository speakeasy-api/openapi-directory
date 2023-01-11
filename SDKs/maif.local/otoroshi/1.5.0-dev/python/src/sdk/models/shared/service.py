import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canary as shared_canary
from ..shared import exposedapi as shared_exposedapi
from ..shared import chaosconfig as shared_chaosconfig
from ..shared import clientconfig as shared_clientconfig
from ..shared import corssettings as shared_corssettings
from ..shared import gzip as shared_gzip
from ..shared import healthcheck as shared_healthcheck
from ..shared import ipfiltering as shared_ipfiltering
from ..shared import localjwtverifier as shared_localjwtverifier
from ..shared import refjwtverifier as shared_refjwtverifier
from ..shared import redirectionsettings as shared_redirectionsettings
from ..shared import hsalgosettings as shared_hsalgosettings
from ..shared import rsalgosettings as shared_rsalgosettings
from ..shared import esalgosettings as shared_esalgosettings
from ..shared import jwksalgosettings as shared_jwksalgosettings
from ..shared import statsdconfig as shared_statsdconfig
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class Service:
    r"""Service
    An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
    """
    
    build_mode: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildMode') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    enforce_secure_communication: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceSecureCommunication') }})
    env: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    force_https: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceHttps') }})
    groups: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    maintenance_mode: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceMode') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_app: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateApp') }})
    root: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    subdomain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdomain') }})
    targets: list[shared_target.Target] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    canary: Optional[shared_canary.Canary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Canary') }})
    additional_headers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalHeaders') }})
    api: Optional[shared_exposedapi.ExposedAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    auth_config_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authConfigRef') }})
    chaos_config: Optional[shared_chaosconfig.ChaosConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chaosConfig') }})
    client_config: Optional[shared_clientconfig.ClientConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientConfig') }})
    client_validator_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientValidatorRef') }})
    cors: Optional[shared_corssettings.CorsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    gzip: Optional[shared_gzip.Gzip] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gzip') }})
    headers_verification: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headersVerification') }})
    health_check: Optional[shared_healthcheck.HealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    ip_filtering: Optional[shared_ipfiltering.IPFiltering] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipFiltering') }})
    jwt_verifier: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtVerifier') }})
    local_host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localHost') }})
    local_scheme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localScheme') }})
    matching_headers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingHeaders') }})
    matching_root: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingRoot') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    override_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideHost') }})
    private_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePatterns') }})
    public_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPatterns') }})
    redirect_to_local: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectToLocal') }})
    redirection: Optional[shared_redirectionsettings.RedirectionSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirection') }})
    sec_com_excluded_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secComExcludedPatterns') }})
    sec_com_settings: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secComSettings') }})
    send_otoroshi_headers_back: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendOtoroshiHeadersBack') }})
    statsd_config: Optional[shared_statsdconfig.StatsdConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statsdConfig') }})
    transformer_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformerRef') }})
    user_facing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFacing') }})
    x_forwarded_headers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xForwardedHeaders') }})
    
