import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegrationFields } from "./integrationfields";



// Integrations
/** 
 * Available and installed integrations
**/
export class Integrations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: IntegrationFields;

  @SpeakeasyMetadata({ data: "json, name=installed" })
  installed?: IntegrationFields;
}
