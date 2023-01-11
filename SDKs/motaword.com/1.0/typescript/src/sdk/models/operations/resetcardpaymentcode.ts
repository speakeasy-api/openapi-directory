import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetCardPaymentCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: number;
}


export class ResetCardPaymentCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetCardPaymentCodePathParams;
}


export class ResetCardPaymentCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  creditCard?: shared.CreditCard;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
