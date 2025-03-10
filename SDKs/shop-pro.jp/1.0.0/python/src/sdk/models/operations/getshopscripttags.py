"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum(str, Enum):
    r"""スクリプトを出力するページ
    - `shop`: ショップページ
    - `thanks_page`: 注文完了ページ
    """
    SHOP = 'shop'
    THANKS_PAGE = 'thanks_page'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetShopScriptTags200ApplicationJSONScriptTags:
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('account_id'), 'exclude': lambda f: f is None }})
    r"""アカウントID"""  
    display_scope: Optional[GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('display_scope'), 'exclude': lambda f: f is None }})
    r"""スクリプトを出力するページ
    - `shop`: ショップページ
    - `thanks_page`: 注文完了ページ
    """  
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""スクリプトタグID"""  
    integrity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('integrity'), 'exclude': lambda f: f is None }})
    r"""スクリプトファイルのハッシュ値（script tagのintegrity属性）"""  
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('make_date'), 'exclude': lambda f: f is None }})
    r"""作成日時"""  
    oauth_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('oauth_application_id'), 'exclude': lambda f: f is None }})
    r"""OAuthアプリケーションID"""  
    src: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('src'), 'exclude': lambda f: f is None }})
    r"""スクリプトURL"""  
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('update_date'), 'exclude': lambda f: f is None }})
    r"""更新日時"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetShopScriptTags200ApplicationJSON:
    
    script_tags: Optional[list[GetShopScriptTags200ApplicationJSONScriptTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('script_tags'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GetShopScriptTagsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_shop_script_tags_200_application_json_object: Optional[GetShopScriptTags200ApplicationJSON] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    