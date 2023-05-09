# projects

### Available Operations

* [osconfigProjectsLocationsInstancesInventoriesList](#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesVulnerabilityReportsList](#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [osconfigProjectsLocationsOsPolicyAssignmentsCreate](#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
* [osconfigProjectsLocationsOsPolicyAssignmentsList](#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [osconfigProjectsLocationsOsPolicyAssignmentsListRevisions](#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [osconfigProjectsPatchDeploymentsCreate](#osconfigprojectspatchdeploymentscreate) - Create an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsDelete](#osconfigprojectspatchdeploymentsdelete) - Delete an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsList](#osconfigprojectspatchdeploymentslist) - Get a page of OS Config patch deployments.
* [osconfigProjectsPatchDeploymentsPatch](#osconfigprojectspatchdeploymentspatch) - Update an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsPause](#osconfigprojectspatchdeploymentspause) - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* [osconfigProjectsPatchDeploymentsResume](#osconfigprojectspatchdeploymentsresume) - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* [osconfigProjectsPatchJobsCancel](#osconfigprojectspatchjobscancel) - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* [osconfigProjectsPatchJobsExecute](#osconfigprojectspatchjobsexecute) - Patch VM instances by creating and running a patch job.
* [osconfigProjectsPatchJobsGet](#osconfigprojectspatchjobsget) - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* [osconfigProjectsPatchJobsInstanceDetailsList](#osconfigprojectspatchjobsinstancedetailslist) - Get a list of instance details for a given patch job.
* [osconfigProjectsPatchJobsList](#osconfigprojectspatchjobslist) - Get a list of patch jobs.

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

            OsconfigProjectsLocationsInstancesInventoriesListRequest req = new OsconfigProjectsLocationsInstancesInventoriesListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                filter = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                pageSize = 925597L;
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
                view = OsconfigProjectsLocationsInstancesInventoriesListViewEnum.BASIC;
            }};            

            OsconfigProjectsLocationsInstancesInventoriesListResponse res = sdk.projects.osconfigProjectsLocationsInstancesInventoriesList(req, new OsconfigProjectsLocationsInstancesInventoriesListSecurity("perferendis", "ipsam") {{
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

            OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest req = new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                filter = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                pageSize = 800911L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "porro";
                uploadProtocol = "dolorum";
            }};            

            OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse res = sdk.projects.osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList(req, new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity("dicta", "nam") {{
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

            OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest req = new OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                filter = "totam";
                key = "beatae";
                oauthToken = "commodi";
                pageSize = 473600L;
                pageToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse res = sdk.projects.osconfigProjectsLocationsInstancesVulnerabilityReportsList(req, new OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity("esse", "ipsum") {{
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

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).

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

            OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                osPolicyAssignmentInput = new OSPolicyAssignmentInput() {{
                    description = "perferendis";
                    etag = "ad";
                    instanceFilter = new OSPolicyAssignmentInstanceFilter() {{
                        all = false;
                        exclusionLabels = new org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet[]{{
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("iste", "dolor");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                    put("ipsa", "reiciendis");
                                }};
                            }}),
                        }};
                        inclusionLabels = new org.openapis.openapi.models.shared.OSPolicyAssignmentLabelSet[]{{
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("laborum", "dolores");
                                    put("dolorem", "corporis");
                                    put("explicabo", "nobis");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("omnis", "nemo");
                                    put("minima", "excepturi");
                                }};
                            }}),
                            add(new OSPolicyAssignmentLabelSet() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("iure", "culpa");
                                }};
                            }}),
                        }};
                        inventories = new org.openapis.openapi.models.shared.OSPolicyAssignmentInstanceFilterInventory[]{{
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "sapiente";
                                osVersion = "architecto";
                            }}),
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "mollitia";
                                osVersion = "dolorem";
                            }}),
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "culpa";
                                osVersion = "consequuntur";
                            }}),
                            add(new OSPolicyAssignmentInstanceFilterInventory() {{
                                osShortName = "repellat";
                                osVersion = "mollitia";
                            }}),
                        }};
                    }};;
                    name = "Francis Jerde";
                    osPolicies = new org.openapis.openapi.models.shared.OSPolicy[]{{
                        add(new OSPolicy() {{
                            allowNoResourceGroupMatch = false;
                            description = "error";
                            id = "251aa52c-3f5a-4d01-9da1-ffe78f097b00";
                            mode = OSPolicyModeEnum.VALIDATION;
                            resourceGroups = new org.openapis.openapi.models.shared.OSPolicyResourceGroup[]{{
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "dicta";
                                            osVersion = "corporis";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "dolore";
                                            osVersion = "iusto";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "dicta";
                                            osVersion = "harum";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "enim";
                                            osVersion = "accusamus";
                                        }}),
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("quae"),
                                                        add("ipsum"),
                                                        add("quidem"),
                                                        add("molestias"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "excepturi";
                                                            generation = "pariatur";
                                                            object = "modi";
                                                        }};
                                                        localPath = "praesentium";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "rem";
                                                            uri = "https://bronze-trafficker.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "itaque";
                                                    script = "incidunt";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("consequatur"),
                                                        add("est"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quibusdam";
                                                            generation = "explicabo";
                                                            object = "deserunt";
                                                        }};
                                                        localPath = "distinctio";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quibusdam";
                                                            uri = "http://familiar-combination.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "quos";
                                                    script = "perferendis";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "magni";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "assumenda";
                                                        generation = "ipsam";
                                                        object = "alias";
                                                    }};
                                                    localPath = "fugit";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "dolorum";
                                                        uri = "https://far-off-prune.net";
                                                    }};
                                                }};
                                                path = "labore";
                                                permissions = "delectus";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "3c969e9a-3efa-477d-bb14-cd66ae395efb";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Marco Olson";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "sapiente";
                                                            generation = "amet";
                                                            object = "deserunt";
                                                        }};
                                                        localPath = "nisi";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "vel";
                                                            uri = "https://overjoyed-irony.com";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.INSTALLED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Verna Olson";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("natus"),
                                                        add("nobis"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "eum";
                                                            generation = "vero";
                                                            object = "aspernatur";
                                                        }};
                                                        localPath = "architecto";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "magnam";
                                                            uri = "http://nippy-flour.name";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "quos";
                                                            generation = "sint";
                                                            object = "accusantium";
                                                        }};
                                                        localPath = "mollitia";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "reiciendis";
                                                            uri = "https://functional-homeland.biz";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Ms. Fred Hilll";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Frederick Schoen";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("architecto"),
                                                    }};
                                                    distribution = "repudiandae";
                                                    gpgKey = "ullam";
                                                    uri = "https://knobby-zither.org";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Mr. Jenna Stroman";
                                                    url = "natus";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "magni";
                                                    displayName = "sunt";
                                                    gpgKeys = new String[]{{
                                                        add("illum"),
                                                        add("pariatur"),
                                                        add("maxime"),
                                                        add("ea"),
                                                    }};
                                                    id = "92601fb5-76b0-4d5f-8d30-c5fbb2587053";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "eos";
                                                    displayName = "perferendis";
                                                    gpgKeys = new String[]{{
                                                        add("minus"),
                                                    }};
                                                    id = "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("dolorem"),
                                                        add("dolorem"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "dolor";
                                                            generation = "qui";
                                                            object = "ipsum";
                                                        }};
                                                        localPath = "hic";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "excepturi";
                                                            uri = "https://jam-packed-kingdom.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "dolorum";
                                                    script = "numquam";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("ipsa"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "ipsa";
                                                            generation = "iure";
                                                            object = "odio";
                                                        }};
                                                        localPath = "quaerat";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "accusamus";
                                                            uri = "https://witty-gastronomy.name";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "atque";
                                                    script = "sit";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "fugiat";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "ab";
                                                        generation = "soluta";
                                                        object = "dolorum";
                                                    }};
                                                    localPath = "iusto";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "voluptate";
                                                        uri = "https://miserable-octave.org";
                                                    }};
                                                }};
                                                path = "distinctio";
                                                permissions = "asperiores";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "37ae4203-ce5e-46a9-9d8a-0d446ce2af7a";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Tracy Schamberger";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "tempore";
                                                            generation = "accusamus";
                                                            object = "numquam";
                                                        }};
                                                        localPath = "enim";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolorem";
                                                            uri = "https://masculine-introduction.com";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Jane Kassulke";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("quam"),
                                                        add("ipsum"),
                                                        add("incidunt"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "qui";
                                                            generation = "cupiditate";
                                                            object = "maxime";
                                                        }};
                                                        localPath = "pariatur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "soluta";
                                                            uri = "http://quixotic-liquor.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aspernatur";
                                                            generation = "dolores";
                                                            object = "distinctio";
                                                        }};
                                                        localPath = "facilis";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "aliquid";
                                                            uri = "http://nervous-spread.biz";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Beverly Cummerata II";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Terrell Bartell";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB_SRC;
                                                    components = new String[]{{
                                                        add("saepe"),
                                                    }};
                                                    distribution = "ipsum";
                                                    gpgKey = "veritatis";
                                                    uri = "https://mushy-reflection.name";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Dixie Durgan";
                                                    url = "adipisci";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "dolorum";
                                                    displayName = "architecto";
                                                    gpgKeys = new String[]{{
                                                        add("aut"),
                                                    }};
                                                    id = "8e0adcf4-b921-4879-bce9-53f73ef7fbc7";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "similique";
                                                    displayName = "facilis";
                                                    gpgKeys = new String[]{{
                                                        add("ducimus"),
                                                        add("dolore"),
                                                        add("quibusdam"),
                                                        add("illum"),
                                                    }};
                                                    id = "39c0f5d2-cff7-4c70-a456-26d436813f16";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new OSPolicyResourceGroup() {{
                                    inventoryFilters = new org.openapis.openapi.models.shared.OSPolicyInventoryFilter[]{{
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "excepturi";
                                            osVersion = "voluptatibus";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "nostrum";
                                            osVersion = "sapiente";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "quisquam";
                                            osVersion = "saepe";
                                        }}),
                                        add(new OSPolicyInventoryFilter() {{
                                            osShortName = "ea";
                                            osVersion = "impedit";
                                        }}),
                                    }};
                                    resources = new org.openapis.openapi.models.shared.OSPolicyResource[]{{
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("aliquid"),
                                                        add("inventore"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "magnam";
                                                            generation = "ea";
                                                            object = "quo";
                                                        }};
                                                        localPath = "consectetur";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "recusandae";
                                                            uri = "http://general-authentication.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "aut";
                                                    script = "aut";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("impedit"),
                                                        add("aliquam"),
                                                        add("fugit"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "accusamus";
                                                            generation = "inventore";
                                                            object = "non";
                                                        }};
                                                        localPath = "et";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "dolorum";
                                                            uri = "https://striped-deduce.info";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.NONE;
                                                    outputFilePath = "nobis";
                                                    script = "quas";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "assumenda";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "nulla";
                                                        generation = "voluptas";
                                                        object = "libero";
                                                    }};
                                                    localPath = "quasi";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "tempora";
                                                        uri = "http://compassionate-network.com";
                                                    }};
                                                }};
                                                path = "molestiae";
                                                permissions = "magnam";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "4778a7bd-466d-428c-90ab-3cdca4251904";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Roberto Collier";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "esse";
                                                            generation = "recusandae";
                                                            object = "aperiam";
                                                        }};
                                                        localPath = "distinctio";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quod";
                                                            uri = "http://blind-intercourse.name";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.REMOVED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Courtney Mayert";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("deserunt"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "molestiae";
                                                            generation = "accusantium";
                                                            object = "porro";
                                                        }};
                                                        localPath = "eum";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "quas";
                                                            uri = "https://cumbersome-mama.com";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "fuga";
                                                            generation = "mollitia";
                                                            object = "incidunt";
                                                        }};
                                                        localPath = "atque";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "explicabo";
                                                            uri = "http://hospitable-chance.org";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Norma Christiansen";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Carl Koch";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                                    components = new String[]{{
                                                        add("quod"),
                                                        add("nam"),
                                                    }};
                                                    distribution = "vero";
                                                    gpgKey = "aliquid";
                                                    uri = "http://untidy-heterosexual.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Luz McClure";
                                                    url = "eligendi";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "sit";
                                                    displayName = "culpa";
                                                    gpgKeys = new String[]{{
                                                        add("adipisci"),
                                                        add("cumque"),
                                                        add("consequuntur"),
                                                    }};
                                                    id = "0c4f3789-fd87-41f9-9dd2-efd121aa6f1e";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "vel";
                                                    displayName = "in";
                                                    gpgKeys = new String[]{{
                                                        add("libero"),
                                                        add("illum"),
                                                    }};
                                                    id = "b04f1575-6082-4d68-aa19-f1d17051339d";
                                                }};
                                            }};
                                        }}),
                                        add(new OSPolicyResource() {{
                                            exec = new OSPolicyResourceExecResource() {{
                                                enforce = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("rem"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aut";
                                                            generation = "laudantium";
                                                            object = "eum";
                                                        }};
                                                        localPath = "mollitia";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "ab";
                                                            uri = "https://excited-anthropology.biz";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.SHELL;
                                                    outputFilePath = "numquam";
                                                    script = "impedit";
                                                }};
                                                validate = new OSPolicyResourceExecResourceExec() {{
                                                    args = new String[]{{
                                                        add("voluptas"),
                                                    }};
                                                    file = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aut";
                                                            generation = "dignissimos";
                                                            object = "dicta";
                                                        }};
                                                        localPath = "maiores";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "natus";
                                                            uri = "http://winged-gall-bladder.org";
                                                        }};
                                                    }};
                                                    interpreter = OSPolicyResourceExecResourceExecInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                                    outputFilePath = "ea";
                                                    script = "quaerat";
                                                }};
                                            }};
                                            file = new OSPolicyResourceFileResource() {{
                                                content = "consequuntur";
                                                file = new OSPolicyResourceFile() {{
                                                    allowInsecure = false;
                                                    gcs = new OSPolicyResourceFileGcs() {{
                                                        bucket = "repellendus";
                                                        generation = "officia";
                                                        object = "maxime";
                                                    }};
                                                    localPath = "dignissimos";
                                                    remote = new OSPolicyResourceFileRemote() {{
                                                        sha256Checksum = "officia";
                                                        uri = "https://handy-baobab.biz";
                                                    }};
                                                }};
                                                path = "porro";
                                                permissions = "quod";
                                                state = OSPolicyResourceFileResourceStateEnum.PRESENT;
                                            }};
                                            id = "13aa63aa-e8d6-4786-8dbb-675fd5e60b37";
                                            pkg = new OSPolicyResourcePackageResource() {{
                                                apt = new OSPolicyResourcePackageResourceAPT() {{
                                                    name = "Lila Schultz";
                                                }};
                                                deb = new OSPolicyResourcePackageResourceDeb() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "suscipit";
                                                            generation = "reiciendis";
                                                            object = "quidem";
                                                        }};
                                                        localPath = "saepe";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "necessitatibus";
                                                            uri = "http://clever-wreck.biz";
                                                        }};
                                                    }};
                                                }};
                                                desiredState = OSPolicyResourcePackageResourceDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                                                googet = new OSPolicyResourcePackageResourceGooGet() {{
                                                    name = "Heather Kuhn";
                                                }};
                                                msi = new OSPolicyResourcePackageResourceMSI() {{
                                                    properties = new String[]{{
                                                        add("corporis"),
                                                    }};
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "harum";
                                                            generation = "laboriosam";
                                                            object = "ipsa";
                                                        }};
                                                        localPath = "voluptates";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "libero";
                                                            uri = "http://uncomfortable-parable.biz";
                                                        }};
                                                    }};
                                                }};
                                                rpm = new OSPolicyResourcePackageResourceRPM() {{
                                                    pullDeps = false;
                                                    source = new OSPolicyResourceFile() {{
                                                        allowInsecure = false;
                                                        gcs = new OSPolicyResourceFileGcs() {{
                                                            bucket = "aspernatur";
                                                            generation = "voluptas";
                                                            object = "voluptas";
                                                        }};
                                                        localPath = "voluptas";
                                                        remote = new OSPolicyResourceFileRemote() {{
                                                            sha256Checksum = "minima";
                                                            uri = "https://raw-damage.net";
                                                        }};
                                                    }};
                                                }};
                                                yum = new OSPolicyResourcePackageResourceYUM() {{
                                                    name = "Mattie Kirlin";
                                                }};
                                                zypper = new OSPolicyResourcePackageResourceZypper() {{
                                                    name = "Lionel Herman";
                                                }};
                                            }};
                                            repository = new OSPolicyResourceRepositoryResource() {{
                                                apt = new OSPolicyResourceRepositoryResourceAptRepository() {{
                                                    archiveType = OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum.DEB;
                                                    components = new String[]{{
                                                        add("hic"),
                                                        add("nesciunt"),
                                                        add("culpa"),
                                                    }};
                                                    distribution = "corrupti";
                                                    gpgKey = "pariatur";
                                                    uri = "https://wan-fishery.net";
                                                }};
                                                goo = new OSPolicyResourceRepositoryResourceGooRepository() {{
                                                    name = "Luz Cormier";
                                                    url = "asperiores";
                                                }};
                                                yum = new OSPolicyResourceRepositoryResourceYumRepository() {{
                                                    baseUrl = "facilis";
                                                    displayName = "voluptate";
                                                    gpgKeys = new String[]{{
                                                        add("ab"),
                                                        add("iste"),
                                                        add("dolore"),
                                                    }};
                                                    id = "a276b269-16fe-41f0-8f42-94e3698f447f";
                                                }};
                                                zypper = new OSPolicyResourceRepositoryResourceZypperRepository() {{
                                                    baseUrl = "ex";
                                                    displayName = "sit";
                                                    gpgKeys = new String[]{{
                                                        add("officiis"),
                                                    }};
                                                    id = "8b445e80-ca55-4efd-a0e4-57e1858b6a89";
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
                            fixed = 944708;
                            percent = 710529;
                        }};;
                        minWaitDuration = "debitis";
                    }};;
                }};;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "officia";
                key = "dolorum";
                oauthToken = "corrupti";
                osPolicyAssignmentId = "accusamus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "atque";
                uploadProtocol = "fugit";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsCreate(req, new OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity("ut", "fugiat") {{
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

            OsconfigProjectsLocationsOsPolicyAssignmentsListRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "esse";
                key = "ipsam";
                oauthToken = "sit";
                pageSize = 530537L;
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "corporis";
                uploadProtocol = "et";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsListResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsList(req, new OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity("blanditiis", "ex") {{
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

            OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest req = new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest("sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "error";
                key = "consequatur";
                oauthToken = "incidunt";
                pageSize = 968865L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "dicta";
                uploadProtocol = "architecto";
            }};            

            OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse res = sdk.projects.osconfigProjectsLocationsOsPolicyAssignmentsListRevisions(req, new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity("occaecati", "labore") {{
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

## osconfigProjectsPatchDeploymentsCreate

Create an OS Config patch deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsCreateRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsCreateResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AptSettings;
import org.openapis.openapi.models.shared.AptSettingsTypeEnum;
import org.openapis.openapi.models.shared.ExecStep;
import org.openapis.openapi.models.shared.ExecStepConfig;
import org.openapis.openapi.models.shared.ExecStepConfigInterpreterEnum;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.GcsObject;
import org.openapis.openapi.models.shared.MonthlySchedule;
import org.openapis.openapi.models.shared.OneTimeSchedule;
import org.openapis.openapi.models.shared.PatchConfig;
import org.openapis.openapi.models.shared.PatchConfigRebootConfigEnum;
import org.openapis.openapi.models.shared.PatchDeploymentInput;
import org.openapis.openapi.models.shared.PatchInstanceFilter;
import org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel;
import org.openapis.openapi.models.shared.PatchRollout;
import org.openapis.openapi.models.shared.PatchRolloutModeEnum;
import org.openapis.openapi.models.shared.RecurringScheduleFrequencyEnum;
import org.openapis.openapi.models.shared.RecurringScheduleInput;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.WeekDayOfMonth;
import org.openapis.openapi.models.shared.WeekDayOfMonthDayOfWeekEnum;
import org.openapis.openapi.models.shared.WeeklySchedule;
import org.openapis.openapi.models.shared.WeeklyScheduleDayOfWeekEnum;
import org.openapis.openapi.models.shared.WindowsUpdateSettings;
import org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YumSettings;
import org.openapis.openapi.models.shared.ZypperSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsCreateRequest req = new OsconfigProjectsPatchDeploymentsCreateRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                patchDeploymentInput = new PatchDeploymentInput() {{
                    description = "laborum";
                    duration = "nam";
                    instanceFilter = new PatchInstanceFilter() {{
                        all = false;
                        groupLabels = new org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel[]{{
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("alias", "amet");
                                    put("deserunt", "voluptate");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "provident");
                                    put("repellendus", "delectus");
                                    put("voluptates", "perferendis");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quidem", "reprehenderit");
                                    put("facere", "fuga");
                                    put("praesentium", "mollitia");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("voluptatem", "quisquam");
                                    put("repudiandae", "quasi");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("reprehenderit"),
                            add("asperiores"),
                            add("totam"),
                        }};
                        instances = new String[]{{
                            add("quidem"),
                            add("maxime"),
                        }};
                        zones = new String[]{{
                            add("esse"),
                        }};
                    }};;
                    name = "Angelina Jenkins";
                    oneTimeSchedule = new OneTimeSchedule() {{
                        executeTime = "officiis";
                    }};;
                    patchConfig = new PatchConfig() {{
                        apt = new AptSettings() {{
                            excludes = new String[]{{
                                add("accusamus"),
                                add("natus"),
                                add("minima"),
                                add("aspernatur"),
                            }};
                            exclusivePackages = new String[]{{
                                add("maiores"),
                                add("corrupti"),
                            }};
                            type = AptSettingsTypeEnum.UPGRADE;
                        }};;
                        goo = new java.util.HashMap<String, Object>() {{
                            put("blanditiis", "suscipit");
                            put("repudiandae", "atque");
                            put("atque", "sunt");
                        }};
                        migInstancesAllowed = false;
                        postStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(680697),
                                    add(829898),
                                    add(287119),
                                    add(968287),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "doloremque";
                                    generationNumber = "repudiandae";
                                    object = "dicta";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "beatae";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(316488),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "laboriosam";
                                    generationNumber = "velit";
                                    object = "a";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.SHELL;
                                localPath = "magnam";
                            }};;
                        }};;
                        preStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(160467),
                                    add(580107),
                                    add(886305),
                                    add(597937),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "in";
                                    generationNumber = "adipisci";
                                    object = "eveniet";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.SHELL;
                                localPath = "consequuntur";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(661118),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "quis";
                                    generationNumber = "reprehenderit";
                                    object = "error";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "corporis";
                            }};;
                        }};;
                        rebootConfig = PatchConfigRebootConfigEnum.ALWAYS;
                        windowsUpdate = new WindowsUpdateSettings() {{
                            classifications = new org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum[]{{
                                add(WindowsUpdateSettingsClassificationsEnum.SECURITY),
                                add(WindowsUpdateSettingsClassificationsEnum.UPDATE_ROLLUP),
                                add(WindowsUpdateSettingsClassificationsEnum.CLASSIFICATION_UNSPECIFIED),
                                add(WindowsUpdateSettingsClassificationsEnum.DRIVER),
                            }};
                            excludes = new String[]{{
                                add("totam"),
                            }};
                            exclusivePatches = new String[]{{
                                add("molestiae"),
                            }};
                        }};;
                        yum = new YumSettings() {{
                            excludes = new String[]{{
                                add("qui"),
                                add("cum"),
                                add("iure"),
                                add("necessitatibus"),
                            }};
                            exclusivePackages = new String[]{{
                                add("laborum"),
                            }};
                            minimal = false;
                            security = false;
                        }};;
                        zypper = new ZypperSettings() {{
                            categories = new String[]{{
                                add("voluptatum"),
                                add("rem"),
                                add("aliquam"),
                            }};
                            excludes = new String[]{{
                                add("repellat"),
                                add("alias"),
                            }};
                            exclusivePatches = new String[]{{
                                add("perspiciatis"),
                                add("nihil"),
                            }};
                            severities = new String[]{{
                                add("voluptas"),
                                add("alias"),
                                add("maiores"),
                            }};
                            withOptional = false;
                            withUpdate = false;
                        }};;
                    }};;
                    recurringSchedule = new RecurringScheduleInput() {{
                        endTime = "reiciendis";
                        frequency = RecurringScheduleFrequencyEnum.FREQUENCY_UNSPECIFIED;
                        monthly = new MonthlySchedule() {{
                            monthDay = 663866;
                            weekDayOfMonth = new WeekDayOfMonth() {{
                                dayOfWeek = WeekDayOfMonthDayOfWeekEnum.TUESDAY;
                                dayOffset = 293144;
                                weekOrdinal = 680349;
                            }};;
                        }};;
                        startTime = "nesciunt";
                        timeOfDay = new TimeOfDay() {{
                            hours = 63207;
                            minutes = 925703;
                            nanos = 607249;
                            seconds = 309251;
                        }};;
                        timeZone = new TimeZone() {{
                            id = "764a3e86-5e79-456f-9251-a5a9da660ff5";
                            version = "in";
                        }};;
                        weekly = new WeeklySchedule() {{
                            dayOfWeek = WeeklyScheduleDayOfWeekEnum.FRIDAY;
                        }};;
                    }};;
                    rollout = new PatchRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 937636;
                            percent = 637583;
                        }};;
                        mode = PatchRolloutModeEnum.CONCURRENT_ZONES;
                    }};;
                }};;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "molestias";
                key = "officiis";
                oauthToken = "sapiente";
                patchDeploymentId = "cumque";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "rerum";
                uploadProtocol = "tempora";
            }};            

            OsconfigProjectsPatchDeploymentsCreateResponse res = sdk.projects.osconfigProjectsPatchDeploymentsCreate(req, new OsconfigProjectsPatchDeploymentsCreateSecurity("quis", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsDelete

Delete an OS Config patch deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsDeleteRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsDeleteResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsDeleteRequest req = new OsconfigProjectsPatchDeploymentsDeleteRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "aspernatur";
                key = "eum";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "at";
                uploadProtocol = "impedit";
            }};            

            OsconfigProjectsPatchDeploymentsDeleteResponse res = sdk.projects.osconfigProjectsPatchDeploymentsDelete(req, new OsconfigProjectsPatchDeploymentsDeleteSecurity("eos", "sapiente") {{
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

## osconfigProjectsPatchDeploymentsList

Get a page of OS Config patch deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsListRequest req = new OsconfigProjectsPatchDeploymentsListRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "provident";
                key = "earum";
                oauthToken = "soluta";
                pageSize = 940782L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "earum";
                uploadProtocol = "perspiciatis";
            }};            

            OsconfigProjectsPatchDeploymentsListResponse res = sdk.projects.osconfigProjectsPatchDeploymentsList(req, new OsconfigProjectsPatchDeploymentsListSecurity("maiores", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPatchDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsPatch

Update an OS Config patch deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPatchRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPatchResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AptSettings;
import org.openapis.openapi.models.shared.AptSettingsTypeEnum;
import org.openapis.openapi.models.shared.ExecStep;
import org.openapis.openapi.models.shared.ExecStepConfig;
import org.openapis.openapi.models.shared.ExecStepConfigInterpreterEnum;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.GcsObject;
import org.openapis.openapi.models.shared.MonthlySchedule;
import org.openapis.openapi.models.shared.OneTimeSchedule;
import org.openapis.openapi.models.shared.PatchConfig;
import org.openapis.openapi.models.shared.PatchConfigRebootConfigEnum;
import org.openapis.openapi.models.shared.PatchDeploymentInput;
import org.openapis.openapi.models.shared.PatchInstanceFilter;
import org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel;
import org.openapis.openapi.models.shared.PatchRollout;
import org.openapis.openapi.models.shared.PatchRolloutModeEnum;
import org.openapis.openapi.models.shared.RecurringScheduleFrequencyEnum;
import org.openapis.openapi.models.shared.RecurringScheduleInput;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.WeekDayOfMonth;
import org.openapis.openapi.models.shared.WeekDayOfMonthDayOfWeekEnum;
import org.openapis.openapi.models.shared.WeeklySchedule;
import org.openapis.openapi.models.shared.WeeklyScheduleDayOfWeekEnum;
import org.openapis.openapi.models.shared.WindowsUpdateSettings;
import org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YumSettings;
import org.openapis.openapi.models.shared.ZypperSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsPatchRequest req = new OsconfigProjectsPatchDeploymentsPatchRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                patchDeploymentInput = new PatchDeploymentInput() {{
                    description = "suscipit";
                    duration = "dolorem";
                    instanceFilter = new PatchInstanceFilter() {{
                        all = false;
                        groupLabels = new org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel[]{{
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("fuga", "ratione");
                                    put("animi", "necessitatibus");
                                    put("nulla", "consequatur");
                                    put("quasi", "et");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("natus"),
                            add("occaecati"),
                        }};
                        instances = new String[]{{
                            add("adipisci"),
                            add("quasi"),
                        }};
                        zones = new String[]{{
                            add("doloribus"),
                        }};
                    }};;
                    name = "Terence Beer";
                    oneTimeSchedule = new OneTimeSchedule() {{
                        executeTime = "molestiae";
                    }};;
                    patchConfig = new PatchConfig() {{
                        apt = new AptSettings() {{
                            excludes = new String[]{{
                                add("iusto"),
                            }};
                            exclusivePackages = new String[]{{
                                add("praesentium"),
                                add("maiores"),
                            }};
                            type = AptSettingsTypeEnum.UPGRADE;
                        }};;
                        goo = new java.util.HashMap<String, Object>() {{
                            put("architecto", "fugiat");
                            put("doloremque", "dicta");
                        }};
                        migInstancesAllowed = false;
                        postStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(271252),
                                    add(458259),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "ex";
                                    generationNumber = "consectetur";
                                    object = "aliquid";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "laborum";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(344718),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "fugiat";
                                    generationNumber = "expedita";
                                    object = "aliquid";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.SHELL;
                                localPath = "suscipit";
                            }};;
                        }};;
                        preStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(21973),
                                    add(431760),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "voluptas";
                                    generationNumber = "iste";
                                    object = "id";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "error";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(913992),
                                    add(653421),
                                    add(671794),
                                    add(726343),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "ad";
                                    generationNumber = "deleniti";
                                    object = "enim";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "repellendus";
                            }};;
                        }};;
                        rebootConfig = PatchConfigRebootConfigEnum.DEFAULT_;
                        windowsUpdate = new WindowsUpdateSettings() {{
                            classifications = new org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum[]{{
                                add(WindowsUpdateSettingsClassificationsEnum.DRIVER),
                                add(WindowsUpdateSettingsClassificationsEnum.SECURITY),
                                add(WindowsUpdateSettingsClassificationsEnum.DEFINITION),
                                add(WindowsUpdateSettingsClassificationsEnum.TOOL),
                            }};
                            excludes = new String[]{{
                                add("molestias"),
                            }};
                            exclusivePatches = new String[]{{
                                add("aliquid"),
                                add("beatae"),
                                add("voluptatum"),
                            }};
                        }};;
                        yum = new YumSettings() {{
                            excludes = new String[]{{
                                add("veritatis"),
                                add("rerum"),
                                add("est"),
                            }};
                            exclusivePackages = new String[]{{
                                add("voluptatem"),
                                add("sapiente"),
                                add("officiis"),
                            }};
                            minimal = false;
                            security = false;
                        }};;
                        zypper = new ZypperSettings() {{
                            categories = new String[]{{
                                add("fuga"),
                            }};
                            excludes = new String[]{{
                                add("debitis"),
                                add("voluptatem"),
                                add("alias"),
                                add("deleniti"),
                            }};
                            exclusivePatches = new String[]{{
                                add("ex"),
                                add("sapiente"),
                                add("rem"),
                                add("minus"),
                            }};
                            severities = new String[]{{
                                add("asperiores"),
                                add("ratione"),
                            }};
                            withOptional = false;
                            withUpdate = false;
                        }};;
                    }};;
                    recurringSchedule = new RecurringScheduleInput() {{
                        endTime = "ullam";
                        frequency = RecurringScheduleFrequencyEnum.FREQUENCY_UNSPECIFIED;
                        monthly = new MonthlySchedule() {{
                            monthDay = 848341;
                            weekDayOfMonth = new WeekDayOfMonth() {{
                                dayOfWeek = WeekDayOfMonthDayOfWeekEnum.THURSDAY;
                                dayOffset = 770675;
                                weekOrdinal = 842777;
                            }};;
                        }};;
                        startTime = "nam";
                        timeOfDay = new TimeOfDay() {{
                            hours = 373216;
                            minutes = 633415;
                            nanos = 222864;
                            seconds = 307376;
                        }};;
                        timeZone = new TimeZone() {{
                            id = "18143010-4218-413d-9208-ece7e253b668";
                            version = "magnam";
                        }};;
                        weekly = new WeeklySchedule() {{
                            dayOfWeek = WeeklyScheduleDayOfWeekEnum.TUESDAY;
                        }};;
                    }};;
                    rollout = new PatchRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 70410;
                            percent = 781480;
                        }};;
                        mode = PatchRolloutModeEnum.ZONE_BY_ZONE;
                    }};;
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "consequuntur";
                key = "voluptatem";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                updateMask = "quasi";
                uploadType = "nisi";
                uploadProtocol = "at";
            }};            

            OsconfigProjectsPatchDeploymentsPatchResponse res = sdk.projects.osconfigProjectsPatchDeploymentsPatch(req, new OsconfigProjectsPatchDeploymentsPatchSecurity("vero", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsPause

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPauseRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPauseResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsPauseRequest req = new OsconfigProjectsPatchDeploymentsPauseRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("repudiandae", "optio");
                    put("occaecati", "nemo");
                    put("voluptate", "blanditiis");
                    put("officia", "voluptas");
                }};
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "eius";
                key = "aspernatur";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "fuga";
                uploadProtocol = "laudantium";
            }};            

            OsconfigProjectsPatchDeploymentsPauseResponse res = sdk.projects.osconfigProjectsPatchDeploymentsPause(req, new OsconfigProjectsPatchDeploymentsPauseSecurity("incidunt", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsResume

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsResumeRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsResumeResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsResumeRequest req = new OsconfigProjectsPatchDeploymentsResumeRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nisi", "consequuntur");
                }};
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "reiciendis";
                key = "soluta";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "eos";
                uploadProtocol = "occaecati";
            }};            

            OsconfigProjectsPatchDeploymentsResumeResponse res = sdk.projects.osconfigProjectsPatchDeploymentsResume(req, new OsconfigProjectsPatchDeploymentsResumeSecurity("iste", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsCancel

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsCancelRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsCancelResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsCancelRequest req = new OsconfigProjectsPatchJobsCancelRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("voluptatibus", "distinctio");
                    put("omnis", "delectus");
                    put("minima", "praesentium");
                    put("maxime", "magnam");
                }};
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "itaque";
                key = "commodi";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "modi";
                uploadProtocol = "nam";
            }};            

            OsconfigProjectsPatchJobsCancelResponse res = sdk.projects.osconfigProjectsPatchJobsCancel(req, new OsconfigProjectsPatchJobsCancelSecurity("vero", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsExecute

Patch VM instances by creating and running a patch job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsExecuteRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsExecuteResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsExecuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AptSettings;
import org.openapis.openapi.models.shared.AptSettingsTypeEnum;
import org.openapis.openapi.models.shared.ExecStep;
import org.openapis.openapi.models.shared.ExecStepConfig;
import org.openapis.openapi.models.shared.ExecStepConfigInterpreterEnum;
import org.openapis.openapi.models.shared.ExecutePatchJobRequest;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.GcsObject;
import org.openapis.openapi.models.shared.PatchConfig;
import org.openapis.openapi.models.shared.PatchConfigRebootConfigEnum;
import org.openapis.openapi.models.shared.PatchInstanceFilter;
import org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel;
import org.openapis.openapi.models.shared.PatchRollout;
import org.openapis.openapi.models.shared.PatchRolloutModeEnum;
import org.openapis.openapi.models.shared.WindowsUpdateSettings;
import org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YumSettings;
import org.openapis.openapi.models.shared.ZypperSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsExecuteRequest req = new OsconfigProjectsPatchJobsExecuteRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                executePatchJobRequest = new ExecutePatchJobRequest() {{
                    description = "alias";
                    displayName = "quasi";
                    dryRun = false;
                    duration = "non";
                    instanceFilter = new PatchInstanceFilter() {{
                        all = false;
                        groupLabels = new org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel[]{{
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sint", "nulla");
                                    put("deserunt", "esse");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "est");
                                    put("quis", "sint");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("impedit", "hic");
                                    put("necessitatibus", "asperiores");
                                    put("ex", "voluptas");
                                    put("debitis", "delectus");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("minus", "fuga");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("consectetur"),
                            add("velit"),
                            add("atque"),
                        }};
                        instances = new String[]{{
                            add("impedit"),
                        }};
                        zones = new String[]{{
                            add("soluta"),
                        }};
                    }};;
                    patchConfig = new PatchConfig() {{
                        apt = new AptSettings() {{
                            excludes = new String[]{{
                                add("nam"),
                                add("dolore"),
                                add("iusto"),
                                add("voluptate"),
                            }};
                            exclusivePackages = new String[]{{
                                add("dignissimos"),
                            }};
                            type = AptSettingsTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        goo = new java.util.HashMap<String, Object>() {{
                            put("deleniti", "quibusdam");
                            put("iure", "odit");
                            put("voluptatibus", "vel");
                            put("magnam", "quibusdam");
                        }};
                        migInstancesAllowed = false;
                        postStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(818034),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "libero";
                                    generationNumber = "architecto";
                                    object = "voluptatibus";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "porro";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(247045),
                                    add(75359),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "accusantium";
                                    generationNumber = "vel";
                                    object = "ea";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "vero";
                            }};;
                        }};;
                        preStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(431994),
                                    add(246557),
                                    add(284086),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "perspiciatis";
                                    generationNumber = "earum";
                                    object = "dicta";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.POWERSHELL;
                                localPath = "voluptatibus";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(932562),
                                    add(2677),
                                    add(391797),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "itaque";
                                    generationNumber = "velit";
                                    object = "laborum";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.NONE;
                                localPath = "dolor";
                            }};;
                        }};;
                        rebootConfig = PatchConfigRebootConfigEnum.DEFAULT_;
                        windowsUpdate = new WindowsUpdateSettings() {{
                            classifications = new org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum[]{{
                                add(WindowsUpdateSettingsClassificationsEnum.CLASSIFICATION_UNSPECIFIED),
                            }};
                            excludes = new String[]{{
                                add("officia"),
                            }};
                            exclusivePatches = new String[]{{
                                add("ea"),
                                add("quidem"),
                                add("voluptas"),
                                add("facilis"),
                            }};
                        }};;
                        yum = new YumSettings() {{
                            excludes = new String[]{{
                                add("perspiciatis"),
                                add("expedita"),
                                add("deleniti"),
                                add("a"),
                            }};
                            exclusivePackages = new String[]{{
                                add("ullam"),
                                add("unde"),
                            }};
                            minimal = false;
                            security = false;
                        }};;
                        zypper = new ZypperSettings() {{
                            categories = new String[]{{
                                add("animi"),
                                add("impedit"),
                                add("ipsam"),
                                add("corporis"),
                            }};
                            excludes = new String[]{{
                                add("error"),
                                add("esse"),
                                add("labore"),
                            }};
                            exclusivePatches = new String[]{{
                                add("vero"),
                            }};
                            severities = new String[]{{
                                add("vitae"),
                            }};
                            withOptional = false;
                            withUpdate = false;
                        }};;
                    }};;
                    rollout = new PatchRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 81371;
                            percent = 212434;
                        }};;
                        mode = PatchRolloutModeEnum.MODE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "nemo";
                key = "soluta";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "dolorum";
                uploadProtocol = "odio";
            }};            

            OsconfigProjectsPatchJobsExecuteResponse res = sdk.projects.osconfigProjectsPatchJobsExecute(req, new OsconfigProjectsPatchJobsExecuteSecurity("fugit", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsGet

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsGetRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsGetResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsGetSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsGetRequest req = new OsconfigProjectsPatchJobsGetRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "neque";
                key = "exercitationem";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "ipsum";
                uploadProtocol = "unde";
                view = OsconfigProjectsPatchJobsGetViewEnum.FULL;
            }};            

            OsconfigProjectsPatchJobsGetResponse res = sdk.projects.osconfigProjectsPatchJobsGet(req, new OsconfigProjectsPatchJobsGetSecurity("distinctio", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsInstanceDetailsList

Get a list of instance details for a given patch job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsInstanceDetailsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsInstanceDetailsListRequest req = new OsconfigProjectsPatchJobsInstanceDetailsListRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "dicta";
                filter = "id";
                key = "libero";
                oauthToken = "fugiat";
                pageSize = 637462L;
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "sit";
                uploadProtocol = "iusto";
            }};            

            OsconfigProjectsPatchJobsInstanceDetailsListResponse res = sdk.projects.osconfigProjectsPatchJobsInstanceDetailsList(req, new OsconfigProjectsPatchJobsInstanceDetailsListSecurity("ipsa", "voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPatchJobInstanceDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsList

Get a list of patch jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsListRequest req = new OsconfigProjectsPatchJobsListRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "distinctio";
                filter = "voluptatem";
                key = "autem";
                oauthToken = "esse";
                pageSize = 172951L;
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "est";
                uploadProtocol = "facere";
            }};            

            OsconfigProjectsPatchJobsListResponse res = sdk.projects.osconfigProjectsPatchJobsList(req, new OsconfigProjectsPatchJobsListSecurity("corrupti", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPatchJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
