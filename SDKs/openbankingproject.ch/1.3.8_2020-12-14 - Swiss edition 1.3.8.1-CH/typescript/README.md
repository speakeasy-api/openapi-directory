# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateConsentRequest, CreateConsentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuthOAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateConsentRequest = {
  security: {
    bearerAuthOAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  headers: {
    digest: "sit",
    psuAccept: "voluptas",
    psuAcceptCharset: "culpa",
    psuAcceptEncoding: "expedita",
    psuAcceptLanguage: "consequuntur",
    psuCorporateID: "dolor",
    psuCorporateIDType: "expedita",
    psuDeviceID: "voluptas",
    psuGeoLocation: "fugit",
    psuHttpMethod: "PATCH",
    psuID: "nihil",
    psuIDType: "rerum",
    psuIPAddress: "dicta",
    psuIPPort: "debitis",
    psuUserAgent: "voluptatum",
    signature: "et",
    tppBrandLoggingInformation: "ut",
    tppExplicitAuthorisationPreferred: true,
    tppNokRedirectURI: "et",
    tppNotificationContentPreferred: "voluptate",
    tppNotificationURI: "iste",
    tppRedirectPreferred: true,
    tppRedirectURI: "totam",
    tppSignatureCertificate: "dolores",
    xRequestID: "illum",
  },
  request: {
    access: {
      accounts: [
        {
          cashAccountType: "vel",
          currency: "odio",
          iban: "dolore",
          otherAccountIdentification: "id",
        },
      ],
      additionalInformation: {
        ownerName: [
          {
            cashAccountType: "accusantium",
            currency: "totam",
            iban: "commodi",
            otherAccountIdentification: "quis",
          },
        ],
        trustedBeneficiaries: [
          {
            cashAccountType: "aut",
            currency: "odit",
            iban: "non",
            otherAccountIdentification: "voluptas",
          },
          {
            cashAccountType: "omnis",
            currency: "aut",
            iban: "illo",
            otherAccountIdentification: "sed",
          },
        ],
      },
      allPsd2: "allAccountsWithOwnerName",
      availableAccounts: "allAccountsWithOwnerName",
      availableAccountsWithBalance: "allAccounts",
      balances: [
        {
          cashAccountType: "odio",
          currency: "qui",
          iban: "recusandae",
          otherAccountIdentification: "at",
        },
      ],
      restrictedTo: [
        "eveniet",
      ],
      transactions: [
        {
          cashAccountType: "sint",
          currency: "inventore",
          iban: "ut",
          otherAccountIdentification: "exercitationem",
        },
        {
          cashAccountType: "aut",
          currency: "reprehenderit",
          iban: "tempore",
          otherAccountIdentification: "maiores",
        },
      ],
    },
    combinedServiceIndicator: false,
    frequencyPerDay: 7242748068272024738,
    recurringIndicator: false,
    validUntil: "1992-08-27",
  },
};

sdk.accountInformationServiceAIS.createConsent(req).then((res: CreateConsentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account Information Service (AIS)

* `createConsent` - Create consent
* `deleteConsent` - Delete Consent
* `getAccountList` - Read account list
* `getBalances` - Read balance
* `getConsentAuthorisation` - Get consent authorisation sub-resources request
* `getConsentInformation` - Get consent request
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getConsentStatus` - Consent status request
* `getTransactionDetails` - Read transaction details
* `getTransactionList` - Read transaction list of an account
* `readAccountDetails` - Read account details
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `updateConsentsPsuData` - Update PSU Data for consents

### Common Services

* `deleteSigningBasket` - Delete the signing basket
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateConsentsPsuData` - Update PSU Data for consents
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation
* `updateSigningBasketPsuData` - Update PSU data for signing basket

### Confirmation of Funds Service (PIIS)

* `checkAvailabilityOfFunds` - Confirmation of funds request

### Payment Initiation Service (PIS)

* `cancelPayment` - Payment cancellation request
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInformation` - Get payment information
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getPaymentInitiationStatus` - Payment initiation status request
* `initiatePayment` - Payment initiation request
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation

### Signing Baskets Service (SBS)

* `createSigningBasket` - Create a signing basket resource
* `deleteSigningBasket` - Delete the signing basket
* `getSigningBasket` - Returns the content of an signing basket object
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateSigningBasketPsuData` - Update PSU data for signing basket

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
