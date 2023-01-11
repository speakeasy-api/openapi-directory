import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequisitionLinkParams
/** 
 * RequisitionLinkParamsSerializer.
**/
export class RequisitionLinkParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspsp_id, form, name=aspsp_id;, multipart_form, name=aspsp_id" })
  aspspId: string;
}
