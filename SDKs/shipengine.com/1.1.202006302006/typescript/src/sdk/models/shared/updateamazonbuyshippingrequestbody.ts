import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateAmazonBuyShippingRequestBody
/** 
 * An amazon buy shipping account settings request body
**/
export class UpdateAmazonBuyShippingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
