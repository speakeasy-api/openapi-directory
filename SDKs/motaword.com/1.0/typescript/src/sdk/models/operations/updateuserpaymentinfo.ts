import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserPaymentInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class UpdateUserPaymentInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserPaymentInfoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PaymentInfo;
}


export class UpdateUserPaymentInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
