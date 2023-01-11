import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestValidateQuery
/** 
 * Validation results
**/
export class TestValidateQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string[];
}
