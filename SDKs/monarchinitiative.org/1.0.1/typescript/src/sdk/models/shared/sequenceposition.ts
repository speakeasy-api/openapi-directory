import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SequencePosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;
}
