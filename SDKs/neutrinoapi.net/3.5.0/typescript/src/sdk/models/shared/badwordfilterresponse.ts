import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BadWordFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badWordsList" })
  badWordsList: string[];

  @SpeakeasyMetadata({ data: "json, name=badWordsTotal" })
  badWordsTotal: number;

  @SpeakeasyMetadata({ data: "json, name=censoredContent" })
  censoredContent: string;

  @SpeakeasyMetadata({ data: "json, name=isBad" })
  isBad: boolean;
}
