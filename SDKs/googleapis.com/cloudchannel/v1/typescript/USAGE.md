<!-- Start SDK Example Usage -->
```typescript
import {
  CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest,
  CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudChannelV1RepricingConfigRebillingBasisEnum,
  GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudChannelV1ChannelPartnerRepricingConfigInput: {
    repricingConfig: {
      adjustment: {
        percentageAdjustment: {
          percentage: {
            value: "provident",
          },
        },
      },
      channelPartnerGranularity: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
      conditionalOverrides: [
        {
          adjustment: {
            percentageAdjustment: {
              percentage: {
                value: "deserunt",
              },
            },
          },
          rebillingBasis: GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.CostAtList,
          repricingCondition: {
            skuGroupCondition: {
              skuGroup: "iure",
            },
          },
        },
        {
          adjustment: {
            percentageAdjustment: {
              percentage: {
                value: "magnam",
              },
            },
          },
          rebillingBasis: GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.DirectCustomerCost,
          repricingCondition: {
            skuGroupCondition: {
              skuGroup: "ipsa",
            },
          },
        },
        {
          adjustment: {
            percentageAdjustment: {
              percentage: {
                value: "delectus",
              },
            },
          },
          rebillingBasis: GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.RebillingBasisUnspecified,
          repricingCondition: {
            skuGroupCondition: {
              skuGroup: "suscipit",
            },
          },
        },
      ],
      effectiveInvoiceMonth: {
        day: 477665,
        month: 791725,
        year: 812169,
      },
      entitlementGranularity: {
        entitlement: "voluptatum",
      },
      rebillingBasis: GoogleCloudChannelV1RepricingConfigRebillingBasisEnum.CostAtList,
    },
  },
  accessToken: "excepturi",
  alt: AltEnum.Media,
  callback: "recusandae",
  fields: "temporibus",
  key: "ab",
  oauthToken: "quis",
  parent: "veritatis",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "perferendis",
  uploadProtocol: "ipsam",
};

sdk.accounts.cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(req).then((res: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->