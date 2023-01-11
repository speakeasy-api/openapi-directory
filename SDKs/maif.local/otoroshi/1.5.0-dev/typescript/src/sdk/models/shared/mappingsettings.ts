import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MappingSettings
/** 
 * Settings to change fields of a JWT token
**/
export class MappingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=map" })
  map: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=remove" })
  remove: string[];

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: Record<string, string>;
}
