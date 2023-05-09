# Namespaces

### Available Operations

* [RunNamespacesAuthorizeddomainsList](#runnamespacesauthorizeddomainslist) - List authorized domains.
* [RunNamespacesConfigurationsList](#runnamespacesconfigurationslist) - List configurations.
* [RunNamespacesDomainmappingsCreate](#runnamespacesdomainmappingscreate) - Create a new domain mapping.
* [RunNamespacesDomainmappingsDelete](#runnamespacesdomainmappingsdelete) - Delete a domain mapping.
* [RunNamespacesDomainmappingsGet](#runnamespacesdomainmappingsget) - Get information about a domain mapping.
* [RunNamespacesDomainmappingsList](#runnamespacesdomainmappingslist) - List all domain mappings.
* [RunNamespacesExecutionsCancel](#runnamespacesexecutionscancel) - Cancel an execution.
* [RunNamespacesExecutionsList](#runnamespacesexecutionslist) - List executions.
* [RunNamespacesJobsCreate](#runnamespacesjobscreate) - Create a job.
* [RunNamespacesJobsDelete](#runnamespacesjobsdelete) - Delete a job.
* [RunNamespacesJobsList](#runnamespacesjobslist) - List jobs.
* [RunNamespacesJobsReplaceJob](#runnamespacesjobsreplacejob) - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [RunNamespacesJobsRun](#runnamespacesjobsrun) - Trigger creation of a new execution of this job.
* [RunNamespacesRevisionsList](#runnamespacesrevisionslist) - List revisions.
* [RunNamespacesRoutesList](#runnamespacesrouteslist) - List routes.
* [RunNamespacesServicesCreate](#runnamespacesservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [RunNamespacesServicesDelete](#runnamespacesservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [RunNamespacesServicesGet](#runnamespacesservicesget) - Gets information about a service.
* [RunNamespacesServicesList](#runnamespacesserviceslist) - Lists services for the given project and region.
* [RunNamespacesServicesReplaceService](#runnamespacesservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [RunNamespacesTasksGet](#runnamespacestasksget) - Get information about a task.
* [RunNamespacesTasksList](#runnamespacestaskslist) - List tasks.

## RunNamespacesAuthorizeddomainsList

List authorized domains.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesAuthorizeddomainsList(ctx, operations.RunNamespacesAuthorizeddomainsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(791725),
        PageToken: sdk.String("placeat"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.RunNamespacesAuthorizeddomainsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedDomainsResponse != nil {
        // handle response
    }
}
```

## RunNamespacesConfigurationsList

List configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesConfigurationsList(ctx, operations.RunNamespacesConfigurationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Continue: sdk.String("veritatis"),
        FieldSelector: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("ipsam"),
        LabelSelector: sdk.String("repellendus"),
        Limit: sdk.Int64(957156),
        OauthToken: sdk.String("quo"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        ResourceVersion: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesConfigurationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigurationsResponse != nil {
        // handle response
    }
}
```

## RunNamespacesDomainmappingsCreate

Create a new domain mapping.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesDomainmappingsCreate(ctx, operations.RunNamespacesDomainmappingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DomainMapping: &shared.DomainMapping{
            APIVersion: sdk.String("quod"),
            Kind: sdk.String("esse"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                ClusterName: sdk.String("fugit"),
                CreationTimestamp: sdk.String("deleniti"),
                DeletionGracePeriodSeconds: sdk.Int(944669),
                DeletionTimestamp: sdk.String("optio"),
                Finalizers: []string{
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                GenerateName: sdk.String("modi"),
                Generation: sdk.Int(186332),
                Labels: map[string]string{
                    "cum": "esse",
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                    "ad": "natus",
                },
                Name: sdk.String("Sheryl Fadel"),
                Namespace: sdk.String("hic"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("fuga"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("in"),
                        Name: sdk.String("Sheryl Kertzmann"),
                        UID: sdk.String("architecto"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("ipsa"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("reiciendis"),
                        Name: sdk.String("Shaun Osinski"),
                        UID: sdk.String("corporis"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("explicabo"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("nobis"),
                        Name: sdk.String("Guadalupe Hickle"),
                        UID: sdk.String("accusantium"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("iure"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("culpa"),
                        Name: sdk.String("Darrin Brakus"),
                        UID: sdk.String("culpa"),
                    },
                },
                ResourceVersion: sdk.String("consequuntur"),
                SelfLink: sdk.String("repellat"),
                UID: sdk.String("mollitia"),
            },
            Spec: &shared.DomainMappingSpec{
                CertificateMode: shared.DomainMappingSpecCertificateModeEnumNone.ToPointer(),
                ForceOverride: sdk.Bool(false),
                RouteName: sdk.String("numquam"),
            },
            Status: &shared.DomainMappingStatus{
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("quam"),
                        Message: sdk.String("molestiae"),
                        Reason: sdk.String("velit"),
                        Severity: sdk.String("error"),
                        Status: sdk.String("quia"),
                        Type: sdk.String("quis"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("vitae"),
                        Message: sdk.String("laborum"),
                        Reason: sdk.String("animi"),
                        Severity: sdk.String("enim"),
                        Status: sdk.String("odit"),
                        Type: sdk.String("quo"),
                    },
                },
                MappedRouteName: sdk.String("sequi"),
                ObservedGeneration: sdk.Int(949572),
                ResourceRecords: []shared.ResourceRecord{
                    shared.ResourceRecord{
                        Name: sdk.String("Miss Rufus Ankunding"),
                        Rrdata: sdk.String("laborum"),
                        Type: shared.ResourceRecordTypeEnumRecordTypeUnspecified.ToPointer(),
                    },
                    shared.ResourceRecord{
                        Name: sdk.String("Jan Thiel"),
                        Rrdata: sdk.String("voluptatibus"),
                        Type: shared.ResourceRecordTypeEnumRecordTypeUnspecified.ToPointer(),
                    },
                },
                URL: sdk.String("omnis"),
            },
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        DryRun: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("maiores"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.RunNamespacesDomainmappingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainMapping != nil {
        // handle response
    }
}
```

## RunNamespacesDomainmappingsDelete

Delete a domain mapping.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesDomainmappingsDelete(ctx, operations.RunNamespacesDomainmappingsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        APIVersion: sdk.String("accusamus"),
        Callback: sdk.String("commodi"),
        DryRun: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        Kind: sdk.String("quidem"),
        Name: "Andy Streich",
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        PropagationPolicy: sdk.String("voluptates"),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("sint"),
    }, operations.RunNamespacesDomainmappingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## RunNamespacesDomainmappingsGet

Get information about a domain mapping.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesDomainmappingsGet(ctx, operations.RunNamespacesDomainmappingsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        Name: "Benjamin O'Connell",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.RunNamespacesDomainmappingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainMapping != nil {
        // handle response
    }
}
```

## RunNamespacesDomainmappingsList

List all domain mappings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesDomainmappingsList(ctx, operations.RunNamespacesDomainmappingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Continue: sdk.String("assumenda"),
        FieldSelector: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("fugit"),
        LabelSelector: sdk.String("dolorum"),
        Limit: sdk.Int64(569618),
        OauthToken: sdk.String("tempora"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        ResourceVersion: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesDomainmappingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainMappingsResponse != nil {
        // handle response
    }
}
```

## RunNamespacesExecutionsCancel

Cancel an execution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesExecutionsCancel(ctx, operations.RunNamespacesExecutionsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "sint": "aliquid",
            "provident": "necessitatibus",
            "sint": "officia",
            "dolor": "debitis",
        },
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("in"),
        Key: sdk.String("illum"),
        Name: "Jean Buckridge",
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.RunNamespacesExecutionsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## RunNamespacesExecutionsList

List executions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesExecutionsList(ctx, operations.RunNamespacesExecutionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Continue: sdk.String("accusamus"),
        FieldSelector: sdk.String("delectus"),
        Fields: sdk.String("quidem"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("provident"),
        LabelSelector: sdk.String("nam"),
        Limit: sdk.Int64(659669),
        OauthToken: sdk.String("blanditiis"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        ResourceVersion: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesExecutionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionsResponse != nil {
        // handle response
    }
}
```

## RunNamespacesJobsCreate

Create a job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsCreate(ctx, operations.RunNamespacesJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Job: &shared.Job{
            APIVersion: sdk.String("natus"),
            Kind: sdk.String("omnis"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "perferendis": "nihil",
                    "magnam": "distinctio",
                },
                ClusterName: sdk.String("id"),
                CreationTimestamp: sdk.String("labore"),
                DeletionGracePeriodSeconds: sdk.Int(290077),
                DeletionTimestamp: sdk.String("suscipit"),
                Finalizers: []string{
                    "nobis",
                    "eum",
                    "vero",
                },
                GenerateName: sdk.String("aspernatur"),
                Generation: sdk.Int(102863),
                Labels: map[string]string{
                    "et": "excepturi",
                    "ullam": "provident",
                },
                Name: sdk.String("Kirk Bartoletti"),
                Namespace: sdk.String("mollitia"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("eum"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("dolor"),
                        Name: sdk.String("Ms. Fred Hilll"),
                        UID: sdk.String("debitis"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("eius"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("maxime"),
                        Name: sdk.String("Mr. Andres King"),
                        UID: sdk.String("ullam"),
                    },
                },
                ResourceVersion: sdk.String("expedita"),
                SelfLink: sdk.String("nihil"),
                UID: sdk.String("repellat"),
            },
            Spec: &shared.JobSpec{
                Template: &shared.ExecutionTemplateSpec{
                    Metadata: &shared.ObjectMeta{
                        Annotations: map[string]string{
                            "sed": "saepe",
                            "pariatur": "accusantium",
                            "consequuntur": "praesentium",
                            "natus": "magni",
                        },
                        ClusterName: sdk.String("sunt"),
                        CreationTimestamp: sdk.String("quo"),
                        DeletionGracePeriodSeconds: sdk.Int(848009),
                        DeletionTimestamp: sdk.String("pariatur"),
                        Finalizers: []string{
                            "ea",
                            "excepturi",
                            "odit",
                            "ea",
                        },
                        GenerateName: sdk.String("accusantium"),
                        Generation: sdk.Int(69167),
                        Labels: map[string]string{
                            "quidem": "ipsam",
                            "voluptate": "autem",
                            "nam": "eaque",
                            "pariatur": "nemo",
                        },
                        Name: sdk.String("Joseph Steuber DDS"),
                        Namespace: sdk.String("corporis"),
                        OwnerReferences: []shared.OwnerReference{
                            shared.OwnerReference{
                                APIVersion: sdk.String("libero"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("nobis"),
                                Name: sdk.String("Beatrice Lebsack II"),
                                UID: sdk.String("nesciunt"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("eos"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("perferendis"),
                                Name: sdk.String("Brooke Kohler"),
                                UID: sdk.String("nostrum"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("hic"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("recusandae"),
                                Name: sdk.String("Miss Cesar Metz"),
                                UID: sdk.String("blanditiis"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("error"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("eaque"),
                                Name: sdk.String("Jean Ferry"),
                                UID: sdk.String("modi"),
                            },
                        },
                        ResourceVersion: sdk.String("iste"),
                        SelfLink: sdk.String("dolorum"),
                        UID: sdk.String("deleniti"),
                    },
                    Spec: &shared.ExecutionSpec{
                        Parallelism: sdk.Int(864282),
                        TaskCount: sdk.Int(589910),
                        Template: &shared.TaskTemplateSpec{
                            Spec: &shared.TaskSpec{
                                Containers: []shared.Container{
                                    shared.Container{
                                        Args: []string{
                                            "delectus",
                                            "quaerat",
                                            "quos",
                                        },
                                        Command: []string{
                                            "dolorem",
                                            "dolorem",
                                        },
                                        Env: []shared.EnvVar{
                                            shared.EnvVar{
                                                Name: sdk.String("Tiffany Welch"),
                                                Value: sdk.String("voluptate"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("dignissimos"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Allen Parisian Jr."),
                                                        },
                                                        Name: sdk.String("Vera Kuhlman"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("quidem"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Hector Mosciski"),
                                                        },
                                                        Name: sdk.String("Ginger Bergstrom"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                        },
                                        EnvFrom: []shared.EnvFromSource{
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Sonya Leuschke"),
                                                    },
                                                    Name: sdk.String("Emmett Kovacek"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("id"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Mrs. Ray Collins"),
                                                    },
                                                    Name: sdk.String("Tommy Turner"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Derek Sipes"),
                                                    },
                                                    Name: sdk.String("Cristina Hahn"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("quod"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Clarence Parisian"),
                                                    },
                                                    Name: sdk.String("Tyrone Emard"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                        },
                                        Image: sdk.String("amet"),
                                        ImagePullPolicy: sdk.String("tempore"),
                                        LivenessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "numquam",
                                                    "enim",
                                                    "dolorem",
                                                    "sapiente",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(518201),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(471752),
                                                Service: sdk.String("sit"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("expedita"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Gina Renner"),
                                                        Value: sdk.String("quam"),
                                                    },
                                                },
                                                Path: sdk.String("ipsum"),
                                                Port: sdk.Int(277628),
                                                Scheme: sdk.String("qui"),
                                            },
                                            InitialDelaySeconds: sdk.Int(586784),
                                            PeriodSeconds: sdk.Int(807581),
                                            SuccessThreshold: sdk.Int(863856),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("soluta"),
                                                Port: sdk.Int(117531),
                                            },
                                            TimeoutSeconds: sdk.Int(674848),
                                        },
                                        Name: sdk.String("Randall Cole"),
                                        Ports: []shared.ContainerPort{
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(396060),
                                                Name: sdk.String("Felicia Spencer"),
                                                Protocol: sdk.String("fugit"),
                                            },
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(164959),
                                                Name: sdk.String("Ashley Hermiston"),
                                                Protocol: sdk.String("voluptatem"),
                                            },
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(765326),
                                                Name: sdk.String("Robin Bosco"),
                                                Protocol: sdk.String("veritatis"),
                                            },
                                        },
                                        ReadinessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "quos",
                                                    "tempore",
                                                    "cupiditate",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(45614),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(961937),
                                                Service: sdk.String("dolorem"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("dolore"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Mr. Sonya Bradtke"),
                                                        Value: sdk.String("itaque"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Jodi Skiles"),
                                                        Value: sdk.String("ut"),
                                                    },
                                                },
                                                Path: sdk.String("facilis"),
                                                Port: sdk.Int(586410),
                                                Scheme: sdk.String("qui"),
                                            },
                                            InitialDelaySeconds: sdk.Int(63955),
                                            PeriodSeconds: sdk.Int(512393),
                                            SuccessThreshold: sdk.Int(485628),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("occaecati"),
                                                Port: sdk.Int(977496),
                                            },
                                            TimeoutSeconds: sdk.Int(787542),
                                        },
                                        Resources: &shared.ResourceRequirements{
                                            Limits: map[string]string{
                                                "omnis": "quis",
                                                "ipsum": "delectus",
                                                "voluptate": "consectetur",
                                                "vero": "tenetur",
                                            },
                                            Requests: map[string]string{
                                                "hic": "distinctio",
                                                "quod": "odio",
                                            },
                                        },
                                        SecurityContext: &shared.SecurityContext{
                                            RunAsUser: sdk.Int(630448),
                                        },
                                        StartupProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "vero",
                                                    "ducimus",
                                                    "dolore",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(844550),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(848944),
                                                Service: sdk.String("sequi"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("natus"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Camille Heidenreich"),
                                                        Value: sdk.String("porro"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Domingo Kris"),
                                                        Value: sdk.String("alias"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Don Hills"),
                                                        Value: sdk.String("vel"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Clifford Dickens"),
                                                        Value: sdk.String("dicta"),
                                                    },
                                                },
                                                Path: sdk.String("dolor"),
                                                Port: sdk.Int(980700),
                                                Scheme: sdk.String("quasi"),
                                            },
                                            InitialDelaySeconds: sdk.Int(406120),
                                            PeriodSeconds: sdk.Int(862192),
                                            SuccessThreshold: sdk.Int(569211),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("voluptatibus"),
                                                Port: sdk.Int(343605),
                                            },
                                            TimeoutSeconds: sdk.Int(960835),
                                        },
                                        TerminationMessagePath: sdk.String("quisquam"),
                                        TerminationMessagePolicy: sdk.String("saepe"),
                                        VolumeMounts: []shared.VolumeMount{
                                            shared.VolumeMount{
                                                MountPath: sdk.String("impedit"),
                                                Name: sdk.String("Mrs. Sally Jacobi"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("quo"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("consectetur"),
                                                Name: sdk.String("Dr. Bruce Hane"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("aut"),
                                            },
                                        },
                                        WorkingDir: sdk.String("aut"),
                                    },
                                    shared.Container{
                                        Args: []string{
                                            "impedit",
                                            "aliquam",
                                            "fugit",
                                        },
                                        Command: []string{
                                            "inventore",
                                            "non",
                                            "et",
                                            "dolorum",
                                        },
                                        Env: []shared.EnvVar{
                                            shared.EnvVar{
                                                Name: sdk.String("Lee Kemmer"),
                                                Value: sdk.String("quas"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("assumenda"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Mrs. Shane Reinger"),
                                                        },
                                                        Name: sdk.String("Ramona Bednar"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("odio"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Joy Klocko"),
                                                        },
                                                        Name: sdk.String("Yvette Stehr"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                            shared.EnvVar{
                                                Name: sdk.String("Angelina Davis"),
                                                Value: sdk.String("veritatis"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("ipsa"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Rickey DuBuque"),
                                                        },
                                                        Name: sdk.String("Wilbur Gerlach"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("ab"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("William Goodwin"),
                                                        },
                                                        Name: sdk.String("Emily Satterfield"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                            shared.EnvVar{
                                                Name: sdk.String("Lola Schmidt IV"),
                                                Value: sdk.String("totam"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("accusamus"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Courtney Mayert"),
                                                        },
                                                        Name: sdk.String("Miss Rosie Krajcik"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("quas"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Eugene Leuschke"),
                                                        },
                                                        Name: sdk.String("Randall Lindgren"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                        },
                                        EnvFrom: []shared.EnvFromSource{
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Jeannie Cronin"),
                                                    },
                                                    Name: sdk.String("Ms. Marion Little"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("accusamus"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Joy Schmidt"),
                                                    },
                                                    Name: sdk.String("Frances Turner"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Luz McClure"),
                                                    },
                                                    Name: sdk.String("Mark Nicolas"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("cumque"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Elizabeth Schinner"),
                                                    },
                                                    Name: sdk.String("Joy Labadie"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                        },
                                        Image: sdk.String("nulla"),
                                        ImagePullPolicy: sdk.String("quas"),
                                        LivenessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "quasi",
                                                    "a",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(621679),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(575751),
                                                Service: sdk.String("pariatur"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("possimus"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Mr. Marlon Schultz V"),
                                                        Value: sdk.String("culpa"),
                                                    },
                                                },
                                                Path: sdk.String("aliquid"),
                                                Port: sdk.Int(949298),
                                                Scheme: sdk.String("quae"),
                                            },
                                            InitialDelaySeconds: sdk.Int(936747),
                                            PeriodSeconds: sdk.Int(424032),
                                            SuccessThreshold: sdk.Int(447378),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("eius"),
                                                Port: sdk.Int(727697),
                                            },
                                            TimeoutSeconds: sdk.Int(849039),
                                        },
                                        Name: sdk.String("Kenneth Hackett II"),
                                        Ports: []shared.ContainerPort{
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(356707),
                                                Name: sdk.String("Margaret Lemke"),
                                                Protocol: sdk.String("ex"),
                                            },
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(536275),
                                                Name: sdk.String("Wilbur Bradtke"),
                                                Protocol: sdk.String("quasi"),
                                            },
                                        },
                                        ReadinessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "et",
                                                    "voluptate",
                                                    "ipsa",
                                                    "minima",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(86532),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(232744),
                                                Service: sdk.String("adipisci"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("iste"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Patsy Armstrong"),
                                                        Value: sdk.String("mollitia"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Mrs. Priscilla Fritsch"),
                                                        Value: sdk.String("numquam"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Ms. Benjamin Hirthe DVM"),
                                                        Value: sdk.String("natus"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Camille Hirthe III"),
                                                        Value: sdk.String("quaerat"),
                                                    },
                                                },
                                                Path: sdk.String("consequuntur"),
                                                Port: sdk.Int(831520),
                                                Scheme: sdk.String("officia"),
                                            },
                                            InitialDelaySeconds: sdk.Int(807023),
                                            PeriodSeconds: sdk.Int(490305),
                                            SuccessThreshold: sdk.Int(640024),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("asperiores"),
                                                Port: sdk.Int(368102),
                                            },
                                            TimeoutSeconds: sdk.Int(65304),
                                        },
                                        Resources: &shared.ResourceRequirements{
                                            Limits: map[string]string{
                                                "porro": "quod",
                                                "labore": "ab",
                                            },
                                            Requests: map[string]string{
                                                "fuga": "id",
                                            },
                                        },
                                        SecurityContext: &shared.SecurityContext{
                                            RunAsUser: sdk.Int(380729),
                                        },
                                        StartupProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "culpa",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(665859),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(926880),
                                                Service: sdk.String("totam"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("fugiat"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Billie Keebler"),
                                                        Value: sdk.String("facilis"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Leslie King"),
                                                        Value: sdk.String("assumenda"),
                                                    },
                                                },
                                                Path: sdk.String("nemo"),
                                                Port: sdk.Int(924967),
                                                Scheme: sdk.String("aliquid"),
                                            },
                                            InitialDelaySeconds: sdk.Int(46007),
                                            PeriodSeconds: sdk.Int(738683),
                                            SuccessThreshold: sdk.Int(232627),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("in"),
                                                Port: sdk.Int(348519),
                                            },
                                            TimeoutSeconds: sdk.Int(937285),
                                        },
                                        TerminationMessagePath: sdk.String("facere"),
                                        TerminationMessagePolicy: sdk.String("numquam"),
                                        VolumeMounts: []shared.VolumeMount{
                                            shared.VolumeMount{
                                                MountPath: sdk.String("suscipit"),
                                                Name: sdk.String("Rickey Ullrich"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("sunt"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("asperiores"),
                                                Name: sdk.String("Ms. Ethel Farrell"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("debitis"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("consectetur"),
                                                Name: sdk.String("Dr. Maryann Howe"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("vitae"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("accusamus"),
                                                Name: sdk.String("Ricky Cole"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("voluptas"),
                                            },
                                        },
                                        WorkingDir: sdk.String("minima"),
                                    },
                                    shared.Container{
                                        Args: []string{
                                            "dolorum",
                                            "adipisci",
                                            "minus",
                                        },
                                        Command: []string{
                                            "blanditiis",
                                        },
                                        Env: []shared.EnvVar{
                                            shared.EnvVar{
                                                Name: sdk.String("Suzanne Torphy"),
                                                Value: sdk.String("adipisci"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("cum"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Morris Weissnat"),
                                                        },
                                                        Name: sdk.String("Dewey Leannon"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("nobis"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Luz Cormier"),
                                                        },
                                                        Name: sdk.String("Johnathan Klein V"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                            shared.EnvVar{
                                                Name: sdk.String("Janie Cremin"),
                                                Value: sdk.String("quidem"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("explicabo"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Geneva Bradtke"),
                                                        },
                                                        Name: sdk.String("Ms. Gregory Wisoky"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("incidunt"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Sherri Gerlach"),
                                                        },
                                                        Name: sdk.String("Kristina Lueilwitz"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                        },
                                        EnvFrom: []shared.EnvFromSource{
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Mrs. Johanna Jacobson"),
                                                    },
                                                    Name: sdk.String("Malcolm Hagenes"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("debitis"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Mark Rolfson"),
                                                    },
                                                    Name: sdk.String("Sophie Wisoky"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Gwen Fritsch"),
                                                    },
                                                    Name: sdk.String("Jack Langworth"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("cum"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Lee Lehner"),
                                                    },
                                                    Name: sdk.String("Darrel Doyle"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                        },
                                        Image: sdk.String("officia"),
                                        ImagePullPolicy: sdk.String("dolorum"),
                                        LivenessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "accusamus",
                                                    "tempora",
                                                    "atque",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(148268),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(282699),
                                                Service: sdk.String("fugiat"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("voluptatem"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Miguel Adams"),
                                                        Value: sdk.String("sit"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Willard Walker IV"),
                                                        Value: sdk.String("ex"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Karen Kautzer"),
                                                        Value: sdk.String("error"),
                                                    },
                                                },
                                                Path: sdk.String("consequatur"),
                                                Port: sdk.Int(279068),
                                                Scheme: sdk.String("reiciendis"),
                                            },
                                            InitialDelaySeconds: sdk.Int(209750),
                                            PeriodSeconds: sdk.Int(690894),
                                            SuccessThreshold: sdk.Int(115703),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("architecto"),
                                                Port: sdk.Int(577140),
                                            },
                                            TimeoutSeconds: sdk.Int(289776),
                                        },
                                        Name: sdk.String("Alberto Osinski"),
                                        Ports: []shared.ContainerPort{
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(2703),
                                                Name: sdk.String("Joanna Klocko"),
                                                Protocol: sdk.String("provident"),
                                            },
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(833819),
                                                Name: sdk.String("Noah Armstrong"),
                                                Protocol: sdk.String("reprehenderit"),
                                            },
                                        },
                                        ReadinessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "fuga",
                                                    "praesentium",
                                                    "mollitia",
                                                    "veniam",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(29100),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(790840),
                                                Service: sdk.String("repudiandae"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("quasi"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Tabitha Leannon"),
                                                        Value: sdk.String("maxime"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Georgia Farrell"),
                                                        Value: sdk.String("atque"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Frankie Torphy"),
                                                        Value: sdk.String("minima"),
                                                    },
                                                },
                                                Path: sdk.String("aspernatur"),
                                                Port: sdk.Int(404425),
                                                Scheme: sdk.String("maiores"),
                                            },
                                            InitialDelaySeconds: sdk.Int(544647),
                                            PeriodSeconds: sdk.Int(871786),
                                            SuccessThreshold: sdk.Int(621693),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("blanditiis"),
                                                Port: sdk.Int(379356),
                                            },
                                            TimeoutSeconds: sdk.Int(922348),
                                        },
                                        Resources: &shared.ResourceRequirements{
                                            Limits: map[string]string{
                                                "atque": "sunt",
                                                "recusandae": "dolorum",
                                                "repellendus": "labore",
                                            },
                                            Requests: map[string]string{
                                                "doloremque": "repudiandae",
                                                "dicta": "accusantium",
                                                "beatae": "dolores",
                                                "enim": "laboriosam",
                                            },
                                        },
                                        SecurityContext: &shared.SecurityContext{
                                            RunAsUser: sdk.Int(246535),
                                        },
                                        StartupProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "molestias",
                                                    "magnam",
                                                    "saepe",
                                                    "consequuntur",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(580107),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(886305),
                                                Service: sdk.String("perspiciatis"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("in"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Tracy Cronin"),
                                                        Value: sdk.String("quis"),
                                                    },
                                                },
                                                Path: sdk.String("reprehenderit"),
                                                Port: sdk.Int(625528),
                                                Scheme: sdk.String("illo"),
                                            },
                                            InitialDelaySeconds: sdk.Int(361306),
                                            PeriodSeconds: sdk.Int(696463),
                                            SuccessThreshold: sdk.Int(910994),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("non"),
                                                Port: sdk.Int(878493),
                                            },
                                            TimeoutSeconds: sdk.Int(39615),
                                        },
                                        TerminationMessagePath: sdk.String("iure"),
                                        TerminationMessagePolicy: sdk.String("ipsa"),
                                        VolumeMounts: []shared.VolumeMount{
                                            shared.VolumeMount{
                                                MountPath: sdk.String("quae"),
                                                Name: sdk.String("Tricia Denesik"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("necessitatibus"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("ratione"),
                                                Name: sdk.String("Kelvin Lehner"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("ad"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("repellat"),
                                                Name: sdk.String("Renee Metz"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("voluptas"),
                                            },
                                        },
                                        WorkingDir: sdk.String("alias"),
                                    },
                                    shared.Container{
                                        Args: []string{
                                            "reiciendis",
                                            "dolores",
                                            "id",
                                            "minima",
                                        },
                                        Command: []string{
                                            "dolorum",
                                            "nesciunt",
                                        },
                                        Env: []shared.EnvVar{
                                            shared.EnvVar{
                                                Name: sdk.String("Arturo Hagenes"),
                                                Value: sdk.String("ut"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("culpa"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Raquel Larkin"),
                                                        },
                                                        Name: sdk.String("Cory Medhurst"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("reiciendis"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Miss Bruce Hermann"),
                                                        },
                                                        Name: sdk.String("Eduardo Schuster"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                        },
                                        EnvFrom: []shared.EnvFromSource{
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Kristie Wyman"),
                                                    },
                                                    Name: sdk.String("Darin Nienow"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("modi"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Virgil Towne"),
                                                    },
                                                    Name: sdk.String("Luz Goldner Sr."),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Scott Bahringer"),
                                                    },
                                                    Name: sdk.String("Monica Lebsack"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("eos"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Andre Carroll V"),
                                                    },
                                                    Name: sdk.String("Darin Rodriguez"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                        },
                                        Image: sdk.String("eaque"),
                                        ImagePullPolicy: sdk.String("earum"),
                                        LivenessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "maiores",
                                                    "debitis",
                                                    "aliquid",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(780931),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(380335),
                                                Service: sdk.String("dolorem"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("fugit"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Philip O'Kon"),
                                                        Value: sdk.String("consequatur"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Catherine Kuphal"),
                                                        Value: sdk.String("suscipit"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Joyce Cummings"),
                                                        Value: sdk.String("necessitatibus"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Anita Kovacek IV"),
                                                        Value: sdk.String("esse"),
                                                    },
                                                },
                                                Path: sdk.String("praesentium"),
                                                Port: sdk.Int(979963),
                                                Scheme: sdk.String("reiciendis"),
                                            },
                                            InitialDelaySeconds: sdk.Int(423706),
                                            PeriodSeconds: sdk.Int(99958),
                                            SuccessThreshold: sdk.Int(857125),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("doloremque"),
                                                Port: sdk.Int(117315),
                                            },
                                            TimeoutSeconds: sdk.Int(483706),
                                        },
                                        Name: sdk.String("Joy Jacobson"),
                                        Ports: []shared.ContainerPort{
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(671384),
                                                Name: sdk.String("Audrey Stiedemann"),
                                                Protocol: sdk.String("officia"),
                                            },
                                        },
                                        ReadinessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "aliquid",
                                                    "perferendis",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(431760),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(374753),
                                                Service: sdk.String("iste"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("id"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Woodrow Volkman"),
                                                        Value: sdk.String("libero"),
                                                    },
                                                },
                                                Path: sdk.String("ad"),
                                                Port: sdk.Int(536923),
                                                Scheme: sdk.String("enim"),
                                            },
                                            InitialDelaySeconds: sdk.Int(110477),
                                            PeriodSeconds: sdk.Int(833316),
                                            SuccessThreshold: sdk.Int(405036),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("quo"),
                                                Port: sdk.Int(405373),
                                            },
                                            TimeoutSeconds: sdk.Int(281153),
                                        },
                                        Resources: &shared.ResourceRequirements{
                                            Limits: map[string]string{
                                                "expedita": "voluptatem",
                                                "molestias": "cum",
                                            },
                                            Requests: map[string]string{
                                                "beatae": "voluptatum",
                                                "omnis": "veritatis",
                                            },
                                        },
                                        SecurityContext: &shared.SecurityContext{
                                            RunAsUser: sdk.Int(703218),
                                        },
                                        StartupProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "culpa",
                                                    "voluptatem",
                                                    "sapiente",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(889288),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(103298),
                                                Service: sdk.String("fuga"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("pariatur"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Mary Leuschke"),
                                                        Value: sdk.String("sapiente"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Israel Hickle"),
                                                        Value: sdk.String("ullam"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Desiree Leannon"),
                                                        Value: sdk.String("nam"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Molly Fadel IV"),
                                                        Value: sdk.String("veritatis"),
                                                    },
                                                },
                                                Path: sdk.String("tempora"),
                                                Port: sdk.Int(221396),
                                                Scheme: sdk.String("consequatur"),
                                            },
                                            InitialDelaySeconds: sdk.Int(100014),
                                            PeriodSeconds: sdk.Int(24944),
                                            SuccessThreshold: sdk.Int(265039),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("fugit"),
                                                Port: sdk.Int(66149),
                                            },
                                            TimeoutSeconds: sdk.Int(513760),
                                        },
                                        TerminationMessagePath: sdk.String("quae"),
                                        TerminationMessagePolicy: sdk.String("dolor"),
                                        VolumeMounts: []shared.VolumeMount{
                                            shared.VolumeMount{
                                                MountPath: sdk.String("ipsam"),
                                                Name: sdk.String("Cynthia Macejkovic"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("officiis"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("esse"),
                                                Name: sdk.String("Aaron Hartmann"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("eum"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("vel"),
                                                Name: sdk.String("Miss Oscar Heller"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("nobis"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("laboriosam"),
                                                Name: sdk.String("Carlos Barrows"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("quasi"),
                                            },
                                        },
                                        WorkingDir: sdk.String("nisi"),
                                    },
                                },
                                MaxRetries: sdk.Int(871103),
                                ServiceAccountName: sdk.String("vero"),
                                TimeoutSeconds: sdk.String("est"),
                                Volumes: []shared.Volume{
                                    shared.Volume{
                                        ConfigMap: &shared.ConfigMapVolumeSource{
                                            DefaultMode: sdk.Int(192718),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("repudiandae"),
                                                    Mode: sdk.Int(759283),
                                                    Path: sdk.String("occaecati"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("nemo"),
                                                    Mode: sdk.Int(455898),
                                                    Path: sdk.String("blanditiis"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("officia"),
                                                    Mode: sdk.Int(376389),
                                                    Path: sdk.String("numquam"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("nemo"),
                                                    Mode: sdk.Int(551079),
                                                    Path: sdk.String("eius"),
                                                },
                                            },
                                            Name: sdk.String("Caroline Dooley"),
                                            Optional: sdk.Bool(false),
                                        },
                                        EmptyDir: &shared.EmptyDirVolumeSource{
                                            Medium: sdk.String("incidunt"),
                                            SizeLimit: sdk.String("quasi"),
                                        },
                                        Name: sdk.String("Clint Carroll"),
                                        Secret: &shared.SecretVolumeSource{
                                            DefaultMode: sdk.Int(233078),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("cupiditate"),
                                                    Mode: sdk.Int(970732),
                                                    Path: sdk.String("soluta"),
                                                },
                                            },
                                            Optional: sdk.Bool(false),
                                            SecretName: sdk.String("alias"),
                                        },
                                    },
                                    shared.Volume{
                                        ConfigMap: &shared.ConfigMapVolumeSource{
                                            DefaultMode: sdk.Int(608989),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("occaecati"),
                                                    Mode: sdk.Int(612867),
                                                    Path: sdk.String("magni"),
                                                },
                                            },
                                            Name: sdk.String("Fannie Tillman"),
                                            Optional: sdk.Bool(false),
                                        },
                                        EmptyDir: &shared.EmptyDirVolumeSource{
                                            Medium: sdk.String("omnis"),
                                            SizeLimit: sdk.String("delectus"),
                                        },
                                        Name: sdk.String("Maxine Schmitt"),
                                        Secret: &shared.SecretVolumeSource{
                                            DefaultMode: sdk.Int(549501),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("itaque"),
                                                    Mode: sdk.Int(415608),
                                                    Path: sdk.String("totam"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("earum"),
                                                    Mode: sdk.Int(267207),
                                                    Path: sdk.String("nam"),
                                                },
                                            },
                                            Optional: sdk.Bool(false),
                                            SecretName: sdk.String("vero"),
                                        },
                                    },
                                    shared.Volume{
                                        ConfigMap: &shared.ConfigMapVolumeSource{
                                            DefaultMode: sdk.Int(32901),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("vel"),
                                                    Mode: sdk.Int(1383),
                                                    Path: sdk.String("quasi"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("non"),
                                                    Mode: sdk.Int(978548),
                                                    Path: sdk.String("enim"),
                                                },
                                            },
                                            Name: sdk.String("Orville Nolan"),
                                            Optional: sdk.Bool(false),
                                        },
                                        EmptyDir: &shared.EmptyDirVolumeSource{
                                            Medium: sdk.String("reprehenderit"),
                                            SizeLimit: sdk.String("est"),
                                        },
                                        Name: sdk.String("Velma Thompson"),
                                        Secret: &shared.SecretVolumeSource{
                                            DefaultMode: sdk.Int(900103),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("ex"),
                                                    Mode: sdk.Int(376741),
                                                    Path: sdk.String("debitis"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("delectus"),
                                                    Mode: sdk.Int(65082),
                                                    Path: sdk.String("minus"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("fuga"),
                                                    Mode: sdk.Int(675689),
                                                    Path: sdk.String("consectetur"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("velit"),
                                                    Mode: sdk.Int(538869),
                                                    Path: sdk.String("ipsum"),
                                                },
                                            },
                                            Optional: sdk.Bool(false),
                                            SecretName: sdk.String("impedit"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Status: &shared.JobStatus{
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("soluta"),
                        Message: sdk.String("repudiandae"),
                        Reason: sdk.String("nam"),
                        Severity: sdk.String("dolore"),
                        Status: sdk.String("iusto"),
                        Type: sdk.String("voluptate"),
                    },
                },
                ExecutionCount: sdk.Int(194023),
                LatestCreatedExecution: &shared.ExecutionReference{
                    CompletionTimestamp: sdk.String("dignissimos"),
                    CreationTimestamp: sdk.String("neque"),
                    Name: sdk.String("Casey Sporer"),
                },
                ObservedGeneration: sdk.Int(974990),
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("libero"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("porro"),
    }, operations.RunNamespacesJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## RunNamespacesJobsDelete

Delete a job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsDelete(ctx, operations.RunNamespacesJobsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        APIVersion: sdk.String("accusantium"),
        Callback: sdk.String("vel"),
        Fields: sdk.String("ea"),
        Key: sdk.String("beatae"),
        Kind: sdk.String("vero"),
        Name: "Franklin Franecki",
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        PropagationPolicy: sdk.String("dicta"),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("iste"),
    }, operations.RunNamespacesJobsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## RunNamespacesJobsList

List jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsList(ctx, operations.RunNamespacesJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Continue: sdk.String("velit"),
        FieldSelector: sdk.String("laborum"),
        Fields: sdk.String("non"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("dolor"),
        LabelSelector: sdk.String("iusto"),
        Limit: sdk.Int64(24753),
        OauthToken: sdk.String("doloremque"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        ResourceVersion: sdk.String("recusandae"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("quidem"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## RunNamespacesJobsReplaceJob

Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsReplaceJob(ctx, operations.RunNamespacesJobsReplaceJobRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Job: &shared.Job{
            APIVersion: sdk.String("facilis"),
            Kind: sdk.String("placeat"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "expedita": "deleniti",
                    "a": "voluptate",
                    "ullam": "unde",
                },
                ClusterName: sdk.String("necessitatibus"),
                CreationTimestamp: sdk.String("animi"),
                DeletionGracePeriodSeconds: sdk.Int(769967),
                DeletionTimestamp: sdk.String("ipsam"),
                Finalizers: []string{
                    "est",
                    "error",
                },
                GenerateName: sdk.String("esse"),
                Generation: sdk.Int(288570),
                Labels: map[string]string{
                    "vero": "consectetur",
                },
                Name: sdk.String("Stephanie Effertz"),
                Namespace: sdk.String("iste"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("nemo"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("soluta"),
                        Name: sdk.String("Wallace Pagac"),
                        UID: sdk.String("alias"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("magni"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("vel"),
                        Name: sdk.String("Amy Gleason"),
                        UID: sdk.String("itaque"),
                    },
                },
                ResourceVersion: sdk.String("et"),
                SelfLink: sdk.String("ipsum"),
                UID: sdk.String("unde"),
            },
            Spec: &shared.JobSpec{
                Template: &shared.ExecutionTemplateSpec{
                    Metadata: &shared.ObjectMeta{
                        Annotations: map[string]string{
                            "distinctio": "maxime",
                            "quia": "quia",
                            "nostrum": "omnis",
                            "libero": "dicta",
                        },
                        ClusterName: sdk.String("id"),
                        CreationTimestamp: sdk.String("libero"),
                        DeletionGracePeriodSeconds: sdk.Int(854460),
                        DeletionTimestamp: sdk.String("officia"),
                        Finalizers: []string{
                            "placeat",
                            "sit",
                            "iusto",
                        },
                        GenerateName: sdk.String("ipsa"),
                        Generation: sdk.Int(914864),
                        Labels: map[string]string{
                            "aperiam": "totam",
                        },
                        Name: sdk.String("Ms. Lynne Rau"),
                        Namespace: sdk.String("dolores"),
                        OwnerReferences: []shared.OwnerReference{
                            shared.OwnerReference{
                                APIVersion: sdk.String("beatae"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("est"),
                                Name: sdk.String("Johnnie Kozey"),
                                UID: sdk.String("necessitatibus"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("tempore"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("sint"),
                                Name: sdk.String("Stacey Hintz"),
                                UID: sdk.String("corporis"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("officiis"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("voluptatibus"),
                                Name: sdk.String("Josh Abshire"),
                                UID: sdk.String("fuga"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("repudiandae"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("accusantium"),
                                Name: sdk.String("Erick Dare"),
                                UID: sdk.String("praesentium"),
                            },
                        },
                        ResourceVersion: sdk.String("odit"),
                        SelfLink: sdk.String("explicabo"),
                        UID: sdk.String("corporis"),
                    },
                    Spec: &shared.ExecutionSpec{
                        Parallelism: sdk.Int(621473),
                        TaskCount: sdk.Int(937117),
                        Template: &shared.TaskTemplateSpec{
                            Spec: &shared.TaskSpec{
                                Containers: []shared.Container{
                                    shared.Container{
                                        Args: []string{
                                            "similique",
                                            "ut",
                                            "quidem",
                                            "quis",
                                        },
                                        Command: []string{
                                            "unde",
                                        },
                                        Env: []shared.EnvVar{
                                            shared.EnvVar{
                                                Name: sdk.String("Kent Corkery"),
                                                Value: sdk.String("nesciunt"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("at"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Cody Rowe"),
                                                        },
                                                        Name: sdk.String("Kristy Lemke"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("placeat"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Gladys King"),
                                                        },
                                                        Name: sdk.String("Dana Gusikowski"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                            shared.EnvVar{
                                                Name: sdk.String("Jason Rempel"),
                                                Value: sdk.String("totam"),
                                                ValueFrom: &shared.EnvVarSource{
                                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                        Key: sdk.String("occaecati"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Angelica Flatley"),
                                                        },
                                                        Name: sdk.String("Jodi Russel"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                    SecretKeyRef: &shared.SecretKeySelector{
                                                        Key: sdk.String("vero"),
                                                        LocalObjectReference: &shared.LocalObjectReference{
                                                            Name: sdk.String("Winifred Streich"),
                                                        },
                                                        Name: sdk.String("Viola Hane"),
                                                        Optional: sdk.Bool(false),
                                                    },
                                                },
                                            },
                                        },
                                        EnvFrom: []shared.EnvFromSource{
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Natasha Bogan"),
                                                    },
                                                    Name: sdk.String("Bradford Murazik"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("quaerat"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Cecelia Schroeder"),
                                                    },
                                                    Name: sdk.String("Ms. Connie Gleason"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Dr. Elvira Robel"),
                                                    },
                                                    Name: sdk.String("Mr. Todd Reilly"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("nobis"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Mr. Dora Wuckert"),
                                                    },
                                                    Name: sdk.String("Pete Mann"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                            shared.EnvFromSource{
                                                ConfigMapRef: &shared.ConfigMapEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Bernice Yundt"),
                                                    },
                                                    Name: sdk.String("Mindy O'Kon"),
                                                    Optional: sdk.Bool(false),
                                                },
                                                Prefix: sdk.String("molestias"),
                                                SecretRef: &shared.SecretEnvSource{
                                                    LocalObjectReference: &shared.LocalObjectReference{
                                                        Name: sdk.String("Ms. Jessica Turcotte"),
                                                    },
                                                    Name: sdk.String("Randolph Reinger DVM"),
                                                    Optional: sdk.Bool(false),
                                                },
                                            },
                                        },
                                        Image: sdk.String("impedit"),
                                        ImagePullPolicy: sdk.String("cum"),
                                        LivenessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "adipisci",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(903150),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(644420),
                                                Service: sdk.String("doloremque"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("quis"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Roger McDermott"),
                                                        Value: sdk.String("possimus"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Danielle Waters"),
                                                        Value: sdk.String("veniam"),
                                                    },
                                                },
                                                Path: sdk.String("consequuntur"),
                                                Port: sdk.Int(813880),
                                                Scheme: sdk.String("laudantium"),
                                            },
                                            InitialDelaySeconds: sdk.Int(140384),
                                            PeriodSeconds: sdk.Int(863477),
                                            SuccessThreshold: sdk.Int(227362),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("exercitationem"),
                                                Port: sdk.Int(68852),
                                            },
                                            TimeoutSeconds: sdk.Int(242637),
                                        },
                                        Name: sdk.String("Randolph Huels"),
                                        Ports: []shared.ContainerPort{
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(718627),
                                                Name: sdk.String("Regina Huel"),
                                                Protocol: sdk.String("facere"),
                                            },
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(706061),
                                                Name: sdk.String("Erin Wiza"),
                                                Protocol: sdk.String("debitis"),
                                            },
                                            shared.ContainerPort{
                                                ContainerPort: sdk.Int(290841),
                                                Name: sdk.String("Craig Kiehn"),
                                                Protocol: sdk.String("iusto"),
                                            },
                                        },
                                        ReadinessProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "rem",
                                                    "eligendi",
                                                    "fugiat",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(604078),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(889448),
                                                Service: sdk.String("ducimus"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("dolor"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Sherman Brown"),
                                                        Value: sdk.String("fugiat"),
                                                    },
                                                },
                                                Path: sdk.String("ad"),
                                                Port: sdk.Int(134818),
                                                Scheme: sdk.String("enim"),
                                            },
                                            InitialDelaySeconds: sdk.Int(965090),
                                            PeriodSeconds: sdk.Int(482584),
                                            SuccessThreshold: sdk.Int(491201),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("libero"),
                                                Port: sdk.Int(72350),
                                            },
                                            TimeoutSeconds: sdk.Int(69182),
                                        },
                                        Resources: &shared.ResourceRequirements{
                                            Limits: map[string]string{
                                                "accusamus": "saepe",
                                                "tempore": "veniam",
                                            },
                                            Requests: map[string]string{
                                                "reiciendis": "earum",
                                            },
                                        },
                                        SecurityContext: &shared.SecurityContext{
                                            RunAsUser: sdk.Int(444121),
                                        },
                                        StartupProbe: &shared.Probe{
                                            Exec: &shared.ExecAction{
                                                Command: []string{
                                                    "nemo",
                                                    "repellat",
                                                    "quisquam",
                                                },
                                            },
                                            FailureThreshold: sdk.Int(197259),
                                            Grpc: &shared.GRPCAction{
                                                Port: sdk.Int(467119),
                                                Service: sdk.String("deleniti"),
                                            },
                                            HTTPGet: &shared.HTTPGetAction{
                                                Host: sdk.String("illo"),
                                                HTTPHeaders: []shared.HTTPHeader{
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Jim Schamberger"),
                                                        Value: sdk.String("repudiandae"),
                                                    },
                                                    shared.HTTPHeader{
                                                        Name: sdk.String("Kendra Collins"),
                                                        Value: sdk.String("quas"),
                                                    },
                                                },
                                                Path: sdk.String("provident"),
                                                Port: sdk.Int(922299),
                                                Scheme: sdk.String("rerum"),
                                            },
                                            InitialDelaySeconds: sdk.Int(492361),
                                            PeriodSeconds: sdk.Int(360934),
                                            SuccessThreshold: sdk.Int(873833),
                                            TCPSocket: &shared.TCPSocketAction{
                                                Host: sdk.String("similique"),
                                                Port: sdk.Int(833982),
                                            },
                                            TimeoutSeconds: sdk.Int(434827),
                                        },
                                        TerminationMessagePath: sdk.String("dolorem"),
                                        TerminationMessagePolicy: sdk.String("commodi"),
                                        VolumeMounts: []shared.VolumeMount{
                                            shared.VolumeMount{
                                                MountPath: sdk.String("commodi"),
                                                Name: sdk.String("Mrs. Donna Hand"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("praesentium"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("quidem"),
                                                Name: sdk.String("Ms. Vincent Boyle DVM"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("iusto"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("amet"),
                                                Name: sdk.String("Lorenzo Treutel"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("consequatur"),
                                            },
                                            shared.VolumeMount{
                                                MountPath: sdk.String("nemo"),
                                                Name: sdk.String("Lorena Quitzon V"),
                                                ReadOnly: sdk.Bool(false),
                                                SubPath: sdk.String("accusamus"),
                                            },
                                        },
                                        WorkingDir: sdk.String("eos"),
                                    },
                                },
                                MaxRetries: sdk.Int(520081),
                                ServiceAccountName: sdk.String("dicta"),
                                TimeoutSeconds: sdk.String("voluptatem"),
                                Volumes: []shared.Volume{
                                    shared.Volume{
                                        ConfigMap: &shared.ConfigMapVolumeSource{
                                            DefaultMode: sdk.Int(224413),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("a"),
                                                    Mode: sdk.Int(223291),
                                                    Path: sdk.String("occaecati"),
                                                },
                                            },
                                            Name: sdk.String("Albert Stroman"),
                                            Optional: sdk.Bool(false),
                                        },
                                        EmptyDir: &shared.EmptyDirVolumeSource{
                                            Medium: sdk.String("esse"),
                                            SizeLimit: sdk.String("voluptatem"),
                                        },
                                        Name: sdk.String("Ms. Luz Jenkins"),
                                        Secret: &shared.SecretVolumeSource{
                                            DefaultMode: sdk.Int(243678),
                                            Items: []shared.KeyToPath{
                                                shared.KeyToPath{
                                                    Key: sdk.String("provident"),
                                                    Mode: sdk.Int(231382),
                                                    Path: sdk.String("eligendi"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("dignissimos"),
                                                    Mode: sdk.Int(235834),
                                                    Path: sdk.String("soluta"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("natus"),
                                                    Mode: sdk.Int(839807),
                                                    Path: sdk.String("officia"),
                                                },
                                                shared.KeyToPath{
                                                    Key: sdk.String("amet"),
                                                    Mode: sdk.Int(948541),
                                                    Path: sdk.String("aspernatur"),
                                                },
                                            },
                                            Optional: sdk.Bool(false),
                                            SecretName: sdk.String("quo"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Status: &shared.JobStatus{
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("illum"),
                        Message: sdk.String("laborum"),
                        Reason: sdk.String("dignissimos"),
                        Severity: sdk.String("vero"),
                        Status: sdk.String("qui"),
                        Type: sdk.String("consectetur"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("repellat"),
                        Message: sdk.String("explicabo"),
                        Reason: sdk.String("explicabo"),
                        Severity: sdk.String("exercitationem"),
                        Status: sdk.String("nihil"),
                        Type: sdk.String("non"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("ab"),
                        Message: sdk.String("illo"),
                        Reason: sdk.String("hic"),
                        Severity: sdk.String("deserunt"),
                        Status: sdk.String("delectus"),
                        Type: sdk.String("non"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("distinctio"),
                        Message: sdk.String("in"),
                        Reason: sdk.String("exercitationem"),
                        Severity: sdk.String("labore"),
                        Status: sdk.String("numquam"),
                        Type: sdk.String("repudiandae"),
                    },
                },
                ExecutionCount: sdk.Int(265303),
                LatestCreatedExecution: &shared.ExecutionReference{
                    CompletionTimestamp: sdk.String("in"),
                    CreationTimestamp: sdk.String("explicabo"),
                    Name: sdk.String("Ian Baumbach"),
                },
                ObservedGeneration: sdk.Int(316730),
            },
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("libero"),
        Key: sdk.String("magnam"),
        Name: "Emma Keeling",
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.RunNamespacesJobsReplaceJobSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## RunNamespacesJobsRun

Trigger creation of a new execution of this job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsRun(ctx, operations.RunNamespacesJobsRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunJobRequest: &shared.RunJobRequest{
            Overrides: &shared.Overrides{
                ContainerOverrides: []shared.ContainerOverride{
                    shared.ContainerOverride{
                        Args: []string{
                            "modi",
                        },
                        Env: []shared.EnvVar{
                            shared.EnvVar{
                                Name: sdk.String("Olive Kub"),
                                Value: sdk.String("dolorum"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("possimus"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Edith Dooley"),
                                        },
                                        Name: sdk.String("Ralph Rau"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("et"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Marvin Johnston IV"),
                                        },
                                        Name: sdk.String("Brandy Langosh Jr."),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                        },
                        Name: sdk.String("Jenna Wintheiser"),
                    },
                    shared.ContainerOverride{
                        Args: []string{
                            "sed",
                            "voluptatem",
                            "alias",
                        },
                        Env: []shared.EnvVar{
                            shared.EnvVar{
                                Name: sdk.String("Mark Gottlieb"),
                                Value: sdk.String("necessitatibus"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("harum"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Doris Jacobi"),
                                        },
                                        Name: sdk.String("Ross Nikolaus"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("sequi"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Gertrude Ryan"),
                                        },
                                        Name: sdk.String("Faith Zulauf"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                            shared.EnvVar{
                                Name: sdk.String("Sheldon Baumbach"),
                                Value: sdk.String("recusandae"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("voluptates"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Hilda Crona"),
                                        },
                                        Name: sdk.String("Dr. Shari Roob Sr."),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("enim"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Ian Auer"),
                                        },
                                        Name: sdk.String("Nick Carroll"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                            shared.EnvVar{
                                Name: sdk.String("Emma Ward"),
                                Value: sdk.String("consequuntur"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("assumenda"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Domingo Rutherford"),
                                        },
                                        Name: sdk.String("Abel Bergstrom"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("esse"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Lydia Douglas"),
                                        },
                                        Name: sdk.String("Dana Hirthe"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                            shared.EnvVar{
                                Name: sdk.String("Ms. Verna Gislason"),
                                Value: sdk.String("accusantium"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("veniam"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Luis Schumm"),
                                        },
                                        Name: sdk.String("Clint Ortiz"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("vitae"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Harriet Blanda"),
                                        },
                                        Name: sdk.String("Woodrow Mitchell III"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                        },
                        Name: sdk.String("Lucas Abbott"),
                    },
                    shared.ContainerOverride{
                        Args: []string{
                            "sapiente",
                            "consequuntur",
                        },
                        Env: []shared.EnvVar{
                            shared.EnvVar{
                                Name: sdk.String("Luke Mayer"),
                                Value: sdk.String("tenetur"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("adipisci"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Harvey Harber"),
                                        },
                                        Name: sdk.String("Doris Welch"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("dolor"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Mr. Kristine Hansen"),
                                        },
                                        Name: sdk.String("Amber Fisher"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                            shared.EnvVar{
                                Name: sdk.String("Kristy Quigley II"),
                                Value: sdk.String("culpa"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("consequuntur"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Rosie Glover"),
                                        },
                                        Name: sdk.String("Tommie Schamberger"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("assumenda"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Juan Abshire DDS"),
                                        },
                                        Name: sdk.String("Randy Carter"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                        },
                        Name: sdk.String("Mr. Derrick Brakus V"),
                    },
                    shared.ContainerOverride{
                        Args: []string{
                            "iure",
                            "quibusdam",
                            "quod",
                            "nemo",
                        },
                        Env: []shared.EnvVar{
                            shared.EnvVar{
                                Name: sdk.String("Danielle Kunde"),
                                Value: sdk.String("odio"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("natus"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Felipe Wyman"),
                                        },
                                        Name: sdk.String("Brent Mills"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("hic"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Brandon Reinger"),
                                        },
                                        Name: sdk.String("Israel O'Reilly"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                            shared.EnvVar{
                                Name: sdk.String("Antonio Stanton"),
                                Value: sdk.String("facilis"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("non"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Kristopher Walter"),
                                        },
                                        Name: sdk.String("Ernestine Padberg"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("incidunt"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Vernon Abbott"),
                                        },
                                        Name: sdk.String("Neal Ortiz"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                            shared.EnvVar{
                                Name: sdk.String("Thomas Conroy"),
                                Value: sdk.String("quaerat"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("eligendi"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Gordon Towne"),
                                        },
                                        Name: sdk.String("Shaun Gusikowski"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("corrupti"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Miss Carroll Rutherford"),
                                        },
                                        Name: sdk.String("Michelle Bartell"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                            shared.EnvVar{
                                Name: sdk.String("Miss William Bechtelar"),
                                Value: sdk.String("blanditiis"),
                                ValueFrom: &shared.EnvVarSource{
                                    ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                        Key: sdk.String("quae"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Rochelle Cormier"),
                                        },
                                        Name: sdk.String("Sonia Wiegand"),
                                        Optional: sdk.Bool(false),
                                    },
                                    SecretKeyRef: &shared.SecretKeySelector{
                                        Key: sdk.String("maiores"),
                                        LocalObjectReference: &shared.LocalObjectReference{
                                            Name: sdk.String("Mrs. Ollie Ledner"),
                                        },
                                        Name: sdk.String("Lee Gibson"),
                                        Optional: sdk.Bool(false),
                                    },
                                },
                            },
                        },
                        Name: sdk.String("Arthur Doyle"),
                    },
                },
                TaskCount: sdk.Int(37534),
                TimeoutSeconds: sdk.Int(185816),
            },
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("odit"),
        Name: "Susie Abshire",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("ex"),
    }, operations.RunNamespacesJobsRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## RunNamespacesRevisionsList

List revisions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesRevisionsList(ctx, operations.RunNamespacesRevisionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quae"),
        Continue: sdk.String("similique"),
        FieldSelector: sdk.String("incidunt"),
        Fields: sdk.String("quam"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("magni"),
        LabelSelector: sdk.String("deserunt"),
        Limit: sdk.Int64(965095),
        OauthToken: sdk.String("omnis"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        ResourceVersion: sdk.String("maxime"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("cupiditate"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesRevisionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRevisionsResponse != nil {
        // handle response
    }
}
```

## RunNamespacesRoutesList

List routes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesRoutesList(ctx, operations.RunNamespacesRoutesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laudantium"),
        Continue: sdk.String("velit"),
        FieldSelector: sdk.String("reiciendis"),
        Fields: sdk.String("amet"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("nemo"),
        LabelSelector: sdk.String("ipsa"),
        Limit: sdk.Int64(787916),
        OauthToken: sdk.String("tenetur"),
        Parent: "quas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        ResourceVersion: sdk.String("aliquid"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("a"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesRoutesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoutesResponse != nil {
        // handle response
    }
}
```

## RunNamespacesServicesCreate

Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesServicesCreate(ctx, operations.RunNamespacesServicesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServiceInput: &shared.ServiceInput{
            APIVersion: sdk.String("perspiciatis"),
            Kind: sdk.String("accusantium"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "minus": "commodi",
                },
                ClusterName: sdk.String("eveniet"),
                CreationTimestamp: sdk.String("porro"),
                DeletionGracePeriodSeconds: sdk.Int(735740),
                DeletionTimestamp: sdk.String("quidem"),
                Finalizers: []string{
                    "voluptates",
                    "fugit",
                },
                GenerateName: sdk.String("eius"),
                Generation: sdk.Int(194058),
                Labels: map[string]string{
                    "asperiores": "esse",
                    "blanditiis": "sint",
                    "repellat": "a",
                    "animi": "maiores",
                },
                Name: sdk.String("Drew Nolan"),
                Namespace: sdk.String("officiis"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("officia"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("saepe"),
                        Name: sdk.String("Delia Barton"),
                        UID: sdk.String("quasi"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("blanditiis"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("eius"),
                        Name: sdk.String("Jesse Rogahn"),
                        UID: sdk.String("quia"),
                    },
                },
                ResourceVersion: sdk.String("magnam"),
                SelfLink: sdk.String("reprehenderit"),
                UID: sdk.String("quod"),
            },
            Spec: &shared.ServiceSpecInput{
                Template: &shared.RevisionTemplate{
                    Metadata: &shared.ObjectMeta{
                        Annotations: map[string]string{
                            "corrupti": "amet",
                            "molestiae": "amet",
                            "laborum": "modi",
                        },
                        ClusterName: sdk.String("perferendis"),
                        CreationTimestamp: sdk.String("necessitatibus"),
                        DeletionGracePeriodSeconds: sdk.Int(102316),
                        DeletionTimestamp: sdk.String("molestias"),
                        Finalizers: []string{
                            "sunt",
                            "maiores",
                        },
                        GenerateName: sdk.String("neque"),
                        Generation: sdk.Int(139745),
                        Labels: map[string]string{
                            "veniam": "ipsam",
                            "eaque": "exercitationem",
                            "veniam": "nihil",
                            "ad": "nisi",
                        },
                        Name: sdk.String("Tim Sporer"),
                        Namespace: sdk.String("pariatur"),
                        OwnerReferences: []shared.OwnerReference{
                            shared.OwnerReference{
                                APIVersion: sdk.String("quidem"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("repellendus"),
                                Name: sdk.String("Amelia Williamson"),
                                UID: sdk.String("repellat"),
                            },
                        },
                        ResourceVersion: sdk.String("repudiandae"),
                        SelfLink: sdk.String("architecto"),
                        UID: sdk.String("adipisci"),
                    },
                    Spec: &shared.RevisionSpec{
                        ContainerConcurrency: sdk.Int(867115),
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "voluptatibus",
                                    "iure",
                                },
                                Command: []string{
                                    "minus",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Jacob Wehner"),
                                        Value: sdk.String("non"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quasi"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Erick Pfeffer MD"),
                                                },
                                                Name: sdk.String("Timothy Nolan"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("magni"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Marcella Ernser"),
                                                },
                                                Name: sdk.String("Earnest Wisoky"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Emanuel Lemke"),
                                        Value: sdk.String("accusantium"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("illo"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Melba Heaney"),
                                                },
                                                Name: sdk.String("Meredith Kassulke"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("quae"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Kevin Friesen"),
                                                },
                                                Name: sdk.String("Rosalie Lynch"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Vicki Langworth"),
                                        Value: sdk.String("aliquid"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("consectetur"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ian Legros"),
                                                },
                                                Name: sdk.String("Eddie Labadie"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("voluptatum"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Olivia Boehm"),
                                                },
                                                Name: sdk.String("Felix Sauer"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Miss Madeline Jerde II"),
                                            },
                                            Name: sdk.String("Jay Morar"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("placeat"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Ms. Violet Mills MD"),
                                            },
                                            Name: sdk.String("Miss Joyce Runolfsson"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Jack Runolfsson"),
                                            },
                                            Name: sdk.String("Byron Ledner"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("cum"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Timmy Ryan"),
                                            },
                                            Name: sdk.String("Lowell Olson"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("libero"),
                                ImagePullPolicy: sdk.String("quo"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "hic",
                                            "maxime",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(36691),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(743531),
                                        Service: sdk.String("fugit"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("pariatur"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Patrick Ankunding"),
                                                Value: sdk.String("dolor"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Troy Dach Jr."),
                                                Value: sdk.String("eum"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Franklin Kilback"),
                                                Value: sdk.String("nihil"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Rickey Oberbrunner"),
                                                Value: sdk.String("atque"),
                                            },
                                        },
                                        Path: sdk.String("architecto"),
                                        Port: sdk.Int(667213),
                                        Scheme: sdk.String("enim"),
                                    },
                                    InitialDelaySeconds: sdk.Int(522390),
                                    PeriodSeconds: sdk.Int(168142),
                                    SuccessThreshold: sdk.Int(62130),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("quas"),
                                        Port: sdk.Int(811259),
                                    },
                                    TimeoutSeconds: sdk.Int(318028),
                                },
                                Name: sdk.String("Miranda Turcotte"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(763869),
                                        Name: sdk.String("Jon Yost"),
                                        Protocol: sdk.String("mollitia"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(765070),
                                        Name: sdk.String("Darlene Keeling"),
                                        Protocol: sdk.String("nesciunt"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(22331),
                                        Name: sdk.String("Bethany Zboncak"),
                                        Protocol: sdk.String("praesentium"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "fugit",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(25190),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(396234),
                                        Service: sdk.String("necessitatibus"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("sed"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Peggy Windler"),
                                                Value: sdk.String("deserunt"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Joan Russel"),
                                                Value: sdk.String("ipsa"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Mike Zulauf I"),
                                                Value: sdk.String("fugit"),
                                            },
                                        },
                                        Path: sdk.String("fuga"),
                                        Port: sdk.Int(943103),
                                        Scheme: sdk.String("eaque"),
                                    },
                                    InitialDelaySeconds: sdk.Int(211301),
                                    PeriodSeconds: sdk.Int(101854),
                                    SuccessThreshold: sdk.Int(44929),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("aspernatur"),
                                        Port: sdk.Int(860362),
                                    },
                                    TimeoutSeconds: sdk.Int(316541),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "magnam": "delectus",
                                    },
                                    Requests: map[string]string{
                                        "optio": "nobis",
                                        "ex": "repellat",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(65118),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "expedita",
                                            "hic",
                                            "excepturi",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(396610),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(151385),
                                        Service: sdk.String("beatae"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("similique"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Clifford West"),
                                                Value: sdk.String("animi"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Erik Upton"),
                                                Value: sdk.String("officiis"),
                                            },
                                        },
                                        Path: sdk.String("eius"),
                                        Port: sdk.Int(701978),
                                        Scheme: sdk.String("itaque"),
                                    },
                                    InitialDelaySeconds: sdk.Int(489685),
                                    PeriodSeconds: sdk.Int(373449),
                                    SuccessThreshold: sdk.Int(131687),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("impedit"),
                                        Port: sdk.Int(397014),
                                    },
                                    TimeoutSeconds: sdk.Int(339843),
                                },
                                TerminationMessagePath: sdk.String("facilis"),
                                TerminationMessagePolicy: sdk.String("ipsum"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("quaerat"),
                                        Name: sdk.String("Maxine Upton"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("libero"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("iste"),
                                        Name: sdk.String("Brooke Lueilwitz"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("iusto"),
                                    },
                                },
                                WorkingDir: sdk.String("enim"),
                            },
                            shared.Container{
                                Args: []string{
                                    "aperiam",
                                    "voluptates",
                                    "laudantium",
                                    "tempora",
                                },
                                Command: []string{
                                    "omnis",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Roman Lind"),
                                        Value: sdk.String("architecto"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("aliquam"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ebony Donnelly IV"),
                                                },
                                                Name: sdk.String("Bryant Schamberger"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("dolorum"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Lloyd Witting"),
                                                },
                                                Name: sdk.String("Robin Spinka III"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Kent Kihn"),
                                        Value: sdk.String("accusantium"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("ad"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Nellie Cremin"),
                                                },
                                                Name: sdk.String("Marlene Ratke"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("nesciunt"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Bobbie Greenfelder MD"),
                                                },
                                                Name: sdk.String("Darryl Orn"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Bob Kub"),
                                        Value: sdk.String("voluptas"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("non"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Kayla Hodkiewicz"),
                                                },
                                                Name: sdk.String("Lewis Fritsch"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("maiores"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Sandra Rowe Sr."),
                                                },
                                                Name: sdk.String("Anthony Cormier"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Audrey Smith"),
                                        Value: sdk.String("nisi"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("dignissimos"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Percy Buckridge DDS"),
                                                },
                                                Name: sdk.String("Julian Schuppe"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("provident"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Kevin Murazik"),
                                                },
                                                Name: sdk.String("Miss Estelle Mills"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Mamie King II"),
                                            },
                                            Name: sdk.String("Emilio Rau"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("accusamus"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Billie Kuvalis DDS"),
                                            },
                                            Name: sdk.String("Laverne Waelchi"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Edmund Keebler"),
                                            },
                                            Name: sdk.String("Heather Bogisich"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("vero"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Gregory Satterfield"),
                                            },
                                            Name: sdk.String("Woodrow Ritchie"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("earum"),
                                ImagePullPolicy: sdk.String("quod"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quaerat",
                                            "ipsum",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(498435),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(514625),
                                        Service: sdk.String("rerum"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("deserunt"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Annie Breitenberg"),
                                                Value: sdk.String("magnam"),
                                            },
                                        },
                                        Path: sdk.String("odio"),
                                        Port: sdk.Int(862560),
                                        Scheme: sdk.String("impedit"),
                                    },
                                    InitialDelaySeconds: sdk.Int(586277),
                                    PeriodSeconds: sdk.Int(72422),
                                    SuccessThreshold: sdk.Int(348665),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("laborum"),
                                        Port: sdk.Int(848833),
                                    },
                                    TimeoutSeconds: sdk.Int(147989),
                                },
                                Name: sdk.String("Wilbur Zulauf"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(414456),
                                        Name: sdk.String("Judith Feest"),
                                        Protocol: sdk.String("ipsa"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(978655),
                                        Name: sdk.String("Molly Waelchi"),
                                        Protocol: sdk.String("neque"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(640565),
                                        Name: sdk.String("Mr. Maryann Kunze"),
                                        Protocol: sdk.String("iusto"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(546868),
                                        Name: sdk.String("Mrs. Dolores Kertzmann"),
                                        Protocol: sdk.String("sapiente"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "est",
                                            "iure",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(787629),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(590927),
                                        Service: sdk.String("laudantium"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("nam"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Holly Harber V"),
                                                Value: sdk.String("doloremque"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Jesus Batz"),
                                                Value: sdk.String("similique"),
                                            },
                                        },
                                        Path: sdk.String("porro"),
                                        Port: sdk.Int(769789),
                                        Scheme: sdk.String("nisi"),
                                    },
                                    InitialDelaySeconds: sdk.Int(768920),
                                    PeriodSeconds: sdk.Int(743795),
                                    SuccessThreshold: sdk.Int(856568),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("laboriosam"),
                                        Port: sdk.Int(720319),
                                    },
                                    TimeoutSeconds: sdk.Int(315387),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "consectetur": "necessitatibus",
                                        "maxime": "cupiditate",
                                        "voluptatem": "provident",
                                        "adipisci": "accusantium",
                                    },
                                    Requests: map[string]string{
                                        "repellat": "omnis",
                                        "explicabo": "vel",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(740347),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "possimus",
                                            "fugit",
                                            "ipsam",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(343454),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(196852),
                                        Service: sdk.String("voluptatum"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("quasi"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Don Kling"),
                                                Value: sdk.String("aperiam"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Dr. Woodrow Corkery"),
                                                Value: sdk.String("ea"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Suzanne Kuvalis"),
                                                Value: sdk.String("asperiores"),
                                            },
                                        },
                                        Path: sdk.String("autem"),
                                        Port: sdk.Int(198892),
                                        Scheme: sdk.String("cupiditate"),
                                    },
                                    InitialDelaySeconds: sdk.Int(656839),
                                    PeriodSeconds: sdk.Int(591171),
                                    SuccessThreshold: sdk.Int(106495),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("ipsa"),
                                        Port: sdk.Int(650914),
                                    },
                                    TimeoutSeconds: sdk.Int(721138),
                                },
                                TerminationMessagePath: sdk.String("assumenda"),
                                TerminationMessagePolicy: sdk.String("quo"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("tempore"),
                                        Name: sdk.String("Denise Hoppe"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("aliquid"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("provident"),
                                        Name: sdk.String("Sophia Bernhard"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("eaque"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("alias"),
                                        Name: sdk.String("Kathryn Bruen"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("amet"),
                                    },
                                },
                                WorkingDir: sdk.String("exercitationem"),
                            },
                            shared.Container{
                                Args: []string{
                                    "praesentium",
                                    "unde",
                                    "similique",
                                    "eligendi",
                                },
                                Command: []string{
                                    "amet",
                                    "debitis",
                                    "nobis",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Orlando Littel DDS"),
                                        Value: sdk.String("veniam"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("aliquam"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Mrs. Hugo Wehner Jr."),
                                                },
                                                Name: sdk.String("Erika Koepp"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("ex"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Dr. Elsa Pacocha"),
                                                },
                                                Name: sdk.String("Carol Johns"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Jared Koepp DVM"),
                                        Value: sdk.String("reiciendis"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quod"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Debra Schultz"),
                                                },
                                                Name: sdk.String("Tara Feil"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("animi"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Miss Sheri Legros"),
                                                },
                                                Name: sdk.String("Mindy Williamson"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Jacquelyn Stark"),
                                        Value: sdk.String("molestias"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("ipsam"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Kayla Mertz"),
                                                },
                                                Name: sdk.String("Billie Kuhic"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("aliquid"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Dr. Willis Cassin"),
                                                },
                                                Name: sdk.String("Clint Wiegand"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Mable Hodkiewicz"),
                                        Value: sdk.String("quisquam"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("facere"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Cora McKenzie"),
                                                },
                                                Name: sdk.String("Deborah Keeling"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("autem"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Mr. Roy Stehr I"),
                                                },
                                                Name: sdk.String("Beatrice Flatley"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Spencer Batz"),
                                            },
                                            Name: sdk.String("Dr. Carlton Considine"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("dicta"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Kathryn Runolfsdottir"),
                                            },
                                            Name: sdk.String("Ms. Joan Mann"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Ross Turcotte"),
                                            },
                                            Name: sdk.String("Mrs. Gilberto Raynor"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("consequatur"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Levi Johns"),
                                            },
                                            Name: sdk.String("Michele Wehner"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Jill Hermann III"),
                                            },
                                            Name: sdk.String("Keith Crist"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("quibusdam"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Patsy Torp"),
                                            },
                                            Name: sdk.String("Sadie Dare"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Julian Buckridge"),
                                            },
                                            Name: sdk.String("Latoya Treutel"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("labore"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Sara Bayer"),
                                            },
                                            Name: sdk.String("Anne Brekke"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("voluptate"),
                                ImagePullPolicy: sdk.String("vel"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "sit",
                                            "vel",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(388333),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(311247),
                                        Service: sdk.String("quasi"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("rem"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Krystal McLaughlin"),
                                                Value: sdk.String("inventore"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Austin Oberbrunner I"),
                                                Value: sdk.String("doloremque"),
                                            },
                                        },
                                        Path: sdk.String("optio"),
                                        Port: sdk.Int(269731),
                                        Scheme: sdk.String("debitis"),
                                    },
                                    InitialDelaySeconds: sdk.Int(763937),
                                    PeriodSeconds: sdk.Int(806124),
                                    SuccessThreshold: sdk.Int(92264),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("beatae"),
                                        Port: sdk.Int(662068),
                                    },
                                    TimeoutSeconds: sdk.Int(9060),
                                },
                                Name: sdk.String("Chris Kertzmann"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(32719),
                                        Name: sdk.String("Marsha Prosacco"),
                                        Protocol: sdk.String("aut"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(154425),
                                        Name: sdk.String("Jon Hessel"),
                                        Protocol: sdk.String("sapiente"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(459086),
                                        Name: sdk.String("Melody Schaefer"),
                                        Protocol: sdk.String("ipsam"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "sequi",
                                            "magni",
                                            "voluptatem",
                                            "est",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(226181),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(84211),
                                        Service: sdk.String("error"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("voluptatibus"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Omar Spinka"),
                                                Value: sdk.String("numquam"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Pat Mueller"),
                                                Value: sdk.String("aliquid"),
                                            },
                                        },
                                        Path: sdk.String("nihil"),
                                        Port: sdk.Int(706328),
                                        Scheme: sdk.String("optio"),
                                    },
                                    InitialDelaySeconds: sdk.Int(279673),
                                    PeriodSeconds: sdk.Int(178201),
                                    SuccessThreshold: sdk.Int(299379),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("dolores"),
                                        Port: sdk.Int(400492),
                                    },
                                    TimeoutSeconds: sdk.Int(431843),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "ad": "quos",
                                        "illo": "suscipit",
                                    },
                                    Requests: map[string]string{
                                        "fugiat": "impedit",
                                        "culpa": "atque",
                                        "voluptates": "maiores",
                                        "nemo": "illo",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(984669),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "expedita",
                                            "modi",
                                            "cumque",
                                            "ipsam",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(578081),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(219279),
                                        Service: sdk.String("accusamus"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("quisquam"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Angelica Spencer"),
                                                Value: sdk.String("quibusdam"),
                                            },
                                        },
                                        Path: sdk.String("ipsa"),
                                        Port: sdk.Int(879208),
                                        Scheme: sdk.String("placeat"),
                                    },
                                    InitialDelaySeconds: sdk.Int(464878),
                                    PeriodSeconds: sdk.Int(627756),
                                    SuccessThreshold: sdk.Int(962408),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("saepe"),
                                        Port: sdk.Int(813975),
                                    },
                                    TimeoutSeconds: sdk.Int(748723),
                                },
                                TerminationMessagePath: sdk.String("at"),
                                TerminationMessagePolicy: sdk.String("molestias"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("temporibus"),
                                        Name: sdk.String("Barry Funk"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("dolore"),
                                    },
                                },
                                WorkingDir: sdk.String("esse"),
                            },
                        },
                        EnableServiceLinks: sdk.Bool(false),
                        ImagePullSecrets: []shared.LocalObjectReference{
                            shared.LocalObjectReference{
                                Name: sdk.String("Miss Allen McClure"),
                            },
                            shared.LocalObjectReference{
                                Name: sdk.String("Ms. Guy Macejkovic"),
                            },
                            shared.LocalObjectReference{
                                Name: sdk.String("Eula Paucek"),
                            },
                            shared.LocalObjectReference{
                                Name: sdk.String("Clay Will"),
                            },
                        },
                        ServiceAccountName: sdk.String("voluptatibus"),
                        TimeoutSeconds: sdk.Int(824267),
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(607742),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("odio"),
                                            Mode: sdk.Int(974703),
                                            Path: sdk.String("aut"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("quam"),
                                            Mode: sdk.Int(606262),
                                            Path: sdk.String("similique"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("asperiores"),
                                            Mode: sdk.Int(266289),
                                            Path: sdk.String("facere"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("neque"),
                                            Mode: sdk.Int(340604),
                                            Path: sdk.String("in"),
                                        },
                                    },
                                    Name: sdk.String("Ellen Sawayn"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("ipsa"),
                                    SizeLimit: sdk.String("reiciendis"),
                                },
                                Name: sdk.String("Eula Daugherty Sr."),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(509799),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("fugiat"),
                                            Mode: sdk.Int(313695),
                                            Path: sdk.String("iure"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("laudantium"),
                                            Mode: sdk.Int(265303),
                                            Path: sdk.String("magnam"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("accusamus"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(861823),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("quibusdam"),
                                            Mode: sdk.Int(505799),
                                            Path: sdk.String("enim"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("animi"),
                                            Mode: sdk.Int(599581),
                                            Path: sdk.String("quae"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("eum"),
                                            Mode: sdk.Int(341405),
                                            Path: sdk.String("eveniet"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("laboriosam"),
                                            Mode: sdk.Int(187361),
                                            Path: sdk.String("blanditiis"),
                                        },
                                    },
                                    Name: sdk.String("Gilberto Wisozk"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("consequatur"),
                                    SizeLimit: sdk.String("nesciunt"),
                                },
                                Name: sdk.String("Alison Hodkiewicz"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(490549),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("omnis"),
                                            Mode: sdk.Int(144397),
                                            Path: sdk.String("dolorem"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("quidem"),
                                            Mode: sdk.Int(476614),
                                            Path: sdk.String("debitis"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("vitae"),
                                            Mode: sdk.Int(223717),
                                            Path: sdk.String("ad"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("atque"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(284779),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("reprehenderit"),
                                            Mode: sdk.Int(644129),
                                            Path: sdk.String("itaque"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("et"),
                                            Mode: sdk.Int(181267),
                                            Path: sdk.String("impedit"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("ex"),
                                            Mode: sdk.Int(507874),
                                            Path: sdk.String("natus"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("vitae"),
                                            Mode: sdk.Int(946558),
                                            Path: sdk.String("laudantium"),
                                        },
                                    },
                                    Name: sdk.String("Mr. Lynne VonRueden"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("iusto"),
                                    SizeLimit: sdk.String("inventore"),
                                },
                                Name: sdk.String("Mrs. Irene Ebert"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(454165),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("pariatur"),
                                            Mode: sdk.Int(791421),
                                            Path: sdk.String("a"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("fuga"),
                                            Mode: sdk.Int(518926),
                                            Path: sdk.String("cupiditate"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("at"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(986594),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("quam"),
                                            Mode: sdk.Int(349087),
                                            Path: sdk.String("voluptates"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("sequi"),
                                            Mode: sdk.Int(336640),
                                            Path: sdk.String("commodi"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("vel"),
                                            Mode: sdk.Int(522824),
                                            Path: sdk.String("aliquid"),
                                        },
                                    },
                                    Name: sdk.String("Katrina Considine"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("cumque"),
                                    SizeLimit: sdk.String("dolor"),
                                },
                                Name: sdk.String("Jake Schiller"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(104834),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("veritatis"),
                                            Mode: sdk.Int(814398),
                                            Path: sdk.String("earum"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("laborum"),
                                },
                            },
                        },
                    },
                },
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("voluptatem"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(140909),
                        RevisionName: sdk.String("aliquid"),
                        Tag: sdk.String("pariatur"),
                    },
                },
            },
            Status: &shared.ServiceStatusInput{
                Address: &shared.Addressable{
                    URL: sdk.String("enim"),
                },
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("architecto"),
                        Message: sdk.String("est"),
                        Reason: sdk.String("quaerat"),
                        Severity: sdk.String("facere"),
                        Status: sdk.String("vitae"),
                        Type: sdk.String("omnis"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("alias"),
                        Message: sdk.String("sapiente"),
                        Reason: sdk.String("officiis"),
                        Severity: sdk.String("expedita"),
                        Status: sdk.String("quia"),
                        Type: sdk.String("vitae"),
                    },
                },
                LatestCreatedRevisionName: sdk.String("odio"),
                LatestReadyRevisionName: sdk.String("quas"),
                ObservedGeneration: sdk.Int(55407),
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("placeat"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(801958),
                        RevisionName: sdk.String("eligendi"),
                        Tag: sdk.String("sit"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("possimus"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(718879),
                        RevisionName: sdk.String("distinctio"),
                        Tag: sdk.String("assumenda"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("illum"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(746834),
                        RevisionName: sdk.String("magnam"),
                        Tag: sdk.String("laudantium"),
                    },
                },
                URL: sdk.String("tempora"),
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corrupti"),
        DryRun: sdk.String("reiciendis"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("repudiandae"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.RunNamespacesServicesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## RunNamespacesServicesDelete

Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesServicesDelete(ctx, operations.RunNamespacesServicesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumProto.ToPointer(),
        APIVersion: sdk.String("ab"),
        Callback: sdk.String("ad"),
        DryRun: sdk.String("blanditiis"),
        Fields: sdk.String("porro"),
        Key: sdk.String("labore"),
        Kind: sdk.String("impedit"),
        Name: "Lila Hermiston",
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        PropagationPolicy: sdk.String("occaecati"),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.RunNamespacesServicesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## RunNamespacesServicesGet

Gets information about a service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesServicesGet(ctx, operations.RunNamespacesServicesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("eveniet"),
        Name: "Mr. Robin Dibbert",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("est"),
    }, operations.RunNamespacesServicesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## RunNamespacesServicesList

Lists services for the given project and region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesServicesList(ctx, operations.RunNamespacesServicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Continue: sdk.String("maiores"),
        FieldSelector: sdk.String("quidem"),
        Fields: sdk.String("in"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("culpa"),
        LabelSelector: sdk.String("doloremque"),
        Limit: sdk.Int64(681336),
        OauthToken: sdk.String("dicta"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        ResourceVersion: sdk.String("eligendi"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("dignissimos"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesServicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## RunNamespacesServicesReplaceService

Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesServicesReplaceService(ctx, operations.RunNamespacesServicesReplaceServiceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ServiceInput: &shared.ServiceInput{
            APIVersion: sdk.String("ratione"),
            Kind: sdk.String("possimus"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "aut": "natus",
                    "esse": "delectus",
                },
                ClusterName: sdk.String("deserunt"),
                CreationTimestamp: sdk.String("ratione"),
                DeletionGracePeriodSeconds: sdk.Int(60379),
                DeletionTimestamp: sdk.String("debitis"),
                Finalizers: []string{
                    "deserunt",
                    "hic",
                    "ducimus",
                },
                GenerateName: sdk.String("consequuntur"),
                Generation: sdk.Int(370195),
                Labels: map[string]string{
                    "quia": "omnis",
                    "dicta": "qui",
                    "explicabo": "consequatur",
                },
                Name: sdk.String("Elizabeth Stehr"),
                Namespace: sdk.String("hic"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("deserunt"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("itaque"),
                        Name: sdk.String("Mathew Kunde"),
                        UID: sdk.String("assumenda"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("sunt"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Dr. Jaime Rowe"),
                        UID: sdk.String("magnam"),
                    },
                },
                ResourceVersion: sdk.String("perspiciatis"),
                SelfLink: sdk.String("amet"),
                UID: sdk.String("corrupti"),
            },
            Spec: &shared.ServiceSpecInput{
                Template: &shared.RevisionTemplate{
                    Metadata: &shared.ObjectMeta{
                        Annotations: map[string]string{
                            "nemo": "delectus",
                        },
                        ClusterName: sdk.String("illum"),
                        CreationTimestamp: sdk.String("porro"),
                        DeletionGracePeriodSeconds: sdk.Int(309634),
                        DeletionTimestamp: sdk.String("magni"),
                        Finalizers: []string{
                            "quos",
                            "in",
                            "commodi",
                            "maxime",
                        },
                        GenerateName: sdk.String("sed"),
                        Generation: sdk.Int(791538),
                        Labels: map[string]string{
                            "possimus": "delectus",
                        },
                        Name: sdk.String("Jim Rosenbaum"),
                        Namespace: sdk.String("illo"),
                        OwnerReferences: []shared.OwnerReference{
                            shared.OwnerReference{
                                APIVersion: sdk.String("esse"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("nisi"),
                                Name: sdk.String("Emily Abshire"),
                                UID: sdk.String("numquam"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("vitae"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("maiores"),
                                Name: sdk.String("Juan Price"),
                                UID: sdk.String("dolorem"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("hic"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("repellendus"),
                                Name: sdk.String("Andrew Gulgowski"),
                                UID: sdk.String("autem"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("tempore"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("recusandae"),
                                Name: sdk.String("Sandy Hirthe"),
                                UID: sdk.String("excepturi"),
                            },
                        },
                        ResourceVersion: sdk.String("natus"),
                        SelfLink: sdk.String("deleniti"),
                        UID: sdk.String("necessitatibus"),
                    },
                    Spec: &shared.RevisionSpec{
                        ContainerConcurrency: sdk.Int(136770),
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "vero",
                                    "eos",
                                    "voluptatem",
                                },
                                Command: []string{
                                    "id",
                                    "quae",
                                    "commodi",
                                    "a",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Antoinette Crist MD"),
                                        Value: sdk.String("sed"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("blanditiis"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Clark Hermiston"),
                                                },
                                                Name: sdk.String("Maurice Friesen"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("ipsa"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Tiffany Mayert"),
                                                },
                                                Name: sdk.String("Marilyn Gibson"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Mae Gleichner"),
                                        Value: sdk.String("modi"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("doloremque"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Karen Lemke"),
                                                },
                                                Name: sdk.String("Kayla Reinger"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("optio"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Elijah Barton"),
                                                },
                                                Name: sdk.String("Beatrice Buckridge"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Willis Heller"),
                                        Value: sdk.String("quasi"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quae"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Rufus Ryan"),
                                                },
                                                Name: sdk.String("Carlton Wyman MD"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("fugit"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Angelica Kreiger"),
                                                },
                                                Name: sdk.String("Dr. Terrance Lind III"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Dr. Austin Little"),
                                        Value: sdk.String("libero"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("nam"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Sylvia Schimmel"),
                                                },
                                                Name: sdk.String("Glenn Green"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("adipisci"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Antoinette Wolf IV"),
                                                },
                                                Name: sdk.String("Santiago Fritsch"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Leticia Funk"),
                                            },
                                            Name: sdk.String("Mrs. Margie Wisoky"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("consequuntur"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Diana Mante"),
                                            },
                                            Name: sdk.String("Mona Russel"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Rosa Considine"),
                                            },
                                            Name: sdk.String("Damon Bashirian"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("totam"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Rex Bode"),
                                            },
                                            Name: sdk.String("Wanda Hamill"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Viola Abernathy"),
                                            },
                                            Name: sdk.String("Vernon Kuhn"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("at"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Hugh Marvin"),
                                            },
                                            Name: sdk.String("Cesar Schowalter"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Mercedes Purdy"),
                                            },
                                            Name: sdk.String("Tyler McKenzie"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("nostrum"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Mandy Kreiger"),
                                            },
                                            Name: sdk.String("Josephine McCullough"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("fugiat"),
                                ImagePullPolicy: sdk.String("molestiae"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "repellendus",
                                            "saepe",
                                            "amet",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(716795),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(426691),
                                        Service: sdk.String("necessitatibus"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("iste"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Terrance Wolf"),
                                                Value: sdk.String("soluta"),
                                            },
                                        },
                                        Path: sdk.String("cum"),
                                        Port: sdk.Int(449880),
                                        Scheme: sdk.String("delectus"),
                                    },
                                    InitialDelaySeconds: sdk.Int(412181),
                                    PeriodSeconds: sdk.Int(414438),
                                    SuccessThreshold: sdk.Int(142978),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("ullam"),
                                        Port: sdk.Int(354554),
                                    },
                                    TimeoutSeconds: sdk.Int(43862),
                                },
                                Name: sdk.String("Clarence Lang"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(648166),
                                        Name: sdk.String("Troy Leuschke"),
                                        Protocol: sdk.String("reiciendis"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "odit",
                                            "consectetur",
                                            "inventore",
                                            "minima",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(703651),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(708360),
                                        Service: sdk.String("deserunt"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("nisi"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Debra Kerluke"),
                                                Value: sdk.String("quae"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Nettie Hartmann"),
                                                Value: sdk.String("eum"),
                                            },
                                        },
                                        Path: sdk.String("deserunt"),
                                        Port: sdk.Int(919730),
                                        Scheme: sdk.String("nemo"),
                                    },
                                    InitialDelaySeconds: sdk.Int(565446),
                                    PeriodSeconds: sdk.Int(102019),
                                    SuccessThreshold: sdk.Int(711275),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("quisquam"),
                                        Port: sdk.Int(506770),
                                    },
                                    TimeoutSeconds: sdk.Int(708075),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "repudiandae": "maiores",
                                        "ipsum": "commodi",
                                        "vitae": "fugit",
                                        "nam": "ex",
                                    },
                                    Requests: map[string]string{
                                        "quod": "eos",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(186),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "a",
                                            "facere",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(662515),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(539537),
                                        Service: sdk.String("quaerat"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("aperiam"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Pauline Paucek"),
                                                Value: sdk.String("officia"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Pablo Fahey"),
                                                Value: sdk.String("sit"),
                                            },
                                        },
                                        Path: sdk.String("molestias"),
                                        Port: sdk.Int(377194),
                                        Scheme: sdk.String("expedita"),
                                    },
                                    InitialDelaySeconds: sdk.Int(375378),
                                    PeriodSeconds: sdk.Int(981865),
                                    SuccessThreshold: sdk.Int(412024),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("vel"),
                                        Port: sdk.Int(965726),
                                    },
                                    TimeoutSeconds: sdk.Int(881067),
                                },
                                TerminationMessagePath: sdk.String("reiciendis"),
                                TerminationMessagePolicy: sdk.String("consequatur"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("accusantium"),
                                        Name: sdk.String("Eduardo Wolff"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("non"),
                                    },
                                },
                                WorkingDir: sdk.String("cum"),
                            },
                        },
                        EnableServiceLinks: sdk.Bool(false),
                        ImagePullSecrets: []shared.LocalObjectReference{
                            shared.LocalObjectReference{
                                Name: sdk.String("Erin Kozey"),
                            },
                            shared.LocalObjectReference{
                                Name: sdk.String("Craig Schamberger"),
                            },
                        },
                        ServiceAccountName: sdk.String("cum"),
                        TimeoutSeconds: sdk.Int(842935),
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(414644),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("autem"),
                                            Mode: sdk.Int(120432),
                                            Path: sdk.String("recusandae"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("sapiente"),
                                            Mode: sdk.Int(661764),
                                            Path: sdk.String("odit"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("inventore"),
                                            Mode: sdk.Int(612238),
                                            Path: sdk.String("atque"),
                                        },
                                    },
                                    Name: sdk.String("Dana Lindgren"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("aut"),
                                    SizeLimit: sdk.String("similique"),
                                },
                                Name: sdk.String("Ramiro Reilly"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(455400),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("quam"),
                                            Mode: sdk.Int(859537),
                                            Path: sdk.String("dolorem"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("voluptates"),
                                            Mode: sdk.Int(953861),
                                            Path: sdk.String("perferendis"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("quaerat"),
                                            Mode: sdk.Int(569872),
                                            Path: sdk.String("aliquid"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("dolore"),
                                            Mode: sdk.Int(29789),
                                            Path: sdk.String("illum"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("laboriosam"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(632850),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("atque"),
                                            Mode: sdk.Int(191425),
                                            Path: sdk.String("vitae"),
                                        },
                                    },
                                    Name: sdk.String("Dave Kozey"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("a"),
                                    SizeLimit: sdk.String("ad"),
                                },
                                Name: sdk.String("Sam Wisoky"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(67631),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("possimus"),
                                            Mode: sdk.Int(505908),
                                            Path: sdk.String("neque"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("quam"),
                                            Mode: sdk.Int(654931),
                                            Path: sdk.String("debitis"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("voluptatum"),
                                            Mode: sdk.Int(28256),
                                            Path: sdk.String("quisquam"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("vitae"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(766498),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("sint"),
                                            Mode: sdk.Int(756936),
                                            Path: sdk.String("occaecati"),
                                        },
                                    },
                                    Name: sdk.String("Whitney Nienow"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("quas"),
                                    SizeLimit: sdk.String("laboriosam"),
                                },
                                Name: sdk.String("Nora Will"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(940951),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("sint"),
                                            Mode: sdk.Int(418787),
                                            Path: sdk.String("iste"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("cupiditate"),
                                            Mode: sdk.Int(67855),
                                            Path: sdk.String("fuga"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("a"),
                                },
                            },
                        },
                    },
                },
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("voluptatum"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(561858),
                        RevisionName: sdk.String("quod"),
                        Tag: sdk.String("repudiandae"),
                    },
                },
            },
            Status: &shared.ServiceStatusInput{
                Address: &shared.Addressable{
                    URL: sdk.String("eaque"),
                },
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("autem"),
                        Message: sdk.String("vitae"),
                        Reason: sdk.String("numquam"),
                        Severity: sdk.String("incidunt"),
                        Status: sdk.String("modi"),
                        Type: sdk.String("quos"),
                    },
                },
                LatestCreatedRevisionName: sdk.String("minus"),
                LatestReadyRevisionName: sdk.String("voluptate"),
                ObservedGeneration: sdk.Int(623867),
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("reprehenderit"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(654199),
                        RevisionName: sdk.String("consequatur"),
                        Tag: sdk.String("voluptates"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("delectus"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(185862),
                        RevisionName: sdk.String("delectus"),
                        Tag: sdk.String("exercitationem"),
                    },
                },
                URL: sdk.String("ipsum"),
            },
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sed"),
        DryRun: sdk.String("voluptatum"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("a"),
        Name: "Conrad Zulauf",
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("sed"),
    }, operations.RunNamespacesServicesReplaceServiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## RunNamespacesTasksGet

Get information about a task.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesTasksGet(ctx, operations.RunNamespacesTasksGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("ullam"),
        Name: "Lucia Gorczany II",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("officia"),
    }, operations.RunNamespacesTasksGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## RunNamespacesTasksList

List tasks.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesTasksList(ctx, operations.RunNamespacesTasksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        Continue: sdk.String("consequatur"),
        FieldSelector: sdk.String("delectus"),
        Fields: sdk.String("incidunt"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("dolore"),
        LabelSelector: sdk.String("nemo"),
        Limit: sdk.Int64(669695),
        OauthToken: sdk.String("quo"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        ResourceVersion: sdk.String("laboriosam"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("quam"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesTasksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTasksResponse != nil {
        // handle response
    }
}
```
