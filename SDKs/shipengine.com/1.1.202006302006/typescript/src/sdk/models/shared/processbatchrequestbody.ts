import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessBatchRequestBody
/** 
 * A process batch request body
**/
export class ProcessBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label_format" })
  labelFormat?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_layout" })
  labelLayout?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: Date;
}
