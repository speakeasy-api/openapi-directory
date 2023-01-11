<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteCustomersAccountAnnouncementsAnnouncementIdRequest, DeleteCustomersAccountAnnouncementsAnnouncementIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: DeleteCustomersAccountAnnouncementsAnnouncementIdRequest = {
  pathParams: {
    account: 8717895732742165505,
    announcementId: "voluptas",
  },
};

sdk.announcements.deleteCustomersAccountAnnouncementsAnnouncementId(req).then((res: DeleteCustomersAccountAnnouncementsAnnouncementIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->