# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openbanking.org.uk/payment-initiation-openapi/3.1.7/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openbanking.org.uk/payment-initiation-openapi/3.1.7/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### domesticPayments

* `createDomesticPaymentConsentsJson` - Create Domestic Payment Consents
* `createDomesticPaymentConsentsRaw` - Create Domestic Payment Consents
* `createDomesticPaymentsJson` - Create Domestic Payments
* `createDomesticPaymentsRaw` - Create Domestic Payments
* `getDomesticPaymentConsentsConsentId` - Get Domestic Payment Consents
* `getDomesticPaymentConsentsConsentIdFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `getDomesticPaymentsDomesticPaymentId` - Get Domestic Payments

### domesticScheduledPayments

* `createDomesticScheduledPaymentConsentsJson` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPaymentConsentsRaw` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPaymentsJson` - Create Domestic Scheduled Payments
* `createDomesticScheduledPaymentsRaw` - Create Domestic Scheduled Payments
* `getDomesticScheduledPaymentConsentsConsentId` - Get Domestic Scheduled Payment Consents
* `getDomesticScheduledPaymentsDomesticScheduledPaymentId` - Get Domestic Scheduled Payments

### domesticStandingOrders

* `createDomesticStandingOrderConsentsJson` - Create Domestic Standing Order Consents
* `createDomesticStandingOrderConsentsRaw` - Create Domestic Standing Order Consents
* `createDomesticStandingOrdersJson` - Create Domestic Standing Orders
* `createDomesticStandingOrdersRaw` - Create Domestic Standing Orders
* `getDomesticStandingOrderConsentsConsentId` - Get Domestic Standing Order Consents
* `getDomesticStandingOrdersDomesticStandingOrderId` - Get Domestic Standing Orders

### filePayments

* `createFilePaymentConsentsConsentIdFileJson` - Create File Payment Consents
* `createFilePaymentConsentsConsentIdFileRaw` - Create File Payment Consents
* `createFilePaymentConsentsJson` - Create File Payment Consents
* `createFilePaymentConsentsRaw` - Create File Payment Consents
* `createFilePaymentsJson` - Create File Payments
* `createFilePaymentsRaw` - Create File Payments
* `getFilePaymentConsentsConsentId` - Get File Payment Consents
* `getFilePaymentConsentsConsentIdFile` - Get File Payment Consents
* `getFilePaymentsFilePaymentId` - Get File Payments
* `getFilePaymentsFilePaymentIdReportFile` - Get File Payments

### internationalPayments

* `createInternationalPaymentConsentsJson` - Create International Payment Consents
* `createInternationalPaymentConsentsRaw` - Create International Payment Consents
* `createInternationalPaymentsJson` - Create International Payments
* `createInternationalPaymentsRaw` - Create International Payments
* `getInternationalPaymentConsentsConsentId` - Get International Payment Consents
* `getInternationalPaymentConsentsConsentIdFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `getInternationalPaymentsInternationalPaymentId` - Get International Payments

### internationalScheduledPayments

* `createInternationalScheduledPaymentConsentsJson` - Create International Scheduled Payment Consents
* `createInternationalScheduledPaymentConsentsRaw` - Create International Scheduled Payment Consents
* `createInternationalScheduledPaymentsJson` - Create International Scheduled Payments
* `createInternationalScheduledPaymentsRaw` - Create International Scheduled Payments
* `getInternationalScheduledPaymentConsentsConsentId` - Get International Scheduled Payment Consents
* `getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `getInternationalScheduledPaymentsInternationalScheduledPaymentId` - Get International Scheduled Payments

### internationalStandingOrders

* `createInternationalStandingOrderConsentsJson` - Create International Standing Order Consents
* `createInternationalStandingOrderConsentsRaw` - Create International Standing Order Consents
* `createInternationalStandingOrdersJson` - Create International Standing Orders
* `createInternationalStandingOrdersRaw` - Create International Standing Orders
* `getInternationalStandingOrderConsentsConsentId` - Get International Standing Order Consents
* `getInternationalStandingOrdersInternationalStandingOrderPaymentId` - Get International Standing Orders

### paymentDetails

* `getDomesticPaymentsDomesticPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails` - Get Payment Details
* `getFilePaymentsFilePaymentIdPaymentDetails` - Get Payment Details
* `getInternationalPaymentsInternationalPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails` - Get Payment Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

