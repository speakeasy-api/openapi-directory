# companies

### Available Operations

* [deleteSetupV1CompaniesDomainsId](#deletesetupv1companiesdomainsid) - Delete Company Domain
* [deleteSetupV1CompaniesEmailTemplatesMaster](#deletesetupv1companiesemailtemplatesmaster) - Delete Master Template Settings
* [deleteSetupV1CompaniesRegionsId](#deletesetupv1companiesregionsid) - Delete Region
* [getSetupV1Companies](#getsetupv1companies) - Get Company
* [getSetupV1CompaniesDomains](#getsetupv1companiesdomains) - List Company Domains
* [getSetupV1CompaniesDomainsId](#getsetupv1companiesdomainsid) - Get Company Domain
* [getSetupV1CompaniesEmailTemplates](#getsetupv1companiesemailtemplates) - List Email Templates
* [getSetupV1CompaniesEmailTemplatesMaster](#getsetupv1companiesemailtemplatesmaster) - Get Master Template Settings
* [getSetupV1CompaniesEmailTemplatesTemplateName](#getsetupv1companiesemailtemplatestemplatename) - Get Email Template
* [getSetupV1CompaniesRegions](#getsetupv1companiesregions) - List Regions
* [getSetupV1CompaniesRegionsId](#getsetupv1companiesregionsid) - Get Region
* [getSetupV1CompaniesTimezonesDate](#getsetupv1companiestimezonesdate) - List Time Zones
* [postSetupV1Companies](#postsetupv1companies) - Create Company
* [postSetupV1CompaniesDomains](#postsetupv1companiesdomains) - Create Company Domain
* [postSetupV1CompaniesEmailTemplatesMaster](#postsetupv1companiesemailtemplatesmaster) - Create Master Template Settings
* [postSetupV1CompaniesRegions](#postsetupv1companiesregions) - Create Region
* [putSetupV1Companies](#putsetupv1companies) - Update Company
* [putSetupV1CompaniesDomainsId](#putsetupv1companiesdomainsid) - Update Company Domain
* [putSetupV1CompaniesRegionsId](#putsetupv1companiesregionsid) - Update Region

## deleteSetupV1CompaniesDomainsId

<p>Use this endpoint to <b>Delete</b> an OnSchedJs domain from your authorized company. A valid <b>companyDomain id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1CompaniesDomainsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1CompaniesDomainsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1CompaniesDomainsIdRequest req = new DeleteSetupV1CompaniesDomainsIdRequest("facilis");            

            DeleteSetupV1CompaniesDomainsIdResponse res = sdk.companies.deleteSetupV1CompaniesDomainsId(req);

            if (res.companyDomainViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. Deleting a custom master email template setting will reactivate the original default OnSched template settings.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1CompaniesEmailTemplatesMasterResponse res = sdk.companies.deleteSetupV1CompaniesEmailTemplatesMaster();

            if (res.masterEmailTemplateSettingsViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1CompaniesRegionsId

<p>Use this endpoint to <b>Delete</b> a region object. A valid <b>region id</b> is required. If the region is related to any business locations it won't be deleted. You must first remove any references to region id from the business locations prior to deleting.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1CompaniesRegionsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1CompaniesRegionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1CompaniesRegionsIdRequest req = new DeleteSetupV1CompaniesRegionsIdRequest("delectus");            

            DeleteSetupV1CompaniesRegionsIdResponse res = sdk.companies.deleteSetupV1CompaniesRegionsId(req);

            if (res.regionViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Companies

<p>Use this endpoint to return the <b>Authorized Company</b> information. The company is the main entity that oversees all business locations defined below it, hierarchically. </p>
<p>Access to the company credentials gives you access to all business locations defined in the authorized company. Client credentials resolve to a single company and are purposely hidden from this endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesResponse res = sdk.companies.getSetupV1Companies();

            if (res.companyViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesDomains

<p>Use this endpoint to return a <b>List of Company Domains</b> for the authorized company. To share the OnSchedJS booking widget on your website or in your application your domain must be listed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesDomainsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesDomainsResponse res = sdk.companies.getSetupV1CompaniesDomains();

            if (res.companyDomainListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesDomainsId

<p>Use this endpoint to return a <b>Company Domain</b> object. A valid <b>companyDomain id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesDomainsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesDomainsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesDomainsIdRequest req = new GetSetupV1CompaniesDomainsIdRequest("sint");            

            GetSetupV1CompaniesDomainsIdResponse res = sdk.companies.getSetupV1CompaniesDomainsId(req);

            if (res.companyDomainViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesEmailTemplates

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized at the Business Location level or Company level. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesEmailTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesEmailTemplatesResponse res = sdk.companies.getSetupV1CompaniesEmailTemplates();

            if (res.emailTemplateListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to return the <b>Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesEmailTemplatesMasterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesEmailTemplatesMasterResponse res = sdk.companies.getSetupV1CompaniesEmailTemplatesMaster();

            if (res.masterEmailTemplateSettingsViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesEmailTemplatesTemplateName

<p>Use this endpoint to return the requested <b>Email Template</b>. If it wasn't customized the default template is returned. The response content is in html format. A valid emailTemplate <b>name</b> is required. Find template names by using the: <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>
<p>To create custom company email templates, go to the <i>POST ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint and create a template using the Primary Business Location Id.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesEmailTemplatesTemplateNameRequest req = new GetSetupV1CompaniesEmailTemplatesTemplateNameRequest("sint");            

            GetSetupV1CompaniesEmailTemplatesTemplateNameResponse res = sdk.companies.getSetupV1CompaniesEmailTemplatesTemplateName(req);

            if (res.contentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesRegions

<p>Use this endpoint to return a list of <b>Regions</b> in the authorized company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesRegionsRequest;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesRegionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesRegionsRequest req = new GetSetupV1CompaniesRegionsRequest() {{
                limit = 223081;
                offset = 891555;
            }};            

            GetSetupV1CompaniesRegionsResponse res = sdk.companies.getSetupV1CompaniesRegions(req);

            if (res.regionListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesRegionsId

<p>Use this endpoint to return a <b>Region</b> object. A valid <b>region id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesRegionsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesRegionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesRegionsIdRequest req = new GetSetupV1CompaniesRegionsIdRequest("dolorum");            

            GetSetupV1CompaniesRegionsIdResponse res = sdk.companies.getSetupV1CompaniesRegionsId(req);

            if (res.regionViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CompaniesTimezonesDate

<p>Use this endpoint to return a <b>List of timezone names, timezoneIana and tzOffset values</b> calculated for the date requested. Daylight Savings may or may not apply depending on the date specified.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesTimezonesDateRequest;
import org.openapis.openapi.models.operations.GetSetupV1CompaniesTimezonesDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CompaniesTimezonesDateRequest req = new GetSetupV1CompaniesTimezonesDateRequest(OffsetDateTime.parse("2022-02-26T01:27:36.152Z"));            

            GetSetupV1CompaniesTimezonesDateResponse res = sdk.companies.getSetupV1CompaniesTimezonesDate(req);

            if (res.timezoneViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Companies

<p>Use this endpoint to <b>Create</b> a new authorized company.</p>
<p>
  <b>Note: Special API Partner credentials are required to access this endpoint.</b>
</p>
<p>The <b>name, registrationEmail, phone, country</b> and <b>timezoneName</b> are required fields. For <b>country</b> use the standard ISO 3166 2-character country code.</p>
<p>The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>.</p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1CompaniesResponse;
import org.openapis.openapi.models.shared.CompanyInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CompanyInputModel req = new CompanyInputModel() {{
                addressLine1 = "rerum";
                addressLine2 = "dicta";
                bookingWebhookUrl = "magnam";
                city = "Schulistview";
                country = "Hungary";
                customerWebhookUrl = "laborum";
                disableEmailAndSmsNotifications = false;
                email = "Delphine88@hotmail.com";
                fax = "delectus";
                name = "Rene Reinger";
                notificationFromEmailAddress = "deleniti";
                notificationFromName = "sapiente";
                phone = "734.664.0437";
                postalCode = "22367-4811";
                registrationEmail = "magnam";
                reminderWebhookUrl = "et";
                resourceWebhookUrl = "excepturi";
                state = "ullam";
                timezoneName = "provident";
                webhookSignatureHash = "quos";
                website = "sint";
            }};            

            PostSetupV1CompaniesResponse res = sdk.companies.postSetupV1Companies(req);

            if (res.companyViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1CompaniesDomains

<p>Use this endpoint to <b>Create</b> an OnSchedJs domain for your authorized company. To share the OnSchedJS booking widget on your website or in your application you must add the domain.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1CompaniesDomainsResponse;
import org.openapis.openapi.models.shared.CompanyDomainInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CompanyDomainInputModel req = new CompanyDomainInputModel() {{
                domain = "mollitia";
            }};            

            PostSetupV1CompaniesDomainsResponse res = sdk.companies.postSetupV1CompaniesDomains(req);

            if (res.companyDomainViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1CompaniesEmailTemplatesMasterResponse;
import org.openapis.openapi.models.shared.MasterTemplateSettingsInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.MasterTemplateSettingsInputModel req = new MasterTemplateSettingsInputModel() {{
                centerEmailContent = false;
                centerEmailContentPanel = false;
                centerEmailFooter = false;
                contentBackgroundColor = "mollitia";
                contentColor = "ad";
                contentLinkColor = "eum";
                emailBackgroundColor = "dolor";
                emailColor = "necessitatibus";
                emailLinkColor = "odit";
                footerFontSize = "nemo";
                footerLogoHeight = "quasi";
                footerLogoPadding = "iure";
                footerPanelEmailContact = false;
                footerPanelPhoneContact = false;
                footerPanelWebsiteContact = false;
                headerLogoHeight = "doloribus";
                headerLogoPadding = "debitis";
                panelBackgroundColor = "eius";
                panelColor = "maxime";
                panelLinkColor = "deleniti";
                privacyPolicyLink = "facilis";
                showContentPanel = false;
                showFooterLogo = false;
                showFooterPanel = false;
                showHeaderLogo = false;
                showHeaderPanel = false;
            }};            

            PostSetupV1CompaniesEmailTemplatesMasterResponse res = sdk.companies.postSetupV1CompaniesEmailTemplatesMaster(req);

            if (res.masterEmailTemplateSettingsViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1CompaniesRegions

<p>Use this endpoint to <b>Create</b> a region object. Regions can be mapped to business locations. They can be used by the locations endpoints to filter locations by region id.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1CompaniesRegionsResponse;
import org.openapis.openapi.models.shared.RegionInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RegionInputModel req = new RegionInputModel() {{
                name = "Diane VonRueden";
            }};            

            PostSetupV1CompaniesRegionsResponse res = sdk.companies.postSetupV1CompaniesRegions(req);

            if (res.regionViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1Companies

<p>Use this endpoint to <b>Update</b> the authorized company information. Your client credentials resolve to a single company. The timezoneName must be expressed as an IANA Timezone, e.g., <i>America/New_York</i>. </p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1CompaniesResponse;
import org.openapis.openapi.models.shared.CompanyUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CompanyUpdateModel req = new CompanyUpdateModel() {{
                addressLine1 = "repellat";
                addressLine2 = "quibusdam";
                bookingWebhookUrl = "sed";
                city = "Stratford";
                country = "Argentina";
                customerWebhookUrl = "consequuntur";
                disableEmailAndSmsNotifications = false;
                email = "Levi77@yahoo.com";
                fax = "illum";
                name = "Simon Jenkins";
                notificationFromEmailAddress = "ea";
                notificationFromName = "accusantium";
                phone = "(963) 547-0839";
                postalCode = "82073";
                registrationEmail = "hic";
                reminderWebhookUrl = "libero";
                resourceWebhookUrl = "nobis";
                state = "dolores";
                timezoneName = "quis";
                webhookSignatureHash = "totam";
                website = "dignissimos";
            }};            

            PutSetupV1CompaniesResponse res = sdk.companies.putSetupV1Companies(req);

            if (res.companyViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1CompaniesDomainsId

<p>Use this endpoint to <b>Update</b> an OnSchedJs domain for your authorized company. A valid <b>companyDomain id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1CompaniesDomainsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1CompaniesDomainsIdResponse;
import org.openapis.openapi.models.shared.CompanyDomainUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1CompaniesDomainsIdRequest req = new PutSetupV1CompaniesDomainsIdRequest("quis") {{
                companyDomainUpdateModel = new CompanyDomainUpdateModel() {{
                    domain = "nesciunt";
                }};;
            }};            

            PutSetupV1CompaniesDomainsIdResponse res = sdk.companies.putSetupV1CompaniesDomainsId(req);

            if (res.companyDomainViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1CompaniesRegionsId

<p>Use this endpoint to <b>Update</b> a region object. A valid <b>region id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1CompaniesRegionsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1CompaniesRegionsIdResponse;
import org.openapis.openapi.models.shared.RegionUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1CompaniesRegionsIdRequest req = new PutSetupV1CompaniesRegionsIdRequest("perferendis") {{
                regionUpdateModel = new RegionUpdateModel() {{
                    name = "Brooke Kohler";
                }};;
            }};            

            PutSetupV1CompaniesRegionsIdResponse res = sdk.companies.putSetupV1CompaniesRegionsId(req);

            if (res.regionViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
