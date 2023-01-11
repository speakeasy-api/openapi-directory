import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScriptCompilationError
/** 
 * The error of the compilation of a Script
**/
export class ScriptCompilationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=rawMessage" })
  rawMessage: Record<string, string>;
}
