import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectInsurerRequestBody
/** 
 * A create shipsurance connection request body
**/
export class ConnectInsurerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=policy_id" })
  policyId: string;
}
