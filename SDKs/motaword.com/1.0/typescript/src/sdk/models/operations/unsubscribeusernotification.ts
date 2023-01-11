import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnsubscribeUserNotificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class UnsubscribeUserNotificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class UnsubscribeUserNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnsubscribeUserNotificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NotificationSubscription;

  @SpeakeasyMetadata()
  security: UnsubscribeUserNotificationSecurity;
}


export class UnsubscribeUserNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
