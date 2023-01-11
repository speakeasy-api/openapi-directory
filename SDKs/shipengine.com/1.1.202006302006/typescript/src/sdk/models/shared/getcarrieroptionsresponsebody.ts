import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCarrierOptionsResponseBodyCarrierAdvancedOption
/** 
 * Advanced options that are specific to the carrier
**/
export class GetCarrierOptionsResponseBodyCarrierAdvancedOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_value" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetCarrierOptionsResponseBody
/** 
 * A carrier list options response body
**/
export class GetCarrierOptionsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetCarrierOptionsResponseBodyCarrierAdvancedOption })
  options?: GetCarrierOptionsResponseBodyCarrierAdvancedOption[];
}
