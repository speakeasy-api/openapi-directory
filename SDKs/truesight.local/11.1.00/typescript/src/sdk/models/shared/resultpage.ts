import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResultPage
/** 
 * Encapsulates a list of results.
**/
export class ResultPage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: Record<string, any>[];

  @SpeakeasyMetadata()
  restrictedRights?: boolean;

  @SpeakeasyMetadata()
  total?: number;
}
