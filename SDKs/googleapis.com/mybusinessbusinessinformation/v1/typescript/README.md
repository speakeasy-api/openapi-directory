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
import { MybusinessbusinessinformationAccountsLocationsCreateRequest, MybusinessbusinessinformationAccountsLocationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessbusinessinformationAccountsLocationsCreateRequest = {
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
    requestId: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
    validateOnly: true,
  },
  request: {
    adWordsLocationExtensions: {
      adPhone: "voluptatum",
    },
    categories: {
      additionalCategories: [
        {
          name: "ut",
        },
      ],
      primaryCategory: {
        name: "dolorem",
      },
    },
    labels: [
      "voluptate",
      "iste",
    ],
    languageCode: "vitae",
    latlng: {
      latitude: 66.099998,
      longitude: 1.100000,
    },
    moreHours: [
      {
        hoursTypeId: "odio",
        periods: [
          {
            closeDay: "THURSDAY",
            closeTime: {
              hours: 959367522974354090,
              minutes: 2914295034816259174,
              nanos: 1395437218309923052,
              seconds: 6745438398739480977,
            },
            openDay: "SATURDAY",
            openTime: {
              hours: 3398579248012586914,
              minutes: 5974317550424871033,
              nanos: 3317123977833389635,
              seconds: 5001958211167890979,
            },
          },
          {
            closeDay: "TUESDAY",
            closeTime: {
              hours: 4778690082005258714,
              minutes: 1059542851699319360,
              nanos: 6972732843819909978,
              seconds: 5558237345453186302,
            },
            openDay: "SUNDAY",
            openTime: {
              hours: 771642788862502430,
              minutes: 8514850266767180993,
              nanos: 8683452355129068124,
              seconds: 4345851588384648695,
            },
          },
        ],
      },
      {
        hoursTypeId: "qui",
        periods: [
          {
            closeDay: "DAY_OF_WEEK_UNSPECIFIED",
            closeTime: {
              hours: 3959279844101328186,
              minutes: 8902041070398994519,
              nanos: 303089054982227392,
              seconds: 7338728586234333996,
            },
            openDay: "MONDAY",
            openTime: {
              hours: 7847956203786849690,
              minutes: 406703151708498928,
              nanos: 4756106358532488297,
              seconds: 5837486892148644279,
            },
          },
          {
            closeDay: "WEDNESDAY",
            closeTime: {
              hours: 2264299874001785192,
              minutes: 1061380815263676471,
              nanos: 7242748068272024738,
              seconds: 7719717197379695442,
            },
            openDay: "SUNDAY",
            openTime: {
              hours: 2671030200101705776,
              minutes: 3508963237347473586,
              nanos: 8565714761387219319,
              seconds: 4564823113789767141,
            },
          },
          {
            closeDay: "SATURDAY",
            closeTime: {
              hours: 7014402135919778893,
              minutes: 3983722386484812742,
              nanos: 2118716725206170867,
              seconds: 2587000937929698613,
            },
            openDay: "MONDAY",
            openTime: {
              hours: 1938800996802160635,
              minutes: 8097022081922209513,
              nanos: 7481608503761597087,
              seconds: 6056649900269286653,
            },
          },
        ],
      },
    ],
    name: "qui",
    openInfo: {
      openingDate: {
        day: 4308690457412179793,
        month: 7663837986485606015,
        year: 7132033595893905170,
      },
      status: "OPEN",
    },
    phoneNumbers: {
      additionalPhones: [
        "itaque",
        "ab",
        "neque",
      ],
      primaryPhone: "ullam",
    },
    profile: {
      description: "et",
    },
    regularHours: {
      periods: [
        {
          closeDay: "THURSDAY",
          closeTime: {
            hours: 5902760509050140210,
            minutes: 9021104375654741729,
            nanos: 3604381780091280195,
            seconds: 2066195468801476818,
          },
          openDay: "TUESDAY",
          openTime: {
            hours: 759605945513541974,
            minutes: 2408550365227740434,
            nanos: 5521202747878656476,
            seconds: 5596430475431407243,
          },
        },
        {
          closeDay: "FRIDAY",
          closeTime: {
            hours: 8482125374365136680,
            minutes: 7862762095958642309,
            nanos: 4391202566038595699,
            seconds: 6215632031706852400,
          },
          openDay: "TUESDAY",
          openTime: {
            hours: 7442289190031176026,
            minutes: 5364953311572054685,
            nanos: 7945398411639602224,
            seconds: 1925401661646756611,
          },
        },
        {
          closeDay: "SUNDAY",
          closeTime: {
            hours: 4989862523986425397,
            minutes: 2803285039048912676,
            nanos: 950400323440343118,
            seconds: 6430969915190400444,
          },
          openDay: "DAY_OF_WEEK_UNSPECIFIED",
          openTime: {
            hours: 6604365855503062775,
            minutes: 1836598054518427835,
            nanos: 7540276489530073149,
            seconds: 7638413271565042464,
          },
        },
      ],
    },
    relationshipData: {
      childrenLocations: [
        {
          placeId: "laudantium",
          relationType: "RELATION_TYPE_UNSPECIFIED",
        },
        {
          placeId: "ipsa",
          relationType: "DEPARTMENT_OF",
        },
        {
          placeId: "doloremque",
          relationType: "DEPARTMENT_OF",
        },
      ],
      parentChain: "atque",
      parentLocation: {
        placeId: "ratione",
        relationType: "INDEPENDENT_ESTABLISHMENT_IN",
      },
    },
    serviceArea: {
      businessType: "CUSTOMER_AND_BUSINESS_LOCATION",
      places: {
        placeInfos: [
          {
            placeId: "maxime",
            placeName: "eum",
          },
        ],
      },
      regionCode: "perferendis",
    },
    serviceItems: [
      {
        freeFormServiceItem: {
          category: "rerum",
          label: {
            description: "reiciendis",
            displayName: "quis",
            languageCode: "cumque",
          },
        },
        price: {
          currencyCode: "minima",
          nanos: 2333048574390956331,
          units: "est",
        },
        structuredServiceItem: {
          description: "quis",
          serviceTypeId: "eum",
        },
      },
    ],
    specialHours: {
      specialHourPeriods: [
        {
          closeTime: {
            hours: 544981646038740619,
            minutes: 4814861198247358488,
            nanos: 4975249678507640420,
            seconds: 8953538234431013647,
          },
          closed: true,
          endDate: {
            day: 5310832663795041070,
            month: 1363585710475529225,
            year: 8279128640960530079,
          },
          openTime: {
            hours: 1011676084465510524,
            minutes: 8764227983217623240,
            nanos: 4745905187492708501,
            seconds: 7941830299651147569,
          },
          startDate: {
            day: 157519078836327761,
            month: 2867593906384393455,
            year: 7506934391669544280,
          },
        },
      ],
    },
    storeCode: "vel",
    storefrontAddress: {
      addressLines: [
        "placeat",
        "qui",
      ],
      administrativeArea: "nisi",
      languageCode: "quis",
      locality: "adipisci",
      organization: "porro",
      postalCode: "rerum",
      recipients: [
        "accusamus",
      ],
      regionCode: "numquam",
      revision: 2223751782546645906,
      sortingCode: "rerum",
      sublocality: "ut",
    },
    title: "laborum",
    websiteUri: "fugit",
  },
};

sdk.accounts.mybusinessbusinessinformationAccountsLocationsCreate(req).then((res: MybusinessbusinessinformationAccountsLocationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `mybusinessbusinessinformationAccountsLocationsCreate` - Creates a new Location that will be owned by the logged in user.
* `mybusinessbusinessinformationAccountsLocationsList` - Lists the locations for the specified account.

### attributes

* `mybusinessbusinessinformationAttributesList` - Returns the list of attributes that would be available for a location with the given primary category and country.

### categories

* `mybusinessbusinessinformationCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `mybusinessbusinessinformationCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `mybusinessbusinessinformationChainsSearch` - Searches the chain based on chain name.

### googleLocations

* `mybusinessbusinessinformationGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

### locations

* `mybusinessbusinessinformationLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* `mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated` - Gets the Google-updated version of the specified location.
* `mybusinessbusinessinformationLocationsClearLocationAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `mybusinessbusinessinformationLocationsDelete` - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* `mybusinessbusinessinformationLocationsGetAttributes` - Looks up all the attributes set for a given location.
* `mybusinessbusinessinformationLocationsUpdateAttributes` - Update attributes for a given location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
