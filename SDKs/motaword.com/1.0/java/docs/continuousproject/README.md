# continuousProject

### Available Operations

* [addDocument](#adddocument) - Add a new document to your continuous project
* [collectAnalytics](#collectanalytics) - Save/collect analytics data from Active widget
* [complete](#complete) - Complete continuous project
* [completeContinuousDocument](#completecontinuousdocument) - Complete a continuous project document
* [completeLanguage](#completelanguage) - Complete continuous project language
* [createActiveWidget](#createactivewidget) - Create a new Active widget
* [createContinuousProject](#createcontinuousproject) - Create a continuous project
* [createSubscription](#createsubscription) - Create subscription for continuous project
* [deleteActiveWidget](#deleteactivewidget) - Delete a single widget for this Active project
* [deleteContinuousProject](#deletecontinuousproject) - Delete a continuous project
* [deleteSubscription](#deletesubscription) - Delete subscription for continuous project
* [getActiveWidget](#getactivewidget) - View an Active widget
* [getActiveWidgets](#getactivewidgets) - View Active widgets
* [getAnalyticsToken](#getanalyticstoken) - Get JWT token to be used in analytics dashboards
* [getContinuousProject](#getcontinuousproject) - View a continuous project
* [getContinuousProjectDocument](#getcontinuousprojectdocument) - View a continuous document
* [getContinuousProjectDocumentProgress](#getcontinuousprojectdocumentprogress) - Monitor progress of a continuous document
* [getContinuousProjectDocuments](#getcontinuousprojectdocuments) - View continuous documents
* [getContinuousProjectInvoices](#getcontinuousprojectinvoices) - Invoices of a continuous project
* [getContinuousProjectProgress](#getcontinuousprojectprogress) - Monitor progress and status of a continous project
* [getContinuousProjects](#getcontinuousprojects) - View continuous projects
* [getQuoteForDocument](#getquotefordocument) - Get a quote for a continuous project document
* [getQuoteForDocuments](#getquotefordocuments) - Get quote for documents
* [getQuoteForLanguage](#getquoteforlanguage) - Get quote for language
* [getQuoteForLanguages](#getquoteforlanguages) - Get quote for languages
* [getSubscription](#getsubscription) - Get subscription for continuous project
* [postContinuousProjectDocumentProgress](#postcontinuousprojectdocumentprogress) - Get continuous project document progress for multiple IDs
* [resetActiveWidgetToken](#resetactivewidgettoken) - Reset Active widget token
* [translate](#translate) - Instantly translate your content
* [updateActiveWidget](#updateactivewidget) - Update Active widget settings.
* [updateContinuousProject](#updatecontinuousproject) - Update a continuous project
* [updateDocument](#updatedocument) - Update the document
* [updateSubscription](#updatesubscription) - Update subscription for continuous project
* [updateSubscriptionPaymentMethod](#updatesubscriptionpaymentmethod) - Update subscription payment method for continuous project

## addDocument

Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDocumentRequest;
import org.openapis.openapi.models.operations.AddDocumentResponse;
import org.openapis.openapi.models.shared.AddOrUpdateDocumentRequest;
import org.openapis.openapi.models.shared.FileAsData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddDocumentRequest req = new AddDocumentRequest(902599L) {{
                addOrUpdateDocumentRequest = new AddOrUpdateDocumentRequest() {{
                    document = new FileAsData() {{
                        data = "fuga";
                        name = "Stacy Moore";
                    }};;
                }};;
            }};            

            AddDocumentResponse res = sdk.continuousProject.addDocument(req);

            if (res.continuousProjectDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectAnalytics

Save/collect analytics data from Active widget

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectAnalyticsRequest;
import org.openapis.openapi.models.operations.CollectAnalyticsResponse;
import org.openapis.openapi.models.shared.AnalyticsCollection;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CollectAnalyticsRequest req = new CollectAnalyticsRequest(99280L) {{
                analyticsCollection = new AnalyticsCollection() {{
                    anonymousId = "ipsa";
                    properties = new java.util.HashMap<String, String>() {{
                        put("est", "mollitia");
                        put("laborum", "dolores");
                        put("dolorem", "corporis");
                        put("explicabo", "nobis");
                    }};
                    sessionId = "enim";
                    type = "omnis";
                    userId = "nemo";
                }};;
            }};            

            CollectAnalyticsResponse res = sdk.continuousProject.collectAnalytics(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## complete

Complete continuous project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteRequest;
import org.openapis.openapi.models.operations.CompleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CompleteRequest req = new CompleteRequest(570197L);            

            CompleteResponse res = sdk.continuousProject.complete(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## completeContinuousDocument

Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteContinuousDocumentRequest;
import org.openapis.openapi.models.operations.CompleteContinuousDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CompleteContinuousDocumentRequest req = new CompleteContinuousDocumentRequest(438601L, 634274L);            

            CompleteContinuousDocumentResponse res = sdk.continuousProject.completeContinuousDocument(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## completeLanguage

Complete continuous project language

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteLanguageRequest;
import org.openapis.openapi.models.operations.CompleteLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CompleteLanguageRequest req = new CompleteLanguageRequest(958950L, "architecto");            

            CompleteLanguageResponse res = sdk.continuousProject.completeLanguage(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createActiveWidget

Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActiveWidgetRequest;
import org.openapis.openapi.models.operations.CreateActiveWidgetResponse;
import org.openapis.openapi.models.shared.ActiveWidget;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateActiveWidgetRequest req = new CreateActiveWidgetRequest(208876L) {{
                activeWidget = new ActiveWidget() {{
                    adminMode = false;
                    allowHashInUrl = false;
                    allowQueryInUrl = false;
                    autoDetectSourceLanguage = false;
                    createdAt = OffsetDateTime.parse("2022-09-05T05:51:25.673Z");
                    debugMode = false;
                    elements = "repellat";
                    followUser = false;
                    forceCacheRefreshInterval = false;
                    hitBackendForExisting = false;
                    id = 653108L;
                    languageMappings = "occaecati";
                    live = false;
                    modifyLinks = false;
                    name = "Lucy Konopelski";
                    optimizePerPage = false;
                    pages = "error";
                    pathRegex = "quia";
                    position = "quis";
                    queryName = "vitae";
                    rebootOnUrlChange = false;
                    restrictedDomains = "laborum";
                    sections = "animi";
                    testMode = false;
                    theme = "enim";
                    token = "odit";
                    urlChangeMode = "quo";
                    urlMode = "sequi";
                    useCache = false;
                    useDummyTranslations = false;
                    variables = "tenetur";
                }};;
            }};            

            CreateActiveWidgetResponse res = sdk.continuousProject.createActiveWidget(req);

            if (res.activeWidget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContinuousProject

Create a new continuous project for your software, website, CI/CD translation needs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContinuousProjectResponse;
import org.openapis.openapi.models.shared.ContinuousProject;
import org.openapis.openapi.models.shared.ContinuousProjectLinks;
import org.openapis.openapi.models.shared.Href;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ContinuousProject req = new ContinuousProject() {{
                analyticsEnabled = false;
                autoStartPostedit = false;
                createdAt = OffsetDateTime.parse("2021-05-11T16:11:54.761Z");
                id = 13571L;
                isEnabled = false;
                lastActivityAt = OffsetDateTime.parse("2022-05-18T15:52:05.226Z");
                links = new ContinuousProjectLinks() {{
                    editors = new java.util.HashMap<String, org.openapis.openapi.models.shared.Href>() {{
                        put("laborum", new Href() {{
                            href = "quasi";
                        }});
                        put("reiciendis", new Href() {{
                            href = "voluptatibus";
                        }});
                        put("vero", new Href() {{
                            href = "nihil";
                        }});
                        put("praesentium", new Href() {{
                            href = "voluptatibus";
                        }});
                    }};
                    self = new Href() {{
                        href = "ipsa";
                    }};;
                }};;
                mtEnabled = false;
                mtEngine = "omnis";
                name = "Ms. Karla Aufderhar";
                posteditEnabled = false;
                sourceLanguage = "maiores";
                status = "dicta";
                subscription = new Subscription() {{
                    downgrade = new String[]{{
                        add("dolore"),
                        add("iusto"),
                    }};
                    paymentMethod = 118727L;
                    periodEnd = OffsetDateTime.parse("2022-05-13T20:56:04.612Z");
                    planId = "accusamus";
                    planName = "commodi";
                    price = "repudiandae";
                    products = new Object[]{{
                        add("ipsum"),
                    }};
                    scheduleName = "quidem";
                    scheduleStart = OffsetDateTime.parse("2021-11-13T09:08:33.009Z");
                    subscriptionId = "pariatur";
                    upgrade = new String[]{{
                        add("praesentium"),
                        add("rem"),
                    }};
                    withTrial = "voluptates";
                }};;
                targetLanguages = new String[]{{
                    add("repudiandae"),
                }};
                type = "sint";
                wordCount = 83112L;
            }};            

            CreateContinuousProjectResponse res = sdk.continuousProject.createContinuousProject(req);

            if (res.continuousProject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscription

Create subscription for continuous project

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateSubscriptionRequest req = new CreateSubscriptionRequest(                new Subscription() {{
                                downgrade = new String[]{{
                                    add("enim"),
                                    add("consequatur"),
                                }};
                                paymentMethod = 667411L;
                                periodEnd = OffsetDateTime.parse("2022-08-09T16:21:07.003Z");
                                planId = "deserunt";
                                planName = "distinctio";
                                price = "quibusdam";
                                products = new Object[]{{
                                    add("modi"),
                                    add("qui"),
                                }};
                                scheduleName = "aliquid";
                                scheduleStart = OffsetDateTime.parse("2021-11-23T10:34:02.904Z");
                                subscriptionId = "perferendis";
                                upgrade = new String[]{{
                                    add("assumenda"),
                                }};
                                withTrial = "ipsam";
                            }};, 4695L);            

            CreateSubscriptionResponse res = sdk.continuousProject.createSubscription(req);

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteActiveWidget

Delete a single widget for this Active project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteActiveWidgetRequest;
import org.openapis.openapi.models.operations.DeleteActiveWidgetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteActiveWidgetRequest req = new DeleteActiveWidgetRequest(677817L, 569618L);            

            DeleteActiveWidgetResponse res = sdk.continuousProject.deleteActiveWidget(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContinuousProject

Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContinuousProjectRequest;
import org.openapis.openapi.models.operations.DeleteContinuousProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteContinuousProjectRequest req = new DeleteContinuousProjectRequest(703737L);            

            DeleteContinuousProjectResponse res = sdk.continuousProject.deleteContinuousProject(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscription

Delete subscription for continuous project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSubscriptionRequest req = new DeleteSubscriptionRequest(288476L);            

            DeleteSubscriptionResponse res = sdk.continuousProject.deleteSubscription(req);

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActiveWidget

View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActiveWidgetRequest;
import org.openapis.openapi.models.operations.GetActiveWidgetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActiveWidgetRequest req = new GetActiveWidgetRequest(433288L, 248753L);            

            GetActiveWidgetResponse res = sdk.continuousProject.getActiveWidget(req);

            if (res.activeWidget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActiveWidgets

View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActiveWidgetsRequest;
import org.openapis.openapi.models.operations.GetActiveWidgetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActiveWidgetsRequest req = new GetActiveWidgetsRequest(576157L);            

            GetActiveWidgetsResponse res = sdk.continuousProject.getActiveWidgets(req);

            if (res.activeWidgetList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnalyticsToken

Get JWT token to be used in analytics dashboards

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnalyticsTokenRequest;
import org.openapis.openapi.models.operations.GetAnalyticsTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAnalyticsTokenRequest req = new GetAnalyticsTokenRequest(592042L);            

            GetAnalyticsTokenResponse res = sdk.continuousProject.getAnalyticsToken(req);

            if (res.analyticsToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProject

View the details of a continuous project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectRequest req = new GetContinuousProjectRequest(572252L);            

            GetContinuousProjectResponse res = sdk.continuousProject.getContinuousProject(req);

            if (res.continuousProject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjectDocument

View the details of a source document in continuous translation project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectDocumentRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectDocumentRequest req = new GetContinuousProjectDocumentRequest(223081L, 891555L);            

            GetContinuousProjectDocumentResponse res = sdk.continuousProject.getContinuousProjectDocument(req);

            if (res.continuousProjectDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjectDocumentProgress

Monitor the translation progress of a document in a continuous project in real-time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectDocumentProgressRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectDocumentProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectDocumentProgressRequest req = new GetContinuousProjectDocumentProgressRequest(680056L, 447125L) {{
                filterByLanguage = "in";
            }};            

            GetContinuousProjectDocumentProgressResponse res = sdk.continuousProject.getContinuousProjectDocumentProgress(req);

            if (res.progress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjectDocuments

View the documents under this continuous project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectDocumentsRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectDocumentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectDocumentsRequest req = new GetContinuousProjectDocumentsRequest(978571L) {{
                filterByLanguage = "rerum";
            }};            

            GetContinuousProjectDocumentsResponse res = sdk.continuousProject.getContinuousProjectDocuments(req);

            if (res.continuousProjectDocumentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjectInvoices

Get real-time access to a continuous project's invoices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectInvoicesRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectInvoicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectInvoicesRequest req = new GetContinuousProjectInvoicesRequest(297437L);            

            GetContinuousProjectInvoicesResponse res = sdk.continuousProject.getContinuousProjectInvoices(req);

            if (res.continuousProjectInvoices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjectProgress

Monitor the translation progress of an ongoing continuous project in real-time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectProgressRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectProgressRequest req = new GetContinuousProjectProgressRequest(813798L) {{
                filterByLanguage = "ea";
            }};            

            GetContinuousProjectProgressResponse res = sdk.continuousProject.getContinuousProjectProgress(req);

            if (res.continuousProjectProgress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjects

View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectsRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectsResponse;
import org.openapis.openapi.models.operations.GetContinuousProjectsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectsRequest req = new GetContinuousProjectsRequest() {{
                type = GetContinuousProjectsTypeEnum.ACTIVE;
            }};            

            GetContinuousProjectsResponse res = sdk.continuousProject.getContinuousProjects(req);

            if (res.continuousProjectsList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteForDocument

Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteForDocumentRequest;
import org.openapis.openapi.models.operations.GetQuoteForDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetQuoteForDocumentRequest req = new GetQuoteForDocumentRequest(881104L, 249796L);            

            GetQuoteForDocumentResponse res = sdk.continuousProject.getQuoteForDocument(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteForDocuments

Get a new quote for provided documents in continuous project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteForDocumentsRequest;
import org.openapis.openapi.models.operations.GetQuoteForDocumentsResponse;
import org.openapis.openapi.models.shared.GetQuotesForDocumentsBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetQuoteForDocumentsRequest req = new GetQuoteForDocumentsRequest(313218L) {{
                getQuotesForDocumentsBody = new GetQuotesForDocumentsBody() {{
                    files = new Long[]{{
                        add(965417L),
                        add(692532L),
                        add(588465L),
                        add(725255L),
                    }};
                }};;
            }};            

            GetQuoteForDocumentsResponse res = sdk.continuousProject.getQuoteForDocuments(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteForLanguage

Get a new quote for provided target language in continuous project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteForLanguageRequest;
import org.openapis.openapi.models.operations.GetQuoteForLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetQuoteForLanguageRequest req = new GetQuoteForLanguageRequest(501324L, "deleniti");            

            GetQuoteForLanguageResponse res = sdk.continuousProject.getQuoteForLanguage(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteForLanguages

Get a new quote for provided target languages in continuous project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteForLanguagesRequest;
import org.openapis.openapi.models.operations.GetQuoteForLanguagesResponse;
import org.openapis.openapi.models.shared.GetQuotesForLanguagesBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetQuoteForLanguagesRequest req = new GetQuoteForLanguagesRequest(230533L) {{
                getQuotesForLanguagesBody = new GetQuotesForLanguagesBody() {{
                    languages = new String[]{{
                        add("nisi"),
                        add("vel"),
                        add("natus"),
                    }};
                }};;
            }};            

            GetQuoteForLanguagesResponse res = sdk.continuousProject.getQuoteForLanguages(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscription

Get subscription for continuous project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionRequest;
import org.openapis.openapi.models.operations.GetSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSubscriptionRequest req = new GetSubscriptionRequest(474867L);            

            GetSubscriptionResponse res = sdk.continuousProject.getSubscription(req);

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContinuousProjectDocumentProgress

Get continuous project document progress for multiple IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContinuousProjectDocumentProgressRequest;
import org.openapis.openapi.models.operations.PostContinuousProjectDocumentProgressResponse;
import org.openapis.openapi.models.shared.ContinuousProjectDocumentProgressBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostContinuousProjectDocumentProgressRequest req = new PostContinuousProjectDocumentProgressRequest(470132L) {{
                continuousProjectDocumentProgressBody = new ContinuousProjectDocumentProgressBody() {{
                    documentName = "magnam";
                    filterByLanguage = "distinctio";
                }};;
            }};            

            PostContinuousProjectDocumentProgressResponse res = sdk.continuousProject.postContinuousProjectDocumentProgress(req);

            if (res.progress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetActiveWidgetToken

Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetActiveWidgetTokenRequest;
import org.openapis.openapi.models.operations.ResetActiveWidgetTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResetActiveWidgetTokenRequest req = new ResetActiveWidgetTokenRequest(287991L, 290077L);            

            ResetActiveWidgetTokenResponse res = sdk.continuousProject.resetActiveWidgetToken(req);

            if (res.activeWidget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translate

Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateRequest;
import org.openapis.openapi.models.operations.TranslateResponse;
import org.openapis.openapi.models.shared.FileAsData;
import org.openapis.openapi.models.shared.InstantTranslationFilter;
import org.openapis.openapi.models.shared.InstantTranslationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            TranslateRequest req = new TranslateRequest(618016L, "nobis") {{
                instantTranslationRequest = new InstantTranslationRequest() {{
                    contents = new String[]{{
                        add("vero"),
                        add("aspernatur"),
                    }};
                    documents = new org.openapis.openapi.models.shared.FileAsData[]{{
                        add(new FileAsData() {{
                            data = "magnam";
                            name = "Miriam Hermann";
                        }}),
                    }};
                    filters = new InstantTranslationFilter() {{
                        skipMt = new String[]{{
                            add("accusantium"),
                            add("mollitia"),
                            add("reiciendis"),
                        }};
                        skipPostEdit = new String[]{{
                            add("ad"),
                            add("eum"),
                            add("dolor"),
                        }};
                    }};;
                    meta = new java.util.HashMap<String, Object>() {{
                        put("odit", "nemo");
                        put("quasi", "iure");
                        put("doloribus", "debitis");
                        put("eius", "maxime");
                    }};
                }};;
            }};            

            TranslateResponse res = sdk.continuousProject.translate(req);

            if (res.instantTranslationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateActiveWidget

Update Active widget settings.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateActiveWidgetRequest;
import org.openapis.openapi.models.operations.UpdateActiveWidgetResponse;
import org.openapis.openapi.models.shared.ActiveWidget;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateActiveWidgetRequest req = new UpdateActiveWidgetRequest(703889L, 447926L) {{
                activeWidget = new ActiveWidget() {{
                    adminMode = false;
                    allowHashInUrl = false;
                    allowQueryInUrl = false;
                    autoDetectSourceLanguage = false;
                    createdAt = OffsetDateTime.parse("2022-11-25T15:46:28.441Z");
                    debugMode = false;
                    elements = "repudiandae";
                    followUser = false;
                    forceCacheRefreshInterval = false;
                    hitBackendForExisting = false;
                    id = 352312L;
                    languageMappings = "expedita";
                    live = false;
                    modifyLinks = false;
                    name = "Kristie Spencer";
                    optimizePerPage = false;
                    pages = "pariatur";
                    pathRegex = "accusantium";
                    position = "consequuntur";
                    queryName = "praesentium";
                    rebootOnUrlChange = false;
                    restrictedDomains = "natus";
                    sections = "magni";
                    testMode = false;
                    theme = "sunt";
                    token = "quo";
                    urlChangeMode = "illum";
                    urlMode = "pariatur";
                    useCache = false;
                    useDummyTranslations = false;
                    variables = "maxime";
                }};;
            }};            

            UpdateActiveWidgetResponse res = sdk.continuousProject.updateActiveWidget(req);

            if (res.activeWidget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContinuousProject

Update the details and settings of continuous project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContinuousProjectRequest;
import org.openapis.openapi.models.operations.UpdateContinuousProjectResponse;
import org.openapis.openapi.models.shared.ContinuousProjectLanguage;
import org.openapis.openapi.models.shared.ContinuousProjectUpdateContent;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateContinuousProjectRequest req = new UpdateContinuousProjectRequest(569101L) {{
                continuousProjectUpdateContent = new ContinuousProjectUpdateContent() {{
                    analyticsEnabled = false;
                    autoStartPostedit = false;
                    isEnabled = false;
                    languages = new org.openapis.openapi.models.shared.ContinuousProjectLanguage[]{{
                        add(new ContinuousProjectLanguage() {{
                            code = "ea";
                            isEnabled = false;
                        }}),
                    }};
                    mtEnabled = false;
                    name = "Virginia Wunsch";
                    posteditEnabled = false;
                }};;
            }};            

            UpdateContinuousProjectResponse res = sdk.continuousProject.updateContinuousProject(req);

            if (res.continuousProject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDocument

Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDocumentRequest;
import org.openapis.openapi.models.operations.UpdateDocumentResponse;
import org.openapis.openapi.models.shared.AddOrUpdateDocumentRequest;
import org.openapis.openapi.models.shared.FileAsData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateDocumentRequest req = new UpdateDocumentRequest(420075L, 722056L) {{
                addOrUpdateDocumentRequest = new AddOrUpdateDocumentRequest() {{
                    document = new FileAsData() {{
                        data = "eaque";
                        name = "Dr. Herman Wolf";
                    }};;
                }};;
            }};            

            UpdateDocumentResponse res = sdk.continuousProject.updateDocument(req);

            if (res.continuousProjectDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscription

Update subscription for continuous project

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateSubscriptionRequest req = new UpdateSubscriptionRequest(                new Subscription() {{
                                downgrade = new String[]{{
                                    add("corporis"),
                                    add("hic"),
                                    add("libero"),
                                    add("nobis"),
                                }};
                                paymentMethod = 171629L;
                                periodEnd = OffsetDateTime.parse("2022-06-24T19:43:09.208Z");
                                planId = "dignissimos";
                                planName = "eaque";
                                price = "quis";
                                products = new Object[]{{
                                    add("eos"),
                                }};
                                scheduleName = "perferendis";
                                scheduleStart = OffsetDateTime.parse("2022-03-17T07:12:29.048Z");
                                subscriptionId = "quam";
                                upgrade = new String[]{{
                                    add("vero"),
                                }};
                                withTrial = "nostrum";
                            }};, 944120L);            

            UpdateSubscriptionResponse res = sdk.continuousProject.updateSubscription(req);

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriptionPaymentMethod

Update subscription payment method for continuous project

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionPaymentMethodRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionPaymentMethodResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateSubscriptionPaymentMethodRequest req = new UpdateSubscriptionPaymentMethodRequest(                new Subscription() {{
                                downgrade = new String[]{{
                                    add("facilis"),
                                    add("perspiciatis"),
                                    add("voluptatem"),
                                }};
                                paymentMethod = 783645L;
                                periodEnd = OffsetDateTime.parse("2022-07-02T11:46:10.299Z");
                                planId = "error";
                                planName = "eaque";
                                price = "occaecati";
                                products = new Object[]{{
                                    add("adipisci"),
                                    add("asperiores"),
                                    add("earum"),
                                }};
                                scheduleName = "modi";
                                scheduleStart = OffsetDateTime.parse("2021-08-23T06:19:56.211Z");
                                subscriptionId = "deleniti";
                                upgrade = new String[]{{
                                    add("provident"),
                                    add("nobis"),
                                    add("libero"),
                                    add("delectus"),
                                }};
                                withTrial = "quaerat";
                            }};, 554242L);            

            UpdateSubscriptionPaymentMethodResponse res = sdk.continuousProject.updateSubscriptionPaymentMethod(req);

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
