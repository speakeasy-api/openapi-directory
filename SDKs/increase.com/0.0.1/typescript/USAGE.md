<!-- Start SDK Example Usage -->
```typescript
import {
  ActionARealTimeDecisionRequest,
  ActionARealTimeDecisionResponse
} from "openapi/dist/sdk/models/operations";
import {
  ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum,
  ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ActionARealTimeDecisionRequest = {
  actionARealTimeDecisionParameters: {
    cardAuthorization: {
      decision: ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum.Decline,
    },
    digitalWalletAuthentication: {
      result: ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum.Failure,
    },
    digitalWalletToken: {
      approval: {
        cardProfileId: "distinctio",
        email: "Leda_Stiedemann@hotmail.com",
        phone: "1-663-528-0923 x478",
      },
      decline: {
        reason: "voluptatum",
      },
    },
  },
  realTimeDecisionId: "iusto",
};

sdk.actionARealTimeDecision(req).then((res: ActionARealTimeDecisionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->