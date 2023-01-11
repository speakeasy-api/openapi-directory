import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteHeaderModifier
/** 
 * The specification for modifying HTTP header in HTTP request and HTTP response.
**/
export class HttpRouteHeaderModifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=remove" })
  remove?: string[];

  @SpeakeasyMetadata({ data: "json, name=set" })
  set?: Record<string, string>;
}
