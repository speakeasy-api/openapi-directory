import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bands } from "./bands";
import { Instruments } from "./instruments";
import { Preview } from "./preview";



// Descriptors
/** 
 * Information about a descriptor
**/
export class Descriptors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average_render_speed" })
  averageRenderSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=bands", elemType: Bands })
  bands?: Bands[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instruments", elemType: Instruments })
  instruments?: Instruments[];

  @SpeakeasyMetadata({ data: "json, name=max_tempo" })
  maxTempo?: number;

  @SpeakeasyMetadata({ data: "json, name=min_tempo" })
  minTempo?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=previews", elemType: Preview })
  previews?: Preview[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
