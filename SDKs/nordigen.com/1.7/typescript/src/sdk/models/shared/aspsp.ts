import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aspsp
/** 
 * Represents an ASPSP.
**/
export class Aspsp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_total_days" })
  transactionTotalDays?: string;
}
