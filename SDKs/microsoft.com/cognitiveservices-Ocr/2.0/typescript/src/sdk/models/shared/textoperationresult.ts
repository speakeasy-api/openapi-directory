import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextRecognitionResult } from "./textrecognitionresult";
import { OperationStatusEnum } from "./operationstatusenum";



// TextOperationResult
/** 
 * Result of recognition text operation.
**/
export class TextOperationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recognitionResult" })
  recognitionResult?: TextRecognitionResult;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;
}
