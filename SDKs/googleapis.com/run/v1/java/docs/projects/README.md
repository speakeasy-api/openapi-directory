# projects

### Available Operations

* [runProjectsLocationsAuthorizeddomainsList](#runprojectslocationsauthorizeddomainslist) - List authorized domains.
* [runProjectsLocationsConfigurationsList](#runprojectslocationsconfigurationslist) - List configurations.
* [runProjectsLocationsDomainmappingsCreate](#runprojectslocationsdomainmappingscreate) - Create a new domain mapping.
* [runProjectsLocationsDomainmappingsList](#runprojectslocationsdomainmappingslist) - List all domain mappings.
* [runProjectsLocationsList](#runprojectslocationslist) - Lists information about the supported locations for this service.
* [runProjectsLocationsRevisionsList](#runprojectslocationsrevisionslist) - List revisions.
* [runProjectsLocationsRoutesList](#runprojectslocationsrouteslist) - List routes.
* [runProjectsLocationsServicesCreate](#runprojectslocationsservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [runProjectsLocationsServicesDelete](#runprojectslocationsservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [runProjectsLocationsServicesGet](#runprojectslocationsservicesget) - Gets information about a service.
* [runProjectsLocationsServicesGetIamPolicy](#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* [runProjectsLocationsServicesList](#runprojectslocationsserviceslist) - Lists services for the given project and region.
* [runProjectsLocationsServicesReplaceService](#runprojectslocationsservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runProjectsLocationsServicesSetIamPolicy](#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [runProjectsLocationsServicesTestIamPermissions](#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

## runProjectsLocationsAuthorizeddomainsList

List authorized domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsAuthorizeddomainsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsAuthorizeddomainsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsAuthorizeddomainsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsAuthorizeddomainsListRequest req = new RunProjectsLocationsAuthorizeddomainsListRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "illo";
                key = "voluptate";
                oauthToken = "consequatur";
                pageSize = 962120L;
                pageToken = "incidunt";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "nemo";
                uploadProtocol = "est";
            }};            

            RunProjectsLocationsAuthorizeddomainsListResponse res = sdk.projects.runProjectsLocationsAuthorizeddomainsList(req, new RunProjectsLocationsAuthorizeddomainsListSecurity("quo", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAuthorizedDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsConfigurationsList

List configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsConfigurationsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsConfigurationsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsConfigurationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsConfigurationsListRequest req = new RunProjectsLocationsConfigurationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "fuga";
                continue_ = "officia";
                fieldSelector = "repellat";
                fields = "cupiditate";
                includeUninitialized = false;
                key = "soluta";
                labelSelector = "tempore";
                limit = 636190L;
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "inventore";
                resourceVersion = "atque";
                uploadType = "ad";
                uploadProtocol = "sapiente";
                watch = false;
            }};            

            RunProjectsLocationsConfigurationsListResponse res = sdk.projects.runProjectsLocationsConfigurationsList(req, new RunProjectsLocationsConfigurationsListSecurity("voluptates", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsDomainmappingsCreate

Create a new domain mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsDomainmappingsCreateRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsDomainmappingsCreateResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsDomainmappingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainMapping;
import org.openapis.openapi.models.shared.DomainMappingSpec;
import org.openapis.openapi.models.shared.DomainMappingSpecCertificateModeEnum;
import org.openapis.openapi.models.shared.DomainMappingStatus;
import org.openapis.openapi.models.shared.GoogleCloudRunV1Condition;
import org.openapis.openapi.models.shared.ObjectMeta;
import org.openapis.openapi.models.shared.OwnerReference;
import org.openapis.openapi.models.shared.ResourceRecord;
import org.openapis.openapi.models.shared.ResourceRecordTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsDomainmappingsCreateRequest req = new RunProjectsLocationsDomainmappingsCreateRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                domainMapping = new DomainMapping() {{
                    apiVersion = "quibusdam";
                    kind = "suscipit";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("delectus", "nemo");
                            put("cumque", "voluptatum");
                            put("sequi", "atque");
                        }};
                        clusterName = "maiores";
                        creationTimestamp = "expedita";
                        deletionGracePeriodSeconds = 702418;
                        deletionTimestamp = "totam";
                        finalizers = new String[]{{
                            add("aspernatur"),
                            add("eaque"),
                            add("impedit"),
                            add("nam"),
                        }};
                        generateName = "ex";
                        generation = 483626;
                        labels = new java.util.HashMap<String, String>() {{
                            put("minus", "ut");
                            put("distinctio", "eius");
                            put("eos", "veniam");
                            put("repudiandae", "sint");
                        }};
                        name = "Rogelio Howe";
                        namespace = "incidunt";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "occaecati";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "reiciendis";
                                name = "Whitney King";
                                uid = "tenetur";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "recusandae";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "expedita";
                                name = "Tamara Pfeffer";
                                uid = "ratione";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "totam";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "vero";
                                name = "Candice Nienow";
                                uid = "illo";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "saepe";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "enim";
                                name = "Rosemary Vandervort";
                                uid = "provident";
                            }}),
                        }};
                        resourceVersion = "aut";
                        selfLink = "dolorum";
                        uid = "nostrum";
                    }};;
                    spec = new DomainMappingSpec() {{
                        certificateMode = DomainMappingSpecCertificateModeEnum.CERTIFICATE_MODE_UNSPECIFIED;
                        forceOverride = false;
                        routeName = "nam";
                    }};;
                    status = new DomainMappingStatus() {{
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "odio";
                                message = "nostrum";
                                reason = "maiores";
                                severity = "veritatis";
                                status = "autem";
                                type = "earum";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "minima";
                                message = "ex";
                                reason = "possimus";
                                severity = "nesciunt";
                                status = "corrupti";
                                type = "nostrum";
                            }}),
                        }};
                        mappedRouteName = "fuga";
                        observedGeneration = 195789;
                        resourceRecords = new org.openapis.openapi.models.shared.ResourceRecord[]{{
                            add(new ResourceRecord() {{
                                name = "Janie Rosenbaum";
                                rrdata = "sunt";
                                type = ResourceRecordTypeEnum.AAAA;
                            }}),
                            add(new ResourceRecord() {{
                                name = "Terrence Treutel";
                                rrdata = "optio";
                                type = ResourceRecordTypeEnum.CNAME;
                            }}),
                            add(new ResourceRecord() {{
                                name = "Guy Will";
                                rrdata = "repellendus";
                                type = ResourceRecordTypeEnum.AAAA;
                            }}),
                            add(new ResourceRecord() {{
                                name = "Dr. Marcus Bosco";
                                rrdata = "velit";
                                type = ResourceRecordTypeEnum.AAAA;
                            }}),
                        }};
                        url = "expedita";
                    }};;
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                dryRun = "iusto";
                fields = "atque";
                key = "velit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "aperiam";
                uploadProtocol = "vitae";
            }};            

            RunProjectsLocationsDomainmappingsCreateResponse res = sdk.projects.runProjectsLocationsDomainmappingsCreate(req, new RunProjectsLocationsDomainmappingsCreateSecurity("mollitia", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.domainMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsDomainmappingsList

List all domain mappings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsDomainmappingsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsDomainmappingsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsDomainmappingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsDomainmappingsListRequest req = new RunProjectsLocationsDomainmappingsListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "rem";
                continue_ = "vel";
                fieldSelector = "eos";
                fields = "labore";
                includeUninitialized = false;
                key = "sunt";
                labelSelector = "blanditiis";
                limit = 613848L;
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "distinctio";
                resourceVersion = "incidunt";
                uploadType = "labore";
                uploadProtocol = "blanditiis";
                watch = false;
            }};            

            RunProjectsLocationsDomainmappingsListResponse res = sdk.projects.runProjectsLocationsDomainmappingsList(req, new RunProjectsLocationsDomainmappingsListSecurity("ducimus", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDomainMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsListRequest req = new RunProjectsLocationsListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "asperiores";
                filter = "architecto";
                key = "sint";
                oauthToken = "possimus";
                pageSize = 732815L;
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "consequuntur";
                uploadProtocol = "nemo";
            }};            

            RunProjectsLocationsListResponse res = sdk.projects.runProjectsLocationsList(req, new RunProjectsLocationsListSecurity("nobis", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsRevisionsList

List revisions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsRevisionsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsRevisionsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsRevisionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsRevisionsListRequest req = new RunProjectsLocationsRevisionsListRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "itaque";
                continue_ = "error";
                fieldSelector = "expedita";
                fields = "error";
                includeUninitialized = false;
                key = "placeat";
                labelSelector = "temporibus";
                limit = 454761L;
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "minima";
                resourceVersion = "odit";
                uploadType = "odit";
                uploadProtocol = "eius";
                watch = false;
            }};            

            RunProjectsLocationsRevisionsListResponse res = sdk.projects.runProjectsLocationsRevisionsList(req, new RunProjectsLocationsRevisionsListSecurity("error", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsRoutesList

List routes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsRoutesListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsRoutesListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsRoutesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsRoutesListRequest req = new RunProjectsLocationsRoutesListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "sunt";
                continue_ = "amet";
                fieldSelector = "cum";
                fields = "iusto";
                includeUninitialized = false;
                key = "corrupti";
                labelSelector = "non";
                limit = 457330L;
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "eligendi";
                resourceVersion = "minima";
                uploadType = "omnis";
                uploadProtocol = "recusandae";
                watch = false;
            }};            

            RunProjectsLocationsRoutesListResponse res = sdk.projects.runProjectsLocationsRoutesList(req, new RunProjectsLocationsRoutesListSecurity("architecto", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRoutesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesCreate

Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesCreateRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesCreateResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesCreateSecurity;
import org.openapis.openapi.models.shared.Addressable;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigMapEnvSource;
import org.openapis.openapi.models.shared.ConfigMapKeySelector;
import org.openapis.openapi.models.shared.ConfigMapVolumeSource;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerPort;
import org.openapis.openapi.models.shared.EmptyDirVolumeSource;
import org.openapis.openapi.models.shared.EnvFromSource;
import org.openapis.openapi.models.shared.EnvVar;
import org.openapis.openapi.models.shared.EnvVarSource;
import org.openapis.openapi.models.shared.ExecAction;
import org.openapis.openapi.models.shared.GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV1Condition;
import org.openapis.openapi.models.shared.HTTPGetAction;
import org.openapis.openapi.models.shared.HTTPHeader;
import org.openapis.openapi.models.shared.KeyToPath;
import org.openapis.openapi.models.shared.LocalObjectReference;
import org.openapis.openapi.models.shared.ObjectMeta;
import org.openapis.openapi.models.shared.OwnerReference;
import org.openapis.openapi.models.shared.Probe;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.RevisionSpec;
import org.openapis.openapi.models.shared.RevisionTemplate;
import org.openapis.openapi.models.shared.SecretEnvSource;
import org.openapis.openapi.models.shared.SecretKeySelector;
import org.openapis.openapi.models.shared.SecretVolumeSource;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.ServiceInput;
import org.openapis.openapi.models.shared.ServiceSpecInput;
import org.openapis.openapi.models.shared.ServiceStatusInput;
import org.openapis.openapi.models.shared.TCPSocketAction;
import org.openapis.openapi.models.shared.TrafficTargetInput;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VolumeMount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesCreateRequest req = new RunProjectsLocationsServicesCreateRequest("autem") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceInput = new ServiceInput() {{
                    apiVersion = "repellat";
                    kind = "amet";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("dolore", "optio");
                            put("quo", "repudiandae");
                            put("tempora", "libero");
                            put("suscipit", "illum");
                        }};
                        clusterName = "iusto";
                        creationTimestamp = "aliquid";
                        deletionGracePeriodSeconds = 575111;
                        deletionTimestamp = "aliquid";
                        finalizers = new String[]{{
                            add("sapiente"),
                            add("consectetur"),
                            add("eligendi"),
                            add("ullam"),
                        }};
                        generateName = "nihil";
                        generation = 262891;
                        labels = new java.util.HashMap<String, String>() {{
                            put("corporis", "perferendis");
                            put("architecto", "amet");
                        }};
                        name = "Marcia Torphy";
                        namespace = "maiores";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "dicta";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "hic";
                                name = "Pete Altenwerth";
                                uid = "quo";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "dolor";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "sunt";
                                name = "Ms. Jamie Torphy";
                                uid = "deserunt";
                            }}),
                        }};
                        resourceVersion = "odit";
                        selfLink = "incidunt";
                        uid = "corporis";
                    }};;
                    spec = new ServiceSpecInput() {{
                        template = new RevisionTemplate() {{
                            metadata = new ObjectMeta() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "ducimus");
                                    put("tenetur", "excepturi");
                                }};
                                clusterName = "modi";
                                creationTimestamp = "corrupti";
                                deletionGracePeriodSeconds = 472429;
                                deletionTimestamp = "eius";
                                finalizers = new String[]{{
                                    add("fugit"),
                                    add("facere"),
                                    add("ipsam"),
                                    add("nobis"),
                                }};
                                generateName = "porro";
                                generation = 287834;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ducimus", "qui");
                                    put("qui", "consectetur");
                                    put("ratione", "saepe");
                                }};
                                name = "Beth Ritchie";
                                namespace = "voluptatibus";
                                ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                                    add(new OwnerReference() {{
                                        apiVersion = "corporis";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "repellendus";
                                        name = "Sandra Rempel";
                                        uid = "omnis";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "officiis";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "delectus";
                                        name = "Nancy Frami";
                                        uid = "neque";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "aspernatur";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "eaque";
                                        name = "Shelly Armstrong";
                                        uid = "quo";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "architecto";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "voluptatem";
                                        name = "Mr. Brett Gislason";
                                        uid = "beatae";
                                    }}),
                                }};
                                resourceVersion = "sequi";
                                selfLink = "rerum";
                                uid = "ipsum";
                            }};;
                            spec = new RevisionSpec() {{
                                containerConcurrency = 891063;
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("incidunt"),
                                        }};
                                        command = new String[]{{
                                            add("delectus"),
                                            add("aliquid"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Rogelio Kihn";
                                                value = "cumque";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "ut";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Jackie Koepp DDS";
                                                        }};
                                                        name = "Jeff Wiegand V";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "itaque";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Edmund Carter";
                                                        }};
                                                        name = "Jonathon Gulgowski";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Ryan Tillman";
                                                value = "voluptatem";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "maiores";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Sally Paucek";
                                                        }};
                                                        name = "Louis O'Connell";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "distinctio";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Tracey Rodriguez";
                                                        }};
                                                        name = "Adrienne Mills";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Archie Haley";
                                                    }};
                                                    name = "Kristin Boyle";
                                                    optional = false;
                                                }};
                                                prefix = "numquam";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Amanda Ruecker";
                                                    }};
                                                    name = "Marcella McKenzie Sr.";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Michael Thiel";
                                                    }};
                                                    name = "Margaret Rau";
                                                    optional = false;
                                                }};
                                                prefix = "maiores";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Lee Runte";
                                                    }};
                                                    name = "Rose Wisoky";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Karen Barrows I";
                                                    }};
                                                    name = "Roger Boehm V";
                                                    optional = false;
                                                }};
                                                prefix = "dolores";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Joy Macejkovic";
                                                    }};
                                                    name = "Kim Johnston V";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Latoya West";
                                                    }};
                                                    name = "Marion Mills";
                                                    optional = false;
                                                }};
                                                prefix = "magnam";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Mrs. Sophia Schmidt";
                                                    }};
                                                    name = "Darin Kozey";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "perferendis";
                                        imagePullPolicy = "nam";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("ratione"),
                                                    add("eos"),
                                                }};
                                            }};
                                            failureThreshold = 662174;
                                            grpc = new GRPCAction() {{
                                                port = 266067;
                                                service = "illum";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "error";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Marianne Rippin";
                                                        value = "a";
                                                    }}),
                                                }};
                                                path = "magnam";
                                                port = 260246;
                                                scheme = "ad";
                                            }};
                                            initialDelaySeconds = 154277;
                                            periodSeconds = 798147;
                                            successThreshold = 312121;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "voluptatum";
                                                port = 257959;
                                            }};
                                            timeoutSeconds = 127380;
                                        }};
                                        name = "Terrance Reynolds";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 216379;
                                                name = "Christie Ortiz";
                                                protocol = "voluptatum";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 98123;
                                                name = "Bob Kutch";
                                                protocol = "incidunt";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 286147;
                                                name = "Darlene Kovacek";
                                                protocol = "saepe";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 801014;
                                                name = "Eddie Koepp";
                                                protocol = "nesciunt";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("eum"),
                                                    add("dolor"),
                                                    add("placeat"),
                                                    add("quos"),
                                                }};
                                            }};
                                            failureThreshold = 152302;
                                            grpc = new GRPCAction() {{
                                                port = 54498;
                                                service = "natus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "ratione";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Kenny Ondricka";
                                                        value = "optio";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Tommy Zemlak";
                                                        value = "sapiente";
                                                    }}),
                                                }};
                                                path = "quam";
                                                port = 579242;
                                                scheme = "repellendus";
                                            }};
                                            initialDelaySeconds = 634561;
                                            periodSeconds = 120387;
                                            successThreshold = 524801;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "fuga";
                                                port = 485950;
                                            }};
                                            timeoutSeconds = 518338;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("eos", "harum");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("omnis", "quis");
                                                put("quos", "natus");
                                                put("aliquam", "vero");
                                                put("nisi", "praesentium");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 433194;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("animi"),
                                                }};
                                            }};
                                            failureThreshold = 818739;
                                            grpc = new GRPCAction() {{
                                                port = 725894;
                                                service = "ullam";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "quaerat";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Sheldon Hilpert";
                                                        value = "ullam";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Sheri Mayert";
                                                        value = "rem";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Mr. Christian Harvey";
                                                        value = "voluptatibus";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Israel Franey";
                                                        value = "alias";
                                                    }}),
                                                }};
                                                path = "blanditiis";
                                                port = 264204;
                                                scheme = "illo";
                                            }};
                                            initialDelaySeconds = 954946;
                                            periodSeconds = 89642;
                                            successThreshold = 474267;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "autem";
                                                port = 294314;
                                            }};
                                            timeoutSeconds = 261219;
                                        }};
                                        terminationMessagePath = "nostrum";
                                        terminationMessagePolicy = "ex";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "voluptate";
                                                name = "Jan Emmerich";
                                                readOnly = false;
                                                subPath = "odit";
                                            }}),
                                        }};
                                        workingDir = "molestiae";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("quia"),
                                            add("inventore"),
                                            add("doloribus"),
                                            add("praesentium"),
                                        }};
                                        command = new String[]{{
                                            add("consequuntur"),
                                            add("laboriosam"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Latoya Emmerich";
                                                value = "maxime";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "vel";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Terrance Weissnat";
                                                        }};
                                                        name = "Jody Turner";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "nostrum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Marc Koepp";
                                                        }};
                                                        name = "Fannie Leannon Sr.";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Jerome Berge";
                                                value = "libero";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "ut";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Randy Breitenberg";
                                                        }};
                                                        name = "Jesus Corkery";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "facilis";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Josh Rutherford DVM";
                                                        }};
                                                        name = "Rex Rau";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Dr. Erick Koepp";
                                                    }};
                                                    name = "Francisco Macejkovic";
                                                    optional = false;
                                                }};
                                                prefix = "sed";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Mitchell Klocko DVM";
                                                    }};
                                                    name = "Ms. Darla Swaniawski";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Elizabeth Moore";
                                                    }};
                                                    name = "Bryant Crooks";
                                                    optional = false;
                                                }};
                                                prefix = "voluptates";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Chelsea Stehr V";
                                                    }};
                                                    name = "Kelli Hermann";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Brandy Ryan";
                                                    }};
                                                    name = "Alfonso Keeling";
                                                    optional = false;
                                                }};
                                                prefix = "atque";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Eugene Boyle";
                                                    }};
                                                    name = "Sonia Pollich";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "repudiandae";
                                        imagePullPolicy = "minus";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("laboriosam"),
                                                    add("illo"),
                                                    add("cupiditate"),
                                                }};
                                            }};
                                            failureThreshold = 83578;
                                            grpc = new GRPCAction() {{
                                                port = 304200;
                                                service = "excepturi";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "atque";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Laura Ritchie";
                                                        value = "maiores";
                                                    }}),
                                                }};
                                                path = "delectus";
                                                port = 549710;
                                                scheme = "id";
                                            }};
                                            initialDelaySeconds = 884812;
                                            periodSeconds = 68777;
                                            successThreshold = 452856;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "consequatur";
                                                port = 930656;
                                            }};
                                            timeoutSeconds = 997047;
                                        }};
                                        name = "Carmen Reichel";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 469567;
                                                name = "Francis O'Hara";
                                                protocol = "suscipit";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("quis"),
                                                    add("enim"),
                                                    add("corporis"),
                                                }};
                                            }};
                                            failureThreshold = 614175;
                                            grpc = new GRPCAction() {{
                                                port = 411669;
                                                service = "autem";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "voluptate";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Lynda Padberg";
                                                        value = "porro";
                                                    }}),
                                                }};
                                                path = "tempore";
                                                port = 415395;
                                                scheme = "autem";
                                            }};
                                            initialDelaySeconds = 508271;
                                            periodSeconds = 166136;
                                            successThreshold = 787467;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "expedita";
                                                port = 447878;
                                            }};
                                            timeoutSeconds = 52659;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("blanditiis", "minus");
                                                put("tenetur", "assumenda");
                                                put("exercitationem", "a");
                                                put("tempore", "laboriosam");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("occaecati", "dicta");
                                                put("quidem", "omnis");
                                                put("laborum", "molestias");
                                                put("a", "dignissimos");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 288348;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("dolore"),
                                                    add("aliquid"),
                                                    add("repudiandae"),
                                                }};
                                            }};
                                            failureThreshold = 135692;
                                            grpc = new GRPCAction() {{
                                                port = 799306;
                                                service = "dolorem";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "neque";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Mrs. Levi Rodriguez";
                                                        value = "iure";
                                                    }}),
                                                }};
                                                path = "quibusdam";
                                                port = 575397;
                                                scheme = "voluptates";
                                            }};
                                            initialDelaySeconds = 467109;
                                            periodSeconds = 323478;
                                            successThreshold = 753043;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "fuga";
                                                port = 5938;
                                            }};
                                            timeoutSeconds = 26493;
                                        }};
                                        terminationMessagePath = "iure";
                                        terminationMessagePolicy = "earum";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "dolorem";
                                                name = "Mr. Jeremy Sanford";
                                                readOnly = false;
                                                subPath = "quia";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "veniam";
                                                name = "Wallace Ritchie";
                                                readOnly = false;
                                                subPath = "sunt";
                                            }}),
                                        }};
                                        workingDir = "maiores";
                                    }}),
                                }};
                                enableServiceLinks = false;
                                imagePullSecrets = new org.openapis.openapi.models.shared.LocalObjectReference[]{{
                                    add(new LocalObjectReference() {{
                                        name = "Jamie Collins";
                                    }}),
                                    add(new LocalObjectReference() {{
                                        name = "Stuart Pacocha";
                                    }}),
                                    add(new LocalObjectReference() {{
                                        name = "Gerardo Weimann";
                                    }}),
                                }};
                                serviceAccountName = "odit";
                                timeoutSeconds = 73197;
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 154117;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "velit";
                                                    mode = 355685;
                                                    path = "provident";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "possimus";
                                                    mode = 612425;
                                                    path = "blanditiis";
                                                }}),
                                            }};
                                            name = "Deanna Kuhn";
                                            optional = false;
                                        }};
                                        emptyDir = new EmptyDirVolumeSource() {{
                                            medium = "culpa";
                                            sizeLimit = "voluptate";
                                        }};
                                        name = "Wilbert Shields";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 758366;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "magni";
                                                    mode = 265708;
                                                    path = "voluptatum";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "dolore";
                                                    mode = 824105;
                                                    path = "dolorum";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "eos";
                                                    mode = 121161;
                                                    path = "quam";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "eos";
                                                    mode = 609079;
                                                    path = "reiciendis";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "qui";
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "eligendi";
                                latestRevision = false;
                                percent = 253972;
                                revisionName = "inventore";
                                tag = "necessitatibus";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "tenetur";
                                latestRevision = false;
                                percent = 349558;
                                revisionName = "nihil";
                                tag = "quia";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "quis";
                                latestRevision = false;
                                percent = 980323;
                                revisionName = "dicta";
                                tag = "dicta";
                            }}),
                        }};
                    }};;
                    status = new ServiceStatusInput() {{
                        address = new Addressable() {{
                            url = "eum";
                        }};;
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "id";
                                message = "nobis";
                                reason = "quasi";
                                severity = "itaque";
                                status = "aliquam";
                                type = "vitae";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "temporibus";
                                message = "voluptatum";
                                reason = "deserunt";
                                severity = "aspernatur";
                                status = "neque";
                                type = "impedit";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "consequuntur";
                                message = "neque";
                                reason = "saepe";
                                severity = "amet";
                                status = "labore";
                                type = "repellat";
                            }}),
                        }};
                        latestCreatedRevisionName = "eos";
                        latestReadyRevisionName = "quibusdam";
                        observedGeneration = 999965;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "quaerat";
                                latestRevision = false;
                                percent = 640518;
                                revisionName = "sunt";
                                tag = "perspiciatis";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "quam";
                                latestRevision = false;
                                percent = 952106;
                                revisionName = "iure";
                                tag = "nulla";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "recusandae";
                                latestRevision = false;
                                percent = 610722;
                                revisionName = "aspernatur";
                                tag = "aspernatur";
                            }}),
                        }};
                        url = "et";
                    }};;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "delectus";
                dryRun = "saepe";
                fields = "sunt";
                key = "in";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "voluptatem";
                uploadProtocol = "perspiciatis";
            }};            

            RunProjectsLocationsServicesCreateResponse res = sdk.projects.runProjectsLocationsServicesCreate(req, new RunProjectsLocationsServicesCreateSecurity("error", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesDelete

Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesDeleteRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesDeleteResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesDeleteRequest req = new RunProjectsLocationsServicesDeleteRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                apiVersion = "reiciendis";
                callback = "quis";
                dryRun = "modi";
                fields = "adipisci";
                key = "pariatur";
                kind = "praesentium";
                oauthToken = "nemo";
                prettyPrint = false;
                propagationPolicy = "dolore";
                quotaUser = "numquam";
                uploadType = "dolor";
                uploadProtocol = "perspiciatis";
            }};            

            RunProjectsLocationsServicesDeleteResponse res = sdk.projects.runProjectsLocationsServicesDelete(req, new RunProjectsLocationsServicesDeleteSecurity("accusamus", "voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesGet

Gets information about a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesGetRequest req = new RunProjectsLocationsServicesGetRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "accusantium";
                key = "tempora";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "expedita";
                uploadProtocol = "impedit";
            }};            

            RunProjectsLocationsServicesGetResponse res = sdk.projects.runProjectsLocationsServicesGet(req, new RunProjectsLocationsServicesGetSecurity("architecto", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesGetIamPolicy

Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesGetIamPolicyRequest req = new RunProjectsLocationsServicesGetIamPolicyRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "quisquam";
                fields = "sunt";
                key = "asperiores";
                oauthToken = "corporis";
                optionsRequestedPolicyVersion = 426173L;
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "totam";
                uploadProtocol = "ipsam";
            }};            

            RunProjectsLocationsServicesGetIamPolicyResponse res = sdk.projects.runProjectsLocationsServicesGetIamPolicy(req, new RunProjectsLocationsServicesGetIamPolicySecurity("at", "culpa") {{
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

## runProjectsLocationsServicesList

Lists services for the given project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesListRequest req = new RunProjectsLocationsServicesListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "officiis";
                continue_ = "mollitia";
                fieldSelector = "libero";
                fields = "fugiat";
                includeUninitialized = false;
                key = "voluptas";
                labelSelector = "et";
                limit = 487625L;
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "nesciunt";
                resourceVersion = "harum";
                uploadType = "aperiam";
                uploadProtocol = "pariatur";
                watch = false;
            }};            

            RunProjectsLocationsServicesListResponse res = sdk.projects.runProjectsLocationsServicesList(req, new RunProjectsLocationsServicesListSecurity("ad", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesReplaceService

Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesReplaceServiceRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesReplaceServiceResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesReplaceServiceSecurity;
import org.openapis.openapi.models.shared.Addressable;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigMapEnvSource;
import org.openapis.openapi.models.shared.ConfigMapKeySelector;
import org.openapis.openapi.models.shared.ConfigMapVolumeSource;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerPort;
import org.openapis.openapi.models.shared.EmptyDirVolumeSource;
import org.openapis.openapi.models.shared.EnvFromSource;
import org.openapis.openapi.models.shared.EnvVar;
import org.openapis.openapi.models.shared.EnvVarSource;
import org.openapis.openapi.models.shared.ExecAction;
import org.openapis.openapi.models.shared.GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV1Condition;
import org.openapis.openapi.models.shared.HTTPGetAction;
import org.openapis.openapi.models.shared.HTTPHeader;
import org.openapis.openapi.models.shared.KeyToPath;
import org.openapis.openapi.models.shared.LocalObjectReference;
import org.openapis.openapi.models.shared.ObjectMeta;
import org.openapis.openapi.models.shared.OwnerReference;
import org.openapis.openapi.models.shared.Probe;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.RevisionSpec;
import org.openapis.openapi.models.shared.RevisionTemplate;
import org.openapis.openapi.models.shared.SecretEnvSource;
import org.openapis.openapi.models.shared.SecretKeySelector;
import org.openapis.openapi.models.shared.SecretVolumeSource;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.ServiceInput;
import org.openapis.openapi.models.shared.ServiceSpecInput;
import org.openapis.openapi.models.shared.ServiceStatusInput;
import org.openapis.openapi.models.shared.TCPSocketAction;
import org.openapis.openapi.models.shared.TrafficTargetInput;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VolumeMount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesReplaceServiceRequest req = new RunProjectsLocationsServicesReplaceServiceRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceInput = new ServiceInput() {{
                    apiVersion = "ut";
                    kind = "quidem";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("sit", "architecto");
                            put("tempore", "deserunt");
                            put("nulla", "corrupti");
                            put("voluptate", "alias");
                        }};
                        clusterName = "iure";
                        creationTimestamp = "temporibus";
                        deletionGracePeriodSeconds = 278469;
                        deletionTimestamp = "ea";
                        finalizers = new String[]{{
                            add("laudantium"),
                        }};
                        generateName = "qui";
                        generation = 725369;
                        labels = new java.util.HashMap<String, String>() {{
                            put("nam", "pariatur");
                            put("quod", "modi");
                            put("vitae", "delectus");
                            put("delectus", "nemo");
                        }};
                        name = "Clifford Torp";
                        namespace = "saepe";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "doloribus";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "facilis";
                                name = "Pat Prosacco";
                                uid = "fugiat";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "beatae";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "dignissimos";
                                name = "Edith Lubowitz DVM";
                                uid = "facere";
                            }}),
                        }};
                        resourceVersion = "distinctio";
                        selfLink = "ducimus";
                        uid = "atque";
                    }};;
                    spec = new ServiceSpecInput() {{
                        template = new RevisionTemplate() {{
                            metadata = new ObjectMeta() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("nemo", "provident");
                                }};
                                clusterName = "accusamus";
                                creationTimestamp = "minus";
                                deletionGracePeriodSeconds = 773479;
                                deletionTimestamp = "minima";
                                finalizers = new String[]{{
                                    add("rerum"),
                                    add("praesentium"),
                                    add("vel"),
                                    add("doloremque"),
                                }};
                                generateName = "delectus";
                                generation = 558201;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("illum", "ullam");
                                    put("praesentium", "perferendis");
                                    put("soluta", "animi");
                                    put("molestiae", "nesciunt");
                                }};
                                name = "Willie Bayer";
                                namespace = "repellat";
                                ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                                    add(new OwnerReference() {{
                                        apiVersion = "tempora";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "quaerat";
                                        name = "Colleen Cummerata";
                                        uid = "cumque";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "pariatur";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "non";
                                        name = "Gregory Stamm";
                                        uid = "expedita";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "libero";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "impedit";
                                        name = "Ernest Grady";
                                        uid = "voluptate";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "aliquid";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "blanditiis";
                                        name = "Elvira Wisozk";
                                        uid = "voluptatem";
                                    }}),
                                }};
                                resourceVersion = "beatae";
                                selfLink = "qui";
                                uid = "laboriosam";
                            }};;
                            spec = new RevisionSpec() {{
                                containerConcurrency = 840558;
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("nobis"),
                                        }};
                                        command = new String[]{{
                                            add("tenetur"),
                                            add("facilis"),
                                            add("facere"),
                                            add("aut"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Fernando Hackett";
                                                value = "quaerat";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "odit";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Lindsay Hickle";
                                                        }};
                                                        name = "Hazel Predovic";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "quisquam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Lillian Bogisich";
                                                        }};
                                                        name = "Jeff Frami";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Gordon Ernser Jr.";
                                                value = "dicta";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "illo";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Kristina Lueilwitz";
                                                        }};
                                                        name = "Dr. Blake Gleichner";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "optio";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Rebecca Schmitt DVM";
                                                        }};
                                                        name = "May Sauer";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Adrienne Mayer";
                                                value = "et";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "reiciendis";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Rudy Waters";
                                                        }};
                                                        name = "Lionel Kessler";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "repudiandae";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Leslie Hartmann IV";
                                                        }};
                                                        name = "Johnnie Schamberger";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Mrs. Brendan Kemmer";
                                                value = "mollitia";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "ipsam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Fernando Bode";
                                                        }};
                                                        name = "Daisy Franey";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "occaecati";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Ollie Collier V";
                                                        }};
                                                        name = "Andrew Morissette";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Nicholas Wisoky";
                                                    }};
                                                    name = "Mrs. Casey Brown";
                                                    optional = false;
                                                }};
                                                prefix = "numquam";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Whitney Mann";
                                                    }};
                                                    name = "Aaron Fisher";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Bonnie Zboncak IV";
                                                    }};
                                                    name = "Velma Stark";
                                                    optional = false;
                                                }};
                                                prefix = "itaque";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Alex Olson";
                                                    }};
                                                    name = "Julio Hilll";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Josh Mante";
                                                    }};
                                                    name = "Kendra Mante";
                                                    optional = false;
                                                }};
                                                prefix = "exercitationem";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Miss Joanne Morar";
                                                    }};
                                                    name = "Darrin Pacocha";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Agnes Boyle DDS";
                                                    }};
                                                    name = "Troy Stroman";
                                                    optional = false;
                                                }};
                                                prefix = "aliquid";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Mrs. Dominick Carroll PhD";
                                                    }};
                                                    name = "Irma Metz";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "accusantium";
                                        imagePullPolicy = "minus";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("accusantium"),
                                                }};
                                            }};
                                            failureThreshold = 55790;
                                            grpc = new GRPCAction() {{
                                                port = 97138;
                                                service = "saepe";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "quia";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Gilberto Harris";
                                                        value = "quod";
                                                    }}),
                                                }};
                                                path = "alias";
                                                port = 365043;
                                                scheme = "molestias";
                                            }};
                                            initialDelaySeconds = 267684;
                                            periodSeconds = 629440;
                                            successThreshold = 93660;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "laudantium";
                                                port = 280706;
                                            }};
                                            timeoutSeconds = 821487;
                                        }};
                                        name = "Melanie Schumm";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 971436;
                                                name = "Miss Dave Cassin";
                                                protocol = "enim";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("aut"),
                                                    add("consectetur"),
                                                    add("in"),
                                                }};
                                            }};
                                            failureThreshold = 698630;
                                            grpc = new GRPCAction() {{
                                                port = 715592;
                                                service = "blanditiis";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "saepe";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Garrett Lowe";
                                                        value = "veritatis";
                                                    }}),
                                                }};
                                                path = "quas";
                                                port = 475214;
                                                scheme = "officiis";
                                            }};
                                            initialDelaySeconds = 287293;
                                            periodSeconds = 862379;
                                            successThreshold = 879682;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "consequatur";
                                                port = 284927;
                                            }};
                                            timeoutSeconds = 673525;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("sed", "corrupti");
                                                put("maxime", "ad");
                                                put("quibusdam", "facere");
                                                put("pariatur", "quidem");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("commodi", "mollitia");
                                                put("similique", "quasi");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 778585;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("illum"),
                                                    add("ea"),
                                                    add("facere"),
                                                    add("corrupti"),
                                                }};
                                            }};
                                            failureThreshold = 166077;
                                            grpc = new GRPCAction() {{
                                                port = 503863;
                                                service = "assumenda";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "culpa";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Peggy Borer Sr.";
                                                        value = "qui";
                                                    }}),
                                                }};
                                                path = "unde";
                                                port = 402707;
                                                scheme = "quaerat";
                                            }};
                                            initialDelaySeconds = 396767;
                                            periodSeconds = 429467;
                                            successThreshold = 311375;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "enim";
                                                port = 768237;
                                            }};
                                            timeoutSeconds = 70173;
                                        }};
                                        terminationMessagePath = "quibusdam";
                                        terminationMessagePolicy = "blanditiis";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "delectus";
                                                name = "Margarita Auer";
                                                readOnly = false;
                                                subPath = "sapiente";
                                            }}),
                                        }};
                                        workingDir = "nemo";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("iste"),
                                            add("quidem"),
                                        }};
                                        command = new String[]{{
                                            add("culpa"),
                                            add("reiciendis"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Tasha Pagac";
                                                value = "veritatis";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "vel";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Ms. Pete Ullrich MD";
                                                        }};
                                                        name = "Andrew Jaskolski";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "sed";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Lindsey Pfeffer";
                                                        }};
                                                        name = "Mattie Gutkowski";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Sergio Cruickshank";
                                                value = "repellendus";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "eaque";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Ms. Ollie Gibson";
                                                        }};
                                                        name = "Kayla Kilback";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "repellendus";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Mario Gerlach";
                                                        }};
                                                        name = "Garry Schultz";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Dominick Jakubowski";
                                                value = "provident";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "soluta";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Leslie Feest";
                                                        }};
                                                        name = "Olive Rippin";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "delectus";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Roberta Sawayn";
                                                        }};
                                                        name = "Francis Bechtelar DDS";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Mr. Eileen Osinski";
                                                value = "molestiae";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "voluptate";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Elaine Von";
                                                        }};
                                                        name = "Angelina Batz";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "temporibus";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Lorena Stoltenberg";
                                                        }};
                                                        name = "Robin Smith";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Mrs. Dolores Kulas V";
                                                    }};
                                                    name = "Nelson Walker";
                                                    optional = false;
                                                }};
                                                prefix = "doloremque";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Jeff Schimmel";
                                                    }};
                                                    name = "Shawna Miller";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "incidunt";
                                        imagePullPolicy = "fugit";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("odio"),
                                                    add("quidem"),
                                                    add("iure"),
                                                    add("aliquid"),
                                                }};
                                            }};
                                            failureThreshold = 637077;
                                            grpc = new GRPCAction() {{
                                                port = 76797;
                                                service = "reiciendis";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "ipsum";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Cody Franey";
                                                        value = "exercitationem";
                                                    }}),
                                                }};
                                                path = "quidem";
                                                port = 408208;
                                                scheme = "molestiae";
                                            }};
                                            initialDelaySeconds = 112441;
                                            periodSeconds = 570437;
                                            successThreshold = 528085;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "iste";
                                                port = 50903;
                                            }};
                                            timeoutSeconds = 968945;
                                        }};
                                        name = "Andrea Orn";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 267839;
                                                name = "Penny Swaniawski";
                                                protocol = "tempore";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 180839;
                                                name = "Kimberly Hansen PhD";
                                                protocol = "reprehenderit";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 273793;
                                                name = "Silvia Dietrich";
                                                protocol = "quae";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("sint"),
                                                    add("minus"),
                                                }};
                                            }};
                                            failureThreshold = 567441;
                                            grpc = new GRPCAction() {{
                                                port = 784641;
                                                service = "nesciunt";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "maiores";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Dr. Joy Torphy";
                                                        value = "corporis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Courtney Hoeger";
                                                        value = "beatae";
                                                    }}),
                                                }};
                                                path = "repellendus";
                                                port = 402121;
                                                scheme = "consequuntur";
                                            }};
                                            initialDelaySeconds = 963375;
                                            periodSeconds = 751906;
                                            successThreshold = 822315;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "laborum";
                                                port = 761835;
                                            }};
                                            timeoutSeconds = 890688;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("reiciendis", "consequatur");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("odit", "inventore");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 388889;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("repudiandae"),
                                                    add("consequuntur"),
                                                    add("aspernatur"),
                                                    add("sequi"),
                                                }};
                                            }};
                                            failureThreshold = 572483;
                                            grpc = new GRPCAction() {{
                                                port = 882036;
                                                service = "deleniti";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "earum";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Dr. Brooke Spinka V";
                                                        value = "quibusdam";
                                                    }}),
                                                }};
                                                path = "excepturi";
                                                port = 346081;
                                                scheme = "sint";
                                            }};
                                            initialDelaySeconds = 984080;
                                            periodSeconds = 301289;
                                            successThreshold = 236372;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "natus";
                                                port = 900479;
                                            }};
                                            timeoutSeconds = 243580;
                                        }};
                                        terminationMessagePath = "sint";
                                        terminationMessagePolicy = "eos";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "commodi";
                                                name = "Cesar Spencer";
                                                readOnly = false;
                                                subPath = "delectus";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "molestiae";
                                                name = "Pablo Connelly";
                                                readOnly = false;
                                                subPath = "magnam";
                                            }}),
                                        }};
                                        workingDir = "et";
                                    }}),
                                }};
                                enableServiceLinks = false;
                                imagePullSecrets = new org.openapis.openapi.models.shared.LocalObjectReference[]{{
                                    add(new LocalObjectReference() {{
                                        name = "Alma Metz";
                                    }}),
                                }};
                                serviceAccountName = "et";
                                timeoutSeconds = 893868;
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 400044;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "quas";
                                                    mode = 996338;
                                                    path = "placeat";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "eligendi";
                                                    mode = 312070;
                                                    path = "veniam";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "perspiciatis";
                                                    mode = 415783;
                                                    path = "dolores";
                                                }}),
                                            }};
                                            name = "Minnie Schneider";
                                            optional = false;
                                        }};
                                        emptyDir = new EmptyDirVolumeSource() {{
                                            medium = "quam";
                                            sizeLimit = "molestiae";
                                        }};
                                        name = "Allison Kemmer";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 273839;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "ad";
                                                    mode = 275665;
                                                    path = "alias";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "adipisci";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 541468;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "asperiores";
                                                    mode = 716975;
                                                    path = "minima";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "cupiditate";
                                                    mode = 477679;
                                                    path = "et";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "accusamus";
                                                    mode = 566262;
                                                    path = "deleniti";
                                                }}),
                                            }};
                                            name = "Erika Auer";
                                            optional = false;
                                        }};
                                        emptyDir = new EmptyDirVolumeSource() {{
                                            medium = "molestiae";
                                            sizeLimit = "adipisci";
                                        }};
                                        name = "Enrique Ruecker";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 719852;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "cumque";
                                                    mode = 449867;
                                                    path = "a";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "quibusdam";
                                                    mode = 634091;
                                                    path = "dolor";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "occaecati";
                                                    mode = 351328;
                                                    path = "unde";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "labore";
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "vel";
                                latestRevision = false;
                                percent = 388099;
                                revisionName = "soluta";
                                tag = "minus";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "magni";
                                latestRevision = false;
                                percent = 652257;
                                revisionName = "officiis";
                                tag = "aliquam";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "quas";
                                latestRevision = false;
                                percent = 13688;
                                revisionName = "autem";
                                tag = "dolorem";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "explicabo";
                                latestRevision = false;
                                percent = 699989;
                                revisionName = "iste";
                                tag = "occaecati";
                            }}),
                        }};
                    }};;
                    status = new ServiceStatusInput() {{
                        address = new Addressable() {{
                            url = "enim";
                        }};;
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "libero";
                                message = "iure";
                                reason = "voluptatibus";
                                severity = "id";
                                status = "qui";
                                type = "explicabo";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "accusantium";
                                message = "eum";
                                reason = "nesciunt";
                                severity = "commodi";
                                status = "molestias";
                                type = "atque";
                            }}),
                        }};
                        latestCreatedRevisionName = "explicabo";
                        latestReadyRevisionName = "totam";
                        observedGeneration = 371045;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "sequi";
                                latestRevision = false;
                                percent = 762734;
                                revisionName = "libero";
                                tag = "ab";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "alias";
                                latestRevision = false;
                                percent = 35538;
                                revisionName = "doloremque";
                                tag = "autem";
                            }}),
                        }};
                        url = "tempore";
                    }};;
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                dryRun = "provident";
                fields = "dolores";
                key = "illo";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "magni";
                uploadProtocol = "sit";
            }};            

            RunProjectsLocationsServicesReplaceServiceResponse res = sdk.projects.runProjectsLocationsServicesReplaceService(req, new RunProjectsLocationsServicesReplaceServiceSecurity("voluptas", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesSetIamPolicy

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesSetIamPolicySecurity;
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

            RunProjectsLocationsServicesSetIamPolicyRequest req = new RunProjectsLocationsServicesSetIamPolicyRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quisquam"),
                                            add("rem"),
                                            add("eveniet"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repellat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "libero";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("totam"),
                                            add("facere"),
                                            add("eius"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aut"),
                                            add("sequi"),
                                            add("reiciendis"),
                                            add("neque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nobis"),
                                            add("est"),
                                            add("quia"),
                                            add("natus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "facilis";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ipsum";
                                    expression = "itaque";
                                    location = "cupiditate";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("nobis"),
                                    add("numquam"),
                                    add("consequatur"),
                                }};
                                role = "temporibus";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "doloribus";
                                    expression = "quos";
                                    location = "commodi";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("nulla"),
                                    add("nemo"),
                                    add("ratione"),
                                    add("dolore"),
                                }};
                                role = "perferendis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "enim";
                                    expression = "impedit";
                                    location = "libero";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("vitae"),
                                }};
                                role = "pariatur";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "numquam";
                                    expression = "provident";
                                    location = "quia";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("doloribus"),
                                    add("et"),
                                }};
                                role = "qui";
                            }}),
                        }};
                        etag = "iusto";
                        version = 955783;
                    }};;
                    updateMask = "quidem";
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "soluta";
                key = "hic";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "deleniti";
                uploadProtocol = "fugit";
            }};            

            RunProjectsLocationsServicesSetIamPolicyResponse res = sdk.projects.runProjectsLocationsServicesSetIamPolicy(req, new RunProjectsLocationsServicesSetIamPolicySecurity("inventore", "reprehenderit") {{
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

## runProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesTestIamPermissionsRequest req = new RunProjectsLocationsServicesTestIamPermissionsRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nulla"),
                        add("consequatur"),
                        add("similique"),
                    }};
                }};;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "odio";
                key = "voluptate";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "tempore";
                uploadProtocol = "voluptate";
            }};            

            RunProjectsLocationsServicesTestIamPermissionsResponse res = sdk.projects.runProjectsLocationsServicesTestIamPermissions(req, new RunProjectsLocationsServicesTestIamPermissionsSecurity("cum", "esse") {{
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
