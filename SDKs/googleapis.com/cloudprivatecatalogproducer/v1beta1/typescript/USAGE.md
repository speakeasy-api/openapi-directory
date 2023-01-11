<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudprivatecatalogproducerCatalogsAssociationsCreateRequest, CloudprivatecatalogproducerCatalogsAssociationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudprivatecatalogproducerCatalogsAssociationsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
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
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    association: {
      createTime: "dicta",
      name: "debitis",
      resource: "voluptatum",
    },
  },
};

sdk.catalogs.cloudprivatecatalogproducerCatalogsAssociationsCreate(req).then((res: CloudprivatecatalogproducerCatalogsAssociationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->