import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CancelBookingQuoteServerList = [
	"https://api.sandbox.viator.com/partner",
] as const;


export class CancelBookingQuotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=booking-reference" })
  bookingReference: string;
}


export class CancelBookingQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverURL?: string;

  @SpeakeasyMetadata()
  pathParams: CancelBookingQuotePathParams;
}


export class CancelBookingQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneUNAUTHORIZED?: shared.FourHundredAndOneUnauthorized;

  @SpeakeasyMetadata()
  fourHundredAndSixNOTACCEPTABLE?: shared.FourHundredAndSixNotAcceptable;

  @SpeakeasyMetadata()
  fiveHundredINTERNALSERVERERROR?: shared.FiveHundredInternalServerError;

  @SpeakeasyMetadata()
  fiveHundredAndThreeSERVICEUNAVAILABLE?: shared.FiveHundredAndThreeServiceUnavailable;

  @SpeakeasyMetadata()
  cancelBookingQuoteResponse?: shared.CancelBookingQuoteResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
