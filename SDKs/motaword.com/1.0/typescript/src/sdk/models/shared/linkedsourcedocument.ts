import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LinkedSourceDocumentSourceEnum {
    Dropbox = "dropbox",
    Googledrive = "googledrive",
    Icloud = "icloud"
}


export class LinkedSourceDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: LinkedSourceDocumentSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
