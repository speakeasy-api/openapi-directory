# SDK

## Overview

Work with Qualtrics surveys, distributions and response events

### Available Operations

* [createContactInMailinglist](#createcontactinmailinglist) - Create contact in mailing list
* [generateDistributionLinks](#generatedistributionlinks) - Generate distribution links
* [getDistributions](#getdistributions) - Get distributions for survey
* [getEventSubscriptions](#geteventsubscriptions) - Get event subscriptions
* [getSurvey](#getsurvey) - Get survey
* [retrievedistributionlinks](#retrievedistributionlinks) - Retrieve distribution links
* [webhookDelete](#webhookdelete) - Remove subscription to response event
* [whenAResponseIsReceived](#whenaresponseisreceived) - Triggers when a response is submitted to a qualtrics survey

## createContactInMailinglist

Creates a contact in a given mailing list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactInMailinglistRequest;
import org.openapis.openapi.models.operations.CreateContactInMailinglistResponse;
import org.openapis.openapi.models.shared.CreateContactInMailingList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateContactInMailinglistRequest req = new CreateContactInMailinglistRequest(                new CreateContactInMailingList() {{
                                email = "Gerda89@yahoo.com";
                                firstName = "Anahi";
                                lastName = "Windler";
                                unsubscribed = false;
                            }};, "tempora", "suscipit");            

            CreateContactInMailinglistResponse res = sdk.sdk.createContactInMailinglist(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateDistributionLinks

Geneates links for individual distribution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateDistributionLinksResponse;
import org.openapis.openapi.models.shared.CreateDistributionLinks;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateDistributionLinks req = new CreateDistributionLinks() {{
                action = "molestiae";
                description = "minus";
                expirationDate = "2021-01-21 00:00:00";
                linkType = "placeat";
                mailingListId = "voluptatum";
                surveyId = "iusto";
            }};            

            GenerateDistributionLinksResponse res = sdk.sdk.generateDistributionLinks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributions

Gets all distributions for a given survey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributionsRequest;
import org.openapis.openapi.models.operations.GetDistributionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistributionsRequest req = new GetDistributionsRequest("excepturi");            

            GetDistributionsResponse res = sdk.sdk.getDistributions(req);

            if (res.distributionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventSubscriptions

Get event subscriptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventSubscriptionsRequest;
import org.openapis.openapi.models.operations.GetEventSubscriptionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventSubscriptionsRequest req = new GetEventSubscriptionsRequest("nisi");            

            GetEventSubscriptionsResponse res = sdk.sdk.getEventSubscriptions(req);

            if (res.eventSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSurvey

Gets a single Qualtrics survey speficied by its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSurveyRequest;
import org.openapis.openapi.models.operations.GetSurveyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSurveyRequest req = new GetSurveyRequest("recusandae");            

            GetSurveyResponse res = sdk.sdk.getSurvey(req);

            if (res.surveyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrievedistributionlinks

Retrieves all the individual links for a given distribution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievedistributionlinksRequest;
import org.openapis.openapi.models.operations.RetrievedistributionlinksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievedistributionlinksRequest req = new RetrievedistributionlinksRequest("temporibus", "ab");            

            RetrievedistributionlinksResponse res = sdk.sdk.retrievedistributionlinks(req);

            if (res.retrieveDistributionLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhookDelete

Remove event subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhookDeleteResponse;
import org.openapis.openapi.models.shared.SubscribeToEventBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubscribeToEventBody req = new SubscribeToEventBody("quis", "veritatis") {{
                encrypt = false;
            }};            

            WebhookDeleteResponse res = sdk.sdk.webhookDelete(req);

            if (res.eventSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## whenAResponseIsReceived

Subscribe to response event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WhenAResponseIsReceivedResponse;
import org.openapis.openapi.models.shared.SubscribeToEventBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubscribeToEventBody req = new SubscribeToEventBody("deserunt", "perferendis") {{
                encrypt = false;
            }};            

            WhenAResponseIsReceivedResponse res = sdk.sdk.whenAResponseIsReceived(req);

            if (res.eventSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
