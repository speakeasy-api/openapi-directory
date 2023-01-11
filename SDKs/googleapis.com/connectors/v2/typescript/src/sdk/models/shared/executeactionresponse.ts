import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecuteActionResponse
/** 
 * Response message for ActionService.ExecuteAction
**/
export class ExecuteActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: Record<string, any>[];
}
