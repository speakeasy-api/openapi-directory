import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



// WarningsErrorLinks
/** 
 * A Links object specific to Error objects
**/
export class WarningsErrorLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: any;
}


// WarningsErrorSource
/** 
 * an object containing references to the source of the error
**/
export class WarningsErrorSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


// Warnings
/** 
 * OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
 * 
 * From the specification:
 * 
 * A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
 * The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
 * 
 * Note: Must be named "Warnings", since "Warning" is a built-in Python class.
**/
export class Warnings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: WarningsErrorLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: WarningsErrorSource;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
