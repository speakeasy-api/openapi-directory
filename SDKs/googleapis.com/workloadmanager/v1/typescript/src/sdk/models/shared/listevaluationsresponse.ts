import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";



// ListEvaluationsResponse
/** 
 * Message for response to listing Evaluations
**/
export class ListEvaluationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluations", elemType: Evaluation })
  evaluations?: Evaluation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
