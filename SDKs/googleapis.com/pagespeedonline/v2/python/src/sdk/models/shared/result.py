import dataclasses
from typing import Optional
from ..shared import pagespeedapiformatstringv2 as shared_pagespeedapiformatstringv2
from ..shared import pagespeedapiimagev2 as shared_pagespeedapiimagev2


@dataclasses.dataclass
class ResultFormattedResultsRuleResultsURLBlocksUrls:
    details: Optional[list[shared_pagespeedapiformatstringv2.PagespeedAPIFormatStringV2]] = dataclasses.field(default=None)
    result: Optional[shared_pagespeedapiformatstringv2.PagespeedAPIFormatStringV2] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResultFormattedResultsRuleResultsURLBlocks:
    header: Optional[shared_pagespeedapiformatstringv2.PagespeedAPIFormatStringV2] = dataclasses.field(default=None)
    urls: Optional[list[ResultFormattedResultsRuleResultsURLBlocksUrls]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResultFormattedResultsRuleResults:
    r"""ResultFormattedResultsRuleResults
    The enum-like identifier for this rule. For instance \"EnableKeepAlive\" or \"AvoidCssImport\". Not localized.
    """
    
    groups: Optional[list[str]] = dataclasses.field(default=None)
    localized_rule_name: Optional[str] = dataclasses.field(default=None)
    rule_impact: Optional[float] = dataclasses.field(default=None)
    summary: Optional[shared_pagespeedapiformatstringv2.PagespeedAPIFormatStringV2] = dataclasses.field(default=None)
    url_blocks: Optional[list[ResultFormattedResultsRuleResultsURLBlocks]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResultFormattedResults:
    r"""ResultFormattedResults
    Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
    """
    
    locale: Optional[str] = dataclasses.field(default=None)
    rule_results: Optional[dict[str, ResultFormattedResultsRuleResults]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResultPageStats:
    r"""ResultPageStats
    Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
    """
    
    css_response_bytes: Optional[str] = dataclasses.field(default=None)
    flash_response_bytes: Optional[str] = dataclasses.field(default=None)
    html_response_bytes: Optional[str] = dataclasses.field(default=None)
    image_response_bytes: Optional[str] = dataclasses.field(default=None)
    javascript_response_bytes: Optional[str] = dataclasses.field(default=None)
    number_css_resources: Optional[int] = dataclasses.field(default=None)
    number_hosts: Optional[int] = dataclasses.field(default=None)
    number_js_resources: Optional[int] = dataclasses.field(default=None)
    number_resources: Optional[int] = dataclasses.field(default=None)
    number_static_resources: Optional[int] = dataclasses.field(default=None)
    other_response_bytes: Optional[str] = dataclasses.field(default=None)
    text_response_bytes: Optional[str] = dataclasses.field(default=None)
    total_request_bytes: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResultRuleGroups:
    r"""ResultRuleGroups
    The name of this rule group: one of \"SPEED\" or \"USABILITY\".
    """
    
    score: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResultVersion:
    r"""ResultVersion
    The version of PageSpeed used to generate these results.
    """
    
    major: Optional[int] = dataclasses.field(default=None)
    minor: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Result:
    captcha_result: Optional[str] = dataclasses.field(default=None)
    formatted_results: Optional[ResultFormattedResults] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    invalid_rules: Optional[list[str]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    page_stats: Optional[ResultPageStats] = dataclasses.field(default=None)
    response_code: Optional[int] = dataclasses.field(default=None)
    rule_groups: Optional[dict[str, ResultRuleGroups]] = dataclasses.field(default=None)
    screenshot: Optional[shared_pagespeedapiimagev2.PagespeedAPIImageV2] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    version: Optional[ResultVersion] = dataclasses.field(default=None)
    
