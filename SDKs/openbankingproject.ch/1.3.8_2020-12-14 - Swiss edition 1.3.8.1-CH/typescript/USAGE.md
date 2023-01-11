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