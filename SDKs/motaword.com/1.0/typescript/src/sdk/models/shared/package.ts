import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageStatusEnumEnum } from "./packagestatusenumenum";



export class Package extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PackageStatusEnumEnum;
}
