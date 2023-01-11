import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestValidateHeader
/** 
 * Validation results
**/
export class TestValidateHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user-agent" })
  userAgent?: string;
}
