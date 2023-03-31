<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBenefitsDocumentUploadDownloadRequest(
    id="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.vba_documents.get_benefits_document_upload_download(req, operations.GetBenefitsDocumentUploadDownloadSecurity(
    apikey="YOUR_API_KEY_HERE",
))

if res.get_benefits_document_upload_download_200_application_zip_binary_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->