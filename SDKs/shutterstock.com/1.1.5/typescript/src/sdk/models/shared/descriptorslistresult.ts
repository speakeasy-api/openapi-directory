import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Descriptors } from "./descriptors";



// DescriptorsListResult
/** 
 * List Descriptors results
**/
export class DescriptorsListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Descriptors })
  data?: Descriptors[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;
}
