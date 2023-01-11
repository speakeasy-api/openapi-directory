import dataclasses



@dataclasses.dataclass
class DeleteUserEpisodesEpisodeIDPathParams:
    episode_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserEpisodesEpisodeIDRequest:
    path_params: DeleteUserEpisodesEpisodeIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserEpisodesEpisodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
