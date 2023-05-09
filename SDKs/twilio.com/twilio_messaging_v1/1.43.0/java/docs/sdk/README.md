# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAlphaSender](#createalphasender)
* [createBrandRegistrationOtp](#createbrandregistrationotp)
* [createBrandRegistrations](#createbrandregistrations)
* [createBrandVetting](#createbrandvetting)
* [createExternalCampaign](#createexternalcampaign)
* [createLinkshorteningMessagingService](#createlinkshorteningmessagingservice)
* [createPhoneNumber](#createphonenumber)
* [createService](#createservice)
* [createShortCode](#createshortcode)
* [createUsAppToPerson](#createusapptoperson)
* [deleteAlphaSender](#deletealphasender)
* [deleteDomainCertV4](#deletedomaincertv4)
* [deleteLinkshorteningMessagingService](#deletelinkshorteningmessagingservice)
* [deletePhoneNumber](#deletephonenumber)
* [deleteService](#deleteservice)
* [deleteShortCode](#deleteshortcode)
* [deleteUsAppToPerson](#deleteusapptoperson)
* [fetchAlphaSender](#fetchalphasender)
* [fetchBrandRegistrations](#fetchbrandregistrations)
* [fetchBrandVetting](#fetchbrandvetting)
* [fetchDeactivation](#fetchdeactivation) - Fetch a list of all United States numbers that have been deactivated on a specific date.
* [fetchDomainCertV4](#fetchdomaincertv4)
* [fetchDomainConfig](#fetchdomainconfig)
* [fetchDomainConfigMessagingService](#fetchdomainconfigmessagingservice)
* [fetchPhoneNumber](#fetchphonenumber)
* [fetchService](#fetchservice)
* [fetchShortCode](#fetchshortcode)
* [fetchUsAppToPerson](#fetchusapptoperson)
* [fetchUsAppToPersonUsecase](#fetchusapptopersonusecase)
* [fetchUsecase](#fetchusecase)
* [listAlphaSender](#listalphasender)
* [listBrandRegistrations](#listbrandregistrations)
* [listBrandVetting](#listbrandvetting)
* [listPhoneNumber](#listphonenumber)
* [listService](#listservice)
* [listShortCode](#listshortcode)
* [listUsAppToPerson](#listusapptoperson)
* [updateBrandRegistrations](#updatebrandregistrations)
* [updateDomainCertV4](#updatedomaincertv4)
* [updateDomainConfig](#updatedomainconfig)
* [updateService](#updateservice)

## createAlphaSender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAlphaSenderCreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderResponse;
import org.openapis.openapi.models.operations.CreateAlphaSenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAlphaSenderRequest req = new CreateAlphaSenderRequest("unde") {{
                requestBody = new CreateAlphaSenderCreateAlphaSenderRequest("nulla");;
            }};            

            CreateAlphaSenderResponse res = sdk.sdk.createAlphaSender(req, new CreateAlphaSenderSecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceAlphaSender != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBrandRegistrationOtp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBrandRegistrationOtpRequest;
import org.openapis.openapi.models.operations.CreateBrandRegistrationOtpResponse;
import org.openapis.openapi.models.operations.CreateBrandRegistrationOtpSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBrandRegistrationOtpRequest req = new CreateBrandRegistrationOtpRequest("vel");            

            CreateBrandRegistrationOtpResponse res = sdk.sdk.createBrandRegistrationOtp(req, new CreateBrandRegistrationOtpSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1BrandRegistrationsBrandRegistrationOtp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBrandRegistrations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBrandRegistrationsCreateBrandRegistrationsRequest;
import org.openapis.openapi.models.operations.CreateBrandRegistrationsResponse;
import org.openapis.openapi.models.operations.CreateBrandRegistrationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBrandRegistrationsCreateBrandRegistrationsRequest req = new CreateBrandRegistrationsCreateBrandRegistrationsRequest("suscipit", "iure") {{
                brandType = "magnam";
                mock = false;
                skipAutomaticSecVet = false;
            }};            

            CreateBrandRegistrationsResponse res = sdk.sdk.createBrandRegistrations(req, new CreateBrandRegistrationsSecurity("debitis", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1BrandRegistrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBrandVetting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBrandVettingCreateBrandVettingRequest;
import org.openapis.openapi.models.operations.CreateBrandVettingRequest;
import org.openapis.openapi.models.operations.CreateBrandVettingResponse;
import org.openapis.openapi.models.operations.CreateBrandVettingSecurity;
import org.openapis.openapi.models.shared.BrandVettingEnumVettingProviderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBrandVettingRequest req = new CreateBrandVettingRequest("delectus") {{
                requestBody = new CreateBrandVettingCreateBrandVettingRequest(BrandVettingEnumVettingProviderEnum.CAMPAIGN_VERIFY) {{
                    vettingId = "tempora";
                }};;
            }};            

            CreateBrandVettingResponse res = sdk.sdk.createBrandVetting(req, new CreateBrandVettingSecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1BrandRegistrationsBrandVetting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExternalCampaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExternalCampaignCreateExternalCampaignRequest;
import org.openapis.openapi.models.operations.CreateExternalCampaignResponse;
import org.openapis.openapi.models.operations.CreateExternalCampaignSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExternalCampaignCreateExternalCampaignRequest req = new CreateExternalCampaignCreateExternalCampaignRequest("minus", "placeat");            

            CreateExternalCampaignResponse res = sdk.sdk.createExternalCampaign(req, new CreateExternalCampaignSecurity("voluptatum", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ExternalCampaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLinkshorteningMessagingService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLinkshorteningMessagingServiceRequest;
import org.openapis.openapi.models.operations.CreateLinkshorteningMessagingServiceResponse;
import org.openapis.openapi.models.operations.CreateLinkshorteningMessagingServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateLinkshorteningMessagingServiceRequest req = new CreateLinkshorteningMessagingServiceRequest("excepturi", "nisi");            

            CreateLinkshorteningMessagingServiceResponse res = sdk.sdk.createLinkshorteningMessagingService(req, new CreateLinkshorteningMessagingServiceSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1LinkshorteningMessagingService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPhoneNumber

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePhoneNumberCreatePhoneNumberRequest;
import org.openapis.openapi.models.operations.CreatePhoneNumberRequest;
import org.openapis.openapi.models.operations.CreatePhoneNumberResponse;
import org.openapis.openapi.models.operations.CreatePhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePhoneNumberRequest req = new CreatePhoneNumberRequest("ab") {{
                requestBody = new CreatePhoneNumberCreatePhoneNumberRequest("quis");;
            }};            

            CreatePhoneNumberResponse res = sdk.sdk.createPhoneNumber(req, new CreatePhoneNumberSecurity("veritatis", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServicePhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequestFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequestInboundMethodEnum;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;
import org.openapis.openapi.models.shared.ServiceEnumScanMessageContentEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest("perferendis") {{
                areaCodeGeomatch = false;
                fallbackMethod = CreateServiceCreateServiceRequestFallbackMethodEnum.POST;
                fallbackToLongCode = false;
                fallbackUrl = "https://well-informed-screamer.com";
                inboundMethod = CreateServiceCreateServiceRequestInboundMethodEnum.DELETE;
                inboundRequestUrl = "https://wonderful-investor.net";
                mmsConverter = false;
                scanMessageContent = ServiceEnumScanMessageContentEnum.DISABLE;
                smartEncoding = false;
                statusCallback = "http://meager-seabass.net";
                stickySender = false;
                synchronousValidation = false;
                useInboundWebhookOnNumber = false;
                usecase = "dicta";
                validityPeriod = 720633L;
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("officia", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createShortCode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateShortCodeCreateShortCodeRequest;
import org.openapis.openapi.models.operations.CreateShortCodeRequest;
import org.openapis.openapi.models.operations.CreateShortCodeResponse;
import org.openapis.openapi.models.operations.CreateShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateShortCodeRequest req = new CreateShortCodeRequest("fugit") {{
                requestBody = new CreateShortCodeCreateShortCodeRequest("deleniti");;
            }};            

            CreateShortCodeResponse res = sdk.sdk.createShortCode(req, new CreateShortCodeSecurity("hic", "optio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceShortCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUsAppToPerson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUsAppToPersonCreateUsAppToPersonRequest;
import org.openapis.openapi.models.operations.CreateUsAppToPersonRequest;
import org.openapis.openapi.models.operations.CreateUsAppToPersonResponse;
import org.openapis.openapi.models.operations.CreateUsAppToPersonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUsAppToPersonRequest req = new CreateUsAppToPersonRequest("totam") {{
                requestBody = new CreateUsAppToPersonCreateUsAppToPersonRequest("beatae", "commodi", false, false, "molestiae",                 new String[]{{
                                    add("qui"),
                                    add("impedit"),
                                }}, "cum") {{
                    helpKeywords = new String[]{{
                        add("ipsum"),
                        add("excepturi"),
                    }};
                    helpMessage = "aspernatur";
                    optInKeywords = new String[]{{
                        add("ad"),
                    }};
                    optInMessage = "natus";
                    optOutKeywords = new String[]{{
                        add("iste"),
                    }};
                    optOutMessage = "dolor";
                }};;
            }};            

            CreateUsAppToPersonResponse res = sdk.sdk.createUsAppToPerson(req, new CreateUsAppToPersonSecurity("natus", "laboriosam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceUsAppToPerson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlphaSender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAlphaSenderRequest;
import org.openapis.openapi.models.operations.DeleteAlphaSenderResponse;
import org.openapis.openapi.models.operations.DeleteAlphaSenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAlphaSenderRequest req = new DeleteAlphaSenderRequest("hic", "saepe");            

            DeleteAlphaSenderResponse res = sdk.sdk.deleteAlphaSender(req, new DeleteAlphaSenderSecurity("fuga", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomainCertV4

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainCertV4Request;
import org.openapis.openapi.models.operations.DeleteDomainCertV4Response;
import org.openapis.openapi.models.operations.DeleteDomainCertV4Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDomainCertV4Request req = new DeleteDomainCertV4Request("corporis");            

            DeleteDomainCertV4Response res = sdk.sdk.deleteDomainCertV4(req, new DeleteDomainCertV4Security("iste", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLinkshorteningMessagingService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLinkshorteningMessagingServiceRequest;
import org.openapis.openapi.models.operations.DeleteLinkshorteningMessagingServiceResponse;
import org.openapis.openapi.models.operations.DeleteLinkshorteningMessagingServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLinkshorteningMessagingServiceRequest req = new DeleteLinkshorteningMessagingServiceRequest("saepe", "quidem");            

            DeleteLinkshorteningMessagingServiceResponse res = sdk.sdk.deleteLinkshorteningMessagingService(req, new DeleteLinkshorteningMessagingServiceSecurity("architecto", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePhoneNumber

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePhoneNumberRequest;
import org.openapis.openapi.models.operations.DeletePhoneNumberResponse;
import org.openapis.openapi.models.operations.DeletePhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePhoneNumberRequest req = new DeletePhoneNumberRequest("reiciendis", "est");            

            DeletePhoneNumberResponse res = sdk.sdk.deletePhoneNumber(req, new DeletePhoneNumberSecurity("mollitia", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("dolores");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("dolorem", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteShortCode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteShortCodeRequest;
import org.openapis.openapi.models.operations.DeleteShortCodeResponse;
import org.openapis.openapi.models.operations.DeleteShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteShortCodeRequest req = new DeleteShortCodeRequest("explicabo", "nobis");            

            DeleteShortCodeResponse res = sdk.sdk.deleteShortCode(req, new DeleteShortCodeSecurity("enim", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsAppToPerson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsAppToPersonRequest;
import org.openapis.openapi.models.operations.DeleteUsAppToPersonResponse;
import org.openapis.openapi.models.operations.DeleteUsAppToPersonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsAppToPersonRequest req = new DeleteUsAppToPersonRequest("nemo", "minima");            

            DeleteUsAppToPersonResponse res = sdk.sdk.deleteUsAppToPerson(req, new DeleteUsAppToPersonSecurity("excepturi", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAlphaSender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAlphaSenderRequest;
import org.openapis.openapi.models.operations.FetchAlphaSenderResponse;
import org.openapis.openapi.models.operations.FetchAlphaSenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAlphaSenderRequest req = new FetchAlphaSenderRequest("iure", "culpa");            

            FetchAlphaSenderResponse res = sdk.sdk.fetchAlphaSender(req, new FetchAlphaSenderSecurity("doloribus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceAlphaSender != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBrandRegistrations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBrandRegistrationsRequest;
import org.openapis.openapi.models.operations.FetchBrandRegistrationsResponse;
import org.openapis.openapi.models.operations.FetchBrandRegistrationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBrandRegistrationsRequest req = new FetchBrandRegistrationsRequest("architecto");            

            FetchBrandRegistrationsResponse res = sdk.sdk.fetchBrandRegistrations(req, new FetchBrandRegistrationsSecurity("mollitia", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1BrandRegistrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBrandVetting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBrandVettingRequest;
import org.openapis.openapi.models.operations.FetchBrandVettingResponse;
import org.openapis.openapi.models.operations.FetchBrandVettingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBrandVettingRequest req = new FetchBrandVettingRequest("culpa", "consequuntur");            

            FetchBrandVettingResponse res = sdk.sdk.fetchBrandVetting(req, new FetchBrandVettingSecurity("repellat", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1BrandRegistrationsBrandVetting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeactivation

Fetch a list of all United States numbers that have been deactivated on a specific date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeactivationRequest;
import org.openapis.openapi.models.operations.FetchDeactivationResponse;
import org.openapis.openapi.models.operations.FetchDeactivationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeactivationRequest req = new FetchDeactivationRequest() {{
                date = LocalDate.parse("2022-06-30");
            }};            

            FetchDeactivationResponse res = sdk.sdk.fetchDeactivation(req, new FetchDeactivationSecurity("commodi", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDomainCertV4

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDomainCertV4Request;
import org.openapis.openapi.models.operations.FetchDomainCertV4Response;
import org.openapis.openapi.models.operations.FetchDomainCertV4Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDomainCertV4Request req = new FetchDomainCertV4Request("molestiae");            

            FetchDomainCertV4Response res = sdk.sdk.fetchDomainCertV4(req, new FetchDomainCertV4Security("velit", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1DomainCertV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDomainConfig

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDomainConfigRequest;
import org.openapis.openapi.models.operations.FetchDomainConfigResponse;
import org.openapis.openapi.models.operations.FetchDomainConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDomainConfigRequest req = new FetchDomainConfigRequest("quia");            

            FetchDomainConfigResponse res = sdk.sdk.fetchDomainConfig(req, new FetchDomainConfigSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1DomainConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDomainConfigMessagingService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDomainConfigMessagingServiceRequest;
import org.openapis.openapi.models.operations.FetchDomainConfigMessagingServiceResponse;
import org.openapis.openapi.models.operations.FetchDomainConfigMessagingServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDomainConfigMessagingServiceRequest req = new FetchDomainConfigMessagingServiceRequest("laborum");            

            FetchDomainConfigMessagingServiceResponse res = sdk.sdk.fetchDomainConfigMessagingService(req, new FetchDomainConfigMessagingServiceSecurity("animi", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1DomainConfigMessagingService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPhoneNumber

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberResponse;
import org.openapis.openapi.models.operations.FetchPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("odit", "quo");            

            FetchPhoneNumberResponse res = sdk.sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("sequi", "tenetur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServicePhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceRequest;
import org.openapis.openapi.models.operations.FetchServiceResponse;
import org.openapis.openapi.models.operations.FetchServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceRequest req = new FetchServiceRequest("ipsam");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("id", "possimus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchShortCode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchShortCodeRequest;
import org.openapis.openapi.models.operations.FetchShortCodeResponse;
import org.openapis.openapi.models.operations.FetchShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchShortCodeRequest req = new FetchShortCodeRequest("aut", "quasi");            

            FetchShortCodeResponse res = sdk.sdk.fetchShortCode(req, new FetchShortCodeSecurity("error", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceShortCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUsAppToPerson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUsAppToPersonRequest;
import org.openapis.openapi.models.operations.FetchUsAppToPersonResponse;
import org.openapis.openapi.models.operations.FetchUsAppToPersonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUsAppToPersonRequest req = new FetchUsAppToPersonRequest("laborum", "quasi");            

            FetchUsAppToPersonResponse res = sdk.sdk.fetchUsAppToPerson(req, new FetchUsAppToPersonSecurity("reiciendis", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceUsAppToPerson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUsAppToPersonUsecase

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUsAppToPersonUsecaseRequest;
import org.openapis.openapi.models.operations.FetchUsAppToPersonUsecaseResponse;
import org.openapis.openapi.models.operations.FetchUsAppToPersonUsecaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUsAppToPersonUsecaseRequest req = new FetchUsAppToPersonUsecaseRequest("vero") {{
                brandRegistrationSid = "nihil";
            }};            

            FetchUsAppToPersonUsecaseResponse res = sdk.sdk.fetchUsAppToPersonUsecase(req, new FetchUsAppToPersonUsecaseSecurity("praesentium", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceUsAppToPersonUsecase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUsecase

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUsecaseResponse;
import org.openapis.openapi.models.operations.FetchUsecaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUsecaseResponse res = sdk.sdk.fetchUsecase(new FetchUsecaseSecurity("ipsa", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1Usecase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAlphaSender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAlphaSenderRequest;
import org.openapis.openapi.models.operations.ListAlphaSenderResponse;
import org.openapis.openapi.models.operations.ListAlphaSenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAlphaSenderRequest req = new ListAlphaSenderRequest("voluptate") {{
                page = 739264L;
                pageSize = 19987L;
                pageToken = "doloremque";
            }};            

            ListAlphaSenderResponse res = sdk.sdk.listAlphaSender(req, new ListAlphaSenderSecurity("reprehenderit", "ut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAlphaSenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBrandRegistrations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBrandRegistrationsRequest;
import org.openapis.openapi.models.operations.ListBrandRegistrationsResponse;
import org.openapis.openapi.models.operations.ListBrandRegistrationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBrandRegistrationsRequest req = new ListBrandRegistrationsRequest() {{
                page = 979587L;
                pageSize = 120196L;
                pageToken = "corporis";
            }};            

            ListBrandRegistrationsResponse res = sdk.sdk.listBrandRegistrations(req, new ListBrandRegistrationsSecurity("dolore", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBrandRegistrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBrandVetting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBrandVettingRequest;
import org.openapis.openapi.models.operations.ListBrandVettingResponse;
import org.openapis.openapi.models.operations.ListBrandVettingSecurity;
import org.openapis.openapi.models.shared.BrandVettingEnumVettingProviderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBrandVettingRequest req = new ListBrandVettingRequest("dicta") {{
                page = 688661L;
                pageSize = 317983L;
                pageToken = "accusamus";
                vettingProvider = BrandVettingEnumVettingProviderEnum.CAMPAIGN_VERIFY;
            }};            

            ListBrandVettingResponse res = sdk.sdk.listBrandVetting(req, new ListBrandVettingSecurity("commodi", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBrandVettingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPhoneNumber

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPhoneNumberRequest;
import org.openapis.openapi.models.operations.ListPhoneNumberResponse;
import org.openapis.openapi.models.operations.ListPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPhoneNumberRequest req = new ListPhoneNumberRequest("quae") {{
                page = 216822L;
                pageSize = 692472L;
                pageToken = "molestias";
            }};            

            ListPhoneNumberResponse res = sdk.sdk.listPhoneNumber(req, new ListPhoneNumberSecurity("excepturi", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listPhoneNumberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceRequest;
import org.openapis.openapi.models.operations.ListServiceResponse;
import org.openapis.openapi.models.operations.ListServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceRequest req = new ListServiceRequest() {{
                page = 265389L;
                pageSize = 508969L;
                pageToken = "rem";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("voluptates", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listShortCode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListShortCodeRequest;
import org.openapis.openapi.models.operations.ListShortCodeResponse;
import org.openapis.openapi.models.operations.ListShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListShortCodeRequest req = new ListShortCodeRequest("repudiandae") {{
                page = 575947L;
                pageSize = 83112L;
                pageToken = "itaque";
            }};            

            ListShortCodeResponse res = sdk.sdk.listShortCode(req, new ListShortCodeSecurity("incidunt", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listShortCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsAppToPerson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsAppToPersonRequest;
import org.openapis.openapi.models.operations.ListUsAppToPersonResponse;
import org.openapis.openapi.models.operations.ListUsAppToPersonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsAppToPersonRequest req = new ListUsAppToPersonRequest("consequatur") {{
                page = 667411L;
                pageSize = 842342L;
                pageToken = "explicabo";
            }};            

            ListUsAppToPersonResponse res = sdk.sdk.listUsAppToPerson(req, new ListUsAppToPersonSecurity("deserunt", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsAppToPersonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBrandRegistrations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBrandRegistrationsRequest;
import org.openapis.openapi.models.operations.UpdateBrandRegistrationsResponse;
import org.openapis.openapi.models.operations.UpdateBrandRegistrationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBrandRegistrationsRequest req = new UpdateBrandRegistrationsRequest("quibusdam");            

            UpdateBrandRegistrationsResponse res = sdk.sdk.updateBrandRegistrations(req, new UpdateBrandRegistrationsSecurity("labore", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1BrandRegistrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainCertV4

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainCertV4Request;
import org.openapis.openapi.models.operations.UpdateDomainCertV4Response;
import org.openapis.openapi.models.operations.UpdateDomainCertV4Security;
import org.openapis.openapi.models.operations.UpdateDomainCertV4UpdateDomainCertV4Request;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDomainCertV4Request req = new UpdateDomainCertV4Request("qui") {{
                requestBody = new UpdateDomainCertV4UpdateDomainCertV4Request("aliquid");;
            }};            

            UpdateDomainCertV4Response res = sdk.sdk.updateDomainCertV4(req, new UpdateDomainCertV4Security("cupiditate", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1DomainCertV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainConfig

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainConfigRequest;
import org.openapis.openapi.models.operations.UpdateDomainConfigResponse;
import org.openapis.openapi.models.operations.UpdateDomainConfigSecurity;
import org.openapis.openapi.models.operations.UpdateDomainConfigUpdateDomainConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDomainConfigRequest req = new UpdateDomainConfigRequest("perferendis") {{
                requestBody = new UpdateDomainConfigUpdateDomainConfigRequest() {{
                    callbackUrl = "http://svelte-frosting.com";
                    fallbackUrl = "http://rapid-moat.biz";
                }};;
            }};            

            UpdateDomainConfigResponse res = sdk.sdk.updateDomainConfig(req, new UpdateDomainConfigSecurity("facilis", "tempore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1DomainConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestInboundMethodEnum;
import org.openapis.openapi.models.shared.ServiceEnumScanMessageContentEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("labore") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    areaCodeGeomatch = false;
                    fallbackMethod = UpdateServiceUpdateServiceRequestFallbackMethodEnum.DELETE;
                    fallbackToLongCode = false;
                    fallbackUrl = "http://excellent-roll.name";
                    friendlyName = "aliquid";
                    inboundMethod = UpdateServiceUpdateServiceRequestInboundMethodEnum.PATCH;
                    inboundRequestUrl = "https://nonstop-pate.biz";
                    mmsConverter = false;
                    scanMessageContent = ServiceEnumScanMessageContentEnum.DISABLE;
                    smartEncoding = false;
                    statusCallback = "https://raw-icing.info";
                    stickySender = false;
                    synchronousValidation = false;
                    useInboundWebhookOnNumber = false;
                    usecase = "illum";
                    validityPeriod = 978571L;
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("rerum", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
