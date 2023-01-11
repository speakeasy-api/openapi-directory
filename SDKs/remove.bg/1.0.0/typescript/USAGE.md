<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostRemovebgRequest, PostRemovebgResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: PostRemovebgRequest = {
  request: {
    removeBgJson: {
      addShadow: false,
      bgColor: "voluptas",
      bgImageUrl: "culpa",
      channels: "rgba",
      crop: true,
      cropMargin: "dolor",
      format: "zip",
      imageFileB64: "voluptas",
      imageUrl: "fugit",
      position: "et",
      roi: "nihil",
      scale: "rerum",
      semitransparency: false,
      size: "preview",
      type: "auto",
      typeLevel: "2",
    },
    removeBgJson1: {
      addShadow: false,
      bgColor: "dolorem",
      bgImageUrl: "et",
      channels: "rgba",
      crop: true,
      cropMargin: "vitae",
      format: "jpg",
      imageFileB64: "dolores",
      imageUrl: "illum",
      position: "debitis",
      roi: "vel",
      scale: "odio",
      semitransparency: true,
      size: "full",
      type: "person",
      typeLevel: "none",
    },
    removeBgMultipart: {
      addShadow: false,
      bgColor: "commodi",
      bgImageFile: {
        bgImageFile: "quis",
        content: "est".encode(),
      },
      bgImageUrl: "aut",
      channels: "rgba",
      crop: true,
      cropMargin: "voluptas",
      format: "zip",
      imageFile: {
        content: "aut".encode(),
        imageFile: "illo",
      },
      imageFileB64: "sed",
      imageUrl: "officiis",
      position: "autem",
      roi: "consectetur",
      scale: "nobis",
      semitransparency: false,
      size: "preview",
      type: "product",
      typeLevel: "none",
    },
  },
};

sdk.backgroundRemoval.postRemovebg(req).then((res: PostRemovebgResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->