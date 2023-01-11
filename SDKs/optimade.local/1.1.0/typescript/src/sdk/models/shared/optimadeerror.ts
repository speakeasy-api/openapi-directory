import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



// OptimadeErrorErrorLinks
/** 
 * A Links object specific to Error objects
**/
export class OptimadeErrorErrorLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: any;
}


// OptimadeErrorErrorSource
/** 
 * an object containing references to the source of the error
**/
export class OptimadeErrorErrorSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


// OptimadeError
/** 
 * detail MUST be present
**/
export class OptimadeError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: OptimadeErrorErrorLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: OptimadeErrorErrorSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
