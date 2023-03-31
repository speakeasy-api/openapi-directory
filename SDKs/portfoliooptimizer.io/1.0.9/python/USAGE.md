<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.PostAssetsAnalysisAbsorptionRatioRequestBody(
    assets=548814,
    assets_covariance_matrix=[
        [
            8442.66,
            6027.63,
            8579.46,
        ],
        [
            8472.52,
            4236.55,
            6235.64,
        ],
        [
            3843.82,
            4375.87,
            2975.34,
        ],
    ],
    assets_covariance_matrix_eigenvectors=operations.PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors(
        eigenvectors_retained=891773,
    ),
)
    
res = s.assets_analysis.post_assets_analysis_absorption_ratio(req)

if res.post_assets_analysis_absorption_ratio_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->