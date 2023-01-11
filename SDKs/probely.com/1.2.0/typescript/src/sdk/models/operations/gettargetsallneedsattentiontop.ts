import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsAllNeedsAttentionTop200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=highs" })
  highs?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lows" })
  lows?: number;

  @SpeakeasyMetadata({ data: "json, name=mediums" })
  mediums?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetTargetsAllNeedsAttentionTopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetTargetsAllNeedsAttentionTop200ApplicationJson })
  getTargetsAllNeedsAttentionTop200ApplicationJSONObjects?: GetTargetsAllNeedsAttentionTop200ApplicationJson[];
}
