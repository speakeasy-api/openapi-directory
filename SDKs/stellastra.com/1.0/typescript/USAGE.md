<!-- Start SDK Example Usage -->
```typescript
import {
  PostPostReviewRequest,
  PostPostReviewResponse,
  PostPostReviewRatingEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: PostPostReviewRequest = {
  requestBody: {
    rating: 5,
    userEmail: "johnsmith@usercompanyxyz.com",
    userName: "John",
  },
  rating: PostPostReviewRatingEnum.Three,
  userEmail: "provident",
  userName: "Micheal_Sporer",
};

sdk.postPostReview(req).then((res: PostPostReviewResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->