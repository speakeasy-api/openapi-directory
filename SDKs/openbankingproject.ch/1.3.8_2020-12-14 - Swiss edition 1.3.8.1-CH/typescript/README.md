# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openbankingproject.ch/1.3.8_2020-12-14 - Swiss edition 1.3.8.1-CH/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openbankingproject.ch/1.3.8_2020-12-14 - Swiss edition 1.3.8.1-CH/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConsentRequest,
  CreateConsentResponse
} from "openapi/dist/sdk/models/operations";
import {
  AccountAccessAllPsd2Enum,
  AccountAccessAvailableAccountsEnum,
  AccountAccessAvailableAccountsWithBalanceEnum,
  PSUHttpMethodEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateConsentRequest = {
  digest: "corrupti",
  psuAccept: "provident",
  psuAcceptCharset: "distinctio",
  psuAcceptEncoding: "quibusdam",
  psuAcceptLanguage: "unde",
  psuCorporateID: "nulla",
  psuCorporateIDType: "corrupti",
  psuDeviceID: "illum",
  psuGeoLocation: "vel",
  psuHttpMethod: PSUHttpMethodEnum.Patch,
  psuId: "deserunt",
  psuIDType: "suscipit",
  psuIPAddress: "112.76.228.14",
  psuIPPort: "delectus",
  psuUserAgent: "tempora",
  signature: "suscipit",
  tppBrandLoggingInformation: "molestiae",
  tppExplicitAuthorisationPreferred: false,
  tppNokRedirectURI: "https://studious-lynx.info",
  tppNotificationContentPreferred: "excepturi",
  tppNotificationURI: "nisi",
  tppRedirectPreferred: false,
  tppRedirectURI: "https://tangible-bathroom.info",
  tppSignatureCertificate: "veritatis",
  xRequestID: "deserunt",
  consents: {
    access: {
      accounts: [
        {
          cashAccountType: "ipsam",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
      ],
      additionalInformation: {
        ownerName: [
          {
            cashAccountType: "sapiente",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
          {
            cashAccountType: "quo",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
          {
            cashAccountType: "odit",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
          {
            cashAccountType: "at",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
        ],
        trustedBeneficiaries: [
          {
            cashAccountType: "maiores",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
          {
            cashAccountType: "molestiae",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
          {
            cashAccountType: "quod",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
          {
            cashAccountType: "quod",
            currency: "EUR",
            iban: "FR7612345987650123456789014",
            otherAccountIdentification: "90-100100-0",
          },
        ],
      },
      allPsd2: AccountAccessAllPsd2Enum.AllAccounts,
      availableAccounts: AccountAccessAvailableAccountsEnum.AllAccountsWithOwnerName,
      availableAccountsWithBalance: AccountAccessAvailableAccountsWithBalanceEnum.AllAccountsWithOwnerName,
      balances: [
        {
          cashAccountType: "dicta",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
        {
          cashAccountType: "nam",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
        {
          cashAccountType: "officia",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
      ],
      restrictedTo: [
        "fugit",
        "deleniti",
        "hic",
      ],
      transactions: [
        {
          cashAccountType: "totam",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
        {
          cashAccountType: "beatae",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
        {
          cashAccountType: "commodi",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
        {
          cashAccountType: "molestiae",
          currency: "EUR",
          iban: "FR7612345987650123456789014",
          otherAccountIdentification: "90-100100-0",
        },
      ],
    },
    combinedServiceIndicator: false,
    frequencyPerDay: 4,
    recurringIndicator: false,
    validUntil: "2020-12-31",
  },
};

sdk.accountInformationServiceAIS.createConsent(req).then((res: CreateConsentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accountInformationServiceAIS

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

### commonServices

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

### confirmationOfFundsServicePIIS

* `checkAvailabilityOfFunds` - Confirmation of funds request

### paymentInitiationServicePIS

* `cancelPayment` - Payment cancellation request
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInformation` - Get payment information
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getPaymentInitiationStatus` - Payment initiation status request
* `initiatePaymentJson` - Payment initiation request
* `initiatePaymentMultipart` - Payment initiation request
* `initiatePaymentRaw` - Payment initiation request
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation

### signingBasketsServiceSBS

* `createSigningBasket` - Create a signing basket resource
* `deleteSigningBasket` - Delete the signing basket
* `getSigningBasket` - Returns the content of an signing basket object
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateSigningBasketPsuData` - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

