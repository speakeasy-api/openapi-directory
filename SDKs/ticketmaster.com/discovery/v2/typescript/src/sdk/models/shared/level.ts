import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Level extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;
}
