import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectAmazonBuyShippingRequestBody:
    r"""ConnectAmazonBuyShippingRequestBody
    An Amazon account information request body
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    merchant_seller_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_seller_id') }})
    mws_auth_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mws_auth_token') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
