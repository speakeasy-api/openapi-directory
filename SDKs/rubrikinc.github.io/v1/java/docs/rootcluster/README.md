# rootCluster

## Overview

Cluster configuration and health.

### Available Operations

* [addKmipServer](#addkmipserver) - Add a KMIP server
* [addSyslogExportRule](#addsyslogexportrule) - Add a new syslog export rule
* [availableVersion](#availableversion) - Retrieve CDM versions available for upgrade
* [changeClusterNodeHostnames](#changeclusternodehostnames) - Change hostname for nodes in a Rubrik cluster
* [deleteKmipServer](#deletekmipserver) - Remove the specified KMIP server
* [deleteSyslogExportRule](#deletesyslogexportrule) - Delete the specified syslog export rule
* [getAsyncRequestStatusForUpgrade](#getasyncrequeststatusforupgrade) - Get asynchronous request details
* [getClusterApiVersion](#getclusterapiversion) - Get cluster REST API version
* [getClusterCertificate](#getclustercertificate) - Get the cluster certificate
* [getClusterNodeHostnames](#getclusternodehostnames) - Get the node ID to hostname mapping for all the nodes in a Rubrik cluster

* [getClusterNodeIds](#getclusternodeids) - Get the name of the nodes in the cluster
* [getClusterVersion](#getclusterversion) - Get cluster software version
* [getCorsConfiguration](#getcorsconfiguration) - Get CORS configuration
* [getEncryptionStatus](#getencryptionstatus) - Get encryption at rest status
* [getFips](#getfips) - Get FIPS enablement status
* [getKmipClient](#getkmipclient) - Get the KMIP client configuration
* [getKmipServer](#getkmipserver) - Get KMIP server information
* [getPeriodicUpgradePrechecksStatus](#getperiodicupgradeprechecksstatus) - Get the result of the latest run of the upgrade prechecks
* [getPublicClusterInfo](#getpublicclusterinfo) - Get cluster details
* [getRubrikSnmpMibDownloadLink](#getrubriksnmpmibdownloadlink) - Get the link for Rubrik SNMP MIB file
* [getSyslogExportRule](#getsyslogexportrule) - Get the specified syslog export rule
* [getSyslogExportRules](#getsyslogexportrules) - Get the configured syslog export rules
* [getSyslogMsgSnmpMibDownloadLink](#getsyslogmsgsnmpmibdownloadlink) - Get the link for SYSLOG-MSG-MIB file
* [getSyslogTcSnmpMibDownloadLink](#getsyslogtcsnmpmibdownloadlink) - Get the link for SYSLOG-TC-MIB file
* [getTotpGlobalSetting](#gettotpglobalsetting) - Get global TOTP setting
* [getTruststores](#gettruststores) - Get summary of all truststores
* [getWebSignedCertificate](#getwebsignedcertificate) - Get the signed certificate for Web server
* [hasRubrikSupportPortalCredentials](#hasrubriksupportportalcredentials) - Check credentials to the Rubrik support portal
* [manualDiscover](#manualdiscover) - Manually discover nodes
* [manualDiscoverIpv4](#manualdiscoveripv4) - Manually discover nodes over IPv4 address
* [monitorEvents](#monitorevents) - Get event notifications
* [patchPasswordRequirements](#patchpasswordrequirements) - Set password requirements
* [queryPasswordRequirements](#querypasswordrequirements) - Get password requirements
* [resetWebSignedCertificate](#resetwebsignedcertificate) - Reset the signed certificate for Web server
* [runPeriodicUpgradePrechecks](#runperiodicupgradeprechecks) - Start an on demand run of the prechecks
* [setKmipClient](#setkmipclient) - Specify KMIP client credentials for nodes
* [setTruststoreCertificate](#settruststorecertificate) - Set certificates for one or more truststores
* [setWebSignedCertificate](#setwebsignedcertificate) - Set a signed certificate for Web server
* [stageCdmSoftware](#stagecdmsoftware) - Stage software on CDM for upgrade
* [testSyslogExportRule](#testsyslogexportrule) - Test the specified syslog export rule
* [unsetTruststoreCertificate](#unsettruststorecertificate) - Remove certificate associated with specified truststore
* [updateCluster](#updatecluster) - Change Rubrik cluster properties
* [updateCorsConfiguration](#updatecorsconfiguration) - Update CORS configuration
* [updateFips](#updatefips) - Update FIPS enablement status
* [updateRubrikSupportPortalCredentials](#updaterubriksupportportalcredentials) - Update credentials to the Rubrik support portal
* [updateSyslogExportRule](#updatesyslogexportrule) - Update the specified syslog export rule
* [updateTotpGlobalSetting](#updatetotpglobalsetting) - Update TOTP global setting

## addKmipServer

Add the specified KMIP server to the set of active KMIP servers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddKmipServerRequest;
import org.openapis.openapi.models.operations.AddKmipServerResponse;
import org.openapis.openapi.models.shared.KmipServerConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolore", "iusto") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            AddKmipServerRequest req = new AddKmipServerRequest(                new KmipServerConfiguration("dicta", "harum") {{
                                serverPort = 317983;
                            }};, "accusamus");            

            AddKmipServerResponse res = sdk.rootCluster.addKmipServer(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addSyslogExportRule

Adds a new rule specifying where to export the specified syslog information.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSyslogExportRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyslogExportRuleFull;
import org.openapis.openapi.models.shared.SyslogFacilityEnum;
import org.openapis.openapi.models.shared.SyslogSeverityEnum;
import org.openapis.openapi.models.shared.TransportLayerProtocolEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("commodi", "repudiandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.SyslogExportRuleFull req = new SyslogExportRuleFull(false, SyslogFacilityEnum.USER, "ipsum", 692472, TransportLayerProtocolEnum.UDP, SyslogSeverityEnum.NOTICE) {{
                certificateId = "pariatur";
            }};            

            AddSyslogExportRuleResponse res = sdk.rootCluster.addSyslogExportRule(req);

            if (res.syslogExportRuleSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## availableVersion

Retrieve a list of Rubrik CDM versions available to upgrade the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvailableVersionRequest;
import org.openapis.openapi.models.operations.AvailableVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("modi", "praesentium") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            AvailableVersionRequest req = new AvailableVersionRequest("rem") {{
                downloadJobInstanceId = "voluptates";
                fetchLinks = false;
                filterUpgradable = false;
                filterVersion = "quasi";
                ignoreDownloading = false;
                ignoreLocal = false;
                ignoreRemote = false;
                showAll = false;
                sourceVersion = "repudiandae";
            }};            

            AvailableVersionResponse res = sdk.rootCluster.availableVersion(req);

            if (res.availableVersionInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeClusterNodeHostnames

Change hostnames for multiple nodes at a time, for a specified Rubrik cluster.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeClusterNodeHostnamesRequest;
import org.openapis.openapi.models.operations.ChangeClusterNodeHostnamesResponse;
import org.openapis.openapi.models.shared.NodeHostnameInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sint", "veritatis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ChangeClusterNodeHostnamesRequest req = new ChangeClusterNodeHostnamesRequest(                new org.openapis.openapi.models.shared.NodeHostnameInfo[]{{
                                add(new NodeHostnameInfo("necessitatibus", "sint") {{
                                    hostname = "feline-eve.com";
                                    id = "ad2abd44-2698-402d-902a-94bb4f63c969";
                                }}),
                                add(new NodeHostnameInfo("natus", "omnis") {{
                                    hostname = "portly-cribbage.org";
                                    id = "fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66";
                                }}),
                                add(new NodeHostnameInfo("doloribus", "debitis") {{
                                    hostname = "lame-alcohol.info";
                                    id = "4ba4469b-6e21-4419-9989-0afa563e2516";
                                }}),
                                add(new NodeHostnameInfo("ipsam", "voluptate") {{
                                    hostname = "failing-silicon.name";
                                    id = "b711e5b7-fd2e-4d02-8921-cddc692601fb";
                                }}),
                            }}, "autem");            

            ChangeClusterNodeHostnamesResponse res = sdk.rootCluster.changeClusterNodeHostnames(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKmipServer

Remove the server with the specified server address from the set of active KMIP servers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKmipServerRequest;
import org.openapis.openapi.models.operations.DeleteKmipServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nam", "eaque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteKmipServerRequest req = new DeleteKmipServerRequest("pariatur", "nemo");            

            DeleteKmipServerResponse res = sdk.rootCluster.deleteKmipServer(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSyslogExportRule

Delete the syslog export rule specified by the given id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyslogExportRuleRequest;
import org.openapis.openapi.models.operations.DeleteSyslogExportRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatibus", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteSyslogExportRuleRequest req = new DeleteSyslogExportRuleRequest("fugiat");            

            DeleteSyslogExportRuleResponse res = sdk.rootCluster.deleteSyslogExportRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAsyncRequestStatusForUpgrade

Get asynchronous request details for an upgrade request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAsyncRequestStatusForUpgradeRequest;
import org.openapis.openapi.models.operations.GetAsyncRequestStatusForUpgradeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("amet", "aut") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAsyncRequestStatusForUpgradeRequest req = new GetAsyncRequestStatusForUpgradeRequest("cumque", "corporis");            

            GetAsyncRequestStatusForUpgradeResponse res = sdk.rootCluster.getAsyncRequestStatusForUpgrade(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterApiVersion

Retrieves software version of the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterApiVersionRequest;
import org.openapis.openapi.models.operations.GetClusterApiVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("hic", "libero") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetClusterApiVersionRequest req = new GetClusterApiVersionRequest("nobis");            

            GetClusterApiVersionResponse res = sdk.rootCluster.getClusterApiVersion(req);

            if (res.clusterApiVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterCertificate

Returns the cluster certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterCertificateRequest;
import org.openapis.openapi.models.operations.GetClusterCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolores", "quis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetClusterCertificateRequest req = new GetClusterCertificateRequest("totam");            

            GetClusterCertificateResponse res = sdk.rootCluster.getClusterCertificate(req);

            if (res.clusterCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterNodeHostnames

Retrieve the ID to hostname mapping for all the nodes that belong to a specified Rubrik cluster.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterNodeHostnamesRequest;
import org.openapis.openapi.models.operations.GetClusterNodeHostnamesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dignissimos", "eaque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetClusterNodeHostnamesRequest req = new GetClusterNodeHostnamesRequest("quis");            

            GetClusterNodeHostnamesResponse res = sdk.rootCluster.getClusterNodeHostnames(req);

            if (res.nodeHostnameInfoListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterNodeIds

Retrieve the list of node IDs for the nodes in this Rubrik CDM cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterNodeIdsRequest;
import org.openapis.openapi.models.operations.GetClusterNodeIdsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nesciunt", "eos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetClusterNodeIdsRequest req = new GetClusterNodeIdsRequest("perferendis");            

            GetClusterNodeIdsResponse res = sdk.rootCluster.getClusterNodeIds(req);

            if (res.nodeIds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterVersion

Retrieves software version of the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterVersionRequest;
import org.openapis.openapi.models.operations.GetClusterVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolores", "minus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetClusterVersionRequest req = new GetClusterVersionRequest("quam");            

            GetClusterVersionResponse res = sdk.rootCluster.getClusterVersion(req);

            if (res.clusterVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorsConfiguration

Get the current CORS support configuration for a web server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorsConfigurationRequest;
import org.openapis.openapi.models.operations.GetCorsConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolor", "vero") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetCorsConfigurationRequest req = new GetCorsConfigurationRequest("nostrum");            

            GetCorsConfigurationResponse res = sdk.rootCluster.getCorsConfiguration(req);

            if (res.corsConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEncryptionStatus

Get the current encryption at rest status of the cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEncryptionStatusRequest;
import org.openapis.openapi.models.operations.GetEncryptionStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("hic", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetEncryptionStatusRequest req = new GetEncryptionStatusRequest("omnis");            

            GetEncryptionStatusResponse res = sdk.rootCluster.getEncryptionStatus(req);

            if (res.encryptionStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFips

Returns the current status of FIPS on the specified cluster. When the status is true, FIPS is enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFipsRequest;
import org.openapis.openapi.models.operations.GetFipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("facilis", "perspiciatis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFipsRequest req = new GetFipsRequest("voluptatem");            

            GetFipsResponse res = sdk.rootCluster.getFips(req);

            if (res.fipsStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKmipClient

Return the currently configured KMIP client information. The response object contains empty fields when KMIP is not configured.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKmipClientRequest;
import org.openapis.openapi.models.operations.GetKmipClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("porro", "consequuntur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetKmipClientRequest req = new GetKmipClientRequest("blanditiis");            

            GetKmipClientResponse res = sdk.rootCluster.getKmipClient(req);

            if (res.kmipClientDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKmipServer

Returns the KMIP server information for the specified server address. When no server address is specified, this call returns information on all active KMIP servers. The response array is empty when KMIP is not configured or when the server address cannot be found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKmipServerRequest;
import org.openapis.openapi.models.operations.GetKmipServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("error", "eaque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetKmipServerRequest req = new GetKmipServerRequest("occaecati") {{
                serverAddress = "rerum";
            }};            

            GetKmipServerResponse res = sdk.rootCluster.getKmipServer(req);

            if (res.kmipServerDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPeriodicUpgradePrechecksStatus

Get the result of the latest run of the upgrade prechecks.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPeriodicUpgradePrechecksStatusRequest;
import org.openapis.openapi.models.operations.GetPeriodicUpgradePrechecksStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("adipisci", "asperiores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPeriodicUpgradePrechecksStatusRequest req = new GetPeriodicUpgradePrechecksStatusRequest("earum") {{
                fetchNextRunInfo = false;
            }};            

            GetPeriodicUpgradePrechecksStatusResponse res = sdk.rootCluster.getPeriodicUpgradePrechecksStatus(req);

            if (res.precheckStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicClusterInfo

Retrieve public information about the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicClusterInfoRequest;
import org.openapis.openapi.models.operations.GetPublicClusterInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("modi", "iste") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPublicClusterInfoRequest req = new GetPublicClusterInfoRequest("dolorum");            

            GetPublicClusterInfoResponse res = sdk.rootCluster.getPublicClusterInfo(req);

            if (res.clusterInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRubrikSnmpMibDownloadLink

Retrieve the download link for the Rubrik SNMP MIB file. The retrieval is a synchronous operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRubrikSnmpMibDownloadLinkRequest;
import org.openapis.openapi.models.operations.GetRubrikSnmpMibDownloadLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deleniti", "pariatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRubrikSnmpMibDownloadLinkRequest req = new GetRubrikSnmpMibDownloadLinkRequest("provident");            

            GetRubrikSnmpMibDownloadLinkResponse res = sdk.rootCluster.getRubrikSnmpMibDownloadLink(req);

            if (res.rubrikMibFileDownloadLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyslogExportRule

Get the summary of the syslog export rule specified by the given id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyslogExportRuleRequest;
import org.openapis.openapi.models.operations.GetSyslogExportRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nobis", "libero") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSyslogExportRuleRequest req = new GetSyslogExportRuleRequest("delectus");            

            GetSyslogExportRuleResponse res = sdk.rootCluster.getSyslogExportRule(req);

            if (res.syslogExportRuleSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyslogExportRules

Return the list of all configured syslog export rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyslogExportRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quaerat", "quos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSyslogExportRulesResponse res = sdk.rootCluster.getSyslogExportRules();

            if (res.syslogExportRuleSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyslogMsgSnmpMibDownloadLink

Retrieve the download link for the SYSLOG-MSG-MIB file. The retrieval is a synchronous operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyslogMsgSnmpMibDownloadLinkRequest;
import org.openapis.openapi.models.operations.GetSyslogMsgSnmpMibDownloadLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aliquid", "dolorem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSyslogMsgSnmpMibDownloadLinkRequest req = new GetSyslogMsgSnmpMibDownloadLinkRequest("dolorem");            

            GetSyslogMsgSnmpMibDownloadLinkResponse res = sdk.rootCluster.getSyslogMsgSnmpMibDownloadLink(req);

            if (res.syslogMsgMibFileDownloadLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyslogTcSnmpMibDownloadLink

Retrieve the download link for the SYSLOG-TC-MIB file. The retrieval is a synchronous operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyslogTcSnmpMibDownloadLinkRequest;
import org.openapis.openapi.models.operations.GetSyslogTcSnmpMibDownloadLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolor", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSyslogTcSnmpMibDownloadLinkRequest req = new GetSyslogTcSnmpMibDownloadLinkRequest("ipsum");            

            GetSyslogTcSnmpMibDownloadLinkResponse res = sdk.rootCluster.getSyslogTcSnmpMibDownloadLink(req);

            if (res.syslogTcMibFileDownloadLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTotpGlobalSetting

Returns TOTP global setting, including whether TOTP is enforced or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTotpGlobalSettingRequest;
import org.openapis.openapi.models.operations.GetTotpGlobalSettingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("hic", "excepturi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetTotpGlobalSettingRequest req = new GetTotpGlobalSettingRequest("cum");            

            GetTotpGlobalSettingResponse res = sdk.rootCluster.getTotpGlobalSetting(req);

            if (res.totpGlobalSetting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruststores

Get summary of all truststores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruststoresRequest;
import org.openapis.openapi.models.operations.GetTruststoresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptate", "dignissimos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetTruststoresRequest req = new GetTruststoresRequest("reiciendis");            

            GetTruststoresResponse res = sdk.rootCluster.getTruststores(req);

            if (res.truststoreSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebSignedCertificate

If the web server uses a signed certificate, fetch it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebSignedCertificateRequest;
import org.openapis.openapi.models.operations.GetWebSignedCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("amet", "dolorum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetWebSignedCertificateRequest req = new GetWebSignedCertificateRequest("numquam");            

            GetWebSignedCertificateResponse res = sdk.rootCluster.getWebSignedCertificate(req);

            if (res.webServerCertificateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hasRubrikSupportPortalCredentials

Check whether the specified Rubrik cluster has an existing set of credentials for the Rubrik support portal.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HasRubrikSupportPortalCredentialsRequest;
import org.openapis.openapi.models.operations.HasRubrikSupportPortalCredentialsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("veritatis", "ipsa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            HasRubrikSupportPortalCredentialsRequest req = new HasRubrikSupportPortalCredentialsRequest("ipsa");            

            HasRubrikSupportPortalCredentialsResponse res = sdk.rootCluster.hasRubrikSupportPortalCredentials(req);

            if (res.booleanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manualDiscover

Manually specifies mDNS discovery data. Output for this endpoint is identical to the output of the 'discover' endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManualDiscoverRequest;
import org.openapis.openapi.models.operations.ManualDiscoverResponse;
import org.openapis.openapi.models.shared.BootstrappableNodeInfoV1;
import org.openapis.openapi.models.shared.ManualDiscoveryNodeInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("iure", "odio") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ManualDiscoverRequest req = new ManualDiscoverRequest(                new ManualDiscoveryNodeInfo(                new org.openapis.openapi.models.shared.BootstrappableNodeInfoV1[]{{
                                                add(new BootstrappableNodeInfoV1("provident", "minima") {{
                                                    hostname = "unaware-profession.org";
                                                    ipv6 = "6928:0d1b:a77a:89eb:f737:ae42:03ce:5e6a";
                                                }}),
                                                add(new BootstrappableNodeInfoV1("deserunt", "quam") {{
                                                    hostname = "sweltering-load.name";
                                                    ipv6 = "0d44:6ce2:af7a:73cf:3be4:53f8:70b3:26b5";
                                                }}),
                                            }});, "ipsum");            

            ManualDiscoverResponse res = sdk.rootCluster.manualDiscover(req);

            if (res.manualDiscoveryNodeInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manualDiscoverIpv4

Manually specifies discovery data. This endpoint output is identical to the output of the 'discover' endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManualDiscoverIpv4Request;
import org.openapis.openapi.models.operations.ManualDiscoverIpv4Response;
import org.openapis.openapi.models.shared.BootstrappableNodeIpv4Info;
import org.openapis.openapi.models.shared.ManualDiscoveryNodeIpv4Info;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("incidunt", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ManualDiscoverIpv4Request req = new ManualDiscoverIpv4Request(                new ManualDiscoveryNodeIpv4Info(                new org.openapis.openapi.models.shared.BootstrappableNodeIpv4Info[]{{
                                                add(new BootstrappableNodeIpv4Info("aspernatur", "dolores") {{
                                                    hostname = "steel-subconscious.net";
                                                    ipv4 = "30.172.132.70";
                                                }}),
                                                add(new BootstrappableNodeIpv4Info("neque", "fugit") {{
                                                    hostname = "sandy-psychoanalyst.info";
                                                    ipv4 = "118.144.215.46";
                                                }}),
                                                add(new BootstrappableNodeIpv4Info("cumque", "soluta") {{
                                                    hostname = "damp-keystone.com";
                                                    ipv4 = "91.184.240.7";
                                                }}),
                                            }});, "nobis");            

            ManualDiscoverIpv4Response res = sdk.rootCluster.manualDiscoverIpv4(req);

            if (res.manualDiscoveryNodeIpv4Info != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitorEvents

Gets notifications about events from a specified set of possible events.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitorEventsRequest;
import org.openapis.openapi.models.operations.MonitorEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("et", "saepe") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            MonitorEventsRequest req = new MonitorEventsRequest(                new String[]{{
                                add("veritatis"),
                            }});            

            MonitorEventsResponse res = sdk.rootCluster.monitorEvents(req);

            if (res.eventNotifications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPasswordRequirements

Update user password requirements for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPasswordRequirementsRequest;
import org.openapis.openapi.models.operations.PatchPasswordRequirementsResponse;
import org.openapis.openapi.models.shared.PasswordRequirementsPatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nobis", "quos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchPasswordRequirementsRequest req = new PatchPasswordRequirementsRequest(                new PasswordRequirementsPatchRequest() {{
                                blockPreviousPasswords = false;
                                clearApiTokens = false;
                                clearWebSessions = false;
                                minLength = 731694;
                                minLowerCase = 584476;
                                minNumerics = 45614;
                                minSpecial = 961937;
                                minUpperCase = 209157;
                                useZxcvbn = false;
                            }};, "dolore");            

            PatchPasswordRequirementsResponse res = sdk.rootCluster.patchPasswordRequirements(req);

            if (res.passwordRequirementsSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryPasswordRequirements

Query user password requirements for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryPasswordRequirementsRequest;
import org.openapis.openapi.models.operations.QueryPasswordRequirementsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("labore", "adipisci") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryPasswordRequirementsRequest req = new QueryPasswordRequirementsRequest("dolorum");            

            QueryPasswordRequirementsResponse res = sdk.rootCluster.queryPasswordRequirements(req);

            if (res.passwordRequirementsSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetWebSignedCertificate

Resetting the customer-given certificate for each node's web server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetWebSignedCertificateRequest;
import org.openapis.openapi.models.operations.ResetWebSignedCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("architecto", "quae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ResetWebSignedCertificateRequest req = new ResetWebSignedCertificateRequest("aut");            

            ResetWebSignedCertificateResponse res = sdk.rootCluster.resetWebSignedCertificate(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runPeriodicUpgradePrechecks

Start an on demand run of the prechecks.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunPeriodicUpgradePrechecksRequest;
import org.openapis.openapi.models.operations.RunPeriodicUpgradePrechecksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quas", "itaque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RunPeriodicUpgradePrechecksRequest req = new RunPeriodicUpgradePrechecksRequest("consequatur");            

            RunPeriodicUpgradePrechecksResponse res = sdk.rootCluster.runPeriodicUpgradePrechecks(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setKmipClient

Specify KMIP client credentials for each of the Rubrik cluster nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetKmipClientRequest;
import org.openapis.openapi.models.operations.SetKmipClientResponse;
import org.openapis.openapi.models.shared.KmipClientConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("est", "repellendus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SetKmipClientRequest req = new SetKmipClientRequest(                new KmipClientConfiguration("porro") {{
                                clientCertificateId = "doloribus";
                                password = "ut";
                            }};, "facilis");            

            SetKmipClientResponse res = sdk.rootCluster.setKmipClient(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTruststoreCertificate

Setting the given certificate for each node's truststores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTruststoreCertificateRequest;
import org.openapis.openapi.models.operations.SetTruststoreCertificateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TruststorePayload;
import org.openapis.openapi.models.shared.TruststoreTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cupiditate", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SetTruststoreCertificateRequest req = new SetTruststoreCertificateRequest(                new org.openapis.openapi.models.shared.TruststorePayload[]{{
                                add(new TruststorePayload(                new String[]{{
                                                    add("omnis"),
                                                    add("quis"),
                                                    add("ipsum"),
                                                    add("delectus"),
                                                }}, TruststoreTypeEnum.SYSTEM) {{
                                    certIds = new String[]{{
                                        add("odio"),
                                        add("occaecati"),
                                        add("voluptatibus"),
                                    }};
                                    truststoreType = TruststoreTypeEnum.GCP;
                                }}),
                            }}, "consectetur");            

            SetTruststoreCertificateResponse res = sdk.rootCluster.setTruststoreCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setWebSignedCertificate

Setting the given certificate for each node's web server to use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetWebSignedCertificateRequest;
import org.openapis.openapi.models.operations.SetWebSignedCertificateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebServerCertificatePayload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vero", "tenetur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SetWebSignedCertificateRequest req = new SetWebSignedCertificateRequest(                new WebServerCertificatePayload("dignissimos");, "hic");            

            SetWebSignedCertificateResponse res = sdk.rootCluster.setWebSignedCertificate(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stageCdmSoftware

Stage software corresponding to a given CDM version on the cluster, in preparation for an upgrade.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StageCdmSoftwareRequest;
import org.openapis.openapi.models.operations.StageCdmSoftwareResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageCdmSoftwareInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("distinctio", "quod") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            StageCdmSoftwareRequest req = new StageCdmSoftwareRequest(                new StageCdmSoftwareInfo("odio", "similique") {{
                                size = 708548L;
                                skipDownload = false;
                                version = "vero";
                            }};, "ducimus");            

            StageCdmSoftwareResponse res = sdk.rootCluster.stageCdmSoftware(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testSyslogExportRule

Send a test message using the syslog export rule specified by the given id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestSyslogExportRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyslogExportRuleFull;
import org.openapis.openapi.models.shared.SyslogFacilityEnum;
import org.openapis.openapi.models.shared.SyslogSeverityEnum;
import org.openapis.openapi.models.shared.TransportLayerProtocolEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolore", "quibusdam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.SyslogExportRuleFull req = new SyslogExportRuleFull(false, SyslogFacilityEnum.RUBRIK_CLI, "sequi", 617877, TransportLayerProtocolEnum.UDP, SyslogSeverityEnum.EMERGENCY) {{
                certificateId = "voluptatibus";
            }};            

            TestSyslogExportRuleResponse res = sdk.rootCluster.testSyslogExportRule(req);

            if (res.syslogServerTestResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsetTruststoreCertificate

Remove certificate associated with specified truststore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsetTruststoreCertificateRequest;
import org.openapis.openapi.models.operations.UnsetTruststoreCertificateResponse;
import org.openapis.openapi.models.operations.UnsetTruststoreCertificateTruststoresEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("exercitationem", "nulla") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UnsetTruststoreCertificateRequest req = new UnsetTruststoreCertificateRequest("fugit",                 new org.openapis.openapi.models.operations.UnsetTruststoreCertificateTruststoresEnum[]{{
                                add(UnsetTruststoreCertificateTruststoresEnum.GCP),
                                add(UnsetTruststoreCertificateTruststoresEnum.GCP),
                                add(UnsetTruststoreCertificateTruststoresEnum.SYSTEM),
                                add(UnsetTruststoreCertificateTruststoresEnum.GCP),
                            }});            

            UnsetTruststoreCertificateResponse res = sdk.rootCluster.unsetTruststoreCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCluster

Change the properties of a specified Rubrik cluster. Changes to cluster name could take upto 10 minutes to be propagated to all nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterRequest;
import org.openapis.openapi.models.operations.UpdateClusterResponse;
import org.openapis.openapi.models.shared.ClusterGeolocation;
import org.openapis.openapi.models.shared.ClusterTimezone;
import org.openapis.openapi.models.shared.ClusterTimezoneTimezoneEnum;
import org.openapis.openapi.models.shared.ClusterUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ducimus", "alias") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateClusterRequest req = new UpdateClusterRequest(                new ClusterUpdate() {{
                                acceptedEulaVersion = "officia";
                                geolocation = new ClusterGeolocation("tempora");;
                                name = "Terri Collins";
                                timezone = new ClusterTimezone(ClusterTimezoneTimezoneEnum.AMERICA_MEXICO_CITY);;
                            }};, "ratione");            

            UpdateClusterResponse res = sdk.rootCluster.updateCluster(req);

            if (res.clusterInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCorsConfiguration

Update the CORS support configuration for a web server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCorsConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateCorsConfigurationResponse;
import org.openapis.openapi.models.shared.CorsConfigurationPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ex", "laudantium") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateCorsConfigurationRequest req = new UpdateCorsConfigurationRequest(                new CorsConfigurationPatch() {{
                                allowedHeaders = "dicta";
                                allowedOrigins = "dolor";
                                isEnabled = false;
                            }};, "maiores");            

            UpdateCorsConfigurationResponse res = sdk.rootCluster.updateCorsConfiguration(req);

            if (res.corsConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFips

Update the current FIPS enablement status for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFipsRequest;
import org.openapis.openapi.models.operations.UpdateFipsResponse;
import org.openapis.openapi.models.shared.FipsStatusPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quasi", "ex") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateFipsRequest req = new UpdateFipsRequest(                new FipsStatusPatch() {{
                                isEnabledInFlight = false;
                            }};, "nulla");            

            UpdateFipsResponse res = sdk.rootCluster.updateFips(req);

            if (res.fipsStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRubrikSupportPortalCredentials

Update credentials for the specified Rubrik cluster to connect to the Rubrik support portal.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRubrikSupportPortalCredentialsRequest;
import org.openapis.openapi.models.operations.UpdateRubrikSupportPortalCredentialsResponse;
import org.openapis.openapi.models.shared.CommunityUserCredentials;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("excepturi", "voluptatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateRubrikSupportPortalCredentialsRequest req = new UpdateRubrikSupportPortalCredentialsRequest(                new CommunityUserCredentials("nostrum", "sapiente");, "quisquam");            

            UpdateRubrikSupportPortalCredentialsResponse res = sdk.rootCluster.updateRubrikSupportPortalCredentials(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyslogExportRule

Update the syslog export rule specified by the given id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyslogExportRuleRequest;
import org.openapis.openapi.models.operations.UpdateSyslogExportRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyslogExportRulePartial;
import org.openapis.openapi.models.shared.SyslogFacilityEnum;
import org.openapis.openapi.models.shared.SyslogSeverityEnum;
import org.openapis.openapi.models.shared.TransportLayerProtocolEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("saepe", "ea") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateSyslogExportRuleRequest req = new UpdateSyslogExportRuleRequest(                new SyslogExportRulePartial() {{
                                certificateId = "impedit";
                                enableTls = false;
                                facility = SyslogFacilityEnum.NEWS;
                                hostname = "glass-gray.com";
                                port = 301831;
                                protocol = TransportLayerProtocolEnum.TCP;
                                severity = SyslogSeverityEnum.INFORMATIONAL;
                            }};, "consectetur");            

            UpdateSyslogExportRuleResponse res = sdk.rootCluster.updateSyslogExportRule(req);

            if (res.syslogExportRuleSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTotpGlobalSetting

Update TOTP global setting, including whether TOTP is enforced or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTotpGlobalSettingRequest;
import org.openapis.openapi.models.operations.UpdateTotpGlobalSettingResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TotpGlobalSettingUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("recusandae", "aspernatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateTotpGlobalSettingRequest req = new UpdateTotpGlobalSettingRequest(                new TotpGlobalSettingUpdate(false);, "minima");            

            UpdateTotpGlobalSettingResponse res = sdk.rootCluster.updateTotpGlobalSetting(req);

            if (res.totpGlobalSetting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
