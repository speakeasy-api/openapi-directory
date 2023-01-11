import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LicenseEditorialContentSizeEnum {
    Small = "small",
    Medium = "medium",
    Original = "original"
}


// LicenseEditorialContent
/** 
 * Individual editorial content to license
**/
export class LicenseEditorialContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=editorial_id" })
  editorialId: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: LicenseEditorialContentSizeEnum;
}
