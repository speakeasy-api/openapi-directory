# namespaces

### Available Operations

* [runNamespacesAuthorizeddomainsList](#runnamespacesauthorizeddomainslist) - List authorized domains.
* [runNamespacesConfigurationsList](#runnamespacesconfigurationslist) - List configurations.
* [runNamespacesDomainmappingsCreate](#runnamespacesdomainmappingscreate) - Create a new domain mapping.
* [runNamespacesDomainmappingsDelete](#runnamespacesdomainmappingsdelete) - Delete a domain mapping.
* [runNamespacesDomainmappingsGet](#runnamespacesdomainmappingsget) - Get information about a domain mapping.
* [runNamespacesDomainmappingsList](#runnamespacesdomainmappingslist) - List all domain mappings.
* [runNamespacesExecutionsCancel](#runnamespacesexecutionscancel) - Cancel an execution.
* [runNamespacesExecutionsList](#runnamespacesexecutionslist) - List executions.
* [runNamespacesJobsCreate](#runnamespacesjobscreate) - Create a job.
* [runNamespacesJobsDelete](#runnamespacesjobsdelete) - Delete a job.
* [runNamespacesJobsList](#runnamespacesjobslist) - List jobs.
* [runNamespacesJobsReplaceJob](#runnamespacesjobsreplacejob) - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runNamespacesJobsRun](#runnamespacesjobsrun) - Trigger creation of a new execution of this job.
* [runNamespacesRevisionsList](#runnamespacesrevisionslist) - List revisions.
* [runNamespacesRoutesList](#runnamespacesrouteslist) - List routes.
* [runNamespacesServicesCreate](#runnamespacesservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [runNamespacesServicesDelete](#runnamespacesservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [runNamespacesServicesGet](#runnamespacesservicesget) - Gets information about a service.
* [runNamespacesServicesList](#runnamespacesserviceslist) - Lists services for the given project and region.
* [runNamespacesServicesReplaceService](#runnamespacesservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runNamespacesTasksGet](#runnamespacestasksget) - Get information about a task.
* [runNamespacesTasksList](#runnamespacestaskslist) - List tasks.

## runNamespacesAuthorizeddomainsList

List authorized domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListResponse;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesAuthorizeddomainsListRequest req = new RunNamespacesAuthorizeddomainsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                pageSize = 479977L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            RunNamespacesAuthorizeddomainsListResponse res = sdk.namespaces.runNamespacesAuthorizeddomainsList(req, new RunNamespacesAuthorizeddomainsListSecurity("ab", "quis") {{
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

## runNamespacesConfigurationsList

List configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesConfigurationsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesConfigurationsListResponse;
import org.openapis.openapi.models.operations.RunNamespacesConfigurationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesConfigurationsListRequest req = new RunNamespacesConfigurationsListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                continue_ = "sapiente";
                fieldSelector = "quo";
                fields = "odit";
                includeUninitialized = false;
                key = "at";
                labelSelector = "at";
                limit = 978619L;
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                resourceVersion = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
                watch = false;
            }};            

            RunNamespacesConfigurationsListResponse res = sdk.namespaces.runNamespacesConfigurationsList(req, new RunNamespacesConfigurationsListSecurity("porro", "dolorum") {{
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

## runNamespacesDomainmappingsCreate

Create a new domain mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsCreateRequest;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsCreateResponse;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsCreateSecurity;
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

            RunNamespacesDomainmappingsCreateRequest req = new RunNamespacesDomainmappingsCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                domainMapping = new DomainMapping() {{
                    apiVersion = "officia";
                    kind = "occaecati";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("deleniti", "hic");
                        }};
                        clusterName = "optio";
                        creationTimestamp = "totam";
                        deletionGracePeriodSeconds = 105907;
                        deletionTimestamp = "commodi";
                        finalizers = new String[]{{
                            add("modi"),
                            add("qui"),
                        }};
                        generateName = "impedit";
                        generation = 736918;
                        labels = new java.util.HashMap<String, String>() {{
                            put("ipsum", "excepturi");
                            put("aspernatur", "perferendis");
                        }};
                        name = "Faye Cormier";
                        namespace = "natus";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "hic";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "saepe";
                                name = "Harvey Hessel";
                                uid = "saepe";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "quidem";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "architecto";
                                name = "Lela Orn";
                                uid = "dolores";
                            }}),
                        }};
                        resourceVersion = "dolorem";
                        selfLink = "corporis";
                        uid = "explicabo";
                    }};;
                    spec = new DomainMappingSpec() {{
                        certificateMode = DomainMappingSpecCertificateModeEnum.AUTOMATIC;
                        forceOverride = false;
                        routeName = "enim";
                    }};;
                    status = new DomainMappingStatus() {{
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "nemo";
                                message = "minima";
                                reason = "excepturi";
                                severity = "accusantium";
                                status = "iure";
                                type = "culpa";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "doloribus";
                                message = "sapiente";
                                reason = "architecto";
                                severity = "mollitia";
                                status = "dolorem";
                                type = "culpa";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "consequuntur";
                                message = "repellat";
                                reason = "mollitia";
                                severity = "occaecati";
                                status = "numquam";
                                type = "commodi";
                            }}),
                        }};
                        mappedRouteName = "quam";
                        observedGeneration = 474697;
                        resourceRecords = new org.openapis.openapi.models.shared.ResourceRecord[]{{
                            add(new ResourceRecord() {{
                                name = "Miss Eugene Hauck";
                                rrdata = "enim";
                                type = ResourceRecordTypeEnum.RECORD_TYPE_UNSPECIFIED;
                            }}),
                        }};
                        url = "quo";
                    }};;
                }};;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                dryRun = "id";
                fields = "possimus";
                key = "aut";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            RunNamespacesDomainmappingsCreateResponse res = sdk.namespaces.runNamespacesDomainmappingsCreate(req, new RunNamespacesDomainmappingsCreateSecurity("quasi", "reiciendis") {{
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

## runNamespacesDomainmappingsDelete

Delete a domain mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsDeleteRequest;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsDeleteResponse;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesDomainmappingsDeleteRequest req = new RunNamespacesDomainmappingsDeleteRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                apiVersion = "voluptatibus";
                callback = "ipsa";
                dryRun = "omnis";
                fields = "voluptate";
                key = "cum";
                kind = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                propagationPolicy = "reprehenderit";
                quotaUser = "ut";
                uploadType = "maiores";
                uploadProtocol = "dicta";
            }};            

            RunNamespacesDomainmappingsDeleteResponse res = sdk.namespaces.runNamespacesDomainmappingsDelete(req, new RunNamespacesDomainmappingsDeleteSecurity("corporis", "dolore") {{
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

## runNamespacesDomainmappingsGet

Get information about a domain mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsGetRequest;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsGetResponse;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesDomainmappingsGetRequest req = new RunNamespacesDomainmappingsGetRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            RunNamespacesDomainmappingsGetResponse res = sdk.namespaces.runNamespacesDomainmappingsGet(req, new RunNamespacesDomainmappingsGetSecurity("excepturi", "pariatur") {{
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

## runNamespacesDomainmappingsList

List all domain mappings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsListResponse;
import org.openapis.openapi.models.operations.RunNamespacesDomainmappingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesDomainmappingsListRequest req = new RunNamespacesDomainmappingsListRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "quasi";
                continue_ = "repudiandae";
                fieldSelector = "sint";
                fields = "veritatis";
                includeUninitialized = false;
                key = "itaque";
                labelSelector = "incidunt";
                limit = 318569L;
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                resourceVersion = "quibusdam";
                uploadType = "explicabo";
                uploadProtocol = "deserunt";
                watch = false;
            }};            

            RunNamespacesDomainmappingsListResponse res = sdk.namespaces.runNamespacesDomainmappingsList(req, new RunNamespacesDomainmappingsListSecurity("distinctio", "quibusdam") {{
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

## runNamespacesExecutionsCancel

Cancel an execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesExecutionsCancelRequest;
import org.openapis.openapi.models.operations.RunNamespacesExecutionsCancelResponse;
import org.openapis.openapi.models.operations.RunNamespacesExecutionsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesExecutionsCancelRequest req = new RunNamespacesExecutionsCancelRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "cupiditate");
                }};
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "dolorum";
                uploadProtocol = "excepturi";
            }};            

            RunNamespacesExecutionsCancelResponse res = sdk.namespaces.runNamespacesExecutionsCancel(req, new RunNamespacesExecutionsCancelSecurity("tempora", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesExecutionsList

List executions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesExecutionsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesExecutionsListResponse;
import org.openapis.openapi.models.operations.RunNamespacesExecutionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesExecutionsListRequest req = new RunNamespacesExecutionsListRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "non";
                continue_ = "eligendi";
                fieldSelector = "sint";
                fields = "aliquid";
                includeUninitialized = false;
                key = "provident";
                labelSelector = "necessitatibus";
                limit = 572252L;
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                resourceVersion = "debitis";
                uploadType = "a";
                uploadProtocol = "dolorum";
                watch = false;
            }};            

            RunNamespacesExecutionsListResponse res = sdk.namespaces.runNamespacesExecutionsList(req, new RunNamespacesExecutionsListSecurity("in", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesJobsCreate

Create a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateSecurity;
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
import org.openapis.openapi.models.shared.ExecutionReference;
import org.openapis.openapi.models.shared.ExecutionSpec;
import org.openapis.openapi.models.shared.ExecutionTemplateSpec;
import org.openapis.openapi.models.shared.GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV1Condition;
import org.openapis.openapi.models.shared.HTTPGetAction;
import org.openapis.openapi.models.shared.HTTPHeader;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobSpec;
import org.openapis.openapi.models.shared.JobStatus;
import org.openapis.openapi.models.shared.KeyToPath;
import org.openapis.openapi.models.shared.LocalObjectReference;
import org.openapis.openapi.models.shared.ObjectMeta;
import org.openapis.openapi.models.shared.OwnerReference;
import org.openapis.openapi.models.shared.Probe;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.SecretEnvSource;
import org.openapis.openapi.models.shared.SecretKeySelector;
import org.openapis.openapi.models.shared.SecretVolumeSource;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.TCPSocketAction;
import org.openapis.openapi.models.shared.TaskSpec;
import org.openapis.openapi.models.shared.TaskTemplateSpec;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VolumeMount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsCreateRequest req = new RunNamespacesJobsCreateRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                job = new Job() {{
                    apiVersion = "rerum";
                    kind = "dicta";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("cumque", "facere");
                            put("ea", "aliquid");
                        }};
                        clusterName = "laborum";
                        creationTimestamp = "accusamus";
                        deletionGracePeriodSeconds = 249796;
                        deletionTimestamp = "occaecati";
                        finalizers = new String[]{{
                            add("accusamus"),
                            add("delectus"),
                        }};
                        generateName = "quidem";
                        generation = 588465;
                        labels = new java.util.HashMap<String, String>() {{
                            put("id", "blanditiis");
                            put("deleniti", "sapiente");
                            put("amet", "deserunt");
                        }};
                        name = "Wilma Mosciski";
                        namespace = "perferendis";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "magnam";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "distinctio";
                                name = "Leroy Greenfelder";
                                uid = "nobis";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "eum";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "vero";
                                name = "Ms. Julie Gusikowski";
                                uid = "provident";
                            }}),
                        }};
                        resourceVersion = "quos";
                        selfLink = "sint";
                        uid = "accusantium";
                    }};;
                    spec = new JobSpec() {{
                        template = new ExecutionTemplateSpec() {{
                            metadata = new ObjectMeta() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "mollitia");
                                    put("ad", "eum");
                                    put("dolor", "necessitatibus");
                                }};
                                clusterName = "odit";
                                creationTimestamp = "nemo";
                                deletionGracePeriodSeconds = 97260;
                                deletionTimestamp = "iure";
                                finalizers = new String[]{{
                                    add("debitis"),
                                    add("eius"),
                                    add("maxime"),
                                    add("deleniti"),
                                }};
                                generateName = "facilis";
                                generation = 447926;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("architecto", "repudiandae");
                                }};
                                name = "Lola Koss";
                                namespace = "sed";
                                ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                                    add(new OwnerReference() {{
                                        apiVersion = "pariatur";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "accusantium";
                                        name = "Irma Morissette DDS";
                                        uid = "illum";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "pariatur";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "maxime";
                                        name = "Miriam Connelly Jr.";
                                        uid = "maiores";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "quidem";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "ipsam";
                                        name = "Dr. Stacey Reichert";
                                        uid = "voluptatibus";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "perferendis";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "fugiat";
                                        name = "Jennifer Runolfsdottir";
                                        uid = "libero";
                                    }}),
                                }};
                                resourceVersion = "nobis";
                                selfLink = "dolores";
                                uid = "quis";
                            }};;
                            spec = new ExecutionSpec() {{
                                parallelism = 521037;
                                taskCount = 489549;
                                template = new TaskTemplateSpec() {{
                                    spec = new TaskSpec() {{
                                        containers = new org.openapis.openapi.models.shared.Container[]{{
                                            add(new Container() {{
                                                args = new String[]{{
                                                    add("nesciunt"),
                                                    add("eos"),
                                                }};
                                                command = new String[]{{
                                                    add("dolores"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                                    add(new EnvVar() {{
                                                        name = "Rosa Swift";
                                                        value = "recusandae";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "omnis";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Freddie Bartoletti";
                                                                }};
                                                                name = "Jeremiah Beatty";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "adipisci";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Merle Gleichner";
                                                                }};
                                                                name = "Ervin McLaughlin";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Alex Luettgen";
                                                        value = "dolorem";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "dolor";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Tiffany Welch";
                                                                }};
                                                                name = "Marian Wisozk";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "numquam";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Melissa Bednar";
                                                                }};
                                                                name = "Sophia Predovic";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Dr. Craig Littel DDS";
                                                        value = "dolorum";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "iusto";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Sonya Leuschke";
                                                                }};
                                                                name = "Emmett Kovacek";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "id";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Mrs. Ray Collins";
                                                                }};
                                                                name = "Tommy Turner";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Derek Sipes";
                                                        value = "alias";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "at";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Rhonda Kautzer";
                                                                }};
                                                                name = "Jan Wilderman";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "iusto";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Rosalie White";
                                                                }};
                                                                name = "Francis Haley";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Karen Rath";
                                                            }};
                                                            name = "Kelli Hintz";
                                                            optional = false;
                                                        }};
                                                        prefix = "ipsum";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Norma McGlynn";
                                                            }};
                                                            name = "Keith Padberg";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Bonnie Raynor";
                                                            }};
                                                            name = "Felicia Spencer";
                                                            optional = false;
                                                        }};
                                                        prefix = "fugit";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Courtney Cassin";
                                                            }};
                                                            name = "George Runolfsdottir";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Miss Kerry Emmerich";
                                                            }};
                                                            name = "Kent Bayer";
                                                            optional = false;
                                                        }};
                                                        prefix = "dolore";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Mr. Josephine Pagac V";
                                                            }};
                                                            name = "William Ortiz";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                }};
                                                image = "doloribus";
                                                imagePullPolicy = "ut";
                                                livenessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("cupiditate"),
                                                            add("qui"),
                                                            add("quae"),
                                                        }};
                                                    }};
                                                    failureThreshold = 512393;
                                                    grpc = new GRPCAction() {{
                                                        port = 485628;
                                                        service = "occaecati";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "voluptatibus";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Arturo Hauck";
                                                                value = "voluptate";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Meghan Wiegand";
                                                                value = "distinctio";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Lonnie Murray";
                                                                value = "ducimus";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Rosemarie Stanton";
                                                                value = "impedit";
                                                            }}),
                                                        }};
                                                        path = "aut";
                                                        port = 974259;
                                                        scheme = "exercitationem";
                                                    }};
                                                    initialDelaySeconds = 862310;
                                                    periodSeconds = 148141;
                                                    successThreshold = 780427;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "maiores";
                                                        port = 985033;
                                                    }};
                                                    timeoutSeconds = 478370;
                                                }};
                                                name = "Kurt Abernathy";
                                                ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                                    add(new ContainerPort() {{
                                                        containerPort = 410492;
                                                        name = "Jessie Schuster";
                                                        protocol = "ex";
                                                    }}),
                                                    add(new ContainerPort() {{
                                                        containerPort = 511319;
                                                        name = "Ms. Cindy Wuckert";
                                                        protocol = "excepturi";
                                                    }}),
                                                }};
                                                readinessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("nostrum"),
                                                            add("sapiente"),
                                                            add("quisquam"),
                                                            add("saepe"),
                                                        }};
                                                    }};
                                                    failureThreshold = 411372;
                                                    grpc = new GRPCAction() {{
                                                        port = 774048;
                                                        service = "corporis";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "veniam";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Megan Jaskolski";
                                                                value = "recusandae";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Cathy Becker";
                                                                value = "aut";
                                                            }}),
                                                        }};
                                                        path = "aut";
                                                        port = 533466;
                                                        scheme = "impedit";
                                                    }};
                                                    initialDelaySeconds = 304582;
                                                    periodSeconds = 146946;
                                                    successThreshold = 882860;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "inventore";
                                                        port = 250622;
                                                    }};
                                                    timeoutSeconds = 89603;
                                                }};
                                                resources = new ResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("laborum", "placeat");
                                                        put("velit", "eum");
                                                        put("autem", "nobis");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("assumenda", "nulla");
                                                        put("voluptas", "libero");
                                                        put("quasi", "tempora");
                                                    }};
                                                }};
                                                securityContext = new SecurityContext() {{
                                                    runAsUser = 256139;
                                                }};
                                                startupProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("provident"),
                                                        }};
                                                    }};
                                                    failureThreshold = 55374;
                                                    grpc = new GRPCAction() {{
                                                        port = 476477;
                                                        service = "magnam";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "odio";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Tamara Leffler";
                                                                value = "quidem";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Bernard Kerluke";
                                                                value = "eos";
                                                            }}),
                                                        }};
                                                        path = "praesentium";
                                                        port = 788546;
                                                        scheme = "veritatis";
                                                    }};
                                                    initialDelaySeconds = 56848;
                                                    periodSeconds = 660040;
                                                    successThreshold = 696997;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "neque";
                                                        port = 778696;
                                                    }};
                                                    timeoutSeconds = 847276;
                                                }};
                                                terminationMessagePath = "quo";
                                                terminationMessagePolicy = "fuga";
                                                volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                                    add(new VolumeMount() {{
                                                        mountPath = "eos";
                                                        name = "Mrs. Virginia McGlynn";
                                                        readOnly = false;
                                                        subPath = "ipsam";
                                                    }}),
                                                    add(new VolumeMount() {{
                                                        mountPath = "aspernatur";
                                                        name = "Angelica Koelpin MD";
                                                        readOnly = false;
                                                        subPath = "quod";
                                                    }}),
                                                }};
                                                workingDir = "dignissimos";
                                            }}),
                                        }};
                                        maxRetries = 76956;
                                        serviceAccountName = "nihil";
                                        timeoutSeconds = "totam";
                                        volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                            add(new Volume() {{
                                                configMap = new ConfigMapVolumeSource() {{
                                                    defaultMode = 306810;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "occaecati";
                                                            mode = 414567;
                                                            path = "sapiente";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "dolores";
                                                            mode = 645570;
                                                            path = "molestiae";
                                                        }}),
                                                    }};
                                                    name = "Robyn Keeling";
                                                    optional = false;
                                                }};
                                                emptyDir = new EmptyDirVolumeSource() {{
                                                    medium = "consequuntur";
                                                    sizeLimit = "deleniti";
                                                }};
                                                name = "Lee O'Conner";
                                                secret = new SecretVolumeSource() {{
                                                    defaultMode = 128860;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "nisi";
                                                            mode = 147014;
                                                            path = "sapiente";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "consequuntur";
                                                            mode = 187131;
                                                            path = "explicabo";
                                                        }}),
                                                    }};
                                                    optional = false;
                                                    secretName = "saepe";
                                                }};
                                            }}),
                                            add(new Volume() {{
                                                configMap = new ConfigMapVolumeSource() {{
                                                    defaultMode = 578922;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "et";
                                                            mode = 456911;
                                                            path = "eveniet";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "accusamus";
                                                            mode = 82971;
                                                            path = "esse";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "quod";
                                                            mode = 724168;
                                                            path = "vero";
                                                        }}),
                                                    }};
                                                    name = "Frances Turner";
                                                    optional = false;
                                                }};
                                                emptyDir = new EmptyDirVolumeSource() {{
                                                    medium = "molestiae";
                                                    sizeLimit = "rerum";
                                                }};
                                                name = "Warren Rau V";
                                                secret = new SecretVolumeSource() {{
                                                    defaultMode = 731398;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "cumque";
                                                            mode = 160538;
                                                            path = "consequatur";
                                                        }}),
                                                    }};
                                                    optional = false;
                                                    secretName = "minus";
                                                }};
                                            }}),
                                            add(new Volume() {{
                                                configMap = new ConfigMapVolumeSource() {{
                                                    defaultMode = 308286;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "consectetur";
                                                            mode = 458139;
                                                            path = "blanditiis";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "provident";
                                                            mode = 953722;
                                                            path = "nulla";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "quas";
                                                            mode = 457223;
                                                            path = "quasi";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "a";
                                                            mode = 621679;
                                                            path = "sint";
                                                        }}),
                                                    }};
                                                    name = "Rufus Crona";
                                                    optional = false;
                                                }};
                                                emptyDir = new EmptyDirVolumeSource() {{
                                                    medium = "facere";
                                                    sizeLimit = "veritatis";
                                                }};
                                                name = "Ann Murphy";
                                                secret = new SecretVolumeSource() {{
                                                    defaultMode = 949298;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "earum";
                                                            mode = 424032;
                                                            path = "in";
                                                        }}),
                                                    }};
                                                    optional = false;
                                                    secretName = "eius";
                                                }};
                                            }}),
                                            add(new Volume() {{
                                                configMap = new ConfigMapVolumeSource() {{
                                                    defaultMode = 727697;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "soluta";
                                                            mode = 33304;
                                                            path = "aliquam";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "sapiente";
                                                            mode = 119771;
                                                            path = "ullam";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "reprehenderit";
                                                            mode = 356707;
                                                            path = "nisi";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "aut";
                                                            mode = 531849;
                                                            path = "qui";
                                                        }}),
                                                    }};
                                                    name = "Marc Leuschke";
                                                    optional = false;
                                                }};
                                                emptyDir = new EmptyDirVolumeSource() {{
                                                    medium = "architecto";
                                                    sizeLimit = "omnis";
                                                }};
                                                name = "Ms. Roger Strosin II";
                                                secret = new SecretVolumeSource() {{
                                                    defaultMode = 86532;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "adipisci";
                                                            mode = 614465;
                                                            path = "temporibus";
                                                        }}),
                                                    }};
                                                    optional = false;
                                                    secretName = "accusantium";
                                                }};
                                            }}),
                                        }};
                                    }};;
                                }};;
                            }};;
                        }};;
                    }};;
                    status = new JobStatus() {{
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "aut";
                                message = "laudantium";
                                reason = "eum";
                                severity = "mollitia";
                                status = "ab";
                                type = "corrupti";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "non";
                                message = "voluptatem";
                                reason = "dolor";
                                severity = "occaecati";
                                status = "numquam";
                                type = "impedit";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "explicabo";
                                message = "voluptas";
                                reason = "aut";
                                severity = "dignissimos";
                                status = "dicta";
                                type = "maiores";
                            }}),
                        }};
                        executionCount = 618480;
                        latestCreatedExecution = new ExecutionReference() {{
                            completionTimestamp = "velit";
                            creationTimestamp = "voluptatibus";
                            name = "Tabitha Bayer";
                        }};;
                        observedGeneration = 162954;
                    }};;
                }};;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "dignissimos";
                key = "officia";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quae";
                uploadProtocol = "quaerat";
            }};            

            RunNamespacesJobsCreateResponse res = sdk.namespaces.runNamespacesJobsCreate(req, new RunNamespacesJobsCreateSecurity("porro", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesJobsDelete

Delete a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsDeleteRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsDeleteResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsDeleteRequest req = new RunNamespacesJobsDeleteRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                apiVersion = "id";
                callback = "suscipit";
                fields = "velit";
                key = "culpa";
                kind = "est";
                oauthToken = "recusandae";
                prettyPrint = false;
                propagationPolicy = "totam";
                quotaUser = "fugiat";
                uploadType = "vel";
                uploadProtocol = "ducimus";
            }};            

            RunNamespacesJobsDeleteResponse res = sdk.namespaces.runNamespacesJobsDelete(req, new RunNamespacesJobsDeleteSecurity("quos", "vel") {{
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

## runNamespacesJobsList

List jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsListResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsListRequest req = new RunNamespacesJobsListRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "commodi";
                continue_ = "in";
                fieldSelector = "corporis";
                fields = "reiciendis";
                includeUninitialized = false;
                key = "assumenda";
                labelSelector = "nemo";
                limit = 924967L;
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "aperiam";
                resourceVersion = "cum";
                uploadType = "consectetur";
                uploadProtocol = "in";
                watch = false;
            }};            

            RunNamespacesJobsListResponse res = sdk.namespaces.runNamespacesJobsList(req, new RunNamespacesJobsListSecurity("exercitationem", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesJobsReplaceJob

Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsReplaceJobRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsReplaceJobResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsReplaceJobSecurity;
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
import org.openapis.openapi.models.shared.ExecutionReference;
import org.openapis.openapi.models.shared.ExecutionSpec;
import org.openapis.openapi.models.shared.ExecutionTemplateSpec;
import org.openapis.openapi.models.shared.GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV1Condition;
import org.openapis.openapi.models.shared.HTTPGetAction;
import org.openapis.openapi.models.shared.HTTPHeader;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobSpec;
import org.openapis.openapi.models.shared.JobStatus;
import org.openapis.openapi.models.shared.KeyToPath;
import org.openapis.openapi.models.shared.LocalObjectReference;
import org.openapis.openapi.models.shared.ObjectMeta;
import org.openapis.openapi.models.shared.OwnerReference;
import org.openapis.openapi.models.shared.Probe;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.SecretEnvSource;
import org.openapis.openapi.models.shared.SecretKeySelector;
import org.openapis.openapi.models.shared.SecretVolumeSource;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.TCPSocketAction;
import org.openapis.openapi.models.shared.TaskSpec;
import org.openapis.openapi.models.shared.TaskTemplateSpec;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VolumeMount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsReplaceJobRequest req = new RunNamespacesJobsReplaceJobRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                job = new Job() {{
                    apiVersion = "doloribus";
                    kind = "suscipit";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("quidem", "saepe");
                            put("necessitatibus", "dolore");
                            put("sunt", "asperiores");
                            put("adipisci", "non");
                        }};
                        clusterName = "amet";
                        creationTimestamp = "beatae";
                        deletionGracePeriodSeconds = 489509;
                        deletionTimestamp = "a";
                        finalizers = new String[]{{
                            add("consectetur"),
                            add("corporis"),
                            add("harum"),
                            add("laboriosam"),
                        }};
                        generateName = "ipsa";
                        generation = 916727;
                        labels = new java.util.HashMap<String, String>() {{
                            put("vitae", "accusamus");
                            put("similique", "tempora");
                            put("aspernatur", "voluptas");
                        }};
                        name = "Melanie Hane";
                        namespace = "adipisci";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "dolores";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "blanditiis";
                                name = "Valerie Haag";
                                uid = "ullam";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "adipisci";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "cum";
                                name = "Morris Weissnat";
                                uid = "corrupti";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "pariatur";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "totam";
                                name = "Miss Jorge Rolfson";
                                uid = "reiciendis";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "explicabo";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "asperiores";
                                name = "Miss Jared Quitzon";
                                uid = "laborum";
                            }}),
                        }};
                        resourceVersion = "sed";
                        selfLink = "in";
                        uid = "commodi";
                    }};;
                    spec = new JobSpec() {{
                        template = new ExecutionTemplateSpec() {{
                            metadata = new ObjectMeta() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "voluptas");
                                    put("unde", "architecto");
                                    put("suscipit", "sapiente");
                                }};
                                clusterName = "debitis";
                                creationTimestamp = "illo";
                                deletionGracePeriodSeconds = 967795;
                                deletionTimestamp = "perferendis";
                                finalizers = new String[]{{
                                    add("maiores"),
                                    add("incidunt"),
                                    add("sed"),
                                }};
                                generateName = "provident";
                                generation = 258702;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ipsum", "ea");
                                    put("occaecati", "quos");
                                    put("voluptatibus", "tempora");
                                    put("tempora", "voluptate");
                                }};
                                name = "Marc Balistreri";
                                namespace = "praesentium";
                                ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                                    add(new OwnerReference() {{
                                        apiVersion = "quaerat";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "incidunt";
                                        name = "Miss Alyssa Leffler";
                                        uid = "veniam";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "minima";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "recusandae";
                                        name = "Dr. Jody Cummings";
                                        uid = "veniam";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "in";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "officiis";
                                        name = "Marsha Heidenreich";
                                        uid = "laboriosam";
                                    }}),
                                }};
                                resourceVersion = "dolorum";
                                selfLink = "voluptatum";
                                uid = "error";
                            }};;
                            spec = new ExecutionSpec() {{
                                parallelism = 944708;
                                taskCount = 710529;
                                template = new TaskTemplateSpec() {{
                                    spec = new TaskSpec() {{
                                        containers = new org.openapis.openapi.models.shared.Container[]{{
                                            add(new Container() {{
                                                args = new String[]{{
                                                    add("dolorum"),
                                                }};
                                                command = new String[]{{
                                                    add("officia"),
                                                    add("dolorum"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                                    add(new EnvVar() {{
                                                        name = "Ricky Little";
                                                        value = "fugiat";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "voluptatem";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Ms. Rudolph Gusikowski";
                                                                }};
                                                                name = "Nora Lynch";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "et";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Ms. Ruben Cremin";
                                                                }};
                                                                name = "Evan Altenwerth";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Ms. Opal Buckridge";
                                                        value = "quidem";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "atque";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Marco White I";
                                                                }};
                                                                name = "Karl Miller";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "repellendus";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Noah Armstrong";
                                                                }};
                                                                name = "Chelsea Pfannerstill";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Helen Schiller IV";
                                                        value = "reprehenderit";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "asperiores";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Sam Powlowski IV";
                                                                }};
                                                                name = "Angelina Jenkins";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "officiis";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Tomas Mosciski";
                                                                }};
                                                                name = "Elisa Little";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Delia Littel DVM";
                                                            }};
                                                            name = "Mack Grant DVM";
                                                            optional = false;
                                                        }};
                                                        prefix = "dicta";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Teresa Daniel";
                                                            }};
                                                            name = "Elsa Maggio";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Toni Torphy";
                                                            }};
                                                            name = "Tricia McClure";
                                                            optional = false;
                                                        }};
                                                        prefix = "id";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Mrs. Bessie Muller";
                                                            }};
                                                            name = "Ms. Melvin Thiel IV";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Nellie Upton";
                                                            }};
                                                            name = "Kelley Dibbert";
                                                            optional = false;
                                                        }};
                                                        prefix = "voluptatum";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Jim Hammes II";
                                                            }};
                                                            name = "Christian O'Conner DVM";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                }};
                                                image = "reiciendis";
                                                imagePullPolicy = "dolores";
                                                livenessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("minima"),
                                                            add("dolore"),
                                                            add("dolorum"),
                                                        }};
                                                    }};
                                                    failureThreshold = 200364;
                                                    grpc = new GRPCAction() {{
                                                        port = 63207;
                                                        service = "recusandae";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "omnis";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Carla Graham";
                                                                value = "debitis";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Andre Hills";
                                                                value = "provident";
                                                            }}),
                                                        }};
                                                        path = "quis";
                                                        port = 431785;
                                                        scheme = "reiciendis";
                                                    }};
                                                    initialDelaySeconds = 592780;
                                                    periodSeconds = 133439;
                                                    successThreshold = 354506;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "quasi";
                                                        port = 657020;
                                                    }};
                                                    timeoutSeconds = 343392;
                                                }};
                                                name = "Eduardo Schuster";
                                                ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                                    add(new ContainerPort() {{
                                                        containerPort = 37565;
                                                        name = "Domingo Herman";
                                                        protocol = "earum";
                                                    }}),
                                                    add(new ContainerPort() {{
                                                        containerPort = 637583;
                                                        name = "Irving Gleichner";
                                                        protocol = "officiis";
                                                    }}),
                                                }};
                                                readinessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("cumque"),
                                                            add("vitae"),
                                                            add("rerum"),
                                                            add("tempora"),
                                                        }};
                                                    }};
                                                    failureThreshold = 335498;
                                                    grpc = new GRPCAction() {{
                                                        port = 82057;
                                                        service = "fugit";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "cumque";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Josephine Collins";
                                                                value = "rem";
                                                            }}),
                                                        }};
                                                        path = "at";
                                                        port = 773084;
                                                        scheme = "eos";
                                                    }};
                                                    initialDelaySeconds = 958741;
                                                    periodSeconds = 433279;
                                                    successThreshold = 117320;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "minima";
                                                        port = 107004;
                                                    }};
                                                    timeoutSeconds = 583404;
                                                }};
                                                resources = new ResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("earum", "soluta");
                                                        put("hic", "illum");
                                                        put("eaque", "earum");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("maiores", "debitis");
                                                        put("aliquid", "porro");
                                                        put("suscipit", "dolorem");
                                                    }};
                                                }};
                                                securityContext = new SecurityContext() {{
                                                    runAsUser = 147808;
                                                }};
                                                startupProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("fuga"),
                                                            add("ratione"),
                                                            add("animi"),
                                                            add("necessitatibus"),
                                                        }};
                                                    }};
                                                    failureThreshold = 862063;
                                                    grpc = new GRPCAction() {{
                                                        port = 8931;
                                                        service = "quasi";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "et";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Tracy Homenick Sr.";
                                                                value = "doloribus";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Terence Beer";
                                                                value = "molestiae";
                                                            }}),
                                                        }};
                                                        path = "dicta";
                                                        port = 479754;
                                                        scheme = "esse";
                                                    }};
                                                    initialDelaySeconds = 508390;
                                                    periodSeconds = 979963;
                                                    successThreshold = 967260;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "vel";
                                                        port = 99958;
                                                    }};
                                                    timeoutSeconds = 857125;
                                                }};
                                                terminationMessagePath = "doloremque";
                                                terminationMessagePolicy = "dicta";
                                                volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                                    add(new VolumeMount() {{
                                                        mountPath = "tempora";
                                                        name = "Carla Feil MD";
                                                        readOnly = false;
                                                        subPath = "sunt";
                                                    }}),
                                                    add(new VolumeMount() {{
                                                        mountPath = "nostrum";
                                                        name = "Damon Jacobs";
                                                        readOnly = false;
                                                        subPath = "aliquid";
                                                    }}),
                                                }};
                                                workingDir = "perferendis";
                                            }}),
                                            add(new Container() {{
                                                args = new String[]{{
                                                    add("voluptas"),
                                                    add("iste"),
                                                }};
                                                command = new String[]{{
                                                    add("ab"),
                                                    add("error"),
                                                    add("possimus"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                                    add(new EnvVar() {{
                                                        name = "Cameron Reinger";
                                                        value = "enim";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "vitae";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Ruben Ryan";
                                                                }};
                                                                name = "Lula Bartell";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "aliquid";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Miss Nora Moen";
                                                                }};
                                                                name = "Donald Williamson MD";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Ms. Doyle Barrows";
                                                        value = "ex";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "sapiente";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Israel Hickle";
                                                                }};
                                                                name = "Dorothy Stanton";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "quibusdam";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Clyde Nader";
                                                                }};
                                                                name = "Cassandra Bogan";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Alice Bailey";
                                                        value = "ab";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "laudantium";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Rosa Stiedemann";
                                                                }};
                                                                name = "Tracey Vandervort";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "esse";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Aaron Hartmann";
                                                                }};
                                                                name = "Kristin Legros";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Johnnie Jones";
                                                        value = "recusandae";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "consequuntur";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Mrs. June Tremblay";
                                                                }};
                                                                name = "Carlton Pollich";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "repudiandae";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Marion Hickle";
                                                                }};
                                                                name = "Hector Funk";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Caroline Dooley";
                                                            }};
                                                            name = "Joyce Leffler III";
                                                            optional = false;
                                                        }};
                                                        prefix = "consequuntur";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Kimberly McDermott";
                                                            }};
                                                            name = "Belinda Daugherty";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Stephanie Pfannerstill";
                                                            }};
                                                            name = "Alejandro Wisoky";
                                                            optional = false;
                                                        }};
                                                        prefix = "maxime";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Paulette Lowe";
                                                            }};
                                                            name = "Deanna Wehner";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                }};
                                                image = "vero";
                                                imagePullPolicy = "voluptatem";
                                                livenessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("vel"),
                                                            add("alias"),
                                                        }};
                                                    }};
                                                    failureThreshold = 93894;
                                                    grpc = new GRPCAction() {{
                                                        port = 247685;
                                                        service = "maiores";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "enim";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Gerard Koch";
                                                                value = "est";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Velma Thompson";
                                                                value = "necessitatibus";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Ruben Hodkiewicz";
                                                                value = "quae";
                                                            }}),
                                                        }};
                                                        path = "minus";
                                                        port = 685478;
                                                        scheme = "laborum";
                                                    }};
                                                    initialDelaySeconds = 231070;
                                                    periodSeconds = 244889;
                                                    successThreshold = 538869;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "ipsum";
                                                        port = 773035;
                                                    }};
                                                    timeoutSeconds = 166047;
                                                }};
                                                name = "Lamar Reichert";
                                                ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                                    add(new ContainerPort() {{
                                                        containerPort = 194023;
                                                        name = "Gladys Satterfield";
                                                        protocol = "iure";
                                                    }}),
                                                    add(new ContainerPort() {{
                                                        containerPort = 139072;
                                                        name = "Cecil Gutkowski DDS";
                                                        protocol = "libero";
                                                    }}),
                                                }};
                                                readinessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("voluptatibus"),
                                                        }};
                                                    }};
                                                    failureThreshold = 156383;
                                                    grpc = new GRPCAction() {{
                                                        port = 782090;
                                                        service = "aliquam";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "velit";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Dr. Gina Jaskolski";
                                                                value = "eum";
                                                            }}),
                                                        }};
                                                        path = "velit";
                                                        port = 284086;
                                                        scheme = "perspiciatis";
                                                    }};
                                                    initialDelaySeconds = 935302;
                                                    periodSeconds = 117525;
                                                    successThreshold = 772266;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "voluptatibus";
                                                        port = 610987;
                                                    }};
                                                    timeoutSeconds = 932562;
                                                }};
                                                resources = new ResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("nisi", "itaque");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("laborum", "non");
                                                    }};
                                                }};
                                                securityContext = new SecurityContext() {{
                                                    runAsUser = 224467;
                                                }};
                                                startupProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("sit"),
                                                            add("doloremque"),
                                                        }};
                                                    }};
                                                    failureThreshold = 7468;
                                                    grpc = new GRPCAction() {{
                                                        port = 639705;
                                                        service = "recusandae";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "ea";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Flora Schowalter";
                                                                value = "deleniti";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Karl Herman";
                                                                value = "animi";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Clyde Herzog";
                                                                value = "esse";
                                                            }}),
                                                        }};
                                                        path = "labore";
                                                        port = 85066;
                                                        scheme = "vero";
                                                    }};
                                                    initialDelaySeconds = 233173;
                                                    periodSeconds = 112427;
                                                    successThreshold = 81371;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "dolorem";
                                                        port = 322017;
                                                    }};
                                                    timeoutSeconds = 183033;
                                                }};
                                                terminationMessagePath = "iste";
                                                terminationMessagePolicy = "ex";
                                                volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                                    add(new VolumeMount() {{
                                                        mountPath = "soluta";
                                                        name = "Wallace Pagac";
                                                        readOnly = false;
                                                        subPath = "alias";
                                                    }}),
                                                    add(new VolumeMount() {{
                                                        mountPath = "magni";
                                                        name = "Anna Bergnaum";
                                                        readOnly = false;
                                                        subPath = "exercitationem";
                                                    }}),
                                                }};
                                                workingDir = "itaque";
                                            }}),
                                            add(new Container() {{
                                                args = new String[]{{
                                                    add("ipsum"),
                                                }};
                                                command = new String[]{{
                                                    add("nulla"),
                                                    add("distinctio"),
                                                    add("maxime"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                                    add(new EnvVar() {{
                                                        name = "Bernice Moen MD";
                                                        value = "libero";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "fugiat";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Ms. Morris Schulist DVM";
                                                                }};
                                                                name = "Deborah Larson";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "distinctio";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Ella Koch";
                                                                }};
                                                                name = "Jodi Schumm";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Terence Reynolds";
                                                            }};
                                                            name = "Brittany Prosacco";
                                                            optional = false;
                                                        }};
                                                        prefix = "officiis";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Mr. Jonathon Swaniawski";
                                                            }};
                                                            name = "Phil Barton";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Rosemarie Kub";
                                                            }};
                                                            name = "Stacy Mraz";
                                                            optional = false;
                                                        }};
                                                        prefix = "recusandae";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Bernard Powlowski V";
                                                            }};
                                                            name = "Lucia McDermott";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Peggy Swift";
                                                            }};
                                                            name = "Santiago Herzog";
                                                            optional = false;
                                                        }};
                                                        prefix = "voluptatum";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Warren Schowalter";
                                                            }};
                                                            name = "Sadie Kemmer";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                }};
                                                image = "magnam";
                                                imagePullPolicy = "voluptates";
                                                livenessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("tempore"),
                                                            add("aperiam"),
                                                            add("libero"),
                                                            add("ratione"),
                                                        }};
                                                    }};
                                                    failureThreshold = 289913;
                                                    grpc = new GRPCAction() {{
                                                        port = 520875;
                                                        service = "occaecati";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "voluptas";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Bethany Paucek";
                                                                value = "impedit";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Geoffrey Thiel";
                                                                value = "pariatur";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Bessie Bayer";
                                                                value = "in";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Sonia D'Amore IV";
                                                                value = "voluptate";
                                                            }}),
                                                        }};
                                                        path = "pariatur";
                                                        port = 932666;
                                                        scheme = "similique";
                                                    }};
                                                    initialDelaySeconds = 763165;
                                                    periodSeconds = 401428;
                                                    successThreshold = 311486;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "commodi";
                                                        port = 888616;
                                                    }};
                                                    timeoutSeconds = 810839;
                                                }};
                                                name = "Jorge Kohler";
                                                ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                                    add(new ContainerPort() {{
                                                        containerPort = 575534;
                                                        name = "Earl VonRueden DVM";
                                                        protocol = "veniam";
                                                    }}),
                                                }};
                                                readinessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("dolores"),
                                                            add("nam"),
                                                            add("dicta"),
                                                        }};
                                                    }};
                                                    failureThreshold = 164488;
                                                    grpc = new GRPCAction() {{
                                                        port = 899867;
                                                        service = "nobis";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "ipsa";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Harold Boyer";
                                                                value = "libero";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Marion Hills";
                                                                value = "doloribus";
                                                            }}),
                                                        }};
                                                        path = "eligendi";
                                                        port = 574032;
                                                        scheme = "enim";
                                                    }};
                                                    initialDelaySeconds = 944950;
                                                    periodSeconds = 657319;
                                                    successThreshold = 559774;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "totam";
                                                        port = 564667;
                                                    }};
                                                    timeoutSeconds = 484966;
                                                }};
                                                resources = new ResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("saepe", "architecto");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("iste", "assumenda");
                                                        put("tempore", "libero");
                                                        put("velit", "doloremque");
                                                    }};
                                                }};
                                                securityContext = new SecurityContext() {{
                                                    runAsUser = 963976;
                                                }};
                                                startupProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("cum"),
                                                            add("ipsum"),
                                                            add("adipisci"),
                                                            add("saepe"),
                                                        }};
                                                    }};
                                                    failureThreshold = 644420;
                                                    grpc = new GRPCAction() {{
                                                        port = 42924;
                                                        service = "quis";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "veniam";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Mae Krajcik";
                                                                value = "non";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Kellie Corwin";
                                                                value = "consequuntur";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Dwight Connelly";
                                                                value = "exercitationem";
                                                            }}),
                                                        }};
                                                        path = "ab";
                                                        port = 242637;
                                                        scheme = "facilis";
                                                    }};
                                                    initialDelaySeconds = 731065;
                                                    periodSeconds = 395233;
                                                    successThreshold = 977518;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "quaerat";
                                                        port = 503748;
                                                    }};
                                                    timeoutSeconds = 718627;
                                                }};
                                                terminationMessagePath = "nisi";
                                                terminationMessagePolicy = "quis";
                                                volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                                    add(new VolumeMount() {{
                                                        mountPath = "libero";
                                                        name = "Carroll Purdy";
                                                        readOnly = false;
                                                        subPath = "voluptatibus";
                                                    }}),
                                                    add(new VolumeMount() {{
                                                        mountPath = "voluptatibus";
                                                        name = "Raquel Greenfelder";
                                                        readOnly = false;
                                                        subPath = "reprehenderit";
                                                    }}),
                                                }};
                                                workingDir = "nostrum";
                                            }}),
                                            add(new Container() {{
                                                args = new String[]{{
                                                    add("iusto"),
                                                }};
                                                command = new String[]{{
                                                    add("rem"),
                                                    add("eligendi"),
                                                    add("fugiat"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                                    add(new EnvVar() {{
                                                        name = "Miss Kelly Ernser";
                                                        value = "vitae";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "dignissimos";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Ginger Hand";
                                                                }};
                                                                name = "Tyrone Kulas Jr.";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "incidunt";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Elias Rice";
                                                                }};
                                                                name = "Amos Kilback";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Devin Donnelly";
                                                        value = "illo";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "labore";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Jim Schamberger";
                                                                }};
                                                                name = "William Schneider";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "expedita";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Eduardo Walker";
                                                                }};
                                                                name = "Cristina Murphy";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new EnvVar() {{
                                                        name = "Gertrude Russel Jr.";
                                                        value = "ad";
                                                        valueFrom = new EnvVarSource() {{
                                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                                key = "quae";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Desiree Lakin";
                                                                }};
                                                                name = "Joyce Carroll DVM";
                                                                optional = false;
                                                            }};
                                                            secretKeyRef = new SecretKeySelector() {{
                                                                key = "iusto";
                                                                localObjectReference = new LocalObjectReference() {{
                                                                    name = "Shelly Pagac";
                                                                }};
                                                                name = "David Hilll";
                                                                optional = false;
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Anthony Marvin";
                                                            }};
                                                            name = "Gerald Bartell";
                                                            optional = false;
                                                        }};
                                                        prefix = "sunt";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Curtis McCullough PhD";
                                                            }};
                                                            name = "Mr. Bethany Koch";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Kimberly Kuhn";
                                                            }};
                                                            name = "Rene Feeney";
                                                            optional = false;
                                                        }};
                                                        prefix = "consectetur";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Jeremiah Spencer";
                                                            }};
                                                            name = "Bruce Satterfield";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                    add(new EnvFromSource() {{
                                                        configMapRef = new ConfigMapEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Cody Terry";
                                                            }};
                                                            name = "Roy Christiansen";
                                                            optional = false;
                                                        }};
                                                        prefix = "non";
                                                        secretRef = new SecretEnvSource() {{
                                                            localObjectReference = new LocalObjectReference() {{
                                                                name = "Pamela Welch";
                                                            }};
                                                            name = "Beulah Kirlin";
                                                            optional = false;
                                                        }};
                                                    }}),
                                                }};
                                                image = "numquam";
                                                imagePullPolicy = "repudiandae";
                                                livenessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("in"),
                                                            add("explicabo"),
                                                        }};
                                                    }};
                                                    failureThreshold = 879857;
                                                    grpc = new GRPCAction() {{
                                                        port = 525809;
                                                        service = "aperiam";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "odit";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Colleen Murazik";
                                                                value = "magnam";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Emma Keeling";
                                                                value = "dignissimos";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Dean Krajcik";
                                                                value = "ab";
                                                            }}),
                                                        }};
                                                        path = "modi";
                                                        port = 13865;
                                                        scheme = "aut";
                                                    }};
                                                    initialDelaySeconds = 911657;
                                                    periodSeconds = 483753;
                                                    successThreshold = 413758;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "numquam";
                                                        port = 677045;
                                                    }};
                                                    timeoutSeconds = 823718;
                                                }};
                                                name = "Edith Dooley";
                                                ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                                    add(new ContainerPort() {{
                                                        containerPort = 122662;
                                                        name = "Miss Mathew Lynch";
                                                        protocol = "autem";
                                                    }}),
                                                    add(new ContainerPort() {{
                                                        containerPort = 685415;
                                                        name = "Gwendolyn Anderson";
                                                        protocol = "repellendus";
                                                    }}),
                                                    add(new ContainerPort() {{
                                                        containerPort = 83291;
                                                        name = "Jessica Turner";
                                                        protocol = "nulla";
                                                    }}),
                                                    add(new ContainerPort() {{
                                                        containerPort = 640907;
                                                        name = "Sandra Abbott";
                                                        protocol = "voluptatem";
                                                    }}),
                                                }};
                                                readinessProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("qui"),
                                                            add("qui"),
                                                        }};
                                                    }};
                                                    failureThreshold = 895912;
                                                    grpc = new GRPCAction() {{
                                                        port = 691508;
                                                        service = "explicabo";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "beatae";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Kara Wolf";
                                                                value = "libero";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Johnny Jacobi";
                                                                value = "ducimus";
                                                            }}),
                                                        }};
                                                        path = "odit";
                                                        port = 243623;
                                                        scheme = "reiciendis";
                                                    }};
                                                    initialDelaySeconds = 997918;
                                                    periodSeconds = 861123;
                                                    successThreshold = 671116;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "natus";
                                                        port = 883780;
                                                    }};
                                                    timeoutSeconds = 42906;
                                                }};
                                                resources = new ResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("rerum", "recusandae");
                                                        put("voluptates", "non");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("quia", "ullam");
                                                        put("quisquam", "dicta");
                                                        put("voluptatibus", "eligendi");
                                                    }};
                                                }};
                                                securityContext = new SecurityContext() {{
                                                    runAsUser = 62035;
                                                }};
                                                startupProbe = new Probe() {{
                                                    exec = new ExecAction() {{
                                                        command = new String[]{{
                                                            add("architecto"),
                                                            add("architecto"),
                                                            add("enim"),
                                                            add("optio"),
                                                        }};
                                                    }};
                                                    failureThreshold = 525951;
                                                    grpc = new GRPCAction() {{
                                                        port = 17060;
                                                        service = "facilis";
                                                    }};
                                                    httpGet = new HTTPGetAction() {{
                                                        host = "reiciendis";
                                                        httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                            add(new HTTPHeader() {{
                                                                name = "Keith Lueilwitz";
                                                                value = "modi";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Simon Gleason";
                                                                value = "vero";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Edmund Sawayn";
                                                                value = "reiciendis";
                                                            }}),
                                                            add(new HTTPHeader() {{
                                                                name = "Becky Kozey";
                                                                value = "odio";
                                                            }}),
                                                        }};
                                                        path = "nesciunt";
                                                        port = 895513;
                                                        scheme = "vel";
                                                    }};
                                                    initialDelaySeconds = 208683;
                                                    periodSeconds = 357758;
                                                    successThreshold = 375350;
                                                    tcpSocket = new TCPSocketAction() {{
                                                        host = "consequuntur";
                                                        port = 641133;
                                                    }};
                                                    timeoutSeconds = 441374;
                                                }};
                                                terminationMessagePath = "distinctio";
                                                terminationMessagePolicy = "eius";
                                                volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                                    add(new VolumeMount() {{
                                                        mountPath = "rem";
                                                        name = "Steven Harris";
                                                        readOnly = false;
                                                        subPath = "facere";
                                                    }}),
                                                }};
                                                workingDir = "aliquam";
                                            }}),
                                        }};
                                        maxRetries = 552581;
                                        serviceAccountName = "doloribus";
                                        timeoutSeconds = "fugiat";
                                        volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                            add(new Volume() {{
                                                configMap = new ConfigMapVolumeSource() {{
                                                    defaultMode = 962396;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "vitae";
                                                            mode = 201096;
                                                            path = "similique";
                                                        }}),
                                                    }};
                                                    name = "Winifred Hettinger";
                                                    optional = false;
                                                }};
                                                emptyDir = new EmptyDirVolumeSource() {{
                                                    medium = "unde";
                                                    sizeLimit = "incidunt";
                                                }};
                                                name = "Roberta McCullough MD";
                                                secret = new SecretVolumeSource() {{
                                                    defaultMode = 198911;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "sapiente";
                                                            mode = 164319;
                                                            path = "veniam";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "debitis";
                                                            mode = 638390;
                                                            path = "sint";
                                                        }}),
                                                    }};
                                                    optional = false;
                                                    secretName = "ut";
                                                }};
                                            }}),
                                            add(new Volume() {{
                                                configMap = new ConfigMapVolumeSource() {{
                                                    defaultMode = 256768;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "adipisci";
                                                            mode = 728559;
                                                            path = "in";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "minima";
                                                            mode = 403147;
                                                            path = "minus";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "ab";
                                                            mode = 108165;
                                                            path = "hic";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "nisi";
                                                            mode = 786954;
                                                            path = "dolor";
                                                        }}),
                                                    }};
                                                    name = "Mr. Kristine Hansen";
                                                    optional = false;
                                                }};
                                                emptyDir = new EmptyDirVolumeSource() {{
                                                    medium = "magni";
                                                    sizeLimit = "incidunt";
                                                }};
                                                name = "Maxine Ernser";
                                                secret = new SecretVolumeSource() {{
                                                    defaultMode = 706411;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "sit";
                                                            mode = 363482;
                                                            path = "culpa";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "consequuntur";
                                                            mode = 230571;
                                                            path = "deserunt";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "modi";
                                                            mode = 332831;
                                                            path = "quod";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "itaque";
                                                            mode = 955569;
                                                            path = "quisquam";
                                                        }}),
                                                    }};
                                                    optional = false;
                                                    secretName = "enim";
                                                }};
                                            }}),
                                            add(new Volume() {{
                                                configMap = new ConfigMapVolumeSource() {{
                                                    defaultMode = 987759;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "officiis";
                                                            mode = 103990;
                                                            path = "alias";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "culpa";
                                                            mode = 60335;
                                                            path = "nobis";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "necessitatibus";
                                                            mode = 155978;
                                                            path = "dicta";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "vel";
                                                            mode = 595584;
                                                            path = "debitis";
                                                        }}),
                                                    }};
                                                    name = "Mr. Julie Bartoletti";
                                                    optional = false;
                                                }};
                                                emptyDir = new EmptyDirVolumeSource() {{
                                                    medium = "cumque";
                                                    sizeLimit = "iure";
                                                }};
                                                name = "Jermaine Hettinger";
                                                secret = new SecretVolumeSource() {{
                                                    defaultMode = 299153;
                                                    items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                        add(new KeyToPath() {{
                                                            key = "laboriosam";
                                                            mode = 152283;
                                                            path = "odio";
                                                        }}),
                                                        add(new KeyToPath() {{
                                                            key = "natus";
                                                            mode = 588152;
                                                            path = "cum";
                                                        }}),
                                                    }};
                                                    optional = false;
                                                    secretName = "doloribus";
                                                }};
                                            }}),
                                        }};
                                    }};;
                                }};;
                            }};;
                        }};;
                    }};;
                    status = new JobStatus() {{
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "quidem";
                                message = "itaque";
                                reason = "laboriosam";
                                severity = "unde";
                                status = "modi";
                                type = "perspiciatis";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "hic";
                                message = "cum";
                                reason = "aspernatur";
                                severity = "libero";
                                status = "nam";
                                type = "incidunt";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "recusandae";
                                message = "quod";
                                reason = "id";
                                severity = "saepe";
                                status = "autem";
                                type = "quo";
                            }}),
                        }};
                        executionCount = 198991;
                        latestCreatedExecution = new ExecutionReference() {{
                            completionTimestamp = "illum";
                            creationTimestamp = "nemo";
                            name = "Johnathan Franey";
                        }};;
                        observedGeneration = 927977;
                    }};;
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "facere";
                key = "laborum";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "incidunt";
                uploadProtocol = "maxime";
            }};            

            RunNamespacesJobsReplaceJobResponse res = sdk.namespaces.runNamespacesJobsReplaceJob(req, new RunNamespacesJobsReplaceJobSecurity("ipsam", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesJobsRun

Trigger creation of a new execution of this job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsRunRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsRunResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigMapKeySelector;
import org.openapis.openapi.models.shared.ContainerOverride;
import org.openapis.openapi.models.shared.EnvVar;
import org.openapis.openapi.models.shared.EnvVarSource;
import org.openapis.openapi.models.shared.LocalObjectReference;
import org.openapis.openapi.models.shared.Overrides;
import org.openapis.openapi.models.shared.RunJobRequest;
import org.openapis.openapi.models.shared.SecretKeySelector;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsRunRequest req = new RunNamespacesJobsRunRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                runJobRequest = new RunJobRequest() {{
                    overrides = new Overrides() {{
                        containerOverrides = new org.openapis.openapi.models.shared.ContainerOverride[]{{
                            add(new ContainerOverride() {{
                                args = new String[]{{
                                    add("est"),
                                    add("occaecati"),
                                    add("labore"),
                                }};
                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                    add(new EnvVar() {{
                                        name = "Theresa Jacobi";
                                        value = "eligendi";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "hic";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Cecelia Mitchell";
                                                }};
                                                name = "Miguel Heathcote";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "fuga";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Edmund Boyle";
                                                }};
                                                name = "Michelle Bartell";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Miss William Bechtelar";
                                        value = "blanditiis";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "quae";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Rochelle Cormier";
                                                }};
                                                name = "Sonia Wiegand";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "maiores";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Mrs. Ollie Ledner";
                                                }};
                                                name = "Lee Gibson";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Arthur Doyle";
                                        value = "accusantium";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "qui";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Mr. Jack Gottlieb";
                                                }};
                                                name = "Robert Muller MD";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "laboriosam";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Billie Bogan V";
                                                }};
                                                name = "Constance Dach";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Jeremy Douglas";
                                        value = "cupiditate";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "aliquam";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Elijah Langworth";
                                                }};
                                                name = "Renee Beer";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "quas";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Elsie Yundt";
                                                }};
                                                name = "Steven Carter";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                }};
                                name = "Lowell Rippin";
                            }}),
                            add(new ContainerOverride() {{
                                args = new String[]{{
                                    add("fugit"),
                                    add("eius"),
                                    add("sequi"),
                                    add("eligendi"),
                                }};
                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                    add(new EnvVar() {{
                                        name = "Vickie Marvin";
                                        value = "animi";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "maiores";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Drew Nolan";
                                                }};
                                                name = "Ronnie Nikolaus";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "repudiandae";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Ms. Kristi Russel";
                                                }};
                                                name = "Jesse Rogahn";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Megan Kiehn";
                                        value = "corrupti";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "amet";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Grace Padberg PhD";
                                                }};
                                                name = "Dr. Felicia Greenholt";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "odit";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Mrs. Jerome Hintz";
                                                }};
                                                name = "Geraldine Huels";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Maurice Hoppe MD";
                                        value = "repellendus";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "perferendis";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Darrin Cremin";
                                                }};
                                                name = "Joe Fisher";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "dolore";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Elmer Champlin";
                                                }};
                                                name = "Jacob Wehner";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Joyce O'Connell";
                                        value = "cumque";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "doloremque";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Byron Becker";
                                                }};
                                                name = "Victor Goodwin";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "rerum";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Eloise Rowe";
                                                }};
                                                name = "Julian Ziemann";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                }};
                                name = "Dr. Ruth Blanda";
                            }}),
                            add(new ContainerOverride() {{
                                args = new String[]{{
                                    add("possimus"),
                                    add("neque"),
                                    add("pariatur"),
                                    add("vel"),
                                }};
                                env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                    add(new EnvVar() {{
                                        name = "Mrs. Eric Lueilwitz";
                                        value = "ad";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "aliquam";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Clifton Crooks III";
                                                }};
                                                name = "Rex Ernser";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "cumque";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Wallace Kuphal";
                                                }};
                                                name = "Mattie Gerlach";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Olivia Boehm";
                                        value = "quidem";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "totam";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Kenny Cummings";
                                                }};
                                                name = "Rafael Abbott II";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "maxime";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Sheryl Hermiston";
                                                }};
                                                name = "Ms. Violet Mills MD";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Miss Joyce Runolfsson";
                                        value = "facilis";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "beatae";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Toby Grant";
                                                }};
                                                name = "Ivan Torphy";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "sapiente";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Randall Schmeler";
                                                }};
                                                name = "Marshall McClure";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                    add(new EnvVar() {{
                                        name = "Miss Mindy Schmitt";
                                        value = "pariatur";
                                        valueFrom = new EnvVarSource() {{
                                            configMapKeyRef = new ConfigMapKeySelector() {{
                                                key = "eligendi";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Patrick Ankunding";
                                                }};
                                                name = "Silvia Goodwin";
                                                optional = false;
                                            }};
                                            secretKeyRef = new SecretKeySelector() {{
                                                key = "doloremque";
                                                localObjectReference = new LocalObjectReference() {{
                                                    name = "Natalie Swift";
                                                }};
                                                name = "Guy Kovacek";
                                                optional = false;
                                            }};
                                        }};
                                    }}),
                                }};
                                name = "Dave Hegmann MD";
                            }}),
                        }};
                        taskCount = 318379;
                        timeoutSeconds = 522390;
                    }};;
                }};;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "placeat";
                key = "enim";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "saepe";
                uploadProtocol = "delectus";
            }};            

            RunNamespacesJobsRunResponse res = sdk.namespaces.runNamespacesJobsRun(req, new RunNamespacesJobsRunSecurity("officia", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesRevisionsList

List revisions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesRevisionsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesRevisionsListResponse;
import org.openapis.openapi.models.operations.RunNamespacesRevisionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesRevisionsListRequest req = new RunNamespacesRevisionsListRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quia";
                continue_ = "officiis";
                fieldSelector = "mollitia";
                fields = "cumque";
                includeUninitialized = false;
                key = "quis";
                labelSelector = "enim";
                limit = 430235L;
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "illum";
                resourceVersion = "nesciunt";
                uploadType = "sit";
                uploadProtocol = "odio";
                watch = false;
            }};            

            RunNamespacesRevisionsListResponse res = sdk.namespaces.runNamespacesRevisionsList(req, new RunNamespacesRevisionsListSecurity("minus", "asperiores") {{
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

## runNamespacesRoutesList

List routes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesRoutesListRequest;
import org.openapis.openapi.models.operations.RunNamespacesRoutesListResponse;
import org.openapis.openapi.models.operations.RunNamespacesRoutesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesRoutesListRequest req = new RunNamespacesRoutesListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "fugit";
                continue_ = "sit";
                fieldSelector = "aliquid";
                fields = "necessitatibus";
                includeUninitialized = false;
                key = "sed";
                labelSelector = "deleniti";
                limit = 122744L;
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "delectus";
                resourceVersion = "laborum";
                uploadType = "aliquam";
                uploadProtocol = "deserunt";
                watch = false;
            }};            

            RunNamespacesRoutesListResponse res = sdk.namespaces.runNamespacesRoutesList(req, new RunNamespacesRoutesListSecurity("modi", "sunt") {{
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

## runNamespacesServicesCreate

Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesServicesCreateRequest;
import org.openapis.openapi.models.operations.RunNamespacesServicesCreateResponse;
import org.openapis.openapi.models.operations.RunNamespacesServicesCreateSecurity;
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

            RunNamespacesServicesCreateRequest req = new RunNamespacesServicesCreateRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceInput = new ServiceInput() {{
                    apiVersion = "voluptatum";
                    kind = "ipsa";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("dolorem", "repellat");
                            put("aspernatur", "inventore");
                            put("sequi", "fugit");
                            put("fuga", "hic");
                        }};
                        clusterName = "eaque";
                        creationTimestamp = "dolorem";
                        deletionGracePeriodSeconds = 101854;
                        deletionTimestamp = "aperiam";
                        finalizers = new String[]{{
                            add("nulla"),
                        }};
                        generateName = "enim";
                        generation = 73574;
                        labels = new java.util.HashMap<String, String>() {{
                            put("delectus", "numquam");
                            put("optio", "nobis");
                        }};
                        name = "Kristie Bergnaum";
                        namespace = "hic";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "aliquid";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "sed";
                                name = "Marguerite Jast";
                                uid = "tenetur";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "dignissimos";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "esse";
                                name = "Dwight Koepp";
                                uid = "velit";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "officiis";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "eius";
                                name = "Dexter Kuhn";
                                uid = "impedit";
                            }}),
                        }};
                        resourceVersion = "aliquid";
                        selfLink = "quis";
                        uid = "facilis";
                    }};;
                    spec = new ServiceSpecInput() {{
                        template = new RevisionTemplate() {{
                            metadata = new ObjectMeta() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("ut", "quaerat");
                                }};
                                clusterName = "architecto";
                                creationTimestamp = "praesentium";
                                deletionGracePeriodSeconds = 907899;
                                deletionTimestamp = "dolor";
                                finalizers = new String[]{{
                                    add("libero"),
                                    add("iste"),
                                    add("illo"),
                                }};
                                generateName = "minus";
                                generation = 553315;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sint", "iusto");
                                    put("enim", "accusamus");
                                    put("aperiam", "voluptates");
                                    put("laudantium", "tempora");
                                }};
                                name = "Guadalupe Stanton";
                                namespace = "deleniti";
                                ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                                    add(new OwnerReference() {{
                                        apiVersion = "earum";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "architecto";
                                        name = "Clara Wyman";
                                        uid = "consequatur";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "esse";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "debitis";
                                        name = "Devin Runte";
                                        uid = "deserunt";
                                    }}),
                                }};
                                resourceVersion = "ad";
                                selfLink = "reiciendis";
                                uid = "sequi";
                            }};;
                            spec = new RevisionSpec() {{
                                containerConcurrency = 785555;
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("quibusdam"),
                                            add("omnis"),
                                            add("aut"),
                                        }};
                                        command = new String[]{{
                                            add("officia"),
                                            add("cupiditate"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Kelley Bashirian";
                                                value = "molestiae";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "quia";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Aaron Connelly";
                                                        }};
                                                        name = "Ms. Kari Dooley";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "esse";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Beulah Will";
                                                        }};
                                                        name = "Marta Nicolas";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Jan Hirthe";
                                                value = "laborum";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "voluptas";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Matt Walsh";
                                                        }};
                                                        name = "Preston Wyman DDS";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "sequi";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Mr. Evelyn Wiza";
                                                        }};
                                                        name = "Arnold Hegmann";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Stella Witting MD";
                                                    }};
                                                    name = "Bernadette Schinner";
                                                    optional = false;
                                                }};
                                                prefix = "maiores";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Miss Daisy Willms";
                                                    }};
                                                    name = "Ruben Sipes DDS";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "sequi";
                                        imagePullPolicy = "commodi";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("expedita"),
                                                    add("in"),
                                                }};
                                            }};
                                            failureThreshold = 789870;
                                            grpc = new GRPCAction() {{
                                                port = 123795;
                                                service = "enim";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "nulla";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Hubert Russel V";
                                                        value = "blanditiis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Samuel Russel";
                                                        value = "repudiandae";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Pat Macejkovic";
                                                        value = "eligendi";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Dr. Ruben Braun";
                                                        value = "vero";
                                                    }}),
                                                }};
                                                path = "quidem";
                                                port = 73826;
                                                scheme = "quo";
                                            }};
                                            initialDelaySeconds = 490966;
                                            periodSeconds = 791615;
                                            successThreshold = 717560;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "possimus";
                                                port = 738152;
                                            }};
                                            timeoutSeconds = 382342;
                                        }};
                                        name = "Merle Schmidt";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 498435;
                                                name = "Ira Nolan";
                                                protocol = "sequi";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("iusto"),
                                                }};
                                            }};
                                            failureThreshold = 456865;
                                            grpc = new GRPCAction() {{
                                                port = 298246;
                                                service = "odio";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "nulla";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Gregory Heidenreich";
                                                        value = "fugit";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Wilbur Zulauf";
                                                        value = "quibusdam";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Tamara Champlin";
                                                        value = "optio";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Shawna Heller";
                                                        value = "aspernatur";
                                                    }}),
                                                }};
                                                path = "sapiente";
                                                port = 204373;
                                                scheme = "officia";
                                            }};
                                            initialDelaySeconds = 379661;
                                            periodSeconds = 688649;
                                            successThreshold = 496578;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "doloremque";
                                                port = 20141;
                                            }};
                                            timeoutSeconds = 514480;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("corrupti", "molestiae");
                                                put("quis", "iure");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("quaerat", "amet");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 956942;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("est"),
                                                    add("iure"),
                                                }};
                                            }};
                                            failureThreshold = 787629;
                                            grpc = new GRPCAction() {{
                                                port = 590927;
                                                service = "laudantium";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "nam";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Holly Harber V";
                                                        value = "doloremque";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Jesus Batz";
                                                        value = "similique";
                                                    }}),
                                                }};
                                                path = "porro";
                                                port = 769789;
                                                scheme = "nisi";
                                            }};
                                            initialDelaySeconds = 768920;
                                            periodSeconds = 743795;
                                            successThreshold = 856568;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "laboriosam";
                                                port = 720319;
                                            }};
                                            timeoutSeconds = 315387;
                                        }};
                                        terminationMessagePath = "maiores";
                                        terminationMessagePolicy = "consectetur";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "maxime";
                                                name = "Donald McKenzie II";
                                                readOnly = false;
                                                subPath = "repellat";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "omnis";
                                                name = "Gina Robel";
                                                readOnly = false;
                                                subPath = "fugit";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "ipsam";
                                                name = "Miss Emily Lehner";
                                                readOnly = false;
                                                subPath = "tempora";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "voluptate";
                                                name = "Lula Bayer";
                                                readOnly = false;
                                                subPath = "fugit";
                                            }}),
                                        }};
                                        workingDir = "voluptatem";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("corporis"),
                                            add("ea"),
                                            add("eos"),
                                            add("aliquam"),
                                        }};
                                        command = new String[]{{
                                            add("hic"),
                                            add("maiores"),
                                            add("asperiores"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Mae O'Kon Jr.";
                                                value = "mollitia";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "nam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Salvatore Paucek";
                                                        }};
                                                        name = "Laurie Kling";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "provident";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Sophia Bernhard";
                                                        }};
                                                        name = "Linda Davis MD";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Grace Hegmann";
                                                value = "unde";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "similique";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Garry Fahey";
                                                        }};
                                                        name = "Jake Ondricka";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "sit";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Darrell Hackett";
                                                        }};
                                                        name = "Mr. Anthony Emmerich";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Penny Nienow DVM";
                                                    }};
                                                    name = "Peter Schmitt";
                                                    optional = false;
                                                }};
                                                prefix = "accusantium";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Leah Leannon";
                                                    }};
                                                    name = "Bernadette Brown";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Jared Blick";
                                                    }};
                                                    name = "Stephen Jakubowski";
                                                    optional = false;
                                                }};
                                                prefix = "sed";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Jimmy Rosenbaum MD";
                                                    }};
                                                    name = "Christian West";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Ellen Ruecker";
                                                    }};
                                                    name = "Ross Hilpert";
                                                    optional = false;
                                                }};
                                                prefix = "perspiciatis";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Duane Botsford";
                                                    }};
                                                    name = "Johnnie Jacobs";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "explicabo";
                                        imagePullPolicy = "et";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("magni"),
                                                    add("natus"),
                                                    add("illum"),
                                                    add("a"),
                                                }};
                                            }};
                                            failureThreshold = 771078;
                                            grpc = new GRPCAction() {{
                                                port = 601803;
                                                service = "ut";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "facere";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Clay Schaefer";
                                                        value = "iste";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Mr. Rodney Marvin";
                                                        value = "laboriosam";
                                                    }}),
                                                }};
                                                path = "laborum";
                                                port = 422276;
                                                scheme = "assumenda";
                                            }};
                                            initialDelaySeconds = 129631;
                                            periodSeconds = 852689;
                                            successThreshold = 41306;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "voluptatem";
                                                port = 4747;
                                            }};
                                            timeoutSeconds = 244157;
                                        }};
                                        name = "Beatrice Flatley";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 923935;
                                                name = "Brian Larson";
                                                protocol = "est";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 144058;
                                                name = "Mrs. Kelley Moore";
                                                protocol = "cumque";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 696219;
                                                name = "Doris Casper III";
                                                protocol = "ducimus";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 728474;
                                                name = "Alonzo Erdman";
                                                protocol = "illum";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("voluptatem"),
                                                    add("non"),
                                                    add("quaerat"),
                                                }};
                                            }};
                                            failureThreshold = 10164;
                                            grpc = new GRPCAction() {{
                                                port = 515433;
                                                service = "repellendus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "commodi";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Loretta Hackett";
                                                        value = "assumenda";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Jill Hermann III";
                                                        value = "quibusdam";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Lori Jerde";
                                                        value = "numquam";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Erick Mohr";
                                                        value = "quod";
                                                    }}),
                                                }};
                                                path = "dolores";
                                                port = 808050;
                                                scheme = "excepturi";
                                            }};
                                            initialDelaySeconds = 927021;
                                            periodSeconds = 551778;
                                            successThreshold = 115561;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "sapiente";
                                                port = 217279;
                                            }};
                                            timeoutSeconds = 9358;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("necessitatibus", "sequi");
                                                put("recusandae", "labore");
                                                put("adipisci", "magni");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("dolores", "illum");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 481553;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("beatae"),
                                                }};
                                            }};
                                            failureThreshold = 396884;
                                            grpc = new GRPCAction() {{
                                                port = 321697;
                                                service = "voluptate";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "vel";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Kristin Howell IV";
                                                        value = "dignissimos";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Krystal McLaughlin";
                                                        value = "inventore";
                                                    }}),
                                                }};
                                                path = "voluptatibus";
                                                port = 601228;
                                                scheme = "deserunt";
                                            }};
                                            initialDelaySeconds = 834587;
                                            periodSeconds = 7919;
                                            successThreshold = 237972;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "doloremque";
                                                port = 761927;
                                            }};
                                            timeoutSeconds = 269731;
                                        }};
                                        terminationMessagePath = "debitis";
                                        terminationMessagePolicy = "cumque";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "et";
                                                name = "Alberta Altenwerth";
                                                readOnly = false;
                                                subPath = "iure";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "tempora";
                                                name = "Faye Bartoletti";
                                                readOnly = false;
                                                subPath = "facilis";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "laudantium";
                                                name = "Susan Crist";
                                                readOnly = false;
                                                subPath = "corporis";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "accusamus";
                                                name = "Miranda Koelpin";
                                                readOnly = false;
                                                subPath = "quisquam";
                                            }}),
                                        }};
                                        workingDir = "praesentium";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("ipsam"),
                                            add("officiis"),
                                        }};
                                        command = new String[]{{
                                            add("magni"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Allen Boehm";
                                                value = "numquam";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "rerum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Marty Wehner";
                                                        }};
                                                        name = "Pat Mueller";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "aliquid";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Shelley Rowe";
                                                        }};
                                                        name = "Jacqueline Jacobs";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Joshua Hoppe";
                                                    }};
                                                    name = "Shannon Little";
                                                    optional = false;
                                                }};
                                                prefix = "nemo";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Melba Runolfsson";
                                                    }};
                                                    name = "Vernon Mayert";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Ryan Considine";
                                                    }};
                                                    name = "Dr. Alfonso Spencer";
                                                    optional = false;
                                                }};
                                                prefix = "quam";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Brendan Ullrich";
                                                    }};
                                                    name = "Daryl Ankunding";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "incidunt";
                                        imagePullPolicy = "numquam";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("similique"),
                                                    add("dolore"),
                                                    add("esse"),
                                                }};
                                            }};
                                            failureThreshold = 968205;
                                            grpc = new GRPCAction() {{
                                                port = 611792;
                                                service = "amet";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "occaecati";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Derek Lubowitz";
                                                        value = "voluptatem";
                                                    }}),
                                                }};
                                                path = "provident";
                                                port = 559248;
                                                scheme = "ipsum";
                                            }};
                                            initialDelaySeconds = 874283;
                                            periodSeconds = 683490;
                                            successThreshold = 704732;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "maiores";
                                                port = 622968;
                                            }};
                                            timeoutSeconds = 926119;
                                        }};
                                        name = "Jeffery Williamson";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 607742;
                                                name = "Ms. Lonnie Wolf";
                                                protocol = "similique";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 989089;
                                                name = "Muriel Durgan";
                                                protocol = "sed";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 250621;
                                                name = "Dr. Nicolas Roberts";
                                                protocol = "vero";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 177651;
                                                name = "Roger Bradtke";
                                                protocol = "fugiat";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("iure"),
                                                    add("laudantium"),
                                                }};
                                            }};
                                            failureThreshold = 265303;
                                            grpc = new GRPCAction() {{
                                                port = 301701;
                                                service = "accusamus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "nulla";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Clayton Halvorson";
                                                        value = "quae";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Dolores Vandervort";
                                                        value = "blanditiis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Gilberto Wisozk";
                                                        value = "consequatur";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Lori Powlowski";
                                                        value = "laudantium";
                                                    }}),
                                                }};
                                                path = "dignissimos";
                                                port = 606989;
                                                scheme = "omnis";
                                            }};
                                            initialDelaySeconds = 144397;
                                            periodSeconds = 212682;
                                            successThreshold = 696291;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "molestiae";
                                                port = 890780;
                                            }};
                                            timeoutSeconds = 112071;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("ad", "atque");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("asperiores", "reprehenderit");
                                                put("deserunt", "itaque");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 93254;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("impedit"),
                                                }};
                                            }};
                                            failureThreshold = 401388;
                                            grpc = new GRPCAction() {{
                                                port = 507874;
                                                service = "natus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "vitae";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Bruce Roob Jr.";
                                                        value = "ullam";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Carolyn Klocko";
                                                        value = "eaque";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Grace Kling";
                                                        value = "minus";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Horace Leannon";
                                                        value = "doloribus";
                                                    }}),
                                                }};
                                                path = "omnis";
                                                port = 463695;
                                                scheme = "exercitationem";
                                            }};
                                            initialDelaySeconds = 915145;
                                            periodSeconds = 194194;
                                            successThreshold = 336640;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "commodi";
                                                port = 426481;
                                            }};
                                            timeoutSeconds = 522824;
                                        }};
                                        terminationMessagePath = "aliquid";
                                        terminationMessagePolicy = "aperiam";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "fugit";
                                                name = "Austin Runte";
                                                readOnly = false;
                                                subPath = "temporibus";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "minus";
                                                name = "Mr. Lorene Braun";
                                                readOnly = false;
                                                subPath = "earum";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "laborum";
                                                name = "Donna Connelly";
                                                readOnly = false;
                                                subPath = "enim";
                                            }}),
                                        }};
                                        workingDir = "numquam";
                                    }}),
                                }};
                                enableServiceLinks = false;
                                imagePullSecrets = new org.openapis.openapi.models.shared.LocalObjectReference[]{{
                                    add(new LocalObjectReference() {{
                                        name = "Miss Calvin Schumm DVM";
                                    }}),
                                }};
                                serviceAccountName = "officiis";
                                timeoutSeconds = 708883;
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 112751;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "quas";
                                                    mode = 55407;
                                                    path = "distinctio";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "placeat";
                                                    mode = 801958;
                                                    path = "eligendi";
                                                }}),
                                            }};
                                            name = "Muriel Reichel";
                                            optional = false;
                                        }};
                                        emptyDir = new EmptyDirVolumeSource() {{
                                            medium = "illum";
                                            sizeLimit = "soluta";
                                        }};
                                        name = "Marsha Goldner V";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 971481;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "aliquam";
                                                    mode = 922915;
                                                    path = "amet";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "natus";
                                                    mode = 68253;
                                                    path = "officiis";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "eum";
                                                    mode = 701257;
                                                    path = "placeat";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "ab";
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "blanditiis";
                                latestRevision = false;
                                percent = 780370;
                                revisionName = "labore";
                                tag = "impedit";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "ut";
                                latestRevision = false;
                                percent = 936518;
                                revisionName = "ullam";
                                tag = "numquam";
                            }}),
                        }};
                    }};;
                    status = new ServiceStatusInput() {{
                        address = new Addressable() {{
                            url = "enim";
                        }};;
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "occaecati";
                                message = "itaque";
                                reason = "fuga";
                                severity = "consectetur";
                                status = "modi";
                                type = "aspernatur";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "explicabo";
                                message = "suscipit";
                                reason = "ipsa";
                                severity = "eveniet";
                                status = "sint";
                                type = "nobis";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "qui";
                                message = "accusantium";
                                reason = "consequatur";
                                severity = "impedit";
                                status = "recusandae";
                                type = "voluptate";
                            }}),
                        }};
                        latestCreatedRevisionName = "deleniti";
                        latestReadyRevisionName = "est";
                        observedGeneration = 92448;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "quibusdam";
                                latestRevision = false;
                                percent = 552984;
                                revisionName = "maiores";
                                tag = "quidem";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "in";
                                latestRevision = false;
                                percent = 635314;
                                revisionName = "doloremque";
                                tag = "fuga";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "dicta";
                                latestRevision = false;
                                percent = 103901;
                                revisionName = "suscipit";
                                tag = "eligendi";
                            }}),
                        }};
                        url = "officiis";
                    }};;
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "ratione";
                dryRun = "possimus";
                fields = "quaerat";
                key = "aut";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "delectus";
                uploadProtocol = "deserunt";
            }};            

            RunNamespacesServicesCreateResponse res = sdk.namespaces.runNamespacesServicesCreate(req, new RunNamespacesServicesCreateSecurity("ratione", "ipsa") {{
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

## runNamespacesServicesDelete

Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesServicesDeleteRequest;
import org.openapis.openapi.models.operations.RunNamespacesServicesDeleteResponse;
import org.openapis.openapi.models.operations.RunNamespacesServicesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesServicesDeleteRequest req = new RunNamespacesServicesDeleteRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                apiVersion = "ducimus";
                callback = "consequuntur";
                dryRun = "ipsam";
                fields = "libero";
                key = "quia";
                kind = "omnis";
                oauthToken = "dicta";
                prettyPrint = false;
                propagationPolicy = "qui";
                quotaUser = "explicabo";
                uploadType = "consequatur";
                uploadProtocol = "amet";
            }};            

            RunNamespacesServicesDeleteResponse res = sdk.namespaces.runNamespacesServicesDelete(req, new RunNamespacesServicesDeleteSecurity("consequatur", "fugiat") {{
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

## runNamespacesServicesGet

Gets information about a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesServicesGetRequest;
import org.openapis.openapi.models.operations.RunNamespacesServicesGetResponse;
import org.openapis.openapi.models.operations.RunNamespacesServicesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesServicesGetRequest req = new RunNamespacesServicesGetRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "itaque";
                key = "distinctio";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "provident";
                uploadProtocol = "occaecati";
            }};            

            RunNamespacesServicesGetResponse res = sdk.namespaces.runNamespacesServicesGet(req, new RunNamespacesServicesGetSecurity("assumenda", "sunt") {{
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

## runNamespacesServicesList

Lists services for the given project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesServicesListRequest;
import org.openapis.openapi.models.operations.RunNamespacesServicesListResponse;
import org.openapis.openapi.models.operations.RunNamespacesServicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesServicesListRequest req = new RunNamespacesServicesListRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "quasi";
                continue_ = "repellat";
                fieldSelector = "atque";
                fields = "magnam";
                includeUninitialized = false;
                key = "perspiciatis";
                labelSelector = "amet";
                limit = 546089L;
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "nemo";
                resourceVersion = "delectus";
                uploadType = "illum";
                uploadProtocol = "porro";
                watch = false;
            }};            

            RunNamespacesServicesListResponse res = sdk.namespaces.runNamespacesServicesList(req, new RunNamespacesServicesListSecurity("quaerat", "magni") {{
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

## runNamespacesServicesReplaceService

Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesServicesReplaceServiceRequest;
import org.openapis.openapi.models.operations.RunNamespacesServicesReplaceServiceResponse;
import org.openapis.openapi.models.operations.RunNamespacesServicesReplaceServiceSecurity;
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

            RunNamespacesServicesReplaceServiceRequest req = new RunNamespacesServicesReplaceServiceRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceInput = new ServiceInput() {{
                    apiVersion = "in";
                    kind = "commodi";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("sed", "minus");
                            put("consequuntur", "possimus");
                            put("delectus", "harum");
                            put("aliquam", "eligendi");
                        }};
                        clusterName = "hic";
                        creationTimestamp = "quo";
                        deletionGracePeriodSeconds = 75610;
                        deletionTimestamp = "nobis";
                        finalizers = new String[]{{
                            add("nisi"),
                            add("explicabo"),
                        }};
                        generateName = "sequi";
                        generation = 4787;
                        labels = new java.util.HashMap<String, String>() {{
                            put("quos", "numquam");
                            put("vitae", "maiores");
                            put("nam", "architecto");
                            put("rerum", "assumenda");
                        }};
                        name = "Connie Weissnat";
                        namespace = "ab";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "pariatur";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "expedita";
                                name = "Kelli Walsh";
                                uid = "voluptas";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "laudantium";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "corporis";
                                name = "Luther Leuschke";
                                uid = "dolores";
                            }}),
                        }};
                        resourceVersion = "laborum";
                        selfLink = "vero";
                        uid = "eos";
                    }};;
                    spec = new ServiceSpecInput() {{
                        template = new RevisionTemplate() {{
                            metadata = new ObjectMeta() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "id");
                                }};
                                clusterName = "quae";
                                creationTimestamp = "commodi";
                                deletionGracePeriodSeconds = 954401;
                                deletionTimestamp = "minus";
                                finalizers = new String[]{{
                                    add("nam"),
                                }};
                                generateName = "quia";
                                generation = 480108;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "sed");
                                }};
                                name = "Perry Schroeder";
                                namespace = "itaque";
                                ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                                    add(new OwnerReference() {{
                                        apiVersion = "nemo";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "non";
                                        name = "Fredrick Beer";
                                        uid = "occaecati";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "quibusdam";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "magni";
                                        name = "Marilyn Gibson";
                                        uid = "vel";
                                    }}),
                                    add(new OwnerReference() {{
                                        apiVersion = "cupiditate";
                                        blockOwnerDeletion = false;
                                        controller = false;
                                        kind = "modi";
                                        name = "Ms. Janice Gleichner IV";
                                        uid = "tempora";
                                    }}),
                                }};
                                resourceVersion = "delectus";
                                selfLink = "quam";
                                uid = "dolorum";
                            }};;
                            spec = new RevisionSpec() {{
                                containerConcurrency = 726244;
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("optio"),
                                            add("saepe"),
                                        }};
                                        command = new String[]{{
                                            add("accusantium"),
                                            add("sed"),
                                            add("eos"),
                                            add("consequuntur"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Violet Greenfelder";
                                                value = "exercitationem";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "veniam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Ann Berge";
                                                        }};
                                                        name = "Shane Jakubowski";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "doloribus";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "James Nolan";
                                                        }};
                                                        name = "Clinton Schneider";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Alfredo Botsford III";
                                                value = "laudantium";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "unde";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Scott Schumm";
                                                        }};
                                                        name = "Norman Ferry";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "similique";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Glenn Green";
                                                        }};
                                                        name = "Carolyn Reichert";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Kellie Treutel";
                                                    }};
                                                    name = "Timmy Abbott";
                                                    optional = false;
                                                }};
                                                prefix = "aspernatur";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Neil Lemke II";
                                                    }};
                                                    name = "Marilyn Hirthe";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "corrupti";
                                        imagePullPolicy = "est";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("quibusdam"),
                                                }};
                                            }};
                                            failureThreshold = 770262;
                                            grpc = new GRPCAction() {{
                                                port = 497231;
                                                service = "nisi";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "nisi";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Jamie Schneider";
                                                        value = "accusantium";
                                                    }}),
                                                }};
                                                path = "ea";
                                                port = 771321;
                                                scheme = "totam";
                                            }};
                                            initialDelaySeconds = 762297;
                                            periodSeconds = 665183;
                                            successThreshold = 81541;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "consequuntur";
                                                port = 831037;
                                            }};
                                            timeoutSeconds = 27197;
                                        }};
                                        name = "Jill Collins";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 2758;
                                                name = "Jaime Schuppe";
                                                protocol = "fugit";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 134267;
                                                name = "Clint Lakin";
                                                protocol = "cum";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("facilis"),
                                                    add("placeat"),
                                                    add("reiciendis"),
                                                }};
                                            }};
                                            failureThreshold = 170934;
                                            grpc = new GRPCAction() {{
                                                port = 295307;
                                                service = "pariatur";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "facilis";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Cora Hyatt";
                                                        value = "dolor";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Phyllis White";
                                                        value = "ullam";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Josephine McCullough";
                                                        value = "fugiat";
                                                    }}),
                                                }};
                                                path = "molestiae";
                                                port = 556898;
                                                scheme = "repellendus";
                                            }};
                                            initialDelaySeconds = 906524;
                                            periodSeconds = 230400;
                                            successThreshold = 716795;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "vel";
                                                port = 900438;
                                            }};
                                            timeoutSeconds = 610490;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("corrupti", "cupiditate");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("ullam", "dolorum");
                                                put("soluta", "cum");
                                                put("in", "delectus");
                                                put("commodi", "commodi");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 142978;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("ullam"),
                                                    add("doloremque"),
                                                }};
                                            }};
                                            failureThreshold = 667804;
                                            grpc = new GRPCAction() {{
                                                port = 184204;
                                                service = "praesentium";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "adipisci";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Iris Roob";
                                                        value = "dolor";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Van Schuster";
                                                        value = "inventore";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Olivia Quitzon";
                                                        value = "ipsam";
                                                    }}),
                                                }};
                                                path = "voluptatem";
                                                port = 76786;
                                                scheme = "iure";
                                            }};
                                            initialDelaySeconds = 279530;
                                            periodSeconds = 908274;
                                            successThreshold = 62224;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "ea";
                                                port = 989122;
                                            }};
                                            timeoutSeconds = 332249;
                                        }};
                                        terminationMessagePath = "quidem";
                                        terminationMessagePolicy = "asperiores";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "deserunt";
                                                name = "Miss Herman Mann";
                                                readOnly = false;
                                                subPath = "praesentium";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "facilis";
                                                name = "Cornelius Wunsch";
                                                readOnly = false;
                                                subPath = "vitae";
                                            }}),
                                        }};
                                        workingDir = "fugit";
                                    }}),
                                }};
                                enableServiceLinks = false;
                                imagePullSecrets = new org.openapis.openapi.models.shared.LocalObjectReference[]{{
                                    add(new LocalObjectReference() {{
                                        name = "Crystal Schmeler II";
                                    }}),
                                    add(new LocalObjectReference() {{
                                        name = "Bryant Ondricka";
                                    }}),
                                    add(new LocalObjectReference() {{
                                        name = "Courtney Kohler";
                                    }}),
                                }};
                                serviceAccountName = "iure";
                                timeoutSeconds = 538368;
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 572450;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "dolor";
                                                    mode = 322773;
                                                    path = "illum";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "sit";
                                                    mode = 561399;
                                                    path = "voluptas";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "expedita";
                                                    mode = 375378;
                                                    path = "maiores";
                                                }}),
                                            }};
                                            name = "Jessie Wintheiser";
                                            optional = false;
                                        }};
                                        emptyDir = new EmptyDirVolumeSource() {{
                                            medium = "consequatur";
                                            sizeLimit = "sed";
                                        }};
                                        name = "Alexis McLaughlin";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 256647;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "cum";
                                                    mode = 277935;
                                                    path = "dolores";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "enim";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 471966;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "omnis";
                                                    mode = 569196;
                                                    path = "eos";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "quisquam";
                                                    mode = 547184;
                                                    path = "repellendus";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "cum";
                                                    mode = 842935;
                                                    path = "est";
                                                }}),
                                            }};
                                            name = "Dr. Harriet Jones";
                                            optional = false;
                                        }};
                                        emptyDir = new EmptyDirVolumeSource() {{
                                            medium = "id";
                                            sizeLimit = "odit";
                                        }};
                                        name = "Sheryl Littel";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 539703;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "pariatur";
                                                    mode = 13655;
                                                    path = "similique";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "iste";
                                                    mode = 908587;
                                                    path = "nam";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "animi";
                                                    mode = 288907;
                                                    path = "voluptate";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "voluptatibus";
                                                    mode = 466862;
                                                    path = "nulla";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "dolorem";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 915653;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "perferendis";
                                                    mode = 310926;
                                                    path = "excepturi";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "aliquid";
                                                    mode = 294650;
                                                    path = "voluptatem";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "illum";
                                                    mode = 388006;
                                                    path = "culpa";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "dicta";
                                                    mode = 538877;
                                                    path = "ratione";
                                                }}),
                                            }};
                                            name = "Rosalie Lindgren";
                                            optional = false;
                                        }};
                                        emptyDir = new EmptyDirVolumeSource() {{
                                            medium = "temporibus";
                                            sizeLimit = "a";
                                        }};
                                        name = "Mae Hoppe";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 961607;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "mollitia";
                                                    mode = 820423;
                                                    path = "praesentium";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "neque";
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "animi";
                                latestRevision = false;
                                percent = 890379;
                                revisionName = "voluptatum";
                                tag = "voluptatem";
                            }}),
                            add(new TrafficTargetInput() {{
                                configurationName = "quisquam";
                                latestRevision = false;
                                percent = 113808;
                                revisionName = "cumque";
                                tag = "architecto";
                            }}),
                        }};
                    }};;
                    status = new ServiceStatusInput() {{
                        address = new Addressable() {{
                            url = "sint";
                        }};;
                        conditions = new org.openapis.openapi.models.shared.GoogleCloudRunV1Condition[]{{
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "occaecati";
                                message = "quis";
                                reason = "tempore";
                                severity = "officia";
                                status = "iste";
                                type = "unde";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "quas";
                                message = "laboriosam";
                                reason = "ducimus";
                                severity = "voluptatum";
                                status = "sapiente";
                                type = "deserunt";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "dolor";
                                message = "hic";
                                reason = "iure";
                                severity = "sint";
                                status = "autem";
                                type = "iste";
                            }}),
                            add(new GoogleCloudRunV1Condition() {{
                                lastTransitionTime = "cupiditate";
                                message = "ab";
                                reason = "fuga";
                                severity = "a";
                                status = "dolor";
                                type = "voluptatum";
                            }}),
                        }};
                        latestCreatedRevisionName = "molestias";
                        latestReadyRevisionName = "quod";
                        observedGeneration = 920389;
                        traffic = new org.openapis.openapi.models.shared.TrafficTargetInput[]{{
                            add(new TrafficTargetInput() {{
                                configurationName = "consectetur";
                                latestRevision = false;
                                percent = 420910;
                                revisionName = "vitae";
                                tag = "numquam";
                            }}),
                        }};
                        url = "incidunt";
                    }};;
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "minus";
                dryRun = "voluptate";
                fields = "error";
                key = "reprehenderit";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "consequatur";
                uploadProtocol = "voluptates";
            }};            

            RunNamespacesServicesReplaceServiceResponse res = sdk.namespaces.runNamespacesServicesReplaceService(req, new RunNamespacesServicesReplaceServiceSecurity("delectus", "qui") {{
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

## runNamespacesTasksGet

Get information about a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesTasksGetRequest;
import org.openapis.openapi.models.operations.RunNamespacesTasksGetResponse;
import org.openapis.openapi.models.operations.RunNamespacesTasksGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesTasksGetRequest req = new RunNamespacesTasksGetRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "doloremque";
                fields = "sed";
                key = "voluptatum";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "itaque";
                uploadProtocol = "eveniet";
            }};            

            RunNamespacesTasksGetResponse res = sdk.namespaces.runNamespacesTasksGet(req, new RunNamespacesTasksGetSecurity("repellat", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesTasksList

List tasks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesTasksListRequest;
import org.openapis.openapi.models.operations.RunNamespacesTasksListResponse;
import org.openapis.openapi.models.operations.RunNamespacesTasksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesTasksListRequest req = new RunNamespacesTasksListRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "sed";
                continue_ = "necessitatibus";
                fieldSelector = "possimus";
                fields = "dignissimos";
                includeUninitialized = false;
                key = "itaque";
                labelSelector = "explicabo";
                limit = 355898L;
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "delectus";
                resourceVersion = "incidunt";
                uploadType = "quod";
                uploadProtocol = "sunt";
                watch = false;
            }};            

            RunNamespacesTasksListResponse res = sdk.namespaces.runNamespacesTasksList(req, new RunNamespacesTasksListSecurity("ullam", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
