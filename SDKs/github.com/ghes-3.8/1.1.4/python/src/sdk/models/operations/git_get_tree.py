"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import git_tree as shared_git_tree
from ..shared import validation_error as shared_validation_error
from typing import Optional


@dataclasses.dataclass
class GitGetTreeRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    tree_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tree_sha', 'style': 'simple', 'explode': False }})  
    recursive: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    r"""Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `\\"true\\"`, and `\\"false\\"`. Omit this parameter to prevent recursively returning objects or subtrees."""  
    

@dataclasses.dataclass
class GitGetTreeResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Resource not found"""  
    git_tree: Optional[shared_git_tree.GitTree] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    r"""Validation failed, or the endpoint has been spammed."""  
    