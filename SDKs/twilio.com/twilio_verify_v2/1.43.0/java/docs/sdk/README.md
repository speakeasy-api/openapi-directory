# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAccessToken](#createaccesstoken) - Create a new enrollment Access Token for the Entity
* [createBucket](#createbucket) - Create a new Bucket for a Rate Limit
* [createChallenge](#createchallenge) - Create a new Challenge for the Factor
* [createEntity](#createentity) - Create a new Entity for the Service
* [createMessagingConfiguration](#createmessagingconfiguration) - Create a new MessagingConfiguration for a service.
* [createNewFactor](#createnewfactor) - Create a new Factor for the Entity
* [createNotification](#createnotification) - Create a new Notification for the corresponding Challenge
* [createRateLimit](#createratelimit) - Create a new Rate Limit for a Service
* [createSafelist](#createsafelist) - Add a new phone number to SafeList.
* [createService](#createservice) - Create a new Verification Service.
* [createVerification](#createverification) - Create a new Verification using a Service
* [createVerificationCheck](#createverificationcheck) - challenge a specific Verification Check.
* [createWebhook](#createwebhook) - Create a new Webhook for the Service
* [deleteBucket](#deletebucket) - Delete a specific Bucket.
* [deleteEntity](#deleteentity) - Delete a specific Entity.
* [deleteFactor](#deletefactor) - Delete a specific Factor.
* [deleteMessagingConfiguration](#deletemessagingconfiguration) - Delete a specific MessagingConfiguration.
* [deleteRateLimit](#deleteratelimit) - Delete a specific Rate Limit.
* [deleteSafelist](#deletesafelist) - Remove a phone number from SafeList.
* [deleteService](#deleteservice) - Delete a specific Verification Service Instance.
* [deleteWebhook](#deletewebhook) - Delete a specific Webhook.
* [fetchAccessToken](#fetchaccesstoken) - Fetch an Access Token for the Entity
* [fetchBucket](#fetchbucket) - Fetch a specific Bucket.
* [fetchChallenge](#fetchchallenge) - Fetch a specific Challenge.
* [fetchEntity](#fetchentity) - Fetch a specific Entity.
* [fetchFactor](#fetchfactor) - Fetch a specific Factor.
* [fetchForm](#fetchform) - Fetch the forms for a specific Form Type.
* [fetchMessagingConfiguration](#fetchmessagingconfiguration) - Fetch a specific MessagingConfiguration.
* [fetchRateLimit](#fetchratelimit) - Fetch a specific Rate Limit.
* [fetchSafelist](#fetchsafelist) - Check if a phone number exists in SafeList.
* [fetchService](#fetchservice) - Fetch specific Verification Service Instance.
* [fetchVerification](#fetchverification) - Fetch a specific Verification
* [fetchVerificationAttempt](#fetchverificationattempt) - Fetch a specific verification attempt.
* [fetchVerificationAttemptsSummary](#fetchverificationattemptssummary) - Get a summary of how many attempts were made and how many were converted.
* [fetchWebhook](#fetchwebhook) - Fetch a specific Webhook.
* [listBucket](#listbucket) - Retrieve a list of all Buckets for a Rate Limit.
* [listChallenge](#listchallenge) - Retrieve a list of all Challenges for a Factor.
* [listEntity](#listentity) - Retrieve a list of all Entities for a Service.
* [listFactor](#listfactor) - Retrieve a list of all Factors for an Entity.
* [listMessagingConfiguration](#listmessagingconfiguration) - Retrieve a list of all Messaging Configurations for a Service.
* [listRateLimit](#listratelimit) - Retrieve a list of all Rate Limits for a service.
* [listService](#listservice) - Retrieve a list of all Verification Services for an account.
* [listVerificationAttempt](#listverificationattempt) - List all the verification attempts for a given Account.
* [listVerificationTemplate](#listverificationtemplate) - List all the available templates for a given Account.
* [listWebhook](#listwebhook) - Retrieve a list of all Webhooks for a Service.
* [updateBucket](#updatebucket) - Update a specific Bucket.
* [updateChallenge](#updatechallenge) - Verify a specific Challenge.
* [updateFactor](#updatefactor) - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
* [updateMessagingConfiguration](#updatemessagingconfiguration) - Update a specific MessagingConfiguration
* [updateRateLimit](#updateratelimit) - Update a specific Rate Limit.
* [updateService](#updateservice) - Update a specific Verification Service.
* [updateVerification](#updateverification) - Update a Verification status
* [updateWebhook](#updatewebhook)

## createAccessToken

Create a new enrollment Access Token for the Entity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessTokenCreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;
import org.openapis.openapi.models.operations.CreateAccessTokenSecurity;
import org.openapis.openapi.models.shared.AccessTokenEnumFactorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccessTokenRequest req = new CreateAccessTokenRequest("corrupti") {{
                requestBody = new CreateAccessTokenCreateAccessTokenRequest(AccessTokenEnumFactorTypesEnum.PUSH, "illum") {{
                    factorFriendlyName = "vel";
                    ttl = 623564L;
                }};;
            }};            

            CreateAccessTokenResponse res = sdk.sdk.createAccessToken(req, new CreateAccessTokenSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceAccessToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBucket

Create a new Bucket for a Rate Limit

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBucketCreateBucketRequest;
import org.openapis.openapi.models.operations.CreateBucketRequest;
import org.openapis.openapi.models.operations.CreateBucketResponse;
import org.openapis.openapi.models.operations.CreateBucketSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBucketRequest req = new CreateBucketRequest("iure", "magnam") {{
                requestBody = new CreateBucketCreateBucketRequest(891773L, 56713L);;
            }};            

            CreateBucketResponse res = sdk.sdk.createBucket(req, new CreateBucketSecurity("delectus", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceRateLimitBucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createChallenge

Create a new Challenge for the Factor

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChallengeCreateChallengeRequest;
import org.openapis.openapi.models.operations.CreateChallengeRequest;
import org.openapis.openapi.models.operations.CreateChallengeResponse;
import org.openapis.openapi.models.operations.CreateChallengeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChallengeRequest req = new CreateChallengeRequest("suscipit", "molestiae") {{
                requestBody = new CreateChallengeCreateChallengeRequest("minus") {{
                    authPayload = "placeat";
                    detailsFields = new Object[]{{
                        add("iusto"),
                        add("excepturi"),
                        add("nisi"),
                    }};
                    detailsMessage = "recusandae";
                    expirationDate = OffsetDateTime.parse("2022-10-15T05:10:19.629Z");
                    hiddenDetails = "quis";
                }};;
            }};            

            CreateChallengeResponse res = sdk.sdk.createChallenge(req, new CreateChallengeSecurity("veritatis", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntityChallenge != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEntity

Create a new Entity for the Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEntityCreateEntityRequest;
import org.openapis.openapi.models.operations.CreateEntityRequest;
import org.openapis.openapi.models.operations.CreateEntityResponse;
import org.openapis.openapi.models.operations.CreateEntitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEntityRequest req = new CreateEntityRequest("perferendis") {{
                requestBody = new CreateEntityCreateEntityRequest("ipsam");;
            }};            

            CreateEntityResponse res = sdk.sdk.createEntity(req, new CreateEntitySecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMessagingConfiguration

Create a new MessagingConfiguration for a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMessagingConfigurationCreateMessagingConfigurationRequest;
import org.openapis.openapi.models.operations.CreateMessagingConfigurationRequest;
import org.openapis.openapi.models.operations.CreateMessagingConfigurationResponse;
import org.openapis.openapi.models.operations.CreateMessagingConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessagingConfigurationRequest req = new CreateMessagingConfigurationRequest("quo") {{
                requestBody = new CreateMessagingConfigurationCreateMessagingConfigurationRequest("odit", "at");;
            }};            

            CreateMessagingConfigurationResponse res = sdk.sdk.createMessagingConfiguration(req, new CreateMessagingConfigurationSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceMessagingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNewFactor

Create a new Factor for the Entity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNewFactorCreateNewFactorRequest;
import org.openapis.openapi.models.operations.CreateNewFactorRequest;
import org.openapis.openapi.models.operations.CreateNewFactorResponse;
import org.openapis.openapi.models.operations.CreateNewFactorSecurity;
import org.openapis.openapi.models.shared.NewFactorEnumFactorTypesEnum;
import org.openapis.openapi.models.shared.NewFactorEnumNotificationPlatformsEnum;
import org.openapis.openapi.models.shared.NewFactorEnumTotpAlgorithmsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateNewFactorRequest req = new CreateNewFactorRequest("molestiae", "quod") {{
                requestBody = new CreateNewFactorCreateNewFactorRequest(NewFactorEnumFactorTypesEnum.TOTP, "esse") {{
                    bindingAlg = "totam";
                    bindingPublicKey = "porro";
                    bindingSecret = "dolorum";
                    configAlg = NewFactorEnumTotpAlgorithmsEnum.SHA1;
                    configAppId = "nam";
                    configCodeLength = 639921L;
                    configNotificationPlatform = NewFactorEnumNotificationPlatformsEnum.FCM;
                    configNotificationToken = "fugit";
                    configSDKVersion = "deleniti";
                    configSkew = 944669L;
                    configTimeStep = 758616L;
                    metadata = "totam";
                }};;
            }};            

            CreateNewFactorResponse res = sdk.sdk.createNewFactor(req, new CreateNewFactorSecurity("beatae", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntityNewFactor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNotification

Create a new Notification for the corresponding Challenge

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNotificationCreateNotificationRequest;
import org.openapis.openapi.models.operations.CreateNotificationRequest;
import org.openapis.openapi.models.operations.CreateNotificationResponse;
import org.openapis.openapi.models.operations.CreateNotificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateNotificationRequest req = new CreateNotificationRequest("molestiae", "modi", "qui") {{
                requestBody = new CreateNotificationCreateNotificationRequest() {{
                    ttl = 774234L;
                }};;
            }};            

            CreateNotificationResponse res = sdk.sdk.createNotification(req, new CreateNotificationSecurity("cum", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntityChallengeNotification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRateLimit

Create a new Rate Limit for a Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRateLimitCreateRateLimitRequest;
import org.openapis.openapi.models.operations.CreateRateLimitRequest;
import org.openapis.openapi.models.operations.CreateRateLimitResponse;
import org.openapis.openapi.models.operations.CreateRateLimitSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRateLimitRequest req = new CreateRateLimitRequest("ipsum") {{
                requestBody = new CreateRateLimitCreateRateLimitRequest("excepturi") {{
                    description = "aspernatur";
                }};;
            }};            

            CreateRateLimitResponse res = sdk.sdk.createRateLimit(req, new CreateRateLimitSecurity("perferendis", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceRateLimit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSafelist

Add a new phone number to SafeList.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSafelistCreateSafelistRequest;
import org.openapis.openapi.models.operations.CreateSafelistResponse;
import org.openapis.openapi.models.operations.CreateSafelistSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSafelistCreateSafelistRequest req = new CreateSafelistCreateSafelistRequest("natus");            

            CreateSafelistResponse res = sdk.sdk.createSafelist(req, new CreateSafelistSecurity("sed", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2Safelist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

Create a new Verification Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest("dolor") {{
                codeLength = 616934L;
                customCodeEnabled = false;
                defaultTemplateSid = "laboriosam";
                doNotShareWarningEnabled = false;
                dtmfInputRequired = false;
                lookupEnabled = false;
                psd2Enabled = false;
                pushApnCredentialSid = "hic";
                pushFcmCredentialSid = "saepe";
                pushIncludeDate = false;
                skipSmsToLandlines = false;
                totpCodeLength = 681820L;
                totpIssuer = "in";
                totpSkew = 359508L;
                totpTimeStep = 613064L;
                ttsName = "iure";
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("saepe", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVerification

Create a new Verification using a Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVerificationCreateVerificationRequest;
import org.openapis.openapi.models.operations.CreateVerificationRequest;
import org.openapis.openapi.models.operations.CreateVerificationResponse;
import org.openapis.openapi.models.operations.CreateVerificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateVerificationRequest req = new CreateVerificationRequest("architecto") {{
                requestBody = new CreateVerificationCreateVerificationRequest("ipsa", "reiciendis") {{
                    amount = "est";
                    appHash = "mollitia";
                    channelConfiguration = "laborum";
                    customCode = "dolores";
                    customFriendlyName = "dolorem";
                    customMessage = "corporis";
                    deviceIp = "explicabo";
                    locale = "nobis";
                    payee = "enim";
                    rateLimits = "omnis";
                    sendDigits = "nemo";
                    templateCustomSubstitutions = "minima";
                    templateSid = "excepturi";
                }};;
            }};            

            CreateVerificationResponse res = sdk.sdk.createVerification(req, new CreateVerificationSecurity("accusantium", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceVerification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVerificationCheck

challenge a specific Verification Check.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVerificationCheckCreateVerificationCheckRequest;
import org.openapis.openapi.models.operations.CreateVerificationCheckRequest;
import org.openapis.openapi.models.operations.CreateVerificationCheckResponse;
import org.openapis.openapi.models.operations.CreateVerificationCheckSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateVerificationCheckRequest req = new CreateVerificationCheckRequest("culpa") {{
                requestBody = new CreateVerificationCheckCreateVerificationCheckRequest() {{
                    amount = "doloribus";
                    code = "sapiente";
                    payee = "architecto";
                    to = "mollitia";
                    verificationSid = "dolorem";
                }};;
            }};            

            CreateVerificationCheckResponse res = sdk.sdk.createVerificationCheck(req, new CreateVerificationCheckSecurity("culpa", "consequuntur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceVerificationCheck != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebhook

Create a new Webhook for the Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookCreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.operations.CreateWebhookSecurity;
import org.openapis.openapi.models.shared.WebhookEnumStatusEnum;
import org.openapis.openapi.models.shared.WebhookEnumVersionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWebhookRequest req = new CreateWebhookRequest("repellat") {{
                requestBody = new CreateWebhookCreateWebhookRequest(                new String[]{{
                                    add("occaecati"),
                                    add("numquam"),
                                    add("commodi"),
                                }}, "quam", "molestiae") {{
                    status = WebhookEnumStatusEnum.ENABLED;
                    version = WebhookEnumVersionEnum.V2;
                }};;
            }};            

            CreateWebhookResponse res = sdk.sdk.createWebhook(req, new CreateWebhookSecurity("quia", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBucket

Delete a specific Bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBucketRequest;
import org.openapis.openapi.models.operations.DeleteBucketResponse;
import org.openapis.openapi.models.operations.DeleteBucketSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBucketRequest req = new DeleteBucketRequest("vitae", "laborum", "animi");            

            DeleteBucketResponse res = sdk.sdk.deleteBucket(req, new DeleteBucketSecurity("enim", "odit") {{
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

## deleteEntity

Delete a specific Entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEntityRequest;
import org.openapis.openapi.models.operations.DeleteEntityResponse;
import org.openapis.openapi.models.operations.DeleteEntitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEntityRequest req = new DeleteEntityRequest("quo", "sequi");            

            DeleteEntityResponse res = sdk.sdk.deleteEntity(req, new DeleteEntitySecurity("tenetur", "ipsam") {{
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

## deleteFactor

Delete a specific Factor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFactorRequest;
import org.openapis.openapi.models.operations.DeleteFactorResponse;
import org.openapis.openapi.models.operations.DeleteFactorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFactorRequest req = new DeleteFactorRequest("id", "possimus", "aut");            

            DeleteFactorResponse res = sdk.sdk.deleteFactor(req, new DeleteFactorSecurity("quasi", "error") {{
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

## deleteMessagingConfiguration

Delete a specific MessagingConfiguration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessagingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteMessagingConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteMessagingConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessagingConfigurationRequest req = new DeleteMessagingConfigurationRequest("temporibus", "laborum");            

            DeleteMessagingConfigurationResponse res = sdk.sdk.deleteMessagingConfiguration(req, new DeleteMessagingConfigurationSecurity("quasi", "reiciendis") {{
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

## deleteRateLimit

Delete a specific Rate Limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRateLimitRequest;
import org.openapis.openapi.models.operations.DeleteRateLimitResponse;
import org.openapis.openapi.models.operations.DeleteRateLimitSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRateLimitRequest req = new DeleteRateLimitRequest("voluptatibus", "vero");            

            DeleteRateLimitResponse res = sdk.sdk.deleteRateLimit(req, new DeleteRateLimitSecurity("nihil", "praesentium") {{
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

## deleteSafelist

Remove a phone number from SafeList.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSafelistRequest;
import org.openapis.openapi.models.operations.DeleteSafelistResponse;
import org.openapis.openapi.models.operations.DeleteSafelistSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSafelistRequest req = new DeleteSafelistRequest("voluptatibus");            

            DeleteSafelistResponse res = sdk.sdk.deleteSafelist(req, new DeleteSafelistSecurity("ipsa", "omnis") {{
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

Delete a specific Verification Service Instance.

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

            DeleteServiceRequest req = new DeleteServiceRequest("voluptate");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("cum", "perferendis") {{
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

## deleteWebhook

Delete a specific Webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.operations.DeleteWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest("doloremque", "reprehenderit");            

            DeleteWebhookResponse res = sdk.sdk.deleteWebhook(req, new DeleteWebhookSecurity("ut", "maiores") {{
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

## fetchAccessToken

Fetch an Access Token for the Entity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAccessTokenRequest;
import org.openapis.openapi.models.operations.FetchAccessTokenResponse;
import org.openapis.openapi.models.operations.FetchAccessTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccessTokenRequest req = new FetchAccessTokenRequest("dicta", "corporis");            

            FetchAccessTokenResponse res = sdk.sdk.fetchAccessToken(req, new FetchAccessTokenSecurity("dolore", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceAccessToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBucket

Fetch a specific Bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBucketRequest;
import org.openapis.openapi.models.operations.FetchBucketResponse;
import org.openapis.openapi.models.operations.FetchBucketSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBucketRequest req = new FetchBucketRequest("dicta", "harum", "enim");            

            FetchBucketResponse res = sdk.sdk.fetchBucket(req, new FetchBucketSecurity("accusamus", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceRateLimitBucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchChallenge

Fetch a specific Challenge.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchChallengeRequest;
import org.openapis.openapi.models.operations.FetchChallengeResponse;
import org.openapis.openapi.models.operations.FetchChallengeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchChallengeRequest req = new FetchChallengeRequest("repudiandae", "quae", "ipsum");            

            FetchChallengeResponse res = sdk.sdk.fetchChallenge(req, new FetchChallengeSecurity("quidem", "molestias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntityChallenge != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEntity

Fetch a specific Entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEntityRequest;
import org.openapis.openapi.models.operations.FetchEntityResponse;
import org.openapis.openapi.models.operations.FetchEntitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEntityRequest req = new FetchEntityRequest("excepturi", "pariatur");            

            FetchEntityResponse res = sdk.sdk.fetchEntity(req, new FetchEntitySecurity("modi", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFactor

Fetch a specific Factor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFactorRequest;
import org.openapis.openapi.models.operations.FetchFactorResponse;
import org.openapis.openapi.models.operations.FetchFactorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFactorRequest req = new FetchFactorRequest("rem", "voluptates", "quasi");            

            FetchFactorResponse res = sdk.sdk.fetchFactor(req, new FetchFactorSecurity("repudiandae", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntityFactor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchForm

Fetch the forms for a specific Form Type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFormRequest;
import org.openapis.openapi.models.operations.FetchFormResponse;
import org.openapis.openapi.models.operations.FetchFormSecurity;
import org.openapis.openapi.models.shared.FormEnumFormTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFormRequest req = new FetchFormRequest(FormEnumFormTypesEnum.FORM_PUSH);            

            FetchFormResponse res = sdk.sdk.fetchForm(req, new FetchFormSecurity("veritatis", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2Form != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMessagingConfiguration

Fetch a specific MessagingConfiguration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMessagingConfigurationRequest;
import org.openapis.openapi.models.operations.FetchMessagingConfigurationResponse;
import org.openapis.openapi.models.operations.FetchMessagingConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessagingConfigurationRequest req = new FetchMessagingConfigurationRequest("incidunt", "enim");            

            FetchMessagingConfigurationResponse res = sdk.sdk.fetchMessagingConfiguration(req, new FetchMessagingConfigurationSecurity("consequatur", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceMessagingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRateLimit

Fetch a specific Rate Limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRateLimitRequest;
import org.openapis.openapi.models.operations.FetchRateLimitResponse;
import org.openapis.openapi.models.operations.FetchRateLimitSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRateLimitRequest req = new FetchRateLimitRequest("quibusdam", "explicabo");            

            FetchRateLimitResponse res = sdk.sdk.fetchRateLimit(req, new FetchRateLimitSecurity("deserunt", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceRateLimit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSafelist

Check if a phone number exists in SafeList.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSafelistRequest;
import org.openapis.openapi.models.operations.FetchSafelistResponse;
import org.openapis.openapi.models.operations.FetchSafelistSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSafelistRequest req = new FetchSafelistRequest("quibusdam");            

            FetchSafelistResponse res = sdk.sdk.fetchSafelist(req, new FetchSafelistSecurity("labore", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2Safelist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

Fetch specific Verification Service Instance.

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

            FetchServiceRequest req = new FetchServiceRequest("qui");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("aliquid", "cupiditate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVerification

Fetch a specific Verification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVerificationRequest;
import org.openapis.openapi.models.operations.FetchVerificationResponse;
import org.openapis.openapi.models.operations.FetchVerificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVerificationRequest req = new FetchVerificationRequest("quos", "perferendis");            

            FetchVerificationResponse res = sdk.sdk.fetchVerification(req, new FetchVerificationSecurity("magni", "assumenda") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceVerification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVerificationAttempt

Fetch a specific verification attempt.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVerificationAttemptRequest;
import org.openapis.openapi.models.operations.FetchVerificationAttemptResponse;
import org.openapis.openapi.models.operations.FetchVerificationAttemptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVerificationAttemptRequest req = new FetchVerificationAttemptRequest("ipsam");            

            FetchVerificationAttemptResponse res = sdk.sdk.fetchVerificationAttempt(req, new FetchVerificationAttemptSecurity("alias", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2VerificationAttempt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVerificationAttemptsSummary

Get a summary of how many attempts were made and how many were converted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVerificationAttemptsSummaryRequest;
import org.openapis.openapi.models.operations.FetchVerificationAttemptsSummaryResponse;
import org.openapis.openapi.models.operations.FetchVerificationAttemptsSummarySecurity;
import org.openapis.openapi.models.shared.VerificationAttemptsSummaryEnumChannelsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVerificationAttemptsSummaryRequest req = new FetchVerificationAttemptsSummaryRequest() {{
                channel = VerificationAttemptsSummaryEnumChannelsEnum.EMAIL;
                country = "excepturi";
                dateCreatedAfter = OffsetDateTime.parse("2022-04-19T03:15:40.816Z");
                dateCreatedBefore = OffsetDateTime.parse("2022-06-04T09:53:33.742Z");
                destinationPrefix = "delectus";
                verifyServiceSid = "eum";
            }};            

            FetchVerificationAttemptsSummaryResponse res = sdk.sdk.fetchVerificationAttemptsSummary(req, new FetchVerificationAttemptsSummarySecurity("non", "eligendi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2VerificationAttemptsSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWebhook

Fetch a specific Webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWebhookRequest;
import org.openapis.openapi.models.operations.FetchWebhookResponse;
import org.openapis.openapi.models.operations.FetchWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWebhookRequest req = new FetchWebhookRequest("sint", "aliquid");            

            FetchWebhookResponse res = sdk.sdk.fetchWebhook(req, new FetchWebhookSecurity("provident", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBucket

Retrieve a list of all Buckets for a Rate Limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBucketRequest;
import org.openapis.openapi.models.operations.ListBucketResponse;
import org.openapis.openapi.models.operations.ListBucketSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBucketRequest req = new ListBucketRequest("sint", "officia") {{
                page = 223081L;
                pageSize = 891555L;
                pageToken = "a";
            }};            

            ListBucketResponse res = sdk.sdk.listBucket(req, new ListBucketSecurity("dolorum", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBucketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChallenge

Retrieve a list of all Challenges for a Factor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChallengeRequest;
import org.openapis.openapi.models.operations.ListChallengeResponse;
import org.openapis.openapi.models.operations.ListChallengeSecurity;
import org.openapis.openapi.models.shared.ChallengeEnumChallengeStatusesEnum;
import org.openapis.openapi.models.shared.ChallengeEnumListOrdersEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListChallengeRequest req = new ListChallengeRequest("in", "illum") {{
                factorSid = "maiores";
                order = ChallengeEnumListOrdersEnum.DESC;
                page = 116202L;
                pageSize = 297437L;
                pageToken = "cumque";
                status = ChallengeEnumChallengeStatusesEnum.DENIED;
            }};            

            ListChallengeResponse res = sdk.sdk.listChallenge(req, new ListChallengeSecurity("ea", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listChallengeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntity

Retrieve a list of all Entities for a Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntityRequest;
import org.openapis.openapi.models.operations.ListEntityResponse;
import org.openapis.openapi.models.operations.ListEntitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEntityRequest req = new ListEntityRequest("laborum") {{
                page = 881104L;
                pageSize = 249796L;
                pageToken = "occaecati";
            }};            

            ListEntityResponse res = sdk.sdk.listEntity(req, new ListEntitySecurity("enim", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEntityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFactor

Retrieve a list of all Factors for an Entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFactorRequest;
import org.openapis.openapi.models.operations.ListFactorResponse;
import org.openapis.openapi.models.operations.ListFactorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFactorRequest req = new ListFactorRequest("delectus", "quidem") {{
                page = 588465L;
                pageSize = 725255L;
                pageToken = "id";
            }};            

            ListFactorResponse res = sdk.sdk.listFactor(req, new ListFactorSecurity("blanditiis", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFactorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMessagingConfiguration

Retrieve a list of all Messaging Configurations for a Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMessagingConfigurationRequest;
import org.openapis.openapi.models.operations.ListMessagingConfigurationResponse;
import org.openapis.openapi.models.operations.ListMessagingConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMessagingConfigurationRequest req = new ListMessagingConfigurationRequest("sapiente") {{
                page = 230533L;
                pageSize = 643990L;
                pageToken = "nisi";
            }};            

            ListMessagingConfigurationResponse res = sdk.sdk.listMessagingConfiguration(req, new ListMessagingConfigurationSecurity("vel", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMessagingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRateLimit

Retrieve a list of all Rate Limits for a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRateLimitRequest;
import org.openapis.openapi.models.operations.ListRateLimitResponse;
import org.openapis.openapi.models.operations.ListRateLimitSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRateLimitRequest req = new ListRateLimitRequest("omnis") {{
                page = 474867L;
                pageSize = 19193L;
                pageToken = "nihil";
            }};            

            ListRateLimitResponse res = sdk.sdk.listRateLimit(req, new ListRateLimitSecurity("magnam", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRateLimitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listService

Retrieve a list of all Verification Services for an account.

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
                page = 660174L;
                pageSize = 287991L;
                pageToken = "labore";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("suscipit", "natus") {{
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

## listVerificationAttempt

List all the verification attempts for a given Account.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVerificationAttemptRequest;
import org.openapis.openapi.models.operations.ListVerificationAttemptResponse;
import org.openapis.openapi.models.operations.ListVerificationAttemptSecurity;
import org.openapis.openapi.models.shared.VerificationAttemptEnumChannelsEnum;
import org.openapis.openapi.models.shared.VerificationAttemptEnumConversionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVerificationAttemptRequest req = new ListVerificationAttemptRequest() {{
                channel = VerificationAttemptEnumChannelsEnum.EMAIL;
                channelDataTo = "eum";
                country = "vero";
                dateCreatedAfter = OffsetDateTime.parse("2022-11-24T10:55:00.183Z");
                dateCreatedBefore = OffsetDateTime.parse("2022-11-28T06:48:16.205Z");
                page = 569965L;
                pageSize = 354047L;
                pageToken = "provident";
                status = VerificationAttemptEnumConversionStatusEnum.UNCONVERTED;
                verificationSid = "sint";
                verifyServiceSid = "accusantium";
            }};            

            ListVerificationAttemptResponse res = sdk.sdk.listVerificationAttempt(req, new ListVerificationAttemptSecurity("mollitia", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listVerificationAttemptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVerificationTemplate

List all the available templates for a given Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVerificationTemplateRequest;
import org.openapis.openapi.models.operations.ListVerificationTemplateResponse;
import org.openapis.openapi.models.operations.ListVerificationTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVerificationTemplateRequest req = new ListVerificationTemplateRequest() {{
                friendlyName = "mollitia";
                page = 320997L;
                pageSize = 431418L;
                pageToken = "dolor";
            }};            

            ListVerificationTemplateResponse res = sdk.sdk.listVerificationTemplate(req, new ListVerificationTemplateSecurity("necessitatibus", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listVerificationTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebhook

Retrieve a list of all Webhooks for a Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebhookRequest;
import org.openapis.openapi.models.operations.ListWebhookResponse;
import org.openapis.openapi.models.operations.ListWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWebhookRequest req = new ListWebhookRequest("nemo") {{
                page = 97260L;
                pageSize = 435865L;
                pageToken = "doloribus";
            }};            

            ListWebhookResponse res = sdk.sdk.listWebhook(req, new ListWebhookSecurity("debitis", "eius") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBucket

Update a specific Bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBucketRequest;
import org.openapis.openapi.models.operations.UpdateBucketResponse;
import org.openapis.openapi.models.operations.UpdateBucketSecurity;
import org.openapis.openapi.models.operations.UpdateBucketUpdateBucketRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBucketRequest req = new UpdateBucketRequest("maxime", "deleniti", "facilis") {{
                requestBody = new UpdateBucketUpdateBucketRequest() {{
                    interval = 447926L;
                    max = 100226L;
                }};;
            }};            

            UpdateBucketResponse res = sdk.sdk.updateBucket(req, new UpdateBucketSecurity("architecto", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceRateLimitBucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateChallenge

Verify a specific Challenge.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChallengeRequest;
import org.openapis.openapi.models.operations.UpdateChallengeResponse;
import org.openapis.openapi.models.operations.UpdateChallengeSecurity;
import org.openapis.openapi.models.operations.UpdateChallengeUpdateChallengeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateChallengeRequest req = new UpdateChallengeRequest("ullam", "expedita", "nihil") {{
                requestBody = new UpdateChallengeUpdateChallengeRequest() {{
                    authPayload = "repellat";
                    metadata = "quibusdam";
                }};;
            }};            

            UpdateChallengeResponse res = sdk.sdk.updateChallenge(req, new UpdateChallengeSecurity("sed", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntityChallenge != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFactor

Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFactorRequest;
import org.openapis.openapi.models.operations.UpdateFactorResponse;
import org.openapis.openapi.models.operations.UpdateFactorSecurity;
import org.openapis.openapi.models.operations.UpdateFactorUpdateFactorRequest;
import org.openapis.openapi.models.shared.FactorEnumTotpAlgorithmsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFactorRequest req = new UpdateFactorRequest("pariatur", "accusantium", "consequuntur") {{
                requestBody = new UpdateFactorUpdateFactorRequest() {{
                    authPayload = "praesentium";
                    configAlg = FactorEnumTotpAlgorithmsEnum.SHA256;
                    configCodeLength = 166847L;
                    configNotificationPlatform = "sunt";
                    configNotificationToken = "quo";
                    configSDKVersion = "illum";
                    configSkew = 864934L;
                    configTimeStep = 807319L;
                    friendlyName = "ea";
                }};;
            }};            

            UpdateFactorResponse res = sdk.sdk.updateFactor(req, new UpdateFactorSecurity("excepturi", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceEntityFactor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMessagingConfiguration

Update a specific MessagingConfiguration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMessagingConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateMessagingConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateMessagingConfigurationSecurity;
import org.openapis.openapi.models.operations.UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMessagingConfigurationRequest req = new UpdateMessagingConfigurationRequest("ea", "accusantium") {{
                requestBody = new UpdateMessagingConfigurationUpdateMessagingConfigurationRequest("ab");;
            }};            

            UpdateMessagingConfigurationResponse res = sdk.sdk.updateMessagingConfiguration(req, new UpdateMessagingConfigurationSecurity("maiores", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceMessagingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRateLimit

Update a specific Rate Limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRateLimitRequest;
import org.openapis.openapi.models.operations.UpdateRateLimitResponse;
import org.openapis.openapi.models.operations.UpdateRateLimitSecurity;
import org.openapis.openapi.models.operations.UpdateRateLimitUpdateRateLimitRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRateLimitRequest req = new UpdateRateLimitRequest("ipsam", "voluptate") {{
                requestBody = new UpdateRateLimitUpdateRateLimitRequest() {{
                    description = "autem";
                }};;
            }};            

            UpdateRateLimitResponse res = sdk.sdk.updateRateLimit(req, new UpdateRateLimitSecurity("nam", "eaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceRateLimit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

Update a specific Verification Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("pariatur") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    codeLength = 365496L;
                    customCodeEnabled = false;
                    defaultTemplateSid = "voluptatibus";
                    doNotShareWarningEnabled = false;
                    dtmfInputRequired = false;
                    friendlyName = "perferendis";
                    lookupEnabled = false;
                    psd2Enabled = false;
                    pushApnCredentialSid = "fugiat";
                    pushFcmCredentialSid = "amet";
                    pushIncludeDate = false;
                    skipSmsToLandlines = false;
                    totpCodeLength = 11714L;
                    totpIssuer = "cumque";
                    totpSkew = 359978L;
                    totpTimeStep = 944124L;
                    ttsName = "libero";
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("nobis", "dolores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVerification

Update a Verification status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVerificationRequest;
import org.openapis.openapi.models.operations.UpdateVerificationResponse;
import org.openapis.openapi.models.operations.UpdateVerificationSecurity;
import org.openapis.openapi.models.operations.UpdateVerificationUpdateVerificationRequest;
import org.openapis.openapi.models.shared.VerificationEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateVerificationRequest req = new UpdateVerificationRequest("quis", "totam") {{
                requestBody = new UpdateVerificationUpdateVerificationRequest(VerificationEnumStatusEnum.CANCELED);;
            }};            

            UpdateVerificationResponse res = sdk.sdk.updateVerification(req, new UpdateVerificationSecurity("eaque", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceVerification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookRequest;
import org.openapis.openapi.models.operations.UpdateWebhookResponse;
import org.openapis.openapi.models.operations.UpdateWebhookSecurity;
import org.openapis.openapi.models.operations.UpdateWebhookUpdateWebhookRequest;
import org.openapis.openapi.models.shared.WebhookEnumStatusEnum;
import org.openapis.openapi.models.shared.WebhookEnumVersionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWebhookRequest req = new UpdateWebhookRequest("nesciunt", "eos") {{
                requestBody = new UpdateWebhookUpdateWebhookRequest() {{
                    eventTypes = new String[]{{
                        add("dolores"),
                    }};
                    friendlyName = "minus";
                    status = WebhookEnumStatusEnum.ENABLED;
                    version = WebhookEnumVersionEnum.V1;
                    webhookUrl = "vero";
                }};;
            }};            

            UpdateWebhookResponse res = sdk.sdk.updateWebhook(req, new UpdateWebhookSecurity("nostrum", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
