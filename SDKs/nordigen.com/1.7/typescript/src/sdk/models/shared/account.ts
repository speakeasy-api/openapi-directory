import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Account
/** 
 * The representation of a bank account.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspsp_identifier" })
  aspspIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_accessed" })
  lastAccessed: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: Record<string, any>;
}
