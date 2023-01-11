import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequisitionLinks
/** 
 * RequisitionLinksSerializer.
**/
export class RequisitionLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initiate" })
  initiate: string;
}
