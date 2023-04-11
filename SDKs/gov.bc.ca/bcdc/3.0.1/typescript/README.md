# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/bcdc/3.0.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/bcdc/3.0.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetActionOrganizationActivityListRequest,
  GetActionOrganizationActivityListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    githubAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetActionOrganizationActivityListRequest = {
  id: "corrupti",
};

sdk.action.getActionOrganizationActivityList(req).then((res: GetActionOrganizationActivityListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### action

* `getActionOrganizationActivityList` - Get the activity stream of an organization
* `getActionOrganizationActivityListHtml` - Get the activity stream of an organization, HTML format
* `getActionOrganizationAutocomplete` - Get names of organizations that match a query string
* `getActionOrganizationFollowerCount` - Get number of followers of an organization
* `getActionOrganizationFollowerList` - Get users following an organization
* `getActionOrganizationList` - Get names of all organizations
* `getActionOrganizationListForUser` - Get organizations that a user has a given permission for
* `getActionOrganizationRevisionList` - Get organization revisions
* `getActionOrganizationShow` - Get details of a specific organization
* `getActionPackageActivityList` - Get the activity stream of a package (dataset)
* `getActionPackageActivityListHtml` - Get the activity stream of a package (dataset), HTML format
* `getActionPackageAutocomplete` - Find packages (datasets) matching a query
* `getActionPackageList` - Get a list of all packages (datasets)
* `getActionPackageRelationshipsList` - Get package (dataset) relationships
* `getActionPackageRevisionList` - Get list of revisions for a package (dataset)
* `getActionPackageSearch` - Find packages (datasets) matching query terms
* `getActionPackageShow` - Get metadata about one specific package (dataset)
* `getActionRelatedList` - Gets items related to a package (dataset)
* `getActionResourceSearch` - Find resources
* `getActionResourceShow` - Get metadata for a specific resource
* `getActionStatusShow` - Get the site status
* `getActionTagList` - Get a list of tags
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

