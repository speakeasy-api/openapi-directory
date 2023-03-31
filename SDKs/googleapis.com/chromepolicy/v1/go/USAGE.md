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
        DollarXgafv: "2",
        GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest: &shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "distinctio",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "unde": "nulla",
                            "corrupti": "illum",
                            "vel": "error",
                            "deserunt": "suscipit",
                        },
                        TargetResource: "iure",
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "magnam",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "ipsa": "delectus",
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        TargetResource: "iusto",
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "excepturi",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        TargetResource: "veritatis",
                    },
                },
            },
        },
        AccessToken: "deserunt",
        Alt: "json",
        Callback: "ipsam",
        Customer: "repellendus",
        Fields: "sapiente",
        Key: "quo",
        OauthToken: "odit",
        PrettyPrint: false,
        QuotaUser: "at",
        UploadType: "at",
        UploadProtocol: "maiores",
    }

    ctx := context.Background()
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsBatchDelete(ctx, req, operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->