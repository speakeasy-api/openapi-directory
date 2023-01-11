import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTicketInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: string;
}


export class GetTicketInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTicketInfoPathParams;
}


export class GetTicketInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
