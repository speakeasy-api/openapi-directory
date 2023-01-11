import dataclasses



@dataclasses.dataclass
class AuthorizeResponse:
    r"""AuthorizeResponse
    Response to Authorize requests
    """
    
    body: str = dataclasses.field()
    
