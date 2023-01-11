import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProofreaderWithLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor_link" })
  vendorLink?: string;
}
