import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextRecognitionResult } from "./textrecognitionresult";
import { OperationStatusEnum } from "./operationstatusenum";



// ReadOperationResult
/** 
 * OCR result of the read operation.
**/
export class ReadOperationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recognitionResults", elemType: TextRecognitionResult })
  recognitionResults?: TextRecognitionResult[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;
}
