import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IcNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IC" })
  ic?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
