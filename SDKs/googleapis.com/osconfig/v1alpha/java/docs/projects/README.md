# projects

### Available Operations

* [osconfigProjectsLocationsInstanceOSPoliciesCompliancesList](#osconfigprojectslocationsinstanceospoliciescomplianceslist) - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesInventoriesList](#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesVulnerabilityReportsList](#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [osconfigProjectsLocationsOsPolicyAssignmentsCreate](#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [osconfigProjectsLocationsOsPolicyAssignmentsDelete](#osconfigprojectslocationsospolicyassignmentsdelete) - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [osconfigProjectsLocationsOsPolicyAssignmentsList](#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [osconfigProjectsLocationsOsPolicyAssignmentsListRevisions](#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel](#osconfigprojectslocationsospolicyassignmentsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet](#osconfigprojectslocationsospolicyassignmentsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [osconfigProjectsLocationsOsPolicyAssignmentsPatch](#osconfigprojectslocationsospolicyassignmentspatch) - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

## osconfigProjectsLocationsInstanceOSPoliciesCompliancesList

List OS policies compliance data for all Compute Engine VM instances in the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest req = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest("delectus") {{
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

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse res = sdk.projects.osconfigProjectsLocationsInstanceOSPoliciesCompliancesList(req, new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstanceOSPoliciesCompliancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsInstancesInventoriesList

List inventory data for all VM instances in the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstancesInventoriesListRequest req = new OsconfigProjectsLocationsInstancesInventoriesListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                filter = "at";
                key = "at";
                oauthToken = "maiores";
                pageSize = 473608L;
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
                view = OsconfigProjectsLocationsInstancesInventoriesListViewEnum.FULL;
            }};            

            OsconfigProjectsLocationsInstancesInventoriesListResponse res = sdk.projects.osconfigProjectsLocationsInstancesInventoriesList(req, new OsconfigProjectsLocationsInstancesInventoriesListSecurity("dolorum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInventoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList

List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest req = new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "hic";
                filter = "optio";
                key = "totam";
                oauthToken = "beatae";
                pageSize = 414662L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
            }};            

            OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse res = sdk.projects.osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList(req, new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity("cum", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOSPolicyAssignmentReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsInstancesVulnerabilityReportsList

List vulnerability reports for all VM instances in the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest req = new OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                filter = "sed";
                key = "iste";
                oauthToken = "dolor";
                pageSize = 616934L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse res = sdk.projects.osconfigProjectsLocationsInstancesVulnerabilityReportsList(req, new OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVulnerabilityReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsCreate

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.OSPolicy;
import org.openapis.openapi.models.shared.OSPolicyAssignmentInput;
import org.openapis.openapi.models.shared.OSPolicyAssignmentInstanceFilter;
import org.openapis.openapi.models.shared.OSPolicyAssignmentInstanceFilterInventory;
import org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet;
import org.openapis.openapi.models.shared.OSPolicyAssignmentRollout;
import org.openapis.openapi.models.shared.OSPolicyInventoryFilter;
import org.openapis.openapi.models.shared.OSPolicyModeEnum;
import org.openapis.openapi.models.shared.OSPolicyOSFilter;
import org.openapis.openapi.models.shared.OSPolicyResource;
import org.openapis.openapi.models.shared.OSPolicyResourceExecResource;
import org.openapis.openapi.models.shared.OSPolicyResourceExecResourceExec;
import org.openapis.openapi.models.shared.OSPolicyResourceExecResourceExecInterpreterEnum;
import org.openapis.openapi.models.shared.OSPolicyResourceFile;
import org.openapis.openapi.models.shared.OSPolicyResourceFileGcs;
import org.openapis.openapi.models.shared.OSPolicyResourceFileRemote;
import org.openapis.openapi.models.shared.OSPolicyResourceFileResource;
import org.openapis.openapi.models.shared.OSPolicyResourceFileResourceStateEnum;
import org.openapis.openapi.models.shared.OSPolicyResourceGroup;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResource;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceAPT;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceDeb;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceDesiredStateEnum;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceGooGet;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceMSI;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceRPM;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceYUM;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceZypper;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResource;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceAptRepository;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceGooRepository;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceYumRepository;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceZypperRepository;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                osPolicyAssignmentInput = new OSPolicyAssignmentInput() {{
                    description = "saepe";
                    etag = "quidem";
                    instanceFilter = new OSPolicyAssignmentInstanceFilter() {{
                        all = false;
                        exclusionLabels = new org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet[]{{
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "est");
                                }};
                            }}),
                        }};
                        inclusionLabels = new org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet[]{{
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("dolores", "dolorem");
                                    put("corporis", "explicabo");
                                    put("nobis", "enim");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sapiente", "architecto");
                                    put("mollitia", "dolorem");
                                    put("culpa", "consequuntur");
                                    put("repellat", "mollitia");
                                }};
                            }}),
                        }};
                        inventories = new org.openapis.openapi.models.shared.OSPolicyAssignmentInstanceFilterInventory[]{{
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "numquam";
                                osVersion = "commodi";
                            }}),
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "quam";
                                osVersion = "molestiae";
                            }}),
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "velit";
                                osVersion = "error";
                            }}),
                        }};
                        osShortNames = new String[]{{
                            add("quis"),
                        }};
                    }};;
                    name = "Kayla O'Kon";
                    osPolicies = new org.openapis.openapi.models.shared.OSPolicy[]{{
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "sequi";
                            id = "f5ad019d-a1ff-4e78-b097-b0074f15471b";
                            mode = OSPolicyModeEnum.MODE_UNSPECIFIED;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "repudiandae";
                                            osVersion = "quae";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "ipsum";
                                            osVersion = "quidem";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "molestias";
                                        osVersion = "excepturi";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("praesentium"),
                                                        add("rem"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptates";
                                                            generation = "quasi";
                                                            object = "repudiandae";
                                                        }};
                                                        localPath = "sint";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "veritatis";
                                                            uri = "https://feline-eve.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "quibusdam";
                                                    script = "explicabo";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("distinctio"),
                                                        add("quibusdam"),
                                                        add("labore"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "modi";
                                                            generation = "qui";
                                                            object = "aliquid";
                                                        }};
                                                        localPath = "cupiditate";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quos";
                                                            uri = "http://damp-sousaphone.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "fugit";
                                                    script = "dolorum";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "excepturi";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "tempora";
                                                        generation = "facilis";
                                                        object = "tempore";
                                                    }};
                                                    localPath = "labore";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "delectus";
                                                        uri = "http://excellent-roll.name";
                                                    }};
                                                }};
                                                path = "aliquid";
                                                permissions = "provident";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "9a3efa77-dfb1-44cd-a6ae-395efb9ba88f";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Sandy Huels";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "omnis";
                                                            generation = "molestiae";
                                                            object = "perferendis";
                                                        }};
                                                        localPath = "nihil";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "magnam";
                                                            uri = "https://pungent-dugout.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Robin Keebler";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("magnam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "et";
                                                            generation = "excepturi";
                                                            object = "ullam";
                                                        }};
                                                        localPath = "provident";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quos";
                                                            uri = "https://angelic-pharmacist.org";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "mollitia";
                                                            generation = "ad";
                                                            object = "eum";
                                                        }};
                                                        localPath = "dolor";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "necessitatibus";
                                                            uri = "http://handy-borrowing.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Doyle Gibson";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Dr. Arnold Bradtke";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("repellat"),
                                                        add("quibusdam"),
                                                    }};
                                                    distribution = "sed";
                                                    gpgKey = "saepe";
                                                    uri = "https://another-circuit.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Victor Casper";
                                                    url = "pariatur";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "maxime";
                                                    displayName = "ea";
                                                    gpgKeys = new String[]{{
                                                        add("odit"),
                                                        add("ea"),
                                                        add("accusantium"),
                                                    }};
                                                    id = "1fb576b0-d5f0-4d30-85fb-b2587053202c";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "quam";
                                                    displayName = "dolor";
                                                    gpgKeys = new String[]{{
                                                        add("nostrum"),
                                                        add("hic"),
                                                        add("recusandae"),
                                                        add("omnis"),
                                                    }};
                                                    id = "b90c2890-9b3f-4e49-a8d9-cbf48633323f";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("cum"),
                                                        add("voluptate"),
                                                        add("dignissimos"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "reiciendis";
                                                            generation = "amet";
                                                            object = "dolorum";
                                                        }};
                                                        localPath = "numquam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "veritatis";
                                                            uri = "http://awesome-horde.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "accusamus";
                                                    script = "quidem";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("voluptas"),
                                                        add("natus"),
                                                        add("eos"),
                                                        add("atque"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sit";
                                                            generation = "fugiat";
                                                            object = "ab";
                                                        }};
                                                        localPath = "soluta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolorum";
                                                            uri = "http://jealous-polyester.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "necessitatibus";
                                                    script = "distinctio";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "asperiores";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "nihil";
                                                        generation = "ipsum";
                                                        object = "voluptate";
                                                    }};
                                                    localPath = "id";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "saepe";
                                                        uri = "http://concrete-alien.biz";
                                                    }};
                                                }};
                                                path = "optio";
                                                permissions = "accusamus";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "e6a95d8a-0d44-46ce-aaf7-a73cf3be453f";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Christian Balistreri";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sed";
                                                            generation = "vel";
                                                            object = "libero";
                                                        }};
                                                        localPath = "voluptas";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deserunt";
                                                            uri = "http://dry-donor.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Miss Jody Rogahn";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("aspernatur"),
                                                        add("dolores"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "distinctio";
                                                            generation = "facilis";
                                                            object = "aliquid";
                                                        }};
                                                        localPath = "quam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "molestias";
                                                            uri = "https://delightful-cook.com";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magni";
                                                            generation = "odio";
                                                            object = "sunt";
                                                        }};
                                                        localPath = "ullam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nam";
                                                            uri = "https://ample-sake.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Carl Turner DDS";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Dr. Randolph McDermott";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("adipisci"),
                                                        add("dolorum"),
                                                    }};
                                                    distribution = "architecto";
                                                    gpgKey = "quae";
                                                    uri = "http://narrow-tritone.com";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Marcos Schaden";
                                                    url = "facilis";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "cupiditate";
                                                    displayName = "qui";
                                                    gpgKeys = new String[]{{
                                                        add("laudantium"),
                                                    }};
                                                    id = "79fce953-f73e-4f7f-bc7a-bd74dd39c0f5";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "nulla";
                                                    displayName = "fugit";
                                                    gpgKeys = new String[]{{
                                                        add("maiores"),
                                                        add("doloribus"),
                                                        add("iusto"),
                                                        add("eligendi"),
                                                    }};
                                                    id = "70a45626-d436-4813-b16d-9f5fce6c5561";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("ea"),
                                                        add("quo"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "consectetur";
                                                            generation = "recusandae";
                                                            object = "aspernatur";
                                                        }};
                                                        localPath = "minima";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "eaque";
                                                            uri = "https://scornful-aftermath.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "impedit";
                                                    script = "aliquam";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("accusamus"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "inventore";
                                                            generation = "non";
                                                            object = "et";
                                                        }};
                                                        localPath = "dolorum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "laborum";
                                                            uri = "https://evergreen-homogenate.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "quas";
                                                    script = "assumenda";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "nulla";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "voluptas";
                                                        generation = "libero";
                                                        object = "quasi";
                                                    }};
                                                    localPath = "tempora";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "numquam";
                                                        uri = "http://optimistic-avenue.info";
                                                    }};
                                                }};
                                                path = "magnam";
                                                permissions = "odio";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "778a7bd4-66d2-48c1-8ab3-cdca4251904e";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Kelly Donnelly";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "recusandae";
                                                            generation = "aperiam";
                                                            object = "distinctio";
                                                        }};
                                                        localPath = "quod";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dignissimos";
                                                            uri = "http://knobby-liver.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Violet Johns";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("molestiae"),
                                                        add("accusantium"),
                                                        add("porro"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "eum";
                                                            generation = "quas";
                                                            object = "praesentium";
                                                        }};
                                                        localPath = "consequuntur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deleniti";
                                                            uri = "http://reckless-perch.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "atque";
                                                            generation = "explicabo";
                                                            object = "minima";
                                                        }};
                                                        localPath = "nisi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "fugit";
                                                            uri = "https://cumbersome-community.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Ms. Marion Little";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Patrick Koch";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("quasi"),
                                                        add("saepe"),
                                                    }};
                                                    distribution = "vel";
                                                    gpgKey = "harum";
                                                    uri = "http://right-mouse.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Guillermo Balistreri";
                                                    url = "adipisci";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "cumque";
                                                    displayName = "consequuntur";
                                                    gpgKeys = new String[]{{
                                                        add("minus"),
                                                    }};
                                                    id = "4f3789fd-871f-499d-92ef-d121aa6f1e67";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "eius";
                                                    displayName = "libero";
                                                    gpgKeys = new String[]{{
                                                        add("soluta"),
                                                        add("accusantium"),
                                                        add("aliquam"),
                                                        add("sapiente"),
                                                    }};
                                                    id = "15756082-d68e-4a19-b1d1-7051339d0808";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("mollitia"),
                                                        add("ab"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "corrupti";
                                                            generation = "non";
                                                            object = "voluptatem";
                                                        }};
                                                        localPath = "dolor";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "occaecati";
                                                            uri = "http://sneaky-cardigan.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "dignissimos";
                                                    script = "dicta";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("natus"),
                                                        add("velit"),
                                                        add("voluptatibus"),
                                                        add("voluptas"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "asperiores";
                                                            generation = "aperiam";
                                                            object = "ea";
                                                        }};
                                                        localPath = "quaerat";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "consequuntur";
                                                            uri = "https://portly-silver.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "asperiores";
                                                    script = "nemo";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "quae";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "quaerat";
                                                        generation = "porro";
                                                        object = "quod";
                                                    }};
                                                    localPath = "labore";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "ab";
                                                        uri = "http://real-pink.info";
                                                    }};
                                                }};
                                                path = "velit";
                                                permissions = "culpa";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "e8d67864-dbb6-475f-95e6-0b375ed4f6fb";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Dr. Terence Gulgowski";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "non";
                                                            generation = "amet";
                                                            object = "beatae";
                                                        }};
                                                        localPath = "dignissimos";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "a";
                                                            uri = "https://empty-foot.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Dr. Silvia Renner";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("aspernatur"),
                                                        add("voluptas"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptas";
                                                            generation = "voluptas";
                                                            object = "minima";
                                                        }};
                                                        localPath = "nobis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolorum";
                                                            uri = "http://stable-closing.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "in";
                                                            generation = "dolore";
                                                            object = "aliquam";
                                                        }};
                                                        localPath = "officiis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "temporibus";
                                                            uri = "http://enraged-repayment.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Moses Douglas";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Jimmie Weimann";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("sed"),
                                                        add("reiciendis"),
                                                        add("explicabo"),
                                                    }};
                                                    distribution = "asperiores";
                                                    gpgKey = "facilis";
                                                    uri = "http://rundown-bathrobe.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Janie Cremin";
                                                    url = "quidem";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "explicabo";
                                                    displayName = "voluptas";
                                                    gpgKeys = new String[]{{
                                                        add("architecto"),
                                                        add("suscipit"),
                                                        add("sapiente"),
                                                    }};
                                                    id = "e1f08f42-94e3-4698-b447-f603e8b445e8";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "sit";
                                                    displayName = "nobis";
                                                    gpgKeys = new String[]{{
                                                        add("veniam"),
                                                        add("minima"),
                                                        add("recusandae"),
                                                    }};
                                                    id = "fd20e457-e185-48b6-a89f-be3a5aa8e482";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "fugiat";
                                            osVersion = "voluptatem";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "culpa";
                                            osVersion = "expedita";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "magnam";
                                        osVersion = "consequatur";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("sit"),
                                                        add("voluptatum"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quas";
                                                            generation = "repudiandae";
                                                            object = "corporis";
                                                        }};
                                                        localPath = "et";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "blanditiis";
                                                            uri = "http://crisp-amazement.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "saepe";
                                                    script = "error";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("incidunt"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "reiciendis";
                                                            generation = "dolorem";
                                                            object = "harum";
                                                        }};
                                                        localPath = "dicta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "architecto";
                                                            uri = "https://flawed-proctor.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "nam";
                                                    script = "tenetur";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "laboriosam";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "alias";
                                                        generation = "amet";
                                                        object = "deserunt";
                                                    }};
                                                    localPath = "voluptate";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "unde";
                                                        uri = "https://old-fashioned-spectacles.org";
                                                    }};
                                                }};
                                                path = "voluptates";
                                                permissions = "perferendis";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "b7da8a50-ce18-47f8-abc1-73d689eee952";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Elisa Little";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "blanditiis";
                                                            generation = "suscipit";
                                                            object = "repudiandae";
                                                        }};
                                                        localPath = "atque";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "atque";
                                                            uri = "http://vapid-porthole.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Mr. Anthony Waelchi Sr.";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("laboriosam"),
                                                        add("velit"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "a";
                                                            generation = "molestias";
                                                            object = "magnam";
                                                        }};
                                                        localPath = "saepe";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "consequuntur";
                                                            uri = "https://unfinished-norm.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "adipisci";
                                                            generation = "eveniet";
                                                            object = "occaecati";
                                                        }};
                                                        localPath = "consequuntur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "fugit";
                                                            uri = "https://glistening-human.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Ana Predovic";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Ms. Brian Kerluke IV";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("cum"),
                                                    }};
                                                    distribution = "iure";
                                                    gpgKey = "necessitatibus";
                                                    uri = "http://quiet-rabbit.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Jim Hammes II";
                                                    url = "perspiciatis";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "nihil";
                                                    displayName = "mollitia";
                                                    gpgKeys = new String[]{{
                                                        add("alias"),
                                                        add("maiores"),
                                                    }};
                                                    id = "f2a54a31-e947-464a-be86-5e7956f9251a";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "nostrum";
                                                    displayName = "mollitia";
                                                    gpgKeys = new String[]{{
                                                        add("possimus"),
                                                        add("animi"),
                                                        add("ex"),
                                                    }};
                                                    id = "60ff57bf-aad4-4f9e-bc1b-4512c1032648";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("impedit"),
                                                        add("eos"),
                                                        add("sapiente"),
                                                        add("eum"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dicta";
                                                            generation = "minima";
                                                            object = "beatae";
                                                        }};
                                                        localPath = "cupiditate";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "provident";
                                                            uri = "https://shocking-understanding.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "earum";
                                                    script = "perspiciatis";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("debitis"),
                                                        add("aliquid"),
                                                        add("porro"),
                                                        add("suscipit"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dolorem";
                                                            generation = "fugit";
                                                            object = "cumque";
                                                        }};
                                                        localPath = "fuga";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ratione";
                                                            uri = "https://unrealistic-study.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "et";
                                                    script = "ducimus";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "natus";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "occaecati";
                                                        generation = "suscipit";
                                                        object = "adipisci";
                                                    }};
                                                    localPath = "quasi";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "magni";
                                                        uri = "https://timely-terminal.com";
                                                    }};
                                                }};
                                                path = "tempora";
                                                permissions = "nihil";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "1778ff61-d017-4476-b60a-15db6a660659";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Raymond Muller";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "mollitia";
                                                            generation = "laborum";
                                                            object = "libero";
                                                        }};
                                                        localPath = "ad";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deleniti";
                                                            uri = "http://cautious-species.info";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Debbie Hammes V";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("aliquid"),
                                                        add("beatae"),
                                                        add("voluptatum"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "omnis";
                                                            generation = "veritatis";
                                                            object = "rerum";
                                                        }};
                                                        localPath = "est";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "culpa";
                                                            uri = "http://well-off-tax.com";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "fuga";
                                                            generation = "pariatur";
                                                            object = "debitis";
                                                        }};
                                                        localPath = "voluptatem";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "alias";
                                                            uri = "https://vital-guestbook.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Israel Hickle";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Dorothy Stanton";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("ipsam"),
                                                        add("culpa"),
                                                        add("dolor"),
                                                    }};
                                                    distribution = "aliquam";
                                                    gpgKey = "inventore";
                                                    uri = "https://both-document.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Alice Bailey";
                                                    url = "ab";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "laudantium";
                                                    displayName = "quae";
                                                    gpgKeys = new String[]{{
                                                        add("fugiat"),
                                                    }};
                                                    id = "5208ece7-e253-4b66-8451-c6c6e205e16d";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "vero";
                                                    displayName = "est";
                                                    gpgKeys = new String[]{{
                                                        add("sequi"),
                                                        add("doloribus"),
                                                        add("repudiandae"),
                                                    }};
                                                    id = "c9578a64-5842-473a-8418-d162309fb092";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "iste";
                                            osVersion = "magni";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "inventore";
                                            osVersion = "fuga";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "accusamus";
                                            osVersion = "voluptatibus";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "distinctio";
                                        osVersion = "omnis";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("praesentium"),
                                                        add("maxime"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magnam";
                                                            generation = "temporibus";
                                                            object = "quos";
                                                        }};
                                                        localPath = "commodi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "itaque";
                                                            uri = "http://mealy-tutu.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "vero";
                                                    script = "voluptatem";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("vel"),
                                                        add("alias"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quasi";
                                                            generation = "non";
                                                            object = "maiores";
                                                        }};
                                                        localPath = "enim";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sint";
                                                            uri = "https://powerless-infarction.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "est";
                                                    script = "quis";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "sint";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "accusamus";
                                                        generation = "impedit";
                                                        object = "hic";
                                                    }};
                                                    localPath = "necessitatibus";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "asperiores";
                                                        uri = "http://healthy-tenor.org";
                                                    }};
                                                }};
                                                path = "quae";
                                                permissions = "minus";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "a3383c2b-eb47-4737-bc8d-72f64d1db1f2";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Mr. Jim Franecki";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ea";
                                                            generation = "beatae";
                                                            object = "vero";
                                                        }};
                                                        localPath = "excepturi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "eum";
                                                            uri = "http://first-node.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Courtney Monahan III";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("velit"),
                                                        add("laborum"),
                                                        add("non"),
                                                        add("dolor"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "iusto";
                                                            generation = "sit";
                                                            object = "doloremque";
                                                        }};
                                                        localPath = "consequatur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "officia";
                                                            uri = "https://ill-fated-prisoner.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "facilis";
                                                            generation = "placeat";
                                                            object = "perspiciatis";
                                                        }};
                                                        localPath = "expedita";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deleniti";
                                                            uri = "https://jolly-fledgling.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Lyle Russel";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Jeremiah Koch PhD";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("inventore"),
                                                    }};
                                                    distribution = "dolorem";
                                                    gpgKey = "ad";
                                                    uri = "http://partial-growth.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Wm Legros";
                                                    url = "fugit";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "alias";
                                                    displayName = "magni";
                                                    gpgKeys = new String[]{{
                                                        add("quae"),
                                                        add("quae"),
                                                    }};
                                                    id = "435e139d-bc22-459b-9abd-a8c070e1084c";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "distinctio";
                                                    displayName = "voluptatem";
                                                    gpgKeys = new String[]{{
                                                        add("esse"),
                                                        add("dolores"),
                                                    }};
                                                    id = "d1ad879e-eb96-465b-85ef-bd02bae0be2d";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("praesentium"),
                                                        add("odit"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "explicabo";
                                                            generation = "corporis";
                                                            object = "error";
                                                        }};
                                                        localPath = "earum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "adipisci";
                                                            uri = "https://pleasing-drapes.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "beatae";
                                                    script = "unde";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("delectus"),
                                                        add("cupiditate"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "fugit";
                                                            generation = "numquam";
                                                            object = "numquam";
                                                        }};
                                                        localPath = "nesciunt";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "at";
                                                            uri = "https://lined-ruin.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "qui";
                                                    script = "expedita";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "voluptatum";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "cupiditate";
                                                        generation = "minima";
                                                        object = "placeat";
                                                    }};
                                                    localPath = "enim";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "neque";
                                                        uri = "http://staid-honeydew.biz";
                                                    }};
                                                }};
                                                path = "corporis";
                                                permissions = "magnam";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "fb0b3489-6c3c-4a5a-8fbe-2fd570757792";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Peter Kuphal";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "itaque";
                                                            generation = "similique";
                                                            object = "optio";
                                                        }};
                                                        localPath = "ex";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quaerat";
                                                            uri = "http://unfortunate-skill.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Ms. Connie Gleason";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("repudiandae"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "cum";
                                                            generation = "dicta";
                                                            object = "earum";
                                                        }};
                                                        localPath = "veniam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "animi";
                                                            uri = "http://scientific-burial.com";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "necessitatibus";
                                                            generation = "nobis";
                                                            object = "ipsa";
                                                        }};
                                                        localPath = "ducimus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "maiores";
                                                            uri = "http://bulky-glasses.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Andy Mayert";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Nettie Rosenbaum";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("quas"),
                                                        add("totam"),
                                                        add("molestias"),
                                                    }};
                                                    distribution = "odio";
                                                    gpgKey = "eaque";
                                                    uri = "https://calm-mentor.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Randolph Reinger DVM";
                                                    url = "impedit";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "cum";
                                                    displayName = "ipsum";
                                                    gpgKeys = new String[]{{
                                                        add("saepe"),
                                                    }};
                                                    id = "a055b197-cd44-4e2f-92d8-2d3513bb6f48";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "distinctio";
                                                    displayName = "nisi";
                                                    gpgKeys = new String[]{{
                                                        add("nisi"),
                                                        add("libero"),
                                                    }};
                                                    id = "cdb35ff2-e4b2-4753-ba8c-d9e7319c177d";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("aspernatur"),
                                                        add("enim"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "delectus";
                                                            generation = "iusto";
                                                            object = "dignissimos";
                                                        }};
                                                        localPath = "libero";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "illo";
                                                            uri = "http://fickle-switchboard.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "veniam";
                                                    script = "eos";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("earum"),
                                                        add("reprehenderit"),
                                                        add("praesentium"),
                                                        add("nemo"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "repellat";
                                                            generation = "quisquam";
                                                            object = "sequi";
                                                        }};
                                                        localPath = "nihil";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deleniti";
                                                            uri = "http://flawed-sourwood.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "provident";
                                                    script = "laudantium";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "repudiandae";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "consequatur";
                                                        generation = "maxime";
                                                        object = "aspernatur";
                                                    }};
                                                    localPath = "nam";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "expedita";
                                                        uri = "https://optimal-training.net";
                                                    }};
                                                }};
                                                path = "dignissimos";
                                                permissions = "corporis";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "ad636c60-0503-4d8b-b311-80f739ae9e05";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Lorena Quitzon V";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "accusamus";
                                                            generation = "eos";
                                                            object = "totam";
                                                        }};
                                                        localPath = "dicta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptatem";
                                                            uri = "http://elaborate-camp.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Alberto Breitenberg";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("esse"),
                                                        add("voluptatem"),
                                                        add("perferendis"),
                                                        add("rerum"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ea";
                                                            generation = "aperiam";
                                                            object = "dignissimos";
                                                        }};
                                                        localPath = "repellat";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "velit";
                                                            uri = "https://old-fashioned-curiosity.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dignissimos";
                                                            generation = "consectetur";
                                                            object = "soluta";
                                                        }};
                                                        localPath = "natus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "temporibus";
                                                            uri = "https://elementary-variable.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Dexter Stanton";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Clarence Feeney Sr.";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("non"),
                                                        add("ab"),
                                                    }};
                                                    distribution = "illo";
                                                    gpgKey = "hic";
                                                    uri = "https://white-depth.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Annette Green";
                                                    url = "modi";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "in";
                                                    displayName = "explicabo";
                                                    gpgKeys = new String[]{{
                                                        add("rem"),
                                                        add("aperiam"),
                                                        add("odit"),
                                                        add("deleniti"),
                                                    }};
                                                    id = "57a5b404-63a7-4d57-9f14-00e764ad7334";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "itaque";
                                                    displayName = "minus";
                                                    gpgKeys = new String[]{{
                                                        add("distinctio"),
                                                    }};
                                                    id = "781b36a0-8088-4d10-8efa-da200ef0422e";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("explicabo"),
                                                        add("beatae"),
                                                        add("aliquid"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "modi";
                                                            generation = "optio";
                                                            object = "voluptatibus";
                                                        }};
                                                        localPath = "molestias";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "officia";
                                                            uri = "https://mealy-concert.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "impedit";
                                                    script = "ducimus";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("velit"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "reiciendis";
                                                            generation = "repellat";
                                                            object = "nulla";
                                                        }};
                                                        localPath = "laborum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "natus";
                                                            uri = "https://arctic-gosling.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "voluptates";
                                                    script = "non";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "rem";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "quia";
                                                        generation = "ullam";
                                                        object = "quisquam";
                                                    }};
                                                    localPath = "dicta";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "voluptatibus";
                                                        uri = "https://barren-tale.com";
                                                    }};
                                                }};
                                                path = "architecto";
                                                permissions = "enim";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "80bff918-544e-4c42-9efc-ce8f1977773e";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Dawn Herzog";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "officia";
                                                            generation = "reprehenderit";
                                                            object = "distinctio";
                                                        }};
                                                        localPath = "eius";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ipsa";
                                                            uri = "https://woeful-app.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Ernestine Hackett";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("est"),
                                                        add("delectus"),
                                                        add("velit"),
                                                        add("vitae"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nesciunt";
                                                            generation = "similique";
                                                            object = "illo";
                                                        }};
                                                        localPath = "repellat";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nemo";
                                                            uri = "https://superficial-oak.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "explicabo";
                                                            generation = "ipsam";
                                                            object = "cupiditate";
                                                        }};
                                                        localPath = "optio";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "alias";
                                                            uri = "https://discrete-hanger.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Lynn Trantow";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Carrie White";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("ex"),
                                                        add("minus"),
                                                    }};
                                                    distribution = "ab";
                                                    gpgKey = "beatae";
                                                    uri = "https://hospitable-senior.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Mr. Kristine Hansen";
                                                    url = "magni";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "incidunt";
                                                    displayName = "adipisci";
                                                    gpgKeys = new String[]{{
                                                        add("dolor"),
                                                        add("exercitationem"),
                                                        add("expedita"),
                                                    }};
                                                    id = "bc05a23a-45ce-4fc5-bde1-0a0ce2169e51";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "accusantium";
                                                    displayName = "perferendis";
                                                    gpgKeys = new String[]{{
                                                        add("provident"),
                                                    }};
                                                    id = "c6dc5e34-7627-499b-bbbe-6949fb2bb4ec";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "saepe";
                                            osVersion = "autem";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "quo";
                                            osVersion = "nesciunt";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "illum";
                                            osVersion = "nemo";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "illum";
                                        osVersion = "facilis";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("assumenda"),
                                                        add("recusandae"),
                                                        add("distinctio"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "pariatur";
                                                            generation = "ad";
                                                            object = "facere";
                                                        }};
                                                        localPath = "laborum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "eveniet";
                                                            uri = "https://feisty-shrimp.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "suscipit";
                                                    script = "deserunt";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("laborum"),
                                                        add("est"),
                                                        add("occaecati"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "labore";
                                                            generation = "quo";
                                                            object = "perferendis";
                                                        }};
                                                        localPath = "fugit";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aliquid";
                                                            uri = "http://fresh-rod.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "officiis";
                                                    script = "unde";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "nulla";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "error";
                                                        generation = "mollitia";
                                                        object = "magnam";
                                                    }};
                                                    localPath = "nostrum";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "esse";
                                                        uri = "https://realistic-slip.net";
                                                    }};
                                                }};
                                                path = "quasi";
                                                permissions = "deserunt";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "600dec00-1ac8-402e-aec0-9ff8f0f816ff";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Monica Koch";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quasi";
                                                            generation = "neque";
                                                            object = "vero";
                                                        }};
                                                        localPath = "excepturi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "accusantium";
                                                            uri = "http://sneaky-breakpoint.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Miss Dana Prohaska";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("id"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "laboriosam";
                                                            generation = "ex";
                                                            object = "quas";
                                                        }};
                                                        localPath = "veritatis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ullam";
                                                            uri = "http://plump-doorknob.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magni";
                                                            generation = "deserunt";
                                                            object = "delectus";
                                                        }};
                                                        localPath = "omnis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sed";
                                                            uri = "http://stormy-fear.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Miriam Wuckert";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Miss Vincent Hickle";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("aliquid"),
                                                        add("asperiores"),
                                                    }};
                                                    distribution = "a";
                                                    gpgKey = "nobis";
                                                    uri = "https://angelic-buy.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Laverne Sauer";
                                                    url = "modi";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "voluptates";
                                                    displayName = "fugit";
                                                    gpgKeys = new String[]{{
                                                        add("sequi"),
                                                        add("eligendi"),
                                                    }};
                                                    id = "f789ffaf-eda5-43e5-ae6e-0ac184c2b9c2";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "magnam";
                                                    displayName = "reprehenderit";
                                                    gpgKeys = new String[]{{
                                                        add("quos"),
                                                        add("corrupti"),
                                                        add("amet"),
                                                        add("molestiae"),
                                                    }};
                                                    id = "3a40e194-2f32-4e55-8557-56f5d56d0bd0";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "id";
                            id = "f2dfe13d-b4f6-42cb-a3f8-941aebc0b80a";
                            mode = OSPolicyModeEnum.VALIDATION;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "tempora";
                                            osVersion = "possimus";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "dolor";
                                        osVersion = "rerum";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("optio"),
                                                        add("delectus"),
                                                        add("minus"),
                                                        add("quo"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quos";
                                                            generation = "asperiores";
                                                            object = "voluptatum";
                                                        }};
                                                        localPath = "iste";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "corporis";
                                                            uri = "http://blaring-aftershave.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "at";
                                                    script = "possimus";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("pariatur"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "vel";
                                                            generation = "sapiente";
                                                            object = "mollitia";
                                                        }};
                                                        localPath = "quae";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quos";
                                                            uri = "http://excitable-tomorrow.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "quisquam";
                                                    script = "quas";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "consequuntur";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "maiores";
                                                        generation = "inventore";
                                                        object = "aliquid";
                                                    }};
                                                    localPath = "laudantium";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "est";
                                                        uri = "http://icy-curriculum.net";
                                                    }};
                                                }};
                                                path = "rem";
                                                permissions = "voluptatum";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "3e484380-b1f6-4b8c-a275-a60a04c495cc";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Ms. Violet Mills MD";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ipsam";
                                                            generation = "quasi";
                                                            object = "cumque";
                                                        }};
                                                        localPath = "dicta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "harum";
                                                            uri = "https://royal-breeze.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Lula Lowe";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("cum"),
                                                        add("pariatur"),
                                                        add("sapiente"),
                                                        add("quo"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "incidunt";
                                                            generation = "quod";
                                                            object = "minus";
                                                        }};
                                                        localPath = "porro";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "id";
                                                            uri = "https://obedient-recapitulation.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "esse";
                                                            generation = "hic";
                                                            object = "maxime";
                                                        }};
                                                        localPath = "accusantium";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "soluta";
                                                            uri = "http://tremendous-roller.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Maria Larson";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Troy Dach Jr.";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("eum"),
                                                        add("reprehenderit"),
                                                        add("voluptatum"),
                                                        add("blanditiis"),
                                                    }};
                                                    distribution = "nihil";
                                                    gpgKey = "atque";
                                                    uri = "https://present-margarine.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Joe Orn";
                                                    url = "magni";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "quae";
                                                    displayName = "quas";
                                                    gpgKeys = new String[]{{
                                                        add("enim"),
                                                        add("labore"),
                                                        add("sapiente"),
                                                        add("saepe"),
                                                    }};
                                                    id = "fa9c95f2-eac5-4565-9307-cfee81206e28";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "sunt";
                                                    displayName = "nesciunt";
                                                    gpgKeys = new String[]{{
                                                        add("laborum"),
                                                        add("aliquam"),
                                                        add("deserunt"),
                                                        add("modi"),
                                                    }};
                                                    id = "1c480d3f-2132-4af0-b102-d514f4cc6f18";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "hic";
                                            osVersion = "excepturi";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "aliquid";
                                            osVersion = "sed";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "beatae";
                                            osVersion = "similique";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "ea";
                                        osVersion = "animi";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("dignissimos"),
                                                        add("esse"),
                                                        add("animi"),
                                                        add("laudantium"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "esse";
                                                            generation = "eveniet";
                                                            object = "earum";
                                                        }};
                                                        localPath = "velit";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "officiis";
                                                            uri = "http://roasted-troop.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "explicabo";
                                                    script = "impedit";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quis"),
                                                        add("facilis"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ipsum";
                                                            generation = "ut";
                                                            object = "quaerat";
                                                        }};
                                                        localPath = "architecto";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "praesentium";
                                                            uri = "https://easy-going-purchase.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "illo";
                                                    script = "minus";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "quos";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "temporibus";
                                                        generation = "sint";
                                                        object = "iusto";
                                                    }};
                                                    localPath = "enim";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "accusamus";
                                                        uri = "http://useful-lifestyle.biz";
                                                    }};
                                                }};
                                                path = "quae";
                                                permissions = "omnis";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "8f84f144-f3e0-47ed-8c4a-a5f3cabd905a";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Mitchell Crona II";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nisi";
                                                            generation = "molestiae";
                                                            object = "quia";
                                                        }};
                                                        localPath = "laudantium";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sed";
                                                            uri = "http://lawful-question.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Angela Mayer";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("distinctio"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sapiente";
                                                            generation = "quam";
                                                            object = "est";
                                                        }};
                                                        localPath = "aliquam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "delectus";
                                                            uri = "https://metallic-judgment.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptatibus";
                                                            generation = "voluptas";
                                                            object = "non";
                                                        }};
                                                        localPath = "ullam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "laborum";
                                                            uri = "http://worthy-pickup.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Elaine Tromp";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Sandra Rowe Sr.";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("sed"),
                                                    }};
                                                    distribution = "amet";
                                                    gpgKey = "rerum";
                                                    uri = "http://grandiose-spiritual.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Alma Kunde";
                                                    url = "vitae";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "est";
                                                    displayName = "accusantium";
                                                    gpgKeys = new String[]{{
                                                        add("minus"),
                                                        add("quos"),
                                                        add("possimus"),
                                                        add("maiores"),
                                                    }};
                                                    id = "79f0a396-d90c-4364-b7c1-5dfbace188b1";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "impedit";
                                                    displayName = "tempora";
                                                    gpgKeys = new String[]{{
                                                        add("repudiandae"),
                                                        add("sed"),
                                                        add("impedit"),
                                                        add("quas"),
                                                    }};
                                                    id = "c6ce611f-eeb1-4c7c-bdb6-eec74378ba25";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("beatae"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "iusto";
                                                            generation = "esse";
                                                            object = "magnam";
                                                        }};
                                                        localPath = "odio";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nulla";
                                                            uri = "https://offensive-beach.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "illum";
                                                    script = "fugit";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("dolorum"),
                                                        add("repellat"),
                                                        add("nostrum"),
                                                        add("illum"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quibusdam";
                                                            generation = "commodi";
                                                            object = "esse";
                                                        }};
                                                        localPath = "explicabo";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "consectetur";
                                                            uri = "https://slimy-baggie.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "culpa";
                                                    script = "repudiandae";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "aspernatur";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "sapiente";
                                                        generation = "neque";
                                                        object = "officia";
                                                    }};
                                                    localPath = "suscipit";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "harum";
                                                        uri = "http://apt-algebra.name";
                                                    }};
                                                }};
                                                path = "iusto";
                                                permissions = "corrupti";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "56143f5a-6c98-4b55-9540-80d40bcacc6c";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Ismael Hudson";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "maiores";
                                                            generation = "consectetur";
                                                            object = "necessitatibus";
                                                        }};
                                                        localPath = "maxime";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "cupiditate";
                                                            uri = "http://old-dare.com";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Arturo Cole";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("possimus"),
                                                        add("fugit"),
                                                        add("ipsam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nostrum";
                                                            generation = "sequi";
                                                            object = "voluptatum";
                                                        }};
                                                        localPath = "quasi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "error";
                                                            uri = "https://far-flung-impression.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "expedita";
                                                            generation = "aperiam";
                                                            object = "voluptates";
                                                        }};
                                                        localPath = "possimus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "fugit";
                                                            uri = "http://utter-forehead.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Suzanne Kuvalis";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Raul Dooley";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("ipsa"),
                                                    }};
                                                    distribution = "mollitia";
                                                    gpgKey = "nam";
                                                    uri = "https://somber-practice.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Denise Hoppe";
                                                    url = "aliquid";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "provident";
                                                    displayName = "laboriosam";
                                                    gpgKeys = new String[]{{
                                                        add("ab"),
                                                        add("itaque"),
                                                        add("quisquam"),
                                                        add("eaque"),
                                                    }};
                                                    id = "0221b335-d89a-4cb3-acfd-a8d0c549ef03";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "alias";
                                                    displayName = "doloremque";
                                                    gpgKeys = new String[]{{
                                                        add("perspiciatis"),
                                                        add("quam"),
                                                    }};
                                                    id = "8a61fa1c-f206-488f-b7c1-ffc71dca163f";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "animi";
                                            osVersion = "sequi";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "eligendi";
                                        osVersion = "voluptatum";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("omnis"),
                                                        add("nihil"),
                                                        add("tenetur"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sapiente";
                                                            generation = "velit";
                                                            object = "adipisci";
                                                        }};
                                                        localPath = "non";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "optio";
                                                            uri = "https://trim-utensil.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "esse";
                                                    script = "laborum";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("voluptates"),
                                                        add("eum"),
                                                        add("quasi"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quas";
                                                            generation = "odio";
                                                            object = "commodi";
                                                        }};
                                                        localPath = "porro";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aliquid";
                                                            uri = "https://repulsive-cannibal.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "magni";
                                                    script = "natus";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "illum";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "a";
                                                        generation = "impedit";
                                                        object = "unde";
                                                    }};
                                                    localPath = "ut";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "facere";
                                                        uri = "http://worthy-treasure.net";
                                                    }};
                                                }};
                                                path = "facere";
                                                permissions = "dignissimos";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "9390066a-6d2d-4000-b553-38cec086fa21";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Jackie Carroll";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "cumque";
                                                            generation = "quidem";
                                                            object = "non";
                                                        }};
                                                        localPath = "beatae";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sunt";
                                                            uri = "https://carefree-hearsay.info";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Alonzo Erdman";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("distinctio"),
                                                        add("voluptatem"),
                                                        add("non"),
                                                        add("quaerat"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "consequatur";
                                                            generation = "laudantium";
                                                            object = "repellendus";
                                                        }};
                                                        localPath = "commodi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quibusdam";
                                                            uri = "http://heartfelt-endothelium.org";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "tenetur";
                                                            generation = "assumenda";
                                                            object = "dolore";
                                                        }};
                                                        localPath = "enim";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ullam";
                                                            uri = "https://adventurous-guest.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Lori Jerde";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Patsy Torp";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("dolores"),
                                                        add("placeat"),
                                                        add("excepturi"),
                                                        add("recusandae"),
                                                    }};
                                                    distribution = "quos";
                                                    gpgKey = "dicta";
                                                    uri = "https://dutiful-adjective.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Jimmy Walsh";
                                                    url = "magni";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "aperiam";
                                                    displayName = "dolores";
                                                    gpgKeys = new String[]{{
                                                        add("iusto"),
                                                        add("magni"),
                                                        add("beatae"),
                                                        add("aliquid"),
                                                    }};
                                                    id = "57650664-1870-4d9d-a1f9-ad030c4ecc11";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "id";
                                                    displayName = "consequatur";
                                                    gpgKeys = new String[]{{
                                                        add("ratione"),
                                                        add("iure"),
                                                        add("tempora"),
                                                    }};
                                                    id = "29068b85-02a5-45e7-b73b-c845e320a319";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "voluptatibus";
                            id = "4badf947-c9a8-467b-8424-26665816ddca";
                            mode = OSPolicyModeEnum.VALIDATION;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "nemo";
                                            osVersion = "illo";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "doloribus";
                                            osVersion = "cumque";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "expedita";
                                            osVersion = "modi";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "cumque";
                                            osVersion = "ipsam";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "occaecati";
                                        osVersion = "ipsum";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quasi"),
                                                        add("fugit"),
                                                        add("quo"),
                                                        add("temporibus"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "mollitia";
                                                            generation = "id";
                                                            object = "quibusdam";
                                                        }};
                                                        localPath = "ipsa";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "accusamus";
                                                            uri = "https://keen-pan.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "facere";
                                                    script = "nobis";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("molestias"),
                                                        add("aut"),
                                                        add("temporibus"),
                                                        add("tenetur"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "incidunt";
                                                            generation = "numquam";
                                                            object = "corrupti";
                                                        }};
                                                        localPath = "similique";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolore";
                                                            uri = "http://wide-operation.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "aut";
                                                    script = "impedit";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "minima";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "quos";
                                                        generation = "blanditiis";
                                                        object = "quas";
                                                    }};
                                                    localPath = "voluptatem";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "provident";
                                                        uri = "https://eager-surname.net";
                                                    }};
                                                }};
                                                path = "facilis";
                                                permissions = "maiores";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "ef3ffdd9-f7f0-479a-b4d3-5724cdb0f4d2";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Roger Bradtke";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "fugiat";
                                                            generation = "enim";
                                                            object = "iure";
                                                        }};
                                                        localPath = "laudantium";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "modi";
                                                            uri = "http://uncommon-student.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Ronnie Okuneva III";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("eveniet"),
                                                        add("laboriosam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ratione";
                                                            generation = "blanditiis";
                                                            object = "quidem";
                                                        }};
                                                        localPath = "illum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "reiciendis";
                                                            uri = "https://decisive-administration.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quia";
                                                            generation = "quidem";
                                                            object = "voluptas";
                                                        }};
                                                        localPath = "quo";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "laudantium";
                                                            uri = "http://overlooked-oldie.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Melody Kreiger I";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Leah Graham";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("et"),
                                                        add("eos"),
                                                        add("impedit"),
                                                        add("ex"),
                                                    }};
                                                    distribution = "praesentium";
                                                    gpgKey = "natus";
                                                    uri = "http://watery-line.com";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Mrs. Grady Carroll";
                                                    url = "inventore";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "voluptate";
                                                    displayName = "sed";
                                                    gpgKeys = new String[]{{
                                                        add("eaque"),
                                                    }};
                                                    id = "5377dcfa-89df-4975-a356-686092e9c3dd";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "minus";
                                                    displayName = "minima";
                                                    gpgKeys = new String[]{{
                                                        add("beatae"),
                                                        add("vitae"),
                                                        add("veritatis"),
                                                        add("facere"),
                                                    }};
                                                    id = "ea1026d5-41a4-4d19-8feb-21780bccc0db";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("assumenda"),
                                                        add("illum"),
                                                        add("soluta"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magnam";
                                                            generation = "laudantium";
                                                            object = "tempora";
                                                        }};
                                                        localPath = "esse";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "doloremque";
                                                            uri = "https://willing-psychologist.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "amet";
                                                    script = "natus";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("officiis"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "eum";
                                                            generation = "rerum";
                                                            object = "placeat";
                                                        }};
                                                        localPath = "ab";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ad";
                                                            uri = "https://sorrowful-drummer.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "earum";
                                                    script = "ullam";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "numquam";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "enim";
                                                        generation = "cupiditate";
                                                        object = "occaecati";
                                                    }};
                                                    localPath = "itaque";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "fuga";
                                                        uri = "http://faraway-carving.com";
                                                    }};
                                                }};
                                                path = "suscipit";
                                                permissions = "ipsa";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "9b200ce7-8a1b-4d8f-b7a0-a116ce723d40";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Cory Windler";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ipsa";
                                                            generation = "debitis";
                                                            object = "iste";
                                                        }};
                                                        localPath = "deserunt";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "hic";
                                                            uri = "http://cumbersome-fruit.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Willie Denesik I";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("fugiat"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptatum";
                                                            generation = "velit";
                                                            object = "hic";
                                                        }};
                                                        localPath = "ullam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deserunt";
                                                            uri = "https://safe-jiffy.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "provident";
                                                            generation = "occaecati";
                                                            object = "assumenda";
                                                        }};
                                                        localPath = "sunt";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "odit";
                                                            uri = "https://mindless-ruin.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Ivan Gulgowski";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Lawrence Hickle";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("magni"),
                                                        add("cumque"),
                                                    }};
                                                    distribution = "quos";
                                                    gpgKey = "in";
                                                    uri = "http://stormy-checkbook.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Marcella Windler";
                                                    url = "eligendi";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "hic";
                                                    displayName = "quo";
                                                    gpgKeys = new String[]{{
                                                        add("nobis"),
                                                    }};
                                                    id = "76230f84-1fb1-4bd2-bfdb-14db6be5a685";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "excepturi";
                                                    displayName = "natus";
                                                    gpgKeys = new String[]{{
                                                        add("necessitatibus"),
                                                        add("aspernatur"),
                                                        add("dolores"),
                                                    }};
                                                    id = "ae20da16-fc2b-4271-a289-c57e854e9043";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quibusdam"),
                                                        add("magni"),
                                                        add("consequuntur"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "consequuntur";
                                                            generation = "eius";
                                                            object = "commodi";
                                                        }};
                                                        localPath = "ipsam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vel";
                                                            uri = "https://far-goodwill.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "doloremque";
                                                    script = "odio";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("voluptatum"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "tempora";
                                                            generation = "delectus";
                                                            object = "quam";
                                                        }};
                                                        localPath = "dolorum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "libero";
                                                            uri = "http://lame-rum.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "accusantium";
                                                    script = "sed";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "eos";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "consequuntur";
                                                        generation = "quis";
                                                        object = "vitae";
                                                    }};
                                                    localPath = "occaecati";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "labore";
                                                        uri = "https://repulsive-flag.biz";
                                                    }};
                                                }};
                                                path = "modi";
                                                permissions = "quasi";
                                                state = OSPolicyResourceFileResourceStateEnum.DESIRED_STATE_UNSPECIFIED;
                                            }};
                                            id = "adc669af-90a2-46c7-8dc9-81f068981d6b";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Norman Ferry";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "similique";
                                                            generation = "fuga";
                                                            object = "consectetur";
                                                        }};
                                                        localPath = "labore";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "laudantium";
                                                            uri = "https://equal-biology.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Deborah Kunze";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("doloribus"),
                                                        add("eligendi"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sapiente";
                                                            generation = "alias";
                                                            object = "impedit";
                                                        }};
                                                        localPath = "numquam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aspernatur";
                                                            uri = "https://kindly-maid.org";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "vitae";
                                                            generation = "ullam";
                                                            object = "nisi";
                                                        }};
                                                        localPath = "consequuntur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptas";
                                                            uri = "http://nice-meander.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Mona Russel";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Rosa Considine";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("accusantium"),
                                                        add("ea"),
                                                        add("impedit"),
                                                    }};
                                                    distribution = "totam";
                                                    gpgKey = "optio";
                                                    uri = "https://boiling-clamp.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Wanda Hamill";
                                                    url = "magni";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "odio";
                                                    displayName = "alias";
                                                    gpgKeys = new String[]{{
                                                        add("deleniti"),
                                                        add("possimus"),
                                                        add("ipsam"),
                                                    }};
                                                    id = "722dd895-b8bc-4f24-9b95-9693352f7453";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "adipisci";
                                                    displayName = "cupiditate";
                                                    gpgKeys = new String[]{{
                                                        add("numquam"),
                                                        add("fugiat"),
                                                        add("molestiae"),
                                                    }};
                                                    id = "8de3b6e9-389f-45ab-b7f6-62550a28382a";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("incidunt"),
                                                        add("deleniti"),
                                                        add("dolor"),
                                                        add("est"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "reiciendis";
                                                            generation = "possimus";
                                                            object = "odit";
                                                        }};
                                                        localPath = "consectetur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "inventore";
                                                            uri = "http://rotating-pupa.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "ipsam";
                                                    script = "voluptatem";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("iure"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "incidunt";
                                                            generation = "eveniet";
                                                            object = "quae";
                                                        }};
                                                        localPath = "ea";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "asperiores";
                                                            uri = "http://repulsive-workforce.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "repudiandae";
                                                    script = "nemo";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "molestias";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "architecto";
                                                        generation = "expedita";
                                                        object = "quisquam";
                                                    }};
                                                    localPath = "praesentium";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "facilis";
                                                        uri = "https://valid-will.biz";
                                                    }};
                                                }};
                                                path = "commodi";
                                                permissions = "vitae";
                                                state = OSPolicyResourceFileResourceStateEnum.DESIRED_STATE_UNSPECIFIED;
                                            }};
                                            id = "b63c205f-da84-4077-8a68-a9a35d086b6f";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Jessie Wintheiser";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "consequatur";
                                                            generation = "sed";
                                                            object = "accusantium";
                                                        }};
                                                        localPath = "voluptates";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "provident";
                                                            uri = "https://frightening-device.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Bonnie Hamill";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("excepturi"),
                                                        add("eos"),
                                                        add("quisquam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "corrupti";
                                                            generation = "repellendus";
                                                            object = "cum";
                                                        }};
                                                        localPath = "quibusdam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "est";
                                                            uri = "http://pleasing-heartwood.com";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "recusandae";
                                                            generation = "sapiente";
                                                            object = "id";
                                                        }};
                                                        localPath = "odit";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "inventore";
                                                            uri = "https://moist-captor.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Miss Santos Stroman";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Archie Okuneva";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("nulla"),
                                                        add("dolorem"),
                                                    }};
                                                    distribution = "voluptates";
                                                    gpgKey = "a";
                                                    uri = "http://frightened-mob.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Helen Stanton";
                                                    url = "dicta";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "atque";
                                                    displayName = "ratione";
                                                    gpgKeys = new String[]{{
                                                        add("quisquam"),
                                                    }};
                                                    id = "87adf596-fdf1-4ad8-b7ae-80c1c19c95ba";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "iste";
                                                    displayName = "unde";
                                                    gpgKeys = new String[]{{
                                                        add("laboriosam"),
                                                        add("ducimus"),
                                                        add("voluptatum"),
                                                    }};
                                                    id = "fa3f6969-91af-4388-8e03-614448c7977a";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "voluptates";
                                            osVersion = "delectus";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "qui";
                                        osVersion = "delectus";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("laboriosam"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "doloremque";
                                                            generation = "sed";
                                                            object = "voluptatum";
                                                        }};
                                                        localPath = "debitis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "a";
                                                            uri = "https://unwitting-zone.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "aliquam";
                                                    script = "illo";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("sed"),
                                                        add("necessitatibus"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "possimus";
                                                            generation = "dignissimos";
                                                            object = "itaque";
                                                        }};
                                                        localPath = "explicabo";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ullam";
                                                            uri = "http://which-domain.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "ullam";
                                                    script = "quam";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "illum";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "voluptates";
                                                        generation = "officia";
                                                        object = "est";
                                                    }};
                                                    localPath = "in";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "illo";
                                                        uri = "http://acclaimed-voice.biz";
                                                    }};
                                                }};
                                                path = "dolore";
                                                permissions = "nemo";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "ccf667aa-f9bb-4ad1-85fe-431d6bf5c838";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Kelvin Prosacco";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aspernatur";
                                                            generation = "eaque";
                                                            object = "impedit";
                                                        }};
                                                        localPath = "nam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ex";
                                                            uri = "http://whimsical-sheath.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Julia Hartmann";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("debitis"),
                                                        add("laboriosam"),
                                                        add("eos"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "amet";
                                                            generation = "incidunt";
                                                            object = "porro";
                                                        }};
                                                        localPath = "occaecati";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "reiciendis";
                                                            uri = "http://serious-icy.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "possimus";
                                                            generation = "tenetur";
                                                            object = "recusandae";
                                                        }};
                                                        localPath = "expedita";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "iusto";
                                                            uri = "http://regal-exception.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Christy Swift";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Dr. Emilio McDermott";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("eveniet"),
                                                        add("delectus"),
                                                    }};
                                                    distribution = "deleniti";
                                                    gpgKey = "provident";
                                                    uri = "http://raw-filing.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Jesus Kuhn";
                                                    url = "veritatis";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "autem";
                                                    displayName = "earum";
                                                    gpgKeys = new String[]{{
                                                        add("ex"),
                                                        add("possimus"),
                                                    }};
                                                    id = "385a3c4a-c631-4b99-a26c-ed8f9fdb9410";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "maiores";
                                                    displayName = "nisi";
                                                    gpgKeys = new String[]{{
                                                        add("tempore"),
                                                    }};
                                                    id = "bf817837-b01a-4fdd-b886-24189eb44873";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quis"),
                                                        add("accusantium"),
                                                        add("ratione"),
                                                        add("consectetur"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "asperiores";
                                                            generation = "architecto";
                                                            object = "sint";
                                                        }};
                                                        localPath = "possimus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "tempore";
                                                            uri = "https://buoyant-chromolithograph.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "debitis";
                                                    script = "labore";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("minima"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magni";
                                                            generation = "itaque";
                                                            object = "error";
                                                        }};
                                                        localPath = "expedita";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "error";
                                                            uri = "https://tattered-incentive.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "odit";
                                                    script = "odit";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "eius";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "error";
                                                        generation = "vel";
                                                        object = "dolorum";
                                                    }};
                                                    localPath = "alias";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "itaque";
                                                        uri = "http://clumsy-crowd.net";
                                                    }};
                                                }};
                                                path = "iusto";
                                                permissions = "corrupti";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "7ec59e1f-67f3-4c4c-8e4b-6d7696ff3c57";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Mr. Courtney Hessel";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "corporis";
                                                            generation = "nihil";
                                                            object = "officiis";
                                                        }};
                                                        localPath = "dolore";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "magnam";
                                                            uri = "https://harmless-bureau.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "William Larson";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("sunt"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "omnis";
                                                            generation = "quam";
                                                            object = "officiis";
                                                        }};
                                                        localPath = "dicta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "excepturi";
                                                            uri = "http://practical-cement.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "corporis";
                                                            generation = "quaerat";
                                                            object = "suscipit";
                                                        }};
                                                        localPath = "ducimus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "tenetur";
                                                            uri = "https://false-mastoid.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Rachael Corkery";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Sherman Green";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("consectetur"),
                                                    }};
                                                    distribution = "ratione";
                                                    gpgKey = "saepe";
                                                    uri = "http://humming-repeat.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Jan Torphy";
                                                    url = "aut";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "voluptatem";
                                                    displayName = "libero";
                                                    gpgKeys = new String[]{{
                                                        add("odio"),
                                                        add("omnis"),
                                                        add("officiis"),
                                                    }};
                                                    id = "f2038732-0590-4ccc-9096-400313b3e504";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "ut";
                                                    displayName = "delectus";
                                                    gpgKeys = new String[]{{
                                                        add("ullam"),
                                                        add("maiores"),
                                                    }};
                                                    id = "e72dc407-7d0c-4c3f-808e-fc15ceb4d6e1";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "animi";
                                            osVersion = "necessitatibus";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "voluptatem";
                                            osVersion = "maiores";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "odio";
                                            osVersion = "veniam";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "fuga";
                                            osVersion = "itaque";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "possimus";
                                        osVersion = "tenetur";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("eligendi"),
                                                        add("id"),
                                                        add("distinctio"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "corporis";
                                                            generation = "quas";
                                                            object = "soluta";
                                                        }};
                                                        localPath = "cupiditate";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "unde";
                                                            uri = "http://spectacular-novel.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "facere";
                                                    script = "pariatur";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quaerat"),
                                                        add("corrupti"),
                                                        add("sint"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "eius";
                                                            generation = "vel";
                                                            object = "quasi";
                                                        }};
                                                        localPath = "vero";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "odio";
                                                            uri = "http://coordinated-belly.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "recusandae";
                                                    script = "commodi";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "possimus";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "provident";
                                                        generation = "veniam";
                                                        object = "sit";
                                                    }};
                                                    localPath = "fugit";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "a";
                                                        uri = "http://twin-pipe.name";
                                                    }};
                                                }};
                                                path = "ratione";
                                                permissions = "perferendis";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "69f7ac2f-72f8-4850-8904-911608207888";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Kim Johnston V";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "consectetur";
                                                            generation = "soluta";
                                                            object = "tenetur";
                                                        }};
                                                        localPath = "necessitatibus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "perspiciatis";
                                                            uri = "http://gross-numismatist.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Laura Thompson III";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("est"),
                                                        add("earum"),
                                                        add("nihil"),
                                                        add("nostrum"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "rerum";
                                                            generation = "perferendis";
                                                            object = "nam";
                                                        }};
                                                        localPath = "ullam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ratione";
                                                            uri = "http://purple-disarmament.org";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "error";
                                                            generation = "consectetur";
                                                            object = "reprehenderit";
                                                        }};
                                                        localPath = "eligendi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "cum";
                                                            uri = "https://poised-veterinarian.biz";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Lauren Cremin";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Jesus Champlin";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("est"),
                                                    }};
                                                    distribution = "at";
                                                    gpgKey = "ipsum";
                                                    uri = "http://tired-playground.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Bob Boyle";
                                                    url = "blanditiis";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "sapiente";
                                                    displayName = "ut";
                                                    gpgKeys = new String[]{{
                                                        add("labore"),
                                                        add("ut"),
                                                    }};
                                                    id = "573fecd4-7353-4f63-8820-9379aa69cd5f";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "nam";
                                                    displayName = "cumque";
                                                    gpgKeys = new String[]{{
                                                        add("quam"),
                                                        add("occaecati"),
                                                        add("repellendus"),
                                                        add("culpa"),
                                                    }};
                                                    id = "18a7822b-f958-494e-a861-adb55f9e5d75";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "eligendi";
                                            osVersion = "occaecati";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "doloribus";
                                        osVersion = "necessitatibus";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("nihil"),
                                                        add("veniam"),
                                                        add("aut"),
                                                        add("magni"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "rerum";
                                                            generation = "voluptatibus";
                                                            object = "nulla";
                                                        }};
                                                        localPath = "quod";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "non";
                                                            uri = "http://frivolous-accordance.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "illo";
                                                    script = "a";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("molestiae"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "autem";
                                                            generation = "dolore";
                                                            object = "eius";
                                                        }};
                                                        localPath = "nostrum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ex";
                                                            uri = "http://jittery-minnow.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "hic";
                                                    script = "quidem";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "odit";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "molestiae";
                                                        generation = "accusamus";
                                                        object = "quia";
                                                    }};
                                                    localPath = "inventore";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "doloribus";
                                                        uri = "https://hungry-citrus.info";
                                                    }};
                                                }};
                                                path = "nemo";
                                                permissions = "reprehenderit";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "36fc6b9f-587c-4e52-9c67-641a8312e504";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Kelli Graham";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "beatae";
                                                            generation = "porro";
                                                            object = "cumque";
                                                        }};
                                                        localPath = "distinctio";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "numquam";
                                                            uri = "http://elderly-parchment.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Dr. Edmund Mohr";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("distinctio"),
                                                        add("fugiat"),
                                                        add("nulla"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "totam";
                                                            generation = "praesentium";
                                                            object = "officiis";
                                                        }};
                                                        localPath = "esse";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vitae";
                                                            uri = "https://hoarse-shin.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quas";
                                                            generation = "sed";
                                                            object = "veniam";
                                                        }};
                                                        localPath = "sed";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quibusdam";
                                                            uri = "http://joint-hurricane.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Karl Weissnat III";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Susan Adams";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("facere"),
                                                        add("consequuntur"),
                                                        add("natus"),
                                                    }};
                                                    distribution = "repellendus";
                                                    gpgKey = "voluptates";
                                                    uri = "http://stupendous-stiletto.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Ramona Klocko";
                                                    url = "illum";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "mollitia";
                                                    displayName = "ipsa";
                                                    gpgKeys = new String[]{{
                                                        add("quo"),
                                                        add("ullam"),
                                                        add("in"),
                                                    }};
                                                    id = "fa6c78a2-16e1-49ba-beca-6191498140b6";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "eius";
                                                    displayName = "maiores";
                                                    gpgKeys = new String[]{{
                                                        add("quos"),
                                                        add("id"),
                                                        add("officiis"),
                                                        add("ab"),
                                                    }};
                                                    id = "70ef03b5-f37e-44aa-8685-55966732aa5d";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("tempore"),
                                                        add("commodi"),
                                                        add("autem"),
                                                        add("praesentium"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magni";
                                                            generation = "quisquam";
                                                            object = "expedita";
                                                        }};
                                                        localPath = "in";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "eaque";
                                                            uri = "https://loud-shallot.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "exercitationem";
                                                    script = "a";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("laboriosam"),
                                                        add("earum"),
                                                        add("occaecati"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dicta";
                                                            generation = "quidem";
                                                            object = "omnis";
                                                        }};
                                                        localPath = "laborum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "molestias";
                                                            uri = "https://little-dumbwaiter.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "aliquid";
                                                    script = "repudiandae";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "aspernatur";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "quod";
                                                        generation = "dolorem";
                                                        object = "neque";
                                                    }};
                                                    localPath = "ipsa";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "excepturi";
                                                        uri = "https://shocking-aggradation.info";
                                                    }};
                                                }};
                                                path = "amet";
                                                permissions = "iure";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "9e75ca00-6f53-492c-91a2-5a8bf92f9742";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Horace Strosin";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "provident";
                                                            generation = "hic";
                                                            object = "corrupti";
                                                        }};
                                                        localPath = "soluta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "earum";
                                                            uri = "https://colorless-caterpillar.com";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Erin Frami";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("iste"),
                                                        add("blanditiis"),
                                                        add("consectetur"),
                                                        add("totam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dignissimos";
                                                            generation = "repellat";
                                                            object = "iusto";
                                                        }};
                                                        localPath = "culpa";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptate";
                                                            uri = "https://stiff-sound.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sed";
                                                            generation = "optio";
                                                            object = "nulla";
                                                        }};
                                                        localPath = "magni";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "modi";
                                                            uri = "https://flickering-solidity.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Katherine Kohler";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Clarence Murazik";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("tenetur"),
                                                        add("exercitationem"),
                                                        add("nihil"),
                                                        add("quia"),
                                                    }};
                                                    distribution = "quis";
                                                    gpgKey = "maiores";
                                                    uri = "http://chilly-homosexuality.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Loren Botsford";
                                                    url = "vitae";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "temporibus";
                                                    displayName = "voluptatum";
                                                    gpgKeys = new String[]{{
                                                        add("aspernatur"),
                                                        add("neque"),
                                                        add("impedit"),
                                                    }};
                                                    id = "23e34f2d-fa4a-4197-b6de-922151fe1712";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "voluptatem";
                                                    displayName = "perspiciatis";
                                                    gpgKeys = new String[]{{
                                                        add("deleniti"),
                                                        add("enim"),
                                                        add("nesciunt"),
                                                    }};
                                                    id = "e9f543d8-5443-49ee-a244-60443bc15418";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quisquam"),
                                                        add("sunt"),
                                                        add("asperiores"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "corporis";
                                                            generation = "vel";
                                                            object = "accusamus";
                                                        }};
                                                        localPath = "totam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ipsam";
                                                            uri = "https://plush-intent.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "odit";
                                                    script = "officiis";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("libero"),
                                                        add("fugiat"),
                                                        add("voluptas"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "et";
                                                            generation = "odio";
                                                            object = "eligendi";
                                                        }};
                                                        localPath = "nesciunt";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "harum";
                                                            uri = "http://tragic-exhaust.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "aliquam";
                                                    script = "ut";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "quidem";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "doloribus";
                                                        generation = "sit";
                                                        object = "architecto";
                                                    }};
                                                    localPath = "tempore";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "deserunt";
                                                        uri = "https://motherly-impudence.com";
                                                    }};
                                                }};
                                                path = "iure";
                                                permissions = "temporibus";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "6082bfbd-c41f-4f5d-8e2a-e4fb5cb35d17";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Edith Lubowitz DVM";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "facere";
                                                            generation = "distinctio";
                                                            object = "ducimus";
                                                        }};
                                                        localPath = "atque";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "consectetur";
                                                            uri = "http://opulent-tabby.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Blanca Prohaska";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("delectus"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quas";
                                                            generation = "impedit";
                                                            object = "illum";
                                                        }};
                                                        localPath = "ullam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "praesentium";
                                                            uri = "http://shameless-picket.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nesciunt";
                                                            generation = "quas";
                                                            object = "sunt";
                                                        }};
                                                        localPath = "aperiam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "itaque";
                                                            uri = "http://zigzag-terrorist.biz";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Megan Kling";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Erma Streich";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("nulla"),
                                                        add("amet"),
                                                        add("expedita"),
                                                        add("libero"),
                                                    }};
                                                    distribution = "impedit";
                                                    gpgKey = "repudiandae";
                                                    uri = "http://filthy-invention.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Vicki Labadie";
                                                    url = "reiciendis";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "asperiores";
                                                    displayName = "exercitationem";
                                                    gpgKeys = new String[]{{
                                                        add("beatae"),
                                                    }};
                                                    id = "26d71cff-bd0e-4b74-b842-1953b44bd3c4";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "sequi";
                                                    displayName = "veritatis";
                                                    gpgKeys = new String[]{{
                                                        add("unde"),
                                                        add("assumenda"),
                                                    }};
                                                    id = "33e5953c-0011-4398-a3aa-41e6c31cc2f1";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "hic";
                            id = "cb51c9a4-1ffb-4e9c-bd79-5ee65e076cc7";
                            mode = OSPolicyModeEnum.VALIDATION;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "eum";
                                            osVersion = "beatae";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "suscipit";
                                            osVersion = "eveniet";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "mollitia";
                                            osVersion = "ipsam";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "porro";
                                            osVersion = "molestiae";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "inventore";
                                        osVersion = "vel";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("provident"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "non";
                                                            generation = "dolore";
                                                            object = "soluta";
                                                        }};
                                                        localPath = "occaecati";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sit";
                                                            uri = "https://complex-talent.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "nulla";
                                                    script = "ab";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("possimus"),
                                                        add("magni"),
                                                        add("a"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "cumque";
                                                            generation = "explicabo";
                                                            object = "delectus";
                                                        }};
                                                        localPath = "natus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "earum";
                                                            uri = "http://vain-buck.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "provident";
                                                    script = "numquam";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "numquam";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "tempore";
                                                        generation = "molestias";
                                                        object = "amet";
                                                    }};
                                                    localPath = "enim";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "illum";
                                                        uri = "http://equatorial-hydrogen.name";
                                                    }};
                                                }};
                                                path = "ducimus";
                                                permissions = "dolores";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "90849d6a-ed4a-4ecb-b537-cd9222c9ff57";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Cora Bode";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "harum";
                                                            generation = "sapiente";
                                                            object = "laborum";
                                                        }};
                                                        localPath = "aspernatur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vero";
                                                            uri = "http://infamous-bottom.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Rex Goodwin";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("aliquid"),
                                                        add("vero"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "reiciendis";
                                                            generation = "dicta";
                                                            object = "sit";
                                                        }};
                                                        localPath = "adipisci";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "inventore";
                                                            uri = "https://inferior-lentil.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "omnis";
                                                            generation = "hic";
                                                            object = "accusantium";
                                                        }};
                                                        localPath = "minus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "explicabo";
                                                            uri = "http://aware-borrowing.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Nicole Schinner";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Mrs. Bernadette Schmidt";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("quasi"),
                                                        add("laudantium"),
                                                        add("ut"),
                                                    }};
                                                    distribution = "possimus";
                                                    gpgKey = "nihil";
                                                    uri = "http://submissive-oeuvre.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Johanna Runolfsson Jr.";
                                                    url = "eligendi";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "commodi";
                                                    displayName = "enim";
                                                    gpgKeys = new String[]{{
                                                        add("aut"),
                                                        add("consectetur"),
                                                        add("in"),
                                                    }};
                                                    id = "bb8e0cc8-8518-47e4-9e04-af28c5dddb46";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "mollitia";
                                                    displayName = "similique";
                                                    gpgKeys = new String[]{{
                                                        add("quo"),
                                                    }};
                                                    id = "fd6d828d-a013-4191-9296-46645c1d81f2";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("perferendis"),
                                                        add("magnam"),
                                                        add("aspernatur"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sapiente";
                                                            generation = "nemo";
                                                            object = "laboriosam";
                                                        }};
                                                        localPath = "iste";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quidem";
                                                            uri = "http://political-waterfront.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "voluptates";
                                                    script = "dolorum";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("eos"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "veritatis";
                                                            generation = "vel";
                                                            object = "placeat";
                                                        }};
                                                        localPath = "libero";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "saepe";
                                                            uri = "http://little-billboard.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "ab";
                                                    script = "ex";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "dolor";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "officiis";
                                                        generation = "sed";
                                                        object = "quam";
                                                    }};
                                                    localPath = "unde";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "harum";
                                                        uri = "http://self-assured-baggie.name";
                                                    }};
                                                }};
                                                path = "aliquam";
                                                permissions = "vero";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "99257d04-f408-447a-b42d-84496cbdeecf";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Bridget Medhurst";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "maxime";
                                                            generation = "commodi";
                                                            object = "consectetur";
                                                        }};
                                                        localPath = "corporis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nisi";
                                                            uri = "http://unwitting-religion.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Bill Hills";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("labore"),
                                                        add("porro"),
                                                        add("eaque"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ea";
                                                            generation = "consequatur";
                                                            object = "nobis";
                                                        }};
                                                        localPath = "accusantium";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ea";
                                                            uri = "https://brave-chain.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "molestiae";
                                                            generation = "voluptate";
                                                            object = "autem";
                                                        }};
                                                        localPath = "numquam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptates";
                                                            uri = "https://vivacious-geometry.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Johnnie Homenick";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Drew Mann";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("temporibus"),
                                                        add("eum"),
                                                        add("non"),
                                                        add("ut"),
                                                    }};
                                                    distribution = "nostrum";
                                                    gpgKey = "dignissimos";
                                                    uri = "http://gruesome-avenue.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Nelson Walker";
                                                    url = "doloremque";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "quibusdam";
                                                    displayName = "adipisci";
                                                    gpgKeys = new String[]{{
                                                        add("veniam"),
                                                        add("id"),
                                                        add("architecto"),
                                                        add("maiores"),
                                                    }};
                                                    id = "9c242c7b-66a1-4f30-873d-f5b6719890f4";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "consequuntur";
                                                    displayName = "est";
                                                    gpgKeys = new String[]{{
                                                        add("nobis"),
                                                        add("expedita"),
                                                    }};
                                                    id = "438d85b2-6059-41d7-85e3-c2059c9c3f56";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "officiis";
                                            osVersion = "aperiam";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "itaque";
                                            osVersion = "sed";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "corporis";
                                        osVersion = "consequuntur";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quis"),
                                                        add("nobis"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "beatae";
                                                            generation = "repellendus";
                                                            object = "ex";
                                                        }};
                                                        localPath = "consequuntur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "delectus";
                                                            uri = "https://super-pliers.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "architecto";
                                                    script = "reiciendis";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("sunt"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "odit";
                                                            generation = "inventore";
                                                            object = "laboriosam";
                                                        }};
                                                        localPath = "quod";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "repudiandae";
                                                            uri = "http://complete-confidence.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "deleniti";
                                                    script = "earum";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "consequuntur";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "enim";
                                                        generation = "minus";
                                                        object = "quibusdam";
                                                    }};
                                                    localPath = "accusantium";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "nulla";
                                                        uri = "http://overdue-stamp.name";
                                                    }};
                                                }};
                                                path = "nostrum";
                                                permissions = "sint";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "439e3926-6cbd-495f-baa2-b24113695d1e";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Vicki Marquardt";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "placeat";
                                                            generation = "eligendi";
                                                            object = "quaerat";
                                                        }};
                                                        localPath = "veniam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "perspiciatis";
                                                            uri = "http://decimal-butcher.info";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Felicia Koepp";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("eum"),
                                                        add("consectetur"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "velit";
                                                            generation = "tempora";
                                                            object = "aspernatur";
                                                        }};
                                                        localPath = "ad";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "incidunt";
                                                            uri = "http://envious-marble.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "asperiores";
                                                            generation = "distinctio";
                                                            object = "minima";
                                                        }};
                                                        localPath = "cupiditate";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "molestiae";
                                                            uri = "http://unacceptable-mirror.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Erika Auer";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Josephine Leannon";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("nam"),
                                                        add("id"),
                                                        add("cumque"),
                                                        add("in"),
                                                    }};
                                                    distribution = "a";
                                                    gpgKey = "quibusdam";
                                                    uri = "https://edible-mortise.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Francisco Streich";
                                                    url = "soluta";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "minus";
                                                    displayName = "magni";
                                                    gpgKeys = new String[]{{
                                                        add("officiis"),
                                                        add("aliquam"),
                                                        add("quas"),
                                                    }};
                                                    id = "0632b995-4b6f-4a22-8636-9828553cb100";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "doloremque";
                                                    displayName = "autem";
                                                    gpgKeys = new String[]{{
                                                        add("necessitatibus"),
                                                        add("reiciendis"),
                                                        add("incidunt"),
                                                    }};
                                                    id = "921ec205-3b74-4936-aac8-ee0f2bf19588";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("eius"),
                                                        add("doloremque"),
                                                        add("vero"),
                                                        add("aut"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sequi";
                                                            generation = "reiciendis";
                                                            object = "neque";
                                                        }};
                                                        localPath = "assumenda";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "saepe";
                                                            uri = "https://querulous-chill.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "facilis";
                                                    script = "earum";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("itaque"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "cupiditate";
                                                            generation = "consequatur";
                                                            object = "harum";
                                                        }};
                                                        localPath = "nobis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "numquam";
                                                            uri = "http://teeming-wingman.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "blanditiis";
                                                    script = "voluptatibus";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "nulla";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "nemo";
                                                        generation = "ratione";
                                                        object = "dolore";
                                                    }};
                                                    localPath = "perferendis";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "enim";
                                                        uri = "https://self-assured-credit.biz";
                                                    }};
                                                }};
                                                path = "vitae";
                                                permissions = "pariatur";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "92f4f127-fb0e-40bf-9f82-17978d0acca7";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Iris VonRueden";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "cum";
                                                            generation = "esse";
                                                            object = "alias";
                                                        }};
                                                        localPath = "consequuntur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "architecto";
                                                            uri = "https://gullible-cleft.com";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Luz Hudson";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("excepturi"),
                                                        add("voluptatibus"),
                                                        add("facilis"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "doloremque";
                                                            generation = "officiis";
                                                            object = "nisi";
                                                        }};
                                                        localPath = "reprehenderit";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "necessitatibus";
                                                            uri = "http://only-driving.org";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "facere";
                                                            generation = "tenetur";
                                                            object = "saepe";
                                                        }};
                                                        localPath = "assumenda";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "exercitationem";
                                                            uri = "http://flowery-analog.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Dustin Doyle";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Genevieve Boyle";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("perspiciatis"),
                                                        add("natus"),
                                                        add("reprehenderit"),
                                                        add("dolorem"),
                                                    }};
                                                    distribution = "sunt";
                                                    gpgKey = "fuga";
                                                    uri = "https://smooth-article.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Willard Hauck";
                                                    url = "consequuntur";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "illum";
                                                    displayName = "delectus";
                                                    gpgKeys = new String[]{{
                                                        add("voluptate"),
                                                        add("perferendis"),
                                                        add("maiores"),
                                                    }};
                                                    id = "b3874290-d336-4561-aca1-6ef89451bd76";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "accusamus";
                                                    displayName = "officiis";
                                                    gpgKeys = new String[]{{
                                                        add("nam"),
                                                        add("nemo"),
                                                        add("veritatis"),
                                                        add("molestias"),
                                                    }};
                                                    id = "c4da1fad-3551-42f0-ad4e-5b72f0f54856";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "est";
                                            osVersion = "consequatur";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "incidunt";
                                            osVersion = "dolores";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "labore";
                                            osVersion = "earum";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "consequatur";
                                        osVersion = "voluptatem";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quibusdam"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "autem";
                                                            generation = "voluptates";
                                                            object = "tempore";
                                                        }};
                                                        localPath = "cupiditate";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "modi";
                                                            uri = "http://frank-hammock.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "at";
                                                    script = "ipsa";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("aut"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "molestias";
                                                            generation = "quaerat";
                                                            object = "repellat";
                                                        }};
                                                        localPath = "expedita";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "libero";
                                                            uri = "https://glittering-saint.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "a";
                                                    script = "tenetur";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "ipsam";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "quod";
                                                        generation = "facilis";
                                                        object = "doloremque";
                                                    }};
                                                    localPath = "illo";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "reiciendis";
                                                        uri = "https://frivolous-bootee.org";
                                                    }};
                                                }};
                                                path = "ipsam";
                                                permissions = "aspernatur";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "a45ac82b-85f8-4bc2-8aba-8da4127dd597";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Darrin Gislason Jr.";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "similique";
                                                            generation = "id";
                                                            object = "et";
                                                        }};
                                                        localPath = "distinctio";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "porro";
                                                            uri = "http://extraneous-province.name";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Alonzo Schaefer";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("voluptatibus"),
                                                        add("nihil"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ducimus";
                                                            generation = "nam";
                                                            object = "incidunt";
                                                        }};
                                                        localPath = "deleniti";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aliquam";
                                                            uri = "https://shimmering-squash.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "mollitia";
                                                            generation = "autem";
                                                            object = "hic";
                                                        }};
                                                        localPath = "perferendis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "tempora";
                                                            uri = "http://burly-strip.biz";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Philip Rogahn IV";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Erika Hahn";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("ipsa"),
                                                        add("laboriosam"),
                                                        add("sit"),
                                                        add("labore"),
                                                    }};
                                                    distribution = "ullam";
                                                    gpgKey = "excepturi";
                                                    uri = "https://urban-prophet.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Ismael Bahringer";
                                                    url = "sunt";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "quis";
                                                    displayName = "corrupti";
                                                    gpgKeys = new String[]{{
                                                        add("quidem"),
                                                        add("quod"),
                                                    }};
                                                    id = "f152558d-aa95-4be6-8d02-756c354aa432";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "cum";
                                                    displayName = "magnam";
                                                    gpgKeys = new String[]{{
                                                        add("officiis"),
                                                        add("inventore"),
                                                    }};
                                                    id = "763c5208-c23e-4980-ad82-f0d45eb4a8b6";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("dolore"),
                                                        add("repudiandae"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "recusandae";
                                                            generation = "ipsam";
                                                            object = "quisquam";
                                                        }};
                                                        localPath = "delectus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "optio";
                                                            uri = "http://meek-tub.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "esse";
                                                    script = "a";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quos"),
                                                        add("dignissimos"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "earum";
                                                            generation = "adipisci";
                                                            object = "magni";
                                                        }};
                                                        localPath = "recusandae";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptatem";
                                                            uri = "http://ripe-consignment.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "necessitatibus";
                                                    script = "facere";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "quae";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "cumque";
                                                        generation = "ullam";
                                                        object = "vel";
                                                    }};
                                                    localPath = "reprehenderit";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "aut";
                                                        uri = "https://wise-earrings.com";
                                                    }};
                                                }};
                                                path = "harum";
                                                permissions = "illum";
                                                state = OSPolicyResourceFileResourceStateEnum.DESIRED_STATE_UNSPECIFIED;
                                            }};
                                            id = "c9f1cc50-3f6c-439b-8d0a-6290f957f385";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Penny Morissette";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "molestiae";
                                                            generation = "officiis";
                                                            object = "reiciendis";
                                                        }};
                                                        localPath = "voluptatum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aperiam";
                                                            uri = "http://prudent-pastor.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Darla Emard";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("odio"),
                                                        add("unde"),
                                                        add("asperiores"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nam";
                                                            generation = "provident";
                                                            object = "fugiat";
                                                        }};
                                                        localPath = "recusandae";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "non";
                                                            uri = "http://distinct-chicken.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "fuga";
                                                            generation = "qui";
                                                            object = "commodi";
                                                        }};
                                                        localPath = "a";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "temporibus";
                                                            uri = "http://inconsequential-luck.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Mrs. Andy Dach";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Mrs. Johnathan Gusikowski";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("optio"),
                                                        add("esse"),
                                                    }};
                                                    distribution = "adipisci";
                                                    gpgKey = "autem";
                                                    uri = "http://candid-kiss.com";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Marie Fay";
                                                    url = "fugiat";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "quod";
                                                    displayName = "sit";
                                                    gpgKeys = new String[]{{
                                                        add("eum"),
                                                        add("rerum"),
                                                    }};
                                                    id = "c5163bbc-a492-427c-82c2-2c55350495c5";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "facere";
                                                    displayName = "quidem";
                                                    gpgKeys = new String[]{{
                                                        add("adipisci"),
                                                        add("optio"),
                                                        add("minima"),
                                                    }};
                                                    id = "7c1e4981-e8aa-4257-9dc1-912ebde64bfc";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("veniam"),
                                                        add("magnam"),
                                                        add("iure"),
                                                        add("natus"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nulla";
                                                            generation = "quaerat";
                                                            object = "aut";
                                                        }};
                                                        localPath = "architecto";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quis";
                                                            uri = "https://wild-placebo.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "ex";
                                                    script = "odit";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("voluptas"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "libero";
                                                            generation = "vero";
                                                            object = "hic";
                                                        }};
                                                        localPath = "consequuntur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quidem";
                                                            uri = "http://proud-compromise.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "quia";
                                                    script = "porro";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "architecto";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "deserunt";
                                                        generation = "fuga";
                                                        object = "perferendis";
                                                    }};
                                                    localPath = "illo";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "perferendis";
                                                        uri = "https://next-praise.name";
                                                    }};
                                                }};
                                                path = "quo";
                                                permissions = "sunt";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "9135586d-18f9-4f97-a4bf-ad2bf7d67ca8";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Amelia Simonis";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "expedita";
                                                            generation = "eius";
                                                            object = "quasi";
                                                        }};
                                                        localPath = "quibusdam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptas";
                                                            uri = "http://daring-detention.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Ashley Labadie DDS";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("ea"),
                                                        add("totam"),
                                                        add("quidem"),
                                                        add("eaque"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sequi";
                                                            generation = "fuga";
                                                            object = "assumenda";
                                                        }};
                                                        localPath = "modi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolores";
                                                            uri = "http://ripe-spacing.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nesciunt";
                                                            generation = "facere";
                                                            object = "beatae";
                                                        }};
                                                        localPath = "delectus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ipsa";
                                                            uri = "https://secondary-authorisation.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Elizabeth Aufderhar";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Craig Corwin";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("dolorum"),
                                                    }};
                                                    distribution = "in";
                                                    gpgKey = "aperiam";
                                                    uri = "https://nippy-elongation.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Kenny Kessler DDS";
                                                    url = "corporis";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "odio";
                                                    displayName = "quibusdam";
                                                    gpgKeys = new String[]{{
                                                        add("voluptatibus"),
                                                    }};
                                                    id = "edc2050d-38dc-43ce-9854-72f9ee69166a";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "deleniti";
                                                    displayName = "tempore";
                                                    gpgKeys = new String[]{{
                                                        add("adipisci"),
                                                        add("dolore"),
                                                        add("tempora"),
                                                        add("quaerat"),
                                                    }};
                                                    id = "eac8b3a2-875c-46c1-be60-6d07d2a9c87a";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    rollout = new OSPolicyAssignmentRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 920194;
                            percent = 365771;
                        }};;
                        minWaitDuration = "voluptatem";
                    }};;
                }};;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "voluptas";
                key = "laboriosam";
                oauthToken = "veritatis";
                osPolicyAssignmentId = "similique";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "temporibus";
                uploadProtocol = "excepturi";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsCreate(req, new OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity("veritatis", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsDelete

Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "possimus";
                key = "minima";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "et";
                uploadProtocol = "amet";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsDelete(req, new OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity("tenetur", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsList

List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsOsPolicyAssignmentsListRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "veniam";
                key = "fugit";
                oauthToken = "assumenda";
                pageSize = 710181L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "aliquam";
                uploadProtocol = "maxime";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsListResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsList(req, new OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity("nostrum", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOSPolicyAssignmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsListRevisions

List the OS policy assignment revisions for a given OS policy assignment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "placeat";
                key = "necessitatibus";
                oauthToken = "harum";
                pageSize = 764612L;
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "laborum";
                uploadProtocol = "consequuntur";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsListRevisions(req, new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity("omnis", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOSPolicyAssignmentRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ab", "deleniti");
                    put("et", "eligendi");
                    put("sint", "ipsam");
                }};
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "ex";
                key = "iure";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "ad";
                uploadProtocol = "ipsum";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel(req, new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity("ipsa", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "autem";
                key = "dolor";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "suscipit";
                uploadProtocol = "amet";
                view = OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetViewEnum.BASIC;
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet(req, new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetSecurity("exercitationem", "illo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsPatch

Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.OSPolicy;
import org.openapis.openapi.models.shared.OSPolicyAssignmentInput;
import org.openapis.openapi.models.shared.OSPolicyAssignmentInstanceFilter;
import org.openapis.openapi.models.shared.OSPolicyAssignmentInstanceFilterInventory;
import org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet;
import org.openapis.openapi.models.shared.OSPolicyAssignmentRollout;
import org.openapis.openapi.models.shared.OSPolicyInventoryFilter;
import org.openapis.openapi.models.shared.OSPolicyModeEnum;
import org.openapis.openapi.models.shared.OSPolicyOSFilter;
import org.openapis.openapi.models.shared.OSPolicyResource;
import org.openapis.openapi.models.shared.OSPolicyResourceExecResource;
import org.openapis.openapi.models.shared.OSPolicyResourceExecResourceExec;
import org.openapis.openapi.models.shared.OSPolicyResourceExecResourceExecInterpreterEnum;
import org.openapis.openapi.models.shared.OSPolicyResourceFile;
import org.openapis.openapi.models.shared.OSPolicyResourceFileGcs;
import org.openapis.openapi.models.shared.OSPolicyResourceFileRemote;
import org.openapis.openapi.models.shared.OSPolicyResourceFileResource;
import org.openapis.openapi.models.shared.OSPolicyResourceFileResourceStateEnum;
import org.openapis.openapi.models.shared.OSPolicyResourceGroup;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResource;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceAPT;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceDeb;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceDesiredStateEnum;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceGooGet;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceMSI;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceRPM;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceYUM;
import org.openapis.openapi.models.shared.OSPolicyResourcePackageResourceZypper;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResource;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceAptRepository;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceGooRepository;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceYumRepository;
import org.openapis.openapi.models.shared.OSPolicyResourceRepositoryResourceZypperRepository;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                osPolicyAssignmentInput = new OSPolicyAssignmentInput() {{
                    description = "tempore";
                    etag = "fugit";
                    instanceFilter = new OSPolicyAssignmentInstanceFilter() {{
                        all = false;
                        exclusionLabels = new org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet[]{{
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sunt", "quidem");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("asperiores", "eos");
                                    put("saepe", "ipsa");
                                    put("esse", "consequuntur");
                                }};
                            }}),
                        }};
                        inclusionLabels = new org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet[]{{
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "quidem");
                                    put("quas", "officia");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("alias", "nam");
                                    put("minus", "sit");
                                }};
                            }}),
                        }};
                        inventories = new org.openapis.openapi.models.shared.OSPolicyAssignmentInstanceFilterInventory[]{{
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "hic";
                                osVersion = "dolorum";
                            }}),
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "libero";
                                osVersion = "voluptatem";
                            }}),
                        }};
                        osShortNames = new String[]{{
                            add("nisi"),
                            add("quis"),
                            add("perferendis"),
                            add("itaque"),
                        }};
                    }};;
                    name = "Emmett Dibbert";
                    osPolicies = new org.openapis.openapi.models.shared.OSPolicy[]{{
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "incidunt";
                            id = "d20ec90e-a41d-41f4-a5e8-5156fff73fdf";
                            mode = OSPolicyModeEnum.VALIDATION;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "facere";
                                            osVersion = "illum";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "exercitationem";
                                            osVersion = "saepe";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "deserunt";
                                            osVersion = "sint";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "minima";
                                            osVersion = "dolore";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "sequi";
                                        osVersion = "sequi";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("illum"),
                                                        add("laborum"),
                                                        add("sapiente"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "soluta";
                                                            generation = "eius";
                                                            object = "dolores";
                                                        }};
                                                        localPath = "dolorum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deleniti";
                                                            uri = "https://infinite-cough.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "quos";
                                                    script = "saepe";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("pariatur"),
                                                        add("deleniti"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aut";
                                                            generation = "nesciunt";
                                                            object = "error";
                                                        }};
                                                        localPath = "necessitatibus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "culpa";
                                                            uri = "http://wry-omelet.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "atque";
                                                    script = "similique";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "qui";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "tempora";
                                                        generation = "modi";
                                                        object = "sapiente";
                                                    }};
                                                    localPath = "possimus";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "nisi";
                                                        uri = "http://palatable-aftershave.biz";
                                                    }};
                                                }};
                                                path = "iste";
                                                permissions = "nulla";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "cd38ed0d-c671-4dc7-b1e3-af15920c90d1";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Mr. Clifford Morissette";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dolores";
                                                            generation = "harum";
                                                            object = "quibusdam";
                                                        }};
                                                        localPath = "totam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "provident";
                                                            uri = "https://mean-pink.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Tiffany McClure";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("facilis"),
                                                        add("in"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nobis";
                                                            generation = "nisi";
                                                            object = "natus";
                                                        }};
                                                        localPath = "eaque";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quia";
                                                            uri = "https://monstrous-mantua.com";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dolorum";
                                                            generation = "provident";
                                                            object = "incidunt";
                                                        }};
                                                        localPath = "maiores";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ea";
                                                            uri = "http://different-goodbye.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Angie Macejkovic MD";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Ian Schinner";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("molestiae"),
                                                        add("dolor"),
                                                        add("quia"),
                                                        add("nulla"),
                                                    }};
                                                    distribution = "occaecati";
                                                    gpgKey = "doloribus";
                                                    uri = "https://pointed-valance.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Maureen Hyatt";
                                                    url = "animi";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "vero";
                                                    displayName = "quas";
                                                    gpgKeys = new String[]{{
                                                        add("optio"),
                                                        add("quo"),
                                                        add("ullam"),
                                                        add("ipsa"),
                                                    }};
                                                    id = "c8a3512c-7378-4489-b075-0a00e966ec73";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "eum";
                                                    displayName = "possimus";
                                                    gpgKeys = new String[]{{
                                                        add("neque"),
                                                        add("inventore"),
                                                    }};
                                                    id = "94398c78-3c92-4398-ad3d-3ab7ca3c5ca8";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("aliquam"),
                                                        add("error"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "animi";
                                                            generation = "ducimus";
                                                            object = "perferendis";
                                                        }};
                                                        localPath = "impedit";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "reiciendis";
                                                            uri = "https://gigantic-subconscious.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "corrupti";
                                                    script = "iste";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("in"),
                                                        add("consequuntur"),
                                                        add("voluptatem"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptas";
                                                            generation = "magnam";
                                                            object = "ad";
                                                        }};
                                                        localPath = "quae";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ipsa";
                                                            uri = "http://jealous-stealth.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "accusamus";
                                                    script = "laborum";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "voluptatum";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "ratione";
                                                        generation = "facere";
                                                        object = "eius";
                                                    }};
                                                    localPath = "perspiciatis";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "consequuntur";
                                                        uri = "https://tense-bifocals.biz";
                                                    }};
                                                }};
                                                path = "tempore";
                                                permissions = "molestias";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "2c195454-5e95-45dc-8185-ea4901c7c43a";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Roy Stokes";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quam";
                                                            generation = "totam";
                                                            object = "incidunt";
                                                        }};
                                                        localPath = "similique";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nobis";
                                                            uri = "https://dependent-status.com";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Silvia Stoltenberg";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("totam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "beatae";
                                                            generation = "vitae";
                                                            object = "laborum";
                                                        }};
                                                        localPath = "beatae";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vitae";
                                                            uri = "http://excellent-linseed.com";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "rerum";
                                                            generation = "nulla";
                                                            object = "ducimus";
                                                        }};
                                                        localPath = "eveniet";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "repellendus";
                                                            uri = "http://heartfelt-fahrenheit.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Miss Kristin Collins";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Domingo Gulgowski";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("voluptas"),
                                                        add("nostrum"),
                                                        add("eum"),
                                                    }};
                                                    distribution = "modi";
                                                    gpgKey = "cumque";
                                                    uri = "http://ancient-possibility.com";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Cheryl Bogisich";
                                                    url = "commodi";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "dicta";
                                                    displayName = "illum";
                                                    gpgKeys = new String[]{{
                                                        add("ut"),
                                                    }};
                                                    id = "a7dbb8f5-32d8-492c-b781-2cb512c87824";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "accusantium";
                                                    displayName = "nobis";
                                                    gpgKeys = new String[]{{
                                                        add("corporis"),
                                                        add("tempora"),
                                                        add("voluptatum"),
                                                        add("a"),
                                                    }};
                                                    id = "88f8f1bf-0bc8-4e1f-a06d-5d831d008109";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("delectus"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptas";
                                                            generation = "nihil";
                                                            object = "quae";
                                                        }};
                                                        localPath = "voluptas";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "laboriosam";
                                                            uri = "http://essential-woodshed.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "ex";
                                                    script = "quos";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("minus"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "exercitationem";
                                                            generation = "molestiae";
                                                            object = "iure";
                                                        }};
                                                        localPath = "blanditiis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "repellendus";
                                                            uri = "https://violet-jaguar.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "dolore";
                                                    script = "accusantium";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "excepturi";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "deserunt";
                                                        generation = "odit";
                                                        object = "beatae";
                                                    }};
                                                    localPath = "exercitationem";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "officiis";
                                                        uri = "http://lovely-gavel.com";
                                                    }};
                                                }};
                                                path = "vitae";
                                                permissions = "tempora";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "9a5f63e3-af3d-4d9d-9a33-dcd63483e4a7";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Luther Macejkovic";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "assumenda";
                                                            generation = "maiores";
                                                            object = "neque";
                                                        }};
                                                        localPath = "in";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "debitis";
                                                            uri = "http://grand-recognition.name";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Bernice Schultz I";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("inventore"),
                                                        add("ipsum"),
                                                        add("error"),
                                                        add("numquam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "praesentium";
                                                            generation = "dolores";
                                                            object = "consectetur";
                                                        }};
                                                        localPath = "dicta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ipsa";
                                                            uri = "https://aggressive-howard.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "facere";
                                                            generation = "ratione";
                                                            object = "quis";
                                                        }};
                                                        localPath = "modi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quo";
                                                            uri = "http://offensive-chasuble.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Christian Flatley";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Louise Funk";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("vel"),
                                                        add("delectus"),
                                                        add("modi"),
                                                    }};
                                                    distribution = "expedita";
                                                    gpgKey = "quidem";
                                                    uri = "http://austere-wraparound.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Mr. Mona McLaughlin";
                                                    url = "expedita";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "sapiente";
                                                    displayName = "itaque";
                                                    gpgKeys = new String[]{{
                                                        add("magnam"),
                                                        add("excepturi"),
                                                    }};
                                                    id = "caf45a27-f69e-42c9-a6d1-0e9db3ad4c6b";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "doloremque";
                                                    displayName = "adipisci";
                                                    gpgKeys = new String[]{{
                                                        add("accusantium"),
                                                    }};
                                                    id = "8d9c3374-7308-42b9-8f2a-b1fd5671e9c3";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "commodi";
                                            osVersion = "neque";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "enim";
                                        osVersion = "eaque";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("eum"),
                                                        add("molestiae"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "architecto";
                                                            generation = "aliquam";
                                                            object = "ipsum";
                                                        }};
                                                        localPath = "nihil";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "blanditiis";
                                                            uri = "https://spirited-trout.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "iste";
                                                    script = "error";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("nemo"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "unde";
                                                            generation = "numquam";
                                                            object = "temporibus";
                                                        }};
                                                        localPath = "omnis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "amet";
                                                            uri = "https://livid-discrimination.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "dolores";
                                                    script = "ullam";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "sed";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "a";
                                                        generation = "saepe";
                                                        object = "dolor";
                                                    }};
                                                    localPath = "quidem";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "quaerat";
                                                        uri = "https://flippant-stadium.net";
                                                    }};
                                                }};
                                                path = "atque";
                                                permissions = "tempore";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "78ebb6e1-d2cf-4502-bafb-2cbc4635d5e6";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Mr. Teri Nader";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quisquam";
                                                            generation = "dolor";
                                                            object = "accusamus";
                                                        }};
                                                        localPath = "sint";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "enim";
                                                            uri = "http://prize-birth.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Melba Steuber";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("commodi"),
                                                        add("magnam"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "rem";
                                                            generation = "occaecati";
                                                            object = "possimus";
                                                        }};
                                                        localPath = "voluptate";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nam";
                                                            uri = "http://lost-ginseng.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "adipisci";
                                                            generation = "necessitatibus";
                                                            object = "veritatis";
                                                        }};
                                                        localPath = "consectetur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "fuga";
                                                            uri = "http://defensive-popcorn.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Terrance Mante";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Theodore Hettinger";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("ducimus"),
                                                        add("asperiores"),
                                                        add("veniam"),
                                                    }};
                                                    distribution = "cumque";
                                                    gpgKey = "praesentium";
                                                    uri = "http://elliptical-laugh.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Hannah Leffler";
                                                    url = "consectetur";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "quisquam";
                                                    displayName = "nulla";
                                                    gpgKeys = new String[]{{
                                                        add("ex"),
                                                        add("dolore"),
                                                        add("dicta"),
                                                        add("minima"),
                                                    }};
                                                    id = "b0449f9d-f13f-44ee-9be7-8bf606825894";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "necessitatibus";
                                                    displayName = "culpa";
                                                    gpgKeys = new String[]{{
                                                        add("aliquid"),
                                                        add("amet"),
                                                    }};
                                                    id = "d5c72795-b785-4148-96d5-49e5635b33bc";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("maiores"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "unde";
                                                            generation = "reprehenderit";
                                                            object = "voluptatem";
                                                        }};
                                                        localPath = "placeat";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolore";
                                                            uri = "http://winding-shipping.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "dolore";
                                                    script = "totam";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("numquam"),
                                                        add("sunt"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "consequuntur";
                                                            generation = "veniam";
                                                            object = "voluptates";
                                                        }};
                                                        localPath = "in";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "minima";
                                                            uri = "https://lone-miscommunication.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "iure";
                                                    script = "nostrum";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "cumque";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "eaque";
                                                        generation = "earum";
                                                        object = "earum";
                                                    }};
                                                    localPath = "culpa";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "vel";
                                                        uri = "https://other-composite.net";
                                                    }};
                                                }};
                                                path = "molestias";
                                                permissions = "alias";
                                                state = OSPolicyResourceFileResourceStateEnum.ABSENT;
                                            }};
                                            id = "1b8c95be-1254-4b73-9f4f-e77210d1f655";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Edmund McCullough";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "iure";
                                                            generation = "sed";
                                                            object = "odit";
                                                        }};
                                                        localPath = "quibusdam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "fugit";
                                                            uri = "https://slight-apology.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Helen Lehner";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("maxime"),
                                                        add("culpa"),
                                                        add("deserunt"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "recusandae";
                                                            generation = "doloremque";
                                                            object = "magnam";
                                                        }};
                                                        localPath = "quia";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quibusdam";
                                                            uri = "https://jam-packed-skylight.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "est";
                                                            generation = "placeat";
                                                            object = "occaecati";
                                                        }};
                                                        localPath = "nam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "modi";
                                                            uri = "https://putrid-partridge.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Randal Upton";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Joann Stokes";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("natus"),
                                                    }};
                                                    distribution = "aperiam";
                                                    gpgKey = "ducimus";
                                                    uri = "https://embarrassed-labourer.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Anna Mayer";
                                                    url = "fugiat";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "eius";
                                                    displayName = "odit";
                                                    gpgKeys = new String[]{{
                                                        add("minima"),
                                                        add("aliquam"),
                                                        add("similique"),
                                                        add("voluptatum"),
                                                    }};
                                                    id = "5466597c-5023-43c1-871d-51aaa6ddf5ab";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "nulla";
                                                    displayName = "aliquid";
                                                    gpgKeys = new String[]{{
                                                        add("atque"),
                                                        add("reprehenderit"),
                                                    }};
                                                    id = "c5fc2b86-2a00-4bef-a9e1-00157630bda7";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("repellat"),
                                                        add("quibusdam"),
                                                        add("accusamus"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "illum";
                                                            generation = "blanditiis";
                                                            object = "tempora";
                                                        }};
                                                        localPath = "similique";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolor";
                                                            uri = "http://rapid-embassy.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "nesciunt";
                                                    script = "corrupti";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("inventore"),
                                                        add("officia"),
                                                        add("in"),
                                                        add("sequi"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ad";
                                                            generation = "fuga";
                                                            object = "quisquam";
                                                        }};
                                                        localPath = "qui";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "suscipit";
                                                            uri = "https://unsightly-crack.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "itaque";
                                                    script = "maiores";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "provident";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "dignissimos";
                                                        generation = "dicta";
                                                        object = "id";
                                                    }};
                                                    localPath = "blanditiis";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "repellat";
                                                        uri = "http://ideal-revival.net";
                                                    }};
                                                }};
                                                path = "mollitia";
                                                permissions = "architecto";
                                                state = OSPolicyResourceFileResourceStateEnum.DESIRED_STATE_UNSPECIFIED;
                                            }};
                                            id = "06fe965b-711d-408c-b88e-c9f7b99a550a";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Beatrice Jerde";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dolor";
                                                            generation = "ratione";
                                                            object = "velit";
                                                        }};
                                                        localPath = "soluta";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "cum";
                                                            uri = "http://some-tandem.name";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Ben Harvey";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("officia"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "cupiditate";
                                                            generation = "rem";
                                                            object = "ea";
                                                        }};
                                                        localPath = "debitis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "soluta";
                                                            uri = "http://unused-bronze.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quisquam";
                                                            generation = "mollitia";
                                                            object = "ipsam";
                                                        }};
                                                        localPath = "autem";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "non";
                                                            uri = "http://modern-ore.com";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Shirley Ankunding";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Catherine Mitchell";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("blanditiis"),
                                                        add("laudantium"),
                                                        add("earum"),
                                                        add("impedit"),
                                                    }};
                                                    distribution = "accusamus";
                                                    gpgKey = "reprehenderit";
                                                    uri = "https://warlike-mortality.com";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Mr. Kerry Adams II";
                                                    url = "temporibus";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "sequi";
                                                    displayName = "laudantium";
                                                    gpgKeys = new String[]{{
                                                        add("alias"),
                                                        add("deleniti"),
                                                        add("quasi"),
                                                    }};
                                                    id = "62c6beb6-8a0f-4657-b7d0-3a1480f8de30";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "tenetur";
                                                    displayName = "aut";
                                                    gpgKeys = new String[]{{
                                                        add("cupiditate"),
                                                        add("fugiat"),
                                                    }};
                                                    id = "810618d9-7e15-4229-b510-da80312292cc";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "laboriosam";
                            id = "1c2a702b-b97e-4e10-ada2-de35f8e01bf3";
                            mode = OSPolicyModeEnum.MODE_UNSPECIFIED;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "id";
                                            osVersion = "quidem";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "ut";
                                            osVersion = "veniam";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "eius";
                                            osVersion = "quae";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "dolores";
                                        osVersion = "dolorum";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("iure"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptatem";
                                                            generation = "incidunt";
                                                            object = "soluta";
                                                        }};
                                                        localPath = "a";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vitae";
                                                            uri = "https://strong-naming.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "ex";
                                                    script = "dicta";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("laborum"),
                                                        add("itaque"),
                                                        add("ad"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptates";
                                                            generation = "harum";
                                                            object = "quaerat";
                                                        }};
                                                        localPath = "delectus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sit";
                                                            uri = "https://flamboyant-minor-league.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "ullam";
                                                    script = "nihil";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "ut";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "incidunt";
                                                        generation = "quibusdam";
                                                        object = "doloremque";
                                                    }};
                                                    localPath = "rem";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "dolorum";
                                                        uri = "http://cooked-glacier.info";
                                                    }};
                                                }};
                                                path = "est";
                                                permissions = "est";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "e79e3c71-ad31-4bec-b83d-2378ae3bfc23";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Perry Gibson MD";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "unde";
                                                            generation = "rem";
                                                            object = "iure";
                                                        }};
                                                        localPath = "error";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aliquam";
                                                            uri = "https://fumbling-relish.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Brenda Kunze III";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("magni"),
                                                        add("laudantium"),
                                                        add("repudiandae"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "minus";
                                                            generation = "porro";
                                                            object = "atque";
                                                        }};
                                                        localPath = "autem";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "eius";
                                                            uri = "https://cluttered-croup.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "commodi";
                                                            generation = "a";
                                                            object = "aliquid";
                                                        }};
                                                        localPath = "qui";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "eligendi";
                                                            uri = "https://indolent-morale.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Alexandra Schmeler";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Mabel Lebsack MD";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("illum"),
                                                        add("nesciunt"),
                                                        add("optio"),
                                                        add("corrupti"),
                                                    }};
                                                    distribution = "inventore";
                                                    gpgKey = "quibusdam";
                                                    uri = "https://clean-alien.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Earnest Crooks";
                                                    url = "voluptatibus";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "iste";
                                                    displayName = "amet";
                                                    gpgKeys = new String[]{{
                                                        add("pariatur"),
                                                    }};
                                                    id = "a3edb51f-ad94-4acc-9435-137726d15321";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "nam";
                                                    displayName = "quos";
                                                    gpgKeys = new String[]{{
                                                        add("ratione"),
                                                    }};
                                                    id = "a56d6918-0ff6-40eb-9a66-58e69a4b843d";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("totam"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "explicabo";
                                                            generation = "quibusdam";
                                                            object = "harum";
                                                        }};
                                                        localPath = "itaque";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "porro";
                                                            uri = "http://gargantuan-runner.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "minus";
                                                    script = "autem";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("nisi"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "veniam";
                                                            generation = "cupiditate";
                                                            object = "aliquam";
                                                        }};
                                                        localPath = "suscipit";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "atque";
                                                            uri = "https://unlawful-coral.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "quibusdam";
                                                    script = "deleniti";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "quas";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "magnam";
                                                        generation = "cupiditate";
                                                        object = "expedita";
                                                    }};
                                                    localPath = "sapiente";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "deleniti";
                                                        uri = "http://bountiful-dolphin.net";
                                                    }};
                                                }};
                                                path = "amet";
                                                permissions = "ipsum";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "f96bb0c6-9e37-42db-9344-ba9f78a5c0ed";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Kayla Nitzsche";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "explicabo";
                                                            generation = "recusandae";
                                                            object = "unde";
                                                        }};
                                                        localPath = "iusto";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aspernatur";
                                                            uri = "http://buzzing-uncertainty.net";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Jerome Lowe";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("nobis"),
                                                        add("exercitationem"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "beatae";
                                                            generation = "cupiditate";
                                                            object = "cupiditate";
                                                        }};
                                                        localPath = "ex";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "tempore";
                                                            uri = "http://sad-disappointment.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quaerat";
                                                            generation = "accusantium";
                                                            object = "recusandae";
                                                        }};
                                                        localPath = "saepe";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sapiente";
                                                            uri = "http://burdensome-cathedral.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Lynda Kunze";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Josephine Goodwin";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("vitae"),
                                                        add("sit"),
                                                    }};
                                                    distribution = "autem";
                                                    gpgKey = "rem";
                                                    uri = "https://these-thanks.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Santiago Zboncak";
                                                    url = "quam";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "earum";
                                                    displayName = "velit";
                                                    gpgKeys = new String[]{{
                                                        add("pariatur"),
                                                        add("voluptatem"),
                                                        add("quod"),
                                                        add("minus"),
                                                    }};
                                                    id = "d33f11b3-e4e0-480a-a104-186ec759e02f";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "dolor";
                                                    displayName = "dignissimos";
                                                    gpgKeys = new String[]{{
                                                        add("consequuntur"),
                                                    }};
                                                    id = "c5c8e2d3-0ead-4310-8fa4-4707bf375b44";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quas"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aspernatur";
                                                            generation = "laudantium";
                                                            object = "fugit";
                                                        }};
                                                        localPath = "et";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "reiciendis";
                                                            uri = "https://scrawny-cheque.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "sint";
                                                    script = "eveniet";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("unde"),
                                                        add("consequuntur"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "laboriosam";
                                                            generation = "iusto";
                                                            object = "quisquam";
                                                        }};
                                                        localPath = "dignissimos";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ab";
                                                            uri = "https://sleepy-lycra.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "quo";
                                                    script = "facere";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "labore";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "fugit";
                                                        generation = "quis";
                                                        object = "voluptatum";
                                                    }};
                                                    localPath = "temporibus";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "doloremque";
                                                        uri = "http://happy-go-lucky-mango.net";
                                                    }};
                                                }};
                                                path = "quas";
                                                permissions = "odit";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "808fe275-1a20-447c-8449-e143f9619bb7";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Barry Bayer";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "laborum";
                                                            generation = "quae";
                                                            object = "quae";
                                                        }};
                                                        localPath = "voluptatibus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "est";
                                                            uri = "http://disastrous-haversack.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Mrs. Yvonne Morissette";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("natus"),
                                                        add("minima"),
                                                        add("minus"),
                                                        add("provident"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quibusdam";
                                                            generation = "explicabo";
                                                            object = "adipisci";
                                                        }};
                                                        localPath = "iusto";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ratione";
                                                            uri = "https://junior-sausage.info";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quas";
                                                            generation = "nemo";
                                                            object = "facilis";
                                                        }};
                                                        localPath = "exercitationem";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nulla";
                                                            uri = "https://foolhardy-whirlpool.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Helen Brown";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Erick Rippin";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("aliquid"),
                                                        add("nobis"),
                                                    }};
                                                    distribution = "reprehenderit";
                                                    gpgKey = "consequuntur";
                                                    uri = "http://impractical-subsection.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Mr. Jared Hand";
                                                    url = "qui";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "dolorum";
                                                    displayName = "ad";
                                                    gpgKeys = new String[]{{
                                                        add("dolore"),
                                                        add("in"),
                                                    }};
                                                    id = "edc439ed-8c43-420f-8124-0d4487ac693b";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "excepturi";
                                                    displayName = "quaerat";
                                                    gpgKeys = new String[]{{
                                                        add("nesciunt"),
                                                        add("quidem"),
                                                        add("unde"),
                                                        add("fugiat"),
                                                    }};
                                                    id = "2488d795-aa42-4fc4-8566-9f69a006d212";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("perspiciatis"),
                                                        add("dolore"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ullam";
                                                            generation = "aut";
                                                            object = "atque";
                                                        }};
                                                        localPath = "quasi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "natus";
                                                            uri = "https://likely-science.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "et";
                                                    script = "harum";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("illo"),
                                                        add("atque"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magnam";
                                                            generation = "incidunt";
                                                            object = "consequatur";
                                                        }};
                                                        localPath = "nisi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quae";
                                                            uri = "https://another-amusement.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "ipsa";
                                                    script = "possimus";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "perferendis";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "qui";
                                                        generation = "velit";
                                                        object = "repellendus";
                                                    }};
                                                    localPath = "quod";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "error";
                                                        uri = "http://caring-wingtip.info";
                                                    }};
                                                }};
                                                path = "animi";
                                                permissions = "delectus";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "2a6c4484-6ae9-4d89-a53c-8962f4896bf5";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Olive Goldner";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sed";
                                                            generation = "fugiat";
                                                            object = "dolorem";
                                                        }};
                                                        localPath = "cumque";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "nesciunt";
                                                            uri = "http://enchanted-supplement.info";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Stella Littel";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("excepturi"),
                                                        add("ab"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "eos";
                                                            generation = "numquam";
                                                            object = "voluptate";
                                                        }};
                                                        localPath = "odio";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "magni";
                                                            uri = "http://unwitting-harvest.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "et";
                                                            generation = "iste";
                                                            object = "aut";
                                                        }};
                                                        localPath = "occaecati";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vero";
                                                            uri = "https://blissful-bacon.biz";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Genevieve Hermann";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Belinda O'Hara";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("aliquid"),
                                                    }};
                                                    distribution = "ea";
                                                    gpgKey = "odio";
                                                    uri = "http://spicy-vulture.com";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Randal Hayes";
                                                    url = "qui";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "aliquid";
                                                    displayName = "doloremque";
                                                    gpgKeys = new String[]{{
                                                        add("explicabo"),
                                                        add("ipsam"),
                                                    }};
                                                    id = "1e66bb42-6897-4d99-a2d3-35670e93ee6c";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "reiciendis";
                                                    displayName = "ad";
                                                    gpgKeys = new String[]{{
                                                        add("delectus"),
                                                        add("dolorem"),
                                                        add("ipsam"),
                                                    }};
                                                    id = "8aaeacae-323a-431b-b7ba-1cc97716c802";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "quisquam";
                                            osVersion = "sint";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "voluptates";
                                            osVersion = "alias";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "placeat";
                                            osVersion = "in";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "possimus";
                                            osVersion = "iste";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "assumenda";
                                        osVersion = "neque";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("repellat"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quae";
                                                            generation = "animi";
                                                            object = "est";
                                                        }};
                                                        localPath = "autem";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sequi";
                                                            uri = "https://tiny-mukluk.net";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "et";
                                                    script = "nobis";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("nemo"),
                                                        add("commodi"),
                                                        add("soluta"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quo";
                                                            generation = "libero";
                                                            object = "id";
                                                        }};
                                                        localPath = "quaerat";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "inventore";
                                                            uri = "https://worldly-celebration.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "numquam";
                                                    script = "culpa";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "aliquam";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "iusto";
                                                        generation = "voluptatibus";
                                                        object = "dolorum";
                                                    }};
                                                    localPath = "maxime";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "repellat";
                                                        uri = "http://blissful-hawk.net";
                                                    }};
                                                }};
                                                path = "fugiat";
                                                permissions = "facere";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "444a7562-873c-47dd-9efa-f43dc623620f";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Marie Fadel";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nesciunt";
                                                            generation = "doloremque";
                                                            object = "at";
                                                        }};
                                                        localPath = "tenetur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "sequi";
                                                            uri = "https://several-almond.com";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Donnie Ondricka";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("delectus"),
                                                        add("quidem"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "rem";
                                                            generation = "repellat";
                                                            object = "suscipit";
                                                        }};
                                                        localPath = "veniam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "consequuntur";
                                                            uri = "https://scarce-recliner.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "illum";
                                                            generation = "dolor";
                                                            object = "praesentium";
                                                        }};
                                                        localPath = "non";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "deleniti";
                                                            uri = "http://motherly-lad.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Beverly Green";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Natasha Dicki";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("perferendis"),
                                                    }};
                                                    distribution = "vero";
                                                    gpgKey = "excepturi";
                                                    uri = "http://insidious-word.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Ollie Sporer I";
                                                    url = "porro";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "voluptatum";
                                                    displayName = "libero";
                                                    gpgKeys = new String[]{{
                                                        add("quidem"),
                                                    }};
                                                    id = "b55a292b-0bc3-4bb7-8466-4eb1d03388b0";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "assumenda";
                                                    displayName = "architecto";
                                                    gpgKeys = new String[]{{
                                                        add("rerum"),
                                                        add("architecto"),
                                                        add("in"),
                                                    }};
                                                    id = "afee74b6-feb9-4457-87ed-af39d16fbf76";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "assumenda";
                                            osVersion = "ab";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "eum";
                                            osVersion = "quia";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "quidem";
                                            osVersion = "sequi";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "doloremque";
                                            osVersion = "dolor";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "debitis";
                                        osVersion = "consectetur";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quidem";
                                                            generation = "excepturi";
                                                            object = "ipsum";
                                                        }};
                                                        localPath = "accusamus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "consectetur";
                                                            uri = "http://direct-bloodflow.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "sapiente";
                                                    script = "corporis";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("soluta"),
                                                        add("magnam"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sequi";
                                                            generation = "ab";
                                                            object = "consectetur";
                                                        }};
                                                        localPath = "ullam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ullam";
                                                            uri = "http://sparse-rye.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "quisquam";
                                                    script = "fugit";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "consequatur";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "incidunt";
                                                        generation = "placeat";
                                                        object = "labore";
                                                    }};
                                                    localPath = "culpa";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "illum";
                                                        uri = "https://spotless-mole.name";
                                                    }};
                                                }};
                                                path = "voluptatem";
                                                permissions = "labore";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "5195b864-8cef-4a78-b1e2-d3b901e0952b";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Abraham Goldner";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quidem";
                                                            generation = "inventore";
                                                            object = "iste";
                                                        }};
                                                        localPath = "voluptatibus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "odio";
                                                            uri = "http://dizzy-suffocation.name";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Micheal Casper";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("quasi"),
                                                        add("nesciunt"),
                                                        add("corrupti"),
                                                        add("in"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quia";
                                                            generation = "odio";
                                                            object = "dicta";
                                                        }};
                                                        localPath = "eveniet";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vitae";
                                                            uri = "https://unwitting-pat.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "debitis";
                                                            generation = "non";
                                                            object = "veniam";
                                                        }};
                                                        localPath = "illo";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "illo";
                                                            uri = "https://spiffy-chain.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Derek Kunze";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Tyler Abernathy MD";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("eveniet"),
                                                        add("quibusdam"),
                                                        add("eos"),
                                                    }};
                                                    distribution = "cupiditate";
                                                    gpgKey = "est";
                                                    uri = "https://triangular-endpoint.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Matt Larson";
                                                    url = "nemo";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "atque";
                                                    displayName = "optio";
                                                    gpgKeys = new String[]{{
                                                        add("at"),
                                                    }};
                                                    id = "4f4c88be-4f27-48fd-9667-e46c51d2ffaa";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "ad";
                                                    displayName = "corrupti";
                                                    gpgKeys = new String[]{{
                                                        add("minus"),
                                                        add("voluptates"),
                                                        add("repellat"),
                                                        add("sed"),
                                                    }};
                                                    id = "34c955b9-bdf2-4190-abd9-bbcc2725ec26";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "error";
                                            osVersion = "quisquam";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "debitis";
                                            osVersion = "ipsa";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "quia";
                                        osVersion = "totam";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("numquam"),
                                                        add("alias"),
                                                        add("quod"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nisi";
                                                            generation = "excepturi";
                                                            object = "eveniet";
                                                        }};
                                                        localPath = "tenetur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vel";
                                                            uri = "https://upset-disagreement.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "blanditiis";
                                                    script = "animi";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("possimus"),
                                                        add("maiores"),
                                                        add("est"),
                                                        add("optio"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptate";
                                                            generation = "nostrum";
                                                            object = "incidunt";
                                                        }};
                                                        localPath = "enim";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ipsa";
                                                            uri = "http://french-contribution.com";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.POWERSHELL;
                                                    outputFilePath = "eum";
                                                    script = "commodi";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "amet";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "quia";
                                                        generation = "facilis";
                                                        object = "magnam";
                                                    }};
                                                    localPath = "dolor";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "provident";
                                                        uri = "http://well-groomed-spool.org";
                                                    }};
                                                }};
                                                path = "ipsa";
                                                permissions = "vitae";
                                                state = OSPolicyResourceFileResourceStateEnum.CONTENTS_MATCH;
                                            }};
                                            id = "3e91e8f7-bc69-4d46-8a77-eceb26d10f1e";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Alan Howell DDS";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "nihil";
                                                            generation = "quisquam";
                                                            object = "aperiam";
                                                        }};
                                                        localPath = "delectus";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aut";
                                                            uri = "https://needy-lane.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Carroll Harvey";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("doloribus"),
                                                        add("illum"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "non";
                                                            generation = "repudiandae";
                                                            object = "quae";
                                                        }};
                                                        localPath = "tempore";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "incidunt";
                                                            uri = "https://excited-patio.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quia";
                                                            generation = "ullam";
                                                            object = "dolor";
                                                        }};
                                                        localPath = "maxime";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "amet";
                                                            uri = "http://cute-flu.info";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Rebecca Wunsch";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Ted Walsh";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("tempora"),
                                                        add("voluptatum"),
                                                    }};
                                                    distribution = "cum";
                                                    gpgKey = "itaque";
                                                    uri = "http://new-trellis.biz";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Candace Kshlerin";
                                                    url = "inventore";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "ipsam";
                                                    displayName = "impedit";
                                                    gpgKeys = new String[]{{
                                                        add("et"),
                                                        add("odit"),
                                                        add("similique"),
                                                    }};
                                                    id = "4ba9d599-8819-42cf-90c7-7c53e7e7d4ee";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "nisi";
                                                    displayName = "recusandae";
                                                    gpgKeys = new String[]{{
                                                        add("nobis"),
                                                        add("excepturi"),
                                                        add("consequatur"),
                                                    }};
                                                    id = "bac384e2-3967-403f-ac31-c50824d189a3";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "eum";
                            id = "a6b2d27e-b707-4aa6-8c8f-e46e6177db9d";
                            mode = OSPolicyModeEnum.ENFORCEMENT;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "dignissimos";
                                            osVersion = "eaque";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "voluptatibus";
                                            osVersion = "voluptatibus";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "cum";
                                            osVersion = "facilis";
                                        }}),
                                    }};
                                    osFilter = new OSPolicyOSFilter() {{
                                        osShortName = "nisi";
                                        osVersion = "occaecati";
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("repudiandae"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "repudiandae";
                                                            generation = "odio";
                                                            object = "nihil";
                                                        }};
                                                        localPath = "ipsa";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "eveniet";
                                                            uri = "http://imperturbable-accident.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "debitis";
                                                    script = "voluptatibus";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("maxime"),
                                                        add("eos"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "doloremque";
                                                            generation = "vel";
                                                            object = "itaque";
                                                        }};
                                                        localPath = "suscipit";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vitae";
                                                            uri = "https://ajar-spree.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "blanditiis";
                                                    script = "ducimus";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "inventore";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "modi";
                                                        generation = "porro";
                                                        object = "consequuntur";
                                                    }};
                                                    localPath = "perferendis";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "est";
                                                        uri = "http://tan-normalization.name";
                                                    }};
                                                }};
                                                path = "ea";
                                                permissions = "sequi";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "ca85c3fe-6557-44db-af94-a7c98f13af28";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Pete Crona";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "consequuntur";
                                                            generation = "expedita";
                                                            object = "voluptatibus";
                                                        }};
                                                        localPath = "eius";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptatibus";
                                                            uri = "http://tremendous-swim.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Terri Stehr";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("modi"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "tempore";
                                                            generation = "dolores";
                                                            object = "beatae";
                                                        }};
                                                        localPath = "eligendi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "fugiat";
                                                            uri = "https://mild-brochure.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aliquid";
                                                            generation = "assumenda";
                                                            object = "veniam";
                                                        }};
                                                        localPath = "quis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "id";
                                                            uri = "https://impolite-operation.name";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Bernadette Green";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Grant Ullrich";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("beatae"),
                                                        add("eligendi"),
                                                        add("eos"),
                                                    }};
                                                    distribution = "dolor";
                                                    gpgKey = "eligendi";
                                                    uri = "http://paltry-power.info";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Ms. Michael Torphy";
                                                    url = "distinctio";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "quasi";
                                                    displayName = "dolores";
                                                    gpgKeys = new String[]{{
                                                        add("enim"),
                                                        add("nam"),
                                                        add("culpa"),
                                                        add("laudantium"),
                                                    }};
                                                    id = "25fe22cd-5cba-46fb-bec9-32af6813d65b";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "delectus";
                                                    displayName = "earum";
                                                    gpgKeys = new String[]{{
                                                        add("saepe"),
                                                        add("quod"),
                                                        add("odit"),
                                                        add("assumenda"),
                                                    }};
                                                    id = "d6916f7f-c7dd-4a70-ac60-e6075894d61c";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("tempora"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quisquam";
                                                            generation = "facere";
                                                            object = "excepturi";
                                                        }};
                                                        localPath = "aut";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aspernatur";
                                                            uri = "http://lasting-trapezoid.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "nobis";
                                                    script = "eaque";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("iste"),
                                                        add("reprehenderit"),
                                                        add("voluptate"),
                                                        add("reiciendis"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "et";
                                                            generation = "culpa";
                                                            object = "exercitationem";
                                                        }};
                                                        localPath = "eius";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "iste";
                                                            uri = "http://plastic-program.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "dignissimos";
                                                    script = "nostrum";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "beatae";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "cum";
                                                        generation = "vitae";
                                                        object = "doloremque";
                                                    }};
                                                    localPath = "commodi";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "fugiat";
                                                        uri = "http://determined-traditionalism.com";
                                                    }};
                                                }};
                                                path = "dolorem";
                                                permissions = "debitis";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "9815aae9-9fcd-4e9e-b29c-9d4f2d8a4464";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Alexandra Parker PhD";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "tempore";
                                                            generation = "nihil";
                                                            object = "neque";
                                                        }};
                                                        localPath = "est";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "consequuntur";
                                                            uri = "https://outgoing-councilperson.org";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Arlene Strosin PhD";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("facere"),
                                                        add("fuga"),
                                                        add("minima"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "voluptas";
                                                            generation = "et";
                                                            object = "explicabo";
                                                        }};
                                                        localPath = "sed";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aut";
                                                            uri = "http://hoarse-plot.net";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quas";
                                                            generation = "asperiores";
                                                            object = "eos";
                                                        }};
                                                        localPath = "quam";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "voluptate";
                                                            uri = "http://luminous-finger.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Misty Kirlin";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Dr. Evan Kuvalis";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("aut"),
                                                        add("blanditiis"),
                                                        add("unde"),
                                                    }};
                                                    distribution = "hic";
                                                    gpgKey = "maxime";
                                                    uri = "http://first-step-sister.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Constance Gibson";
                                                    url = "ipsa";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "officiis";
                                                    displayName = "ullam";
                                                    gpgKeys = new String[]{{
                                                        add("placeat"),
                                                        add("in"),
                                                        add("minus"),
                                                        add("voluptas"),
                                                    }};
                                                    id = "d0cbcfdc-d334-4b6f-a23b-cecab50aee5e";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "voluptatem";
                                                    displayName = "pariatur";
                                                    gpgKeys = new String[]{{
                                                        add("quas"),
                                                        add("cum"),
                                                        add("sint"),
                                                    }};
                                                    id = "af6ad054-86e7-4b41-bcbe-2d176dc1c43d";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    rollout = new OSPolicyAssignmentRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 266895;
                            percent = 41387;
                        }};;
                        minWaitDuration = "doloribus";
                    }};;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "inventore";
                key = "in";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "veritatis";
                updateMask = "ad";
                uploadType = "esse";
                uploadProtocol = "cumque";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsPatch(req, new OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity("tempore", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
