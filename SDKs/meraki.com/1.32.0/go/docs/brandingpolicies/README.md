# BrandingPolicies

### Available Operations

* [CreateOrganizationBrandingPolicy](#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [DeleteOrganizationBrandingPolicy](#deleteorganizationbrandingpolicy) - Delete a branding policy
* [GetOrganizationBrandingPolicies](#getorganizationbrandingpolicies) - List the branding policies of an organization
* [GetOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [GetOrganizationBrandingPolicy](#getorganizationbrandingpolicy) - Return a branding policy
* [UpdateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [UpdateOrganizationBrandingPolicy](#updateorganizationbrandingpolicy) - Update a branding policy

## CreateOrganizationBrandingPolicy

Add a new branding policy to an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BrandingPolicies.CreateOrganizationBrandingPolicy(ctx, operations.CreateOrganizationBrandingPolicyRequest{
        RequestBody: &operations.CreateOrganizationBrandingPolicyRequestBody{
            AdminSettings: &operations.CreateOrganizationBrandingPolicyRequestBodyAdminSettings{
                AppliesTo: operations.CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllAdmins.ToPointer(),
                Values: []string{
                    "cum",
                    "id",
                },
            },
            CustomLogo: &operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogo{
                Enabled: sdk.Bool(false),
                Image: &operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage{
                    Contents: sdk.String("possimus"),
                    Format: operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnumGif.ToPointer(),
                },
            },
            Enabled: sdk.Bool(false),
            HelpSettings: &operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettings{
                APIDocsSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumHide.ToPointer(),
                CasesSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumHide.ToPointer(),
                CiscoMerakiProductDocumentation: sdk.String("sequi"),
                CommunitySubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumHide.ToPointer(),
                DataProtectionRequestsSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumDefaultOrInherit.ToPointer(),
                FirewallInfoSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumHide.ToPointer(),
                GetHelpSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumShow.ToPointer(),
                GetHelpSubtabKnowledgeBaseSearch: sdk.String("tempora"),
                HardwareReplacementsSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumHide.ToPointer(),
                HelpTab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumDefaultOrInherit.ToPointer(),
                HelpWidget: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnumShow.ToPointer(),
                NewFeaturesSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumDefaultOrInherit.ToPointer(),
                SmForums: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumShow.ToPointer(),
                SupportContactInfo: sdk.String("possimus"),
                UniversalSearchKnowledgeBaseSearch: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumDefaultOrInherit.ToPointer(),
            },
            Name: sdk.String("Elvira Hessel"),
        },
        OrganizationID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationBrandingPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationBrandingPolicy

Delete a branding policy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BrandingPolicies.DeleteOrganizationBrandingPolicy(ctx, operations.DeleteOrganizationBrandingPolicyRequest{
        BrandingPolicyID: "blanditiis",
        OrganizationID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationBrandingPolicies

List the branding policies of an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BrandingPolicies.GetOrganizationBrandingPolicies(ctx, operations.GetOrganizationBrandingPoliciesRequest{
        OrganizationID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationBrandingPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationBrandingPoliciesPriorities

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BrandingPolicies.GetOrganizationBrandingPoliciesPriorities(ctx, operations.GetOrganizationBrandingPoliciesPrioritiesRequest{
        OrganizationID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationBrandingPolicy

Return a branding policy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BrandingPolicies.GetOrganizationBrandingPolicy(ctx, operations.GetOrganizationBrandingPolicyRequest{
        BrandingPolicyID: "autem",
        OrganizationID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationBrandingPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationBrandingPoliciesPriorities

Update the priority ordering of an organization's branding policies.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BrandingPolicies.UpdateOrganizationBrandingPoliciesPriorities(ctx, operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest{
        RequestBody: &operations.UpdateOrganizationBrandingPoliciesPrioritiesRequestBody{
            BrandingPolicyIds: []string{
                "animi",
                "provident",
                "beatae",
            },
        },
        OrganizationID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationBrandingPolicy

Update a branding policy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BrandingPolicies.UpdateOrganizationBrandingPolicy(ctx, operations.UpdateOrganizationBrandingPolicyRequest{
        RequestBody: &operations.UpdateOrganizationBrandingPolicyRequestBody{
            AdminSettings: &operations.UpdateOrganizationBrandingPolicyRequestBodyAdminSettings{
                AppliesTo: operations.UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllNetworkAdmins.ToPointer(),
                Values: []string{
                    "assumenda",
                    "quo",
                    "fuga",
                },
            },
            CustomLogo: &operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogo{
                Enabled: sdk.Bool(false),
                Image: &operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage{
                    Contents: sdk.String("tempore"),
                    Format: operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnumJpg.ToPointer(),
                },
            },
            Enabled: sdk.Bool(false),
            HelpSettings: &operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettings{
                APIDocsSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumDefaultOrInherit.ToPointer(),
                CasesSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumHide.ToPointer(),
                CiscoMerakiProductDocumentation: sdk.String("voluptate"),
                CommunitySubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumHide.ToPointer(),
                DataProtectionRequestsSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumHide.ToPointer(),
                FirewallInfoSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumHide.ToPointer(),
                GetHelpSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumHide.ToPointer(),
                GetHelpSubtabKnowledgeBaseSearch: sdk.String("accusamus"),
                HardwareReplacementsSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumDefaultOrInherit.ToPointer(),
                HelpTab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumShow.ToPointer(),
                HelpWidget: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnumShow.ToPointer(),
                NewFeaturesSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumDefaultOrInherit.ToPointer(),
                SmForums: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumDefaultOrInherit.ToPointer(),
                SupportContactInfo: sdk.String("qui"),
                UniversalSearchKnowledgeBaseSearch: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumDefaultOrInherit.ToPointer(),
            },
            Name: sdk.String("Melody Dickinson"),
        },
        BrandingPolicyID: "illum",
        OrganizationID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationBrandingPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```
