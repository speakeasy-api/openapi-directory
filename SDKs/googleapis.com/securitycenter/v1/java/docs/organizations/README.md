# organizations

### Available Operations

* [securitycenterOrganizationsAssetsRunDiscovery](#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [securitycenterOrganizationsOperationsCancel](#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [securitycenterOrganizationsSourcesCreate](#securitycenterorganizationssourcescreate) - Creates a source.
* [securitycenterOrganizationsSourcesFindingsCreate](#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [securitycenterOrganizationsSourcesGetIamPolicy](#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesSetIamPolicy](#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesTestIamPermissions](#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

## securitycenterOrganizationsAssetsRunDiscovery

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsRunDiscoveryRequest req = new SecuritycenterOrganizationsAssetsRunDiscoveryRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            SecuritycenterOrganizationsAssetsRunDiscoveryResponse res = sdk.organizations.securitycenterOrganizationsAssetsRunDiscovery(req, new SecuritycenterOrganizationsAssetsRunDiscoverySecurity("at", "at") {{
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

## securitycenterOrganizationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsOperationsCancelRequest req = new SecuritycenterOrganizationsOperationsCancelRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "nam";
                uploadProtocol = "officia";
            }};            

            SecuritycenterOrganizationsOperationsCancelResponse res = sdk.organizations.securitycenterOrganizationsOperationsCancel(req, new SecuritycenterOrganizationsOperationsCancelSecurity("occaecati", "fugit") {{
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

## securitycenterOrganizationsSourcesCreate

Creates a source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesCreateRequest req = new SecuritycenterOrganizationsSourcesCreateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                source = new Source() {{
                    canonicalName = "optio";
                    description = "totam";
                    displayName = "beatae";
                    name = "Tanya Gleason";
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            SecuritycenterOrganizationsSourcesCreateResponse res = sdk.organizations.securitycenterOrganizationsSourcesCreate(req, new SecuritycenterOrganizationsSourcesCreateSecurity("iste", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.source != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesFindingsCreate

Creates a finding. The corresponding source must exist for finding creation to succeed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsCreateSecurity;
import org.openapis.openapi.models.shared.Access;
import org.openapis.openapi.models.shared.AccessReview;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudDlpDataProfile;
import org.openapis.openapi.models.shared.CloudDlpInspection;
import org.openapis.openapi.models.shared.Compliance;
import org.openapis.openapi.models.shared.Connection;
import org.openapis.openapi.models.shared.ConnectionProtocolEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.Cve;
import org.openapis.openapi.models.shared.Cvssv3;
import org.openapis.openapi.models.shared.Cvssv3AttackComplexityEnum;
import org.openapis.openapi.models.shared.Cvssv3AttackVectorEnum;
import org.openapis.openapi.models.shared.Cvssv3AvailabilityImpactEnum;
import org.openapis.openapi.models.shared.Cvssv3ConfidentialityImpactEnum;
import org.openapis.openapi.models.shared.Cvssv3IntegrityImpactEnum;
import org.openapis.openapi.models.shared.Cvssv3PrivilegesRequiredEnum;
import org.openapis.openapi.models.shared.Cvssv3ScopeEnum;
import org.openapis.openapi.models.shared.Cvssv3UserInteractionEnum;
import org.openapis.openapi.models.shared.Database;
import org.openapis.openapi.models.shared.Detection;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.ExfilResource;
import org.openapis.openapi.models.shared.Exfiltration;
import org.openapis.openapi.models.shared.File;
import org.openapis.openapi.models.shared.FindingFindingClassEnum;
import org.openapis.openapi.models.shared.FindingInput;
import org.openapis.openapi.models.shared.FindingMuteEnum;
import org.openapis.openapi.models.shared.FindingSeverityEnum;
import org.openapis.openapi.models.shared.FindingStateEnum;
import org.openapis.openapi.models.shared.Geolocation;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1Binding;
import org.openapis.openapi.models.shared.IamBinding;
import org.openapis.openapi.models.shared.IamBindingActionEnum;
import org.openapis.openapi.models.shared.Indicator;
import org.openapis.openapi.models.shared.KernelRootkit;
import org.openapis.openapi.models.shared.Kubernetes;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.MemoryHashSignature;
import org.openapis.openapi.models.shared.MitreAttack;
import org.openapis.openapi.models.shared.MitreAttackAdditionalTacticsEnum;
import org.openapis.openapi.models.shared.MitreAttackAdditionalTechniquesEnum;
import org.openapis.openapi.models.shared.MitreAttackPrimaryTacticEnum;
import org.openapis.openapi.models.shared.MitreAttackPrimaryTechniquesEnum;
import org.openapis.openapi.models.shared.Node;
import org.openapis.openapi.models.shared.NodePool;
import org.openapis.openapi.models.shared.Pod;
import org.openapis.openapi.models.shared.Process;
import org.openapis.openapi.models.shared.ProcessSignature;
import org.openapis.openapi.models.shared.Reference;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RoleKindEnum;
import org.openapis.openapi.models.shared.SecurityMarks;
import org.openapis.openapi.models.shared.ServiceAccountDelegationInfo;
import org.openapis.openapi.models.shared.Subject;
import org.openapis.openapi.models.shared.SubjectKindEnum;
import org.openapis.openapi.models.shared.Vulnerability;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YaraRuleSignature;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesFindingsCreateRequest req = new SecuritycenterOrganizationsSourcesFindingsCreateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                findingInput = new FindingInput() {{
                    access = new Access() {{
                        callerIp = "hic";
                        callerIpGeo = new Geolocation() {{
                            regionCode = "saepe";
                        }};;
                        methodName = "fuga";
                        principalEmail = "in";
                        principalSubject = "corporis";
                        serviceAccountDelegationInfo = new org.openapis.openapi.models.shared.ServiceAccountDelegationInfo[]{{
                            add(new ServiceAccountDelegationInfo() {{
                                principalEmail = "iure";
                                principalSubject = "saepe";
                            }}),
                            add(new ServiceAccountDelegationInfo() {{
                                principalEmail = "quidem";
                                principalSubject = "architecto";
                            }}),
                            add(new ServiceAccountDelegationInfo() {{
                                principalEmail = "ipsa";
                                principalSubject = "reiciendis";
                            }}),
                        }};
                        serviceAccountKeyName = "est";
                        serviceName = "mollitia";
                        userAgentFamily = "laborum";
                        userName = "Cecilia.Ebert";
                    }};;
                    canonicalName = "nobis";
                    category = "enim";
                    cloudDlpDataProfile = new CloudDlpDataProfile() {{
                        dataProfile = "omnis";
                    }};;
                    cloudDlpInspection = new CloudDlpInspection() {{
                        fullScan = false;
                        infoType = "nemo";
                        infoTypeCount = "minima";
                        inspectJob = "excepturi";
                    }};;
                    compliances = new org.openapis.openapi.models.shared.Compliance[]{{
                        add(new Compliance() {{
                            ids = new String[]{{
                                add("culpa"),
                                add("doloribus"),
                            }};
                            standard = "sapiente";
                            version = "architecto";
                        }}),
                    }};
                    connections = new org.openapis.openapi.models.shared.Connection[]{{
                        add(new Connection() {{
                            destinationIp = "dolorem";
                            destinationPort = 635059;
                            protocol = ConnectionProtocolEnum.PROTOCOL_UNSPECIFIED;
                            sourceIp = "repellat";
                            sourcePort = 653108;
                        }}),
                        add(new Connection() {{
                            destinationIp = "occaecati";
                            destinationPort = 253291;
                            protocol = ConnectionProtocolEnum.TCP;
                            sourceIp = "quam";
                            sourcePort = 474697;
                        }}),
                        add(new Connection() {{
                            destinationIp = "velit";
                            destinationPort = 623510;
                            protocol = ConnectionProtocolEnum.PROTOCOL_UNSPECIFIED;
                            sourceIp = "quis";
                            sourcePort = 110375;
                        }}),
                    }};
                    containers = new org.openapis.openapi.models.shared.Container[]{{
                        add(new Container() {{
                            imageId = "animi";
                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                add(new Label() {{
                                    name = "Angelica Dietrich";
                                    value = "id";
                                }}),
                                add(new Label() {{
                                    name = "Richard Boyer";
                                    value = "laborum";
                                }}),
                            }};
                            name = "Johanna Wolf";
                            uri = "https://witty-avocado.name";
                        }}),
                        add(new Container() {{
                            imageId = "voluptate";
                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                add(new Label() {{
                                    name = "Sharon Kiehn";
                                    value = "dicta";
                                }}),
                                add(new Label() {{
                                    name = "Miss Valerie Kshlerin";
                                    value = "accusamus";
                                }}),
                                add(new Label() {{
                                    name = "Elvira Bergnaum";
                                    value = "molestias";
                                }}),
                            }};
                            name = "Ervin Gleason";
                            uri = "https://bronze-trafficker.name";
                        }}),
                        add(new Container() {{
                            imageId = "veritatis";
                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                add(new Label() {{
                                    name = "Erin Altenwerth";
                                    value = "explicabo";
                                }}),
                                add(new Label() {{
                                    name = "Rudy Spencer";
                                    value = "qui";
                                }}),
                                add(new Label() {{
                                    name = "Mr. Shelly Lueilwitz";
                                    value = "ipsam";
                                }}),
                                add(new Label() {{
                                    name = "Denise Pagac";
                                    value = "facilis";
                                }}),
                            }};
                            name = "Francisco Windler";
                            uri = "https://novel-grandfather.name";
                        }}),
                    }};
                    createTime = "necessitatibus";
                    database = new Database() {{
                        displayName = "sint";
                        grantees = new String[]{{
                            add("dolor"),
                            add("debitis"),
                            add("a"),
                        }};
                        name = "Arnold Kirlin";
                        query = "rerum";
                        userName = "Bettye_Gulgowski41";
                    }};;
                    description = "aliquid";
                    eventTime = "laborum";
                    exfiltration = new Exfiltration() {{
                        sources = new org.openapis.openapi.models.shared.ExfilResource[]{{
                            add(new ExfilResource() {{
                                components = new String[]{{
                                    add("occaecati"),
                                }};
                                name = "Sophia Wintheiser";
                            }}),
                            add(new ExfilResource() {{
                                components = new String[]{{
                                    add("id"),
                                    add("blanditiis"),
                                    add("deleniti"),
                                }};
                                name = "Vincent Nolan";
                            }}),
                            add(new ExfilResource() {{
                                components = new String[]{{
                                    add("omnis"),
                                    add("molestiae"),
                                    add("perferendis"),
                                }};
                                name = "Megan Rau";
                            }}),
                            add(new ExfilResource() {{
                                components = new String[]{{
                                    add("suscipit"),
                                    add("natus"),
                                }};
                                name = "Duane Thiel II";
                            }}),
                        }};
                        targets = new org.openapis.openapi.models.shared.ExfilResource[]{{
                            add(new ExfilResource() {{
                                components = new String[]{{
                                    add("ullam"),
                                    add("provident"),
                                    add("quos"),
                                }};
                                name = "Kenneth O'Hara";
                            }}),
                        }};
                    }};;
                    externalUri = "ad";
                    files = new org.openapis.openapi.models.shared.File[]{{
                        add(new File() {{
                            contents = "dolor";
                            hashedSize = "necessitatibus";
                            partiallyHashed = false;
                            path = "odit";
                            sha256 = "nemo";
                            size = "quasi";
                        }}),
                        add(new File() {{
                            contents = "iure";
                            hashedSize = "doloribus";
                            partiallyHashed = false;
                            path = "debitis";
                            sha256 = "eius";
                            size = "maxime";
                        }}),
                    }};
                    findingClass = FindingFindingClassEnum.MISCONFIGURATION;
                    iamBindings = new org.openapis.openapi.models.shared.IamBinding[]{{
                        add(new IamBinding() {{
                            action = IamBindingActionEnum.ADD;
                            member = "architecto";
                            role = "architecto";
                        }}),
                        add(new IamBinding() {{
                            action = IamBindingActionEnum.REMOVE;
                            member = "ullam";
                            role = "expedita";
                        }}),
                        add(new IamBinding() {{
                            action = IamBindingActionEnum.ADD;
                            member = "repellat";
                            role = "quibusdam";
                        }}),
                    }};
                    indicator = new Indicator() {{
                        domains = new String[]{{
                            add("saepe"),
                        }};
                        ipAddresses = new String[]{{
                            add("accusantium"),
                            add("consequuntur"),
                            add("praesentium"),
                            add("natus"),
                        }};
                        signatures = new org.openapis.openapi.models.shared.ProcessSignature[]{{
                            add(new ProcessSignature() {{
                                memoryHashSignature = new MemoryHashSignature() {{
                                    binaryFamily = "sunt";
                                    detections = new org.openapis.openapi.models.shared.Detection[]{{
                                        add(new Detection() {{
                                            binary = "illum";
                                            percentPagesMatched = 8649.34;
                                        }}),
                                        add(new Detection() {{
                                            binary = "maxime";
                                            percentPagesMatched = 4113.97;
                                        }}),
                                        add(new Detection() {{
                                            binary = "excepturi";
                                            percentPagesMatched = 1399.72;
                                        }}),
                                        add(new Detection() {{
                                            binary = "ea";
                                            percentPagesMatched = 332.22;
                                        }}),
                                    }};
                                }};
                                yaraRuleSignature = new YaraRuleSignature() {{
                                    yaraRule = "ab";
                                }};
                            }}),
                        }};
                        uris = new String[]{{
                            add("quidem"),
                            add("ipsam"),
                            add("voluptate"),
                            add("autem"),
                        }};
                    }};;
                    kernelRootkit = new KernelRootkit() {{
                        name = "Gary Streich";
                        unexpectedCodeModification = false;
                        unexpectedFtraceHandler = false;
                        unexpectedInterruptHandler = false;
                        unexpectedKernelCodePages = false;
                        unexpectedKprobeHandler = false;
                        unexpectedProcessesInRunqueue = false;
                        unexpectedReadOnlyDataModification = false;
                        unexpectedSystemCallHandler = false;
                    }};;
                    kubernetes = new Kubernetes() {{
                        accessReviews = new org.openapis.openapi.models.shared.AccessReview[]{{
                            add(new AccessReview() {{
                                group = "fugiat";
                                name = "Jennifer Runolfsdottir";
                                ns = "libero";
                                resource = "nobis";
                                subresource = "dolores";
                                verb = "quis";
                                version = "totam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1Binding[]{{
                            add(new GoogleCloudSecuritycenterV1Binding() {{
                                name = "Beatrice Dooley Sr.";
                                ns = "minus";
                                role = new Role() {{
                                    kind = RoleKindEnum.ROLE;
                                    name = "Eula Hegmann";
                                    ns = "omnis";
                                }};
                                subjects = new org.openapis.openapi.models.shared.Subject[]{{
                                    add(new Subject() {{
                                        kind = SubjectKindEnum.SERVICEACCOUNT;
                                        name = "Robyn Cruickshank";
                                        ns = "eaque";
                                    }}),
                                    add(new Subject() {{
                                        kind = SubjectKindEnum.SERVICEACCOUNT;
                                        name = "Travis Zemlak";
                                        ns = "iste";
                                    }}),
                                    add(new Subject() {{
                                        kind = SubjectKindEnum.SERVICEACCOUNT;
                                        name = "Ervin McLaughlin";
                                        ns = "delectus";
                                    }}),
                                }};
                            }}),
                            add(new GoogleCloudSecuritycenterV1Binding() {{
                                name = "Billie Jacobi";
                                ns = "dolor";
                                role = new Role() {{
                                    kind = RoleKindEnum.KIND_UNSPECIFIED;
                                    name = "Mindy Marks";
                                    ns = "dignissimos";
                                }};
                                subjects = new org.openapis.openapi.models.shared.Subject[]{{
                                    add(new Subject() {{
                                        kind = SubjectKindEnum.AUTH_TYPE_UNSPECIFIED;
                                        name = "Mr. Bradley Bogan";
                                        ns = "odio";
                                    }}),
                                    add(new Subject() {{
                                        kind = SubjectKindEnum.USER;
                                        name = "Rickey Wolf";
                                        ns = "eos";
                                    }}),
                                    add(new Subject() {{
                                        kind = SubjectKindEnum.SERVICEACCOUNT;
                                        name = "Ginger Bergstrom";
                                        ns = "iusto";
                                    }}),
                                    add(new Subject() {{
                                        kind = SubjectKindEnum.USER;
                                        name = "Alfredo Mohr";
                                        ns = "asperiores";
                                    }}),
                                }};
                            }}),
                        }};
                        nodePools = new org.openapis.openapi.models.shared.NodePool[]{{
                            add(new NodePool() {{
                                name = "Tamara Ondricka";
                                nodes = new org.openapis.openapi.models.shared.Node[]{{
                                    add(new Node() {{
                                        name = "Wendy Rosenbaum";
                                    }}),
                                }};
                            }}),
                            add(new NodePool() {{
                                name = "Sam Oberbrunner";
                                nodes = new org.openapis.openapi.models.shared.Node[]{{
                                    add(new Node() {{
                                        name = "Donnie Abbott";
                                    }}),
                                    add(new Node() {{
                                        name = "Gina Schmeler";
                                    }}),
                                    add(new Node() {{
                                        name = "Randal Klocko";
                                    }}),
                                    add(new Node() {{
                                        name = "Rosalie White";
                                    }}),
                                }};
                            }}),
                        }};
                        nodes = new org.openapis.openapi.models.shared.Node[]{{
                            add(new Node() {{
                                name = "Darlene Effertz";
                            }}),
                            add(new Node() {{
                                name = "Karen Rath";
                            }}),
                            add(new Node() {{
                                name = "Kelli Hintz";
                            }}),
                            add(new Node() {{
                                name = "Amber Dibbert";
                            }}),
                        }};
                        pods = new org.openapis.openapi.models.shared.Pod[]{{
                            add(new Pod() {{
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        imageId = "dicta";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Randall Cole";
                                                value = "facilis";
                                            }}),
                                            add(new Label() {{
                                                name = "Constance Mann";
                                                value = "neque";
                                            }}),
                                            add(new Label() {{
                                                name = "Mrs. Louise Kuhlman";
                                                value = "hic";
                                            }}),
                                        }};
                                        name = "Erma Rogahn PhD";
                                        uri = "http://bony-revolution.name";
                                    }}),
                                    add(new Container() {{
                                        imageId = "tempore";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Dixie Durgan";
                                                value = "adipisci";
                                            }}),
                                            add(new Label() {{
                                                name = "Ms. Joe Berge";
                                                value = "consequatur";
                                            }}),
                                            add(new Label() {{
                                                name = "Marcos Schaden";
                                                value = "facilis";
                                            }}),
                                        }};
                                        name = "Alan Bergnaum";
                                        uri = "https://wobbly-sensitivity.org";
                                    }}),
                                    add(new Container() {{
                                        imageId = "omnis";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Dixie Klocko";
                                                value = "tenetur";
                                            }}),
                                            add(new Label() {{
                                                name = "Darla Rau";
                                                value = "similique";
                                            }}),
                                        }};
                                        name = "Hugo Kuphal";
                                        uri = "https://diligent-otter.net";
                                    }}),
                                }};
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        name = "Greg Stoltenberg";
                                        value = "maiores";
                                    }}),
                                }};
                                name = "Ted Romaguera MD";
                                ns = "tempora";
                            }}),
                            add(new Pod() {{
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        imageId = "ea";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Elena Gulgowski";
                                                value = "laudantium";
                                            }}),
                                        }};
                                        name = "Ms. Cindy Wuckert";
                                        uri = "https://winding-fifth.org";
                                    }}),
                                    add(new Container() {{
                                        imageId = "quisquam";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Krista Herzog";
                                                value = "inventore";
                                            }}),
                                            add(new Label() {{
                                                name = "Rosemary Ryan";
                                                value = "aspernatur";
                                            }}),
                                            add(new Label() {{
                                                name = "Shirley Wilderman Jr.";
                                                value = "deleniti";
                                            }}),
                                            add(new Label() {{
                                                name = "Jim Corkery I";
                                                value = "et";
                                            }}),
                                        }};
                                        name = "Neal Schroeder";
                                        uri = "http://silky-meteorology.net";
                                    }}),
                                }};
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        name = "Jeannette Boyer";
                                        value = "explicabo";
                                    }}),
                                    add(new Label() {{
                                        name = "Jose Kreiger";
                                        value = "eius";
                                    }}),
                                    add(new Label() {{
                                        name = "Tamara Leffler";
                                        value = "quidem";
                                    }}),
                                    add(new Label() {{
                                        name = "Bernard Kerluke";
                                        value = "eos";
                                    }}),
                                }};
                                name = "Miss Devin Bogan";
                                ns = "neque";
                            }}),
                            add(new Pod() {{
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        imageId = "illum";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Herbert Daugherty V";
                                                value = "consequatur";
                                            }}),
                                            add(new Label() {{
                                                name = "Henrietta Hilpert";
                                                value = "quo";
                                            }}),
                                            add(new Label() {{
                                                name = "Sophie Bayer";
                                                value = "dignissimos";
                                            }}),
                                            add(new Label() {{
                                                name = "Jackie Leannon";
                                                value = "odio";
                                            }}),
                                        }};
                                        name = "Leslie Williamson";
                                        uri = "http://anguished-sediment.info";
                                    }}),
                                    add(new Container() {{
                                        imageId = "quas";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Cassandra Considine";
                                                value = "incidunt";
                                            }}),
                                            add(new Label() {{
                                                name = "Roy Hansen";
                                                value = "sapiente";
                                            }}),
                                            add(new Label() {{
                                                name = "Norma Christiansen";
                                                value = "atque";
                                            }}),
                                        }};
                                        name = "Tamara Vandervort IV";
                                        uri = "https://scholarly-swath.info";
                                    }}),
                                    add(new Container() {{
                                        imageId = "quasi";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Opal Kozey";
                                                value = "minima";
                                            }}),
                                            add(new Label() {{
                                                name = "Guillermo Balistreri";
                                                value = "adipisci";
                                            }}),
                                            add(new Label() {{
                                                name = "Carlos Altenwerth";
                                                value = "sapiente";
                                            }}),
                                            add(new Label() {{
                                                name = "Joy Labadie";
                                                value = "nulla";
                                            }}),
                                        }};
                                        name = "Cory Boyle";
                                        uri = "https://total-snuck.com";
                                    }}),
                                    add(new Container() {{
                                        imageId = "eveniet";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Miss Peter Cronin";
                                                value = "aliquid";
                                            }}),
                                            add(new Label() {{
                                                name = "Scott Wehner";
                                                value = "eius";
                                            }}),
                                            add(new Label() {{
                                                name = "Mrs. Gilberto Roberts";
                                                value = "dicta";
                                            }}),
                                            add(new Label() {{
                                                name = "Delores Hermiston IV";
                                                value = "qui";
                                            }}),
                                        }};
                                        name = "Marc Leuschke";
                                        uri = "http://paltry-utensil.com";
                                    }}),
                                }};
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        name = "Allison Bednar I";
                                        value = "adipisci";
                                    }}),
                                    add(new Label() {{
                                        name = "Lionel Bartoletti IV";
                                        value = "eum";
                                    }}),
                                    add(new Label() {{
                                        name = "Andrew Little I";
                                        value = "occaecati";
                                    }}),
                                    add(new Label() {{
                                        name = "Leticia Christiansen IV";
                                        value = "dicta";
                                    }}),
                                }};
                                name = "Wendell Frami";
                                ns = "asperiores";
                            }}),
                            add(new Pod() {{
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        imageId = "ea";
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                name = "Kari Nikolaus";
                                                value = "officia";
                                            }}),
                                            add(new Label() {{
                                                name = "Vernon Bergnaum";
                                                value = "quod";
                                            }}),
                                        }};
                                        name = "Kathleen Flatley";
                                        uri = "http://everlasting-parking.name";
                                    }}),
                                }};
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        name = "Nicolas Kassulke";
                                        value = "vel";
                                    }}),
                                    add(new Label() {{
                                        name = "Elena Quigley";
                                        value = "in";
                                    }}),
                                    add(new Label() {{
                                        name = "Lela Shields";
                                        value = "aliquid";
                                    }}),
                                    add(new Label() {{
                                        name = "Karla Feest";
                                        value = "earum";
                                    }}),
                                }};
                                name = "Jesus Yost";
                                ns = "quidem";
                            }}),
                        }};
                        roles = new org.openapis.openapi.models.shared.Role[]{{
                            add(new Role() {{
                                kind = RoleKindEnum.CLUSTER_ROLE;
                                name = "Katherine Zemlak";
                                ns = "amet";
                            }}),
                            add(new Role() {{
                                kind = RoleKindEnum.KIND_UNSPECIFIED;
                                name = "Lorene Toy";
                                ns = "harum";
                            }}),
                            add(new Role() {{
                                kind = RoleKindEnum.ROLE;
                                name = "Dr. Silvia Renner";
                                ns = "tempora";
                            }}),
                            add(new Role() {{
                                kind = RoleKindEnum.KIND_UNSPECIFIED;
                                name = "Melanie Hirthe";
                                ns = "dolorum";
                            }}),
                        }};
                    }};;
                    mitreAttack = new MitreAttack() {{
                        additionalTactics = new org.openapis.openapi.models.shared.MitreAttackAdditionalTacticsEnum[]{{
                            add(MitreAttackAdditionalTacticsEnum.COLLECTION),
                        }};
                        additionalTechniques = new org.openapis.openapi.models.shared.MitreAttackAdditionalTechniquesEnum[]{{
                            add(MitreAttackAdditionalTechniquesEnum.PERMISSION_GROUPS_DISCOVERY),
                        }};
                        primaryTactic = MitreAttackPrimaryTacticEnum.PRIVILEGE_ESCALATION;
                        primaryTechniques = new org.openapis.openapi.models.shared.MitreAttackPrimaryTechniquesEnum[]{{
                            add(MitreAttackPrimaryTechniquesEnum.EXTERNAL_PROXY),
                            add(MitreAttackPrimaryTechniquesEnum.IMPAIR_DEFENSES),
                        }};
                        version = "temporibus";
                    }};;
                    moduleName = "ullam";
                    mute = FindingMuteEnum.MUTE_UNSPECIFIED;
                    muteInitiator = "cum";
                    name = "Morris Weissnat";
                    nextSteps = "corrupti";
                    parent = "pariatur";
                    processes = new org.openapis.openapi.models.shared.Process[]{{
                        add(new Process() {{
                            args = new String[]{{
                                add("exercitationem"),
                                add("nobis"),
                                add("sit"),
                                add("rerum"),
                            }};
                            argumentsTruncated = false;
                            binary = new File() {{
                                contents = "sed";
                                hashedSize = "reiciendis";
                                partiallyHashed = false;
                                path = "explicabo";
                                sha256 = "asperiores";
                                size = "facilis";
                            }};
                            envVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                add(new EnvironmentVariable() {{
                                    name = "Raymond Moore";
                                    val = "sed";
                                }}),
                                add(new EnvironmentVariable() {{
                                    name = "Tonya Predovic";
                                    val = "unde";
                                }}),
                            }};
                            envVariablesTruncated = false;
                            libraries = new org.openapis.openapi.models.shared.File[]{{
                                add(new File() {{
                                    contents = "suscipit";
                                    hashedSize = "sapiente";
                                    partiallyHashed = false;
                                    path = "debitis";
                                    sha256 = "illo";
                                    size = "reiciendis";
                                }}),
                            }};
                            name = "Naomi Wuckert";
                            parentPid = "provident";
                            pid = "eius";
                            script = new File() {{
                                contents = "necessitatibus";
                                hashedSize = "ipsum";
                                partiallyHashed = false;
                                path = "ea";
                                sha256 = "occaecati";
                                size = "quos";
                            }};
                        }}),
                        add(new Process() {{
                            args = new String[]{{
                                add("tempora"),
                                add("tempora"),
                                add("voluptate"),
                                add("reiciendis"),
                            }};
                            argumentsTruncated = false;
                            binary = new File() {{
                                contents = "ex";
                                hashedSize = "sit";
                                partiallyHashed = false;
                                path = "non";
                                sha256 = "officiis";
                                size = "praesentium";
                            }};
                            envVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                add(new EnvironmentVariable() {{
                                    name = "Amber Hintz";
                                    val = "sit";
                                }}),
                                add(new EnvironmentVariable() {{
                                    name = "Julius Hartmann";
                                    val = "reiciendis";
                                }}),
                                add(new EnvironmentVariable() {{
                                    name = "Martin Beatty";
                                    val = "veniam";
                                }}),
                            }};
                            envVariablesTruncated = false;
                            libraries = new org.openapis.openapi.models.shared.File[]{{
                                add(new File() {{
                                    contents = "officiis";
                                    hashedSize = "beatae";
                                    partiallyHashed = false;
                                    path = "laudantium";
                                    sha256 = "exercitationem";
                                    size = "praesentium";
                                }}),
                                add(new File() {{
                                    contents = "cum";
                                    hashedSize = "laboriosam";
                                    partiallyHashed = false;
                                    path = "dolorum";
                                    sha256 = "voluptatum";
                                    size = "error";
                                }}),
                            }};
                            name = "Rudolph Trantow";
                            parentPid = "nostrum";
                            pid = "officia";
                            script = new File() {{
                                contents = "dolorum";
                                hashedSize = "corrupti";
                                partiallyHashed = false;
                                path = "accusamus";
                                sha256 = "tempora";
                                size = "atque";
                            }};
                        }}),
                        add(new Process() {{
                            args = new String[]{{
                                add("ut"),
                            }};
                            argumentsTruncated = false;
                            binary = new File() {{
                                contents = "fugiat";
                                hashedSize = "voluptatem";
                                partiallyHashed = false;
                                path = "culpa";
                                sha256 = "expedita";
                                size = "magnam";
                            }};
                            envVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                add(new EnvironmentVariable() {{
                                    name = "Brittany Bailey";
                                    val = "repudiandae";
                                }}),
                            }};
                            envVariablesTruncated = false;
                            libraries = new org.openapis.openapi.models.shared.File[]{{
                                add(new File() {{
                                    contents = "et";
                                    hashedSize = "blanditiis";
                                    partiallyHashed = false;
                                    path = "ex";
                                    sha256 = "sed";
                                    size = "sit";
                                }}),
                                add(new File() {{
                                    contents = "vel";
                                    hashedSize = "nostrum";
                                    partiallyHashed = false;
                                    path = "saepe";
                                    sha256 = "error";
                                    size = "consequatur";
                                }}),
                            }};
                            name = "Lela Ebert Sr.";
                            parentPid = "occaecati";
                            pid = "labore";
                            script = new File() {{
                                contents = "quidem";
                                hashedSize = "atque";
                                partiallyHashed = false;
                                path = "laborum";
                                sha256 = "nam";
                                size = "tenetur";
                            }};
                        }}),
                    }};
                    resourceName = "laboriosam";
                    securityMarks = new SecurityMarks() {{
                        canonicalName = "alias";
                        marks = new java.util.HashMap<String, String>() {{
                            put("deserunt", "voluptate");
                        }};
                        name = "Boyd McKenzie";
                    }};;
                    severity = FindingSeverityEnum.LOW;
                    sourceProperties = new java.util.HashMap<String, Object>() {{
                        put("est", "quidem");
                    }};
                    state = FindingStateEnum.ACTIVE;
                    vulnerability = new Vulnerability() {{
                        cve = new Cve() {{
                            cvssv3 = new Cvssv3() {{
                                attackComplexity = Cvssv3AttackComplexityEnum.ATTACK_COMPLEXITY_HIGH;
                                attackVector = Cvssv3AttackVectorEnum.ATTACK_VECTOR_LOCAL;
                                availabilityImpact = Cvssv3AvailabilityImpactEnum.IMPACT_LOW;
                                baseScore = 6485.98;
                                confidentialityImpact = Cvssv3ConfidentialityImpactEnum.IMPACT_HIGH;
                                integrityImpact = Cvssv3IntegrityImpactEnum.IMPACT_UNSPECIFIED;
                                privilegesRequired = Cvssv3PrivilegesRequiredEnum.PRIVILEGES_REQUIRED_HIGH;
                                scope = Cvssv3ScopeEnum.SCOPE_CHANGED;
                                userInteraction = Cvssv3UserInteractionEnum.USER_INTERACTION_UNSPECIFIED;
                            }};;
                            id = "87f86bc1-73d6-489e-ae95-26f8d986e881";
                            references = new org.openapis.openapi.models.shared.Reference[]{{
                                add(new Reference() {{
                                    source = "dolorum";
                                    uri = "https://flaky-wardrobe.com";
                                }}),
                                add(new Reference() {{
                                    source = "repudiandae";
                                    uri = "http://animated-brief.biz";
                                }}),
                                add(new Reference() {{
                                    source = "enim";
                                    uri = "http://every-vengeance.name";
                                }}),
                                add(new Reference() {{
                                    source = "magnam";
                                    uri = "https://cumbersome-mountain.org";
                                }}),
                            }};
                            upstreamFixAvailable = false;
                        }};;
                    }};;
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "eveniet";
                findingId = "occaecati";
                key = "consequuntur";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "quis";
                uploadProtocol = "reprehenderit";
            }};            

            SecuritycenterOrganizationsSourcesFindingsCreateResponse res = sdk.organizations.securitycenterOrganizationsSourcesFindingsCreate(req, new SecuritycenterOrganizationsSourcesFindingsCreateSecurity("error", "illo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesGetIamPolicy

Gets the access control policy on the specified Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesGetIamPolicyRequest req = new SecuritycenterOrganizationsSourcesGetIamPolicyRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 910994;
                    }};;
                }};;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "iure";
                key = "ipsa";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "molestiae";
                uploadProtocol = "eveniet";
            }};            

            SecuritycenterOrganizationsSourcesGetIamPolicyResponse res = sdk.organizations.securitycenterOrganizationsSourcesGetIamPolicy(req, new SecuritycenterOrganizationsSourcesGetIamPolicySecurity("qui", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesSetIamPolicy

Sets the access control policy on the specified Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesSetIamPolicyRequest req = new SecuritycenterOrganizationsSourcesSetIamPolicyRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatum"),
                                            add("rem"),
                                            add("aliquam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                            add("corporis"),
                                            add("perspiciatis"),
                                            add("nihil"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                            add("maiores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "dolores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "minima";
                                    expression = "dolore";
                                    location = "dolorum";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("recusandae"),
                                }};
                                role = "omnis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quaerat";
                                    expression = "molestiae";
                                    location = "ex";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("adipisci"),
                                    add("debitis"),
                                    add("laudantium"),
                                }};
                                role = "eum";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nemo";
                                    expression = "recusandae";
                                    location = "esse";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("reiciendis"),
                                }};
                                role = "provident";
                            }}),
                        }};
                        etag = "aspernatur";
                        version = 354506;
                    }};;
                    updateMask = "quasi";
                }};;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "provident";
                key = "possimus";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "aliquid";
                uploadProtocol = "accusantium";
            }};            

            SecuritycenterOrganizationsSourcesSetIamPolicyResponse res = sdk.organizations.securitycenterOrganizationsSourcesSetIamPolicy(req, new SecuritycenterOrganizationsSourcesSetIamPolicySecurity("repellat", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesTestIamPermissions

Returns the permissions that a caller has on the specified source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesTestIamPermissionsRequest req = new SecuritycenterOrganizationsSourcesTestIamPermissionsRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("earum"),
                        add("officia"),
                        add("laborum"),
                    }};
                }};;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "molestias";
                key = "officiis";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "vitae";
                uploadProtocol = "rerum";
            }};            

            SecuritycenterOrganizationsSourcesTestIamPermissionsResponse res = sdk.organizations.securitycenterOrganizationsSourcesTestIamPermissions(req, new SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity("tempora", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
