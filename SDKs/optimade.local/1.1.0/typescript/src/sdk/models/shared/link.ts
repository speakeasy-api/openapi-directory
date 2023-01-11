import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Link
/** 
 * A link **MUST** be represented as either: a string containing the link's URL or a link object.
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}
