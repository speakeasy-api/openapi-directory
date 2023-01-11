import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import googlecloudservicebrokerv1beta1_dashboardclient as shared_googlecloudservicebrokerv1beta1_dashboardclient
from ..shared import googlecloudservicebrokerv1beta1_plan as shared_googlecloudservicebrokerv1beta1_plan


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1Service:
    r"""GoogleCloudServicebrokerV1beta1Service
    The resource model mostly follows the Open Service Broker API, as
    described here:
    https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
    Though due to Google Specifics it has additional optional fields.
    """
    
    bindable: Optional[bool] = dataclasses.field(default=None)
    binding_retrievable: Optional[bool] = dataclasses.field(default=None)
    bindings_retrievable: Optional[bool] = dataclasses.field(default=None)
    dashboard_client: Optional[shared_googlecloudservicebrokerv1beta1_dashboardclient.GoogleCloudServicebrokerV1beta1DashboardClient] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    instances_retrievable: Optional[bool] = dataclasses.field(default=None)
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    plan_updateable: Optional[bool] = dataclasses.field(default=None)
    plans: Optional[list[shared_googlecloudservicebrokerv1beta1_plan.GoogleCloudServicebrokerV1beta1Plan]] = dataclasses.field(default=None)
    tags: Optional[list[str]] = dataclasses.field(default=None)
    
