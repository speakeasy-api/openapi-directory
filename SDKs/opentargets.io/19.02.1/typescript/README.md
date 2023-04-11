# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/opentargets.io/19.02.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/opentargets.io/19.02.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAssociationFilterRequest,
  GetAssociationFilterResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAssociationFilterRequest = {
  datasource: "corrupti",
  datastructure: "provident",
  datatype: "distinctio",
  direct: false,
  disease: "quibusdam",
  facets: false,
  fields: "unde",
  format: "nulla",
  from: 5448.83,
  pathway: "illum",
  scorevalueMax: 4236.55,
  scorevalueMin: 6235.64,
  scorevalueTypes: "deserunt",
  search: "suscipit",
  size: 4375.87,
  sort: "magnam",
  target: "debitis",
  targetClass: "ipsa",
  therapeuticArea: "delectus",
  uniprotkw: "tempora",
};

sdk.filter.getAssociationFilter(req).then((res: GetAssociationFilterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### filter

* `getAssociationFilter` - Filter available associations
* `getEvidenceFilter` - Filter available evidence
* `postAssociationFilter` - Batch query available associations
* `postEvidenceFilter` - Batch filter available evidence

### private

* `getApiDocs` - Browse API documentation
* `getApiSwaggerUI` - Browse interactive API documentation
* `getAutocomplete` - Get `autocomplete` objects.
* `getDiseaseById` - Find information about a disease
* `getDrugByID` - Get drug by ID
* `getECObyID` - Get evidence code by ID
* `getQuickSearch` - Search most relevant results
* `getRelationByEFOID` - Find related entities by disease
* `getRelationByENSGID` - Find related entities by target
* `getSwagger` - Get OpenAPI schema
* `getTargetByENSGID` - Find information about a target
* `getTargetExpressionByENSGID` - Query expression levels
* `postBestHitSearch` - Find the best hit
* `postDiseaseById` - Find information about a list of diseases
* `postEnrichmentTarget` - Enrichment analysis
* `postRelation` - Find related entities
* `postTargetByENSGID` - Find information about a list of targets
* `postTargetExpressionByENSGID` - Batch query expression levels

### public

* `getAssociationById` - Get association by id
* `getAssociationFilter` - Filter available associations
* `getDataMetrics` - Get metrics about the current data release
* `getDataStats` - Get statistics about the current data release
* `getEvidenceById` - Get evidence by ID
* `getEvidenceFilter` - Filter available evidence
* `getPing` - Ping service
* `getSearch` - Search for a disease or a target
* `getTherapeuticAreas` - Get the list of therapeutic areas about the current data release
* `getVersion` - Get API version
* `postAssociationFilter` - Batch query available associations
* `postEvidenceById` - Get evidence for a list of IDs
* `postEvidenceFilter` - Batch filter available evidence

### retrieve

* `getAssociationById` - Get association by id
* `getEvidenceById` - Get evidence by ID
* `postEvidenceById` - Get evidence for a list of IDs

### search

* `getSearch` - Search for a disease or a target

### utils

* `getDataMetrics` - Get metrics about the current data release
* `getDataStats` - Get statistics about the current data release
* `getPing` - Ping service
* `getTherapeuticAreas` - Get the list of therapeutic areas about the current data release
* `getVersion` - Get API version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

