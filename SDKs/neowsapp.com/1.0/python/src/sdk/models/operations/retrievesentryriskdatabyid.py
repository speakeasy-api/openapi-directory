import dataclasses
from typing import Optional
from ..shared import sentryimpactriskobject as shared_sentryimpactriskobject


@dataclasses.dataclass
class RetrieveSentryRiskDataByIDPathParams:
    asteroid_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asteroid_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveSentryRiskDataByIDRequest:
    path_params: RetrieveSentryRiskDataByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveSentryRiskDataByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sentry_impact_risk_object: Optional[shared_sentryimpactriskobject.SentryImpactRiskObject] = dataclasses.field(default=None)
    
