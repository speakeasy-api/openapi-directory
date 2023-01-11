import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppPermissionsActionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsAdministrationEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsChecksEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsContentReferencesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsContentsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsDeploymentsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsEnvironmentsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsIssuesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsMembersEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsMetadataEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationAdministrationEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationHooksEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationPlanEnum(str, Enum):
    READ = "read"

class AppPermissionsOrganizationProjectsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"

class AppPermissionsOrganizationSecretsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationSelfHostedRunnersEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationUserBlockingEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsPackagesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsPagesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsPullRequestsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsRepositoryHooksEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsRepositoryProjectsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"

class AppPermissionsSecretScanningAlertsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsSecretsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsSecurityEventsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsSingleFileEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsStatusesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsTeamDiscussionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsVulnerabilityAlertsEnum(str, Enum):
    READ = "read"

class AppPermissionsWorkflowsEnum(str, Enum):
    WRITE = "write"


@dataclass_json
@dataclasses.dataclass
class AppPermissions:
    r"""AppPermissions
    The permissions granted to the user-to-server access token.
    """
    
    actions: Optional[AppPermissionsActionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    administration: Optional[AppPermissionsAdministrationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administration') }})
    checks: Optional[AppPermissionsChecksEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checks') }})
    content_references: Optional[AppPermissionsContentReferencesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_references') }})
    contents: Optional[AppPermissionsContentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    deployments: Optional[AppPermissionsDeploymentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    environments: Optional[AppPermissionsEnvironmentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    issues: Optional[AppPermissionsIssuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    members: Optional[AppPermissionsMembersEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    metadata: Optional[AppPermissionsMetadataEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    organization_administration: Optional[AppPermissionsOrganizationAdministrationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_administration') }})
    organization_hooks: Optional[AppPermissionsOrganizationHooksEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_hooks') }})
    organization_plan: Optional[AppPermissionsOrganizationPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_plan') }})
    organization_projects: Optional[AppPermissionsOrganizationProjectsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_projects') }})
    organization_secrets: Optional[AppPermissionsOrganizationSecretsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_secrets') }})
    organization_self_hosted_runners: Optional[AppPermissionsOrganizationSelfHostedRunnersEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_self_hosted_runners') }})
    organization_user_blocking: Optional[AppPermissionsOrganizationUserBlockingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_user_blocking') }})
    packages: Optional[AppPermissionsPackagesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    pages: Optional[AppPermissionsPagesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    pull_requests: Optional[AppPermissionsPullRequestsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    repository_hooks: Optional[AppPermissionsRepositoryHooksEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_hooks') }})
    repository_projects: Optional[AppPermissionsRepositoryProjectsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_projects') }})
    secret_scanning_alerts: Optional[AppPermissionsSecretScanningAlertsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret_scanning_alerts') }})
    secrets: Optional[AppPermissionsSecretsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    security_events: Optional[AppPermissionsSecurityEventsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security_events') }})
    single_file: Optional[AppPermissionsSingleFileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file') }})
    statuses: Optional[AppPermissionsStatusesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    team_discussions: Optional[AppPermissionsTeamDiscussionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_discussions') }})
    vulnerability_alerts: Optional[AppPermissionsVulnerabilityAlertsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability_alerts') }})
    workflows: Optional[AppPermissionsWorkflowsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflows') }})
    
