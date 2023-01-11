import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscribeUserNotificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class SubscribeUserNotificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class SubscribeUserNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscribeUserNotificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NotificationSubscription;

  @SpeakeasyMetadata()
  security: SubscribeUserNotificationSecurity;
}


export class SubscribeUserNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
