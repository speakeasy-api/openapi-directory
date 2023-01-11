<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest(
    security=operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams(
        parent="explicabo",
    ),
    query_params=operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams(
        dollar_xgafv="1",
        access_token="corporis",
        alt="media",
        backup_id="laboriosam",
        callback="sed",
        fields="blanditiis",
        key="et",
        oauth_token="voluptatum",
        pretty_print=True,
        quota_user="inventore",
        upload_type="dolores",
        upload_protocol="ut",
    ),
    request=shared.BackupInput(
        cluster_metadata=shared.ClusterMetadata(
            anthos_version="inventore",
            backup_crd_versions={
                "ipsum": "consequatur",
                "ut": "quibusdam",
                "repellat": "odio",
            },
            cluster="et",
            gke_version="nobis",
            k8s_version="quia",
        ),
        delete_lock_days=3054520383972741130,
        description="ipsa",
        encryption_key=shared.EncryptionKey(
            gcp_kms_encryption_key="enim",
        ),
        labels={
            "quibusdam": "qui",
            "omnis": "quae",
            "voluptatem": "nesciunt",
        },
        retain_days=8947363127042062471,
        selected_applications=shared.NamespacedNames(
            namespaced_names=[
                shared.NamespacedName(
                    name="qui",
                    namespace="dolores",
                ),
            ],
        ),
        selected_namespaces=shared.Namespaces(
            namespaces=[
                "quod",
                "quia",
            ],
        ),
    ),
)
    
res = s.projects.gkebackup_projects_locations_backup_plans_backups_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->