# rootHost

## Overview

Linux hosts and Windows hosts.

### Available Operations

* [bulkRegisterHostAsync](#bulkregisterhostasync) - Register hosts
* [deleteHost](#deletehost) - Delete a registered host
* [discoverNasShares](#discovernasshares) - Discover and return all shares on a NAS host
* [getHost](#gethost) - Get summary information for a host
* [getRbsHostInfo](#getrbshostinfo) - Get the Rubrik Backup Service details for a host
* [hostMakePrimary](#hostmakeprimary) - Make this cluster the primary for agents on a set of hosts
* [queryHost](#queryhost) - Get summary information for hosts
* [queryHostVolume](#queryhostvolume) - Get list of Volume Group volumes
* [rbsInstall](#rbsinstall) - Install Rubrik Backup Service on a host
* [rbsUninstall](#rbsuninstall) - Uninstall Rubrik Backup Service from a host
* [rbsUpgrade](#rbsupgrade) - Upgrade Rubrik Backup Service on a host
* [refreshHost](#refreshhost) - Refresh a host
* [registerHost](#registerhost) - Register a host
* [registerHostAsync](#registerhostasync) - Register a host
* [searchHost](#searchhost) - Search for a file within the host
* [updateCertificateHost](#updatecertificatehost) - Update certificate
* [updateHost](#updatehost) - Modify information for a registered host

## bulkRegisterHostAsync

Register multiple hosts and perform discovery for databases and Microsoft SQL Server instances. When called, this API returns a success message, but completes the host registration in the background. Monitor the status of the background host discovery with the "status" field in GET API on /hosts. The POST API on /hosts can take longer for discovery, depending on the number of hosts on the system. POST on this API can be used instead to perform the discovery in the background and quickly register the host. Doing this requires that you install RBS for Linux and Windows hosts, similar to regular register using POST on /hosts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkRegisterHostAsyncResponse;
import org.openapis.openapi.models.shared.HdfsBaseConfig;
import org.openapis.openapi.models.shared.HdfsHost;
import org.openapis.openapi.models.shared.HostRegister;
import org.openapis.openapi.models.shared.NasConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ex", "aliquid") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.HostRegister[]{{
                add(new HostRegister("et") {{
                    alias = "repellat";
                    hasAgent = false;
                    hdfsConfig = new HdfsBaseConfig(                new org.openapis.openapi.models.shared.HdfsHost[]{{
                                        add(new HdfsHost("eum", 260628) {{
                                            hostname = "barren-allowance.biz";
                                            port = 137251;
                                        }}),
                                        add(new HdfsHost("sapiente", 433279) {{
                                            hostname = "mean-sunrise.net";
                                            port = 179410;
                                        }}),
                                        add(new HdfsHost("provident", 936469) {{
                                            hostname = "circular-expedition.com";
                                            port = 583404;
                                        }}),
                                        add(new HdfsHost("earum", 596211) {{
                                            hostname = "shocking-understanding.org";
                                            port = 52508;
                                        }}),
                                    }}) {{
                        apiToken = "doloribus";
                        hosts = new org.openapis.openapi.models.shared.HdfsHost[]{{
                            add(new HdfsHost("laborum", 813054) {{
                                hostname = "irresponsible-ranger.org";
                                port = 637583;
                            }}),
                            add(new HdfsHost("sapiente", 764562) {{
                                hostname = "fantastic-weekend.name";
                                port = 889794;
                            }}),
                        }};
                        kerberosTicket = "vitae";
                        nameservices = "rerum";
                        username = "Donnie14";
                    }};
                    hostname = "worried-teen.info";
                    isOracleHost = false;
                    nasConfig = new NasConfig("necessitatibus") {{
                        apiCertificate = "porro";
                        apiEndpoint = "suscipit";
                        apiHostname = "dolorem";
                        apiPassword = "fugit";
                        apiToken = "cumque";
                        apiUsername = "fuga";
                        isIsilonChangelistEnabled = false;
                        isNetAppSnapDiffEnabled = false;
                        isShareAutoDiscoveryEnabled = false;
                        vendorType = "ratione";
                        zoneName = "animi";
                    }};
                    oracleQueryUser = "nulla";
                    oracleSysDbaUser = "consequatur";
                    organizationId = "quasi";
                }}),
            }}            

            BulkRegisterHostAsyncResponse res = sdk.rootHost.bulkRegisterHostAsync(req);

            if (res.hostDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHost

Delete host by specifying the host ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHostRequest;
import org.openapis.openapi.models.operations.DeleteHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ducimus", "natus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteHostRequest req = new DeleteHostRequest("occaecati");            

            DeleteHostResponse res = sdk.rootHost.deleteHost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoverNasShares

Discover and return all shares on the identified NAS host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoverNasSharesRequest;
import org.openapis.openapi.models.operations.DiscoverNasSharesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("suscipit", "adipisci") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DiscoverNasSharesRequest req = new DiscoverNasSharesRequest("quasi");            

            DiscoverNasSharesResponse res = sdk.rootHost.discoverNasShares(req);

            if (res.discoveredNasShares != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHost

Retrieve summary information for a registered host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHostRequest;
import org.openapis.openapi.models.operations.GetHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("magni", "doloribus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHostRequest req = new GetHostRequest("nulla");            

            GetHostResponse res = sdk.rootHost.getHost(req);

            if (res.hostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRbsHostInfo

Get the details of the Rubrik Backup Service (RBS) installed on a specific host. Specify the details of the host to check whether RBS is installed on the host or not. If RBS is installed, the response will include the RBS details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRbsHostInfoRequest;
import org.openapis.openapi.models.operations.GetRbsHostInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("necessitatibus", "ipsa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRbsHostInfoRequest req = new GetRbsHostInfoRequest("tempora", "nihil", "molestiae") {{
                operationTimeout = 115834L;
            }};            

            GetRbsHostInfoResponse res = sdk.rootHost.getRbsHostInfo(req);

            if (res.rbsHostSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hostMakePrimary

Migrate the primary cluster with which the agent is able to perform regular operations (backup, restore etc). This can be done on a specified set of hosts or for all hosts that currently have a specified primary cluster for disaster recovery. Specify exactly one of `ids` or `oldPrimaryClusterUuid`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HostMakePrimaryResponse;
import org.openapis.openapi.models.shared.HostMakePrimaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("iusto", "esse") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.HostMakePrimaryRequest req = new HostMakePrimaryRequest() {{
                ids = new String[]{{
                    add("maiores"),
                    add("reiciendis"),
                    add("vel"),
                }};
                oldPrimaryClusterUuid = "architecto";
            }};            

            HostMakePrimaryResponse res = sdk.rootHost.hostMakePrimary(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryHost

Retrieve summary information for all hosts that are registered with a Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryHostOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.QueryHostRequest;
import org.openapis.openapi.models.operations.QueryHostResponse;
import org.openapis.openapi.models.operations.QueryHostSnappableStatusEnum;
import org.openapis.openapi.models.operations.QueryHostSortByEnum;
import org.openapis.openapi.models.operations.QueryHostSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugiat", "doloremque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryHostRequest req = new QueryHostRequest() {{
                hostname = "circular-jumper.biz";
                name = "Carla Feil MD";
                operatingSystem = "sunt";
                operatingSystemType = QueryHostOperatingSystemTypeEnum.NONE;
                primaryClusterId = "fugiat";
                snappableStatus = QueryHostSnappableStatusEnum.PROTECTABLE;
                sortBy = QueryHostSortByEnum.HOSTNAME;
                sortOrder = QueryHostSortOrderEnum.DESC;
            }};            

            QueryHostResponse res = sdk.rootHost.queryHost(req);

            if (res.hostSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryHostVolume

Retrieve summary information for each volume on a specified Volume Group host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryHostVolumeRequest;
import org.openapis.openapi.models.operations.QueryHostVolumeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aliquid", "officia") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryHostVolumeRequest req = new QueryHostVolumeRequest("suscipit");            

            QueryHostVolumeResponse res = sdk.rootHost.queryHostVolume(req);

            if (res.hostVolumeSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rbsInstall

Install Rubrik Backup Service on a host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RbsInstallResponse;
import org.openapis.openapi.models.shared.OperationModeEnum;
import org.openapis.openapi.models.shared.RbsHostOperationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aliquid", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RbsHostOperationRequest req = new RbsHostOperationRequest("eum", "voluptas", "iste") {{
                operationMode = OperationModeEnum.ASYNCHRONOUS;
                operationTimeout = 70042L;
            }};            

            RbsInstallResponse res = sdk.rootHost.rbsInstall(req);

            if (res.rbsHostOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rbsUninstall

Uninstall Rubrik Backup Service from a host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RbsUninstallResponse;
import org.openapis.openapi.models.shared.OperationModeEnum;
import org.openapis.openapi.models.shared.RbsHostOperationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("error", "possimus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RbsHostOperationRequest req = new RbsHostOperationRequest("voluptates", "mollitia", "laborum") {{
                operationMode = OperationModeEnum.ASYNCHRONOUS;
                operationTimeout = 324083L;
            }};            

            RbsUninstallResponse res = sdk.rootHost.rbsUninstall(req);

            if (res.rbsHostOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rbsUpgrade

Upgrade Rubrik Backup Service on a host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RbsUpgradeResponse;
import org.openapis.openapi.models.shared.OperationModeEnum;
import org.openapis.openapi.models.shared.RbsHostOperationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deleniti", "enim") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RbsHostOperationRequest req = new RbsHostOperationRequest("vitae", "repellendus", "ex") {{
                operationMode = OperationModeEnum.ASYNCHRONOUS;
                operationTimeout = 405373L;
            }};            

            RbsUpgradeResponse res = sdk.rootHost.rbsUpgrade(req);

            if (res.rbsHostOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refreshHost

Refresh the properties of a host object when changes on the host are not seen in the Rubrik web UI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefreshHostRequest;
import org.openapis.openapi.models.operations.RefreshHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ut", "ad") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RefreshHostRequest req = new RefreshHostRequest("expedita");            

            RefreshHostResponse res = sdk.rootHost.refreshHost(req);

            if (res.hostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerHost

Register a host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterHostResponse;
import org.openapis.openapi.models.shared.HdfsBaseConfig;
import org.openapis.openapi.models.shared.HdfsHost;
import org.openapis.openapi.models.shared.HostRegister;
import org.openapis.openapi.models.shared.NasConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatem", "molestias") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.HostRegister req = new HostRegister("cum") {{
                alias = "aliquid";
                hasAgent = false;
                hdfsConfig = new HdfsBaseConfig(                new org.openapis.openapi.models.shared.HdfsHost[]{{
                                    add(new HdfsHost("est", 634786) {{
                                        hostname = "messy-occupation.com";
                                        port = 703218;
                                    }}),
                                }}) {{
                    apiToken = "voluptatem";
                    kerberosTicket = "sapiente";
                    nameservices = "officiis";
                    username = "Beatrice_Parker2";
                }};;
                isOracleHost = false;
                nasConfig = new NasConfig("alias") {{
                    apiCertificate = "deleniti";
                    apiEndpoint = "earum";
                    apiHostname = "ex";
                    apiPassword = "sapiente";
                    apiToken = "rem";
                    apiUsername = "minus";
                    isIsilonChangelistEnabled = false;
                    isNetAppSnapDiffEnabled = false;
                    isShareAutoDiscoveryEnabled = false;
                    zoneName = "nemo";
                }};;
                oracleQueryUser = "asperiores";
                oracleSysDbaUser = "ratione";
                organizationId = "ullam";
            }};            

            RegisterHostResponse res = sdk.rootHost.registerHost(req);

            if (res.hostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerHostAsync

Register a host and perform discovery for databases and Microsoft SQL Server instances. When called, this API returns a success message, but completes the host registration in the background. Monitor the status of the background host discovery with the "status" field in GET API on /hosts. The POST API on /hosts can take longer for discovery, depending on the number of hosts on the system. POST on this API can be used instead to perform the discovery in the background and quickly register the host. Doing this requires that you install RBS for Linux and Windows hosts, similar to regular register using POST on /hosts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterHostAsyncResponse;
import org.openapis.openapi.models.shared.HdfsBaseConfig;
import org.openapis.openapi.models.shared.HdfsHost;
import org.openapis.openapi.models.shared.HostRegister;
import org.openapis.openapi.models.shared.NasConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("perferendis", "illum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.HostRegister req = new HostRegister("totam") {{
                alias = "impedit";
                hasAgent = false;
                hdfsConfig = new HdfsBaseConfig(                new org.openapis.openapi.models.shared.HdfsHost[]{{
                                    add(new HdfsHost("aliquam", 80532) {{
                                        hostname = "scaly-future.name";
                                        port = 222864;
                                    }}),
                                    add(new HdfsHost("consequatur", 100014) {{
                                        hostname = "miserly-bite.biz";
                                        port = 221396;
                                    }}),
                                    add(new HdfsHost("laudantium", 65604) {{
                                        hostname = "alert-directory.com";
                                        port = 66149;
                                    }}),
                                    add(new HdfsHost("ipsa", 559682) {{
                                        hostname = "edible-stopsign.info";
                                        port = 162120;
                                    }}),
                                }}) {{
                    apiToken = "eveniet";
                    kerberosTicket = "impedit";
                    nameservices = "officiis";
                    username = "Jaclyn33";
                }};;
                isOracleHost = false;
                nasConfig = new NasConfig("nesciunt") {{
                    apiCertificate = "expedita";
                    apiEndpoint = "eum";
                    apiHostname = "vel";
                    apiPassword = "voluptatum";
                    apiToken = "magnam";
                    apiUsername = "exercitationem";
                    isIsilonChangelistEnabled = false;
                    isNetAppSnapDiffEnabled = false;
                    isShareAutoDiscoveryEnabled = false;
                    zoneName = "ab";
                }};;
                oracleQueryUser = "porro";
                oracleSysDbaUser = "autem";
                organizationId = "nobis";
            }};            

            RegisterHostAsyncResponse res = sdk.rootHost.registerHostAsync(req);

            if (res.hostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchHost

Search for a file within the host. Search via full path prefix or filename prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchHostRequest;
import org.openapis.openapi.models.operations.SearchHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laboriosam", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SearchHostRequest req = new SearchHostRequest("consequuntur", "voluptatem");            

            SearchHostResponse res = sdk.rootHost.searchHost(req);

            if (res.searchResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCertificateHost

Provide an updated certificate for a specified host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCertificateHostRequest;
import org.openapis.openapi.models.operations.UpdateCertificateHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("exercitationem", "necessitatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateCertificateHostRequest req = new UpdateCertificateHostRequest("quasi");            

            UpdateCertificateHostResponse res = sdk.rootHost.updateCertificateHost(req);

            if (res.hostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHost

Change the FQDN and IPv4 address that is assigned to a host object. Enable or disable pre-transfer data compression. Enable or disable change block tracking (CBT) for backups of SQL Server databases on Windows hosts. Enable or disable volume filter driver (VFD) for volume backups on Windows hosts. Set an Oracle user with sysdba privileges to permit Oracle discovery queries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHostRequest;
import org.openapis.openapi.models.operations.UpdateHostResponse;
import org.openapis.openapi.models.shared.HdfsBaseConfig;
import org.openapis.openapi.models.shared.HdfsHost;
import org.openapis.openapi.models.shared.HostUpdate;
import org.openapis.openapi.models.shared.HostVfdInstallConfigEnum;
import org.openapis.openapi.models.shared.MssqlCbtStatusTypeEnum;
import org.openapis.openapi.models.shared.NasConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nisi", "at") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateHostRequest req = new UpdateHostRequest(                new HostUpdate() {{
                                alias = "vero";
                                compressionEnabled = false;
                                hdfsConfig = new HdfsBaseConfig(                new org.openapis.openapi.models.shared.HdfsHost[]{{
                                                    add(new HdfsHost("optio", 579681) {{
                                                        hostname = "remarkable-concern.org";
                                                        port = 918092;
                                                    }}),
                                                    add(new HdfsHost("voluptas", 254025) {{
                                                        hostname = "hairy-inconvenience.name";
                                                        port = 642352;
                                                    }}),
                                                    add(new HdfsHost("ducimus", 200516) {{
                                                        hostname = "hairy-mechanism.biz";
                                                        port = 131903;
                                                    }}),
                                                }}) {{
                                    apiToken = "fuga";
                                    kerberosTicket = "laudantium";
                                    nameservices = "incidunt";
                                    username = "Avis.Leffler39";
                                }};;
                                hostVfdDriverInstalled = false;
                                hostVfdEnabled = HostVfdInstallConfigEnum.ENABLED;
                                hostname = "empty-assembly.name";
                                isOracleHost = false;
                                mssqlCbtDriverInstalled = false;
                                mssqlCbtEnabled = MssqlCbtStatusTypeEnum.DEFAULT_;
                                nasConfig = new NasConfig("soluta") {{
                                    apiCertificate = "alias";
                                    apiEndpoint = "omnis";
                                    apiHostname = "eos";
                                    apiPassword = "occaecati";
                                    apiToken = "iste";
                                    apiUsername = "magni";
                                    isIsilonChangelistEnabled = false;
                                    isNetAppSnapDiffEnabled = false;
                                    isShareAutoDiscoveryEnabled = false;
                                    zoneName = "inventore";
                                }};;
                                oracleQueryUser = "fuga";
                                oracleSysDbaUser = "accusamus";
                            }};, "voluptatibus");            

            UpdateHostResponse res = sdk.rootHost.updateHost(req);

            if (res.hostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
