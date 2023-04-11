# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessbusinessinformation/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessbusinessinformation/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessbusinessinformationAccountsLocationsCreateRequest,
  MybusinessbusinessinformationAccountsLocationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ServiceAreaBusinessBusinessTypeEnum,
  RelevantLocationRelationTypeEnum,
  TimePeriodCloseDayEnum,
  TimePeriodOpenDayEnum,
  OpenInfoStatusEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessbusinessinformationAccountsLocationsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  locationInput: {
    adWordsLocationExtensions: {
      adPhone: "provident",
    },
    categories: {
      additionalCategories: [
        {
          name: "quibusdam",
        },
        {
          name: "unde",
        },
        {
          name: "nulla",
        },
      ],
      primaryCategory: {
        name: "corrupti",
      },
    },
    labels: [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
    languageCode: "iure",
    latlng: {
      latitude: 2975.34,
      longitude: 8917.73,
    },
    moreHours: [
      {
        hoursTypeId: "delectus",
        periods: [
          {
            closeDay: TimePeriodCloseDayEnum.Wednesday,
            closeTime: {
              hours: 477665,
              minutes: 791725,
              nanos: 812169,
              seconds: 528895,
            },
            openDay: TimePeriodOpenDayEnum.Wednesday,
            openTime: {
              hours: 568045,
              minutes: 392785,
              nanos: 925597,
              seconds: 836079,
            },
          },
          {
            closeDay: TimePeriodCloseDayEnum.DayOfWeekUnspecified,
            closeTime: {
              hours: 337396,
              minutes: 87129,
              nanos: 648172,
              seconds: 20218,
            },
            openDay: TimePeriodOpenDayEnum.Tuesday,
            openTime: {
              hours: 832620,
              minutes: 957156,
              nanos: 778157,
              seconds: 140350,
            },
          },
        ],
      },
    ],
    name: "at",
    openInfo: {
      openingDate: {
        day: 870088,
        month: 978619,
        year: 473608,
      },
      status: OpenInfoStatusEnum.ClosedTemporarily,
    },
    phoneNumbers: {
      additionalPhones: [
        "esse",
        "totam",
        "porro",
        "dolorum",
      ],
      primaryPhone: "dicta",
    },
    profile: {
      description: "nam",
    },
    regularHours: {
      periods: [
        {
          closeDay: TimePeriodCloseDayEnum.Thursday,
          closeTime: {
            hours: 143353,
            minutes: 537373,
            nanos: 944669,
            seconds: 758616,
          },
          openDay: TimePeriodOpenDayEnum.Thursday,
          openTime: {
            hours: 105907,
            minutes: 414662,
            nanos: 473600,
            seconds: 264555,
          },
        },
        {
          closeDay: TimePeriodCloseDayEnum.Monday,
          closeTime: {
            hours: 774234,
            minutes: 736918,
            nanos: 456150,
            seconds: 216550,
          },
          openDay: TimePeriodOpenDayEnum.Thursday,
          openTime: {
            hours: 135218,
            minutes: 18789,
            nanos: 324141,
            seconds: 617636,
          },
        },
        {
          closeDay: TimePeriodCloseDayEnum.Monday,
          closeTime: {
            hours: 612096,
            minutes: 222321,
            nanos: 616934,
            seconds: 386489,
          },
          openDay: TimePeriodOpenDayEnum.Sunday,
          openTime: {
            hours: 902599,
            minutes: 681820,
            nanos: 449950,
            seconds: 359508,
          },
        },
      ],
    },
    relationshipData: {
      childrenLocations: [
        {
          placeId: "iure",
          relationType: RelevantLocationRelationTypeEnum.IndependentEstablishmentIn,
        },
        {
          placeId: "quidem",
          relationType: RelevantLocationRelationTypeEnum.RelationTypeUnspecified,
        },
        {
          placeId: "ipsa",
          relationType: RelevantLocationRelationTypeEnum.IndependentEstablishmentIn,
        },
      ],
      parentChain: "est",
      parentLocation: {
        placeId: "mollitia",
        relationType: RelevantLocationRelationTypeEnum.IndependentEstablishmentIn,
      },
    },
    serviceArea: {
      businessType: ServiceAreaBusinessBusinessTypeEnum.BusinessTypeUnspecified,
      places: {
        placeInfos: [
          {
            placeId: "corporis",
            placeName: "explicabo",
          },
        ],
      },
      regionCode: "nobis",
    },
    serviceItems: [
      {
        freeFormServiceItem: {
          category: "omnis",
          label: {
            description: "nemo",
            displayName: "minima",
            languageCode: "excepturi",
          },
        },
        price: {
          currencyCode: "accusantium",
          nanos: 438601,
          units: "culpa",
        },
        structuredServiceItem: {
          description: "doloribus",
          serviceTypeId: "sapiente",
        },
      },
      {
        freeFormServiceItem: {
          category: "architecto",
          label: {
            description: "mollitia",
            displayName: "dolorem",
            languageCode: "culpa",
          },
        },
        price: {
          currencyCode: "consequuntur",
          nanos: 995300,
          units: "mollitia",
        },
        structuredServiceItem: {
          description: "occaecati",
          serviceTypeId: "numquam",
        },
      },
    ],
    specialHours: {
      specialHourPeriods: [
        {
          closeTime: {
            hours: 466311,
            minutes: 474697,
            nanos: 244425,
            seconds: 623510,
          },
          closed: false,
          endDate: {
            day: 158969,
            month: 338007,
            year: 110375,
          },
          openTime: {
            hours: 674752,
            minutes: 656330,
            nanos: 317202,
            seconds: 138183,
          },
          startDate: {
            day: 778346,
            month: 196582,
            year: 949572,
          },
        },
        {
          closeTime: {
            hours: 368725,
            minutes: 662527,
            nanos: 820994,
            seconds: 13571,
          },
          closed: false,
          endDate: {
            day: 97101,
            month: 622846,
            year: 837945,
          },
          openTime: {
            hours: 673660,
            minutes: 96098,
            nanos: 971945,
            seconds: 976460,
          },
          startDate: {
            day: 878194,
            month: 468651,
            year: 509624,
          },
        },
      ],
    },
    storeCode: "voluptatibus",
    storefrontAddress: {
      addressLines: [
        "omnis",
      ],
      administrativeArea: "voluptate",
      languageCode: "cum",
      locality: "perferendis",
      organization: "doloremque",
      postalCode: "29132",
      recipients: [
        "dicta",
        "harum",
      ],
      regionCode: "enim",
      revision: 880476,
      sortingCode: "commodi",
      sublocality: "repudiandae",
    },
    title: "Mr.",
    websiteUri: "ipsum",
  },
  accessToken: "quidem",
  alt: AltEnum.Media,
  callback: "excepturi",
  fields: "pariatur",
  key: "modi",
  oauthToken: "praesentium",
  parent: "rem",
  prettyPrint: false,
  quotaUser: "voluptates",
  requestId: "quasi",
  uploadType: "repudiandae",
  uploadProtocol: "sint",
  validateOnly: false,
};

sdk.accounts.mybusinessbusinessinformationAccountsLocationsCreate(req).then((res: MybusinessbusinessinformationAccountsLocationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

