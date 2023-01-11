import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailableApiVersion } from "./availableapiversion";



// BaseInfoAttributes
/** 
 * Attributes for Base URL Info endpoint
**/
export class BaseInfoAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "json, name=available_api_versions", elemType: AvailableApiVersion })
  availableApiVersions: AvailableApiVersion[];

  @SpeakeasyMetadata({ data: "json, name=available_endpoints" })
  availableEndpoints: string[];

  @SpeakeasyMetadata({ data: "json, name=entry_types_by_format" })
  entryTypesByFormat: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=formats" })
  formats?: string[];

  @SpeakeasyMetadata({ data: "json, name=is_index" })
  isIndex?: boolean;
}
