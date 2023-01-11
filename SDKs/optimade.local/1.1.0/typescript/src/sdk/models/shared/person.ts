import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Person
/** 
 * A person, i.e., an author, editor or other.
**/
export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
