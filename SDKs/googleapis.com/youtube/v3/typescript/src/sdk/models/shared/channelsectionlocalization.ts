import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelSectionLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
