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