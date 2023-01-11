import dataclasses



@dataclasses.dataclass
class GetFeaturesFeatureIDPathParams:
    feature_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'featureId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFeaturesFeatureIDRequest:
    path_params: GetFeaturesFeatureIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFeaturesFeatureIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
