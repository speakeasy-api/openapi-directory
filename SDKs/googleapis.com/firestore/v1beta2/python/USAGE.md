<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest(
    security=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity(
        option1=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams(
        parent="vel",
    ),
    query_params=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams(
        dollar_xgafv="2",
        access_token="voluptatum",
        alt="json",
        callback="quis",
        fields="quis",
        filter="tempore",
        key="quasi",
        oauth_token="architecto",
        page_size=6391953149941375058,
        page_token="voluptates",
        pretty_print=True,
        quota_user="laborum",
        upload_type="id",
        upload_protocol="odio",
    ),
)
    
res = s.projects.firestore_projects_databases_collection_groups_fields_list(req)

if res.google_firestore_admin_v1beta2_list_fields_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->