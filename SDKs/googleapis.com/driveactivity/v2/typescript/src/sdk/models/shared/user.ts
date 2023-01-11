import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KnownUser } from "./knownuser";



// User
/** 
 * Information about an end user.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedUser" })
  deletedUser?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=knownUser" })
  knownUser?: KnownUser;

  @SpeakeasyMetadata({ data: "json, name=unknownUser" })
  unknownUser?: Record<string, any>;
}
