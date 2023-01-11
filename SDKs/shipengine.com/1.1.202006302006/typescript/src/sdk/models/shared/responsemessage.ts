import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseMessage
/** 
 * A response message that displays when additional info is needed for an address validation request.
**/
export class ResponseMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=detail_code" })
  detailCode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Record<string, any>;
}
