import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Promoter
/** 
 * Promoter
**/
export class Promoter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Record<string, string>;
}
