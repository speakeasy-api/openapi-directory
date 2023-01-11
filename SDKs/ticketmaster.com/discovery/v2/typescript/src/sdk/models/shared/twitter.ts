import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TwitterHandleEnum {
    AtATwitterHandle = "@a Twitter handle"
}


// Twitter
/** 
 * Twitter data
**/
export class Twitter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  handle?: TwitterHandleEnum;

  @SpeakeasyMetadata()
  hashtags?: string[];
}
