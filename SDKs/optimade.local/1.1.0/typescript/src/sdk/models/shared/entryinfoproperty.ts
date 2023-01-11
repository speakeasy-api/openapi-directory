import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EntryInfoProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=sortable" })
  sortable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
