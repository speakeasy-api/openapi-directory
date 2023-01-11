import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImageRatioEnum {
    Sixteen9 = "16_9",
    Three2 = "3_2",
    Four3 = "4_3"
}


// Image
/** 
 * Image
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attribution?: string;

  @SpeakeasyMetadata()
  fallback?: boolean;

  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  ratio?: ImageRatioEnum;

  @SpeakeasyMetadata()
  url?: string;

  @SpeakeasyMetadata()
  width?: number;
}
