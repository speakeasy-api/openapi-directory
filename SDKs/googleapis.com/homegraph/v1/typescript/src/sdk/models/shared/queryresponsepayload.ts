import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryResponsePayload
/** 
 * Payload containing device states information.
**/
export class QueryResponsePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices" })
  devices?: Record<string, Record<string, any>>;
}
