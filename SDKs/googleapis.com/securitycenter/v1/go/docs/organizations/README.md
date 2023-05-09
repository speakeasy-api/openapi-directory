# Organizations

### Available Operations

* [SecuritycenterOrganizationsAssetsRunDiscovery](#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [SecuritycenterOrganizationsOperationsCancel](#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [SecuritycenterOrganizationsSourcesCreate](#securitycenterorganizationssourcescreate) - Creates a source.
* [SecuritycenterOrganizationsSourcesFindingsCreate](#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [SecuritycenterOrganizationsSourcesGetIamPolicy](#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [SecuritycenterOrganizationsSourcesSetIamPolicy](#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [SecuritycenterOrganizationsSourcesTestIamPermissions](#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

## SecuritycenterOrganizationsAssetsRunDiscovery

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

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
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsRunDiscovery(ctx, operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "minus": "placeat",
            "voluptatum": "iusto",
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Organizations.SecuritycenterOrganizationsOperationsCancel(ctx, operations.SecuritycenterOrganizationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        Name: "Javier Schmidt",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.SecuritycenterOrganizationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesCreate

Creates a source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesCreate(ctx, operations.SecuritycenterOrganizationsSourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Source: &shared.Source{
            CanonicalName: sdk.String("officia"),
            Description: sdk.String("occaecati"),
            DisplayName: sdk.String("fugit"),
            Name: sdk.String("Irvin Rosenbaum III"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("esse"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.SecuritycenterOrganizationsSourcesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Source != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesFindingsCreate

Creates a finding. The corresponding source must exist for finding creation to succeed.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesFindingsCreate(ctx, operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FindingInput: &shared.FindingInput{
            Access: &shared.Access{
                CallerIP: sdk.String("natus"),
                CallerIPGeo: &shared.Geolocation{
                    RegionCode: sdk.String("sed"),
                },
                MethodName: sdk.String("iste"),
                PrincipalEmail: sdk.String("dolor"),
                PrincipalSubject: sdk.String("natus"),
                ServiceAccountDelegationInfo: []shared.ServiceAccountDelegationInfo{
                    shared.ServiceAccountDelegationInfo{
                        PrincipalEmail: sdk.String("hic"),
                        PrincipalSubject: sdk.String("saepe"),
                    },
                    shared.ServiceAccountDelegationInfo{
                        PrincipalEmail: sdk.String("fuga"),
                        PrincipalSubject: sdk.String("in"),
                    },
                },
                ServiceAccountKeyName: sdk.String("corporis"),
                ServiceName: sdk.String("iste"),
                UserAgentFamily: sdk.String("iure"),
                UserName: sdk.String("Sterling6"),
            },
            CanonicalName: sdk.String("reiciendis"),
            Category: sdk.String("est"),
            CloudDlpDataProfile: &shared.CloudDlpDataProfile{
                DataProfile: sdk.String("mollitia"),
            },
            CloudDlpInspection: &shared.CloudDlpInspection{
                FullScan: sdk.Bool(false),
                InfoType: sdk.String("laborum"),
                InfoTypeCount: sdk.String("dolores"),
                InspectJob: sdk.String("dolorem"),
            },
            Compliances: []shared.Compliance{
                shared.Compliance{
                    Ids: []string{
                        "nobis",
                    },
                    Standard: sdk.String("enim"),
                    Version: sdk.String("omnis"),
                },
                shared.Compliance{
                    Ids: []string{
                        "minima",
                        "excepturi",
                    },
                    Standard: sdk.String("accusantium"),
                    Version: sdk.String("iure"),
                },
            },
            Connections: []shared.Connection{
                shared.Connection{
                    DestinationIP: sdk.String("doloribus"),
                    DestinationPort: sdk.Int(958950),
                    Protocol: shared.ConnectionProtocolEnumProtocolUnspecified.ToPointer(),
                    SourceIP: sdk.String("mollitia"),
                    SourcePort: sdk.Int(208876),
                },
                shared.Connection{
                    DestinationIP: sdk.String("culpa"),
                    DestinationPort: sdk.Int(161309),
                    Protocol: shared.ConnectionProtocolEnumEsp.ToPointer(),
                    SourceIP: sdk.String("mollitia"),
                    SourcePort: sdk.Int(581850),
                },
                shared.Connection{
                    DestinationIP: sdk.String("numquam"),
                    DestinationPort: sdk.Int(414369),
                    Protocol: shared.ConnectionProtocolEnumTCP.ToPointer(),
                    SourceIP: sdk.String("molestiae"),
                    SourcePort: sdk.Int(244425),
                },
            },
            Containers: []shared.Container{
                shared.Container{
                    ImageID: sdk.String("quia"),
                    Labels: []shared.Label{
                        shared.Label{
                            Name: sdk.String("Kayla O'Kon"),
                            Value: sdk.String("quo"),
                        },
                        shared.Label{
                            Name: sdk.String("Mandy Hills"),
                            Value: sdk.String("aut"),
                        },
                    },
                    Name: sdk.String("Sabrina Smitham DVM"),
                    URI: sdk.String("https://twin-intent.name"),
                },
                shared.Container{
                    ImageID: sdk.String("voluptatibus"),
                    Labels: []shared.Label{
                        shared.Label{
                            Name: sdk.String("Mr. Jared Ritchie"),
                            Value: sdk.String("ut"),
                        },
                    },
                    Name: sdk.String("Willie Hessel"),
                    URI: sdk.String("http://reliable-evaluation.org"),
                },
                shared.Container{
                    ImageID: sdk.String("commodi"),
                    Labels: []shared.Label{
                        shared.Label{
                            Name: sdk.String("Edna Pouros"),
                            Value: sdk.String("pariatur"),
                        },
                        shared.Label{
                            Name: sdk.String("Irma Ledner DVM"),
                            Value: sdk.String("sint"),
                        },
                        shared.Label{
                            Name: sdk.String("Patti Gottlieb MD"),
                            Value: sdk.String("quibusdam"),
                        },
                        shared.Label{
                            Name: sdk.String("Joanna Rau"),
                            Value: sdk.String("modi"),
                        },
                    },
                    Name: sdk.String("Beth McGlynn Sr."),
                    URI: sdk.String("https://hard-accordion.com"),
                },
            },
            CreateTime: sdk.String("dolorum"),
            Database: &shared.Database{
                DisplayName: sdk.String("excepturi"),
                Grantees: []string{
                    "facilis",
                    "tempore",
                },
                Name: sdk.String("Lucia Kemmer"),
                Query: sdk.String("sint"),
                UserName: sdk.String("Grace_Medhurst63"),
            },
            Description: sdk.String("dolor"),
            EventTime: sdk.String("debitis"),
            Exfiltration: &shared.Exfiltration{
                Sources: []shared.ExfilResource{
                    shared.ExfilResource{
                        Components: []string{
                            "in",
                            "in",
                            "illum",
                        },
                        Name: sdk.String("Jean Buckridge"),
                    },
                    shared.ExfilResource{
                        Components: []string{
                            "ea",
                            "aliquid",
                            "laborum",
                            "accusamus",
                        },
                        Name: sdk.String("Toni Haley"),
                    },
                    shared.ExfilResource{
                        Components: []string{
                            "provident",
                            "nam",
                            "id",
                        },
                        Name: sdk.String("Jaime Will"),
                    },
                    shared.ExfilResource{
                        Components: []string{
                            "vel",
                            "natus",
                        },
                        Name: sdk.String("Fernando Aufderhar"),
                    },
                },
                Targets: []shared.ExfilResource{
                    shared.ExfilResource{
                        Components: []string{
                            "labore",
                            "labore",
                            "suscipit",
                        },
                        Name: sdk.String("Robin Keebler"),
                    },
                    shared.ExfilResource{
                        Components: []string{
                            "magnam",
                        },
                        Name: sdk.String("Miriam Hermann"),
                    },
                    shared.ExfilResource{
                        Components: []string{
                            "accusantium",
                            "mollitia",
                            "reiciendis",
                        },
                        Name: sdk.String("Tommy Kemmer"),
                    },
                },
            },
            ExternalURI: sdk.String("odit"),
            Files: []shared.File{
                shared.File{
                    Contents: sdk.String("quasi"),
                    HashedSize: sdk.String("iure"),
                    PartiallyHashed: sdk.Bool(false),
                    Path: sdk.String("doloribus"),
                    Sha256: sdk.String("debitis"),
                    Size: sdk.String("eius"),
                },
                shared.File{
                    Contents: sdk.String("maxime"),
                    HashedSize: sdk.String("deleniti"),
                    PartiallyHashed: sdk.Bool(false),
                    Path: sdk.String("facilis"),
                    Sha256: sdk.String("in"),
                    Size: sdk.String("architecto"),
                },
            },
            FindingClass: shared.FindingFindingClassEnumFindingClassUnspecified.ToPointer(),
            IamBindings: []shared.IamBinding{
                shared.IamBinding{
                    Action: shared.IamBindingActionEnumAdd.ToPointer(),
                    Member: sdk.String("expedita"),
                    Role: sdk.String("nihil"),
                },
                shared.IamBinding{
                    Action: shared.IamBindingActionEnumRemove.ToPointer(),
                    Member: sdk.String("quibusdam"),
                    Role: sdk.String("sed"),
                },
                shared.IamBinding{
                    Action: shared.IamBindingActionEnumRemove.ToPointer(),
                    Member: sdk.String("pariatur"),
                    Role: sdk.String("accusantium"),
                },
                shared.IamBinding{
                    Action: shared.IamBindingActionEnumActionUnspecified.ToPointer(),
                    Member: sdk.String("praesentium"),
                    Role: sdk.String("natus"),
                },
            },
            Indicator: &shared.Indicator{
                Domains: []string{
                    "sunt",
                },
                IPAddresses: []string{
                    "illum",
                    "pariatur",
                    "maxime",
                    "ea",
                },
                Signatures: []shared.ProcessSignature{
                    shared.ProcessSignature{
                        MemoryHashSignature: &shared.MemoryHashSignature{
                            BinaryFamily: sdk.String("odit"),
                            Detections: []shared.Detection{
                                shared.Detection{
                                    Binary: sdk.String("accusantium"),
                                    PercentPagesMatched: sdk.Float64(691.67),
                                },
                                shared.Detection{
                                    Binary: sdk.String("maiores"),
                                    PercentPagesMatched: sdk.Float64(6974.29),
                                },
                            },
                        },
                        YaraRuleSignature: &shared.YaraRuleSignature{
                            YaraRule: sdk.String("ipsam"),
                        },
                    },
                    shared.ProcessSignature{
                        MemoryHashSignature: &shared.MemoryHashSignature{
                            BinaryFamily: sdk.String("voluptate"),
                            Detections: []shared.Detection{
                                shared.Detection{
                                    Binary: sdk.String("nam"),
                                    PercentPagesMatched: sdk.Float64(505.88),
                                },
                                shared.Detection{
                                    Binary: sdk.String("pariatur"),
                                    PercentPagesMatched: sdk.Float64(3654.96),
                                },
                            },
                        },
                        YaraRuleSignature: &shared.YaraRuleSignature{
                            YaraRule: sdk.String("voluptatibus"),
                        },
                    },
                    shared.ProcessSignature{
                        MemoryHashSignature: &shared.MemoryHashSignature{
                            BinaryFamily: sdk.String("perferendis"),
                            Detections: []shared.Detection{
                                shared.Detection{
                                    Binary: sdk.String("amet"),
                                    PercentPagesMatched: sdk.Float64(117.14),
                                },
                                shared.Detection{
                                    Binary: sdk.String("cumque"),
                                    PercentPagesMatched: sdk.Float64(3599.78),
                                },
                                shared.Detection{
                                    Binary: sdk.String("hic"),
                                    PercentPagesMatched: sdk.Float64(7299.91),
                                },
                                shared.Detection{
                                    Binary: sdk.String("nobis"),
                                    PercentPagesMatched: sdk.Float64(1716.29),
                                },
                            },
                        },
                        YaraRuleSignature: &shared.YaraRuleSignature{
                            YaraRule: sdk.String("quis"),
                        },
                    },
                },
                Uris: []string{
                    "dignissimos",
                    "eaque",
                    "quis",
                },
            },
            KernelRootkit: &shared.KernelRootkit{
                Name: sdk.String("Ruby Auer"),
                UnexpectedCodeModification: sdk.Bool(false),
                UnexpectedFtraceHandler: sdk.Bool(false),
                UnexpectedInterruptHandler: sdk.Bool(false),
                UnexpectedKernelCodePages: sdk.Bool(false),
                UnexpectedKprobeHandler: sdk.Bool(false),
                UnexpectedProcessesInRunqueue: sdk.Bool(false),
                UnexpectedReadOnlyDataModification: sdk.Bool(false),
                UnexpectedSystemCallHandler: sdk.Bool(false),
            },
            Kubernetes: &shared.Kubernetes{
                AccessReviews: []shared.AccessReview{
                    shared.AccessReview{
                        Group: sdk.String("dolor"),
                        Name: sdk.String("Dean Welch"),
                        Ns: sdk.String("facilis"),
                        Resource: sdk.String("perspiciatis"),
                        Subresource: sdk.String("voluptatem"),
                        Verb: sdk.String("porro"),
                        Version: sdk.String("consequuntur"),
                    },
                    shared.AccessReview{
                        Group: sdk.String("blanditiis"),
                        Name: sdk.String("Gary Mayert"),
                        Ns: sdk.String("asperiores"),
                        Resource: sdk.String("earum"),
                        Subresource: sdk.String("modi"),
                        Verb: sdk.String("iste"),
                        Version: sdk.String("dolorum"),
                    },
                },
                Bindings: []shared.GoogleCloudSecuritycenterV1Binding{
                    shared.GoogleCloudSecuritycenterV1Binding{
                        Name: sdk.String("Rene Rolfson"),
                        Ns: sdk.String("quaerat"),
                        Role: &shared.Role{
                            Kind: shared.RoleKindEnumRole.ToPointer(),
                            Name: sdk.String("Florence Ebert"),
                            Ns: sdk.String("ipsum"),
                        },
                        Subjects: []shared.Subject{
                            shared.Subject{
                                Kind: shared.SubjectKindEnumServiceaccount.ToPointer(),
                                Name: sdk.String("Adrian Kuhn"),
                                Ns: sdk.String("dolorum"),
                            },
                            shared.Subject{
                                Kind: shared.SubjectKindEnumUser.ToPointer(),
                                Name: sdk.String("Melissa Bednar"),
                                Ns: sdk.String("quaerat"),
                            },
                            shared.Subject{
                                Kind: shared.SubjectKindEnumGroup.ToPointer(),
                                Name: sdk.String("Jan Hodkiewicz"),
                                Ns: sdk.String("atque"),
                            },
                            shared.Subject{
                                Kind: shared.SubjectKindEnumAuthTypeUnspecified.ToPointer(),
                                Name: sdk.String("Stephen Roberts"),
                                Ns: sdk.String("voluptate"),
                            },
                        },
                    },
                    shared.GoogleCloudSecuritycenterV1Binding{
                        Name: sdk.String("Alfredo Mohr"),
                        Ns: sdk.String("asperiores"),
                        Role: &shared.Role{
                            Kind: shared.RoleKindEnumRole.ToPointer(),
                            Name: sdk.String("Tamara Ondricka"),
                            Ns: sdk.String("aspernatur"),
                        },
                        Subjects: []shared.Subject{
                            shared.Subject{
                                Kind: shared.SubjectKindEnumAuthTypeUnspecified.ToPointer(),
                                Name: sdk.String("Tomas Hammes"),
                                Ns: sdk.String("deserunt"),
                            },
                        },
                    },
                    shared.GoogleCloudSecuritycenterV1Binding{
                        Name: sdk.String("Derek Sipes"),
                        Ns: sdk.String("alias"),
                        Role: &shared.Role{
                            Kind: shared.RoleKindEnumClusterRole.ToPointer(),
                            Name: sdk.String("Rhonda Kautzer"),
                            Ns: sdk.String("qui"),
                        },
                        Subjects: []shared.Subject{
                            shared.Subject{
                                Kind: shared.SubjectKindEnumGroup.ToPointer(),
                                Name: sdk.String("Fannie Kub"),
                                Ns: sdk.String("tenetur"),
                            },
                            shared.Subject{
                                Kind: shared.SubjectKindEnumAuthTypeUnspecified.ToPointer(),
                                Name: sdk.String("Tomas Funk"),
                                Ns: sdk.String("sapiente"),
                            },
                            shared.Subject{
                                Kind: shared.SubjectKindEnumServiceaccount.ToPointer(),
                                Name: sdk.String("Karen Rath"),
                                Ns: sdk.String("vel"),
                            },
                        },
                    },
                },
                NodePools: []shared.NodePool{
                    shared.NodePool{
                        Name: sdk.String("Joanna Kohler"),
                        Nodes: []shared.Node{
                            shared.Node{
                                Name: sdk.String("Simon Stracke MD"),
                            },
                        },
                    },
                    shared.NodePool{
                        Name: sdk.String("Randall Cole"),
                        Nodes: []shared.Node{
                            shared.Node{
                                Name: sdk.String("Constance Mann"),
                            },
                            shared.Node{
                                Name: sdk.String("Beverly Cummerata II"),
                            },
                            shared.Node{
                                Name: sdk.String("Terrell Bartell"),
                            },
                        },
                    },
                    shared.NodePool{
                        Name: sdk.String("Carl Turner DDS"),
                        Nodes: []shared.Node{
                            shared.Node{
                                Name: sdk.String("Kent Bayer"),
                            },
                            shared.Node{
                                Name: sdk.String("Clara Fisher Jr."),
                            },
                            shared.Node{
                                Name: sdk.String("Miss Billie Ward"),
                            },
                        },
                    },
                },
                Nodes: []shared.Node{
                    shared.Node{
                        Name: sdk.String("Alexander Prosacco"),
                    },
                    shared.Node{
                        Name: sdk.String("Marsha Kuhic"),
                    },
                    shared.Node{
                        Name: sdk.String("Ignacio Moen"),
                    },
                    shared.Node{
                        Name: sdk.String("Karl Feeney"),
                    },
                },
                Pods: []shared.Pod{
                    shared.Pod{
                        Containers: []shared.Container{
                            shared.Container{
                                ImageID: sdk.String("distinctio"),
                                Labels: []shared.Label{
                                    shared.Label{
                                        Name: sdk.String("Harriet Quitzon"),
                                        Value: sdk.String("dolore"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Gilberto Dickinson"),
                                        Value: sdk.String("aut"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Greg Stoltenberg"),
                                        Value: sdk.String("maiores"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Ted Romaguera MD"),
                                        Value: sdk.String("tempora"),
                                    },
                                },
                                Name: sdk.String("Terri Collins"),
                                URI: sdk.String("http://detailed-grief.name"),
                            },
                            shared.Container{
                                ImageID: sdk.String("dicta"),
                                Labels: []shared.Label{
                                    shared.Label{
                                        Name: sdk.String("Ryan Jaskolski"),
                                        Value: sdk.String("voluptatibus"),
                                    },
                                },
                                Name: sdk.String("Dixie Schamberger"),
                                URI: sdk.String("https://grown-fame.info"),
                            },
                            shared.Container{
                                ImageID: sdk.String("inventore"),
                                Labels: []shared.Label{
                                    shared.Label{
                                        Name: sdk.String("Krista Feeney"),
                                        Value: sdk.String("minima"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Mr. Elsa Reinger"),
                                        Value: sdk.String("impedit"),
                                    },
                                },
                                Name: sdk.String("Mrs. Denise Tillman MD"),
                                URI: sdk.String("https://striped-deduce.info"),
                            },
                            shared.Container{
                                ImageID: sdk.String("autem"),
                                Labels: []shared.Label{
                                    shared.Label{
                                        Name: sdk.String("Mack Stoltenberg"),
                                        Value: sdk.String("quasi"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Carrie Cole IV"),
                                        Value: sdk.String("magnam"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Esther Koch"),
                                        Value: sdk.String("fuga"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Yvette Stehr"),
                                        Value: sdk.String("suscipit"),
                                    },
                                },
                                Name: sdk.String("Alan Lang Jr."),
                                URI: sdk.String("https://rewarding-copy.net"),
                            },
                        },
                        Labels: []shared.Label{
                            shared.Label{
                                Name: sdk.String("Wilbur Gerlach"),
                                Value: sdk.String("ab"),
                            },
                            shared.Label{
                                Name: sdk.String("William Goodwin"),
                                Value: sdk.String("aspernatur"),
                            },
                            shared.Label{
                                Name: sdk.String("Angelica Koelpin MD"),
                                Value: sdk.String("quod"),
                            },
                            shared.Label{
                                Name: sdk.String("Debra Kovacek"),
                                Value: sdk.String("aliquam"),
                            },
                        },
                        Name: sdk.String("Violet Johns"),
                        Ns: sdk.String("deserunt"),
                    },
                    shared.Pod{
                        Containers: []shared.Container{
                            shared.Container{
                                ImageID: sdk.String("accusantium"),
                                Labels: []shared.Label{
                                    shared.Label{
                                        Name: sdk.String("Dianne Langosh"),
                                        Value: sdk.String("fugit"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Hubert Gottlieb"),
                                        Value: sdk.String("minima"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Denise Will"),
                                        Value: sdk.String("explicabo"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Ms. Marion Little"),
                                        Value: sdk.String("accusamus"),
                                    },
                                },
                                Name: sdk.String("Joy Schmidt"),
                                URI: sdk.String("http://bronze-thrift.info"),
                            },
                            shared.Container{
                                ImageID: sdk.String("harum"),
                                Labels: []shared.Label{
                                    shared.Label{
                                        Name: sdk.String("Tracy Harber"),
                                        Value: sdk.String("sit"),
                                    },
                                    shared.Label{
                                        Name: sdk.String("Randolph Fisher"),
                                        Value: sdk.String("consequatur"),
                                    },
                                },
                                Name: sdk.String("Calvin Williamson"),
                                URI: sdk.String("https://optimal-vernacular.org"),
                            },
                        },
                        Labels: []shared.Label{
                            shared.Label{
                                Name: sdk.String("Joyce Wilderman"),
                                Value: sdk.String("pariatur"),
                            },
                            shared.Label{
                                Name: sdk.String("Howard Upton"),
                                Value: sdk.String("veritatis"),
                            },
                            shared.Label{
                                Name: sdk.String("Ann Murphy"),
                                Value: sdk.String("tenetur"),
                            },
                        },
                        Name: sdk.String("Lila Kassulke"),
                        Ns: sdk.String("libero"),
                    },
                },
                Roles: []shared.Role{
                    shared.Role{
                        Kind: shared.RoleKindEnumClusterRole.ToPointer(),
                        Name: sdk.String("Mrs. Michele Williamson"),
                        Ns: sdk.String("ullam"),
                    },
                    shared.Role{
                        Kind: shared.RoleKindEnumRole.ToPointer(),
                        Name: sdk.String("Nora Denesik"),
                        Ns: sdk.String("deleniti"),
                    },
                    shared.Role{
                        Kind: shared.RoleKindEnumClusterRole.ToPointer(),
                        Name: sdk.String("Roger Monahan PhD"),
                        Ns: sdk.String("et"),
                    },
                    shared.Role{
                        Kind: shared.RoleKindEnumRole.ToPointer(),
                        Name: sdk.String("Joann Bogan"),
                        Ns: sdk.String("iste"),
                    },
                },
            },
            MitreAttack: &shared.MitreAttack{
                AdditionalTactics: []shared.MitreAttackAdditionalTacticsEnum{
                    shared.MitreAttackAdditionalTacticsEnumTacticUnspecified,
                    shared.MitreAttackAdditionalTacticsEnumDefenseEvasion,
                    shared.MitreAttackAdditionalTacticsEnumTacticUnspecified,
                    shared.MitreAttackAdditionalTacticsEnumDefenseEvasion,
                },
                AdditionalTechniques: []shared.MitreAttackAdditionalTechniquesEnum{
                    shared.MitreAttackAdditionalTechniquesEnumSSHAuthorizedKeys,
                    shared.MitreAttackAdditionalTechniquesEnumScanningIPBlocks,
                },
                PrimaryTactic: shared.MitreAttackPrimaryTacticEnumCredentialAccess.ToPointer(),
                PrimaryTechniques: []shared.MitreAttackPrimaryTechniquesEnum{
                    shared.MitreAttackPrimaryTechniquesEnumActiveScanning,
                    shared.MitreAttackPrimaryTechniquesEnumUnixShell,
                },
                Version: sdk.String("occaecati"),
            },
            ModuleName: sdk.String("numquam"),
            Mute: shared.FindingMuteEnumUndefined.ToPointer(),
            MuteInitiator: sdk.String("explicabo"),
            Name: sdk.String("Dr. Maria Kulas"),
            NextSteps: sdk.String("velit"),
            Parent: sdk.String("voluptatibus"),
            Processes: []shared.Process{
                shared.Process{
                    Args: []string{
                        "aperiam",
                        "ea",
                        "quaerat",
                        "consequuntur",
                    },
                    ArgumentsTruncated: sdk.Bool(false),
                    Binary: &shared.File{
                        Contents: sdk.String("repellendus"),
                        HashedSize: sdk.String("officia"),
                        PartiallyHashed: sdk.Bool(false),
                        Path: sdk.String("maxime"),
                        Sha256: sdk.String("dignissimos"),
                        Size: sdk.String("officia"),
                    },
                    EnvVariables: []shared.EnvironmentVariable{
                        shared.EnvironmentVariable{
                            Name: sdk.String("Anna Hahn"),
                            Val: sdk.String("labore"),
                        },
                        shared.EnvironmentVariable{
                            Name: sdk.String("Josephine Paucek"),
                            Val: sdk.String("velit"),
                        },
                        shared.EnvironmentVariable{
                            Name: sdk.String("Rex Walter"),
                            Val: sdk.String("vel"),
                        },
                        shared.EnvironmentVariable{
                            Name: sdk.String("Billie Keebler"),
                            Val: sdk.String("facilis"),
                        },
                    },
                    EnvVariablesTruncated: sdk.Bool(false),
                    Libraries: []shared.File{
                        shared.File{
                            Contents: sdk.String("commodi"),
                            HashedSize: sdk.String("in"),
                            PartiallyHashed: sdk.Bool(false),
                            Path: sdk.String("corporis"),
                            Sha256: sdk.String("reiciendis"),
                            Size: sdk.String("assumenda"),
                        },
                        shared.File{
                            Contents: sdk.String("nemo"),
                            HashedSize: sdk.String("recusandae"),
                            PartiallyHashed: sdk.Bool(false),
                            Path: sdk.String("aliquid"),
                            Sha256: sdk.String("aperiam"),
                            Size: sdk.String("cum"),
                        },
                        shared.File{
                            Contents: sdk.String("consectetur"),
                            HashedSize: sdk.String("in"),
                            PartiallyHashed: sdk.Bool(false),
                            Path: sdk.String("exercitationem"),
                            Sha256: sdk.String("earum"),
                            Size: sdk.String("facere"),
                        },
                    },
                    Name: sdk.String("Melba Homenick"),
                    ParentPid: sdk.String("saepe"),
                    Pid: sdk.String("necessitatibus"),
                    Script: &shared.File{
                        Contents: sdk.String("dolore"),
                        HashedSize: sdk.String("sunt"),
                        PartiallyHashed: sdk.Bool(false),
                        Path: sdk.String("asperiores"),
                        Sha256: sdk.String("adipisci"),
                        Size: sdk.String("non"),
                    },
                },
                shared.Process{
                    Args: []string{
                        "beatae",
                    },
                    ArgumentsTruncated: sdk.Bool(false),
                    Binary: &shared.File{
                        Contents: sdk.String("dignissimos"),
                        HashedSize: sdk.String("a"),
                        PartiallyHashed: sdk.Bool(false),
                        Path: sdk.String("debitis"),
                        Sha256: sdk.String("consectetur"),
                        Size: sdk.String("corporis"),
                    },
                    EnvVariables: []shared.EnvironmentVariable{
                        shared.EnvironmentVariable{
                            Name: sdk.String("Melissa Von PhD"),
                            Val: sdk.String("similique"),
                        },
                        shared.EnvironmentVariable{
                            Name: sdk.String("Kelly Hoeger"),
                            Val: sdk.String("minima"),
                        },
                        shared.EnvironmentVariable{
                            Name: sdk.String("Wilbur Ferry"),
                            Val: sdk.String("blanditiis"),
                        },
                    },
                    EnvVariablesTruncated: sdk.Bool(false),
                    Libraries: []shared.File{
                        shared.File{
                            Contents: sdk.String("dolore"),
                            HashedSize: sdk.String("aliquam"),
                            PartiallyHashed: sdk.Bool(false),
                            Path: sdk.String("officiis"),
                            Sha256: sdk.String("temporibus"),
                            Size: sdk.String("ullam"),
                        },
                        shared.File{
                            Contents: sdk.String("adipisci"),
                            HashedSize: sdk.String("cum"),
                            PartiallyHashed: sdk.Bool(false),
                            Path: sdk.String("blanditiis"),
                            Sha256: sdk.String("quas"),
                            Size: sdk.String("hic"),
                        },
                    },
                    Name: sdk.String("Molly Lowe"),
                    ParentPid: sdk.String("hic"),
                    Pid: sdk.String("exercitationem"),
                    Script: &shared.File{
                        Contents: sdk.String("nobis"),
                        HashedSize: sdk.String("sit"),
                        PartiallyHashed: sdk.Bool(false),
                        Path: sdk.String("rerum"),
                        Sha256: sdk.String("sed"),
                        Size: sdk.String("reiciendis"),
                    },
                },
            },
            ResourceName: sdk.String("explicabo"),
            SecurityMarks: &shared.SecurityMarks{
                CanonicalName: sdk.String("asperiores"),
                Marks: map[string]string{
                    "voluptate": "expedita",
                    "ab": "iste",
                    "dolore": "laborum",
                },
                Name: sdk.String("Pearl Johnson"),
            },
            Severity: shared.FindingSeverityEnumCritical.ToPointer(),
            SourceProperties: map[string]interface{}{
                "architecto": "suscipit",
                "sapiente": "debitis",
                "illo": "reiciendis",
            },
            State: shared.FindingStateEnumStateUnspecified.ToPointer(),
            Vulnerability: &shared.Vulnerability{
                Cve: &shared.Cve{
                    Cvssv3: &shared.Cvssv3{
                        AttackComplexity: shared.Cvssv3AttackComplexityEnumAttackComplexityLow.ToPointer(),
                        AttackVector: shared.Cvssv3AttackVectorEnumAttackVectorPhysical.ToPointer(),
                        AvailabilityImpact: shared.Cvssv3AvailabilityImpactEnumImpactHigh.ToPointer(),
                        BaseScore: sdk.Float64(1484.78),
                        ConfidentialityImpact: shared.Cvssv3ConfidentialityImpactEnumImpactLow.ToPointer(),
                        IntegrityImpact: shared.Cvssv3IntegrityImpactEnumImpactHigh.ToPointer(),
                        PrivilegesRequired: shared.Cvssv3PrivilegesRequiredEnumPrivilegesRequiredHigh.ToPointer(),
                        Scope: shared.Cvssv3ScopeEnumScopeUnspecified.ToPointer(),
                        UserInteraction: shared.Cvssv3UserInteractionEnumUserInteractionNone.ToPointer(),
                    },
                    ID: sdk.String("98f447f6-03e8-4b44-9e80-ca55efd20e45"),
                    References: []shared.Reference{
                        shared.Reference{
                            Source: sdk.String("officiis"),
                            URI: sdk.String("http://magnificent-fishbone.name"),
                        },
                        shared.Reference{
                            Source: sdk.String("cum"),
                            URI: sdk.String("http://recent-macaroon.name"),
                        },
                    },
                    UpstreamFixAvailable: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("neque"),
        FindingID: sdk.String("dolorum"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("officia"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.SecuritycenterOrganizationsSourcesFindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Finding != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesGetIamPolicy

Gets the access control policy on the specified Source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesGetIamPolicy(ctx, operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(148268),
            },
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        Resource: "esse",
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("sit"),
    }, operations.SecuritycenterOrganizationsSourcesGetIamPolicySecurity{
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

## SecuritycenterOrganizationsSourcesSetIamPolicy

Sets the access control policy on the specified Source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesSetIamPolicy(ctx, operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "et",
                                    "blanditiis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "saepe",
                                    "error",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "reiciendis",
                                    "dolorem",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("dicta"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "labore",
                                    "quidem",
                                    "atque",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("nam"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "alias",
                                    "amet",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "unde",
                                    "reiciendis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "delectus",
                                    "voluptates",
                                    "perferendis",
                                    "est",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "facere",
                                    "fuga",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("mollitia"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("voluptatem"),
                            Expression: sdk.String("quisquam"),
                            Location: sdk.String("repudiandae"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "reprehenderit",
                            "asperiores",
                            "totam",
                        },
                        Role: sdk.String("suscipit"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quidem"),
                            Expression: sdk.String("maxime"),
                            Location: sdk.String("et"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "assumenda",
                        },
                        Role: sdk.String("ea"),
                    },
                },
                Etag: sdk.String("atque"),
                Version: sdk.Int(623295),
            },
            UpdateMask: sdk.String("officiis"),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("minima"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        Resource: "corrupti",
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("error"),
    }, operations.SecuritycenterOrganizationsSourcesSetIamPolicySecurity{
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

## SecuritycenterOrganizationsSourcesTestIamPermissions

Returns the permissions that a caller has on the specified source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesTestIamPermissions(ctx, operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "repudiandae",
                "atque",
            },
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        Resource: "doloremque",
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity{
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
