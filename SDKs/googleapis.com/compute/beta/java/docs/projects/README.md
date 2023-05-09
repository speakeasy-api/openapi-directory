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

            ComputeProjectsDisableXpnHostRequest req = new ComputeProjectsDisableXpnHostRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "impedit";
                key = "hic";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "provident";
                uploadType = "possimus";
                uploadProtocol = "dolorem";
                userIp = "similique";
            }};            

            ComputeProjectsDisableXpnHostResponse res = sdk.projects.computeProjectsDisableXpnHost(req, new ComputeProjectsDisableXpnHostSecurity() {{
                option1 = new ComputeProjectsDisableXpnHostSecurityOption1("commodi", "cupiditate") {{
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

            ComputeProjectsDisableXpnResourceRequest req = new ComputeProjectsDisableXpnResourceRequest("quam") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsDisableXpnResourceRequest = new ProjectsDisableXpnResourceRequest() {{
                    xpnResource = new XpnResourceId() {{
                        id = "371ce361-d2e5-4d73-a795-aa67ac619187";
                        type = XpnResourceIdTypeEnum.PROJECT;
                    }};;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "temporibus";
                fields = "sunt";
                key = "tempore";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "illo";
                uploadType = "optio";
                uploadProtocol = "voluptate";
                userIp = "ab";
            }};            

            ComputeProjectsDisableXpnResourceResponse res = sdk.projects.computeProjectsDisableXpnResource(req, new ComputeProjectsDisableXpnResourceSecurity() {{
                option1 = new ComputeProjectsDisableXpnResourceSecurityOption1("necessitatibus", "ipsam") {{
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

            ComputeProjectsEnableXpnHostRequest req = new ComputeProjectsEnableXpnHostRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "maiores";
                key = "mollitia";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "ad";
                uploadType = "exercitationem";
                uploadProtocol = "hic";
                userIp = "deleniti";
            }};            

            ComputeProjectsEnableXpnHostResponse res = sdk.projects.computeProjectsEnableXpnHost(req, new ComputeProjectsEnableXpnHostSecurity() {{
                option1 = new ComputeProjectsEnableXpnHostSecurityOption1("quod", "illum") {{
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

            ComputeProjectsEnableXpnResourceRequest req = new ComputeProjectsEnableXpnResourceRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                projectsEnableXpnResourceRequest = new ProjectsEnableXpnResourceRequest() {{
                    xpnResource = new XpnResourceId() {{
                        id = "906f4681-6b65-4f2b-9ebb-fc63cca56505";
                        type = XpnResourceIdTypeEnum.PROJECT;
                    }};;
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "a";
                key = "sapiente";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "quia";
                requestId = "occaecati";
                uploadType = "eveniet";
                uploadProtocol = "hic";
                userIp = "numquam";
            }};            

            ComputeProjectsEnableXpnResourceResponse res = sdk.projects.computeProjectsEnableXpnResource(req, new ComputeProjectsEnableXpnResourceSecurity() {{
                option1 = new ComputeProjectsEnableXpnResourceSecurityOption1("sint", "illo") {{
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

            ComputeProjectsGetRequest req = new ComputeProjectsGetRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "ratione";
                fields = "ex";
                key = "explicabo";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "odio";
                uploadProtocol = "iure";
                userIp = "amet";
            }};            

            ComputeProjectsGetResponse res = sdk.projects.computeProjectsGet(req, new ComputeProjectsGetSecurity() {{
                option1 = new ComputeProjectsGetSecurityOption1("voluptatibus", "eos") {{
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

            ComputeProjectsGetXpnHostRequest req = new ComputeProjectsGetXpnHostRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "velit";
                key = "ex";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "earum";
                uploadProtocol = "dicta";
                userIp = "deserunt";
            }};            

            ComputeProjectsGetXpnHostResponse res = sdk.projects.computeProjectsGetXpnHost(req, new ComputeProjectsGetXpnHostSecurity() {{
                option1 = new ComputeProjectsGetXpnHostSecurityOption1("asperiores", "est") {{
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

            ComputeProjectsGetXpnResourcesRequest req = new ComputeProjectsGetXpnResourcesRequest("nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "molestias";
                filter = "necessitatibus";
                key = "accusantium";
                maxResults = 923396L;
                oauthToken = "est";
                orderBy = "vero";
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "qui";
                returnPartialSuccess = false;
                uploadType = "necessitatibus";
                uploadProtocol = "minus";
                userIp = "cumque";
            }};            

            ComputeProjectsGetXpnResourcesResponse res = sdk.projects.computeProjectsGetXpnResources(req, new ComputeProjectsGetXpnResourcesSecurity() {{
                option1 = new ComputeProjectsGetXpnResourcesSecurityOption1("ipsa", "in") {{
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

            ComputeProjectsListXpnHostsRequest req = new ComputeProjectsListXpnHostsRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsListXpnHostsRequest = new ProjectsListXpnHostsRequest() {{
                    organization = "sint";
                }};;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "quos";
                filter = "quas";
                key = "perspiciatis";
                maxResults = 680575L;
                oauthToken = "accusantium";
                orderBy = "rerum";
                pageToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "numquam";
                returnPartialSuccess = false;
                uploadType = "placeat";
                uploadProtocol = "dignissimos";
                userIp = "labore";
            }};            

            ComputeProjectsListXpnHostsResponse res = sdk.projects.computeProjectsListXpnHosts(req, new ComputeProjectsListXpnHostsSecurity() {{
                option1 = new ComputeProjectsListXpnHostsSecurityOption1("exercitationem", "maxime") {{
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

            ComputeProjectsMoveDiskRequest req = new ComputeProjectsMoveDiskRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                diskMoveRequest = new DiskMoveRequest() {{
                    destinationZone = "aperiam";
                    targetDisk = "molestias";
                }};;
                accessToken = "repellat";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "ab";
                key = "vel";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "ab";
                requestId = "recusandae";
                uploadType = "sequi";
                uploadProtocol = "amet";
                userIp = "veritatis";
            }};            

            ComputeProjectsMoveDiskResponse res = sdk.projects.computeProjectsMoveDisk(req, new ComputeProjectsMoveDiskSecurity() {{
                option1 = new ComputeProjectsMoveDiskSecurityOption1("autem", "fugiat") {{
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

            ComputeProjectsMoveInstanceRequest req = new ComputeProjectsMoveInstanceRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceMoveRequest = new InstanceMoveRequest() {{
                    destinationZone = "ducimus";
                    targetInstance = "aperiam";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "maiores";
                key = "repudiandae";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "sequi";
                uploadType = "occaecati";
                uploadProtocol = "culpa";
                userIp = "temporibus";
            }};            

            ComputeProjectsMoveInstanceResponse res = sdk.projects.computeProjectsMoveInstance(req, new ComputeProjectsMoveInstanceSecurity() {{
                option1 = new ComputeProjectsMoveInstanceSecurityOption1("sequi", "repellendus") {{
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

            ComputeProjectsSetCommonInstanceMetadataRequest req = new ComputeProjectsSetCommonInstanceMetadataRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                metadata = new Metadata() {{
                    fingerprint = "illum";
                    items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                        add(new MetadataItems() {{
                            key = "ab";
                            value = "possimus";
                        }}),
                        add(new MetadataItems() {{
                            key = "optio";
                            value = "tempore";
                        }}),
                    }};
                    kind = "dignissimos";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "assumenda";
                key = "iure";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "expedita";
                requestId = "beatae";
                uploadType = "libero";
                uploadProtocol = "officia";
                userIp = "illo";
            }};            

            ComputeProjectsSetCommonInstanceMetadataResponse res = sdk.projects.computeProjectsSetCommonInstanceMetadata(req, new ComputeProjectsSetCommonInstanceMetadataSecurity() {{
                option1 = new ComputeProjectsSetCommonInstanceMetadataSecurityOption1("debitis", "expedita") {{
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

            ComputeProjectsSetDefaultNetworkTierRequest req = new ComputeProjectsSetDefaultNetworkTierRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsSetDefaultNetworkTierRequest = new ProjectsSetDefaultNetworkTierRequest() {{
                    networkTier = ProjectsSetDefaultNetworkTierRequestNetworkTierEnum.FIXED_STANDARD;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "velit";
                key = "voluptatem";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "ad";
                uploadType = "aliquam";
                uploadProtocol = "fugiat";
                userIp = "eum";
            }};            

            ComputeProjectsSetDefaultNetworkTierResponse res = sdk.projects.computeProjectsSetDefaultNetworkTier(req, new ComputeProjectsSetDefaultNetworkTierSecurity() {{
                option1 = new ComputeProjectsSetDefaultNetworkTierSecurityOption1("est", "facilis") {{
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

            ComputeProjectsSetUsageExportBucketRequest req = new ComputeProjectsSetUsageExportBucketRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                usageExportLocation = new UsageExportLocation() {{
                    bucketName = "sed";
                    reportNamePrefix = "iusto";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "non";
                key = "at";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "itaque";
                uploadType = "sint";
                uploadProtocol = "vitae";
                userIp = "sapiente";
            }};            

            ComputeProjectsSetUsageExportBucketResponse res = sdk.projects.computeProjectsSetUsageExportBucket(req, new ComputeProjectsSetUsageExportBucketSecurity() {{
                option1 = new ComputeProjectsSetUsageExportBucketSecurityOption1("dicta", "dignissimos") {{
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
