import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OpenAqResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=found" })
  found?: number;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}


export class OpenAqResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: OpenAqResultMeta;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];
}
