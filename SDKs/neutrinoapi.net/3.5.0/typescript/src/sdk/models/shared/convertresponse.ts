import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConvertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromType" })
  fromType: string;

  @SpeakeasyMetadata({ data: "json, name=fromValue" })
  fromValue: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: string;

  @SpeakeasyMetadata({ data: "json, name=resultFloat" })
  resultFloat: number;

  @SpeakeasyMetadata({ data: "json, name=toType" })
  toType: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;
}
