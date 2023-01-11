import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Copy } from "./copy";



// Create
/** 
 * An object was created.
**/
export class Create extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copy" })
  copy?: Copy;

  @SpeakeasyMetadata({ data: "json, name=new" })
  new?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: Record<string, any>;
}
