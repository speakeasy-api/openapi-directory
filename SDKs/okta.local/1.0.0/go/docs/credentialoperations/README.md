# CredentialOperations

### Available Operations

* [ChangePassword](#changepassword) - Change Password
* [ChangeRecoveryQuestion](#changerecoveryquestion) - Change Recovery Question
* [ForgotPasswordOneTimeCode](#forgotpasswordonetimecode) - Forgot Password (One Time Code)
* [SetRecoveryCredential](#setrecoverycredential) - Set Recovery Credential

## ChangePassword

Change Password

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CredentialOperations.ChangePassword(ctx, operations.ChangePasswordRequest{
        RequestBody: &operations.ChangePasswordRequestBody{
            NewPassword: &operations.ChangePasswordRequestBodyNewPassword{
                Value: sdk.String("uTVM,TPw55"),
            },
            OldPassword: &operations.ChangePasswordRequestBodyOldPassword{
                Value: sdk.String("{{password}}"),
            },
        },
        UserID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeRecoveryQuestion

Change Recovery Question

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CredentialOperations.ChangeRecoveryQuestion(ctx, operations.ChangeRecoveryQuestionRequest{
        RequestBody: &operations.ChangeRecoveryQuestionRequestBody{
            Password: &operations.ChangeRecoveryQuestionRequestBodyPassword{
                Value: sdk.String("{{password}}"),
            },
            RecoveryQuestion: &operations.ChangeRecoveryQuestionRequestBodyRecoveryQuestion{
                Answer: sdk.String("My recovery credentials are updated"),
                Question: sdk.String("What happens when I update my question"),
            },
        },
        UserID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ForgotPasswordOneTimeCode

Forgot Password (One Time Code)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CredentialOperations.ForgotPasswordOneTimeCode(ctx, operations.ForgotPasswordOneTimeCodeRequest{
        RequestBody: []byte("tempora"),
        SendEmail: sdk.String("false"),
        UserID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetRecoveryCredential

Set Recovery Credential

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CredentialOperations.SetRecoveryCredential(ctx, operations.SetRecoveryCredentialRequest{
        RequestBody: &operations.SetRecoveryCredentialRequestBody{
            Credentials: &operations.SetRecoveryCredentialRequestBodyCredentials{
                RecoveryQuestion: &operations.SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion{
                    Answer: sdk.String("Annie Oakley"),
                    Question: sdk.String("Who's a major player in the cowboy scene?"),
                },
            },
        },
        UserID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
