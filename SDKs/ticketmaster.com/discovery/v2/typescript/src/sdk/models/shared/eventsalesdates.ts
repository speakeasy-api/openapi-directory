import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Presale } from "./presale";
import { PublicSaleDates } from "./publicsaledates";



// EventSalesDates
/** 
 * Event's Sales Dates
**/
export class EventSalesDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Presale })
  presales?: Presale[];

  @SpeakeasyMetadata()
  public?: PublicSaleDates;
}
