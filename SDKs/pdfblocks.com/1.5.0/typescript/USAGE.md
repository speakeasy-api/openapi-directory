<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddImageWatermarkV1Request, AddImageWatermarkV1Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddImageWatermarkV1Request = {
  request: {
    file: {
      content: "sit".encode(),
      file: "voluptas",
    },
    image: {
      content: "culpa".encode(),
      image: "expedita",
    },
    margin: 15.100000,
    transparency: 1774932891286980153,
  },
};

sdk.addImageWatermarkV1(req).then((res: AddImageWatermarkV1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->