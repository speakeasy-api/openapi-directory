import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstrumentList
/** 
 * List of instruments
**/
export class InstrumentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string[];
}
