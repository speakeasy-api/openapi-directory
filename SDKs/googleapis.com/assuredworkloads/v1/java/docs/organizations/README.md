# organizations

### Available Operations

* [assuredworkloadsOrganizationsLocationsOperationsList](#assuredworkloadsorganizationslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [assuredworkloadsOrganizationsLocationsWorkloadsCreate](#assuredworkloadsorganizationslocationsworkloadscreate) - Creates Assured Workload.
* [assuredworkloadsOrganizationsLocationsWorkloadsDelete](#assuredworkloadsorganizationslocationsworkloadsdelete) - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
* [assuredworkloadsOrganizationsLocationsWorkloadsList](#assuredworkloadsorganizationslocationsworkloadslist) - Lists Assured Workloads under a CRM Node.
* [assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions](#assuredworkloadsorganizationslocationsworkloadsmutatepartnerpermissions) - Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [assuredworkloadsOrganizationsLocationsWorkloadsPatch](#assuredworkloadsorganizationslocationsworkloadspatch) - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources](#assuredworkloadsorganizationslocationsworkloadsrestrictallowedresources) - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge](#assuredworkloadsorganizationslocationsworkloadsviolationsacknowledge) - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet](#assuredworkloadsorganizationslocationsworkloadsviolationsget) - Retrieves Assured Workload Violation based on ID.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsList](#assuredworkloadsorganizationslocationsworkloadsviolationslist) - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

## assuredworkloadsOrganizationsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsOperationsListRequest req = new AssuredworkloadsOrganizationsLocationsOperationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            AssuredworkloadsOrganizationsLocationsOperationsListResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsOperationsList(req, new AssuredworkloadsOrganizationsLocationsOperationsListSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsCreate

Creates Assured Workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadInput;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudAssuredworkloadsV1WorkloadInput = new GoogleCloudAssuredworkloadsV1WorkloadInput() {{
                    billingAccount = "repellendus";
                    complianceRegime = GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum.CA_PROTECTED_B;
                    complianceStatus = new GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus() {{
                        acknowledgedViolationCount = 778157;
                        activeViolationCount = 140350;
                    }};;
                    displayName = "at";
                    ekmProvisioningResponse = new GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse() {{
                        ekmProvisioningErrorDomain = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum.TIMEOUT_ERROR;
                        ekmProvisioningErrorMapping = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum.MISSING_EKM_CONNECTION_ADMIN_PERMISSION;
                        ekmProvisioningState = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum.EKM_PROVISIONING_STATE_PENDING;
                    }};;
                    enableSovereignControls = false;
                    etag = "quod";
                    kmsSettings = new GoogleCloudAssuredworkloadsV1WorkloadKMSSettings() {{
                        nextRotationTime = "quod";
                        rotationPeriod = "esse";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("porro", "dolorum");
                        put("dicta", "nam");
                        put("officia", "occaecati");
                    }};
                    name = "Cassandra Welch";
                    partner = GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum.PARTNER_UNSPECIFIED;
                    provisionedResourcesParent = "commodi";
                    resourceSettings = new org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[]{{
                        add(new GoogleCloudAssuredworkloadsV1WorkloadResourceSettings() {{
                            displayName = "modi";
                            resourceId = "qui";
                            resourceType = GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum.ENCRYPTION_KEYS_PROJECT;
                        }}),
                        add(new GoogleCloudAssuredworkloadsV1WorkloadResourceSettings() {{
                            displayName = "cum";
                            resourceId = "esse";
                            resourceType = GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum.CONSUMER_PROJECT;
                        }}),
                    }};
                    saaEnrollmentResponse = new GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse() {{
                        setupErrors = new org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum[]{{
                            add(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum.SETUP_ERROR_UNSPECIFIED),
                            add(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum.SETUP_ERROR_UNSPECIFIED),
                            add(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum.ERROR_INVALID_BASE_SETUP),
                        }};
                        setupStatus = GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum.STATUS_PENDING;
                    }};;
                    violationNotificationsEnabled = false;
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                externalId = "natus";
                fields = "laboriosam";
                key = "hic";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsCreate(req, new AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity("iste", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsDelete

Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                etag = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsDelete(req, new AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity("nobis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsList

Lists Assured Workloads under a CRM Node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsListRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                filter = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                pageSize = 102044L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "culpa";
                uploadProtocol = "consequuntur";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsListResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsList(req, new AssuredworkloadsOrganizationsLocationsWorkloadsListSecurity("repellat", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAssuredworkloadsV1ListWorkloadsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions

Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest = new GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest() {{
                    etag = "commodi";
                    partnerPermissions = new GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions() {{
                        dataLogsViewer = false;
                        remediateFolderViolations = false;
                        serviceAccessApprover = false;
                    }};;
                    updateMask = "quam";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "animi";
                uploadProtocol = "enim";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions(req, new AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity("odit", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAssuredworkloadsV1Workload != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsPatch

Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadInput;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudAssuredworkloadsV1WorkloadInput = new GoogleCloudAssuredworkloadsV1WorkloadInput() {{
                    billingAccount = "ipsam";
                    complianceRegime = GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum.ITAR;
                    complianceStatus = new GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus() {{
                        acknowledgedViolationCount = 820994;
                        activeViolationCount = 13571;
                    }};;
                    displayName = "quasi";
                    ekmProvisioningResponse = new GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse() {{
                        ekmProvisioningErrorDomain = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum.EXTERNAL_USER_ERROR;
                        ekmProvisioningErrorMapping = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum.MISSING_EKM_CONNECTION_ADMIN_PERMISSION;
                        ekmProvisioningState = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum.EKM_PROVISIONING_STATE_FAILED;
                    }};;
                    enableSovereignControls = false;
                    etag = "quasi";
                    kmsSettings = new GoogleCloudAssuredworkloadsV1WorkloadKMSSettings() {{
                        nextRotationTime = "reiciendis";
                        rotationPeriod = "voluptatibus";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("nihil", "praesentium");
                        put("voluptatibus", "ipsa");
                        put("omnis", "voluptate");
                        put("cum", "perferendis");
                    }};
                    name = "Bessie Grady II";
                    partner = GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum.LOCAL_CONTROLS_BY_S3_NS;
                    provisionedResourcesParent = "iusto";
                    resourceSettings = new org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[]{{
                        add(new GoogleCloudAssuredworkloadsV1WorkloadResourceSettings() {{
                            displayName = "harum";
                            resourceId = "enim";
                            resourceType = GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum.KEYRING;
                        }}),
                    }};
                    saaEnrollmentResponse = new GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse() {{
                        setupErrors = new org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum[]{{
                            add(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum.ERROR_SETUP_CHECK_FAILED),
                            add(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum.SETUP_ERROR_UNSPECIFIED),
                        }};
                        setupStatus = GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum.SETUP_STATE_UNSPECIFIED;
                    }};;
                    violationNotificationsEnabled = false;
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                updateMask = "voluptates";
                uploadType = "quasi";
                uploadProtocol = "repudiandae";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsPatch(req, new AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity("sint", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAssuredworkloadsV1Workload != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources

Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest = new GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest() {{
                    restrictionType = GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum.ALLOW_ALL_GCP_RESOURCES;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "labore";
                uploadProtocol = "modi";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources(req, new AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity("qui", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge

Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudAssuredworkloadsV1AcknowledgeViolationRequest = new GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest() {{
                    comment = "perferendis";
                    nonCompliantOrgPolicy = "magni";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge(req, new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity("labore", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAssuredworkloadsV1AcknowledgeViolationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet

Retrieves Assured Workload Violation based on ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "provident";
                key = "necessitatibus";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet(req, new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity("a", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAssuredworkloadsV1Violation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsViolationsList

Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest req = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                filter = "magnam";
                intervalEndTime = "cumque";
                intervalStartTime = "facere";
                key = "ea";
                oauthToken = "aliquid";
                pageSize = 675439L;
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsWorkloadsViolationsList(req, new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity("accusamus", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAssuredworkloadsV1ListViolationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
