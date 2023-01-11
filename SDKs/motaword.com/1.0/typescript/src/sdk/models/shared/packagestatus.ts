import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageStatusEnumEnum } from "./packagestatusenumenum";



export class PackageStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PackageStatusEnumEnum;
}
