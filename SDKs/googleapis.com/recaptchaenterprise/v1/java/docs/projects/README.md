# projects

### Available Operations

* [recaptchaenterpriseProjectsAssessmentsAnnotate](#recaptchaenterpriseprojectsassessmentsannotate) - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* [recaptchaenterpriseProjectsAssessmentsCreate](#recaptchaenterpriseprojectsassessmentscreate) - Creates an Assessment of the likelihood an event is legitimate.
* [recaptchaenterpriseProjectsFirewallpoliciesCreate](#recaptchaenterpriseprojectsfirewallpoliciescreate) - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* [recaptchaenterpriseProjectsFirewallpoliciesList](#recaptchaenterpriseprojectsfirewallpolicieslist) - Returns the list of all firewall policies that belong to a project.
* [recaptchaenterpriseProjectsKeysCreate](#recaptchaenterpriseprojectskeyscreate) - Creates a new reCAPTCHA Enterprise key.
* [recaptchaenterpriseProjectsKeysDelete](#recaptchaenterpriseprojectskeysdelete) - Deletes the specified key.
* [recaptchaenterpriseProjectsKeysGetMetrics](#recaptchaenterpriseprojectskeysgetmetrics) - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* [recaptchaenterpriseProjectsKeysList](#recaptchaenterpriseprojectskeyslist) - Returns the list of all keys that belong to a project.
* [recaptchaenterpriseProjectsKeysMigrate](#recaptchaenterpriseprojectskeysmigrate) - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* [recaptchaenterpriseProjectsKeysPatch](#recaptchaenterpriseprojectskeyspatch) - Updates the specified key.
* [recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey](#recaptchaenterpriseprojectskeysretrievelegacysecretkey) - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* [recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch](#recaptchaenterpriseprojectsrelatedaccountgroupmembershipssearch) - Search group memberships related to a given account.
* [recaptchaenterpriseProjectsRelatedaccountgroupsList](#recaptchaenterpriseprojectsrelatedaccountgroupslist) - List groups of related accounts.
* [recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList](#recaptchaenterpriseprojectsrelatedaccountgroupsmembershipslist) - Get memberships in a group of related accounts.

## recaptchaenterpriseProjectsAssessmentsAnnotate

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsAssessmentsAnnotateRequest req = new RecaptchaenterpriseProjectsAssessmentsAnnotateRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest = new GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() {{
                    annotation = GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum.LEGITIMATE;
                    hashedAccountId = "recusandae";
                    reasons = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[]{{
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CHARGEBACK),
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.REFUND_FRAUD),
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CHARGEBACK),
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.INITIATED_TWO_FACTOR),
                    }};
                    transactionEvent = new GoogleCloudRecaptchaenterpriseV1TransactionEvent() {{
                        eventTime = "perferendis";
                        eventType = GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum.PAYMENT_CAPTURE;
                        reason = "repellendus";
                        value = 9571.56;
                    }};;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
            }};            

            RecaptchaenterpriseProjectsAssessmentsAnnotateResponse res = sdk.projects.recaptchaenterpriseProjectsAssessmentsAnnotate(req, new RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity("totam", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsAssessmentsCreate

Creates an Assessment of the likelihood an event is legitimate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AssessmentInput;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1Event;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallAction;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TokenProperties;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionData;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionDataItem;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionDataUser;
import org.openapis.openapi.models.shared.GoogleRpcStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsAssessmentsCreateRequest req = new RecaptchaenterpriseProjectsAssessmentsCreateRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecaptchaenterpriseV1AssessmentInput = new GoogleCloudRecaptchaenterpriseV1AssessmentInput() {{
                    accountDefenderAssessment = new GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment() {{
                        labels = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum[]{{
                            add(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum.SUSPICIOUS_ACCOUNT_CREATION),
                            add(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum.SUSPICIOUS_LOGIN_ACTIVITY),
                            add(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum.ACCOUNT_DEFENDER_LABEL_UNSPECIFIED),
                        }};
                    }};;
                    accountVerification = new GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput() {{
                        endpoints = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput[]{{
                            add(new GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput() {{
                                emailAddress = "hic";
                                phoneNumber = "optio";
                            }}),
                            add(new GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput() {{
                                emailAddress = "totam";
                                phoneNumber = "beatae";
                            }}),
                            add(new GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput() {{
                                emailAddress = "commodi";
                                phoneNumber = "molestiae";
                            }}),
                        }};
                        languageCode = "modi";
                        username = "Christy.Ryan21";
                    }};;
                    event = new GoogleCloudRecaptchaenterpriseV1Event() {{
                        expectedAction = "excepturi";
                        express = false;
                        firewallPolicyEvaluation = false;
                        hashedAccountId = "aspernatur";
                        headers = new String[]{{
                            add("ad"),
                        }};
                        ja3 = "natus";
                        requestedUri = "sed";
                        siteKey = "iste";
                        token = "dolor";
                        transactionData = new GoogleCloudRecaptchaenterpriseV1TransactionData() {{
                            billingAddress = new GoogleCloudRecaptchaenterpriseV1TransactionDataAddress() {{
                                address = new String[]{{
                                    add("laboriosam"),
                                    add("hic"),
                                    add("saepe"),
                                }};
                                administrativeArea = "fuga";
                                locality = "in";
                                postalCode = "64960";
                                recipient = "ipsa";
                                regionCode = "reiciendis";
                            }};;
                            cardBin = "est";
                            cardLastFour = "mollitia";
                            currencyCode = "laborum";
                            gatewayInfo = new GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo() {{
                                avsResponseCode = "dolores";
                                cvvResponseCode = "dolorem";
                                gatewayResponseCode = "corporis";
                                name = "Della Halvorson";
                            }};;
                            items = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionDataItem[]{{
                                add(new GoogleCloudRecaptchaenterpriseV1TransactionDataItem() {{
                                    merchantAccountId = "excepturi";
                                    name = "Charlene Nicolas";
                                    quantity = "architecto";
                                    value = 6527.9;
                                }}),
                                add(new GoogleCloudRecaptchaenterpriseV1TransactionDataItem() {{
                                    merchantAccountId = "dolorem";
                                    name = "Carlos Ziemann";
                                    quantity = "numquam";
                                    value = 4143.69;
                                }}),
                            }};
                            merchants = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionDataUser[]{{
                                add(new GoogleCloudRecaptchaenterpriseV1TransactionDataUser() {{
                                    accountId = "molestiae";
                                    creationMs = "velit";
                                    email = "Carmelo67@yahoo.com";
                                    emailVerified = false;
                                    phoneNumber = "animi";
                                    phoneVerified = false;
                                }}),
                                add(new GoogleCloudRecaptchaenterpriseV1TransactionDataUser() {{
                                    accountId = "enim";
                                    creationMs = "odit";
                                    email = "Cleveland_Wiegand@hotmail.com";
                                    emailVerified = false;
                                    phoneNumber = "possimus";
                                    phoneVerified = false;
                                }}),
                            }};
                            paymentMethod = "aut";
                            shippingAddress = new GoogleCloudRecaptchaenterpriseV1TransactionDataAddress() {{
                                address = new String[]{{
                                    add("error"),
                                }};
                                administrativeArea = "temporibus";
                                locality = "laborum";
                                postalCode = "99845";
                                recipient = "voluptatibus";
                                regionCode = "ipsa";
                            }};;
                            shippingValue = 6048.46;
                            transactionId = "voluptate";
                            user = new GoogleCloudRecaptchaenterpriseV1TransactionDataUser() {{
                                accountId = "cum";
                                creationMs = "perferendis";
                                email = "Iliana.Grady35@gmail.com";
                                emailVerified = false;
                                phoneNumber = "dolore";
                                phoneVerified = false;
                            }};;
                            value = 4808.94;
                        }};;
                        userAgent = "dicta";
                        userIpAddress = "harum";
                        wafTokenAssessment = false;
                    }};;
                    firewallPolicyAssessment = new GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment() {{
                        error = new GoogleRpcStatus() {{
                            code = 317983;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("repudiandae", "quae");
                                    put("ipsum", "quidem");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("excepturi", "pariatur");
                                    put("modi", "praesentium");
                                    put("rem", "voluptates");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("repudiandae", "sint");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("itaque", "incidunt");
                                }}),
                            }};
                            message = "enim";
                        }};;
                        firewallPolicy = new GoogleCloudRecaptchaenterpriseV1FirewallPolicy() {{
                            actions = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallAction[]{{
                                add(new GoogleCloudRecaptchaenterpriseV1FirewallAction() {{
                                    allow = new java.util.HashMap<String, Object>() {{
                                        put("quibusdam", "explicabo");
                                        put("deserunt", "distinctio");
                                        put("quibusdam", "labore");
                                    }};
                                    block = new java.util.HashMap<String, Object>() {{
                                        put("qui", "aliquid");
                                        put("cupiditate", "quos");
                                    }};
                                    redirect = new java.util.HashMap<String, Object>() {{
                                        put("magni", "assumenda");
                                    }};
                                    setHeader = new GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction() {{
                                        key = "ipsam";
                                        value = "alias";
                                    }};
                                    substitute = new GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction() {{
                                        path = "fugit";
                                    }};
                                }}),
                            }};
                            condition = "dolorum";
                            description = "excepturi";
                            name = "Olivia Rice";
                            path = "eum";
                        }};;
                    }};;
                    fraudPreventionAssessment = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment() {{
                        behavioralTrustVerdict = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict() {{
                            trust = 2487.53;
                        }};;
                        cardTestingVerdict = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict() {{
                            risk = 7561.07;
                        }};;
                        stolenInstrumentVerdict = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict() {{
                            risk = 5761.57;
                        }};;
                        transactionRisk = 3960.98;
                    }};;
                    privatePasswordLeakVerification = new GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput() {{
                        encryptedUserCredentialsHash = "provident";
                        lookupHashPrefix = "necessitatibus";
                    }};;
                    riskAnalysis = new GoogleCloudRecaptchaenterpriseV1RiskAnalysis() {{
                        extendedVerdictReasons = new String[]{{
                            add("officia"),
                            add("dolor"),
                            add("debitis"),
                        }};
                        reasons = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum[]{{
                            add(GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum.LOW_CONFIDENCE_SCORE),
                            add(GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum.TOO_MUCH_TRAFFIC),
                            add(GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum.TOO_MUCH_TRAFFIC),
                            add(GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum.SUSPECTED_CARDING),
                        }};
                        score = 9785.71;
                    }};;
                    tokenProperties = new GoogleCloudRecaptchaenterpriseV1TokenProperties() {{
                        action = "rerum";
                        androidPackageName = "dicta";
                        createTime = "magnam";
                        hostname = "smoggy-sledge.info";
                        invalidReason = GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum.MALFORMED;
                        iosBundleId = "laborum";
                        valid = false;
                    }};;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            RecaptchaenterpriseProjectsAssessmentsCreateResponse res = sdk.projects.recaptchaenterpriseProjectsAssessmentsCreate(req, new RecaptchaenterpriseProjectsAssessmentsCreateSecurity("id", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1Assessment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsFirewallpoliciesCreate

Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallAction;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsFirewallpoliciesCreateRequest req = new RecaptchaenterpriseProjectsFirewallpoliciesCreateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1FirewallPolicy = new GoogleCloudRecaptchaenterpriseV1FirewallPolicy() {{
                    actions = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1FirewallAction[]{{
                        add(new GoogleCloudRecaptchaenterpriseV1FirewallAction() {{
                            allow = new java.util.HashMap<String, Object>() {{
                                put("nisi", "vel");
                                put("natus", "omnis");
                                put("molestiae", "perferendis");
                            }};
                            block = new java.util.HashMap<String, Object>() {{
                                put("magnam", "distinctio");
                                put("id", "labore");
                            }};
                            redirect = new java.util.HashMap<String, Object>() {{
                                put("suscipit", "natus");
                                put("nobis", "eum");
                            }};
                            setHeader = new GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction() {{
                                key = "vero";
                                value = "aspernatur";
                            }};
                            substitute = new GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction() {{
                                path = "architecto";
                            }};
                        }}),
                    }};
                    condition = "magnam";
                    description = "et";
                    name = "Derrick McLaughlin";
                    path = "accusantium";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "ad";
                key = "eum";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "odit";
                uploadProtocol = "nemo";
            }};            

            RecaptchaenterpriseProjectsFirewallpoliciesCreateResponse res = sdk.projects.recaptchaenterpriseProjectsFirewallpoliciesCreate(req, new RecaptchaenterpriseProjectsFirewallpoliciesCreateSecurity("quasi", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1FirewallPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsFirewallpoliciesList

Returns the list of all firewall policies that belong to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsFirewallpoliciesListRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsFirewallpoliciesListResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsFirewallpoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsFirewallpoliciesListRequest req = new RecaptchaenterpriseProjectsFirewallpoliciesListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "facilis";
                key = "in";
                oauthToken = "architecto";
                pageSize = 99569L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            RecaptchaenterpriseProjectsFirewallpoliciesListResponse res = sdk.projects.recaptchaenterpriseProjectsFirewallpoliciesList(req, new RecaptchaenterpriseProjectsFirewallpoliciesListSecurity("repellat", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsKeysCreate

Creates a new reCAPTCHA Enterprise key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysCreateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysCreateResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1KeyInput;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TestingOptions;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WafSettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WebKeySettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsKeysCreateRequest req = new RecaptchaenterpriseProjectsKeysCreateRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1KeyInput = new GoogleCloudRecaptchaenterpriseV1KeyInput() {{
                    androidSettings = new GoogleCloudRecaptchaenterpriseV1AndroidKeySettings() {{
                        allowAllPackageNames = false;
                        allowedPackageNames = new String[]{{
                            add("accusantium"),
                            add("consequuntur"),
                            add("praesentium"),
                            add("natus"),
                        }};
                        supportNonGoogleAppStoreDistribution = false;
                    }};;
                    displayName = "magni";
                    iosSettings = new GoogleCloudRecaptchaenterpriseV1IOSKeySettings() {{
                        allowAllBundleIds = false;
                        allowedBundleIds = new String[]{{
                            add("quo"),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("pariatur", "maxime");
                        put("ea", "excepturi");
                        put("odit", "ea");
                        put("accusantium", "ab");
                    }};
                    name = "Rickey Hintz";
                    testingOptions = new GoogleCloudRecaptchaenterpriseV1TestingOptions() {{
                        testingChallenge = GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum.UNSOLVABLE_CHALLENGE;
                        testingScore = 505.88;
                    }};;
                    wafSettings = new GoogleCloudRecaptchaenterpriseV1WafSettings() {{
                        wafFeature = GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum.EXPRESS;
                        wafService = GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum.CA;
                    }};;
                    webSettings = new GoogleCloudRecaptchaenterpriseV1WebKeySettings() {{
                        allowAllDomains = false;
                        allowAmpTraffic = false;
                        allowedDomains = new String[]{{
                            add("perferendis"),
                            add("fugiat"),
                            add("amet"),
                            add("aut"),
                        }};
                        challengeSecurityPreference = GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum.SECURITY;
                        integrationType = GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum.SCORE;
                    }};;
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "dolores";
                key = "quis";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "eaque";
                uploadProtocol = "quis";
            }};            

            RecaptchaenterpriseProjectsKeysCreateResponse res = sdk.projects.recaptchaenterpriseProjectsKeysCreate(req, new RecaptchaenterpriseProjectsKeysCreateSecurity("nesciunt", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1Key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsKeysDelete

Deletes the specified key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysDeleteRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysDeleteResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsKeysDeleteRequest req = new RecaptchaenterpriseProjectsKeysDeleteRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "vero";
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            RecaptchaenterpriseProjectsKeysDeleteResponse res = sdk.projects.recaptchaenterpriseProjectsKeysDelete(req, new RecaptchaenterpriseProjectsKeysDeleteSecurity("perspiciatis", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsKeysGetMetrics

Get some aggregated metrics for a Key. This data can be used to build dashboards.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysGetMetricsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsKeysGetMetricsRequest req = new RecaptchaenterpriseProjectsKeysGetMetricsRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            RecaptchaenterpriseProjectsKeysGetMetricsResponse res = sdk.projects.recaptchaenterpriseProjectsKeysGetMetrics(req, new RecaptchaenterpriseProjectsKeysGetMetricsSecurity("iste", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1Metrics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsKeysList

Returns the list of all keys that belong to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysListRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysListResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsKeysListRequest req = new RecaptchaenterpriseProjectsKeysListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "delectus";
                key = "quaerat";
                oauthToken = "quos";
                pageSize = 398221L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolor";
                uploadProtocol = "qui";
            }};            

            RecaptchaenterpriseProjectsKeysListResponse res = sdk.projects.recaptchaenterpriseProjectsKeysList(req, new RecaptchaenterpriseProjectsKeysListSecurity("ipsum", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1ListKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsKeysMigrate

Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysMigrateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysMigrateResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysMigrateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsKeysMigrateRequest req = new RecaptchaenterpriseProjectsKeysMigrateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1MigrateKeyRequest = new GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest() {{
                    skipBillingCheck = false;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "amet";
                key = "dolorum";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ipsa";
                uploadProtocol = "ipsa";
            }};            

            RecaptchaenterpriseProjectsKeysMigrateResponse res = sdk.projects.recaptchaenterpriseProjectsKeysMigrate(req, new RecaptchaenterpriseProjectsKeysMigrateSecurity("iure", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1Key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsKeysPatch

Updates the specified key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysPatchRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysPatchResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1KeyInput;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TestingOptions;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WafSettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WebKeySettings;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsKeysPatchRequest req = new RecaptchaenterpriseProjectsKeysPatchRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1KeyInput = new GoogleCloudRecaptchaenterpriseV1KeyInput() {{
                    androidSettings = new GoogleCloudRecaptchaenterpriseV1AndroidKeySettings() {{
                        allowAllPackageNames = false;
                        allowedPackageNames = new String[]{{
                            add("voluptatibus"),
                            add("voluptas"),
                            add("natus"),
                        }};
                        supportNonGoogleAppStoreDistribution = false;
                    }};;
                    displayName = "eos";
                    iosSettings = new GoogleCloudRecaptchaenterpriseV1IOSKeySettings() {{
                        allowAllBundleIds = false;
                        allowedBundleIds = new String[]{{
                            add("sit"),
                            add("fugiat"),
                            add("ab"),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorum", "iusto");
                        put("voluptate", "dolorum");
                        put("deleniti", "omnis");
                    }};
                    name = "Kelvin Zboncak";
                    testingOptions = new GoogleCloudRecaptchaenterpriseV1TestingOptions() {{
                        testingChallenge = GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum.NOCAPTCHA;
                        testingScore = 6630.78;
                    }};;
                    wafSettings = new GoogleCloudRecaptchaenterpriseV1WafSettings() {{
                        wafFeature = GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum.EXPRESS;
                        wafService = GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum.WAF_SERVICE_UNSPECIFIED;
                    }};;
                    webSettings = new GoogleCloudRecaptchaenterpriseV1WebKeySettings() {{
                        allowAllDomains = false;
                        allowAmpTraffic = false;
                        allowedDomains = new String[]{{
                            add("perferendis"),
                        }};
                        challengeSecurityPreference = GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum.CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED;
                        integrationType = GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum.INVISIBLE;
                    }};;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "suscipit";
                key = "deserunt";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "minima";
                updateMask = "repellendus";
                uploadType = "totam";
                uploadProtocol = "similique";
            }};            

            RecaptchaenterpriseProjectsKeysPatchResponse res = sdk.projects.recaptchaenterpriseProjectsKeysPatch(req, new RecaptchaenterpriseProjectsKeysPatchSecurity("alias", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1Key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey

Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest req = new RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "qui";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "esse";
                uploadProtocol = "harum";
            }};            

            RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse res = sdk.projects.recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey(req, new RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity("iusto", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch

Search group memberships related to a given account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest req = new RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest = new GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest() {{
                    hashedAccountId = "amet";
                    pageSize = 730856;
                    pageToken = "accusamus";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "sapiente";
                key = "totam";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "expedita";
                uploadProtocol = "neque";
            }};            

            RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse res = sdk.projects.recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch(req, new RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity("sed", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsRelatedaccountgroupsList

List groups of related accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest req = new RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "incidunt";
                key = "qui";
                oauthToken = "cupiditate";
                pageSize = 807581L;
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "dicta";
                uploadProtocol = "laborum";
            }};            

            RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse res = sdk.projects.recaptchaenterpriseProjectsRelatedaccountgroupsList(req, new RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity("totam", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList

Get memberships in a group of related accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest req = new RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "quam";
                key = "molestias";
                oauthToken = "temporibus";
                pageSize = 183280L;
                pageToken = "neque";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "magni";
                uploadProtocol = "odio";
            }};            

            RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse res = sdk.projects.recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList(req, new RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity("sunt", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
