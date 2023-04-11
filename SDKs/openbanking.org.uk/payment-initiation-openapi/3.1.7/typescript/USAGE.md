<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDomesticPaymentConsentsJsonRequest,
  CreateDomesticPaymentConsentsJsonResponse
} from "openapi/dist/sdk/models/operations";
import {
  OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum,
  OBWriteDomesticConsent4DataReadRefundAccountEnum,
  OBRisk1PaymentContextCodeEnum,
  OBSCASupportData1AppliedAuthenticationApproachEnum,
  OBSCASupportData1RequestedSCAExemptionTypeEnum,
  OBAddressTypeCodeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateDomesticPaymentConsentsJsonRequest = {
  authorization: "corrupti",
  obWriteDomesticConsent4: {
    data: {
      authorisation: {
        authorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum.Single,
        completionDateTime: "2021-04-24T16:27:50.833Z",
      },
      initiation: {
        creditorAccount: {
          identification: "unde",
          name: "nulla",
          schemeName: "corrupti",
          secondaryIdentification: "illum",
        },
        creditorPostalAddress: {
          addressLine: [
            "error",
            "deserunt",
          ],
          addressType: OBAddressTypeCodeEnum.MailTo,
          buildingNumber: "iure",
          country: "French Guiana",
          countrySubDivision: "debitis",
          department: "ipsa",
          postCode: "23478-5453",
          streetName: "recusandae",
          subDepartment: "temporibus",
          townName: "ab",
        },
        debtorAccount: {
          identification: "quis",
          name: "veritatis",
          schemeName: "deserunt",
          secondaryIdentification: "perferendis",
        },
        endToEndIdentification: "ipsam",
        instructedAmount: {
          amount: "repellendus",
          currency: "sapiente",
        },
        instructionIdentification: "quo",
        localInstrument: "odit",
        remittanceInformation: {
          reference: "at",
          unstructured: "at",
        },
        supplementaryData: {
          "molestiae": "quod",
          "quod": "esse",
          "totam": "porro",
          "dolorum": "dicta",
        },
      },
      readRefundAccount: OBWriteDomesticConsent4DataReadRefundAccountEnum.Yes,
      scaSupportData: {
        appliedAuthenticationApproach: OBSCASupportData1AppliedAuthenticationApproachEnum.Sca,
        referencePaymentOrderId: "occaecati",
        requestedSCAExemptionType: OBSCASupportData1RequestedSCAExemptionTypeEnum.ContactlessTravel,
      },
    },
    risk: {
      deliveryAddress: {
        addressLine: [
          "hic",
          "optio",
          "totam",
        ],
        buildingNumber: "beatae",
        country: "Iraq",
        countrySubDivision: "molestiae",
        postCode: "17742",
        streetName: "excepturi",
        townName: "aspernatur",
      },
      merchantCategoryCode: "perferendis",
      merchantCustomerIdentification: "ad",
      paymentContextCode: OBRisk1PaymentContextCodeEnum.Other,
    },
  },
  xCustomerUserAgent: "sed",
  xFapiAuthDate: "iste",
  xFapiCustomerIpAddress: "dolor",
  xFapiInteractionId: "natus",
  xIdempotencyKey: "laboriosam",
  xJwsSignature: "hic",
};

sdk.domesticPayments.createDomesticPaymentConsentsJson(req).then((res: CreateDomesticPaymentConsentsJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->