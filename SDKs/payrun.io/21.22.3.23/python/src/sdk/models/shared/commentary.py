import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CommentaryCommentaryEmployee:
    r"""CommentaryCommentaryEmployee
    The commentarys' employee
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentaryCommentaryPayRun:
    r"""CommentaryCommentaryPayRun
    The commentarys' pay run
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentaryCommentary:
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Detail') }})
    employee: Optional[CommentaryCommentaryEmployee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employee') }})
    pay_run: Optional[CommentaryCommentaryPayRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRun') }})
    

@dataclass_json
@dataclasses.dataclass
class Commentary:
    commentary: Optional[CommentaryCommentary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Commentary') }})
    
