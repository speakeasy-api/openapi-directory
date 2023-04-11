<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteCustomersAccountAnnouncementsAnnouncementIdRequest,
  DeleteCustomersAccountAnnouncementsAnnouncementIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
});

const req: DeleteCustomersAccountAnnouncementsAnnouncementIdRequest = {
  account: 548814,
  announcementId: "provident",
};

sdk.announcements.deleteCustomersAccountAnnouncementsAnnouncementId(req).then((res: DeleteCustomersAccountAnnouncementsAnnouncementIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->