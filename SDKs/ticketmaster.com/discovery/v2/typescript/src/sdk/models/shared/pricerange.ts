import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PriceRangeTypeEnum {
    Standard = "standard"
}


// PriceRange
/** 
 * PriceRange
**/
export class PriceRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currency?: string;

  @SpeakeasyMetadata()
  max?: number;

  @SpeakeasyMetadata()
  min?: number;

  @SpeakeasyMetadata()
  type?: PriceRangeTypeEnum;
}
