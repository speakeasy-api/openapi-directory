import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productstatusdataqualityissue as shared_productstatusdataqualityissue
from ..shared import productstatusdestinationstatus as shared_productstatusdestinationstatus
from ..shared import productstatusitemlevelissue as shared_productstatusitemlevelissue
from ..shared import product as shared_product


@dataclass_json
@dataclasses.dataclass
class ProductStatus:
    r"""ProductStatus
    The status of a product, i.e., information about a product computed asynchronously.
    """
    
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    data_quality_issues: Optional[list[shared_productstatusdataqualityissue.ProductStatusDataQualityIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualityIssues') }})
    destination_statuses: Optional[list[shared_productstatusdestinationstatus.ProductStatusDestinationStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationStatuses') }})
    google_expiration_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleExpirationDate') }})
    item_level_issues: Optional[list[shared_productstatusitemlevelissue.ProductStatusItemLevelIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemLevelIssues') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_update_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    product: Optional[shared_product.Product] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
