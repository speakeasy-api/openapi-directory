import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetTargetsAllNeedsAttentionPie200ApplicationJson0
/** 
 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
 * 
**/
export class GetTargetsAllNeedsAttentionPie200ApplicationJson0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: string;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;

  @SpeakeasyMetadata({ data: "json, name=2" })
  two?: string;
}


// GetTargetsAllNeedsAttentionPie200ApplicationJson1
/** 
 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
 * 
**/
export class GetTargetsAllNeedsAttentionPie200ApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: string;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;

  @SpeakeasyMetadata({ data: "json, name=2" })
  two?: string;
}


export class GetTargetsAllNeedsAttentionPie200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: GetTargetsAllNeedsAttentionPie200ApplicationJson0;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: GetTargetsAllNeedsAttentionPie200ApplicationJson1;
}


export class GetTargetsAllNeedsAttentionPieResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsAllNeedsAttentionPie200ApplicationJSONObject?: GetTargetsAllNeedsAttentionPie200ApplicationJson;
}
