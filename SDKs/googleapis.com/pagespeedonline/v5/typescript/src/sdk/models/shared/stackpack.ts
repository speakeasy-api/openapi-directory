import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StackPack
/** 
 * Message containing Stack Pack information.
**/
export class StackPack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=iconDataURL" })
  iconDataURL?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
