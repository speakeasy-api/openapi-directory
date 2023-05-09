# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAssetsListContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetAssetsListRequest;
import org.openapis.openapi.models.operations.CloudassetAssetsListResponse;
import org.openapis.openapi.models.operations.CloudassetAssetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAssetsListRequest req = new CloudassetAssetsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                assetTypes = new String[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                callback = "vel";
                contentType = CloudassetAssetsListContentTypeEnum.ACCESS_POLICY;
                fields = "deserunt";
                key = "suscipit";
                oauthToken = "iure";
                pageSize = 297534L;
                pageToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                readTime = "delectus";
                relationshipTypes = new String[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            CloudassetAssetsListResponse res = sdk.assets.cloudassetAssetsList(req, new CloudassetAssetsListSecurity("voluptatum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [assets](docs/assets/README.md)

* [cloudassetAssetsList](docs/assets/README.md#cloudassetassetslist) - Lists assets with time and resource types and returns paged results in response.

### [effectiveIamPolicies](docs/effectiveiampolicies/README.md)

* [cloudassetEffectiveIamPoliciesBatchGet](docs/effectiveiampolicies/README.md#cloudasseteffectiveiampoliciesbatchget) - Gets effective IAM policies for a batch of resources.

### [feeds](docs/feeds/README.md)

* [cloudassetFeedsCreate](docs/feeds/README.md#cloudassetfeedscreate) - Creates a feed in a parent project/folder/organization to listen to its asset updates.
* [cloudassetFeedsList](docs/feeds/README.md#cloudassetfeedslist) - Lists all asset feeds in a parent project/folder/organization.

### [savedQueries](docs/savedqueries/README.md)

* [cloudassetSavedQueriesCreate](docs/savedqueries/README.md#cloudassetsavedqueriescreate) - Creates a saved query in a parent project/folder/organization.
* [cloudassetSavedQueriesDelete](docs/savedqueries/README.md#cloudassetsavedqueriesdelete) - Deletes a saved query.
* [cloudassetSavedQueriesGet](docs/savedqueries/README.md#cloudassetsavedqueriesget) - Gets details about a saved query.
* [cloudassetSavedQueriesList](docs/savedqueries/README.md#cloudassetsavedquerieslist) - Lists all saved queries in a parent project/folder/organization.
* [cloudassetSavedQueriesPatch](docs/savedqueries/README.md#cloudassetsavedqueriespatch) - Updates a saved query.

### [v1](docs/v1/README.md)

* [cloudassetAnalyzeIamPolicy](docs/v1/README.md#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [cloudassetAnalyzeIamPolicyLongrunning](docs/v1/README.md#cloudassetanalyzeiampolicylongrunning) - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
* [cloudassetAnalyzeMove](docs/v1/README.md#cloudassetanalyzemove) - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
* [cloudassetAnalyzeOrgPolicies](docs/v1/README.md#cloudassetanalyzeorgpolicies) - Analyzes organization policies under a scope.
* [cloudassetAnalyzeOrgPolicyGovernedAssets](docs/v1/README.md#cloudassetanalyzeorgpolicygovernedassets) - Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or IAM policies.
* [cloudassetAnalyzeOrgPolicyGovernedContainers](docs/v1/README.md#cloudassetanalyzeorgpolicygovernedcontainers) - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
* [cloudassetBatchGetAssetsHistory](docs/v1/README.md#cloudassetbatchgetassetshistory) - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* [cloudassetExportAssets](docs/v1/README.md#cloudassetexportassets) - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* [cloudassetQueryAssets](docs/v1/README.md#cloudassetqueryassets) - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
* [cloudassetSearchAllIamPolicies](docs/v1/README.md#cloudassetsearchalliampolicies) - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
* [cloudassetSearchAllResources](docs/v1/README.md#cloudassetsearchallresources) - Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
