"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudpaymentsresellersubscriptionv1subscription as shared_googlecloudpaymentsresellersubscriptionv1subscription
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse:
    r"""Successful response"""
    
    subscription: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscription.GoogleCloudPaymentsResellerSubscriptionV1Subscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subscription'), 'exclude': lambda f: f is None }})
    r"""A Subscription resource managed by 3P Partners."""  
    