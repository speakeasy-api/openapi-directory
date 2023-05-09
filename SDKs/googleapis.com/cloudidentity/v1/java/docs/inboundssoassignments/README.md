# inboundSsoAssignments

### Available Operations

* [cloudidentityInboundSsoAssignmentsCreate](#cloudidentityinboundssoassignmentscreate) - Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
* [cloudidentityInboundSsoAssignmentsDelete](#cloudidentityinboundssoassignmentsdelete) - Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
* [cloudidentityInboundSsoAssignmentsGet](#cloudidentityinboundssoassignmentsget) - Gets an InboundSsoAssignment.
* [cloudidentityInboundSsoAssignmentsList](#cloudidentityinboundssoassignmentslist) - Lists the InboundSsoAssignments for a `Customer`.
* [cloudidentityInboundSsoAssignmentsPatch](#cloudidentityinboundssoassignmentspatch) - Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

## cloudidentityInboundSsoAssignmentsCreate

Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsCreateRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsCreateResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InboundSsoAssignmentInput;
import org.openapis.openapi.models.shared.InboundSsoAssignmentSsoModeEnum;
import org.openapis.openapi.models.shared.SamlSsoInfo;
import org.openapis.openapi.models.shared.SignInBehavior;
import org.openapis.openapi.models.shared.SignInBehaviorRedirectConditionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSsoAssignmentsCreateRequest req = new CloudidentityInboundSsoAssignmentsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                inboundSsoAssignmentInput = new InboundSsoAssignmentInput() {{
                    customer = "magnam";
                    rank = 487935;
                    samlSsoInfo = new SamlSsoInfo() {{
                        inboundSamlSsoProfile = "eius";
                    }};;
                    signInBehavior = new SignInBehavior() {{
                        redirectCondition = SignInBehaviorRedirectConditionEnum.REDIRECT_CONDITION_UNSPECIFIED;
                    }};;
                    ssoMode = InboundSsoAssignmentSsoModeEnum.SSO_OFF;
                    targetGroup = "rem";
                    targetOrgUnit = "fuga";
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "ut";
                key = "eum";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "eos";
                uploadProtocol = "praesentium";
            }};            

            CloudidentityInboundSsoAssignmentsCreateResponse res = sdk.inboundSsoAssignments.cloudidentityInboundSsoAssignmentsCreate(req, new CloudidentityInboundSsoAssignmentsCreateSecurity("quisquam", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityInboundSsoAssignmentsDelete

Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsDeleteRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsDeleteResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsDeleteSecurity;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSsoAssignmentsDeleteRequest req = new CloudidentityInboundSsoAssignmentsDeleteRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "quo";
                customer = "illum";
                fields = "quo";
                key = "fuga";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "voluptas";
                uploadProtocol = "ab";
            }};            

            CloudidentityInboundSsoAssignmentsDeleteResponse res = sdk.inboundSsoAssignments.cloudidentityInboundSsoAssignmentsDelete(req, new CloudidentityInboundSsoAssignmentsDeleteSecurity() {{
                option1 = new CloudidentityInboundSsoAssignmentsDeleteSecurityOption1("cupiditate", "consequatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityInboundSsoAssignmentsGet

Gets an InboundSsoAssignment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsGetRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsGetResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsGetSecurity;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSsoAssignmentsGetRequest req = new CloudidentityInboundSsoAssignmentsGetRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "quo";
                key = "esse";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aperiam";
                readMask = "distinctio";
                uploadType = "quod";
                uploadProtocol = "dignissimos";
            }};            

            CloudidentityInboundSsoAssignmentsGetResponse res = sdk.inboundSsoAssignments.cloudidentityInboundSsoAssignmentsGet(req, new CloudidentityInboundSsoAssignmentsGetSecurity() {{
                option1 = new CloudidentityInboundSsoAssignmentsGetSecurityOption1("inventore", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.inboundSsoAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityInboundSsoAssignmentsList

Lists the InboundSsoAssignments for a `Customer`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsListRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsListResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSsoAssignmentsListRequest req = new CloudidentityInboundSsoAssignmentsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "occaecati";
                filter = "commodi";
                key = "sapiente";
                oauthToken = "dolores";
                pageSize = 645570L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "porro";
                uploadProtocol = "eum";
            }};            

            CloudidentityInboundSsoAssignmentsListResponse res = sdk.inboundSsoAssignments.cloudidentityInboundSsoAssignmentsList(req, new CloudidentityInboundSsoAssignmentsListSecurity("quas", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInboundSsoAssignmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityInboundSsoAssignmentsPatch

Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsPatchRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsPatchResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsPatchSecurity;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityInboundSsoAssignmentsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InboundSsoAssignmentInput;
import org.openapis.openapi.models.shared.InboundSsoAssignmentSsoModeEnum;
import org.openapis.openapi.models.shared.SamlSsoInfo;
import org.openapis.openapi.models.shared.SignInBehavior;
import org.openapis.openapi.models.shared.SignInBehaviorRedirectConditionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSsoAssignmentsPatchRequest req = new CloudidentityInboundSsoAssignmentsPatchRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                inboundSsoAssignmentInput = new InboundSsoAssignmentInput() {{
                    customer = "fugit";
                    rank = 681393;
                    samlSsoInfo = new SamlSsoInfo() {{
                        inboundSamlSsoProfile = "mollitia";
                    }};;
                    signInBehavior = new SignInBehavior() {{
                        redirectCondition = SignInBehaviorRedirectConditionEnum.REDIRECT_CONDITION_UNSPECIFIED;
                    }};;
                    ssoMode = InboundSsoAssignmentSsoModeEnum.SAML_SSO;
                    targetGroup = "explicabo";
                    targetOrgUnit = "minima";
                }};;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "consequuntur";
                key = "ratione";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "saepe";
                updateMask = "occaecati";
                uploadType = "atque";
                uploadProtocol = "et";
            }};            

            CloudidentityInboundSsoAssignmentsPatchResponse res = sdk.inboundSsoAssignments.cloudidentityInboundSsoAssignmentsPatch(req, new CloudidentityInboundSsoAssignmentsPatchSecurity() {{
                option1 = new CloudidentityInboundSsoAssignmentsPatchSecurityOption1("esse", "eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
