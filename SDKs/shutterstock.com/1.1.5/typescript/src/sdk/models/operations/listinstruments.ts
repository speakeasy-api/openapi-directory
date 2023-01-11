import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListInstrumentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class ListInstrumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListInstrumentsSecurity;
}


export class ListInstrumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  instrumentList?: shared.InstrumentList;

  @SpeakeasyMetadata()
  statusCode: number;
}
