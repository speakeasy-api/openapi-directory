import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GceInstanceFilter
/** 
 * Message describing compute engine instance filter
**/
export class GceInstanceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccounts" })
  serviceAccounts?: string[];
}
