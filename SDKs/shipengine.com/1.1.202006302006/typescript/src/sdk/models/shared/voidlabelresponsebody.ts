import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VoidLabelResponseBody
/** 
 * A void label response body
**/
export class VoidLabelResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
