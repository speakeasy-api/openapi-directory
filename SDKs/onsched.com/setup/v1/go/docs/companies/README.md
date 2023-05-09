# Companies

### Available Operations

* [DeleteSetupV1CompaniesDomainsID](#deletesetupv1companiesdomainsid) - Delete Company Domain
* [DeleteSetupV1CompaniesEmailTemplatesMaster](#deletesetupv1companiesemailtemplatesmaster) - Delete Master Template Settings
* [DeleteSetupV1CompaniesRegionsID](#deletesetupv1companiesregionsid) - Delete Region
* [GetSetupV1Companies](#getsetupv1companies) - Get Company
* [GetSetupV1CompaniesDomains](#getsetupv1companiesdomains) - List Company Domains
* [GetSetupV1CompaniesDomainsID](#getsetupv1companiesdomainsid) - Get Company Domain
* [GetSetupV1CompaniesEmailTemplates](#getsetupv1companiesemailtemplates) - List Email Templates
* [GetSetupV1CompaniesEmailTemplatesMaster](#getsetupv1companiesemailtemplatesmaster) - Get Master Template Settings
* [GetSetupV1CompaniesEmailTemplatesTemplateName](#getsetupv1companiesemailtemplatestemplatename) - Get Email Template
* [GetSetupV1CompaniesRegions](#getsetupv1companiesregions) - List Regions
* [GetSetupV1CompaniesRegionsID](#getsetupv1companiesregionsid) - Get Region
* [GetSetupV1CompaniesTimezonesDate](#getsetupv1companiestimezonesdate) - List Time Zones
* [PostSetupV1Companies](#postsetupv1companies) - Create Company
* [PostSetupV1CompaniesDomains](#postsetupv1companiesdomains) - Create Company Domain
* [PostSetupV1CompaniesEmailTemplatesMaster](#postsetupv1companiesemailtemplatesmaster) - Create Master Template Settings
* [PostSetupV1CompaniesRegions](#postsetupv1companiesregions) - Create Region
* [PutSetupV1Companies](#putsetupv1companies) - Update Company
* [PutSetupV1CompaniesDomainsID](#putsetupv1companiesdomainsid) - Update Company Domain
* [PutSetupV1CompaniesRegionsID](#putsetupv1companiesregionsid) - Update Region

## DeleteSetupV1CompaniesDomainsID

<p>Use this endpoint to <b>Delete</b> an OnSchedJs domain from your authorized company. A valid <b>companyDomain id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.DeleteSetupV1CompaniesDomainsID(ctx, operations.DeleteSetupV1CompaniesDomainsIDRequest{
        ID: "6c8dd6b1-4429-4074-b477-8a7bd466d28c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDomainViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. Deleting a custom master email template setting will reactivate the original default OnSched template settings.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.DeleteSetupV1CompaniesEmailTemplatesMaster(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MasterEmailTemplateSettingsViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1CompaniesRegionsID

<p>Use this endpoint to <b>Delete</b> a region object. A valid <b>region id</b> is required. If the region is related to any business locations it won't be deleted. You must first remove any references to region id from the business locations prior to deleting.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.DeleteSetupV1CompaniesRegionsID(ctx, operations.DeleteSetupV1CompaniesRegionsIDRequest{
        ID: "10ab3cdc-a425-4190-8e52-3c7e0bc7178e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1Companies

<p>Use this endpoint to return the <b>Authorized Company</b> information. The company is the main entity that oversees all business locations defined below it, hierarchically. </p>
<p>Access to the company credentials gives you access to all business locations defined in the authorized company. Client credentials resolve to a single company and are purposely hidden from this endpoint.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1Companies(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesDomains

<p>Use this endpoint to return a <b>List of Company Domains</b> for the authorized company. To share the OnSchedJS booking widget on your website or in your application your domain must be listed.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesDomains(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDomainListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesDomainsID

<p>Use this endpoint to return a <b>Company Domain</b> object. A valid <b>companyDomain id</b> is required. </p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesDomainsID(ctx, operations.GetSetupV1CompaniesDomainsIDRequest{
        ID: "4796f2a7-0c68-4828-aaa4-82562f222e98",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDomainViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesEmailTemplates

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized at the Business Location level or Company level. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesEmailTemplates(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailTemplateListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to return the <b>Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesEmailTemplatesMaster(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MasterEmailTemplateSettingsViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesEmailTemplatesTemplateName

<p>Use this endpoint to return the requested <b>Email Template</b>. If it wasn't customized the default template is returned. The response content is in html format. A valid emailTemplate <b>name</b> is required. Find template names by using the: <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>
<p>To create custom company email templates, go to the <i>POST ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint and create a template using the Primary Business Location Id.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesEmailTemplatesTemplateName(ctx, operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest{
        TemplateName: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentResult != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesRegions

<p>Use this endpoint to return a list of <b>Regions</b> in the authorized company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. </p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesRegions(ctx, operations.GetSetupV1CompaniesRegionsRequest{
        Limit: sdk.Int(456911),
        Offset: sdk.Int(910545),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesRegionsID

<p>Use this endpoint to return a <b>Region</b> object. A valid <b>region id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesRegionsID(ctx, operations.GetSetupV1CompaniesRegionsIDRequest{
        ID: "e17cbe61-e6b7-4b95-bc0a-b3c20c4f3789",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CompaniesTimezonesDate

<p>Use this endpoint to return a <b>List of timezone names, timezoneIana and tzOffset values</b> calculated for the date requested. Daylight Savings may or may not apply depending on the date specified.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.GetSetupV1CompaniesTimezonesDate(ctx, operations.GetSetupV1CompaniesTimezonesDateRequest{
        Date: types.MustTimeFromString("2020-06-05T19:02:55.998Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimezoneViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Companies

<p>Use this endpoint to <b>Create</b> a new authorized company.</p>
<p>
  <b>Note: Special API Partner credentials are required to access this endpoint.</b>
</p>
<p>The <b>name, registrationEmail, phone, country</b> and <b>timezoneName</b> are required fields. For <b>country</b> use the standard ISO 3166 2-character country code.</p>
<p>The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>.</p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.PostSetupV1Companies(ctx, shared.CompanyInputModel{
        AddressLine1: sdk.String("quas"),
        AddressLine2: sdk.String("esse"),
        BookingWebhookURL: sdk.String("quasi"),
        City: sdk.String("North Miami"),
        Country: sdk.String("Micronesia"),
        CustomerWebhookURL: sdk.String("pariatur"),
        DisableEmailAndSmsNotifications: sdk.Bool(false),
        Email: sdk.String("Carlotta_Upton8@hotmail.com"),
        Fax: sdk.String("consequuntur"),
        Name: sdk.String("Hattie Nader"),
        NotificationFromEmailAddress: sdk.String("quae"),
        NotificationFromName: sdk.String("earum"),
        Phone: sdk.String("1-527-870-3913 x433"),
        PostalCode: sdk.String("51845"),
        RegistrationEmail: sdk.String("itaque"),
        ReminderWebhookURL: sdk.String("dolorum"),
        ResourceWebhookURL: sdk.String("architecto"),
        State: sdk.String("omnis"),
        TimezoneName: sdk.String("tenetur"),
        WebhookSignatureHash: sdk.String("quasi"),
        Website: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1CompaniesDomains

<p>Use this endpoint to <b>Create</b> an OnSchedJs domain for your authorized company. To share the OnSchedJS booking widget on your website or in your application you must add the domain.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.PostSetupV1CompaniesDomains(ctx, shared.CompanyDomainInputModel{
        Domain: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDomainViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.PostSetupV1CompaniesEmailTemplatesMaster(ctx, shared.MasterTemplateSettingsInputModel{
        CenterEmailContent: sdk.Bool(false),
        CenterEmailContentPanel: sdk.Bool(false),
        CenterEmailFooter: sdk.Bool(false),
        ContentBackgroundColor: sdk.String("voluptate"),
        ContentColor: sdk.String("ipsa"),
        ContentLinkColor: sdk.String("minima"),
        EmailBackgroundColor: sdk.String("veritatis"),
        EmailColor: sdk.String("consectetur"),
        EmailLinkColor: sdk.String("adipisci"),
        FooterFontSize: sdk.String("iste"),
        FooterLogoHeight: sdk.String("temporibus"),
        FooterLogoPadding: sdk.String("accusantium"),
        FooterPanelEmailContact: sdk.Bool(false),
        FooterPanelPhoneContact: sdk.Bool(false),
        FooterPanelWebsiteContact: sdk.Bool(false),
        HeaderLogoHeight: sdk.String("rem"),
        HeaderLogoPadding: sdk.String("aut"),
        PanelBackgroundColor: sdk.String("laudantium"),
        PanelColor: sdk.String("eum"),
        PanelLinkColor: sdk.String("mollitia"),
        PrivacyPolicyLink: sdk.String("ab"),
        ShowContentPanel: sdk.Bool(false),
        ShowFooterLogo: sdk.Bool(false),
        ShowFooterPanel: sdk.Bool(false),
        ShowHeaderLogo: sdk.Bool(false),
        ShowHeaderPanel: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MasterEmailTemplateSettingsViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1CompaniesRegions

<p>Use this endpoint to <b>Create</b> a region object. Regions can be mapped to business locations. They can be used by the locations endpoints to filter locations by region id.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.PostSetupV1CompaniesRegions(ctx, shared.RegionInputModel{
        Name: sdk.String("Kyle Bartoletti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1Companies

<p>Use this endpoint to <b>Update</b> the authorized company information. Your client credentials resolve to a single company. The timezoneName must be expressed as an IANA Timezone, e.g., <i>America/New_York</i>. </p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.PutSetupV1Companies(ctx, shared.CompanyUpdateModel{
        AddressLine1: sdk.String("numquam"),
        AddressLine2: sdk.String("impedit"),
        BookingWebhookURL: sdk.String("explicabo"),
        City: sdk.String("North Jennyfer"),
        Country: sdk.String("Bouvet Island (Bouvetoya)"),
        CustomerWebhookURL: sdk.String("maiores"),
        DisableEmailAndSmsNotifications: sdk.Bool(false),
        Email: sdk.String("Deja_Wiza@yahoo.com"),
        Fax: sdk.String("aperiam"),
        Name: sdk.String("Bertha Cruickshank"),
        NotificationFromEmailAddress: sdk.String("maxime"),
        NotificationFromName: sdk.String("dignissimos"),
        Phone: sdk.String("1-930-478-2026 x6326"),
        PostalCode: sdk.String("95844-5428"),
        RegistrationEmail: sdk.String("facilis"),
        ReminderWebhookURL: sdk.String("cum"),
        ResourceWebhookURL: sdk.String("commodi"),
        State: sdk.String("in"),
        TimezoneName: sdk.String("corporis"),
        WebhookSignatureHash: sdk.String("reiciendis"),
        Website: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1CompaniesDomainsID

<p>Use this endpoint to <b>Update</b> an OnSchedJs domain for your authorized company. A valid <b>companyDomain id</b> is required.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.PutSetupV1CompaniesDomainsID(ctx, operations.PutSetupV1CompaniesDomainsIDRequest{
        CompanyDomainUpdateModel: &shared.CompanyDomainUpdateModel{
            Domain: sdk.String("nemo"),
        },
        ID: "e60b375e-d4f6-4fbe-a41f-33317fe35b60",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDomainViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1CompaniesRegionsID

<p>Use this endpoint to <b>Update</b> a region object. A valid <b>region id</b> is required.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Companies.PutSetupV1CompaniesRegionsID(ctx, operations.PutSetupV1CompaniesRegionsIDRequest{
        RegionUpdateModel: &shared.RegionUpdateModel{
            Name: sdk.String("Randolph Bruen"),
        },
        ID: "426555ba-3c28-4744-ad53-b88f3a8d8f5c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionViewModel != nil {
        // handle response
    }
}
```
