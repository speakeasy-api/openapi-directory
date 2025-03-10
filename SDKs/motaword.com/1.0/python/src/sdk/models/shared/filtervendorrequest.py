"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class FilterVendorRequest:
    
    clients: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clients'), 'exclude': lambda f: f is None }})  
    communication_channel: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('communication_channel'), 'exclude': lambda f: f is None }})  
    corporate_ids_for_auth: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('corporate_ids_for_auth'), 'exclude': lambda f: f is None }})  
    corporates: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('corporates'), 'exclude': lambda f: f is None }})  
    country: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country'), 'exclude': lambda f: f is None }})  
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'exclude': lambda f: f is None }})  
    current_services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('current_services'), 'exclude': lambda f: f is None }})  
    daily_proofreading_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('daily_proofreading_capacity'), 'exclude': lambda f: f is None }})  
    daily_translation_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('daily_translation_capacity'), 'exclude': lambda f: f is None }})  
    destination_languages: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('destination_languages'), 'exclude': lambda f: f is None }})  
    dtp_software: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dtp_software'), 'exclude': lambda f: f is None }})  
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email_address'), 'exclude': lambda f: f is None }})  
    experience: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('experience'), 'exclude': lambda f: f is None }})  
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('first_name'), 'exclude': lambda f: f is None }})  
    id: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})  
    is_certified_translator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_certified_translator'), 'exclude': lambda f: f is None }})  
    is_sworn_translator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_sworn_translator'), 'exclude': lambda f: f is None }})  
    language_pairs: Optional[list[list[int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('language_pairs'), 'exclude': lambda f: f is None }})  
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_name'), 'exclude': lambda f: f is None }})  
    last_online: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_online'), 'exclude': lambda f: f is None }})  
    last_worked: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_worked'), 'exclude': lambda f: f is None }})  
    memoq: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('memoq'), 'exclude': lambda f: f is None }})  
    memsource: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('memsource'), 'exclude': lambda f: f is None }})  
    min_tqs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('min_tqs'), 'exclude': lambda f: f is None }})  
    omegat: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('omegat'), 'exclude': lambda f: f is None }})  
    project_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('project_count'), 'exclude': lambda f: f is None }})  
    proofreader_experience: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('proofreader_experience'), 'exclude': lambda f: f is None }})  
    provides_creative_writing_service: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('provides_creative_writing_service'), 'exclude': lambda f: f is None }})  
    provides_postedit_service: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('provides_postedit_service'), 'exclude': lambda f: f is None }})  
    quote_file_subjects: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('quote_file_subjects'), 'exclude': lambda f: f is None }})  
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reference'), 'exclude': lambda f: f is None }})  
    sdl_trados: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sdl_trados'), 'exclude': lambda f: f is None }})  
    search: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('search'), 'exclude': lambda f: f is None }})  
    skype_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('skype_id'), 'exclude': lambda f: f is None }})  
    smartcat: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('smartcat'), 'exclude': lambda f: f is None }})  
    smartling: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('smartling'), 'exclude': lambda f: f is None }})  
    source_languages: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('source_languages'), 'exclude': lambda f: f is None }})  
    specialization: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('specialization'), 'exclude': lambda f: f is None }})  
    status: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    subtitle_edit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subtitle_edit'), 'exclude': lambda f: f is None }})  
    subtitle_workshop: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subtitle_workshop'), 'exclude': lambda f: f is None }})  
    translator_association: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('translator_association'), 'exclude': lambda f: f is None }})  
    transsuite_2000: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('transsuite_2000'), 'exclude': lambda f: f is None }})  
    user_working_timezone: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('user_working_timezone'), 'exclude': lambda f: f is None }})  
    vendor_profile_lsp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vendor_profile_lsp'), 'exclude': lambda f: f is None }})  
    vendor_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vendor_tags'), 'exclude': lambda f: f is None }})  
    vendor_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vendor_type'), 'exclude': lambda f: f is None }})  
    vendor_working_timezone: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vendor_working_timezone'), 'exclude': lambda f: f is None }})  
    word_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('word_count'), 'exclude': lambda f: f is None }})  
    wordbee: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('wordbee'), 'exclude': lambda f: f is None }})  
    wordfast: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('wordfast'), 'exclude': lambda f: f is None }})  
    work_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('work_type'), 'exclude': lambda f: f is None }})  
    work_with: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('work_with'), 'exclude': lambda f: f is None }})  
    working_as: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('working_as'), 'exclude': lambda f: f is None }})  
    xbench: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('xbench'), 'exclude': lambda f: f is None }})  
    xtm: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('xtm'), 'exclude': lambda f: f is None }})  
    