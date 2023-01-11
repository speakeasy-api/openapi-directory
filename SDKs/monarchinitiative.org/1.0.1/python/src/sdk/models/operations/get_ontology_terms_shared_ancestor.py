import dataclasses



@dataclasses.dataclass
class GetOntologyTermsSharedAncestorPathParams:
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    subject: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subject', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOntologyTermsSharedAncestorRequest:
    path_params: GetOntologyTermsSharedAncestorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOntologyTermsSharedAncestorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
