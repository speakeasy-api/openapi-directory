# Projects

### Available Operations

* [RecaptchaenterpriseProjectsAssessmentsAnnotate](#recaptchaenterpriseprojectsassessmentsannotate) - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* [RecaptchaenterpriseProjectsAssessmentsCreate](#recaptchaenterpriseprojectsassessmentscreate) - Creates an Assessment of the likelihood an event is legitimate.
* [RecaptchaenterpriseProjectsFirewallpoliciesCreate](#recaptchaenterpriseprojectsfirewallpoliciescreate) - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* [RecaptchaenterpriseProjectsFirewallpoliciesList](#recaptchaenterpriseprojectsfirewallpolicieslist) - Returns the list of all firewall policies that belong to a project.
* [RecaptchaenterpriseProjectsKeysCreate](#recaptchaenterpriseprojectskeyscreate) - Creates a new reCAPTCHA Enterprise key.
* [RecaptchaenterpriseProjectsKeysDelete](#recaptchaenterpriseprojectskeysdelete) - Deletes the specified key.
* [RecaptchaenterpriseProjectsKeysGetMetrics](#recaptchaenterpriseprojectskeysgetmetrics) - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* [RecaptchaenterpriseProjectsKeysList](#recaptchaenterpriseprojectskeyslist) - Returns the list of all keys that belong to a project.
* [RecaptchaenterpriseProjectsKeysMigrate](#recaptchaenterpriseprojectskeysmigrate) - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* [RecaptchaenterpriseProjectsKeysPatch](#recaptchaenterpriseprojectskeyspatch) - Updates the specified key.
* [RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKey](#recaptchaenterpriseprojectskeysretrievelegacysecretkey) - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* [RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch](#recaptchaenterpriseprojectsrelatedaccountgroupmembershipssearch) - Search group memberships related to a given account.
* [RecaptchaenterpriseProjectsRelatedaccountgroupsList](#recaptchaenterpriseprojectsrelatedaccountgroupslist) - List groups of related accounts.
* [RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList](#recaptchaenterpriseprojectsrelatedaccountgroupsmembershipslist) - Get memberships in a group of related accounts.

## RecaptchaenterpriseProjectsAssessmentsAnnotate

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsAnnotate(ctx, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnumPasswordIncorrect.ToPointer(),
            HashedAccountID: sdk.String("ab"),
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumChargeback,
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumInitiatedTwoFactor,
            },
            TransactionEvent: &shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent{
                EventTime: sdk.String("perferendis"),
                EventType: shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnumPaymentCapture.ToPointer(),
                Reason: sdk.String("repellendus"),
                Value: sdk.Float64(9571.56),
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        Name: "Bernadette Schmidt",
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("nam"),
    }, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsAssessmentsCreate

Creates an Assessment of the likelihood an event is legitimate.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsCreate(ctx, operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1AssessmentInput: &shared.GoogleCloudRecaptchaenterpriseV1AssessmentInput{
            AccountDefenderAssessment: &shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment{
                Labels: []shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum{
                    shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnumAccountDefenderLabelUnspecified,
                    shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnumSuspiciousLoginActivity,
                    shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnumRelatedAccountsNumberHigh,
                },
            },
            AccountVerification: &shared.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput{
                Endpoints: []shared.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput{
                    shared.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput{
                        EmailAddress: sdk.String("totam"),
                        PhoneNumber: sdk.String("beatae"),
                    },
                    shared.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput{
                        EmailAddress: sdk.String("commodi"),
                        PhoneNumber: sdk.String("molestiae"),
                    },
                    shared.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput{
                        EmailAddress: sdk.String("modi"),
                        PhoneNumber: sdk.String("qui"),
                    },
                    shared.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput{
                        EmailAddress: sdk.String("impedit"),
                        PhoneNumber: sdk.String("cum"),
                    },
                },
                LanguageCode: sdk.String("esse"),
                Username: sdk.String("Cullen1"),
            },
            Event: &shared.GoogleCloudRecaptchaenterpriseV1Event{
                ExpectedAction: sdk.String("ad"),
                Express: sdk.Bool(false),
                FirewallPolicyEvaluation: sdk.Bool(false),
                HashedAccountID: sdk.String("natus"),
                Headers: []string{
                    "iste",
                },
                Ja3: sdk.String("dolor"),
                RequestedURI: sdk.String("natus"),
                SiteKey: sdk.String("laboriosam"),
                Token: sdk.String("hic"),
                TransactionData: &shared.GoogleCloudRecaptchaenterpriseV1TransactionData{
                    BillingAddress: &shared.GoogleCloudRecaptchaenterpriseV1TransactionDataAddress{
                        Address: []string{
                            "fuga",
                            "in",
                            "corporis",
                            "iste",
                        },
                        AdministrativeArea: sdk.String("iure"),
                        Locality: sdk.String("saepe"),
                        PostalCode: sdk.String("00966-6123"),
                        Recipient: sdk.String("explicabo"),
                        RegionCode: sdk.String("nobis"),
                    },
                    CardBin: sdk.String("enim"),
                    CardLastFour: sdk.String("omnis"),
                    CurrencyCode: sdk.String("nemo"),
                    GatewayInfo: &shared.GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo{
                        AvsResponseCode: sdk.String("minima"),
                        CvvResponseCode: sdk.String("excepturi"),
                        GatewayResponseCode: sdk.String("accusantium"),
                        Name: sdk.String("Cecilia Yundt MD"),
                    },
                    Items: []shared.GoogleCloudRecaptchaenterpriseV1TransactionDataItem{
                        shared.GoogleCloudRecaptchaenterpriseV1TransactionDataItem{
                            MerchantAccountID: sdk.String("culpa"),
                            Name: sdk.String("Jaime O'Hara"),
                            Quantity: sdk.String("commodi"),
                            Value: sdk.Float64(4663.11),
                        },
                    },
                    Merchants: []shared.GoogleCloudRecaptchaenterpriseV1TransactionDataUser{
                        shared.GoogleCloudRecaptchaenterpriseV1TransactionDataUser{
                            AccountID: sdk.String("velit"),
                            CreationMs: sdk.String("error"),
                            Email: sdk.String("Eugene_Brown31@gmail.com"),
                            EmailVerified: sdk.Bool(false),
                            PhoneNumber: sdk.String("odit"),
                            PhoneVerified: sdk.Bool(false),
                        },
                        shared.GoogleCloudRecaptchaenterpriseV1TransactionDataUser{
                            AccountID: sdk.String("quo"),
                            CreationMs: sdk.String("sequi"),
                            Email: sdk.String("Freida.Ondricka9@hotmail.com"),
                            EmailVerified: sdk.Bool(false),
                            PhoneNumber: sdk.String("error"),
                            PhoneVerified: sdk.Bool(false),
                        },
                    },
                    PaymentMethod: sdk.String("temporibus"),
                    ShippingAddress: &shared.GoogleCloudRecaptchaenterpriseV1TransactionDataAddress{
                        Address: []string{
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        AdministrativeArea: sdk.String("vero"),
                        Locality: sdk.String("nihil"),
                        PostalCode: sdk.String("90647-0042"),
                        Recipient: sdk.String("maiores"),
                        RegionCode: sdk.String("dicta"),
                    },
                    ShippingValue: sdk.Float64(3594.44),
                    TransactionID: sdk.String("dolore"),
                    User: &shared.GoogleCloudRecaptchaenterpriseV1TransactionDataUser{
                        AccountID: sdk.String("iusto"),
                        CreationMs: sdk.String("dicta"),
                        Email: sdk.String("Emilie_Thompson@hotmail.com"),
                        EmailVerified: sdk.Bool(false),
                        PhoneNumber: sdk.String("quae"),
                        PhoneVerified: sdk.Bool(false),
                    },
                    Value: sdk.Float64(2168.22),
                },
                UserAgent: sdk.String("quidem"),
                UserIPAddress: sdk.String("molestias"),
                WafTokenAssessment: sdk.Bool(false),
            },
            FirewallPolicyAssessment: &shared.GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment{
                Error: &shared.GoogleRPCStatus{
                    Code: sdk.Int(566602),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "praesentium": "rem",
                            "voluptates": "quasi",
                        },
                        map[string]interface{}{
                            "sint": "veritatis",
                            "itaque": "incidunt",
                            "enim": "consequatur",
                            "est": "quibusdam",
                        },
                        map[string]interface{}{
                            "deserunt": "distinctio",
                        },
                        map[string]interface{}{
                            "labore": "modi",
                            "qui": "aliquid",
                            "cupiditate": "quos",
                            "perferendis": "magni",
                        },
                    },
                    Message: sdk.String("assumenda"),
                },
                FirewallPolicy: &shared.GoogleCloudRecaptchaenterpriseV1FirewallPolicy{
                    Actions: []shared.GoogleCloudRecaptchaenterpriseV1FirewallAction{
                        shared.GoogleCloudRecaptchaenterpriseV1FirewallAction{
                            Allow: map[string]interface{}{
                                "fugit": "dolorum",
                            },
                            Block: map[string]interface{}{
                                "tempora": "facilis",
                                "tempore": "labore",
                                "delectus": "eum",
                            },
                            Redirect: map[string]interface{}{
                                "eligendi": "sint",
                            },
                            SetHeader: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction{
                                Key: sdk.String("aliquid"),
                                Value: sdk.String("provident"),
                            },
                            Substitute: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction{
                                Path: sdk.String("necessitatibus"),
                            },
                        },
                        shared.GoogleCloudRecaptchaenterpriseV1FirewallAction{
                            Allow: map[string]interface{}{
                                "officia": "dolor",
                                "debitis": "a",
                                "dolorum": "in",
                            },
                            Block: map[string]interface{}{
                                "illum": "maiores",
                                "rerum": "dicta",
                            },
                            Redirect: map[string]interface{}{
                                "cumque": "facere",
                                "ea": "aliquid",
                            },
                            SetHeader: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction{
                                Key: sdk.String("laborum"),
                                Value: sdk.String("accusamus"),
                            },
                            Substitute: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction{
                                Path: sdk.String("non"),
                            },
                        },
                    },
                    Condition: sdk.String("occaecati"),
                    Description: sdk.String("enim"),
                    Name: sdk.String("Toby Pouros"),
                    Path: sdk.String("id"),
                },
            },
            FraudPreventionAssessment: &shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment{
                BehavioralTrustVerdict: &shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict{
                    Trust: sdk.Float32(5013.24),
                },
                CardTestingVerdict: &shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict{
                    Risk: sdk.Float32(5332.06),
                },
                StolenInstrumentVerdict: &shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict{
                    Risk: sdk.Float32(9560.84),
                },
                TransactionRisk: sdk.Float32(2305.33),
            },
            PrivatePasswordLeakVerification: &shared.GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput{
                EncryptedUserCredentialsHash: sdk.String("deserunt"),
                LookupHashPrefix: sdk.String("nisi"),
            },
            RiskAnalysis: &shared.GoogleCloudRecaptchaenterpriseV1RiskAnalysis{
                ExtendedVerdictReasons: []string{
                    "natus",
                    "omnis",
                },
                Reasons: []shared.GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum{
                    shared.GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumClassificationReasonUnspecified,
                    shared.GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumTooMuchTraffic,
                },
                Score: sdk.Float32(3015.75),
            },
            TokenProperties: &shared.GoogleCloudRecaptchaenterpriseV1TokenProperties{
                Action: sdk.String("distinctio"),
                AndroidPackageName: sdk.String("id"),
                CreateTime: sdk.String("labore"),
                Hostname: sdk.String("flawed-gherkin.name"),
                InvalidReason: shared.GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumMissing.ToPointer(),
                IosBundleID: sdk.String("eum"),
                Valid: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("excepturi"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
    }, operations.RecaptchaenterpriseProjectsAssessmentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1Assessment != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsFirewallpoliciesCreate

Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsFirewallpoliciesCreate(ctx, operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1FirewallPolicy: &shared.GoogleCloudRecaptchaenterpriseV1FirewallPolicy{
            Actions: []shared.GoogleCloudRecaptchaenterpriseV1FirewallAction{
                shared.GoogleCloudRecaptchaenterpriseV1FirewallAction{
                    Allow: map[string]interface{}{
                        "mollitia": "ad",
                        "eum": "dolor",
                        "necessitatibus": "odit",
                        "nemo": "quasi",
                    },
                    Block: map[string]interface{}{
                        "doloribus": "debitis",
                        "eius": "maxime",
                    },
                    Redirect: map[string]interface{}{
                        "facilis": "in",
                        "architecto": "architecto",
                        "repudiandae": "ullam",
                    },
                    SetHeader: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction{
                        Key: sdk.String("expedita"),
                        Value: sdk.String("nihil"),
                    },
                    Substitute: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction{
                        Path: sdk.String("repellat"),
                    },
                },
                shared.GoogleCloudRecaptchaenterpriseV1FirewallAction{
                    Allow: map[string]interface{}{
                        "sed": "saepe",
                        "pariatur": "accusantium",
                        "consequuntur": "praesentium",
                        "natus": "magni",
                    },
                    Block: map[string]interface{}{
                        "quo": "illum",
                    },
                    Redirect: map[string]interface{}{
                        "maxime": "ea",
                        "excepturi": "odit",
                        "ea": "accusantium",
                        "ab": "maiores",
                    },
                    SetHeader: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction{
                        Key: sdk.String("quidem"),
                        Value: sdk.String("ipsam"),
                    },
                    Substitute: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction{
                        Path: sdk.String("voluptate"),
                    },
                },
                shared.GoogleCloudRecaptchaenterpriseV1FirewallAction{
                    Allow: map[string]interface{}{
                        "nam": "eaque",
                        "pariatur": "nemo",
                    },
                    Block: map[string]interface{}{
                        "perferendis": "fugiat",
                        "amet": "aut",
                        "cumque": "corporis",
                        "hic": "libero",
                    },
                    Redirect: map[string]interface{}{
                        "dolores": "quis",
                        "totam": "dignissimos",
                        "eaque": "quis",
                    },
                    SetHeader: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction{
                        Key: sdk.String("nesciunt"),
                        Value: sdk.String("eos"),
                    },
                    Substitute: &shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction{
                        Path: sdk.String("perferendis"),
                    },
                },
            },
            Condition: sdk.String("dolores"),
            Description: sdk.String("minus"),
            Name: sdk.String("Rosa Swift"),
            Path: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1FirewallPolicy != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsFirewallpoliciesList

Returns the list of all firewall policies that belong to a project.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsFirewallpoliciesList(ctx, operations.RecaptchaenterpriseProjectsFirewallpoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("modi"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(535633),
        PageToken: sdk.String("pariatur"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.RecaptchaenterpriseProjectsFirewallpoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsKeysCreate

Creates a new reCAPTCHA Enterprise key.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsKeysCreate(ctx, operations.RecaptchaenterpriseProjectsKeysCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1KeyInput: &shared.GoogleCloudRecaptchaenterpriseV1KeyInput{
            AndroidSettings: &shared.GoogleCloudRecaptchaenterpriseV1AndroidKeySettings{
                AllowAllPackageNames: sdk.Bool(false),
                AllowedPackageNames: []string{
                    "aliquid",
                    "dolorem",
                    "dolorem",
                },
                SupportNonGoogleAppStoreDistribution: sdk.Bool(false),
            },
            DisplayName: sdk.String("dolor"),
            IosSettings: &shared.GoogleCloudRecaptchaenterpriseV1IOSKeySettings{
                AllowAllBundleIds: sdk.Bool(false),
                AllowedBundleIds: []string{
                    "ipsum",
                },
            },
            Labels: map[string]string{
                "excepturi": "cum",
                "voluptate": "dignissimos",
                "reiciendis": "amet",
                "dolorum": "numquam",
            },
            Name: sdk.String("Melissa Bednar"),
            TestingOptions: &shared.GoogleCloudRecaptchaenterpriseV1TestingOptions{
                TestingChallenge: shared.GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnumTestingChallengeUnspecified.ToPointer(),
                TestingScore: sdk.Float32(8810.05),
            },
            WafSettings: &shared.GoogleCloudRecaptchaenterpriseV1WafSettings{
                WafFeature: shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnumActionToken.ToPointer(),
                WafService: shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnumFastly.ToPointer(),
            },
            WebSettings: &shared.GoogleCloudRecaptchaenterpriseV1WebKeySettings{
                AllowAllDomains: sdk.Bool(false),
                AllowAmpTraffic: sdk.Bool(false),
                AllowedDomains: []string{
                    "natus",
                    "eos",
                },
                ChallengeSecurityPreference: shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnumBalance.ToPointer(),
                IntegrationType: shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnumIntegrationTypeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("voluptate"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.RecaptchaenterpriseProjectsKeysCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1Key != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsKeysDelete

Deletes the specified key.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsKeysDelete(ctx, operations.RecaptchaenterpriseProjectsKeysDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        Name: "Mrs. Ray Collins",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.RecaptchaenterpriseProjectsKeysDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsKeysGetMetrics

Get some aggregated metrics for a Key. This data can be used to build dashboards.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsKeysGetMetrics(ctx, operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("totam"),
        Key: sdk.String("similique"),
        Name: "Cristina Hahn",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.RecaptchaenterpriseProjectsKeysGetMetricsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1Metrics != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsKeysList

Returns the list of all keys that belong to a project.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsKeysList(ctx, operations.RecaptchaenterpriseProjectsKeysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("tenetur"),
        PageSize: sdk.Int64(229442),
        PageToken: sdk.String("tempore"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.RecaptchaenterpriseProjectsKeysListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1ListKeysResponse != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsKeysMigrate

Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsKeysMigrate(ctx, operations.RecaptchaenterpriseProjectsKeysMigrateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest: &shared.GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest{
            SkipBillingCheck: sdk.Bool(false),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("neque"),
        Name: "Gina Renner",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("qui"),
    }, operations.RecaptchaenterpriseProjectsKeysMigrateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1Key != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsKeysPatch

Updates the specified key.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsKeysPatch(ctx, operations.RecaptchaenterpriseProjectsKeysPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1KeyInput: &shared.GoogleCloudRecaptchaenterpriseV1KeyInput{
            AndroidSettings: &shared.GoogleCloudRecaptchaenterpriseV1AndroidKeySettings{
                AllowAllPackageNames: sdk.Bool(false),
                AllowedPackageNames: []string{
                    "pariatur",
                    "soluta",
                    "dicta",
                    "laborum",
                },
                SupportNonGoogleAppStoreDistribution: sdk.Bool(false),
            },
            DisplayName: sdk.String("totam"),
            IosSettings: &shared.GoogleCloudRecaptchaenterpriseV1IOSKeySettings{
                AllowAllBundleIds: sdk.Bool(false),
                AllowedBundleIds: []string{
                    "aspernatur",
                    "dolores",
                },
            },
            Labels: map[string]string{
                "facilis": "aliquid",
                "quam": "molestias",
                "temporibus": "qui",
            },
            Name: sdk.String("Beverly Cummerata II"),
            TestingOptions: &shared.GoogleCloudRecaptchaenterpriseV1TestingOptions{
                TestingChallenge: shared.GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnumUnsolvableChallenge.ToPointer(),
                TestingScore: sdk.Float32(9404.32),
            },
            WafSettings: &shared.GoogleCloudRecaptchaenterpriseV1WafSettings{
                WafFeature: shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnumWafFeatureUnspecified.ToPointer(),
                WafService: shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnumFastly.ToPointer(),
            },
            WebSettings: &shared.GoogleCloudRecaptchaenterpriseV1WebKeySettings{
                AllowAllDomains: sdk.Bool(false),
                AllowAmpTraffic: sdk.Bool(false),
                AllowedDomains: []string{
                    "nobis",
                    "et",
                    "saepe",
                },
                ChallengeSecurityPreference: shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnumChallengeSecurityPreferenceUnspecified.ToPointer(),
                IntegrationType: shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnumIntegrationTypeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("aperiam"),
        Name: "Mike Greenholt",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UpdateMask: sdk.String("quae"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quas"),
    }, operations.RecaptchaenterpriseProjectsKeysPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1Key != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKey

Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKey(ctx, operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("porro"),
        Key: "doloribus",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("qui"),
    }, operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch

Search group memberships related to a given account.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch(ctx, operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest: &shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest{
            HashedAccountID: sdk.String("laudantium"),
            PageSize: sdk.Int(485628),
            PageToken: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        Project: "delectus",
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("vero"),
    }, operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsRelatedaccountgroupsList

List groups of related accounts.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsRelatedaccountgroupsList(ctx, operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quod"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("similique"),
        PageSize: sdk.Int64(708548),
        PageToken: sdk.String("vero"),
        Parent: "ducimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("illum"),
    }, operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse != nil {
        // handle response
    }
}
```

## RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList

Get memberships in a group of related accounts.

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
    res, err := s.Projects.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList(ctx, operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("nulla"),
        PageSize: sdk.Int64(148141),
        PageToken: sdk.String("porro"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse != nil {
        // handle response
    }
}
```
