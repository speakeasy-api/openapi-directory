import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instrument } from "./instrument";



// InstrumentsListResult
/** 
 * Image search results
**/
export class InstrumentsListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Instrument })
  data?: Instrument[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;
}
