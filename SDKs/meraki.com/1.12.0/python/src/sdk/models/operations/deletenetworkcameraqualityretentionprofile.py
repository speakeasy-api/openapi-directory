import dataclasses



@dataclasses.dataclass
class DeleteNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    quality_retention_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'qualityRetentionProfileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkCameraQualityRetentionProfileRequest:
    path_params: DeleteNetworkCameraQualityRetentionProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkCameraQualityRetentionProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
