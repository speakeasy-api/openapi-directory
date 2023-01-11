import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionalLink
/** 
 * A link to a related resource, or an empty object if there is no resource to link to
**/
export class OptionalLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
