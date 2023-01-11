import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Outlet
/** 
 * A selling point for tickets.
**/
export class Outlet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  url?: string;
}
