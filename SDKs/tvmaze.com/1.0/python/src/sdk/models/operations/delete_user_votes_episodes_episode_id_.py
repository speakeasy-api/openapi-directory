import dataclasses



@dataclasses.dataclass
class DeleteUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserVotesEpisodesEpisodeIDRequest:
    path_params: DeleteUserVotesEpisodesEpisodeIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserVotesEpisodesEpisodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
