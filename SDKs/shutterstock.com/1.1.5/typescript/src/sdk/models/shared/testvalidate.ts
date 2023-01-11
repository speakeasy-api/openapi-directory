import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestValidateHeader } from "./testvalidateheader";
import { TestValidateQuery } from "./testvalidatequery";



// TestValidate
/** 
 * Validation results
**/
export class TestValidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: TestValidateHeader;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: TestValidateQuery;
}
