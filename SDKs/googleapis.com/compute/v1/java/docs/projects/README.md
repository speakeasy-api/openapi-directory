# projects

### Available Operations

* [computeProjectsDisableXpnHost](#computeprojectsdisablexpnhost) - Disable this project as a shared VPC host project.
* [computeProjectsDisableXpnResource](#computeprojectsdisablexpnresource) - Disable a service resource (also known as service project) associated with this host project.
* [computeProjectsEnableXpnHost](#computeprojectsenablexpnhost) - Enable this project as a shared VPC host project.
* [computeProjectsEnableXpnResource](#computeprojectsenablexpnresource) - Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.
* [computeProjectsGet](#computeprojectsget) - Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* [computeProjectsGetXpnHost](#computeprojectsgetxpnhost) - Gets the shared VPC host project that this project links to. May be empty if no link exists.
* [computeProjectsGetXpnResources](#computeprojectsgetxpnresources) - Gets service resources (a.k.a service project) associated with this host project.
* [computeProjectsListXpnHosts](#computeprojectslistxpnhosts) - Lists all shared VPC host projects visible to the user in an organization.
* [computeProjectsMoveDisk](#computeprojectsmovedisk) - Moves a persistent disk from one zone to another.
* [computeProjectsMoveInstance](#computeprojectsmoveinstance) - Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior).
* [computeProjectsSetCommonInstanceMetadata](#computeprojectssetcommoninstancemetadata) - Sets metadata common to all instances within the specified project using the data included in the request.
* [computeProjectsSetDefaultNetworkTier](#computeprojectssetdefaultnetworktier) - Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.
* [computeProjectsSetUsageExportBucket](#computeprojectssetusageexportbucket) - Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.

## computeProjectsDisableXpnHost

Disable this project as a shared VPC host project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnHostRequest;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnHostResponse;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnHostSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnHostSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnHostSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsDisableXpnHostRequest req = new ComputeProjectsDisableXpnHostRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "magnam";
                key = "illum";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "eaque";
                uploadType = "neque";
                uploadProtocol = "nulla";
                userIp = "consequatur";
            }};            

            ComputeProjectsDisableXpnHostResponse res = sdk.projects.computeProjectsDisableXpnHost(req, new ComputeProjectsDisableXpnHostSecurity() {{
                option1 = new ComputeProjectsDisableXpnHostSecurityOption1("quos", "ratione") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsDisableXpnResource

Disable a service resource (also known as service project) associated with this host project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnResourceRequest;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnResourceResponse;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnResourceSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnResourceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsDisableXpnResourceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProjectsDisableXpnResourceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.XpnResourceId;
import org.openapis.openapi.models.shared.XpnResourceIdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsDisableXpnResourceRequest req = new ComputeProjectsDisableXpnResourceRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsDisableXpnResourceRequest = new ProjectsDisableXpnResourceRequest() {{
                    xpnResource = new XpnResourceId() {{
                        id = "c4d070c4-e396-4e56-ac5c-cb16373314da";
                        type = XpnResourceIdTypeEnum.XPN_RESOURCE_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "praesentium";
                key = "error";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "numquam";
                uploadType = "magni";
                uploadProtocol = "officiis";
                userIp = "ad";
            }};            

            ComputeProjectsDisableXpnResourceResponse res = sdk.projects.computeProjectsDisableXpnResource(req, new ComputeProjectsDisableXpnResourceSecurity() {{
                option1 = new ComputeProjectsDisableXpnResourceSecurityOption1("laborum", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsEnableXpnHost

Enable this project as a shared VPC host project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnHostRequest;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnHostResponse;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnHostSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnHostSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnHostSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsEnableXpnHostRequest req = new ComputeProjectsEnableXpnHostRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "pariatur";
                key = "deleniti";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "maxime";
                requestId = "eaque";
                uploadType = "tenetur";
                uploadProtocol = "non";
                userIp = "blanditiis";
            }};            

            ComputeProjectsEnableXpnHostResponse res = sdk.projects.computeProjectsEnableXpnHost(req, new ComputeProjectsEnableXpnHostSecurity() {{
                option1 = new ComputeProjectsEnableXpnHostSecurityOption1("sed", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsEnableXpnResource

Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnResourceRequest;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnResourceResponse;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnResourceSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnResourceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsEnableXpnResourceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProjectsEnableXpnResourceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.XpnResourceId;
import org.openapis.openapi.models.shared.XpnResourceIdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsEnableXpnResourceRequest req = new ComputeProjectsEnableXpnResourceRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsEnableXpnResourceRequest = new ProjectsEnableXpnResourceRequest() {{
                    xpnResource = new XpnResourceId() {{
                        id = "9a53c304-dae1-422f-8bfe-cc41932d704b";
                        type = XpnResourceIdTypeEnum.PROJECT;
                    }};;
                }};;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "eaque";
                key = "sint";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "nulla";
                uploadType = "provident";
                uploadProtocol = "recusandae";
                userIp = "harum";
            }};            

            ComputeProjectsEnableXpnResourceResponse res = sdk.projects.computeProjectsEnableXpnResource(req, new ComputeProjectsEnableXpnResourceSecurity() {{
                option1 = new ComputeProjectsEnableXpnResourceSecurityOption1("nobis", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsGet

Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsGetRequest;
import org.openapis.openapi.models.operations.ComputeProjectsGetResponse;
import org.openapis.openapi.models.operations.ComputeProjectsGetSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeProjectsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsGetRequest req = new ComputeProjectsGetRequest("est") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "asperiores";
                key = "iure";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "ipsa";
                uploadProtocol = "laboriosam";
                userIp = "nemo";
            }};            

            ComputeProjectsGetResponse res = sdk.projects.computeProjectsGet(req, new ComputeProjectsGetSecurity() {{
                option1 = new ComputeProjectsGetSecurityOption1("consequuntur", "earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeProjectsGetXpnHost

Gets the shared VPC host project that this project links to. May be empty if no link exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnHostRequest;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnHostResponse;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnHostSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnHostSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnHostSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsGetXpnHostRequest req = new ComputeProjectsGetXpnHostRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "voluptatibus";
                key = "tempore";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "fuga";
                uploadProtocol = "modi";
                userIp = "vitae";
            }};            

            ComputeProjectsGetXpnHostResponse res = sdk.projects.computeProjectsGetXpnHost(req, new ComputeProjectsGetXpnHostSecurity() {{
                option1 = new ComputeProjectsGetXpnHostSecurityOption1("aliquam", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeProjectsGetXpnResources

Gets service resources (a.k.a service project) associated with this host project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnResourcesRequest;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnResourcesResponse;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnResourcesSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnResourcesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsGetXpnResourcesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsGetXpnResourcesRequest req = new ComputeProjectsGetXpnResourcesRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "iure";
                filter = "dolore";
                key = "cumque";
                maxResults = 61873L;
                oauthToken = "quas";
                orderBy = "officia";
                pageToken = "eos";
                prettyPrint = false;
                quotaUser = "accusamus";
                returnPartialSuccess = false;
                uploadType = "eligendi";
                uploadProtocol = "inventore";
                userIp = "officia";
            }};            

            ComputeProjectsGetXpnResourcesResponse res = sdk.projects.computeProjectsGetXpnResources(req, new ComputeProjectsGetXpnResourcesSecurity() {{
                option1 = new ComputeProjectsGetXpnResourcesSecurityOption1("laudantium", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.projectsGetXpnResources != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeProjectsListXpnHosts

Lists all shared VPC host projects visible to the user in an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsListXpnHostsRequest;
import org.openapis.openapi.models.operations.ComputeProjectsListXpnHostsResponse;
import org.openapis.openapi.models.operations.ComputeProjectsListXpnHostsSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsListXpnHostsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsListXpnHostsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProjectsListXpnHostsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsListXpnHostsRequest req = new ComputeProjectsListXpnHostsRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                projectsListXpnHostsRequest = new ProjectsListXpnHostsRequest() {{
                    organization = "nemo";
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "ullam";
                filter = "incidunt";
                key = "soluta";
                maxResults = 677488L;
                oauthToken = "quae";
                orderBy = "mollitia";
                pageToken = "commodi";
                prettyPrint = false;
                quotaUser = "at";
                returnPartialSuccess = false;
                uploadType = "esse";
                uploadProtocol = "facere";
                userIp = "pariatur";
            }};            

            ComputeProjectsListXpnHostsResponse res = sdk.projects.computeProjectsListXpnHosts(req, new ComputeProjectsListXpnHostsSecurity() {{
                option1 = new ComputeProjectsListXpnHostsSecurityOption1("quisquam", "nesciunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.xpnHostList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeProjectsMoveDisk

Moves a persistent disk from one zone to another.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsMoveDiskRequest;
import org.openapis.openapi.models.operations.ComputeProjectsMoveDiskResponse;
import org.openapis.openapi.models.operations.ComputeProjectsMoveDiskSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsMoveDiskSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsMoveDiskSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DiskMoveRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsMoveDiskRequest req = new ComputeProjectsMoveDiskRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                diskMoveRequest = new DiskMoveRequest() {{
                    destinationZone = "beatae";
                    targetDisk = "nihil";
                }};;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "non";
                key = "porro";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "nemo";
                requestId = "aut";
                uploadType = "aspernatur";
                uploadProtocol = "officia";
                userIp = "omnis";
            }};            

            ComputeProjectsMoveDiskResponse res = sdk.projects.computeProjectsMoveDisk(req, new ComputeProjectsMoveDiskSecurity() {{
                option1 = new ComputeProjectsMoveDiskSecurityOption1("omnis", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsMoveInstance

Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsMoveInstanceRequest;
import org.openapis.openapi.models.operations.ComputeProjectsMoveInstanceResponse;
import org.openapis.openapi.models.operations.ComputeProjectsMoveInstanceSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsMoveInstanceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsMoveInstanceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceMoveRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsMoveInstanceRequest req = new ComputeProjectsMoveInstanceRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceMoveRequest = new InstanceMoveRequest() {{
                    destinationZone = "maiores";
                    targetInstance = "dolore";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "porro";
                key = "est";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "nulla";
                requestId = "reprehenderit";
                uploadType = "odit";
                uploadProtocol = "voluptas";
                userIp = "autem";
            }};            

            ComputeProjectsMoveInstanceResponse res = sdk.projects.computeProjectsMoveInstance(req, new ComputeProjectsMoveInstanceSecurity() {{
                option1 = new ComputeProjectsMoveInstanceSecurityOption1("impedit", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsSetCommonInstanceMetadata

Sets metadata common to all instances within the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsSetCommonInstanceMetadataRequest;
import org.openapis.openapi.models.operations.ComputeProjectsSetCommonInstanceMetadataResponse;
import org.openapis.openapi.models.operations.ComputeProjectsSetCommonInstanceMetadataSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsSetCommonInstanceMetadataSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsSetCommonInstanceMetadataSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.MetadataItems;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsSetCommonInstanceMetadataRequest req = new ComputeProjectsSetCommonInstanceMetadataRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                metadata = new Metadata() {{
                    fingerprint = "non";
                    items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                        add(new MetadataItems() {{
                            key = "inventore";
                            value = "eos";
                        }}),
                        add(new MetadataItems() {{
                            key = "odio";
                            value = "odit";
                        }}),
                        add(new MetadataItems() {{
                            key = "non";
                            value = "officia";
                        }}),
                    }};
                    kind = "fuga";
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "deleniti";
                key = "amet";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "necessitatibus";
                uploadType = "veritatis";
                uploadProtocol = "saepe";
                userIp = "quam";
            }};            

            ComputeProjectsSetCommonInstanceMetadataResponse res = sdk.projects.computeProjectsSetCommonInstanceMetadata(req, new ComputeProjectsSetCommonInstanceMetadataSecurity() {{
                option1 = new ComputeProjectsSetCommonInstanceMetadataSecurityOption1("est", "quidem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsSetDefaultNetworkTier

Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultNetworkTierRequest;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultNetworkTierResponse;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultNetworkTierSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultNetworkTierSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultNetworkTierSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProjectsSetDefaultNetworkTierRequest;
import org.openapis.openapi.models.shared.ProjectsSetDefaultNetworkTierRequestNetworkTierEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsSetDefaultNetworkTierRequest req = new ComputeProjectsSetDefaultNetworkTierRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsSetDefaultNetworkTierRequest = new ProjectsSetDefaultNetworkTierRequest() {{
                    networkTier = ProjectsSetDefaultNetworkTierRequestNetworkTierEnum.FIXED_STANDARD;
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "corporis";
                key = "officiis";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nesciunt";
                requestId = "temporibus";
                uploadType = "facilis";
                uploadProtocol = "deleniti";
                userIp = "rem";
            }};            

            ComputeProjectsSetDefaultNetworkTierResponse res = sdk.projects.computeProjectsSetDefaultNetworkTier(req, new ComputeProjectsSetDefaultNetworkTierSecurity() {{
                option1 = new ComputeProjectsSetDefaultNetworkTierSecurityOption1("tenetur", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeProjectsSetUsageExportBucket

Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketRequest;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketResponse;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketSecurityOption2;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketSecurityOption3;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketSecurityOption4;
import org.openapis.openapi.models.operations.ComputeProjectsSetUsageExportBucketSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UsageExportLocation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsSetUsageExportBucketRequest req = new ComputeProjectsSetUsageExportBucketRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                usageExportLocation = new UsageExportLocation() {{
                    bucketName = "a";
                    reportNamePrefix = "perspiciatis";
                }};;
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "unde";
                key = "delectus";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "et";
                requestId = "perspiciatis";
                uploadType = "qui";
                uploadProtocol = "consequuntur";
                userIp = "repellat";
            }};            

            ComputeProjectsSetUsageExportBucketResponse res = sdk.projects.computeProjectsSetUsageExportBucket(req, new ComputeProjectsSetUsageExportBucketSecurity() {{
                option1 = new ComputeProjectsSetUsageExportBucketSecurityOption1("nihil", "quo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
