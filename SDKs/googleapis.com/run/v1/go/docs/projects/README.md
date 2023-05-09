# Projects

### Available Operations

* [RunProjectsLocationsAuthorizeddomainsList](#runprojectslocationsauthorizeddomainslist) - List authorized domains.
* [RunProjectsLocationsConfigurationsList](#runprojectslocationsconfigurationslist) - List configurations.
* [RunProjectsLocationsDomainmappingsCreate](#runprojectslocationsdomainmappingscreate) - Create a new domain mapping.
* [RunProjectsLocationsDomainmappingsList](#runprojectslocationsdomainmappingslist) - List all domain mappings.
* [RunProjectsLocationsList](#runprojectslocationslist) - Lists information about the supported locations for this service.
* [RunProjectsLocationsRevisionsList](#runprojectslocationsrevisionslist) - List revisions.
* [RunProjectsLocationsRoutesList](#runprojectslocationsrouteslist) - List routes.
* [RunProjectsLocationsServicesCreate](#runprojectslocationsservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [RunProjectsLocationsServicesDelete](#runprojectslocationsservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [RunProjectsLocationsServicesGet](#runprojectslocationsservicesget) - Gets information about a service.
* [RunProjectsLocationsServicesGetIamPolicy](#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* [RunProjectsLocationsServicesList](#runprojectslocationsserviceslist) - Lists services for the given project and region.
* [RunProjectsLocationsServicesReplaceService](#runprojectslocationsservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [RunProjectsLocationsServicesSetIamPolicy](#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [RunProjectsLocationsServicesTestIamPermissions](#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

## RunProjectsLocationsAuthorizeddomainsList

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
    res, err := s.Projects.RunProjectsLocationsAuthorizeddomainsList(ctx, operations.RunProjectsLocationsAuthorizeddomainsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("culpa"),
        PageSize: sdk.Int64(855647),
        PageToken: sdk.String("inventore"),
        Parent: "atque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.RunProjectsLocationsAuthorizeddomainsListSecurity{
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

## RunProjectsLocationsConfigurationsList

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
    res, err := s.Projects.RunProjectsLocationsConfigurationsList(ctx, operations.RunProjectsLocationsConfigurationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Continue: sdk.String("suscipit"),
        FieldSelector: sdk.String("quidem"),
        Fields: sdk.String("delectus"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("nemo"),
        LabelSelector: sdk.String("cumque"),
        Limit: sdk.Int64(529174),
        OauthToken: sdk.String("sequi"),
        Parent: "atque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        ResourceVersion: sdk.String("expedita"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("totam"),
        Watch: sdk.Bool(false),
    }, operations.RunProjectsLocationsConfigurationsListSecurity{
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

## RunProjectsLocationsDomainmappingsCreate

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
    res, err := s.Projects.RunProjectsLocationsDomainmappingsCreate(ctx, operations.RunProjectsLocationsDomainmappingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DomainMapping: &shared.DomainMapping{
            APIVersion: sdk.String("aspernatur"),
            Kind: sdk.String("eaque"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "nam": "ex",
                    "odio": "delectus",
                    "minus": "ut",
                    "distinctio": "eius",
                },
                ClusterName: sdk.String("eos"),
                CreationTimestamp: sdk.String("veniam"),
                DeletionGracePeriodSeconds: sdk.Int(918720),
                DeletionTimestamp: sdk.String("sint"),
                Finalizers: []string{
                    "debitis",
                    "laboriosam",
                    "eos",
                },
                GenerateName: sdk.String("amet"),
                Generation: sdk.Int(279679),
                Labels: map[string]string{
                    "occaecati": "reiciendis",
                    "voluptate": "tempore",
                    "in": "omnis",
                    "possimus": "tenetur",
                },
                Name: sdk.String("Rudolph Kshlerin"),
                Namespace: sdk.String("ad"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("ratione"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("totam"),
                        Name: sdk.String("Theodore Reichert"),
                        UID: sdk.String("cupiditate"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("illo"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("saepe"),
                        Name: sdk.String("Shirley Jaskolski"),
                        UID: sdk.String("deleniti"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("provident"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("aut"),
                        Name: sdk.String("Dean Goldner"),
                        UID: sdk.String("odio"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("nostrum"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("maiores"),
                        Name: sdk.String("Wilma Weimann"),
                        UID: sdk.String("possimus"),
                    },
                },
                ResourceVersion: sdk.String("nesciunt"),
                SelfLink: sdk.String("corrupti"),
                UID: sdk.String("nostrum"),
            },
            Spec: &shared.DomainMappingSpec{
                CertificateMode: shared.DomainMappingSpecCertificateModeEnumAutomatic.ToPointer(),
                ForceOverride: sdk.Bool(false),
                RouteName: sdk.String("sequi"),
            },
            Status: &shared.DomainMappingStatus{
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("numquam"),
                        Message: sdk.String("laborum"),
                        Reason: sdk.String("eligendi"),
                        Severity: sdk.String("autem"),
                        Status: sdk.String("adipisci"),
                        Type: sdk.String("sunt"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("rerum"),
                        Message: sdk.String("occaecati"),
                        Reason: sdk.String("provident"),
                        Severity: sdk.String("necessitatibus"),
                        Status: sdk.String("fugit"),
                        Type: sdk.String("autem"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("optio"),
                        Message: sdk.String("eveniet"),
                        Reason: sdk.String("fugiat"),
                        Severity: sdk.String("blanditiis"),
                        Status: sdk.String("a"),
                        Type: sdk.String("natus"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("sapiente"),
                        Message: sdk.String("repellendus"),
                        Reason: sdk.String("facilis"),
                        Severity: sdk.String("molestias"),
                        Status: sdk.String("dolore"),
                        Type: sdk.String("et"),
                    },
                },
                MappedRouteName: sdk.String("accusantium"),
                ObservedGeneration: sdk.Int(980980),
                ResourceRecords: []shared.ResourceRecord{
                    shared.ResourceRecord{
                        Name: sdk.String("Hannah Rath"),
                        Rrdata: sdk.String("vitae"),
                        Type: shared.ResourceRecordTypeEnumA.ToPointer(),
                    },
                    shared.ResourceRecord{
                        Name: sdk.String("Jacob Krajcik Sr."),
                        Rrdata: sdk.String("mollitia"),
                        Type: shared.ResourceRecordTypeEnumCname.ToPointer(),
                    },
                },
                URL: sdk.String("at"),
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        DryRun: sdk.String("rem"),
        Fields: sdk.String("vel"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("labore"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.RunProjectsLocationsDomainmappingsCreateSecurity{
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

## RunProjectsLocationsDomainmappingsList

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
    res, err := s.Projects.RunProjectsLocationsDomainmappingsList(ctx, operations.RunProjectsLocationsDomainmappingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Continue: sdk.String("ducimus"),
        FieldSelector: sdk.String("consectetur"),
        Fields: sdk.String("sapiente"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("quis"),
        LabelSelector: sdk.String("accusantium"),
        Limit: sdk.Int64(190260),
        OauthToken: sdk.String("consectetur"),
        Parent: "asperiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        ResourceVersion: sdk.String("sint"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("tempore"),
        Watch: sdk.Bool(false),
    }, operations.RunProjectsLocationsDomainmappingsListSecurity{
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

## RunProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.RunProjectsLocationsList(ctx, operations.RunProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("nobis"),
        Filter: sdk.String("debitis"),
        Key: sdk.String("labore"),
        Name: "Lorraine Cummerata",
        OauthToken: sdk.String("expedita"),
        PageSize: sdk.Int64(622789),
        PageToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("earum"),
    }, operations.RunProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## RunProjectsLocationsRevisionsList

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
    res, err := s.Projects.RunProjectsLocationsRevisionsList(ctx, operations.RunProjectsLocationsRevisionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eius"),
        Continue: sdk.String("error"),
        FieldSelector: sdk.String("vel"),
        Fields: sdk.String("dolorum"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("alias"),
        LabelSelector: sdk.String("itaque"),
        Limit: sdk.Int64(69814),
        OauthToken: sdk.String("sunt"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        ResourceVersion: sdk.String("iusto"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("non"),
        Watch: sdk.Bool(false),
    }, operations.RunProjectsLocationsRevisionsListSecurity{
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

## RunProjectsLocationsRoutesList

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
    res, err := s.Projects.RunProjectsLocationsRoutesList(ctx, operations.RunProjectsLocationsRoutesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("minima"),
        Continue: sdk.String("omnis"),
        FieldSelector: sdk.String("recusandae"),
        Fields: sdk.String("architecto"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("voluptatibus"),
        LabelSelector: sdk.String("autem"),
        Limit: sdk.Int64(449861),
        OauthToken: sdk.String("repellat"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        ResourceVersion: sdk.String("dolore"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("quo"),
        Watch: sdk.Bool(false),
    }, operations.RunProjectsLocationsRoutesListSecurity{
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

## RunProjectsLocationsServicesCreate

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
    res, err := s.Projects.RunProjectsLocationsServicesCreate(ctx, operations.RunProjectsLocationsServicesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServiceInput: &shared.ServiceInput{
            APIVersion: sdk.String("tempora"),
            Kind: sdk.String("libero"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "illum": "iusto",
                    "aliquid": "sint",
                },
                ClusterName: sdk.String("aliquid"),
                CreationTimestamp: sdk.String("repellat"),
                DeletionGracePeriodSeconds: sdk.Int(957032),
                DeletionTimestamp: sdk.String("consectetur"),
                Finalizers: []string{
                    "ullam",
                    "nihil",
                    "eius",
                    "dignissimos",
                },
                GenerateName: sdk.String("corporis"),
                Generation: sdk.Int(16590),
                Labels: map[string]string{
                    "amet": "corporis",
                },
                Name: sdk.String("Gretchen Greenholt"),
                Namespace: sdk.String("ipsam"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("hic"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("praesentium"),
                        Name: sdk.String("William Larson"),
                        UID: sdk.String("dolor"),
                    },
                },
                ResourceVersion: sdk.String("sunt"),
                SelfLink: sdk.String("omnis"),
                UID: sdk.String("quam"),
            },
            Spec: &shared.ServiceSpecInput{
                Template: &shared.RevisionTemplate{
                    Metadata: &shared.ObjectMeta{
                        Annotations: map[string]string{
                            "dicta": "excepturi",
                            "consectetur": "deserunt",
                            "odit": "incidunt",
                            "corporis": "quaerat",
                        },
                        ClusterName: sdk.String("suscipit"),
                        CreationTimestamp: sdk.String("ducimus"),
                        DeletionGracePeriodSeconds: sdk.Int(947309),
                        DeletionTimestamp: sdk.String("excepturi"),
                        Finalizers: []string{
                            "corrupti",
                            "nihil",
                        },
                        GenerateName: sdk.String("eius"),
                        Generation: sdk.Int(811380),
                        Labels: map[string]string{
                            "facere": "ipsam",
                        },
                        Name: sdk.String("Sherman Green"),
                        Namespace: sdk.String("qui"),
                        OwnerReferences: []shared.OwnerReference{
                            shared.OwnerReference{
                                APIVersion: sdk.String("consectetur"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("ratione"),
                                Name: sdk.String("Elmer Hyatt"),
                                UID: sdk.String("rem"),
                            },
                        },
                        ResourceVersion: sdk.String("voluptatibus"),
                        SelfLink: sdk.String("officiis"),
                        UID: sdk.String("corporis"),
                    },
                    Spec: &shared.RevisionSpec{
                        ContainerConcurrency: sdk.Int(830909),
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "libero",
                                },
                                Command: []string{
                                    "odio",
                                    "omnis",
                                    "officiis",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Nancy Frami"),
                                        Value: sdk.String("neque"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("aspernatur"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Miss Ana McGlynn"),
                                                },
                                                Name: sdk.String("Joe Bartell"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("eius"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Mr. Sandra Franey"),
                                                },
                                                Name: sdk.String("Mrs. Raquel Hayes"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Gene Herman"),
                                        Value: sdk.String("reprehenderit"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("eos"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ms. Benny Goyette"),
                                                },
                                                Name: sdk.String("Robert Runte"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("tenetur"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Carol Lowe"),
                                                },
                                                Name: sdk.String("Samuel Herzog"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Clifford Stark"),
                                        Value: sdk.String("quasi"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("accusamus"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Alonzo Bartell"),
                                                },
                                                Name: sdk.String("Kristine Ward"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("sed"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Colin O'Reilly"),
                                                },
                                                Name: sdk.String("Ed McDermott DDS"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Aaron Homenick"),
                                        Value: sdk.String("nam"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quaerat"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Sergio Gerlach PhD"),
                                                },
                                                Name: sdk.String("Miss Elaine Considine"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("recusandae"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Marcella McKenzie Sr."),
                                                },
                                                Name: sdk.String("Michael Thiel"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Verna Hodkiewicz"),
                                            },
                                            Name: sdk.String("Lee Runte"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("esse"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Faith Lubowitz"),
                                            },
                                            Name: sdk.String("Mrs. Betty Mraz"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("quasi"),
                                ImagePullPolicy: sdk.String("veritatis"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "doloremque",
                                            "quas",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(172878),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(17040),
                                        Service: sdk.String("esse"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("quas"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Noah Schimmel"),
                                                Value: sdk.String("beatae"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Vincent Robel"),
                                                Value: sdk.String("perspiciatis"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Marion Mills"),
                                                Value: sdk.String("magnam"),
                                            },
                                        },
                                        Path: sdk.String("doloremque"),
                                        Port: sdk.Int(881095),
                                        Scheme: sdk.String("quod"),
                                    },
                                    InitialDelaySeconds: sdk.Int(121133),
                                    PeriodSeconds: sdk.Int(377430),
                                    SuccessThreshold: sdk.Int(938230),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("est"),
                                        Port: sdk.Int(937687),
                                    },
                                    TimeoutSeconds: sdk.Int(471664),
                                },
                                Name: sdk.String("Olivia Auer"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(180811),
                                        Name: sdk.String("Edwin Stark"),
                                        Protocol: sdk.String("reprehenderit"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "cum",
                                            "culpa",
                                            "culpa",
                                            "a",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(300557),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(260246),
                                        Service: sdk.String("ad"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("quia"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Miss Margie Gerlach"),
                                                Value: sdk.String("tempore"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Jodi Stroman"),
                                                Value: sdk.String("nulla"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Timmy Treutel MD"),
                                                Value: sdk.String("voluptatum"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Darrin Graham"),
                                                Value: sdk.String("ut"),
                                            },
                                        },
                                        Path: sdk.String("enim"),
                                        Port: sdk.Int(470052),
                                        Scheme: sdk.String("ratione"),
                                    },
                                    InitialDelaySeconds: sdk.Int(947704),
                                    PeriodSeconds: sdk.Int(901924),
                                    SuccessThreshold: sdk.Int(801014),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("nulla"),
                                        Port: sdk.Int(271185),
                                    },
                                    TimeoutSeconds: sdk.Int(461639),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "nemo": "nesciunt",
                                    },
                                    Requests: map[string]string{
                                        "eum": "dolor",
                                        "placeat": "quos",
                                        "sed": "eaque",
                                        "natus": "ratione",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(472290),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "deserunt",
                                            "id",
                                            "ex",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(580996),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(759822),
                                        Service: sdk.String("at"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("ad"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Benny Williamson"),
                                                Value: sdk.String("repellendus"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Willie Leffler"),
                                                Value: sdk.String("totam"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Ruby Pfeffer"),
                                                Value: sdk.String("quis"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Nick Haag"),
                                                Value: sdk.String("praesentium"),
                                            },
                                        },
                                        Path: sdk.String("eum"),
                                        Port: sdk.Int(115137),
                                        Scheme: sdk.String("animi"),
                                    },
                                    InitialDelaySeconds: sdk.Int(818739),
                                    PeriodSeconds: sdk.Int(725894),
                                    SuccessThreshold: sdk.Int(353214),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("quaerat"),
                                        Port: sdk.Int(983067),
                                    },
                                    TimeoutSeconds: sdk.Int(614737),
                                },
                                TerminationMessagePath: sdk.String("accusamus"),
                                TerminationMessagePolicy: sdk.String("ipsam"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("odio"),
                                        Name: sdk.String("Stephanie Rosenbaum"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("necessitatibus"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("rem"),
                                        Name: sdk.String("Mr. Christian Harvey"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("voluptatibus"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("nulla"),
                                        Name: sdk.String("Melvin Greenholt IV"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("modi"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("illo"),
                                        Name: sdk.String("Douglas Krajcik"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("eius"),
                                    },
                                },
                                WorkingDir: sdk.String("nostrum"),
                            },
                        },
                        EnableServiceLinks: sdk.Bool(false),
                        ImagePullSecrets: []shared.LocalObjectReference{
                            shared.LocalObjectReference{
                                Name: sdk.String("Allison Mann"),
                            },
                            shared.LocalObjectReference{
                                Name: sdk.String("Willis Connelly"),
                            },
                        },
                        ServiceAccountName: sdk.String("quia"),
                        TimeoutSeconds: sdk.Int(80206),
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(507635),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("consequuntur"),
                                            Mode: sdk.Int(389440),
                                            Path: sdk.String("nemo"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("reprehenderit"),
                                            Mode: sdk.Int(743340),
                                            Path: sdk.String("ipsum"),
                                        },
                                    },
                                    Name: sdk.String("Lucia Schoen"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("cupiditate"),
                                    SizeLimit: sdk.String("hic"),
                                },
                                Name: sdk.String("Nina Kshlerin"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(322907),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("nostrum"),
                                            Mode: sdk.Int(793402),
                                            Path: sdk.String("aliquid"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("quam"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(410916),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("architecto"),
                                            Mode: sdk.Int(686470),
                                            Path: sdk.String("totam"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("velit"),
                                            Mode: sdk.Int(96803),
                                            Path: sdk.String("sed"),
                                        },
                                    },
                                    Name: sdk.String("Jerome Berge"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("libero"),
                                    SizeLimit: sdk.String("ut"),
                                },
                                Name: sdk.String("Randy Breitenberg"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(714933),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("fugit"),
                                            Mode: sdk.Int(226556),
                                            Path: sdk.String("culpa"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("facilis"),
                                            Mode: sdk.Int(792555),
                                            Path: sdk.String("vero"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("impedit"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(607242),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("earum"),
                                            Mode: sdk.Int(685513),
                                            Path: sdk.String("est"),
                                        },
                                    },
                                    Name: sdk.String("Laurence Stoltenberg"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("officiis"),
                                    SizeLimit: sdk.String("esse"),
                                },
                                Name: sdk.String("Marta Howe"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(558731),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("veniam"),
                                            Mode: sdk.Int(149414),
                                            Path: sdk.String("quibusdam"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("reprehenderit"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(455436),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("et"),
                                            Mode: sdk.Int(910712),
                                            Path: sdk.String("voluptate"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("hic"),
                                            Mode: sdk.Int(871969),
                                            Path: sdk.String("perferendis"),
                                        },
                                    },
                                    Name: sdk.String("Miss Charlotte Ankunding"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("repellat"),
                                    SizeLimit: sdk.String("voluptatum"),
                                },
                                Name: sdk.String("Carlos Morissette"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(71741),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("fugiat"),
                                            Mode: sdk.Int(498639),
                                            Path: sdk.String("aut"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("provident"),
                                            Mode: sdk.Int(454890),
                                            Path: sdk.String("tempore"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("ullam"),
                                            Mode: sdk.Int(846427),
                                            Path: sdk.String("mollitia"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("ipsa"),
                                            Mode: sdk.Int(550216),
                                            Path: sdk.String("quo"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("ullam"),
                                },
                            },
                        },
                    },
                },
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("doloribus"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(660799),
                        RevisionName: sdk.String("eum"),
                        Tag: sdk.String("cumque"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("odio"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(539502),
                        RevisionName: sdk.String("similique"),
                        Tag: sdk.String("quia"),
                    },
                },
            },
            Status: &shared.ServiceStatusInput{
                Address: &shared.Addressable{
                    URL: sdk.String("architecto"),
                },
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("accusamus"),
                        Message: sdk.String("illo"),
                        Reason: sdk.String("excepturi"),
                        Severity: sdk.String("harum"),
                        Status: sdk.String("laborum"),
                        Type: sdk.String("a"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("repudiandae"),
                        Message: sdk.String("minus"),
                        Reason: sdk.String("officia"),
                        Severity: sdk.String("laboriosam"),
                        Status: sdk.String("illo"),
                        Type: sdk.String("cupiditate"),
                    },
                },
                LatestCreatedRevisionName: sdk.String("veritatis"),
                LatestReadyRevisionName: sdk.String("aliquam"),
                ObservedGeneration: sdk.Int(568231),
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("dicta"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(300727),
                        RevisionName: sdk.String("doloremque"),
                        Tag: sdk.String("cum"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("suscipit"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(259341),
                        RevisionName: sdk.String("maiores"),
                        Tag: sdk.String("delectus"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("quos"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(661949),
                        RevisionName: sdk.String("officiis"),
                        Tag: sdk.String("ab"),
                    },
                },
                URL: sdk.String("voluptate"),
            },
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellat"),
        DryRun: sdk.String("voluptatem"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quaerat"),
        Parent: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.RunProjectsLocationsServicesCreateSecurity{
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

## RunProjectsLocationsServicesDelete

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
    res, err := s.Projects.RunProjectsLocationsServicesDelete(ctx, operations.RunProjectsLocationsServicesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        APIVersion: sdk.String("blanditiis"),
        Callback: sdk.String("suscipit"),
        DryRun: sdk.String("quas"),
        Fields: sdk.String("quis"),
        Key: sdk.String("enim"),
        Kind: sdk.String("corporis"),
        Name: "Nathaniel Johnston",
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        PropagationPolicy: sdk.String("animi"),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.RunProjectsLocationsServicesDeleteSecurity{
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

## RunProjectsLocationsServicesGet

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
    res, err := s.Projects.RunProjectsLocationsServicesGet(ctx, operations.RunProjectsLocationsServicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("magni"),
        Name: "Dr. Rudolph King",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.RunProjectsLocationsServicesGetSecurity{
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

## RunProjectsLocationsServicesGetIamPolicy

Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.

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
    res, err := s.Projects.RunProjectsLocationsServicesGetIamPolicy(ctx, operations.RunProjectsLocationsServicesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("quidem"),
        OptionsRequestedPolicyVersion: sdk.Int64(609151),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        Resource: "molestias",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.RunProjectsLocationsServicesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesList

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
    res, err := s.Projects.RunProjectsLocationsServicesList(ctx, operations.RunProjectsLocationsServicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Continue: sdk.String("repudiandae"),
        FieldSelector: sdk.String("aspernatur"),
        Fields: sdk.String("quod"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("dolorem"),
        LabelSelector: sdk.String("neque"),
        Limit: sdk.Int64(56371),
        OauthToken: sdk.String("excepturi"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        ResourceVersion: sdk.String("aut"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("amet"),
        Watch: sdk.Bool(false),
    }, operations.RunProjectsLocationsServicesListSecurity{
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

## RunProjectsLocationsServicesReplaceService

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
    res, err := s.Projects.RunProjectsLocationsServicesReplaceService(ctx, operations.RunProjectsLocationsServicesReplaceServiceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ServiceInput: &shared.ServiceInput{
            APIVersion: sdk.String("quibusdam"),
            Kind: sdk.String("sint"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "nihil": "ad",
                    "eligendi": "fuga",
                    "consequatur": "sit",
                    "iure": "earum",
                },
                ClusterName: sdk.String("quis"),
                CreationTimestamp: sdk.String("dolorem"),
                DeletionGracePeriodSeconds: sdk.Int(609164),
                DeletionTimestamp: sdk.String("sed"),
                Finalizers: []string{
                    "et",
                    "illo",
                    "est",
                    "quia",
                },
                GenerateName: sdk.String("veniam"),
                Generation: sdk.Int(665082),
                Labels: map[string]string{
                    "cum": "maiores",
                    "provident": "sunt",
                    "maiores": "excepturi",
                },
                Name: sdk.String("Jamie Collins"),
                Namespace: sdk.String("at"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("laborum"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("provident"),
                        Name: sdk.String("Johnnie Roberts"),
                        UID: sdk.String("explicabo"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("odit"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("illo"),
                        Name: sdk.String("Lori Hammes"),
                        UID: sdk.String("provident"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("possimus"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("iste"),
                        Name: sdk.String("Glenn Lebsack"),
                        UID: sdk.String("iusto"),
                    },
                },
                ResourceVersion: sdk.String("culpa"),
                SelfLink: sdk.String("voluptate"),
                UID: sdk.String("cupiditate"),
            },
            Spec: &shared.ServiceSpecInput{
                Template: &shared.RevisionTemplate{
                    Metadata: &shared.ObjectMeta{
                        Annotations: map[string]string{
                            "assumenda": "nihil",
                            "sed": "optio",
                            "nulla": "magni",
                            "modi": "voluptatum",
                        },
                        ClusterName: sdk.String("dolore"),
                        CreationTimestamp: sdk.String("possimus"),
                        DeletionGracePeriodSeconds: sdk.Int(677151),
                        DeletionTimestamp: sdk.String("eos"),
                        Finalizers: []string{
                            "quam",
                        },
                        GenerateName: sdk.String("eos"),
                        Generation: sdk.Int(609079),
                        Labels: map[string]string{
                            "qui": "similique",
                            "eligendi": "numquam",
                            "inventore": "necessitatibus",
                            "tenetur": "exercitationem",
                        },
                        Name: sdk.String("Lori Harvey Sr."),
                        Namespace: sdk.String("eum"),
                        OwnerReferences: []shared.OwnerReference{
                            shared.OwnerReference{
                                APIVersion: sdk.String("id"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("nobis"),
                                Name: sdk.String("Dr. Lorena Haag"),
                                UID: sdk.String("deserunt"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("aspernatur"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("neque"),
                                Name: sdk.String("Carlos Doyle"),
                                UID: sdk.String("labore"),
                            },
                            shared.OwnerReference{
                                APIVersion: sdk.String("repellat"),
                                BlockOwnerDeletion: sdk.Bool(false),
                                Controller: sdk.Bool(false),
                                Kind: sdk.String("eos"),
                                Name: sdk.String("Edmond O'Conner"),
                                UID: sdk.String("sunt"),
                            },
                        },
                        ResourceVersion: sdk.String("perspiciatis"),
                        SelfLink: sdk.String("quam"),
                        UID: sdk.String("a"),
                    },
                    Spec: &shared.RevisionSpec{
                        ContainerConcurrency: sdk.Int(434345),
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "iste",
                                    "aspernatur",
                                    "aspernatur",
                                    "et",
                                },
                                Command: []string{
                                    "et",
                                    "delectus",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Arlene Boyle V"),
                                        Value: sdk.String("error"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("deleniti"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Robin Turcotte"),
                                                },
                                                Name: sdk.String("Pauline Ferry"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("nemo"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Elaine Fadel"),
                                                },
                                                Name: sdk.String("Randy Collier"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Ruth Goodwin"),
                                        Value: sdk.String("expedita"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("impedit"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ms. Lorraine Gusikowski"),
                                                },
                                                Name: sdk.String("Lawrence Yundt"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("accusamus"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Vernon Swaniawski"),
                                                },
                                                Name: sdk.String("Leonard Conn"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Ms. Ismael Hodkiewicz"),
                                        Value: sdk.String("nesciunt"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("harum"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Miss Meredith Hand"),
                                                },
                                                Name: sdk.String("Mr. Yvette Yost"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("deserunt"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ms. Sidney Kling"),
                                                },
                                                Name: sdk.String("Rosemary Abshire"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Emilio Reilly"),
                                        Value: sdk.String("modi"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("vitae"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Toby Hilll"),
                                                },
                                                Name: sdk.String("Aaron O'Conner"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("doloribus"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Warren Rutherford"),
                                                },
                                                Name: sdk.String("Ginger Braun"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Van Casper"),
                                            },
                                            Name: sdk.String("Kurt Lindgren"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("provident"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Kim Rutherford"),
                                            },
                                            Name: sdk.String("Dr. Hugh Keebler"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("impedit"),
                                ImagePullPolicy: sdk.String("illum"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "praesentium",
                                            "perferendis",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(741907),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(657520),
                                        Service: sdk.String("molestiae"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("nesciunt"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Kimberly Waters"),
                                                Value: sdk.String("necessitatibus"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Gail Gutkowski"),
                                                Value: sdk.String("excepturi"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Erma Streich"),
                                                Value: sdk.String("illo"),
                                            },
                                        },
                                        Path: sdk.String("illum"),
                                        Port: sdk.Int(859740),
                                        Scheme: sdk.String("amet"),
                                    },
                                    InitialDelaySeconds: sdk.Int(714187),
                                    PeriodSeconds: sdk.Int(730456),
                                    SuccessThreshold: sdk.Int(771381),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("repudiandae"),
                                        Port: sdk.Int(170819),
                                    },
                                    TimeoutSeconds: sdk.Int(281416),
                                },
                                Name: sdk.String("Opal Klocko"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(918293),
                                        Name: sdk.String("Mr. Emmett Heidenreich"),
                                        Protocol: sdk.String("laboriosam"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(840558),
                                        Name: sdk.String("Marie Rolfson"),
                                        Protocol: sdk.String("facilis"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "aut",
                                            "itaque",
                                            "rerum",
                                            "molestiae",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(308620),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(719317),
                                        Service: sdk.String("blanditiis"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("quaerat"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Lindsay Hickle"),
                                                Value: sdk.String("ut"),
                                            },
                                        },
                                        Path: sdk.String("tempora"),
                                        Port: sdk.Int(696058),
                                        Scheme: sdk.String("nulla"),
                                    },
                                    InitialDelaySeconds: sdk.Int(198810),
                                    PeriodSeconds: sdk.Int(790773),
                                    SuccessThreshold: sdk.Int(288790),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("sequi"),
                                        Port: sdk.Int(86885),
                                    },
                                    TimeoutSeconds: sdk.Int(330837),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "assumenda": "adipisci",
                                        "velit": "accusamus",
                                        "veniam": "provident",
                                    },
                                    Requests: map[string]string{
                                        "dolor": "quod",
                                        "consequatur": "accusantium",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(116742),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "amet",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(578452),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(552512),
                                        Service: sdk.String("aliquid"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("sequi"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Edwin Bogisich"),
                                                Value: sdk.String("optio"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Rebecca Schmitt DVM"),
                                                Value: sdk.String("dicta"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Lowell Rice DDS"),
                                                Value: sdk.String("sint"),
                                            },
                                        },
                                        Path: sdk.String("id"),
                                        Port: sdk.Int(284233),
                                        Scheme: sdk.String("et"),
                                    },
                                    InitialDelaySeconds: sdk.Int(970213),
                                    PeriodSeconds: sdk.Int(971050),
                                    SuccessThreshold: sdk.Int(717486),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("itaque"),
                                        Port: sdk.Int(610766),
                                    },
                                    TimeoutSeconds: sdk.Int(801848),
                                },
                                TerminationMessagePath: sdk.String("quidem"),
                                TerminationMessagePolicy: sdk.String("temporibus"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("natus"),
                                        Name: sdk.String("Casey Weber"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("debitis"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("doloremque"),
                                        Name: sdk.String("Vicki Sauer"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("mollitia"),
                                    },
                                },
                                WorkingDir: sdk.String("quidem"),
                            },
                            shared.Container{
                                Args: []string{
                                    "eum",
                                    "beatae",
                                    "suscipit",
                                    "eveniet",
                                },
                                Command: []string{
                                    "ipsam",
                                    "porro",
                                    "molestiae",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Pauline Carroll"),
                                        Value: sdk.String("dolore"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("soluta"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Daniel Zemlak"),
                                                },
                                                Name: sdk.String("Miss Violet Stiedemann"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("magni"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Rodolfo Champlin"),
                                                },
                                                Name: sdk.String("Mr. Louis Waelchi"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Carrie Rippin"),
                                            },
                                            Name: sdk.String("Angel Cremin"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("id"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Bonnie Zboncak IV"),
                                            },
                                            Name: sdk.String("Velma Stark"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Kristopher Hagenes"),
                                            },
                                            Name: sdk.String("Dominic Kunde"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("esse"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Josh Mante"),
                                            },
                                            Name: sdk.String("Kendra Mante"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Jo Greenholt V"),
                                            },
                                            Name: sdk.String("Roderick Williamson"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("vero"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Agnes Boyle DDS"),
                                            },
                                            Name: sdk.String("Troy Stroman"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("aliquid"),
                                ImagePullPolicy: sdk.String("vero"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "dicta",
                                            "sit",
                                            "adipisci",
                                            "inventore",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(901607),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(434936),
                                        Service: sdk.String("praesentium"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("perspiciatis"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Mr. Brian Schimmel Sr."),
                                                Value: sdk.String("saepe"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Nicole Schinner"),
                                                Value: sdk.String("exercitationem"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Forrest Abshire"),
                                                Value: sdk.String("modi"),
                                            },
                                        },
                                        Path: sdk.String("similique"),
                                        Port: sdk.Int(93660),
                                        Scheme: sdk.String("laudantium"),
                                    },
                                    InitialDelaySeconds: sdk.Int(280706),
                                    PeriodSeconds: sdk.Int(821487),
                                    SuccessThreshold: sdk.Int(471480),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("voluptas"),
                                        Port: sdk.Int(817509),
                                    },
                                    TimeoutSeconds: sdk.Int(607937),
                                },
                                Name: sdk.String("Jean Witting"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(24945),
                                        Name: sdk.String("Leslie Hamill I"),
                                        Protocol: sdk.String("in"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "distinctio",
                                            "blanditiis",
                                            "saepe",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(25737),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(762540),
                                        Service: sdk.String("impedit"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("corrupti"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Carolyn Macejkovic"),
                                                Value: sdk.String("labore"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Caleb Altenwerth"),
                                                Value: sdk.String("hic"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Naomi Schneider"),
                                                Value: sdk.String("facere"),
                                            },
                                        },
                                        Path: sdk.String("pariatur"),
                                        Port: sdk.Int(697401),
                                        Scheme: sdk.String("labore"),
                                    },
                                    InitialDelaySeconds: sdk.Int(413962),
                                    PeriodSeconds: sdk.Int(649511),
                                    SuccessThreshold: sdk.Int(629618),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("quasi"),
                                        Port: sdk.Int(778585),
                                    },
                                    TimeoutSeconds: sdk.Int(974429),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "ea": "facere",
                                        "corrupti": "magni",
                                        "blanditiis": "assumenda",
                                        "culpa": "ipsa",
                                    },
                                    Requests: map[string]string{
                                        "nesciunt": "et",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(622927),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "vitae",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(184065),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(603348),
                                        Service: sdk.String("ex"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("quaerat"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Bertha Halvorson PhD"),
                                                Value: sdk.String("blanditiis"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Lucia Champlin II"),
                                                Value: sdk.String("aspernatur"),
                                            },
                                        },
                                        Path: sdk.String("sapiente"),
                                        Port: sdk.Int(363703),
                                        Scheme: sdk.String("laboriosam"),
                                    },
                                    InitialDelaySeconds: sdk.Int(609992),
                                    PeriodSeconds: sdk.Int(697518),
                                    SuccessThreshold: sdk.Int(479585),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("culpa"),
                                        Port: sdk.Int(972398),
                                    },
                                    TimeoutSeconds: sdk.Int(952911),
                                },
                                TerminationMessagePath: sdk.String("consequatur"),
                                TerminationMessagePolicy: sdk.String("voluptates"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("fugit"),
                                        Name: sdk.String("Christine Keebler"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("saepe"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("ipsa"),
                                        Name: sdk.String("Carolyn Pollich III"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("dolor"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("officiis"),
                                        Name: sdk.String("Lillie Mills"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("libero"),
                                    },
                                },
                                WorkingDir: sdk.String("ipsa"),
                            },
                            shared.Container{
                                Args: []string{
                                    "aliquam",
                                    "vero",
                                    "dolorum",
                                },
                                Command: []string{
                                    "occaecati",
                                    "consequuntur",
                                    "veniam",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Gary Gorczany"),
                                        Value: sdk.String("ipsa"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quas"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Marlene Pacocha"),
                                                },
                                                Name: sdk.String("Kari Labadie"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("cupiditate"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Chelsea Reynolds"),
                                                },
                                                Name: sdk.String("Edmund Witting"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Rene Rogahn"),
                                        Value: sdk.String("consectetur"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("corporis"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Nicole Vandervort"),
                                                },
                                                Name: sdk.String("Van Halvorson"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("dolores"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ms. Mario Sawayn DDS"),
                                                },
                                                Name: sdk.String("Mr. Eileen Osinski"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Stacey Fritsch"),
                                            },
                                            Name: sdk.String("Miss Sam Shanahan"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("temporibus"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Lorena Stoltenberg"),
                                            },
                                            Name: sdk.String("Robin Smith"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Leslie Heaney II"),
                                            },
                                            Name: sdk.String("Kristina Parker"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("deleniti"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Michelle Sporer"),
                                            },
                                            Name: sdk.String("Genevieve Brakus"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("quod"),
                                ImagePullPolicy: sdk.String("magni"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "fugit",
                                            "quisquam",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(487430),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(692662),
                                        Service: sdk.String("iure"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("aliquid"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Miss Johanna Emard"),
                                                Value: sdk.String("non"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Jerald Heidenreich"),
                                                Value: sdk.String("molestiae"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Velma Legros DVM"),
                                                Value: sdk.String("magnam"),
                                            },
                                        },
                                        Path: sdk.String("consequuntur"),
                                        Port: sdk.Int(667449),
                                        Scheme: sdk.String("tempora"),
                                    },
                                    InitialDelaySeconds: sdk.Int(749863),
                                    PeriodSeconds: sdk.Int(709591),
                                    SuccessThreshold: sdk.Int(267839),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("adipisci"),
                                        Port: sdk.Int(540192),
                                    },
                                    TimeoutSeconds: sdk.Int(871298),
                                },
                                Name: sdk.String("Greg Renner"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(326894),
                                        Name: sdk.String("Samuel Shanahan"),
                                        Protocol: sdk.String("ad"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "sequi",
                                            "eligendi",
                                            "consequuntur",
                                            "quae",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(329836),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(572633),
                                        Service: sdk.String("minus"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("excepturi"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Shawna Harvey"),
                                                Value: sdk.String("officiis"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Kellie Cormier"),
                                                Value: sdk.String("odio"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Dr. Beatrice Rogahn"),
                                                Value: sdk.String("consequuntur"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Loren Schuster"),
                                                Value: sdk.String("debitis"),
                                            },
                                        },
                                        Path: sdk.String("architecto"),
                                        Port: sdk.Int(968792),
                                        Scheme: sdk.String("consequatur"),
                                    },
                                    InitialDelaySeconds: sdk.Int(124460),
                                    PeriodSeconds: sdk.Int(139967),
                                    SuccessThreshold: sdk.Int(80673),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("laboriosam"),
                                        Port: sdk.Int(799730),
                                    },
                                    TimeoutSeconds: sdk.Int(921086),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "aspernatur": "sequi",
                                    },
                                    Requests: map[string]string{
                                        "accusamus": "deleniti",
                                        "earum": "consequuntur",
                                        "enim": "minus",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(842168),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "nulla",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(78734),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(605391),
                                        Service: sdk.String("quibusdam"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("excepturi"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Domingo Gutkowski"),
                                                Value: sdk.String("necessitatibus"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Becky Daugherty"),
                                                Value: sdk.String("impedit"),
                                            },
                                        },
                                        Path: sdk.String("facilis"),
                                        Port: sdk.Int(839850),
                                        Scheme: sdk.String("error"),
                                    },
                                    InitialDelaySeconds: sdk.Int(312608),
                                    PeriodSeconds: sdk.Int(964883),
                                    SuccessThreshold: sdk.Int(476891),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("deserunt"),
                                        Port: sdk.Int(675677),
                                    },
                                    TimeoutSeconds: sdk.Int(141314),
                                },
                                TerminationMessagePath: sdk.String("rerum"),
                                TerminationMessagePolicy: sdk.String("consequuntur"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("et"),
                                        Name: sdk.String("Diana Hudson"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("temporibus"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("et"),
                                        Name: sdk.String("Charlie Jacobs"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("repellat"),
                                    },
                                },
                                WorkingDir: sdk.String("placeat"),
                            },
                            shared.Container{
                                Args: []string{
                                    "quaerat",
                                    "veniam",
                                    "perspiciatis",
                                    "commodi",
                                },
                                Command: []string{
                                    "dicta",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Phillip Mann"),
                                        Value: sdk.String("aliquid"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("voluptate"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Edith Frami"),
                                                },
                                                Name: sdk.String("Hazel Abbott"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("tempore"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Rudy Harber"),
                                                },
                                                Name: sdk.String("Meghan Mann V"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Stacy Herman"),
                                        Value: sdk.String("totam"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("perspiciatis"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Percy Swaniawski"),
                                                },
                                                Name: sdk.String("Harvey Wiegand"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("dolor"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Dustin Mills"),
                                                },
                                                Name: sdk.String("Vanessa Rodriguez"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Ms. Jim Macejkovic"),
                                            },
                                            Name: sdk.String("Luz Morar"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("tempora"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Elmer Wolf"),
                                            },
                                            Name: sdk.String("Ruth Kemmer"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Ivan Christiansen"),
                                            },
                                            Name: sdk.String("Lillian Ruecker Jr."),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("accusantium"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Stacey Reynolds"),
                                            },
                                            Name: sdk.String("Dr. Ramona D'Amore"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Betty Hirthe"),
                                            },
                                            Name: sdk.String("Monica Miller"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("aliquid"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Wilson Ledner"),
                                            },
                                            Name: sdk.String("Kristie Cummerata"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("veritatis"),
                                ImagePullPolicy: sdk.String("provident"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quos",
                                            "totam",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(813544),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(262258),
                                        Service: sdk.String("doloremque"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("vero"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Faith Doyle"),
                                                Value: sdk.String("nobis"),
                                            },
                                        },
                                        Path: sdk.String("est"),
                                        Port: sdk.Int(155700),
                                        Scheme: sdk.String("natus"),
                                    },
                                    InitialDelaySeconds: sdk.Int(476604),
                                    PeriodSeconds: sdk.Int(706753),
                                    SuccessThreshold: sdk.Int(937294),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("ipsum"),
                                        Port: sdk.Int(933600),
                                    },
                                    TimeoutSeconds: sdk.Int(586366),
                                },
                                Name: sdk.String("Maryann Rolfson PhD"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(554417),
                                        Name: sdk.String("Mattie Wiza"),
                                        Protocol: sdk.String("ratione"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(293187),
                                        Name: sdk.String("Jill Russel"),
                                        Protocol: sdk.String("nesciunt"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(113432),
                                        Name: sdk.String("Francis McLaughlin"),
                                        Protocol: sdk.String("modi"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(987085),
                                        Name: sdk.String("Phyllis Kshlerin"),
                                        Protocol: sdk.String("aperiam"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatem",
                                            "soluta",
                                            "hic",
                                            "beatae",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(962397),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(535151),
                                        Service: sdk.String("fugit"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("inventore"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Kelly Legros V"),
                                                Value: sdk.String("eligendi"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Homer Kuhic"),
                                                Value: sdk.String("repudiandae"),
                                            },
                                        },
                                        Path: sdk.String("tempore"),
                                        Port: sdk.Int(452605),
                                        Scheme: sdk.String("cum"),
                                    },
                                    InitialDelaySeconds: sdk.Int(461103),
                                    PeriodSeconds: sdk.Int(1737),
                                    SuccessThreshold: sdk.Int(162696),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("architecto"),
                                        Port: sdk.Int(664905),
                                    },
                                    TimeoutSeconds: sdk.Int(363660),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "quae": "quaerat",
                                    },
                                    Requests: map[string]string{
                                        "rerum": "laboriosam",
                                        "aliquam": "repudiandae",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(602822),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatibus",
                                            "facilis",
                                            "doloremque",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(887199),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(394208),
                                        Service: sdk.String("reprehenderit"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("necessitatibus"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Mario Weissnat"),
                                                Value: sdk.String("saepe"),
                                            },
                                        },
                                        Path: sdk.String("assumenda"),
                                        Port: sdk.Int(351509),
                                        Scheme: sdk.String("exercitationem"),
                                    },
                                    InitialDelaySeconds: sdk.Int(293991),
                                    PeriodSeconds: sdk.Int(26721),
                                    SuccessThreshold: sdk.Int(924506),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("a"),
                                        Port: sdk.Int(351074),
                                    },
                                    TimeoutSeconds: sdk.Int(204080),
                                },
                                TerminationMessagePath: sdk.String("mollitia"),
                                TerminationMessagePolicy: sdk.String("velit"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("est"),
                                        Name: sdk.String("Olivia Kuvalis"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("perspiciatis"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("natus"),
                                        Name: sdk.String("Dawn Casper"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("cumque"),
                                    },
                                },
                                WorkingDir: sdk.String("aperiam"),
                            },
                        },
                        EnableServiceLinks: sdk.Bool(false),
                        ImagePullSecrets: []shared.LocalObjectReference{
                            shared.LocalObjectReference{
                                Name: sdk.String("Willard Hauck"),
                            },
                            shared.LocalObjectReference{
                                Name: sdk.String("Antonia Wintheiser"),
                            },
                        },
                        ServiceAccountName: sdk.String("perferendis"),
                        TimeoutSeconds: sdk.Int(979665),
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(189574),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("odio"),
                                            Mode: sdk.Int(252183),
                                            Path: sdk.String("magni"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("sint"),
                                            Mode: sdk.Int(10180),
                                            Path: sdk.String("illum"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("adipisci"),
                                            Mode: sdk.Int(210651),
                                            Path: sdk.String("ex"),
                                        },
                                    },
                                    Name: sdk.String("Natalie Bogisich"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("culpa"),
                                    SizeLimit: sdk.String("architecto"),
                                },
                                Name: sdk.String("Olive Yundt"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(273252),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("ab"),
                                            Mode: sdk.Int(691311),
                                            Path: sdk.String("facere"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("ducimus"),
                                            Mode: sdk.Int(392289),
                                            Path: sdk.String("accusamus"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("officiis"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(896512),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("nemo"),
                                            Mode: sdk.Int(84154),
                                            Path: sdk.String("molestias"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("impedit"),
                                            Mode: sdk.Int(265773),
                                            Path: sdk.String("possimus"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("similique"),
                                            Mode: sdk.Int(100185),
                                            Path: sdk.String("asperiores"),
                                        },
                                    },
                                    Name: sdk.String("Marcos Ernser"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("quasi"),
                                    SizeLimit: sdk.String("odit"),
                                },
                                Name: sdk.String("Anthony Hudson"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(932883),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("nam"),
                                            Mode: sdk.Int(489923),
                                            Path: sdk.String("consequuntur"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("sapiente"),
                                            Mode: sdk.Int(912),
                                            Path: sdk.String("doloribus"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("nemo"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(296127),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("exercitationem"),
                                            Mode: sdk.Int(416963),
                                            Path: sdk.String("laudantium"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("est"),
                                            Mode: sdk.Int(8187),
                                            Path: sdk.String("incidunt"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("dolores"),
                                            Mode: sdk.Int(289952),
                                            Path: sdk.String("earum"),
                                        },
                                    },
                                    Name: sdk.String("Dr. Helen Nitzsche"),
                                    Optional: sdk.Bool(false),
                                },
                                EmptyDir: &shared.EmptyDirVolumeSource{
                                    Medium: sdk.String("voluptates"),
                                    SizeLimit: sdk.String("tempore"),
                                },
                                Name: sdk.String("Don Dicki"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(305473),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("at"),
                                            Mode: sdk.Int(57291),
                                            Path: sdk.String("amet"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("aut"),
                                            Mode: sdk.Int(562402),
                                            Path: sdk.String("quaerat"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("repellat"),
                                },
                            },
                        },
                    },
                },
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("libero"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(650937),
                        RevisionName: sdk.String("quis"),
                        Tag: sdk.String("cumque"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("cumque"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(875236),
                        RevisionName: sdk.String("a"),
                        Tag: sdk.String("tenetur"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("ipsam"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(798122),
                        RevisionName: sdk.String("facilis"),
                        Tag: sdk.String("doloremque"),
                    },
                },
            },
            Status: &shared.ServiceStatusInput{
                Address: &shared.Addressable{
                    URL: sdk.String("illo"),
                },
                Conditions: []shared.GoogleCloudRunV1Condition{
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("debitis"),
                        Message: sdk.String("enim"),
                        Reason: sdk.String("quasi"),
                        Severity: sdk.String("accusamus"),
                        Status: sdk.String("ipsam"),
                        Type: sdk.String("aspernatur"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("atque"),
                        Message: sdk.String("animi"),
                        Reason: sdk.String("eius"),
                        Severity: sdk.String("ad"),
                        Status: sdk.String("mollitia"),
                        Type: sdk.String("minus"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("quos"),
                        Message: sdk.String("explicabo"),
                        Reason: sdk.String("distinctio"),
                        Severity: sdk.String("praesentium"),
                        Status: sdk.String("ullam"),
                        Type: sdk.String("maiores"),
                    },
                    shared.GoogleCloudRunV1Condition{
                        LastTransitionTime: sdk.String("corrupti"),
                        Message: sdk.String("libero"),
                        Reason: sdk.String("placeat"),
                        Severity: sdk.String("explicabo"),
                        Status: sdk.String("placeat"),
                        Type: sdk.String("animi"),
                    },
                },
                LatestCreatedRevisionName: sdk.String("expedita"),
                LatestReadyRevisionName: sdk.String("laborum"),
                ObservedGeneration: sdk.Int(541936),
                Traffic: []shared.TrafficTargetInput{
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("laborum"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(296732),
                        RevisionName: sdk.String("veritatis"),
                        Tag: sdk.String("fugit"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("nihil"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(846715),
                        RevisionName: sdk.String("nulla"),
                        Tag: sdk.String("nemo"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("omnis"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(439275),
                        RevisionName: sdk.String("hic"),
                        Tag: sdk.String("sapiente"),
                    },
                    shared.TrafficTargetInput{
                        ConfigurationName: sdk.String("eius"),
                        LatestRevision: sdk.Bool(false),
                        Percent: sdk.Int(458491),
                        RevisionName: sdk.String("quasi"),
                        Tag: sdk.String("inventore"),
                    },
                },
                URL: sdk.String("similique"),
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        DryRun: sdk.String("porro"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("numquam"),
        Name: "Alberto Hyatt",
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.RunProjectsLocationsServicesReplaceServiceSecurity{
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

## RunProjectsLocationsServicesSetIamPolicy

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

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
    res, err := s.Projects.RunProjectsLocationsServicesSetIamPolicy(ctx, operations.RunProjectsLocationsServicesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "incidunt",
                                    "deleniti",
                                    "aliquam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quibusdam",
                                    "iure",
                                    "mollitia",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("hic"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aliquam",
                                    "architecto",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("qui"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ratione"),
                            Expression: sdk.String("soluta"),
                            Location: sdk.String("quos"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "sit",
                            "perspiciatis",
                            "quaerat",
                        },
                        Role: sdk.String("nesciunt"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("molestiae"),
                            Expression: sdk.String("adipisci"),
                            Location: sdk.String("eveniet"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "sit",
                            "labore",
                        },
                        Role: sdk.String("ullam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("excepturi"),
                            Expression: sdk.String("soluta"),
                            Location: sdk.String("voluptates"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "est",
                            "fugiat",
                            "perferendis",
                        },
                        Role: sdk.String("qui"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("tenetur"),
                            Expression: sdk.String("sunt"),
                            Location: sdk.String("quis"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "quidem",
                            "quod",
                        },
                        Role: sdk.String("a"),
                    },
                },
                Etag: sdk.String("et"),
                Version: sdk.Int(371534),
            },
            UpdateMask: sdk.String("eos"),
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        Resource: "corporis",
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.RunProjectsLocationsServicesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

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
    res, err := s.Projects.RunProjectsLocationsServicesTestIamPermissions(ctx, operations.RunProjectsLocationsServicesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "nulla",
                "consequatur",
                "qui",
                "in",
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        Resource: "fuga",
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.RunProjectsLocationsServicesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
