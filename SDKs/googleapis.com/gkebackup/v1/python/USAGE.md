<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest(
    dollar_xgafv="2",
    backup_input=shared.BackupInput(
        cluster_metadata=shared.ClusterMetadata(
            anthos_version="provident",
            backup_crd_versions={
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            cluster="error",
            gke_version="deserunt",
            k8s_version="suscipit",
        ),
        delete_lock_days=437587,
        description="magnam",
        encryption_key=shared.EncryptionKey(
            gcp_kms_encryption_key="debitis",
        ),
        labels={
            "delectus": "tempora",
        },
        retain_days=383441,
        selected_applications=shared.NamespacedNames(
            namespaced_names=[
                shared.NamespacedName(
                    name="minus",
                    namespace="placeat",
                ),
                shared.NamespacedName(
                    name="voluptatum",
                    namespace="iusto",
                ),
            ],
        ),
        selected_namespaces=shared.Namespaces(
            namespaces=[
                "nisi",
                "recusandae",
                "temporibus",
            ],
        ),
    ),
    access_token="ab",
    alt="media",
    backup_id="veritatis",
    callback="deserunt",
    fields_="perferendis",
    key="ipsam",
    oauth_token="repellendus",
    parent="sapiente",
    pretty_print=False,
    quota_user="quo",
    upload_type="odit",
    upload_protocol="at",
)
    
res = s.projects.gkebackup_projects_locations_backup_plans_backups_create(req, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->