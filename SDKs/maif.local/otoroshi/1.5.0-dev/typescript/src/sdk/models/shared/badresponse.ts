import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BadResponse
/** 
 * An HTTP response that is not supposed to be returned by a service
**/
export class BadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}
