import dataclasses
from typing import Optional
from ..shared import blogarticlelist as shared_blogarticlelist


@dataclasses.dataclass
class GetBlogPostsQueryParams:
    fallback: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fallback', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBlogPostsRequest:
    query_params: GetBlogPostsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBlogPostsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    blog_article_list: Optional[shared_blogarticlelist.BlogArticleList] = dataclasses.field(default=None)
    
