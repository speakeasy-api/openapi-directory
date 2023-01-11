import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VideoEditorTokenResponseToken:
    r"""VideoEditorTokenResponseToken
    The user access token
    """
    
    expiration_date: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoEditorTokenResponse:
    r"""VideoEditorTokenResponse
    The response that includes the user access token and its expiration date
    """
    
    token: VideoEditorTokenResponseToken = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
