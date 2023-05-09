# credentialOperations

### Available Operations

* [changePassword](#changepassword) - Change Password
* [changeRecoveryQuestion](#changerecoveryquestion) - Change Recovery Question
* [forgotPasswordOneTimeCode](#forgotpasswordonetimecode) - Forgot Password (One Time Code)
* [setRecoveryCredential](#setrecoverycredential) - Set Recovery Credential

## changePassword

Change Password

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordRequest;
import org.openapis.openapi.models.operations.ChangePasswordRequestBody;
import org.openapis.openapi.models.operations.ChangePasswordRequestBodyNewPassword;
import org.openapis.openapi.models.operations.ChangePasswordRequestBodyOldPassword;
import org.openapis.openapi.models.operations.ChangePasswordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordRequest req = new ChangePasswordRequest("ipsa") {{
                requestBody = new ChangePasswordRequestBody() {{
                    newPassword = new ChangePasswordRequestBodyNewPassword() {{
                        value = "uTVM,TPw55";
                    }};;
                    oldPassword = new ChangePasswordRequestBodyOldPassword() {{
                        value = "{{password}}";
                    }};;
                }};;
            }};            

            ChangePasswordResponse res = sdk.credentialOperations.changePassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeRecoveryQuestion

Change Recovery Question

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeRecoveryQuestionRequest;
import org.openapis.openapi.models.operations.ChangeRecoveryQuestionRequestBody;
import org.openapis.openapi.models.operations.ChangeRecoveryQuestionRequestBodyPassword;
import org.openapis.openapi.models.operations.ChangeRecoveryQuestionRequestBodyRecoveryQuestion;
import org.openapis.openapi.models.operations.ChangeRecoveryQuestionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeRecoveryQuestionRequest req = new ChangeRecoveryQuestionRequest("delectus") {{
                requestBody = new ChangeRecoveryQuestionRequestBody() {{
                    password = new ChangeRecoveryQuestionRequestBodyPassword() {{
                        value = "{{password}}";
                    }};;
                    recoveryQuestion = new ChangeRecoveryQuestionRequestBodyRecoveryQuestion() {{
                        answer = "My recovery credentials are updated";
                        question = "What happens when I update my question";
                    }};;
                }};;
            }};            

            ChangeRecoveryQuestionResponse res = sdk.credentialOperations.changeRecoveryQuestion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forgotPasswordOneTimeCode

Forgot Password (One Time Code)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForgotPasswordOneTimeCodeRequest;
import org.openapis.openapi.models.operations.ForgotPasswordOneTimeCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForgotPasswordOneTimeCodeRequest req = new ForgotPasswordOneTimeCodeRequest("tempora") {{
                requestBody = "suscipit".getBytes();
                sendEmail = "false";
            }};            

            ForgotPasswordOneTimeCodeResponse res = sdk.credentialOperations.forgotPasswordOneTimeCode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setRecoveryCredential

Set Recovery Credential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetRecoveryCredentialRequest;
import org.openapis.openapi.models.operations.SetRecoveryCredentialRequestBody;
import org.openapis.openapi.models.operations.SetRecoveryCredentialRequestBodyCredentials;
import org.openapis.openapi.models.operations.SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion;
import org.openapis.openapi.models.operations.SetRecoveryCredentialResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetRecoveryCredentialRequest req = new SetRecoveryCredentialRequest("molestiae") {{
                requestBody = new SetRecoveryCredentialRequestBody() {{
                    credentials = new SetRecoveryCredentialRequestBodyCredentials() {{
                        recoveryQuestion = new SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion() {{
                            answer = "Annie Oakley";
                            question = "Who's a major player in the cowboy scene?";
                        }};;
                    }};;
                }};;
            }};            

            SetRecoveryCredentialResponse res = sdk.credentialOperations.setRecoveryCredential(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
