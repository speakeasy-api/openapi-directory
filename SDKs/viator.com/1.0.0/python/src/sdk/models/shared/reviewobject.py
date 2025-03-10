"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReviewObject:
    r"""**object** containing a single user review"""
    
    owner_avatar_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ownerAvatarURL'), 'exclude': lambda f: f is None }})
    r"""**URL** of the reviewer's avatar image"""  
    owner_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ownerCountry'), 'exclude': lambda f: f is None }})
    r"""**country** in which the reviewer is located"""  
    owner_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ownerId'), 'exclude': lambda f: f is None }})
    r"""**unique numeric identifier** of the user that submitted *this* review"""  
    owner_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ownerName'), 'exclude': lambda f: f is None }})
    r"""**name** of the user that submitted *this* review"""  
    product_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('productCode'), 'exclude': lambda f: f is None }})
    r"""**product code** of the product that *this* review is about; e.g., `5010SYDNEY`"""  
    product_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('productTitle'), 'exclude': lambda f: f is None }})
    r"""**title** of the product that *this* review is about"""  
    product_url_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('productUrlName'), 'exclude': lambda f: f is None }})
    r"""**URL-formatted title** of the product that *this* review is about"""  
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('publishedDate'), 'exclude': lambda f: f is None }})
    r"""**date** that *this* review was published"""  
    rating: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rating'), 'exclude': lambda f: f is None }})
    r"""**rating** given by the reviewer"""  
    review: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('review'), 'exclude': lambda f: f is None }})
    r"""**HTML-formatted content** of the review
    - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
    """  
    review_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reviewId'), 'exclude': lambda f: f is None }})
    r"""**unique numeric identifier** of *this* review"""  
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sortOrder'), 'exclude': lambda f: f is None }})
    r"""**sort order** for *this* review"""  
    ssl_supported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sslSupported'), 'exclude': lambda f: f is None }})
    r"""ignore (Viator only)"""  
    submission_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('submissionDate'), 'exclude': lambda f: f is None }})
    r"""**date** that *this* review was submitted"""  
    viator_feedback: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('viatorFeedback'), 'exclude': lambda f: f is None }})
    r"""ignore (Viator only)"""  
    viator_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('viatorNotes'), 'exclude': lambda f: f is None }})
    r"""ignore (Viator only)"""  
    