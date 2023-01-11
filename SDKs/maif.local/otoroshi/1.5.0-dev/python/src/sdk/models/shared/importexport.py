import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
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
from ..shared import globalconfig as shared_globalconfig
from ..shared import importexportstats as shared_importexportstats


@dataclass_json
@dataclasses.dataclass
class ImportExportAdmins:
    r"""ImportExportAdmins
    Administrator using FIDO U2F device to access Otoroshi
    """
    
    created_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    registration: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportAPIKeys:
    r"""ImportExportAPIKeys
    An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
    """
    
    authorized_entities: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedEntities') }})
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    daily_quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyQuota') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    monthly_quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlyQuota') }})
    throttling_quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingQuota') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportErrorTemplates:
    r"""ImportExportErrorTemplates
    Error templates for a service descriptor
    """
    
    messages: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    service_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceId') }})
    template40x: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template40x') }})
    template50x: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template50x') }})
    template_build: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBuild') }})
    template_maintenance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMaintenance') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportServiceDescriptors:
    r"""ImportExportServiceDescriptors
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
    

@dataclass_json
@dataclasses.dataclass
class ImportExportServiceGroups:
    r"""ImportExportServiceGroups
    An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportSimpleAdmins:
    r"""ImportExportSimpleAdmins
    Administrator using just login/password tuple to access Otoroshi
    """
    
    created_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExport:
    r"""ImportExport
    The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
    """
    
    admins: list[ImportExportAdmins] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admins') }})
    api_keys: list[ImportExportAPIKeys] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeys') }})
    config: shared_globalconfig.GlobalConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_raw: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRaw') }})
    error_templates: list[ImportExportErrorTemplates] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorTemplates') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    service_descriptors: list[ImportExportServiceDescriptors] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDescriptors') }})
    service_groups: list[ImportExportServiceGroups] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceGroups') }})
    simple_admins: list[ImportExportSimpleAdmins] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleAdmins') }})
    stats: shared_importexportstats.ImportExportStats = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    app_config: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appConfig') }})
    
