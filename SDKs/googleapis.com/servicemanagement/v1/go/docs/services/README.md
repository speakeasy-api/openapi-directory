# Services

### Available Operations

* [ServicemanagementServicesConfigsCreate](#servicemanagementservicesconfigscreate) - Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
* [ServicemanagementServicesConfigsGet](#servicemanagementservicesconfigsget) - Gets a service configuration (version) for a managed service.
* [ServicemanagementServicesConfigsList](#servicemanagementservicesconfigslist) - Lists the history of the service configuration for a managed service, from the newest to the oldest.
* [ServicemanagementServicesConfigsSubmit](#servicemanagementservicesconfigssubmit) - Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
* [ServicemanagementServicesConsumersGetIamPolicy](#servicemanagementservicesconsumersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ServicemanagementServicesConsumersSetIamPolicy](#servicemanagementservicesconsumerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ServicemanagementServicesConsumersTestIamPermissions](#servicemanagementservicesconsumerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [ServicemanagementServicesCreate](#servicemanagementservicescreate) - Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
* [ServicemanagementServicesDelete](#servicemanagementservicesdelete) - Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
* [ServicemanagementServicesGenerateConfigReport](#servicemanagementservicesgenerateconfigreport) - Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
* [ServicemanagementServicesGet](#servicemanagementservicesget) - Gets a managed service. Authentication is required unless the service is public.
* [ServicemanagementServicesGetConfig](#servicemanagementservicesgetconfig) - Gets a service configuration (version) for a managed service.
* [ServicemanagementServicesList](#servicemanagementserviceslist) - Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
* [ServicemanagementServicesRolloutsCreate](#servicemanagementservicesrolloutscreate) - Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
* [ServicemanagementServicesRolloutsGet](#servicemanagementservicesrolloutsget) - Gets a service configuration rollout.
* [ServicemanagementServicesRolloutsList](#servicemanagementservicesrolloutslist) - Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
* [ServicemanagementServicesUndelete](#servicemanagementservicesundelete) - Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

## ServicemanagementServicesConfigsCreate

Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.

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
    res, err := s.Services.ServicemanagementServicesConfigsCreate(ctx, operations.ServicemanagementServicesConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Service: &shared.Service{
            Apis: []shared.API{
                shared.API{
                    Methods: []shared.Method{
                        shared.Method{
                            Name: sdk.String("Wayne Lind"),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Lucy Krajcik"),
                                    Value: map[string]interface{}{
                                        "cum": "esse",
                                        "ipsum": "excepturi",
                                        "aspernatur": "perferendis",
                                        "ad": "natus",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Sheryl Fadel"),
                                    Value: map[string]interface{}{
                                        "saepe": "fuga",
                                        "in": "corporis",
                                        "iste": "iure",
                                        "saepe": "quidem",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Brenda Wisozk"),
                                    Value: map[string]interface{}{
                                        "dolores": "dolorem",
                                        "corporis": "explicabo",
                                        "nobis": "enim",
                                    },
                                },
                            },
                            RequestStreaming: sdk.Bool(false),
                            RequestTypeURL: sdk.String("omnis"),
                            ResponseStreaming: sdk.Bool(false),
                            ResponseTypeURL: sdk.String("nemo"),
                            Syntax: shared.MethodSyntaxEnumSyntaxProto2.ToPointer(),
                        },
                        shared.Method{
                            Name: sdk.String("Brian Kessler"),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Angie Durgan"),
                                    Value: map[string]interface{}{
                                        "mollitia": "occaecati",
                                        "numquam": "commodi",
                                        "quam": "molestiae",
                                        "velit": "error",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Beatrice Brown"),
                                    Value: map[string]interface{}{
                                        "odit": "quo",
                                        "sequi": "tenetur",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Mr. Alberta Schuster"),
                                    Value: map[string]interface{}{
                                        "laborum": "quasi",
                                        "reiciendis": "voluptatibus",
                                        "vero": "nihil",
                                        "praesentium": "voluptatibus",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Geneva Klein Jr."),
                                    Value: map[string]interface{}{
                                        "ut": "maiores",
                                        "dicta": "corporis",
                                    },
                                },
                            },
                            RequestStreaming: sdk.Bool(false),
                            RequestTypeURL: sdk.String("dolore"),
                            ResponseStreaming: sdk.Bool(false),
                            ResponseTypeURL: sdk.String("iusto"),
                            Syntax: shared.MethodSyntaxEnumSyntaxProto2.ToPointer(),
                        },
                        shared.Method{
                            Name: sdk.String("Bill Thompson"),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Alison Mann"),
                                    Value: map[string]interface{}{
                                        "praesentium": "rem",
                                        "voluptates": "quasi",
                                    },
                                },
                            },
                            RequestStreaming: sdk.Bool(false),
                            RequestTypeURL: sdk.String("repudiandae"),
                            ResponseStreaming: sdk.Bool(false),
                            ResponseTypeURL: sdk.String("sint"),
                            Syntax: shared.MethodSyntaxEnumSyntaxProto2.ToPointer(),
                        },
                    },
                    Mixins: []shared.Mixin{
                        shared.Mixin{
                            Name: sdk.String("Erin Altenwerth"),
                            Root: sdk.String("explicabo"),
                        },
                        shared.Mixin{
                            Name: sdk.String("Rudy Spencer"),
                            Root: sdk.String("qui"),
                        },
                        shared.Mixin{
                            Name: sdk.String("Mr. Shelly Lueilwitz"),
                            Root: sdk.String("ipsam"),
                        },
                        shared.Mixin{
                            Name: sdk.String("Denise Pagac"),
                            Root: sdk.String("facilis"),
                        },
                    },
                    Name: sdk.String("Francisco Windler"),
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Gilbert Medhurst"),
                            Value: map[string]interface{}{
                                "dolor": "debitis",
                                "a": "dolorum",
                                "in": "in",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Mrs. Emilio Price"),
                            Value: map[string]interface{}{
                                "ea": "aliquid",
                                "laborum": "accusamus",
                                "non": "occaecati",
                                "enim": "accusamus",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Abraham McKenzie"),
                            Value: map[string]interface{}{
                                "deleniti": "sapiente",
                                "amet": "deserunt",
                                "nisi": "vel",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Ms. Arturo Krajcik"),
                            Value: map[string]interface{}{
                                "id": "labore",
                                "labore": "suscipit",
                                "natus": "nobis",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("eum"),
                    },
                    Syntax: shared.APISyntaxEnumSyntaxEditions.ToPointer(),
                    Version: sdk.String("aspernatur"),
                },
                shared.API{
                    Methods: []shared.Method{
                        shared.Method{
                            Name: sdk.String("Frances Marks"),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Kenneth O'Hara"),
                                    Value: map[string]interface{}{
                                        "eum": "dolor",
                                        "necessitatibus": "odit",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Joyce Kertzmann"),
                                    Value: map[string]interface{}{
                                        "maxime": "deleniti",
                                        "facilis": "in",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Diane VonRueden"),
                                    Value: map[string]interface{}{
                                        "repellat": "quibusdam",
                                        "sed": "saepe",
                                    },
                                },
                            },
                            RequestStreaming: sdk.Bool(false),
                            RequestTypeURL: sdk.String("pariatur"),
                            ResponseStreaming: sdk.Bool(false),
                            ResponseTypeURL: sdk.String("accusantium"),
                            Syntax: shared.MethodSyntaxEnumSyntaxProto2.ToPointer(),
                        },
                    },
                    Mixins: []shared.Mixin{
                        shared.Mixin{
                            Name: sdk.String("Victor Casper"),
                            Root: sdk.String("pariatur"),
                        },
                        shared.Mixin{
                            Name: sdk.String("Nathaniel Marks"),
                            Root: sdk.String("accusantium"),
                        },
                        shared.Mixin{
                            Name: sdk.String("Ebony Predovic"),
                            Root: sdk.String("autem"),
                        },
                    },
                    Name: sdk.String("Gary Streich"),
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Vincent Anderson"),
                            Value: map[string]interface{}{
                                "libero": "nobis",
                                "dolores": "quis",
                                "totam": "dignissimos",
                                "eaque": "quis",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("nesciunt"),
                    },
                    Syntax: shared.APISyntaxEnumSyntaxProto2.ToPointer(),
                    Version: sdk.String("perferendis"),
                },
                shared.API{
                    Methods: []shared.Method{
                        shared.Method{
                            Name: sdk.String("Darryl Fadel"),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Alejandro Purdy DDS"),
                                    Value: map[string]interface{}{
                                        "blanditiis": "error",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Violet Price"),
                                    Value: map[string]interface{}{
                                        "modi": "iste",
                                        "dolorum": "deleniti",
                                        "pariatur": "provident",
                                        "nobis": "libero",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Alex Luettgen"),
                                    Value: map[string]interface{}{
                                        "dolor": "qui",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Mindy Marks"),
                                    Value: map[string]interface{}{
                                        "reiciendis": "amet",
                                        "dolorum": "numquam",
                                    },
                                },
                            },
                            RequestStreaming: sdk.Bool(false),
                            RequestTypeURL: sdk.String("veritatis"),
                            ResponseStreaming: sdk.Bool(false),
                            ResponseTypeURL: sdk.String("ipsa"),
                            Syntax: shared.MethodSyntaxEnumSyntaxProto2.ToPointer(),
                        },
                    },
                    Mixins: []shared.Mixin{
                        shared.Mixin{
                            Name: sdk.String("Bertha Thompson"),
                            Root: sdk.String("voluptas"),
                        },
                        shared.Mixin{
                            Name: sdk.String("Dr. Craig Littel DDS"),
                            Root: sdk.String("dolorum"),
                        },
                    },
                    Name: sdk.String("Colleen Pagac"),
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Emmett Kovacek"),
                            Value: map[string]interface{}{
                                "saepe": "eius",
                                "aspernatur": "perferendis",
                                "amet": "optio",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Tommy Turner"),
                            Value: map[string]interface{}{
                                "minima": "repellendus",
                                "totam": "similique",
                                "alias": "at",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Rhonda Kautzer"),
                            Value: map[string]interface{}{
                                "dolorum": "a",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Fannie Kub"),
                            Value: map[string]interface{}{
                                "amet": "tempore",
                                "accusamus": "numquam",
                                "enim": "dolorem",
                                "sapiente": "totam",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("nihil"),
                    },
                    Syntax: shared.APISyntaxEnumSyntaxProto2.ToPointer(),
                    Version: sdk.String("expedita"),
                },
            },
            Authentication: &shared.Authentication{
                Providers: []shared.AuthProvider{
                    shared.AuthProvider{
                        Audiences: sdk.String("sed"),
                        AuthorizationURL: sdk.String("vel"),
                        ID: sdk.String("b5a73429-cdb1-4a84-a2bb-679d2322715b"),
                        Issuer: sdk.String("hic"),
                        JwksURI: sdk.String("voluptatem"),
                        JwtLocations: []shared.JwtLocation{
                            shared.JwtLocation{
                                Cookie: sdk.String("soluta"),
                                Header: sdk.String("nobis"),
                                Query: sdk.String("et"),
                                ValuePrefix: sdk.String("saepe"),
                            },
                            shared.JwtLocation{
                                Cookie: sdk.String("ipsum"),
                                Header: sdk.String("veritatis"),
                                Query: sdk.String("nobis"),
                                ValuePrefix: sdk.String("quos"),
                            },
                            shared.JwtLocation{
                                Cookie: sdk.String("tempore"),
                                Header: sdk.String("cupiditate"),
                                Query: sdk.String("aperiam"),
                                ValuePrefix: sdk.String("delectus"),
                            },
                            shared.JwtLocation{
                                Cookie: sdk.String("dolorem"),
                                Header: sdk.String("dolore"),
                                Query: sdk.String("labore"),
                                ValuePrefix: sdk.String("adipisci"),
                            },
                        },
                    },
                },
                Rules: []shared.AuthenticationRule{
                    shared.AuthenticationRule{
                        AllowWithoutCredential: sdk.Bool(false),
                        Oauth: &shared.OAuthRequirements{
                            CanonicalScopes: sdk.String("architecto"),
                        },
                        Requirements: []shared.AuthRequirement{
                            shared.AuthRequirement{
                                Audiences: sdk.String("aut"),
                                ProviderID: sdk.String("quas"),
                            },
                        },
                        Selector: sdk.String("itaque"),
                    },
                    shared.AuthenticationRule{
                        AllowWithoutCredential: sdk.Bool(false),
                        Oauth: &shared.OAuthRequirements{
                            CanonicalScopes: sdk.String("consequatur"),
                        },
                        Requirements: []shared.AuthRequirement{
                            shared.AuthRequirement{
                                Audiences: sdk.String("repellendus"),
                                ProviderID: sdk.String("porro"),
                            },
                            shared.AuthRequirement{
                                Audiences: sdk.String("doloribus"),
                                ProviderID: sdk.String("ut"),
                            },
                            shared.AuthRequirement{
                                Audiences: sdk.String("facilis"),
                                ProviderID: sdk.String("cupiditate"),
                            },
                        },
                        Selector: sdk.String("qui"),
                    },
                    shared.AuthenticationRule{
                        AllowWithoutCredential: sdk.Bool(false),
                        Oauth: &shared.OAuthRequirements{
                            CanonicalScopes: sdk.String("quae"),
                        },
                        Requirements: []shared.AuthRequirement{
                            shared.AuthRequirement{
                                Audiences: sdk.String("odio"),
                                ProviderID: sdk.String("occaecati"),
                            },
                            shared.AuthRequirement{
                                Audiences: sdk.String("voluptatibus"),
                                ProviderID: sdk.String("quisquam"),
                            },
                            shared.AuthRequirement{
                                Audiences: sdk.String("vero"),
                                ProviderID: sdk.String("omnis"),
                            },
                        },
                        Selector: sdk.String("quis"),
                    },
                },
            },
            Backend: &shared.Backend{
                Rules: []shared.BackendRule{
                    shared.BackendRule{
                        Address: sdk.String("428 Kulas Views"),
                        Deadline: sdk.Float64(7155.61),
                        DisableAuth: sdk.Bool(false),
                        JwtAudience: sdk.String("quod"),
                        MinDeadline: sdk.Float64(4861.6),
                        OperationDeadline: sdk.Float64(6304.48),
                        OverridesByRequestProtocol: map[string]shared.BackendRule{
                            "vero": shared.BackendRule{},
                            "ducimus": shared.BackendRule{},
                            "dolore": shared.BackendRule{},
                        },
                        PathTranslation: shared.BackendRulePathTranslationEnumAppendPathToAddress.ToPointer(),
                        Protocol: sdk.String("illum"),
                        Selector: sdk.String("sequi"),
                    },
                },
            },
            Billing: &shared.Billing{
                ConsumerDestinations: []shared.BillingDestination{
                    shared.BillingDestination{
                        Metrics: []string{
                            "aut",
                            "voluptatibus",
                            "exercitationem",
                            "nulla",
                        },
                        MonitoredResource: sdk.String("fugit"),
                    },
                    shared.BillingDestination{
                        Metrics: []string{
                            "maiores",
                            "doloribus",
                            "iusto",
                            "eligendi",
                        },
                        MonitoredResource: sdk.String("ducimus"),
                    },
                    shared.BillingDestination{
                        Metrics: []string{
                            "officia",
                        },
                        MonitoredResource: sdk.String("tempora"),
                    },
                },
            },
            ConfigVersion: sdk.Int64(368584),
            Context: &shared.Context{
                Rules: []shared.ContextRule{
                    shared.ContextRule{
                        AllowedRequestExtensions: []string{
                            "vel",
                        },
                        AllowedResponseExtensions: []string{
                            "magnam",
                            "ratione",
                            "ex",
                            "laudantium",
                        },
                        Provided: []string{
                            "dolor",
                        },
                        Requested: []string{
                            "quasi",
                            "ex",
                            "nulla",
                            "excepturi",
                        },
                        Selector: sdk.String("voluptatibus"),
                    },
                    shared.ContextRule{
                        AllowedRequestExtensions: []string{
                            "sapiente",
                            "quisquam",
                        },
                        AllowedResponseExtensions: []string{
                            "ea",
                            "impedit",
                            "corporis",
                            "veniam",
                        },
                        Provided: []string{
                            "inventore",
                            "magnam",
                        },
                        Requested: []string{
                            "quo",
                            "consectetur",
                        },
                        Selector: sdk.String("recusandae"),
                    },
                },
            },
            Control: &shared.Control{
                Environment: sdk.String("aspernatur"),
            },
            CustomError: &shared.CustomError{
                Rules: []shared.CustomErrorRule{
                    shared.CustomErrorRule{
                        IsErrorType: sdk.Bool(false),
                        Selector: sdk.String("eaque"),
                    },
                    shared.CustomErrorRule{
                        IsErrorType: sdk.Bool(false),
                        Selector: sdk.String("a"),
                    },
                },
                Types: []string{
                    "aut",
                    "aut",
                    "deleniti",
                },
            },
            Documentation: &shared.Documentation{
                DocumentationRootURL: sdk.String("impedit"),
                Overview: sdk.String("aliquam"),
                Pages: []shared.Page{
                    shared.Page{
                        Content: sdk.String("accusamus"),
                        Name: sdk.String("Ellen Borer"),
                        Subpages: []shared.Page{
                            shared.Page{},
                            shared.Page{},
                            shared.Page{},
                            shared.Page{},
                        },
                    },
                },
                Rules: []shared.DocumentationRule{
                    shared.DocumentationRule{
                        DeprecationDescription: sdk.String("eum"),
                        Description: sdk.String("autem"),
                        DisableReplacementWords: sdk.String("nobis"),
                        Selector: sdk.String("quas"),
                    },
                },
                ServiceRootURL: sdk.String("assumenda"),
                Summary: sdk.String("nulla"),
            },
            Endpoints: []shared.Endpoint{
                shared.Endpoint{
                    Aliases: []string{
                        "quasi",
                        "tempora",
                        "numquam",
                    },
                    AllowCors: sdk.Bool(false),
                    Name: sdk.String("Ramona Bednar"),
                    Target: sdk.String("odio"),
                },
                shared.Endpoint{
                    Aliases: []string{
                        "esse",
                        "esse",
                    },
                    AllowCors: sdk.Bool(false),
                    Name: sdk.String("Blake Kihn"),
                    Target: sdk.String("ut"),
                },
            },
            Enums: []shared.Enum{
                shared.Enum{
                    Edition: sdk.String("suscipit"),
                    Enumvalue: []shared.EnumValue{
                        shared.EnumValue{
                            Name: sdk.String("Mr. Irma Schaefer"),
                            Number: sdk.Int(696997),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Dallas Sanford"),
                                    Value: map[string]interface{}{
                                        "voluptas": "ab",
                                    },
                                },
                            },
                        },
                        shared.EnumValue{
                            Name: sdk.String("William Goodwin"),
                            Number: sdk.Int(133465),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Miss Claude Walsh"),
                                    Value: map[string]interface{}{
                                        "inventore": "nihil",
                                        "totam": "accusamus",
                                    },
                                },
                            },
                        },
                        shared.EnumValue{
                            Name: sdk.String("Courtney Mayert"),
                            Number: sdk.Int(174112),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Carol Sawayn"),
                                    Value: map[string]interface{}{
                                        "consequuntur": "deleniti",
                                        "fugit": "fuga",
                                        "mollitia": "incidunt",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Roy Hansen"),
                                    Value: map[string]interface{}{
                                        "consequuntur": "ratione",
                                        "explicabo": "saepe",
                                        "occaecati": "atque",
                                        "et": "esse",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Sheldon Boehm"),
                                    Value: map[string]interface{}{
                                        "vero": "aliquid",
                                        "quasi": "saepe",
                                        "vel": "harum",
                                    },
                                },
                            },
                        },
                        shared.EnumValue{
                            Name: sdk.String("Luz McClure"),
                            Number: sdk.Int(756779),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Randolph Fisher"),
                                    Value: map[string]interface{}{
                                        "minus": "quaerat",
                                    },
                                },
                            },
                        },
                    },
                    Name: sdk.String("Glenn Koch"),
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Dr. Clifton Koch"),
                            Value: map[string]interface{}{
                                "pariatur": "possimus",
                                "quia": "eveniet",
                                "asperiores": "facere",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Marilyn Botsford"),
                            Value: map[string]interface{}{
                                "tenetur": "quae",
                                "earum": "vel",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Charlotte Rempel"),
                            Value: map[string]interface{}{
                                "aliquam": "sapiente",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Marion Kihn"),
                            Value: map[string]interface{}{
                                "voluptatum": "qui",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("quibusdam"),
                    },
                    Syntax: shared.EnumSyntaxEnumSyntaxProto3.ToPointer(),
                },
                shared.Enum{
                    Edition: sdk.String("deleniti"),
                    Enumvalue: []shared.EnumValue{
                        shared.EnumValue{
                            Name: sdk.String("Roger Monahan PhD"),
                            Number: sdk.Int(92027),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Joann Bogan"),
                                    Value: map[string]interface{}{
                                        "temporibus": "accusantium",
                                        "rem": "aut",
                                        "laudantium": "eum",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Andrew Little I"),
                                    Value: map[string]interface{}{
                                        "numquam": "impedit",
                                        "explicabo": "voluptas",
                                        "aut": "dignissimos",
                                    },
                                },
                            },
                        },
                        shared.EnumValue{
                            Name: sdk.String("Elisa Mosciski"),
                            Number: sdk.Int(374323),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Eileen Hagenes"),
                                    Value: map[string]interface{}{
                                        "maxime": "dignissimos",
                                        "officia": "asperiores",
                                        "nemo": "quae",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Robyn Schmitt I"),
                                    Value: map[string]interface{}{
                                        "id": "suscipit",
                                        "velit": "culpa",
                                        "est": "recusandae",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Nicolas Kassulke"),
                                    Value: map[string]interface{}{
                                        "labore": "possimus",
                                        "facilis": "cum",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Pearl Hessel"),
                                    Value: map[string]interface{}{
                                        "recusandae": "aliquid",
                                        "aperiam": "cum",
                                    },
                                },
                            },
                        },
                        shared.EnumValue{
                            Name: sdk.String("Arlene Heidenreich"),
                            Number: sdk.Int(257233),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Lela Predovic"),
                                    Value: map[string]interface{}{
                                        "sunt": "asperiores",
                                        "adipisci": "non",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Heather Kuhn"),
                                    Value: map[string]interface{}{
                                        "corporis": "harum",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Melissa Von PhD"),
                                    Value: map[string]interface{}{
                                        "tempora": "aspernatur",
                                        "voluptas": "voluptas",
                                        "voluptas": "minima",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Wilbur Ferry"),
                                    Value: map[string]interface{}{
                                        "in": "dolore",
                                        "aliquam": "officiis",
                                        "temporibus": "ullam",
                                    },
                                },
                            },
                        },
                        shared.EnumValue{
                            Name: sdk.String("Karla Kuvalis"),
                            Number: sdk.Int(201517),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Dewey Leannon"),
                                    Value: map[string]interface{}{
                                        "sit": "rerum",
                                        "sed": "reiciendis",
                                        "explicabo": "asperiores",
                                        "facilis": "voluptate",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Raymond Moore"),
                                    Value: map[string]interface{}{
                                        "in": "commodi",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Benjamin Hodkiewicz III"),
                                    Value: map[string]interface{}{
                                        "debitis": "illo",
                                        "reiciendis": "perferendis",
                                        "corrupti": "maiores",
                                        "incidunt": "sed",
                                    },
                                },
                            },
                        },
                    },
                    Name: sdk.String("Herbert Treutel"),
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Courtney Goldner"),
                            Value: map[string]interface{}{
                                "ex": "sit",
                                "non": "officiis",
                                "praesentium": "facilis",
                                "quaerat": "incidunt",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Miss Alyssa Leffler"),
                            Value: map[string]interface{}{
                                "minima": "recusandae",
                                "reiciendis": "nulla",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Deborah Turcotte"),
                            Value: map[string]interface{}{
                                "officiis": "beatae",
                                "laudantium": "exercitationem",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("praesentium"),
                    },
                    Syntax: shared.EnumSyntaxEnumSyntaxEditions.ToPointer(),
                },
            },
            HTTP: &shared.HTTP{
                FullyDecodeReservedExpansion: sdk.Bool(false),
                Rules: []shared.HTTPRule{
                    shared.HTTPRule{
                        AdditionalBindings: []shared.HTTPRule{
                            shared.HTTPRule{},
                            shared.HTTPRule{},
                            shared.HTTPRule{},
                        },
                        Body: sdk.String("voluptatum"),
                        Custom: &shared.CustomHTTPPattern{
                            Kind: sdk.String("error"),
                            Path: sdk.String("hic"),
                        },
                        Delete: sdk.String("expedita"),
                        Get: sdk.String("debitis"),
                        Patch: sdk.String("neque"),
                        Post: sdk.String("dolorum"),
                        Put: sdk.String("nostrum"),
                        ResponseBody: sdk.String("officia"),
                        Selector: sdk.String("dolorum"),
                    },
                    shared.HTTPRule{
                        AdditionalBindings: []shared.HTTPRule{
                            shared.HTTPRule{},
                            shared.HTTPRule{},
                            shared.HTTPRule{},
                        },
                        Body: sdk.String("accusamus"),
                        Custom: &shared.CustomHTTPPattern{
                            Kind: sdk.String("tempora"),
                            Path: sdk.String("atque"),
                        },
                        Delete: sdk.String("fugit"),
                        Get: sdk.String("ut"),
                        Patch: sdk.String("fugiat"),
                        Post: sdk.String("voluptatem"),
                        Put: sdk.String("culpa"),
                        ResponseBody: sdk.String("expedita"),
                        Selector: sdk.String("magnam"),
                    },
                },
            },
            ID: sdk.String("075088e5-1862-4065-a904-f3b1194b8abf"),
            Logging: &shared.Logging{
                ConsumerDestinations: []shared.LoggingDestination{
                    shared.LoggingDestination{
                        Logs: []string{
                            "amet",
                        },
                        MonitoredResource: sdk.String("deserunt"),
                    },
                    shared.LoggingDestination{
                        Logs: []string{
                            "unde",
                            "reiciendis",
                        },
                        MonitoredResource: sdk.String("provident"),
                    },
                },
                ProducerDestinations: []shared.LoggingDestination{
                    shared.LoggingDestination{
                        Logs: []string{
                            "voluptates",
                            "perferendis",
                            "est",
                            "quidem",
                        },
                        MonitoredResource: sdk.String("reprehenderit"),
                    },
                    shared.LoggingDestination{
                        Logs: []string{
                            "fuga",
                            "praesentium",
                            "mollitia",
                            "veniam",
                        },
                        MonitoredResource: sdk.String("voluptatem"),
                    },
                    shared.LoggingDestination{
                        Logs: []string{
                            "repudiandae",
                            "quasi",
                            "atque",
                            "reprehenderit",
                        },
                        MonitoredResource: sdk.String("asperiores"),
                    },
                    shared.LoggingDestination{
                        Logs: []string{
                            "suscipit",
                            "quidem",
                            "maxime",
                        },
                        MonitoredResource: sdk.String("et"),
                    },
                },
            },
            Logs: []shared.LogDescriptor{
                shared.LogDescriptor{
                    Description: sdk.String("amet"),
                    DisplayName: sdk.String("assumenda"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("atque"),
                            Key: sdk.String("error"),
                            ValueType: shared.LabelDescriptorValueTypeEnumInt64.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("officiis"),
                            Key: sdk.String("accusamus"),
                            ValueType: shared.LabelDescriptorValueTypeEnumBool.ToPointer(),
                        },
                    },
                    Name: sdk.String("Kelly Jakubowski"),
                },
                shared.LogDescriptor{
                    Description: sdk.String("at"),
                    DisplayName: sdk.String("error"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("suscipit"),
                            Key: sdk.String("repudiandae"),
                            ValueType: shared.LabelDescriptorValueTypeEnumBool.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("atque"),
                            Key: sdk.String("sunt"),
                            ValueType: shared.LabelDescriptorValueTypeEnumInt64.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("dolorum"),
                            Key: sdk.String("repellendus"),
                            ValueType: shared.LabelDescriptorValueTypeEnumString.ToPointer(),
                        },
                    },
                    Name: sdk.String("Mr. Anthony Waelchi Sr."),
                },
            },
            Metrics: []shared.MetricDescriptor{
                shared.MetricDescriptor{
                    Description: sdk.String("laboriosam"),
                    DisplayName: sdk.String("velit"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("molestias"),
                            Key: sdk.String("magnam"),
                            ValueType: shared.LabelDescriptorValueTypeEnumInt64.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("consequuntur"),
                            Key: sdk.String("occaecati"),
                            ValueType: shared.LabelDescriptorValueTypeEnumInt64.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("perspiciatis"),
                            Key: sdk.String("in"),
                            ValueType: shared.LabelDescriptorValueTypeEnumString.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("eveniet"),
                            Key: sdk.String("occaecati"),
                            ValueType: shared.LabelDescriptorValueTypeEnumString.ToPointer(),
                        },
                    },
                    LaunchStage: shared.MetricDescriptorLaunchStageEnumUnimplemented.ToPointer(),
                    Metadata: &shared.MetricDescriptorMetadata{
                        IngestDelay: sdk.String("id"),
                        LaunchStage: shared.MetricDescriptorMetadataLaunchStageEnumPrelaunch.ToPointer(),
                        SamplePeriod: sdk.String("reprehenderit"),
                    },
                    MetricKind: shared.MetricDescriptorMetricKindEnumDelta.ToPointer(),
                    MonitoredResourceTypes: []string{
                        "corporis",
                    },
                    Name: sdk.String("Conrad Franey III"),
                    Type: sdk.String("ipsa"),
                    Unit: sdk.String("totam"),
                    ValueType: shared.MetricDescriptorValueTypeEnumValueTypeUnspecified.ToPointer(),
                },
                shared.MetricDescriptor{
                    Description: sdk.String("molestiae"),
                    DisplayName: sdk.String("eveniet"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("cum"),
                            Key: sdk.String("iure"),
                            ValueType: shared.LabelDescriptorValueTypeEnumInt64.ToPointer(),
                        },
                    },
                    LaunchStage: shared.MetricDescriptorLaunchStageEnumUnimplemented.ToPointer(),
                    Metadata: &shared.MetricDescriptorMetadata{
                        IngestDelay: sdk.String("laborum"),
                        LaunchStage: shared.MetricDescriptorMetadataLaunchStageEnumBeta.ToPointer(),
                        SamplePeriod: sdk.String("voluptatum"),
                    },
                    MetricKind: shared.MetricDescriptorMetricKindEnumDelta.ToPointer(),
                    MonitoredResourceTypes: []string{
                        "ad",
                        "repellat",
                    },
                    Name: sdk.String("Renee Metz"),
                    Type: sdk.String("voluptas"),
                    Unit: sdk.String("alias"),
                    ValueType: shared.MetricDescriptorValueTypeEnumMoney.ToPointer(),
                },
            },
            MonitoredResources: []shared.MonitoredResourceDescriptor{
                shared.MonitoredResourceDescriptor{
                    Description: sdk.String("dolores"),
                    DisplayName: sdk.String("id"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("dolore"),
                            Key: sdk.String("dolorum"),
                            ValueType: shared.LabelDescriptorValueTypeEnumString.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("quae"),
                            Key: sdk.String("recusandae"),
                            ValueType: shared.LabelDescriptorValueTypeEnumBool.ToPointer(),
                        },
                    },
                    LaunchStage: shared.MonitoredResourceDescriptorLaunchStageEnumPrelaunch.ToPointer(),
                    Name: sdk.String("Carla Graham"),
                    Type: sdk.String("debitis"),
                },
                shared.MonitoredResourceDescriptor{
                    Description: sdk.String("laudantium"),
                    DisplayName: sdk.String("eum"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("recusandae"),
                            Key: sdk.String("esse"),
                            ValueType: shared.LabelDescriptorValueTypeEnumBool.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("quis"),
                            Key: sdk.String("eum"),
                            ValueType: shared.LabelDescriptorValueTypeEnumInt64.ToPointer(),
                        },
                    },
                    LaunchStage: shared.MonitoredResourceDescriptorLaunchStageEnumAlpha.ToPointer(),
                    Name: sdk.String("Marion Boyer"),
                    Type: sdk.String("mollitia"),
                },
                shared.MonitoredResourceDescriptor{
                    Description: sdk.String("provident"),
                    DisplayName: sdk.String("possimus"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("ex"),
                            Key: sdk.String("aliquid"),
                            ValueType: shared.LabelDescriptorValueTypeEnumString.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("repellat"),
                            Key: sdk.String("doloribus"),
                            ValueType: shared.LabelDescriptorValueTypeEnumBool.ToPointer(),
                        },
                        shared.LabelDescriptor{
                            Description: sdk.String("in"),
                            Key: sdk.String("nam"),
                            ValueType: shared.LabelDescriptorValueTypeEnumInt64.ToPointer(),
                        },
                    },
                    LaunchStage: shared.MonitoredResourceDescriptorLaunchStageEnumBeta.ToPointer(),
                    Name: sdk.String("Irving Gleichner"),
                    Type: sdk.String("officiis"),
                },
                shared.MonitoredResourceDescriptor{
                    Description: sdk.String("sapiente"),
                    DisplayName: sdk.String("cumque"),
                    Labels: []shared.LabelDescriptor{
                        shared.LabelDescriptor{
                            Description: sdk.String("rerum"),
                            Key: sdk.String("tempora"),
                            ValueType: shared.LabelDescriptorValueTypeEnumBool.ToPointer(),
                        },
                    },
                    LaunchStage: shared.MonitoredResourceDescriptorLaunchStageEnumLaunchStageUnspecified.ToPointer(),
                    Name: sdk.String("Mrs. Erma Berge"),
                    Type: sdk.String("eum"),
                },
            },
            Monitoring: &shared.Monitoring{
                ConsumerDestinations: []shared.MonitoringDestination{
                    shared.MonitoringDestination{
                        Metrics: []string{
                            "at",
                            "impedit",
                            "eos",
                        },
                        MonitoredResource: sdk.String("sapiente"),
                    },
                    shared.MonitoringDestination{
                        Metrics: []string{
                            "dicta",
                            "minima",
                        },
                        MonitoredResource: sdk.String("beatae"),
                    },
                },
                ProducerDestinations: []shared.MonitoringDestination{
                    shared.MonitoringDestination{
                        Metrics: []string{
                            "earum",
                            "soluta",
                            "hic",
                        },
                        MonitoredResource: sdk.String("illum"),
                    },
                    shared.MonitoringDestination{
                        Metrics: []string{
                            "earum",
                        },
                        MonitoredResource: sdk.String("perspiciatis"),
                    },
                    shared.MonitoringDestination{
                        Metrics: []string{
                            "debitis",
                            "aliquid",
                            "porro",
                            "suscipit",
                        },
                        MonitoredResource: sdk.String("dolorem"),
                    },
                },
            },
            Name: sdk.String("Erma Paucek"),
            ProducerProjectID: sdk.String("necessitatibus"),
            Publishing: &shared.Publishing{
                APIShortName: sdk.String("nulla"),
                CodeownerGithubTeams: []string{
                    "quasi",
                },
                DocTagPrefix: sdk.String("et"),
                DocumentationURI: sdk.String("ducimus"),
                GithubLabel: sdk.String("natus"),
                LibrarySettings: []shared.ClientLibrarySettings{
                    shared.ClientLibrarySettings{
                        CppSettings: &shared.CppSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("magni"),
                            },
                        },
                        DotnetSettings: &shared.DotnetSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("nihil"),
                            },
                            ForcedNamespaceAliases: []string{
                                "dicta",
                                "iusto",
                            },
                            HandwrittenSignatures: []string{
                                "praesentium",
                                "maiores",
                            },
                            IgnoredResources: []string{
                                "vel",
                                "architecto",
                                "fugiat",
                                "doloremque",
                            },
                            RenamedResources: map[string]string{
                                "odio": "tempora",
                            },
                            RenamedServices: map[string]string{
                                "ex": "consectetur",
                                "aliquid": "ipsa",
                            },
                        },
                        GoSettings: &shared.GoSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("expedita"),
                            },
                        },
                        JavaSettings: &shared.JavaSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                },
                                ReferenceDocsURI: sdk.String("aliquid"),
                            },
                            LibraryPackage: sdk.String("perferendis"),
                            ServiceClassNames: map[string]string{
                                "voluptas": "iste",
                                "id": "ab",
                            },
                        },
                        LaunchStage: shared.ClientLibrarySettingsLaunchStageEnumBeta.ToPointer(),
                        NodeSettings: &shared.NodeSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("ad"),
                            },
                        },
                        PhpSettings: &shared.PhpSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("ex"),
                            },
                        },
                        PythonSettings: &shared.PythonSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("voluptatem"),
                            },
                        },
                        RestNumericEnums: sdk.Bool(false),
                        RubySettings: &shared.RubySettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("voluptatum"),
                            },
                        },
                        Version: sdk.String("omnis"),
                    },
                    shared.ClientLibrarySettings{
                        CppSettings: &shared.CppSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("est"),
                            },
                        },
                        DotnetSettings: &shared.DotnetSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("architecto"),
                            },
                            ForcedNamespaceAliases: []string{
                                "pariatur",
                                "debitis",
                                "voluptatem",
                            },
                            HandwrittenSignatures: []string{
                                "deleniti",
                            },
                            IgnoredResources: []string{
                                "ex",
                                "sapiente",
                                "rem",
                                "minus",
                            },
                            RenamedResources: map[string]string{
                                "asperiores": "ratione",
                                "ullam": "perferendis",
                            },
                            RenamedServices: map[string]string{
                                "totam": "impedit",
                                "quibusdam": "nam",
                                "ipsam": "culpa",
                                "dolor": "aliquam",
                            },
                        },
                        GoSettings: &shared.GoSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                },
                                ReferenceDocsURI: sdk.String("veritatis"),
                            },
                        },
                        JavaSettings: &shared.JavaSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("architecto"),
                            },
                            LibraryPackage: sdk.String("sit"),
                            ServiceClassNames: map[string]string{
                                "fugit": "ab",
                                "laudantium": "quae",
                            },
                        },
                        LaunchStage: shared.ClientLibrarySettingsLaunchStageEnumUnimplemented.ToPointer(),
                        NodeSettings: &shared.NodeSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                },
                                ReferenceDocsURI: sdk.String("eveniet"),
                            },
                        },
                        PhpSettings: &shared.PhpSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("veniam"),
                            },
                        },
                        PythonSettings: &shared.PythonSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("eum"),
                            },
                        },
                        RestNumericEnums: sdk.Bool(false),
                        RubySettings: &shared.RubySettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("exercitationem"),
                            },
                        },
                        Version: sdk.String("ab"),
                    },
                    shared.ClientLibrarySettings{
                        CppSettings: &shared.CppSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("consequuntur"),
                            },
                        },
                        DotnetSettings: &shared.DotnetSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                },
                                ReferenceDocsURI: sdk.String("necessitatibus"),
                            },
                            ForcedNamespaceAliases: []string{
                                "nisi",
                            },
                            HandwrittenSignatures: []string{
                                "vero",
                                "est",
                                "harum",
                                "sequi",
                            },
                            IgnoredResources: []string{
                                "repudiandae",
                                "optio",
                                "occaecati",
                                "nemo",
                            },
                            RenamedResources: map[string]string{
                                "blanditiis": "officia",
                                "voluptas": "numquam",
                            },
                            RenamedServices: map[string]string{
                                "quos": "eius",
                                "aspernatur": "ducimus",
                            },
                        },
                        GoSettings: &shared.GoSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("laudantium"),
                            },
                        },
                        JavaSettings: &shared.JavaSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                },
                                ReferenceDocsURI: sdk.String("fugiat"),
                            },
                            LibraryPackage: sdk.String("dicta"),
                            ServiceClassNames: map[string]string{
                                "consequuntur": "consectetur",
                                "aperiam": "cupiditate",
                            },
                        },
                        LaunchStage: shared.ClientLibrarySettingsLaunchStageEnumDeprecated.ToPointer(),
                        NodeSettings: &shared.NodeSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("occaecati"),
                            },
                        },
                        PhpSettings: &shared.PhpSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                },
                                ReferenceDocsURI: sdk.String("accusamus"),
                            },
                        },
                        PythonSettings: &shared.PythonSettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                },
                                ReferenceDocsURI: sdk.String("praesentium"),
                            },
                        },
                        RestNumericEnums: sdk.Bool(false),
                        RubySettings: &shared.RubySettings{
                            Common: &shared.CommonLanguageSettings{
                                Destinations: []shared.CommonLanguageSettingsDestinationsEnum{
                                    shared.CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified,
                                    shared.CommonLanguageSettingsDestinationsEnumPackageManager,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                    shared.CommonLanguageSettingsDestinationsEnumGithub,
                                },
                                ReferenceDocsURI: sdk.String("itaque"),
                            },
                        },
                        Version: sdk.String("commodi"),
                    },
                },
                MethodSettings: []shared.MethodSettings{
                    shared.MethodSettings{
                        LongRunning: &shared.LongRunning{
                            InitialPollDelay: sdk.String("earum"),
                            MaxPollDelay: sdk.String("modi"),
                            PollDelayMultiplier: sdk.Float32(7221.84),
                            TotalPollTimeout: sdk.String("vero"),
                        },
                        Selector: sdk.String("voluptatem"),
                    },
                    shared.MethodSettings{
                        LongRunning: &shared.LongRunning{
                            InitialPollDelay: sdk.String("ipsam"),
                            MaxPollDelay: sdk.String("vel"),
                            PollDelayMultiplier: sdk.Float32(13.83),
                            TotalPollTimeout: sdk.String("quasi"),
                        },
                        Selector: sdk.String("non"),
                    },
                    shared.MethodSettings{
                        LongRunning: &shared.LongRunning{
                            InitialPollDelay: sdk.String("maiores"),
                            MaxPollDelay: sdk.String("enim"),
                            PollDelayMultiplier: sdk.Float32(5752.13),
                            TotalPollTimeout: sdk.String("nulla"),
                        },
                        Selector: sdk.String("deserunt"),
                    },
                },
                NewIssueURI: sdk.String("esse"),
                Organization: shared.PublishingOrganizationEnumAds.ToPointer(),
                ProtoReferenceDocumentationURI: sdk.String("reprehenderit"),
            },
            Quota: &shared.Quota{
                Limits: []shared.QuotaLimit{
                    shared.QuotaLimit{
                        DefaultLimit: sdk.String("quis"),
                        Description: sdk.String("sint"),
                        DisplayName: sdk.String("accusamus"),
                        Duration: sdk.String("impedit"),
                        FreeTier: sdk.String("hic"),
                        MaxLimit: sdk.String("necessitatibus"),
                        Metric: sdk.String("asperiores"),
                        Name: sdk.String("Loretta Tremblay DDS"),
                        Unit: sdk.String("fuga"),
                        Values: map[string]string{
                            "consectetur": "velit",
                            "atque": "ipsum",
                            "impedit": "magni",
                        },
                    },
                    shared.QuotaLimit{
                        DefaultLimit: sdk.String("soluta"),
                        Description: sdk.String("repudiandae"),
                        DisplayName: sdk.String("nam"),
                        Duration: sdk.String("dolore"),
                        FreeTier: sdk.String("iusto"),
                        MaxLimit: sdk.String("voluptate"),
                        Metric: sdk.String("sequi"),
                        Name: sdk.String("Gladys Satterfield"),
                        Unit: sdk.String("iure"),
                        Values: map[string]string{
                            "voluptatibus": "vel",
                        },
                    },
                    shared.QuotaLimit{
                        DefaultLimit: sdk.String("magnam"),
                        Description: sdk.String("quibusdam"),
                        DisplayName: sdk.String("inventore"),
                        Duration: sdk.String("facere"),
                        FreeTier: sdk.String("libero"),
                        MaxLimit: sdk.String("architecto"),
                        Metric: sdk.String("voluptatibus"),
                        Name: sdk.String("Robyn Gutmann Jr."),
                        Unit: sdk.String("vel"),
                        Values: map[string]string{
                            "beatae": "vero",
                            "excepturi": "eum",
                        },
                    },
                },
                MetricRules: []shared.MetricRule{
                    shared.MetricRule{
                        MetricCosts: map[string]string{
                            "perspiciatis": "earum",
                            "dicta": "impedit",
                        },
                        Selector: sdk.String("voluptatibus"),
                    },
                },
            },
            SourceInfo: &shared.SourceInfo{
                SourceFiles: []map[string]interface{}{
                    map[string]interface{}{
                        "alias": "nisi",
                        "itaque": "velit",
                        "laborum": "non",
                        "dolor": "iusto",
                    },
                    map[string]interface{}{
                        "doloremque": "consequatur",
                    },
                    map[string]interface{}{
                        "recusandae": "ea",
                        "quidem": "voluptas",
                        "facilis": "placeat",
                    },
                },
            },
            SystemParameters: &shared.SystemParameters{
                Rules: []shared.SystemParameterRule{
                    shared.SystemParameterRule{
                        Parameters: []shared.SystemParameter{
                            shared.SystemParameter{
                                HTTPHeader: sdk.String("deleniti"),
                                Name: sdk.String("Karl Herman"),
                                URLQueryParameter: sdk.String("animi"),
                            },
                            shared.SystemParameter{
                                HTTPHeader: sdk.String("impedit"),
                                Name: sdk.String("Dana Ortiz"),
                                URLQueryParameter: sdk.String("labore"),
                            },
                            shared.SystemParameter{
                                HTTPHeader: sdk.String("veritatis"),
                                Name: sdk.String("Mrs. Glenn Bruen"),
                                URLQueryParameter: sdk.String("qui"),
                            },
                        },
                        Selector: sdk.String("iste"),
                    },
                    shared.SystemParameterRule{
                        Parameters: []shared.SystemParameter{
                            shared.SystemParameter{
                                HTTPHeader: sdk.String("nemo"),
                                Name: sdk.String("Wm Legros"),
                                URLQueryParameter: sdk.String("fugit"),
                            },
                            shared.SystemParameter{
                                HTTPHeader: sdk.String("alias"),
                                Name: sdk.String("Mrs. Gina Bergnaum"),
                                URLQueryParameter: sdk.String("exercitationem"),
                            },
                        },
                        Selector: sdk.String("itaque"),
                    },
                    shared.SystemParameterRule{
                        Parameters: []shared.SystemParameter{
                            shared.SystemParameter{
                                HTTPHeader: sdk.String("ipsum"),
                                Name: sdk.String("Orville Ratke"),
                                URLQueryParameter: sdk.String("quia"),
                            },
                        },
                        Selector: sdk.String("nostrum"),
                    },
                },
            },
            SystemTypes: []shared.Type{
                shared.Type{
                    Edition: sdk.String("libero"),
                    Fields: []shared.Field{
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityRequired.ToPointer(),
                            DefaultValue: sdk.String("libero"),
                            JSONName: sdk.String("fugiat"),
                            Kind: shared.FieldKindEnumTypeBytes.ToPointer(),
                            Name: sdk.String("Clark Balistreri DVM"),
                            Number: sdk.Int(80061),
                            OneofIndex: sdk.Int(49348),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Ms. Lynne Rau"),
                                    Value: map[string]interface{}{
                                        "assumenda": "beatae",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Bryant Lockman"),
                                    Value: map[string]interface{}{
                                        "necessitatibus": "tempore",
                                        "sint": "ea",
                                        "autem": "ipsam",
                                        "rerum": "laudantium",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Cecelia Wiza"),
                                    Value: map[string]interface{}{
                                        "quia": "quidem",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("fuga"),
                        },
                    },
                    Name: sdk.String("Steven Rath"),
                    Oneofs: []string{
                        "odio",
                        "praesentium",
                        "odit",
                        "explicabo",
                    },
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Darin Fisher"),
                            Value: map[string]interface{}{
                                "quidem": "quis",
                                "beatae": "unde",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Lucia McDermott"),
                            Value: map[string]interface{}{
                                "nesciunt": "at",
                                "officia": "dignissimos",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("optio"),
                    },
                    Syntax: shared.TypeSyntaxEnumSyntaxEditions.ToPointer(),
                },
                shared.Type{
                    Edition: sdk.String("corporis"),
                    Fields: []shared.Field{
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityRequired.ToPointer(),
                            DefaultValue: sdk.String("voluptatum"),
                            JSONName: sdk.String("cupiditate"),
                            Kind: shared.FieldKindEnumTypeFixed64.ToPointer(),
                            Name: sdk.String("Bill Doyle"),
                            Number: sdk.Int(433077),
                            OneofIndex: sdk.Int(266408),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Tasha Wolff DDS"),
                                    Value: map[string]interface{}{
                                        "labore": "totam",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Glen Satterfield"),
                                    Value: map[string]interface{}{
                                        "nostrum": "est",
                                        "impedit": "delectus",
                                        "tempore": "vero",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("odit"),
                        },
                    },
                    Name: sdk.String("Ervin Hettinger IV"),
                    Oneofs: []string{
                        "in",
                        "ducimus",
                    },
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Natasha Bogan"),
                            Value: map[string]interface{}{
                                "itaque": "similique",
                                "optio": "ex",
                                "quaerat": "commodi",
                                "officiis": "placeat",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Jorge Kohler"),
                            Value: map[string]interface{}{
                                "sint": "vero",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Dr. Elvira Robel"),
                            Value: map[string]interface{}{
                                "dolores": "nam",
                                "dicta": "consequuntur",
                                "necessitatibus": "nobis",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("ipsa"),
                    },
                    Syntax: shared.TypeSyntaxEnumSyntaxProto3.ToPointer(),
                },
                shared.Type{
                    Edition: sdk.String("maiores"),
                    Fields: []shared.Field{
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityUnknown.ToPointer(),
                            DefaultValue: sdk.String("laboriosam"),
                            JSONName: sdk.String("pariatur"),
                            Kind: shared.FieldKindEnumTypeUint32.ToPointer(),
                            Name: sdk.String("Marion Hills"),
                            Number: sdk.Int(988749),
                            OneofIndex: sdk.Int(757364),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Mindy O'Kon"),
                                    Value: map[string]interface{}{
                                        "odio": "eaque",
                                        "saepe": "architecto",
                                        "quos": "iste",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Randolph Reinger DVM"),
                                    Value: map[string]interface{}{
                                        "cum": "ipsum",
                                        "adipisci": "saepe",
                                        "deserunt": "doloremque",
                                        "quis": "veniam",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Roger McDermott"),
                                    Value: map[string]interface{}{
                                        "non": "magnam",
                                        "itaque": "sed",
                                        "asperiores": "veniam",
                                        "consequuntur": "facere",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("laudantium"),
                        },
                    },
                    Name: sdk.String("Freda Farrell I"),
                    Oneofs: []string{
                        "tempore",
                        "nisi",
                        "voluptatibus",
                    },
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Preston Huel"),
                            Value: map[string]interface{}{
                                "minus": "facere",
                                "facilis": "ipsum",
                                "ad": "voluptatibus",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Russell Toy"),
                            Value: map[string]interface{}{
                                "reprehenderit": "nostrum",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("neque"),
                    },
                    Syntax: shared.TypeSyntaxEnumSyntaxProto3.ToPointer(),
                },
            },
            Title: sdk.String("Miss"),
            Types: []shared.Type{
                shared.Type{
                    Edition: sdk.String("eligendi"),
                    Fields: []shared.Field{
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityRequired.ToPointer(),
                            DefaultValue: sdk.String("officiis"),
                            JSONName: sdk.String("ducimus"),
                            Kind: shared.FieldKindEnumTypeUint64.ToPointer(),
                            Name: sdk.String("Ms. Sabrina Schaden"),
                            Number: sdk.Int(854115),
                            OneofIndex: sdk.Int(322333),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Marta Kub"),
                                    Value: map[string]interface{}{
                                        "ab": "incidunt",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("accusamus"),
                        },
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityRepeated.ToPointer(),
                            DefaultValue: sdk.String("tempore"),
                            JSONName: sdk.String("veniam"),
                            Kind: shared.FieldKindEnumTypeInt64.ToPointer(),
                            Name: sdk.String("Amos Kilback"),
                            Number: sdk.Int(999809),
                            OneofIndex: sdk.Int(789770),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Nina Blanda"),
                                    Value: map[string]interface{}{
                                        "quisquam": "provident",
                                        "laudantium": "repudiandae",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("consequatur"),
                        },
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityRepeated.ToPointer(),
                            DefaultValue: sdk.String("aspernatur"),
                            JSONName: sdk.String("nam"),
                            Kind: shared.FieldKindEnumTypeUint32.ToPointer(),
                            Name: sdk.String("Eduardo Walker"),
                            Number: sdk.Int(360934),
                            OneofIndex: sdk.Int(873833),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Elmer Emard"),
                                    Value: map[string]interface{}{
                                        "aut": "voluptatem",
                                        "ad": "quae",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Desiree Lakin"),
                                    Value: map[string]interface{}{
                                        "quasi": "dicta",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Ronald Wehner"),
                                    Value: map[string]interface{}{
                                        "dolorum": "necessitatibus",
                                        "provident": "repudiandae",
                                        "consequatur": "nemo",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("molestiae"),
                        },
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityRepeated.ToPointer(),
                            DefaultValue: sdk.String("facilis"),
                            JSONName: sdk.String("corrupti"),
                            Kind: shared.FieldKindEnumTypeUnknown.ToPointer(),
                            Name: sdk.String("Caleb Daugherty Jr."),
                            Number: sdk.Int(244376),
                            OneofIndex: sdk.Int(224413),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Curtis McCullough PhD"),
                                    Value: map[string]interface{}{
                                        "minus": "esse",
                                        "voluptatem": "perferendis",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("rerum"),
                        },
                    },
                    Name: sdk.String("Kimberly Kuhn"),
                    Oneofs: []string{
                        "provident",
                        "consectetur",
                        "eligendi",
                        "dignissimos",
                    },
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Jeremiah Spencer"),
                            Value: map[string]interface{}{
                                "aspernatur": "quo",
                                "itaque": "illum",
                                "laborum": "dignissimos",
                                "vero": "qui",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("consectetur"),
                    },
                    Syntax: shared.TypeSyntaxEnumSyntaxEditions.ToPointer(),
                },
                shared.Type{
                    Edition: sdk.String("explicabo"),
                    Fields: []shared.Field{
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityOptional.ToPointer(),
                            DefaultValue: sdk.String("nihil"),
                            JSONName: sdk.String("non"),
                            Kind: shared.FieldKindEnumTypeDouble.ToPointer(),
                            Name: sdk.String("May Nolan"),
                            Number: sdk.Int(719389),
                            OneofIndex: sdk.Int(450224),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Marjorie Waelchi"),
                                    Value: map[string]interface{}{
                                        "accusamus": "rem",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Kathy Leuschke"),
                                    Value: map[string]interface{}{
                                        "minima": "libero",
                                        "magnam": "sit",
                                        "modi": "eum",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("nesciunt"),
                        },
                    },
                    Name: sdk.String("Julio Stehr"),
                    Oneofs: []string{
                        "reiciendis",
                        "ab",
                    },
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Maria Veum"),
                            Value: map[string]interface{}{
                                "dolorum": "possimus",
                                "voluptate": "consectetur",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Bertha Ward MD"),
                            Value: map[string]interface{}{
                                "quas": "et",
                                "facilis": "amet",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("autem"),
                    },
                    Syntax: shared.TypeSyntaxEnumSyntaxEditions.ToPointer(),
                },
                shared.Type{
                    Edition: sdk.String("alias"),
                    Fields: []shared.Field{
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityUnknown.ToPointer(),
                            DefaultValue: sdk.String("quos"),
                            JSONName: sdk.String("laudantium"),
                            Kind: shared.FieldKindEnumTypeSfixed32.ToPointer(),
                            Name: sdk.String("Brenda Bechtelar"),
                            Number: sdk.Int(651228),
                            OneofIndex: sdk.Int(859003),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Sandra Abbott"),
                                    Value: map[string]interface{}{
                                        "incidunt": "qui",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Mr. Alyssa Pouros"),
                                    Value: map[string]interface{}{
                                        "optio": "voluptatibus",
                                        "molestias": "officia",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Everett Dickinson"),
                                    Value: map[string]interface{}{
                                        "ducimus": "odit",
                                        "velit": "reiciendis",
                                        "repellat": "nulla",
                                        "laborum": "natus",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("accusamus"),
                        },
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityUnknown.ToPointer(),
                            DefaultValue: sdk.String("nisi"),
                            JSONName: sdk.String("rerum"),
                            Kind: shared.FieldKindEnumTypeSint32.ToPointer(),
                            Name: sdk.String("Kyle Leffler"),
                            Number: sdk.Int(786860),
                            OneofIndex: sdk.Int(120277),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Mr. Scott Torp"),
                                    Value: map[string]interface{}{
                                        "rem": "perferendis",
                                        "facilis": "reiciendis",
                                        "a": "iste",
                                        "dicta": "quos",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Eleanor Gleason"),
                                    Value: map[string]interface{}{
                                        "consequuntur": "assumenda",
                                        "vero": "doloribus",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Gregg Torp"),
                                    Value: map[string]interface{}{
                                        "sint": "nihil",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Charlene Kuhic"),
                                    Value: map[string]interface{}{
                                        "neque": "corporis",
                                        "voluptas": "consequuntur",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("officia"),
                        },
                        shared.Field{
                            Cardinality: shared.FieldCardinalityEnumCardinalityOptional.ToPointer(),
                            DefaultValue: sdk.String("distinctio"),
                            JSONName: sdk.String("eius"),
                            Kind: shared.FieldKindEnumTypeDouble.ToPointer(),
                            Name: sdk.String("Emilio Barton"),
                            Number: sdk.Int(206063),
                            OneofIndex: sdk.Int(816365),
                            Options: []shared.Option{
                                shared.Option{
                                    Name: sdk.String("Domingo Stark"),
                                    Value: map[string]interface{}{
                                        "vitae": "nesciunt",
                                    },
                                },
                                shared.Option{
                                    Name: sdk.String("Joshua Zulauf"),
                                    Value: map[string]interface{}{
                                        "unde": "incidunt",
                                        "explicabo": "ipsam",
                                        "cupiditate": "optio",
                                        "alias": "quidem",
                                    },
                                },
                            },
                            Packed: sdk.Bool(false),
                            TypeURL: sdk.String("nesciunt"),
                        },
                    },
                    Name: sdk.String("Jeannie Cruickshank"),
                    Oneofs: []string{
                        "sint",
                        "ut",
                        "numquam",
                    },
                    Options: []shared.Option{
                        shared.Option{
                            Name: sdk.String("Pam Kirlin"),
                            Value: map[string]interface{}{
                                "ab": "beatae",
                                "hic": "nisi",
                                "quisquam": "dolor",
                                "ducimus": "fuga",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Julie Davis"),
                            Value: map[string]interface{}{
                                "adipisci": "praesentium",
                                "dolor": "exercitationem",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Mrs. Johnathan Russel"),
                            Value: map[string]interface{}{
                                "amet": "deserunt",
                            },
                        },
                        shared.Option{
                            Name: sdk.String("Sally Schmidt"),
                            Value: map[string]interface{}{
                                "enim": "doloribus",
                                "assumenda": "officiis",
                                "architecto": "alias",
                                "culpa": "ipsa",
                            },
                        },
                    },
                    SourceContext: &shared.SourceContext{
                        FileName: sdk.String("nobis"),
                    },
                    Syntax: shared.TypeSyntaxEnumSyntaxEditions.ToPointer(),
                },
            },
            Usage: &shared.Usage{
                ProducerNotificationChannel: sdk.String("quia"),
                Requirements: []string{
                    "vel",
                },
                Rules: []shared.UsageRule{
                    shared.UsageRule{
                        AllowUnregisteredCalls: sdk.Bool(false),
                        Selector: sdk.String("debitis"),
                        SkipServiceControl: sdk.Bool(false),
                    },
                    shared.UsageRule{
                        AllowUnregisteredCalls: sdk.Bool(false),
                        Selector: sdk.String("ullam"),
                        SkipServiceControl: sdk.Bool(false),
                    },
                    shared.UsageRule{
                        AllowUnregisteredCalls: sdk.Bool(false),
                        Selector: sdk.String("architecto"),
                        SkipServiceControl: sdk.Bool(false),
                    },
                },
            },
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("provident"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        ServiceName: "quod",
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.ServicemanagementServicesConfigsCreateSecurity{
        Option1: &operations.ServicemanagementServicesConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## ServicemanagementServicesConfigsGet

Gets a service configuration (version) for a managed service.

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
    res, err := s.Services.ServicemanagementServicesConfigsGet(ctx, operations.ServicemanagementServicesConfigsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        ConfigID: "sed",
        Fields: sdk.String("odio"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        ServiceName: "doloribus",
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("quidem"),
        View: operations.ServicemanagementServicesConfigsGetViewEnumFull.ToPointer(),
    }, operations.ServicemanagementServicesConfigsGetSecurity{
        Option1: &operations.ServicemanagementServicesConfigsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## ServicemanagementServicesConfigsList

Lists the history of the service configuration for a managed service, from the newest to the oldest.

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
    res, err := s.Services.ServicemanagementServicesConfigsList(ctx, operations.ServicemanagementServicesConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("aspernatur"),
        PageSize: sdk.Int64(725784),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        ServiceName: "recusandae",
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("id"),
    }, operations.ServicemanagementServicesConfigsListSecurity{
        Option1: &operations.ServicemanagementServicesConfigsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceConfigsResponse != nil {
        // handle response
    }
}
```

## ServicemanagementServicesConfigsSubmit

Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation

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
    res, err := s.Services.ServicemanagementServicesConfigsSubmit(ctx, operations.ServicemanagementServicesConfigsSubmitRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SubmitConfigSourceRequest: &shared.SubmitConfigSourceRequest{
            ConfigSource: &shared.ConfigSource{
                Files: []shared.ConfigFile{
                    shared.ConfigFile{
                        FileContents: sdk.String("quo"),
                        FilePath: sdk.String("nesciunt"),
                        FileType: shared.ConfigFileFileTypeEnumProtoFile.ToPointer(),
                    },
                    shared.ConfigFile{
                        FileContents: sdk.String("nemo"),
                        FilePath: sdk.String("illum"),
                        FileType: shared.ConfigFileFileTypeEnumFileDescriptorSetProto.ToPointer(),
                    },
                },
                ID: sdk.String("3adebd5d-aea4-4c50-aa8a-a94c02644cf5"),
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("error"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        ServiceName: "esse",
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.ServicemanagementServicesConfigsSubmitSecurity{
        Option1: &operations.ServicemanagementServicesConfigsSubmitSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicemanagementServicesConsumersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Services.ServicemanagementServicesConsumersGetIamPolicy(ctx, operations.ServicemanagementServicesConsumersGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(773659),
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        Resource: "necessitatibus",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.ServicemanagementServicesConsumersGetIamPolicySecurity{
        Option1: &operations.ServicemanagementServicesConsumersGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ServicemanagementServicesConsumersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Services.ServicemanagementServicesConsumersSetIamPolicy(ctx, operations.ServicemanagementServicesConsumersSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "blanditiis",
                                    "quae",
                                    "magni",
                                    "officiis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "impedit",
                                    "ipsa",
                                    "excepturi",
                                    "a",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "maiores",
                                    "alias",
                                    "asperiores",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("dicta"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("earum"),
                            Expression: sdk.String("doloribus"),
                            Location: sdk.String("velit"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "in",
                            "eligendi",
                        },
                        Role: sdk.String("quasi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("neque"),
                            Expression: sdk.String("vero"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "impedit",
                        },
                        Role: sdk.String("beatae"),
                    },
                },
                Etag: sdk.String("incidunt"),
                Version: sdk.Int(116558),
            },
            UpdateMask: sdk.String("odit"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("error"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        Resource: "laboriosam",
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("quas"),
    }, operations.ServicemanagementServicesConsumersSetIamPolicySecurity{
        Option1: &operations.ServicemanagementServicesConsumersSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ServicemanagementServicesConsumersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Services.ServicemanagementServicesConsumersTestIamPermissions(ctx, operations.ServicemanagementServicesConsumersTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quae",
                "similique",
            },
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        Resource: "nesciunt",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("quis"),
    }, operations.ServicemanagementServicesConsumersTestIamPermissionsSecurity{
        Option1: &operations.ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## ServicemanagementServicesCreate

Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation

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
    res, err := s.Services.ServicemanagementServicesCreate(ctx, operations.ServicemanagementServicesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ManagedService: &shared.ManagedService{
            ProducerProjectID: sdk.String("aliquam"),
            ServiceName: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.ServicemanagementServicesCreateSecurity{
        Option1: &operations.ServicemanagementServicesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicemanagementServicesDelete

Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation

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
    res, err := s.Services.ServicemanagementServicesDelete(ctx, operations.ServicemanagementServicesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("a"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        ServiceName: "dicta",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.ServicemanagementServicesDeleteSecurity{
        Option1: &operations.ServicemanagementServicesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicemanagementServicesGenerateConfigReport

Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.

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
    res, err := s.Services.ServicemanagementServicesGenerateConfigReport(ctx, operations.ServicemanagementServicesGenerateConfigReportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateConfigReportRequest: &shared.GenerateConfigReportRequest{
            NewConfig: map[string]interface{}{
                "tempore": "quidem",
                "modi": "voluptates",
                "fugit": "eius",
                "sequi": "eligendi",
            },
            OldConfig: map[string]interface{}{
                "esse": "blanditiis",
                "sint": "repellat",
                "a": "animi",
                "maiores": "itaque",
            },
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("velit"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("eum"),
    }, operations.ServicemanagementServicesGenerateConfigReportSecurity{
        Option1: &operations.ServicemanagementServicesGenerateConfigReportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateConfigReportResponse != nil {
        // handle response
    }
}
```

## ServicemanagementServicesGet

Gets a managed service. Authentication is required unless the service is public.

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
    res, err := s.Services.ServicemanagementServicesGet(ctx, operations.ServicemanagementServicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        ServiceName: "eos",
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("natus"),
    }, operations.ServicemanagementServicesGetSecurity{
        Option1: &operations.ServicemanagementServicesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedService != nil {
        // handle response
    }
}
```

## ServicemanagementServicesGetConfig

Gets a service configuration (version) for a managed service.

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
    res, err := s.Services.ServicemanagementServicesGetConfig(ctx, operations.ServicemanagementServicesGetConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        ConfigID: sdk.String("quod"),
        Fields: sdk.String("quos"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        ServiceName: "amet",
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("modi"),
        View: operations.ServicemanagementServicesGetConfigViewEnumBasic.ToPointer(),
    }, operations.ServicemanagementServicesGetConfigSecurity{
        Option1: &operations.ServicemanagementServicesGetConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## ServicemanagementServicesList

Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.

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
    res, err := s.Services.ServicemanagementServicesList(ctx, operations.ServicemanagementServicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        ConsumerID: sdk.String("sunt"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("odit"),
        PageSize: sdk.Int64(936845),
        PageToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        ProducerProjectID: sdk.String("ipsam"),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("veniam"),
    }, operations.ServicemanagementServicesListSecurity{
        Option1: &operations.ServicemanagementServicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## ServicemanagementServicesRolloutsCreate

Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation

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
    res, err := s.Services.ServicemanagementServicesRolloutsCreate(ctx, operations.ServicemanagementServicesRolloutsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Rollout: &shared.Rollout{
            CreateTime: sdk.String("ad"),
            CreatedBy: sdk.String("nisi"),
            DeleteServiceStrategy: map[string]interface{}{
                "quis": "quibusdam",
                "nemo": "suscipit",
                "pariatur": "sit",
                "quidem": "repellendus",
            },
            RolloutID: sdk.String("perferendis"),
            ServiceName: sdk.String("id"),
            Status: shared.RolloutStatusEnumFailedRolledBack.ToPointer(),
            TrafficPercentStrategy: &shared.TrafficPercentStrategy{
                Percentages: map[string]float64{
                    "possimus": 9960.72,
                },
            },
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        ServiceName: "iure",
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("minus"),
    }, operations.ServicemanagementServicesRolloutsCreateSecurity{
        Option1: &operations.ServicemanagementServicesRolloutsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicemanagementServicesRolloutsGet

Gets a service configuration rollout.

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
    res, err := s.Services.ServicemanagementServicesRolloutsGet(ctx, operations.ServicemanagementServicesRolloutsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        RolloutID: "mollitia",
        ServiceName: "accusamus",
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.ServicemanagementServicesRolloutsGetSecurity{
        Option1: &operations.ServicemanagementServicesRolloutsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Rollout != nil {
        // handle response
    }
}
```

## ServicemanagementServicesRolloutsList

Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.

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
    res, err := s.Services.ServicemanagementServicesRolloutsList(ctx, operations.ServicemanagementServicesRolloutsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("aliquid"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("magni"),
        PageSize: sdk.Int64(273677),
        PageToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        ServiceName: "rerum",
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.ServicemanagementServicesRolloutsListSecurity{
        Option1: &operations.ServicemanagementServicesRolloutsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceRolloutsResponse != nil {
        // handle response
    }
}
```

## ServicemanagementServicesUndelete

Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

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
    res, err := s.Services.ServicemanagementServicesUndelete(ctx, operations.ServicemanagementServicesUndeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("quos"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        ServiceName: "corporis",
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("illo"),
    }, operations.ServicemanagementServicesUndeleteSecurity{
        Option1: &operations.ServicemanagementServicesUndeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
