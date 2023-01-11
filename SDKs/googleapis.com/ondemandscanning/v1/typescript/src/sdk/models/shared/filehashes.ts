import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";



export class FileHashes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileHash", elemType: Hash })
  fileHash?: Hash[];
}
