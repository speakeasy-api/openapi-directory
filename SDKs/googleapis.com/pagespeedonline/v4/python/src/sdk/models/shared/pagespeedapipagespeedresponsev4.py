import dataclasses
from typing import Optional
from ..shared import pagespeedapiformatstringv4 as shared_pagespeedapiformatstringv4
from ..shared import pagespeedapiimagev4 as shared_pagespeedapiimagev4


@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocksUrls:
    details: Optional[list[shared_pagespeedapiformatstringv4.PagespeedAPIFormatStringV4]] = dataclasses.field(default=None)
    result: Optional[shared_pagespeedapiformatstringv4.PagespeedAPIFormatStringV4] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocks:
    header: Optional[shared_pagespeedapiformatstringv4.PagespeedAPIFormatStringV4] = dataclasses.field(default=None)
    urls: Optional[list[PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocksUrls]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults:
    r"""PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults
    The enum-like identifier for this rule. For instance \"EnableKeepAlive\" or \"AvoidCssImport\". Not localized.
    """
    
    beta: Optional[bool] = dataclasses.field(default=None)
    groups: Optional[list[str]] = dataclasses.field(default=None)
    localized_rule_name: Optional[str] = dataclasses.field(default=None)
    rule_impact: Optional[float] = dataclasses.field(default=None)
    summary: Optional[shared_pagespeedapiformatstringv4.PagespeedAPIFormatStringV4] = dataclasses.field(default=None)
    url_blocks: Optional[list[PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocks]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4FormattedResults:
    r"""PagespeedAPIPagespeedResponseV4FormattedResults
    Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
    """
    
    locale: Optional[str] = dataclasses.field(default=None)
    rule_results: Optional[dict[str, PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4LoadingExperienceMetricsDistributions:
    max: Optional[int] = dataclasses.field(default=None)
    min: Optional[int] = dataclasses.field(default=None)
    proportion: Optional[float] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics:
    r"""PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics
    The type of the metric.
    """
    
    category: Optional[str] = dataclasses.field(default=None)
    distributions: Optional[list[PagespeedAPIPagespeedResponseV4LoadingExperienceMetricsDistributions]] = dataclasses.field(default=None)
    median: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4LoadingExperience:
    r"""PagespeedAPIPagespeedResponseV4LoadingExperience
    Metrics of end users' page loading experience.
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    initial_url: Optional[str] = dataclasses.field(default=None)
    metrics: Optional[dict[str, PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics]] = dataclasses.field(default=None)
    overall_category: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4PageStats:
    r"""PagespeedAPIPagespeedResponseV4PageStats
    Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
    """
    
    cms: Optional[str] = dataclasses.field(default=None)
    css_response_bytes: Optional[str] = dataclasses.field(default=None)
    flash_response_bytes: Optional[str] = dataclasses.field(default=None)
    html_response_bytes: Optional[str] = dataclasses.field(default=None)
    image_response_bytes: Optional[str] = dataclasses.field(default=None)
    javascript_response_bytes: Optional[str] = dataclasses.field(default=None)
    num_render_blocking_round_trips: Optional[int] = dataclasses.field(default=None)
    num_total_round_trips: Optional[int] = dataclasses.field(default=None)
    number_css_resources: Optional[int] = dataclasses.field(default=None)
    number_hosts: Optional[int] = dataclasses.field(default=None)
    number_js_resources: Optional[int] = dataclasses.field(default=None)
    number_resources: Optional[int] = dataclasses.field(default=None)
    number_roboted_resources: Optional[int] = dataclasses.field(default=None)
    number_static_resources: Optional[int] = dataclasses.field(default=None)
    number_transient_fetch_failure_resources: Optional[int] = dataclasses.field(default=None)
    other_response_bytes: Optional[str] = dataclasses.field(default=None)
    over_the_wire_response_bytes: Optional[str] = dataclasses.field(default=None)
    roboted_urls: Optional[list[str]] = dataclasses.field(default=None)
    text_response_bytes: Optional[str] = dataclasses.field(default=None)
    total_request_bytes: Optional[str] = dataclasses.field(default=None)
    transient_fetch_failure_urls: Optional[list[str]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4RuleGroups:
    r"""PagespeedAPIPagespeedResponseV4RuleGroups
    The name of this rule group: one of \"SPEED\", \"USABILITY\", or \"SECURITY\".
    """
    
    pass_: Optional[bool] = dataclasses.field(default=None)
    score: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4Version:
    r"""PagespeedAPIPagespeedResponseV4Version
    The version of PageSpeed used to generate these results.
    """
    
    major: Optional[int] = dataclasses.field(default=None)
    minor: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIPagespeedResponseV4:
    captcha_result: Optional[str] = dataclasses.field(default=None)
    formatted_results: Optional[PagespeedAPIPagespeedResponseV4FormattedResults] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    invalid_rules: Optional[list[str]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    loading_experience: Optional[PagespeedAPIPagespeedResponseV4LoadingExperience] = dataclasses.field(default=None)
    page_stats: Optional[PagespeedAPIPagespeedResponseV4PageStats] = dataclasses.field(default=None)
    response_code: Optional[int] = dataclasses.field(default=None)
    rule_groups: Optional[dict[str, PagespeedAPIPagespeedResponseV4RuleGroups]] = dataclasses.field(default=None)
    screenshot: Optional[shared_pagespeedapiimagev4.PagespeedAPIImageV4] = dataclasses.field(default=None)
    snapshots: Optional[list[shared_pagespeedapiimagev4.PagespeedAPIImageV4]] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    version: Optional[PagespeedAPIPagespeedResponseV4Version] = dataclasses.field(default=None)
    
