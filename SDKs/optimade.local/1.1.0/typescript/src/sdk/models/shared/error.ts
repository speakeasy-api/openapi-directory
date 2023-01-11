import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



// ErrorErrorLinks
/** 
 * A Links object specific to Error objects
**/
export class ErrorErrorLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: any;
}


// ErrorErrorSource
/** 
 * an object containing references to the source of the error
**/
export class ErrorErrorSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


// ErrorT
/** 
 * An error response
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ErrorErrorLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ErrorErrorSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
