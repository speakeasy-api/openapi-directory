import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VertexAiParameters
/** 
 * Parameters used in Vertex AI JobType executions.
**/
export class VertexAiParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;
}
