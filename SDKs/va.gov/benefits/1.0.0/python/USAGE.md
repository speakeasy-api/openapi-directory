<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetBenefitsDocumentUploadDownloadRequest(
    security=operations.GetBenefitsDocumentUploadDownloadSecurity(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.GetBenefitsDocumentUploadDownloadPathParams(
        id="ea",
    ),
)
    
res = s.vba_documents.get_benefits_document_upload_download(req)

if res.get_benefits_document_upload_download_200_application_zip_binary_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->