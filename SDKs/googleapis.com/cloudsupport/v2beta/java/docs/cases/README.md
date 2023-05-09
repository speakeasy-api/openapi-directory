# cases

### Available Operations

* [cloudsupportCasesAttachmentsList](#cloudsupportcasesattachmentslist) - Retrieve all attachments associated with a support case.
* [cloudsupportCasesClose](#cloudsupportcasesclose) - Close the specified case.
* [cloudsupportCasesCommentsCreate](#cloudsupportcasescommentscreate) - Add a new comment to the specified Case. The comment object must have the following fields set: body.
* [cloudsupportCasesCommentsList](#cloudsupportcasescommentslist) - Retrieve all Comments associated with the Case object.
* [cloudsupportCasesCreate](#cloudsupportcasescreate) - Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.
* [cloudsupportCasesEscalate](#cloudsupportcasesescalate) - Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
* [cloudsupportCasesGet](#cloudsupportcasesget) - Retrieve the specified case.
* [cloudsupportCasesList](#cloudsupportcaseslist) - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
* [cloudsupportCasesPatch](#cloudsupportcasespatch) - Update the specified case. Only a subset of fields can be updated.
* [cloudsupportCasesSearch](#cloudsupportcasessearch) - Search cases using the specified query.

## cloudsupportCasesAttachmentsList

Retrieve all attachments associated with a support case.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesAttachmentsListRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesAttachmentsListResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesAttachmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesAttachmentsListRequest req = new CloudsupportCasesAttachmentsListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                pageSize = 870013L;
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            CloudsupportCasesAttachmentsListResponse res = sdk.cases.cloudsupportCasesAttachmentsList(req, new CloudsupportCasesAttachmentsListSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAttachmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesClose

Close the specified case.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesCloseRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesCloseResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesCloseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesCloseRequest req = new CloudsupportCasesCloseRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dicta", "nam");
                    put("officia", "occaecati");
                    put("fugit", "deleniti");
                }};
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "beatae";
                key = "commodi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
            }};            

            CloudsupportCasesCloseResponse res = sdk.cases.cloudsupportCasesClose(req, new CloudsupportCasesCloseSecurity("cum", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.case_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesCommentsCreate

Add a new comment to the specified Case. The comment object must have the following fields set: body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesCommentsCreateRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesCommentsCreateResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesCommentsCreateSecurity;
import org.openapis.openapi.models.shared.ActorInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommentInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesCommentsCreateRequest req = new CloudsupportCasesCommentsCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                commentInput = new CommentInput() {{
                    body = "aspernatur";
                    creator = new ActorInput() {{
                        displayName = "perferendis";
                        email = "Lia.Cormier@gmail.com";
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            CloudsupportCasesCommentsCreateResponse res = sdk.cases.cloudsupportCasesCommentsCreate(req, new CloudsupportCasesCommentsCreateSecurity("saepe", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesCommentsList

Retrieve all Comments associated with the Case object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesCommentsListRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesCommentsListResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesCommentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesCommentsListRequest req = new CloudsupportCasesCommentsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                pageSize = 358152L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            CloudsupportCasesCommentsListResponse res = sdk.cases.cloudsupportCasesCommentsList(req, new CloudsupportCasesCommentsListSecurity("nemo", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCommentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesCreate

Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesCreateRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesCreateResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesCreateSecurity;
import org.openapis.openapi.models.shared.ActorInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CaseClassification;
import org.openapis.openapi.models.shared.CaseInput;
import org.openapis.openapi.models.shared.CasePriorityEnum;
import org.openapis.openapi.models.shared.CaseSeverityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesCreateRequest req = new CloudsupportCasesCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                caseInput = new CaseInput() {{
                    classification = new CaseClassification() {{
                        displayName = "iure";
                        id = "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0";
                    }};;
                    contactEmail = "quasi";
                    creator = new ActorInput() {{
                        displayName = "error";
                        email = "Margie_Boyer87@hotmail.com";
                    }};;
                    description = "nihil";
                    displayName = "praesentium";
                    escalated = false;
                    languageCode = "voluptatibus";
                    name = "Geneva Klein Jr.";
                    priority = CasePriorityEnum.P1;
                    severity = CaseSeverityEnum.S0;
                    subscriberEmailAddresses = new String[]{{
                        add("dicta"),
                        add("corporis"),
                        add("dolore"),
                        add("iusto"),
                    }};
                    testCase = false;
                    timeZone = "dicta";
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            CloudsupportCasesCreateResponse res = sdk.cases.cloudsupportCasesCreate(req, new CloudsupportCasesCreateSecurity("excepturi", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.case_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesEscalate

Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesEscalateRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesEscalateResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesEscalateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EscalateCaseRequest;
import org.openapis.openapi.models.shared.Escalation;
import org.openapis.openapi.models.shared.EscalationReasonEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesEscalateRequest req = new CloudsupportCasesEscalateRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                escalateCaseRequest = new EscalateCaseRequest() {{
                    escalation = new Escalation() {{
                        justification = "rem";
                        reason = EscalationReasonEnum.BUSINESS_IMPACT;
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            CloudsupportCasesEscalateResponse res = sdk.cases.cloudsupportCasesEscalate(req, new CloudsupportCasesEscalateSecurity("quibusdam", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.case_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesGet

Retrieve the specified case.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesGetRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesGetResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesGetRequest req = new CloudsupportCasesGetRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            CloudsupportCasesGetResponse res = sdk.cases.cloudsupportCasesGet(req, new CloudsupportCasesGetSecurity("assumenda", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.case_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesList

Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesListRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesListResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesListRequest req = new CloudsupportCasesListRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "facilis";
                filter = "tempore";
                key = "labore";
                oauthToken = "delectus";
                pageSize = 433288L;
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }};            

            CloudsupportCasesListResponse res = sdk.cases.cloudsupportCasesList(req, new CloudsupportCasesListSecurity("provident", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesPatch

Update the specified case. Only a subset of fields can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesPatchRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesPatchResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesPatchSecurity;
import org.openapis.openapi.models.shared.ActorInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CaseClassification;
import org.openapis.openapi.models.shared.CaseInput;
import org.openapis.openapi.models.shared.CasePriorityEnum;
import org.openapis.openapi.models.shared.CaseSeverityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesPatchRequest req = new CloudsupportCasesPatchRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                caseInput = new CaseInput() {{
                    classification = new CaseClassification() {{
                        displayName = "dolor";
                        id = "efa77dfb-14cd-466a-a395-efb9ba88f3a6";
                    }};;
                    contactEmail = "vel";
                    creator = new ActorInput() {{
                        displayName = "natus";
                        email = "Jarred.Aufderhar@yahoo.com";
                    }};;
                    description = "distinctio";
                    displayName = "id";
                    escalated = false;
                    languageCode = "labore";
                    name = "Laurie Mosciski";
                    priority = CasePriorityEnum.P4;
                    severity = CaseSeverityEnum.SEVERITY_UNSPECIFIED;
                    subscriberEmailAddresses = new String[]{{
                        add("magnam"),
                    }};
                    testCase = false;
                    timeZone = "et";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quos";
                key = "sint";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "mollitia";
                updateMask = "reiciendis";
                uploadType = "mollitia";
                uploadProtocol = "ad";
            }};            

            CloudsupportCasesPatchResponse res = sdk.cases.cloudsupportCasesPatch(req, new CloudsupportCasesPatchSecurity("eum", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.case_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsupportCasesSearch

Search cases using the specified query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCasesSearchRequest;
import org.openapis.openapi.models.operations.CloudsupportCasesSearchResponse;
import org.openapis.openapi.models.operations.CloudsupportCasesSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCasesSearchRequest req = new CloudsupportCasesSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                key = "doloribus";
                oauthToken = "debitis";
                pageSize = 260341L;
                pageToken = "maxime";
                prettyPrint = false;
                query = "deleniti";
                quotaUser = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            CloudsupportCasesSearchResponse res = sdk.cases.cloudsupportCasesSearch(req, new CloudsupportCasesSearchSecurity("architecto", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchCasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
