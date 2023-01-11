<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest, CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    repricingConfig: {
      adjustment: {
        percentageAdjustment: {
          percentage: {
            value: "dicta",
          },
        },
      },
      channelPartnerGranularity: {
        "voluptatum": "et",
      },
      conditionalOverrides: [
        {
          adjustment: {
            percentageAdjustment: {
              percentage: {
                value: "dolorem",
              },
            },
          },
          rebillingBasis: "COST_AT_LIST",
          repricingCondition: {
            skuGroupCondition: {
              skuGroup: "voluptate",
            },
          },
        },
        {
          adjustment: {
            percentageAdjustment: {
              percentage: {
                value: "iste",
              },
            },
          },
          rebillingBasis: "REBILLING_BASIS_UNSPECIFIED",
          repricingCondition: {
            skuGroupCondition: {
              skuGroup: "totam",
            },
          },
        },
        {
          adjustment: {
            percentageAdjustment: {
              percentage: {
                value: "dolores",
              },
            },
          },
          rebillingBasis: "DIRECT_CUSTOMER_COST",
          repricingCondition: {
            skuGroupCondition: {
              skuGroup: "debitis",
            },
          },
        },
      ],
      effectiveInvoiceMonth: {
        day: 3706853784096366226,
        month: 2627038740284806767,
        year: 6303220950515014660,
      },
      entitlementGranularity: {
        entitlement: "id",
      },
      rebillingBasis: "REBILLING_BASIS_UNSPECIFIED",
    },
  },
};

sdk.accounts.cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(req).then((res: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->