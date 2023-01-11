import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlactivedirectoryconfig as shared_sqlactivedirectoryconfig
from ..shared import backupconfiguration as shared_backupconfiguration
from ..shared import databaseflags as shared_databaseflags
from ..shared import denymaintenanceperiod as shared_denymaintenanceperiod
from ..shared import insightsconfig as shared_insightsconfig
from ..shared import ipconfiguration as shared_ipconfiguration
from ..shared import locationpreference as shared_locationpreference
from ..shared import maintenancewindow as shared_maintenancewindow
from ..shared import passwordvalidationpolicy as shared_passwordvalidationpolicy
from ..shared import sqlserverauditconfig as shared_sqlserverauditconfig

class SettingsActivationPolicyEnum(str, Enum):
    SQL_ACTIVATION_POLICY_UNSPECIFIED = "SQL_ACTIVATION_POLICY_UNSPECIFIED"
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"
    ON_DEMAND = "ON_DEMAND"

class SettingsAvailabilityTypeEnum(str, Enum):
    SQL_AVAILABILITY_TYPE_UNSPECIFIED = "SQL_AVAILABILITY_TYPE_UNSPECIFIED"
    ZONAL = "ZONAL"
    REGIONAL = "REGIONAL"

class SettingsConnectorEnforcementEnum(str, Enum):
    CONNECTOR_ENFORCEMENT_UNSPECIFIED = "CONNECTOR_ENFORCEMENT_UNSPECIFIED"
    NOT_REQUIRED = "NOT_REQUIRED"
    REQUIRED = "REQUIRED"

class SettingsDataDiskTypeEnum(str, Enum):
    SQL_DATA_DISK_TYPE_UNSPECIFIED = "SQL_DATA_DISK_TYPE_UNSPECIFIED"
    PD_SSD = "PD_SSD"
    PD_HDD = "PD_HDD"
    OBSOLETE_LOCAL_SSD = "OBSOLETE_LOCAL_SSD"

class SettingsPricingPlanEnum(str, Enum):
    SQL_PRICING_PLAN_UNSPECIFIED = "SQL_PRICING_PLAN_UNSPECIFIED"
    PACKAGE = "PACKAGE"
    PER_USE = "PER_USE"

class SettingsReplicationTypeEnum(str, Enum):
    SQL_REPLICATION_TYPE_UNSPECIFIED = "SQL_REPLICATION_TYPE_UNSPECIFIED"
    SYNCHRONOUS = "SYNCHRONOUS"
    ASYNCHRONOUS = "ASYNCHRONOUS"


@dataclass_json
@dataclasses.dataclass
class Settings:
    r"""Settings
    Database instance settings.
    """
    
    activation_policy: Optional[SettingsActivationPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationPolicy') }})
    active_directory_config: Optional[shared_sqlactivedirectoryconfig.SQLActiveDirectoryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectoryConfig') }})
    authorized_gae_applications: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedGaeApplications') }})
    availability_type: Optional[SettingsAvailabilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityType') }})
    backup_configuration: Optional[shared_backupconfiguration.BackupConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupConfiguration') }})
    collation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collation') }})
    connector_enforcement: Optional[SettingsConnectorEnforcementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorEnforcement') }})
    crash_safe_replication_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crashSafeReplicationEnabled') }})
    data_disk_size_gb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskSizeGb') }})
    data_disk_type: Optional[SettingsDataDiskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskType') }})
    database_flags: Optional[list[shared_databaseflags.DatabaseFlags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    database_replication_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseReplicationEnabled') }})
    deletion_protection_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletionProtectionEnabled') }})
    deny_maintenance_periods: Optional[list[shared_denymaintenanceperiod.DenyMaintenancePeriod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyMaintenancePeriods') }})
    insights_config: Optional[shared_insightsconfig.InsightsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insightsConfig') }})
    ip_configuration: Optional[shared_ipconfiguration.IPConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfiguration') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location_preference: Optional[shared_locationpreference.LocationPreference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationPreference') }})
    maintenance_window: Optional[shared_maintenancewindow.MaintenanceWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    password_validation_policy: Optional[shared_passwordvalidationpolicy.PasswordValidationPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordValidationPolicy') }})
    pricing_plan: Optional[SettingsPricingPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingPlan') }})
    replication_type: Optional[SettingsReplicationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationType') }})
    settings_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingsVersion') }})
    sql_server_audit_config: Optional[shared_sqlserverauditconfig.SQLServerAuditConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlServerAuditConfig') }})
    storage_auto_resize: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageAutoResize') }})
    storage_auto_resize_limit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageAutoResizeLimit') }})
    tier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
