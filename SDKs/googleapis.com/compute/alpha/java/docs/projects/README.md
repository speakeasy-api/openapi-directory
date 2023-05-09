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
* [computeProjectsSetDefaultServiceAccount](#computeprojectssetdefaultserviceaccount) - Sets the default service account of the project. The default service account is used when a VM instance is created with the service account email address set to "default".
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

            ComputeProjectsDisableXpnHostRequest req = new ComputeProjectsDisableXpnHostRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "aperiam";
                key = "dignissimos";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "quibusdam";
                uploadType = "deserunt";
                uploadProtocol = "praesentium";
                userIp = "corrupti";
            }};            

            ComputeProjectsDisableXpnHostResponse res = sdk.projects.computeProjectsDisableXpnHost(req, new ComputeProjectsDisableXpnHostSecurity() {{
                option1 = new ComputeProjectsDisableXpnHostSecurityOption1("quae", "doloremque") {{
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

            ComputeProjectsDisableXpnResourceRequest req = new ComputeProjectsDisableXpnResourceRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsDisableXpnResourceRequest = new ProjectsDisableXpnResourceRequest() {{
                    xpnResource = new XpnResourceId() {{
                        id = "1807be9c-4d83-4a7b-985b-4647998b0342";
                        type = XpnResourceIdTypeEnum.PROJECT;
                    }};;
                }};;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "quas";
                key = "eum";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "aspernatur";
                uploadType = "ab";
                uploadProtocol = "velit";
                userIp = "minus";
            }};            

            ComputeProjectsDisableXpnResourceResponse res = sdk.projects.computeProjectsDisableXpnResource(req, new ComputeProjectsDisableXpnResourceSecurity() {{
                option1 = new ComputeProjectsDisableXpnResourceSecurityOption1("odio", "veniam") {{
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

            ComputeProjectsEnableXpnHostRequest req = new ComputeProjectsEnableXpnHostRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "dignissimos";
                key = "eligendi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "totam";
                requestId = "optio";
                uploadType = "unde";
                uploadProtocol = "commodi";
                userIp = "facilis";
            }};            

            ComputeProjectsEnableXpnHostResponse res = sdk.projects.computeProjectsEnableXpnHost(req, new ComputeProjectsEnableXpnHostSecurity() {{
                option1 = new ComputeProjectsEnableXpnHostSecurityOption1("quidem", "eos") {{
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

            ComputeProjectsEnableXpnResourceRequest req = new ComputeProjectsEnableXpnResourceRequest("atque") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsEnableXpnResourceRequest = new ProjectsEnableXpnResourceRequest() {{
                    xpnResource = new XpnResourceId() {{
                        id = "d4e1cd35-ecbb-4d97-9b8e-690a9383b239";
                        type = XpnResourceIdTypeEnum.PROJECT;
                    }};;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "illum";
                key = "iste";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "iste";
                uploadType = "ipsam";
                uploadProtocol = "incidunt";
                userIp = "eum";
            }};            

            ComputeProjectsEnableXpnResourceResponse res = sdk.projects.computeProjectsEnableXpnResource(req, new ComputeProjectsEnableXpnResourceSecurity() {{
                option1 = new ComputeProjectsEnableXpnResourceSecurityOption1("voluptate", "cupiditate") {{
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

            ComputeProjectsGetRequest req = new ComputeProjectsGetRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "sequi";
                key = "qui";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "nemo";
                uploadProtocol = "iusto";
                userIp = "earum";
            }};            

            ComputeProjectsGetResponse res = sdk.projects.computeProjectsGet(req, new ComputeProjectsGetSecurity() {{
                option1 = new ComputeProjectsGetSecurityOption1("dicta", "recusandae") {{
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

            ComputeProjectsGetXpnHostRequest req = new ComputeProjectsGetXpnHostRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "nemo";
                key = "atque";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "repellendus";
                uploadProtocol = "aspernatur";
                userIp = "reiciendis";
            }};            

            ComputeProjectsGetXpnHostResponse res = sdk.projects.computeProjectsGetXpnHost(req, new ComputeProjectsGetXpnHostSecurity() {{
                option1 = new ComputeProjectsGetXpnHostSecurityOption1("repudiandae", "facere") {{
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

            ComputeProjectsGetXpnResourcesRequest req = new ComputeProjectsGetXpnResourcesRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "similique";
                filter = "rerum";
                key = "nihil";
                maxResults = 286698L;
                oauthToken = "repudiandae";
                orderBy = "accusantium";
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "error";
                returnPartialSuccess = false;
                uploadType = "atque";
                uploadProtocol = "atque";
                userIp = "maxime";
            }};            

            ComputeProjectsGetXpnResourcesResponse res = sdk.projects.computeProjectsGetXpnResources(req, new ComputeProjectsGetXpnResourcesSecurity() {{
                option1 = new ComputeProjectsGetXpnResourcesSecurityOption1("ipsa", "pariatur") {{
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

            ComputeProjectsListXpnHostsRequest req = new ComputeProjectsListXpnHostsRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsListXpnHostsRequest = new ProjectsListXpnHostsRequest() {{
                    organization = "minima";
                    returnPartialPage = false;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "ullam";
                filter = "quidem";
                key = "molestias";
                maxResults = 195744L;
                oauthToken = "totam";
                orderBy = "dignissimos";
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                returnPartialSuccess = false;
                uploadType = "provident";
                uploadProtocol = "in";
                userIp = "mollitia";
            }};            

            ComputeProjectsListXpnHostsResponse res = sdk.projects.computeProjectsListXpnHosts(req, new ComputeProjectsListXpnHostsSecurity() {{
                option1 = new ComputeProjectsListXpnHostsSecurityOption1("aliquid", "vel") {{
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

            ComputeProjectsMoveDiskRequest req = new ComputeProjectsMoveDiskRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                diskMoveRequest = new DiskMoveRequest() {{
                    destinationZone = "repellat";
                    targetDisk = "nihil";
                }};;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "praesentium";
                key = "vel";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "quod";
                uploadType = "libero";
                uploadProtocol = "consequatur";
                userIp = "aperiam";
            }};            

            ComputeProjectsMoveDiskResponse res = sdk.projects.computeProjectsMoveDisk(req, new ComputeProjectsMoveDiskSecurity() {{
                option1 = new ComputeProjectsMoveDiskSecurityOption1("quos", "dolores") {{
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

            ComputeProjectsMoveInstanceRequest req = new ComputeProjectsMoveInstanceRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceMoveRequest = new InstanceMoveRequest() {{
                    destinationZone = "reiciendis";
                    targetInstance = "non";
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "quis";
                key = "veniam";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "dignissimos";
                requestId = "eveniet";
                uploadType = "officia";
                uploadProtocol = "nam";
                userIp = "tenetur";
            }};            

            ComputeProjectsMoveInstanceResponse res = sdk.projects.computeProjectsMoveInstance(req, new ComputeProjectsMoveInstanceSecurity() {{
                option1 = new ComputeProjectsMoveInstanceSecurityOption1("mollitia", "asperiores") {{
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

            ComputeProjectsSetCommonInstanceMetadataRequest req = new ComputeProjectsSetCommonInstanceMetadataRequest("itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                metadata = new Metadata() {{
                    fingerprint = "repellendus";
                    items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                        add(new MetadataItems() {{
                            key = "fuga";
                            value = "repellat";
                        }}),
                        add(new MetadataItems() {{
                            key = "odio";
                            value = "temporibus";
                        }}),
                        add(new MetadataItems() {{
                            key = "quas";
                            value = "laudantium";
                        }}),
                    }};
                    kind = "ullam";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "incidunt";
                key = "veniam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "minus";
                requestId = "cum";
                uploadType = "nesciunt";
                uploadProtocol = "dolorem";
                userIp = "ducimus";
            }};            

            ComputeProjectsSetCommonInstanceMetadataResponse res = sdk.projects.computeProjectsSetCommonInstanceMetadata(req, new ComputeProjectsSetCommonInstanceMetadataSecurity() {{
                option1 = new ComputeProjectsSetCommonInstanceMetadataSecurityOption1("beatae", "id") {{
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

            ComputeProjectsSetDefaultNetworkTierRequest req = new ComputeProjectsSetDefaultNetworkTierRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                projectsSetDefaultNetworkTierRequest = new ProjectsSetDefaultNetworkTierRequest() {{
                    networkTier = ProjectsSetDefaultNetworkTierRequestNetworkTierEnum.PREMIUM;
                }};;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "ipsum";
                key = "nemo";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "molestias";
                uploadType = "esse";
                uploadProtocol = "esse";
                userIp = "accusantium";
            }};            

            ComputeProjectsSetDefaultNetworkTierResponse res = sdk.projects.computeProjectsSetDefaultNetworkTier(req, new ComputeProjectsSetDefaultNetworkTierSecurity() {{
                option1 = new ComputeProjectsSetDefaultNetworkTierSecurityOption1("natus", "voluptate") {{
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

## computeProjectsSetDefaultServiceAccount

Sets the default service account of the project. The default service account is used when a VM instance is created with the service account email address set to "default".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultServiceAccountRequest;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultServiceAccountResponse;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultServiceAccountSecurity;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultServiceAccountSecurityOption1;
import org.openapis.openapi.models.operations.ComputeProjectsSetDefaultServiceAccountSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProjectsSetDefaultServiceAccountRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeProjectsSetDefaultServiceAccountRequest req = new ComputeProjectsSetDefaultServiceAccountRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                projectsSetDefaultServiceAccountRequest = new ProjectsSetDefaultServiceAccountRequest() {{
                    email = "Lemuel.Pollich86@yahoo.com";
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "voluptatibus";
                key = "ut";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "saepe";
                uploadType = "consequatur";
                uploadProtocol = "atque";
                userIp = "accusantium";
            }};            

            ComputeProjectsSetDefaultServiceAccountResponse res = sdk.projects.computeProjectsSetDefaultServiceAccount(req, new ComputeProjectsSetDefaultServiceAccountSecurity() {{
                option1 = new ComputeProjectsSetDefaultServiceAccountSecurityOption1("placeat", "culpa") {{
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

            ComputeProjectsSetUsageExportBucketRequest req = new ComputeProjectsSetUsageExportBucketRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                usageExportLocation = new UsageExportLocation() {{
                    bucketName = "vitae";
                    reportNamePrefix = "quidem";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "perspiciatis";
                key = "iure";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "minima";
                uploadType = "accusantium";
                uploadProtocol = "blanditiis";
                userIp = "accusantium";
            }};            

            ComputeProjectsSetUsageExportBucketResponse res = sdk.projects.computeProjectsSetUsageExportBucket(req, new ComputeProjectsSetUsageExportBucketSecurity() {{
                option1 = new ComputeProjectsSetUsageExportBucketSecurityOption1("explicabo", "vitae") {{
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
