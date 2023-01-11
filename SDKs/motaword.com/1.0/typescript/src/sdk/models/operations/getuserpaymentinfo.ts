import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserPaymentInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetUserPaymentInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserPaymentInfoPathParams;
}


export class GetUserPaymentInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  paymentInfo?: shared.PaymentInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
