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
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=fallback" })
  fallback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: ImageRatioEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
