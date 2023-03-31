<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        adv_security_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.CompileRequest(
    content_type="application/json",
    request_body={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    doc_file_name="brilliantDocument",
    doc_url_expires_in=3600,
    latex_compiler="lualatex",
    latex_runs=423655,
    main_file_name="inputFile.tex",
    template_token="7a582350acb835ed",
)
    
res = s.pdf_generation.compile(req)

if res.compile_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->