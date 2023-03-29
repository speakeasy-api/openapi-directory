<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest{
        Security: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ChromepolicyCustomersPoliciesGroupsBatchDeletePathParams{
            Customer: "unde",
        },
        QueryParams: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "iusto",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "saepe": "inventore",
                            "sapiente": "enim",
                        },
                        TargetResource: "eum",
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "voluptatum",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "vel": "non",
                            "deleniti": "similique",
                            "reprehenderit": "molestiae",
                            "quo": "quasi",
                        },
                        TargetResource: "laboriosam",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsBatchDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->