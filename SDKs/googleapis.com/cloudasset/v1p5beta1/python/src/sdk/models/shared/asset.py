import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleidentityaccesscontextmanagerv1accesslevel as shared_googleidentityaccesscontextmanagerv1accesslevel
from ..shared import googleidentityaccesscontextmanagerv1accesspolicy as shared_googleidentityaccesscontextmanagerv1accesspolicy
from ..shared import policy as shared_policy
from ..shared import googlecloudorgpolicyv1policy as shared_googlecloudorgpolicyv1policy
from ..shared import resource as shared_resource
from ..shared import googleidentityaccesscontextmanagerv1serviceperimeter as shared_googleidentityaccesscontextmanagerv1serviceperimeter


@dataclass_json
@dataclasses.dataclass
class Asset:
    r"""Asset
    An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
    """
    
    access_level: Optional[shared_googleidentityaccesscontextmanagerv1accesslevel.GoogleIdentityAccesscontextmanagerV1AccessLevel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevel') }})
    access_policy: Optional[shared_googleidentityaccesscontextmanagerv1accesspolicy.GoogleIdentityAccesscontextmanagerV1AccessPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicy') }})
    ancestors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestors') }})
    asset_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    iam_policy: Optional[shared_policy.Policy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPolicy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_policy: Optional[list[shared_googlecloudorgpolicyv1policy.GoogleCloudOrgpolicyV1Policy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPolicy') }})
    resource: Optional[shared_resource.Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service_perimeter: Optional[shared_googleidentityaccesscontextmanagerv1serviceperimeter.GoogleIdentityAccesscontextmanagerV1ServicePerimeter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePerimeter') }})
    
