import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WkHTMLToPdfRequestDto:
    r"""WkHTMLToPdfRequestDto
    WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;
    """
    
    html_base64_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HtmlBase64String') }})
    resources: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    wk_html_to_pdf_arguments: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WkHtmlToPdfArguments') }})
    
