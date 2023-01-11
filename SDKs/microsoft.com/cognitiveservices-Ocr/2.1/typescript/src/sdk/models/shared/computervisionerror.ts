import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputerVisionError
/** 
 * Details about the API request error.
**/
export class ComputerVisionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: any;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
