import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GceInstanceFilter } from "./gceinstancefilter";



// ResourceFilter
/** 
 * Message describing resource filters
**/
export class ResourceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gceInstanceFilter" })
  gceInstanceFilter?: GceInstanceFilter;

  @SpeakeasyMetadata({ data: "json, name=inclusionLabels" })
  inclusionLabels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceIdPatterns" })
  resourceIdPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}
